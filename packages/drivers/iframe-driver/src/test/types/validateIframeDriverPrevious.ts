/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */
/*
 * THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
 * Generated by fluid-type-validator in @fluidframework/build-tools.
 */
/* eslint-disable max-lines */
import * as old from "@fluidframework/iframe-driver-previous";
import * as current from "../../index";

type TypeOnly<T> = {
    [P in keyof T]: TypeOnly<T[P]>;
};

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_DocumentServiceFactoryProxy": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_DocumentServiceFactoryProxy():
    TypeOnly<old.DocumentServiceFactoryProxy>;
declare function use_current_ClassDeclaration_DocumentServiceFactoryProxy(
    use: TypeOnly<current.DocumentServiceFactoryProxy>);
use_current_ClassDeclaration_DocumentServiceFactoryProxy(
    get_old_ClassDeclaration_DocumentServiceFactoryProxy());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_DocumentServiceFactoryProxy": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_DocumentServiceFactoryProxy():
    TypeOnly<current.DocumentServiceFactoryProxy>;
declare function use_old_ClassDeclaration_DocumentServiceFactoryProxy(
    use: TypeOnly<old.DocumentServiceFactoryProxy>);
use_old_ClassDeclaration_DocumentServiceFactoryProxy(
    // @ts-expect-error compatibility expected to be broken
    get_current_ClassDeclaration_DocumentServiceFactoryProxy());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ICombinedDriver": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_ICombinedDriver():
    TypeOnly<old.ICombinedDriver>;
declare function use_current_InterfaceDeclaration_ICombinedDriver(
    use: TypeOnly<current.ICombinedDriver>);
use_current_InterfaceDeclaration_ICombinedDriver(
    get_old_InterfaceDeclaration_ICombinedDriver());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ICombinedDriver": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_ICombinedDriver():
    TypeOnly<current.ICombinedDriver>;
declare function use_old_InterfaceDeclaration_ICombinedDriver(
    use: TypeOnly<old.ICombinedDriver>);
use_old_InterfaceDeclaration_ICombinedDriver(
    // @ts-expect-error compatibility expected to be broken
    get_current_InterfaceDeclaration_ICombinedDriver());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IDocumentServiceFactoryProxy": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IDocumentServiceFactoryProxy():
    TypeOnly<old.IDocumentServiceFactoryProxy>;
declare function use_current_InterfaceDeclaration_IDocumentServiceFactoryProxy(
    use: TypeOnly<current.IDocumentServiceFactoryProxy>);
use_current_InterfaceDeclaration_IDocumentServiceFactoryProxy(
    get_old_InterfaceDeclaration_IDocumentServiceFactoryProxy());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IDocumentServiceFactoryProxy": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IDocumentServiceFactoryProxy():
    TypeOnly<current.IDocumentServiceFactoryProxy>;
declare function use_old_InterfaceDeclaration_IDocumentServiceFactoryProxy(
    use: TypeOnly<old.IDocumentServiceFactoryProxy>);
use_old_InterfaceDeclaration_IDocumentServiceFactoryProxy(
    // @ts-expect-error compatibility expected to be broken
    get_current_InterfaceDeclaration_IDocumentServiceFactoryProxy());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "VariableDeclaration_IDocumentServiceFactoryProxyKey": {"forwardCompat": false}
*/
declare function get_old_VariableDeclaration_IDocumentServiceFactoryProxyKey():
    TypeOnly<typeof old.IDocumentServiceFactoryProxyKey>;
declare function use_current_VariableDeclaration_IDocumentServiceFactoryProxyKey(
    use: TypeOnly<typeof current.IDocumentServiceFactoryProxyKey>);
use_current_VariableDeclaration_IDocumentServiceFactoryProxyKey(
    get_old_VariableDeclaration_IDocumentServiceFactoryProxyKey());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "VariableDeclaration_IDocumentServiceFactoryProxyKey": {"backCompat": false}
*/
declare function get_current_VariableDeclaration_IDocumentServiceFactoryProxyKey():
    TypeOnly<typeof current.IDocumentServiceFactoryProxyKey>;
declare function use_old_VariableDeclaration_IDocumentServiceFactoryProxyKey(
    use: TypeOnly<typeof old.IDocumentServiceFactoryProxyKey>);
use_old_VariableDeclaration_IDocumentServiceFactoryProxyKey(
    get_current_VariableDeclaration_IDocumentServiceFactoryProxyKey());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_InnerDocumentDeltaConnection": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_InnerDocumentDeltaConnection():
    TypeOnly<old.InnerDocumentDeltaConnection>;
declare function use_current_ClassDeclaration_InnerDocumentDeltaConnection(
    use: TypeOnly<current.InnerDocumentDeltaConnection>);
use_current_ClassDeclaration_InnerDocumentDeltaConnection(
    get_old_ClassDeclaration_InnerDocumentDeltaConnection());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_InnerDocumentDeltaConnection": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_InnerDocumentDeltaConnection():
    TypeOnly<current.InnerDocumentDeltaConnection>;
declare function use_old_ClassDeclaration_InnerDocumentDeltaConnection(
    use: TypeOnly<old.InnerDocumentDeltaConnection>);
use_old_ClassDeclaration_InnerDocumentDeltaConnection(
    get_current_ClassDeclaration_InnerDocumentDeltaConnection());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_InnerDocumentService": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_InnerDocumentService():
    TypeOnly<old.InnerDocumentService>;
declare function use_current_ClassDeclaration_InnerDocumentService(
    use: TypeOnly<current.InnerDocumentService>);
