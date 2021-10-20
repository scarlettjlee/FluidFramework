/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */

import * as fs from "fs";
import { PackageDetails } from "./packageJson";
import { generateTypeDataForProject, toTypeString, TypeData } from "./typeData";

export function generateTests(packageDetails: PackageDetails) {

    const currentProjectData = generateTypeDataForProject(packageDetails.packageDir, undefined);

    let indexPath = "../..";

    for(const oldVersion of packageDetails.oldVersions){
            const testString: string[]=[
`/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */
/*
 * THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
 * Generated by fluid-type-validator in @fluidframework/build-tools.
 */
import * as old from "${oldVersion}";
import * as current from "${indexPath}/index";
`
            ];
        const oldProjectData = generateTypeDataForProject(packageDetails.packageDir, oldVersion);
        const currentTypeMap = new Map<string, TypeData>(currentProjectData.typeData.map((v)=>[getFullTypeName(v),v]));
        for(const oldTypeData of oldProjectData.typeData){
            const oldType: TestCaseTypeData = {
                prefix: "old",
                ... oldTypeData,
            }
            const currentTypeData = currentTypeMap.get(getFullTypeName(oldTypeData));
            // if the current package is missing a type, we will use the old type data.
            // this can represent a breaking change which can be disable in the package.json.
            // this can also happen for type changes, like type to interface, which can remain
            // compatible.
            const currentType: TestCaseTypeData = currentTypeData === undefined
            ?{
                prefix: "current",
                ... oldTypeData,
                kind:`Removed${oldTypeData.kind}`,
            }
            :{
                prefix: "current",
                ... currentTypeData,
            };
            const brokenData = currentProjectData.packageDetails.broken?.[oldProjectData.packageDetails.version]?.[getFullTypeName(currentType)];

            testString.push(`/*`)
            testString.push(`* Validate forward compat by using old type in place of current type`);
            testString.push(`* If breaking change required, add in package.json under typeValidation.broken.${oldProjectData.packageDetails.version}:`);
            testString.push(`* "${getFullTypeName(currentType)}": {"forwardCompat": false}`);
            const forwarCompatCase = buildTestCase(oldType, currentType);
            if(brokenData?.forwardCompat !== false){
                testString.push("*/");
                testString.push(... forwarCompatCase);
            }else{
                testString.push(... forwarCompatCase);
                testString.push("*/");
            }
            testString.push("");

            testString.push(`/*`)
            testString.push(`* Validate back compat by using current type in place of old type`);
            testString.push(`* If breaking change required, add in package.json under typeValidation.broken.${oldProjectData.packageDetails.version}:`);
            testString.push(`* "${getFullTypeName(currentType)}": {"backCompat": false}`);
            const backCompatCase = buildTestCase(currentType, oldType);
            if(brokenData?.backCompat !== false){
                testString.push("*/");
                testString.push(... backCompatCase)
            }else{
                testString.push(... backCompatCase);
                testString.push("*/");
            }
            testString.push("");
        }
        const testPath =`${packageDetails.packageDir}/src/test/types`;
        if(!fs.existsSync(testPath)){
            fs.mkdirSync(testPath);
        }

        fs.writeFileSync(
            `${testPath}/validate${oldProjectData.packageDetails.version}.ts`,
            testString.join("\n"));
    }
}


interface TestCaseTypeData extends TypeData{
    prefix: "old" | "current"
}

function buildTestCase(getAsType:TestCaseTypeData, useType:TestCaseTypeData){
    const getSig =`get_${getAsType.prefix}_${getFullTypeName(getAsType)}`;
    const useSig =`use_${useType.prefix}_${getFullTypeName(useType)}`;
    const testString: string[] =[];
    testString.push(`declare function ${getSig}():\n    ${toTypeString(getAsType.prefix, getAsType)};`);
    testString.push(`declare function ${useSig}(\n    use: ${toTypeString(useType.prefix, useType)});`);
    testString.push(`${useSig}(\n    ${getSig}());`)
    return testString
}

function getFullTypeName(typeData: TypeData){
    return `${typeData.kind}_${typeData.name}`
}