use_current_ClassDeclaration_InnerDocumentService(
    get_old_ClassDeclaration_InnerDocumentService());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_InnerDocumentService": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_InnerDocumentService():
    TypeOnly<current.InnerDocumentService>;
declare function use_old_ClassDeclaration_InnerDocumentService(
    use: TypeOnly<old.InnerDocumentService>);
use_old_ClassDeclaration_InnerDocumentService(
    get_current_ClassDeclaration_InnerDocumentService());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_InnerDocumentServiceFactory": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_InnerDocumentServiceFactory():
    TypeOnly<old.InnerDocumentServiceFactory>;
declare function use_current_ClassDeclaration_InnerDocumentServiceFactory(
    use: TypeOnly<current.InnerDocumentServiceFactory>);
use_current_ClassDeclaration_InnerDocumentServiceFactory(
    get_old_ClassDeclaration_InnerDocumentServiceFactory());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_InnerDocumentServiceFactory": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_InnerDocumentServiceFactory():
    TypeOnly<current.InnerDocumentServiceFactory>;
declare function use_old_ClassDeclaration_InnerDocumentServiceFactory(
    use: TypeOnly<old.InnerDocumentServiceFactory>);
use_old_ClassDeclaration_InnerDocumentServiceFactory(
    get_current_ClassDeclaration_InnerDocumentServiceFactory());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_InnerUrlResolver": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_InnerUrlResolver():
    TypeOnly<old.InnerUrlResolver>;
declare function use_current_ClassDeclaration_InnerUrlResolver(
    use: TypeOnly<current.InnerUrlResolver>);
use_current_ClassDeclaration_InnerUrlResolver(
    get_old_ClassDeclaration_InnerUrlResolver());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_InnerUrlResolver": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_InnerUrlResolver():
    TypeOnly<current.InnerUrlResolver>;
declare function use_old_ClassDeclaration_InnerUrlResolver(
    use: TypeOnly<old.InnerUrlResolver>);
use_old_ClassDeclaration_InnerUrlResolver(
    get_current_ClassDeclaration_InnerUrlResolver());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IOuterDocumentDeltaConnectionProxy": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IOuterDocumentDeltaConnectionProxy():
    TypeOnly<old.IOuterDocumentDeltaConnectionProxy>;
declare function use_current_InterfaceDeclaration_IOuterDocumentDeltaConnectionProxy(
    use: TypeOnly<current.IOuterDocumentDeltaConnectionProxy>);
use_current_InterfaceDeclaration_IOuterDocumentDeltaConnectionProxy(
    get_old_InterfaceDeclaration_IOuterDocumentDeltaConnectionProxy());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IOuterDocumentDeltaConnectionProxy": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IOuterDocumentDeltaConnectionProxy():
    TypeOnly<current.IOuterDocumentDeltaConnectionProxy>;
declare function use_old_InterfaceDeclaration_IOuterDocumentDeltaConnectionProxy(
    use: TypeOnly<old.IOuterDocumentDeltaConnectionProxy>);
use_old_InterfaceDeclaration_IOuterDocumentDeltaConnectionProxy(
    get_current_InterfaceDeclaration_IOuterDocumentDeltaConnectionProxy());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IUrlResolverProxy": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IUrlResolverProxy():
    TypeOnly<old.IUrlResolverProxy>;
declare function use_current_InterfaceDeclaration_IUrlResolverProxy(
    use: TypeOnly<current.IUrlResolverProxy>);
use_current_InterfaceDeclaration_IUrlResolverProxy(
    get_old_InterfaceDeclaration_IUrlResolverProxy());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IUrlResolverProxy": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IUrlResolverProxy():
    TypeOnly<current.IUrlResolverProxy>;
declare function use_old_InterfaceDeclaration_IUrlResolverProxy(
    use: TypeOnly<old.IUrlResolverProxy>);
use_old_InterfaceDeclaration_IUrlResolverProxy(
    get_current_InterfaceDeclaration_IUrlResolverProxy());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "VariableDeclaration_IUrlResolverProxyKey": {"forwardCompat": false}
*/
declare function get_old_VariableDeclaration_IUrlResolverProxyKey():
    TypeOnly<typeof old.IUrlResolverProxyKey>;
declare function use_current_VariableDeclaration_IUrlResolverProxyKey(
    use: TypeOnly<typeof current.IUrlResolverProxyKey>);
use_current_VariableDeclaration_IUrlResolverProxyKey(
    get_old_VariableDeclaration_IUrlResolverProxyKey());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "VariableDeclaration_IUrlResolverProxyKey": {"backCompat": false}
*/
declare function get_current_VariableDeclaration_IUrlResolverProxyKey():
    TypeOnly<typeof current.IUrlResolverProxyKey>;
declare function use_old_VariableDeclaration_IUrlResolverProxyKey(
    use: TypeOnly<typeof old.IUrlResolverProxyKey>);
use_old_VariableDeclaration_IUrlResolverProxyKey(
    get_current_VariableDeclaration_IUrlResolverProxyKey());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_OuterUrlResolver": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_OuterUrlResolver():
    TypeOnly<old.OuterUrlResolver>;
declare function use_current_ClassDeclaration_OuterUrlResolver(
    use: TypeOnly<current.OuterUrlResolver>);
use_current_ClassDeclaration_OuterUrlResolver(
    get_old_ClassDeclaration_OuterUrlResolver());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_OuterUrlResolver": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_OuterUrlResolver():
    TypeOnly<current.OuterUrlResolver>;
declare function use_old_ClassDeclaration_OuterUrlResolver(
    use: TypeOnly<old.OuterUrlResolver>);
use_old_ClassDeclaration_OuterUrlResolver(
    get_current_ClassDeclaration_OuterUrlResolver());
