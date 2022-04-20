/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */
/*
 * THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
 * Generated by fluid-type-validator in @fluidframework/build-tools.
 */
/* eslint-disable max-lines */
import * as old from "@fluidframework/core-interfaces-previous";
import * as current from "../../index";

type TypeOnly<T> = {
    [P in keyof T]: TypeOnly<T[P]>;
};

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "TypeAliasDeclaration_FluidObject": {"forwardCompat": false}
*/
declare function get_old_TypeAliasDeclaration_FluidObject():
    TypeOnly<old.FluidObject>;
declare function use_current_TypeAliasDeclaration_FluidObject(
    use: TypeOnly<current.FluidObject>);
use_current_TypeAliasDeclaration_FluidObject(
    get_old_TypeAliasDeclaration_FluidObject());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "TypeAliasDeclaration_FluidObject": {"backCompat": false}
*/
declare function get_current_TypeAliasDeclaration_FluidObject():
    TypeOnly<current.FluidObject>;
declare function use_old_TypeAliasDeclaration_FluidObject(
    use: TypeOnly<old.FluidObject>);
use_old_TypeAliasDeclaration_FluidObject(
    get_current_TypeAliasDeclaration_FluidObject());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "TypeAliasDeclaration_FluidObjectKeys": {"forwardCompat": false}
*/
declare function get_old_TypeAliasDeclaration_FluidObjectKeys():
    TypeOnly<old.FluidObjectKeys<any>>;
declare function use_current_TypeAliasDeclaration_FluidObjectKeys(
    use: TypeOnly<current.FluidObjectKeys<any>>);
use_current_TypeAliasDeclaration_FluidObjectKeys(
    get_old_TypeAliasDeclaration_FluidObjectKeys());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "TypeAliasDeclaration_FluidObjectKeys": {"backCompat": false}
*/
declare function get_current_TypeAliasDeclaration_FluidObjectKeys():
    TypeOnly<current.FluidObjectKeys<any>>;
declare function use_old_TypeAliasDeclaration_FluidObjectKeys(
    use: TypeOnly<old.FluidObjectKeys<any>>);
use_old_TypeAliasDeclaration_FluidObjectKeys(
    get_current_TypeAliasDeclaration_FluidObjectKeys());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "TypeAliasDeclaration_FluidObjectProviderKeys": {"forwardCompat": false}
*/
declare function get_old_TypeAliasDeclaration_FluidObjectProviderKeys():
    TypeOnly<old.FluidObjectProviderKeys<any,any>>;
declare function use_current_TypeAliasDeclaration_FluidObjectProviderKeys(
    use: TypeOnly<current.FluidObjectProviderKeys<any,any>>);
use_current_TypeAliasDeclaration_FluidObjectProviderKeys(
    get_old_TypeAliasDeclaration_FluidObjectProviderKeys());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "TypeAliasDeclaration_FluidObjectProviderKeys": {"backCompat": false}
*/
declare function get_current_TypeAliasDeclaration_FluidObjectProviderKeys():
    TypeOnly<current.FluidObjectProviderKeys<any,any>>;
declare function use_old_TypeAliasDeclaration_FluidObjectProviderKeys(
    use: TypeOnly<old.FluidObjectProviderKeys<any,any>>);
use_old_TypeAliasDeclaration_FluidObjectProviderKeys(
    get_current_TypeAliasDeclaration_FluidObjectProviderKeys());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IFluidCodeDetails": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IFluidCodeDetails():
    TypeOnly<old.IFluidCodeDetails>;
declare function use_current_InterfaceDeclaration_IFluidCodeDetails(
    use: TypeOnly<current.IFluidCodeDetails>);
use_current_InterfaceDeclaration_IFluidCodeDetails(
    get_old_InterfaceDeclaration_IFluidCodeDetails());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IFluidCodeDetails": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IFluidCodeDetails():
    TypeOnly<current.IFluidCodeDetails>;
declare function use_old_InterfaceDeclaration_IFluidCodeDetails(
    use: TypeOnly<old.IFluidCodeDetails>);
use_old_InterfaceDeclaration_IFluidCodeDetails(
    get_current_InterfaceDeclaration_IFluidCodeDetails());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "VariableDeclaration_IFluidCodeDetailsComparer": {"forwardCompat": false}
*/
declare function get_old_VariableDeclaration_IFluidCodeDetailsComparer():
    TypeOnly<typeof old.IFluidCodeDetailsComparer>;
declare function use_current_VariableDeclaration_IFluidCodeDetailsComparer(
    use: TypeOnly<typeof current.IFluidCodeDetailsComparer>);
use_current_VariableDeclaration_IFluidCodeDetailsComparer(
    get_old_VariableDeclaration_IFluidCodeDetailsComparer());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "VariableDeclaration_IFluidCodeDetailsComparer": {"backCompat": false}
*/
declare function get_current_VariableDeclaration_IFluidCodeDetailsComparer():
    TypeOnly<typeof current.IFluidCodeDetailsComparer>;
declare function use_old_VariableDeclaration_IFluidCodeDetailsComparer(
    use: TypeOnly<typeof old.IFluidCodeDetailsComparer>);
use_old_VariableDeclaration_IFluidCodeDetailsComparer(
    get_current_VariableDeclaration_IFluidCodeDetailsComparer());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IFluidCodeDetailsComparer": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IFluidCodeDetailsComparer():
    TypeOnly<old.IFluidCodeDetailsComparer>;
declare function use_current_InterfaceDeclaration_IFluidCodeDetailsComparer(
    use: TypeOnly<current.IFluidCodeDetailsComparer>);
use_current_InterfaceDeclaration_IFluidCodeDetailsComparer(
    get_old_InterfaceDeclaration_IFluidCodeDetailsComparer());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IFluidCodeDetailsComparer": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IFluidCodeDetailsComparer():
    TypeOnly<current.IFluidCodeDetailsComparer>;
declare function use_old_InterfaceDeclaration_IFluidCodeDetailsComparer(
    use: TypeOnly<old.IFluidCodeDetailsComparer>);
use_old_InterfaceDeclaration_IFluidCodeDetailsComparer(
    get_current_InterfaceDeclaration_IFluidCodeDetailsComparer());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IFluidCodeDetailsConfig": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IFluidCodeDetailsConfig():
    TypeOnly<old.IFluidCodeDetailsConfig>;
declare function use_current_InterfaceDeclaration_IFluidCodeDetailsConfig(
    use: TypeOnly<current.IFluidCodeDetailsConfig>);
use_current_InterfaceDeclaration_IFluidCodeDetailsConfig(
    get_old_InterfaceDeclaration_IFluidCodeDetailsConfig());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IFluidCodeDetailsConfig": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IFluidCodeDetailsConfig():
    TypeOnly<current.IFluidCodeDetailsConfig>;
declare function use_old_InterfaceDeclaration_IFluidCodeDetailsConfig(
    use: TypeOnly<old.IFluidCodeDetailsConfig>);
use_old_InterfaceDeclaration_IFluidCodeDetailsConfig(
    get_current_InterfaceDeclaration_IFluidCodeDetailsConfig());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "VariableDeclaration_IFluidHandle": {"forwardCompat": false}
*/
declare function get_old_VariableDeclaration_IFluidHandle():
    TypeOnly<typeof old.IFluidHandle>;
declare function use_current_VariableDeclaration_IFluidHandle(
    use: TypeOnly<typeof current.IFluidHandle>);
use_current_VariableDeclaration_IFluidHandle(
    get_old_VariableDeclaration_IFluidHandle());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "VariableDeclaration_IFluidHandle": {"backCompat": false}
*/
declare function get_current_VariableDeclaration_IFluidHandle():
    TypeOnly<typeof current.IFluidHandle>;
declare function use_old_VariableDeclaration_IFluidHandle(
    use: TypeOnly<typeof old.IFluidHandle>);
use_old_VariableDeclaration_IFluidHandle(
    get_current_VariableDeclaration_IFluidHandle());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IFluidHandle": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IFluidHandle():
    TypeOnly<old.IFluidHandle>;
declare function use_current_InterfaceDeclaration_IFluidHandle(
    use: TypeOnly<current.IFluidHandle>);
use_current_InterfaceDeclaration_IFluidHandle(
    get_old_InterfaceDeclaration_IFluidHandle());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IFluidHandle": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IFluidHandle():
    TypeOnly<current.IFluidHandle>;
declare function use_old_InterfaceDeclaration_IFluidHandle(
    use: TypeOnly<old.IFluidHandle>);
use_old_InterfaceDeclaration_IFluidHandle(
    get_current_InterfaceDeclaration_IFluidHandle());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "VariableDeclaration_IFluidHandleContext": {"forwardCompat": false}
*/
declare function get_old_VariableDeclaration_IFluidHandleContext():
    TypeOnly<typeof old.IFluidHandleContext>;
declare function use_current_VariableDeclaration_IFluidHandleContext(
    use: TypeOnly<typeof current.IFluidHandleContext>);
use_current_VariableDeclaration_IFluidHandleContext(
    get_old_VariableDeclaration_IFluidHandleContext());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "VariableDeclaration_IFluidHandleContext": {"backCompat": false}
*/
declare function get_current_VariableDeclaration_IFluidHandleContext():
    TypeOnly<typeof current.IFluidHandleContext>;
declare function use_old_VariableDeclaration_IFluidHandleContext(
    use: TypeOnly<typeof old.IFluidHandleContext>);
use_old_VariableDeclaration_IFluidHandleContext(
    get_current_VariableDeclaration_IFluidHandleContext());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IFluidHandleContext": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IFluidHandleContext():
    TypeOnly<old.IFluidHandleContext>;
declare function use_current_InterfaceDeclaration_IFluidHandleContext(
    use: TypeOnly<current.IFluidHandleContext>);
use_current_InterfaceDeclaration_IFluidHandleContext(
    get_old_InterfaceDeclaration_IFluidHandleContext());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IFluidHandleContext": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IFluidHandleContext():
    TypeOnly<current.IFluidHandleContext>;
declare function use_old_InterfaceDeclaration_IFluidHandleContext(
    use: TypeOnly<old.IFluidHandleContext>);
use_old_InterfaceDeclaration_IFluidHandleContext(
    get_current_InterfaceDeclaration_IFluidHandleContext());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "VariableDeclaration_IFluidLoadable": {"forwardCompat": false}
*/
declare function get_old_VariableDeclaration_IFluidLoadable():
    TypeOnly<typeof old.IFluidLoadable>;
declare function use_current_VariableDeclaration_IFluidLoadable(
    use: TypeOnly<typeof current.IFluidLoadable>);
use_current_VariableDeclaration_IFluidLoadable(
    get_old_VariableDeclaration_IFluidLoadable());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "VariableDeclaration_IFluidLoadable": {"backCompat": false}
*/
declare function get_current_VariableDeclaration_IFluidLoadable():
    TypeOnly<typeof current.IFluidLoadable>;
declare function use_old_VariableDeclaration_IFluidLoadable(
    use: TypeOnly<typeof old.IFluidLoadable>);
use_old_VariableDeclaration_IFluidLoadable(
    get_current_VariableDeclaration_IFluidLoadable());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IFluidLoadable": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IFluidLoadable():
    TypeOnly<old.IFluidLoadable>;
declare function use_current_InterfaceDeclaration_IFluidLoadable(
    use: TypeOnly<current.IFluidLoadable>);
use_current_InterfaceDeclaration_IFluidLoadable(
    get_old_InterfaceDeclaration_IFluidLoadable());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IFluidLoadable": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IFluidLoadable():
    TypeOnly<current.IFluidLoadable>;
declare function use_old_InterfaceDeclaration_IFluidLoadable(
    use: TypeOnly<old.IFluidLoadable>);
use_old_InterfaceDeclaration_IFluidLoadable(
    get_current_InterfaceDeclaration_IFluidLoadable());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IFluidObject": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IFluidObject():
    TypeOnly<old.IFluidObject>;
declare function use_current_InterfaceDeclaration_IFluidObject(
    use: TypeOnly<current.IFluidObject>);
use_current_InterfaceDeclaration_IFluidObject(
    get_old_InterfaceDeclaration_IFluidObject());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IFluidObject": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IFluidObject():
    TypeOnly<current.IFluidObject>;
declare function use_old_InterfaceDeclaration_IFluidObject(
    use: TypeOnly<old.IFluidObject>);
use_old_InterfaceDeclaration_IFluidObject(
    get_current_InterfaceDeclaration_IFluidObject());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IFluidPackage": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IFluidPackage():
    TypeOnly<old.IFluidPackage>;
declare function use_current_InterfaceDeclaration_IFluidPackage(
    use: TypeOnly<current.IFluidPackage>);
use_current_InterfaceDeclaration_IFluidPackage(
    get_old_InterfaceDeclaration_IFluidPackage());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IFluidPackage": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IFluidPackage():
    TypeOnly<current.IFluidPackage>;
declare function use_old_InterfaceDeclaration_IFluidPackage(
    use: TypeOnly<old.IFluidPackage>);
use_old_InterfaceDeclaration_IFluidPackage(
    get_current_InterfaceDeclaration_IFluidPackage());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IFluidPackageEnvironment": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IFluidPackageEnvironment():
    TypeOnly<old.IFluidPackageEnvironment>;
declare function use_current_InterfaceDeclaration_IFluidPackageEnvironment(
    use: TypeOnly<current.IFluidPackageEnvironment>);
use_current_InterfaceDeclaration_IFluidPackageEnvironment(
    get_old_InterfaceDeclaration_IFluidPackageEnvironment());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IFluidPackageEnvironment": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IFluidPackageEnvironment():
    TypeOnly<current.IFluidPackageEnvironment>;
declare function use_old_InterfaceDeclaration_IFluidPackageEnvironment(
    use: TypeOnly<old.IFluidPackageEnvironment>);
use_old_InterfaceDeclaration_IFluidPackageEnvironment(
    get_current_InterfaceDeclaration_IFluidPackageEnvironment());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "VariableDeclaration_IFluidRouter": {"forwardCompat": false}
*/
declare function get_old_VariableDeclaration_IFluidRouter():
    TypeOnly<typeof old.IFluidRouter>;
declare function use_current_VariableDeclaration_IFluidRouter(
    use: TypeOnly<typeof current.IFluidRouter>);
use_current_VariableDeclaration_IFluidRouter(
    get_old_VariableDeclaration_IFluidRouter());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "VariableDeclaration_IFluidRouter": {"backCompat": false}
*/
declare function get_current_VariableDeclaration_IFluidRouter():
    TypeOnly<typeof current.IFluidRouter>;
declare function use_old_VariableDeclaration_IFluidRouter(
    use: TypeOnly<typeof old.IFluidRouter>);
use_old_VariableDeclaration_IFluidRouter(
    get_current_VariableDeclaration_IFluidRouter());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IFluidRouter": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IFluidRouter():
    TypeOnly<old.IFluidRouter>;
declare function use_current_InterfaceDeclaration_IFluidRouter(
    use: TypeOnly<current.IFluidRouter>);
use_current_InterfaceDeclaration_IFluidRouter(
    get_old_InterfaceDeclaration_IFluidRouter());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IFluidRouter": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IFluidRouter():
    TypeOnly<current.IFluidRouter>;
declare function use_old_InterfaceDeclaration_IFluidRouter(
    use: TypeOnly<old.IFluidRouter>);
use_old_InterfaceDeclaration_IFluidRouter(
    get_current_InterfaceDeclaration_IFluidRouter());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "VariableDeclaration_IFluidRunnable": {"forwardCompat": false}
*/
declare function get_old_VariableDeclaration_IFluidRunnable():
    TypeOnly<typeof old.IFluidRunnable>;
declare function use_current_VariableDeclaration_IFluidRunnable(
    use: TypeOnly<typeof current.IFluidRunnable>);
use_current_VariableDeclaration_IFluidRunnable(
    get_old_VariableDeclaration_IFluidRunnable());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "VariableDeclaration_IFluidRunnable": {"backCompat": false}
*/
declare function get_current_VariableDeclaration_IFluidRunnable():
    TypeOnly<typeof current.IFluidRunnable>;
declare function use_old_VariableDeclaration_IFluidRunnable(
    use: TypeOnly<typeof old.IFluidRunnable>);
use_old_VariableDeclaration_IFluidRunnable(
    get_current_VariableDeclaration_IFluidRunnable());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IFluidRunnable": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IFluidRunnable():
    TypeOnly<old.IFluidRunnable>;
declare function use_current_InterfaceDeclaration_IFluidRunnable(
    use: TypeOnly<current.IFluidRunnable>);
use_current_InterfaceDeclaration_IFluidRunnable(
    get_old_InterfaceDeclaration_IFluidRunnable());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IFluidRunnable": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IFluidRunnable():
    TypeOnly<current.IFluidRunnable>;
declare function use_old_InterfaceDeclaration_IFluidRunnable(
    use: TypeOnly<old.IFluidRunnable>);
use_old_InterfaceDeclaration_IFluidRunnable(
    get_current_InterfaceDeclaration_IFluidRunnable());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "RemovedVariableDeclaration_IFluidSerializer": {"forwardCompat": false}
*/
declare function get_old_VariableDeclaration_IFluidSerializer():
    TypeOnly<typeof old.IFluidSerializer>;
declare function use_current_RemovedVariableDeclaration_IFluidSerializer(
    // @ts-expect-error compatibility expected to be broken
    use: TypeOnly<typeof current.IFluidSerializer>);
use_current_RemovedVariableDeclaration_IFluidSerializer(
    get_old_VariableDeclaration_IFluidSerializer());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "RemovedVariableDeclaration_IFluidSerializer": {"backCompat": false}
*/
declare function get_current_RemovedVariableDeclaration_IFluidSerializer():
    // @ts-expect-error compatibility expected to be broken
    TypeOnly<typeof current.IFluidSerializer>;
declare function use_old_VariableDeclaration_IFluidSerializer(
    use: TypeOnly<typeof old.IFluidSerializer>);
use_old_VariableDeclaration_IFluidSerializer(
    get_current_RemovedVariableDeclaration_IFluidSerializer());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "RemovedInterfaceDeclaration_IFluidSerializer": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IFluidSerializer():
    TypeOnly<old.IFluidSerializer>;
declare function use_current_RemovedInterfaceDeclaration_IFluidSerializer(
    // @ts-expect-error compatibility expected to be broken
    use: TypeOnly<current.IFluidSerializer>);
use_current_RemovedInterfaceDeclaration_IFluidSerializer(
    get_old_InterfaceDeclaration_IFluidSerializer());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "RemovedInterfaceDeclaration_IFluidSerializer": {"backCompat": false}
*/
declare function get_current_RemovedInterfaceDeclaration_IFluidSerializer():
    // @ts-expect-error compatibility expected to be broken
    TypeOnly<current.IFluidSerializer>;
declare function use_old_InterfaceDeclaration_IFluidSerializer(
    use: TypeOnly<old.IFluidSerializer>);
use_old_InterfaceDeclaration_IFluidSerializer(
    get_current_RemovedInterfaceDeclaration_IFluidSerializer());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IProvideFluidCodeDetailsComparer": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IProvideFluidCodeDetailsComparer():
    TypeOnly<old.IProvideFluidCodeDetailsComparer>;
declare function use_current_InterfaceDeclaration_IProvideFluidCodeDetailsComparer(
    use: TypeOnly<current.IProvideFluidCodeDetailsComparer>);
use_current_InterfaceDeclaration_IProvideFluidCodeDetailsComparer(
    get_old_InterfaceDeclaration_IProvideFluidCodeDetailsComparer());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IProvideFluidCodeDetailsComparer": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IProvideFluidCodeDetailsComparer():
    TypeOnly<current.IProvideFluidCodeDetailsComparer>;
declare function use_old_InterfaceDeclaration_IProvideFluidCodeDetailsComparer(
    use: TypeOnly<old.IProvideFluidCodeDetailsComparer>);
use_old_InterfaceDeclaration_IProvideFluidCodeDetailsComparer(
    get_current_InterfaceDeclaration_IProvideFluidCodeDetailsComparer());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IProvideFluidHandle": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IProvideFluidHandle():
    TypeOnly<old.IProvideFluidHandle>;
declare function use_current_InterfaceDeclaration_IProvideFluidHandle(
    use: TypeOnly<current.IProvideFluidHandle>);
use_current_InterfaceDeclaration_IProvideFluidHandle(
    get_old_InterfaceDeclaration_IProvideFluidHandle());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IProvideFluidHandle": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IProvideFluidHandle():
    TypeOnly<current.IProvideFluidHandle>;
declare function use_old_InterfaceDeclaration_IProvideFluidHandle(
    use: TypeOnly<old.IProvideFluidHandle>);
use_old_InterfaceDeclaration_IProvideFluidHandle(
    get_current_InterfaceDeclaration_IProvideFluidHandle());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IProvideFluidHandleContext": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IProvideFluidHandleContext():
    TypeOnly<old.IProvideFluidHandleContext>;
declare function use_current_InterfaceDeclaration_IProvideFluidHandleContext(
    use: TypeOnly<current.IProvideFluidHandleContext>);
use_current_InterfaceDeclaration_IProvideFluidHandleContext(
    get_old_InterfaceDeclaration_IProvideFluidHandleContext());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IProvideFluidHandleContext": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IProvideFluidHandleContext():
    TypeOnly<current.IProvideFluidHandleContext>;
declare function use_old_InterfaceDeclaration_IProvideFluidHandleContext(
    use: TypeOnly<old.IProvideFluidHandleContext>);
use_old_InterfaceDeclaration_IProvideFluidHandleContext(
    get_current_InterfaceDeclaration_IProvideFluidHandleContext());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IProvideFluidLoadable": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IProvideFluidLoadable():
    TypeOnly<old.IProvideFluidLoadable>;
declare function use_current_InterfaceDeclaration_IProvideFluidLoadable(
    use: TypeOnly<current.IProvideFluidLoadable>);
use_current_InterfaceDeclaration_IProvideFluidLoadable(
    get_old_InterfaceDeclaration_IProvideFluidLoadable());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IProvideFluidLoadable": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IProvideFluidLoadable():
    TypeOnly<current.IProvideFluidLoadable>;
declare function use_old_InterfaceDeclaration_IProvideFluidLoadable(
    use: TypeOnly<old.IProvideFluidLoadable>);
use_old_InterfaceDeclaration_IProvideFluidLoadable(
    get_current_InterfaceDeclaration_IProvideFluidLoadable());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IProvideFluidRouter": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IProvideFluidRouter():
    TypeOnly<old.IProvideFluidRouter>;
declare function use_current_InterfaceDeclaration_IProvideFluidRouter(
    use: TypeOnly<current.IProvideFluidRouter>);
use_current_InterfaceDeclaration_IProvideFluidRouter(
    get_old_InterfaceDeclaration_IProvideFluidRouter());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IProvideFluidRouter": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IProvideFluidRouter():
    TypeOnly<current.IProvideFluidRouter>;
declare function use_old_InterfaceDeclaration_IProvideFluidRouter(
    use: TypeOnly<old.IProvideFluidRouter>);
use_old_InterfaceDeclaration_IProvideFluidRouter(
    get_current_InterfaceDeclaration_IProvideFluidRouter());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IProvideFluidRunnable": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IProvideFluidRunnable():
    TypeOnly<old.IProvideFluidRunnable>;
declare function use_current_InterfaceDeclaration_IProvideFluidRunnable(
    use: TypeOnly<current.IProvideFluidRunnable>);
use_current_InterfaceDeclaration_IProvideFluidRunnable(
    get_old_InterfaceDeclaration_IProvideFluidRunnable());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IProvideFluidRunnable": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IProvideFluidRunnable():
    TypeOnly<current.IProvideFluidRunnable>;
declare function use_old_InterfaceDeclaration_IProvideFluidRunnable(
    use: TypeOnly<old.IProvideFluidRunnable>);
use_old_InterfaceDeclaration_IProvideFluidRunnable(
    get_current_InterfaceDeclaration_IProvideFluidRunnable());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "RemovedInterfaceDeclaration_IProvideFluidSerializer": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IProvideFluidSerializer():
    TypeOnly<old.IProvideFluidSerializer>;
declare function use_current_RemovedInterfaceDeclaration_IProvideFluidSerializer(
    // @ts-expect-error compatibility expected to be broken
    use: TypeOnly<current.IProvideFluidSerializer>);
use_current_RemovedInterfaceDeclaration_IProvideFluidSerializer(
    get_old_InterfaceDeclaration_IProvideFluidSerializer());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "RemovedInterfaceDeclaration_IProvideFluidSerializer": {"backCompat": false}
*/
declare function get_current_RemovedInterfaceDeclaration_IProvideFluidSerializer():
    // @ts-expect-error compatibility expected to be broken
    TypeOnly<current.IProvideFluidSerializer>;
declare function use_old_InterfaceDeclaration_IProvideFluidSerializer(
    use: TypeOnly<old.IProvideFluidSerializer>);
use_old_InterfaceDeclaration_IProvideFluidSerializer(
    get_current_RemovedInterfaceDeclaration_IProvideFluidSerializer());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IRequest": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IRequest():
    TypeOnly<old.IRequest>;
declare function use_current_InterfaceDeclaration_IRequest(
    use: TypeOnly<current.IRequest>);
use_current_InterfaceDeclaration_IRequest(
    get_old_InterfaceDeclaration_IRequest());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IRequest": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IRequest():
    TypeOnly<current.IRequest>;
declare function use_old_InterfaceDeclaration_IRequest(
    use: TypeOnly<old.IRequest>);
use_old_InterfaceDeclaration_IRequest(
    get_current_InterfaceDeclaration_IRequest());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IRequestHeader": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IRequestHeader():
    TypeOnly<old.IRequestHeader>;
declare function use_current_InterfaceDeclaration_IRequestHeader(
    use: TypeOnly<current.IRequestHeader>);
use_current_InterfaceDeclaration_IRequestHeader(
    get_old_InterfaceDeclaration_IRequestHeader());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IRequestHeader": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IRequestHeader():
    TypeOnly<current.IRequestHeader>;
declare function use_old_InterfaceDeclaration_IRequestHeader(
    use: TypeOnly<old.IRequestHeader>);
use_old_InterfaceDeclaration_IRequestHeader(
    get_current_InterfaceDeclaration_IRequestHeader());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IResponse": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IResponse():
    TypeOnly<old.IResponse>;
declare function use_current_InterfaceDeclaration_IResponse(
    use: TypeOnly<current.IResponse>);
use_current_InterfaceDeclaration_IResponse(
    get_old_InterfaceDeclaration_IResponse());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IResponse": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IResponse():
    TypeOnly<current.IResponse>;
declare function use_old_InterfaceDeclaration_IResponse(
    use: TypeOnly<old.IResponse>);
use_old_InterfaceDeclaration_IResponse(
    get_current_InterfaceDeclaration_IResponse());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "RemovedInterfaceDeclaration_ISerializedHandle": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_ISerializedHandle():
    TypeOnly<old.ISerializedHandle>;
declare function use_current_RemovedInterfaceDeclaration_ISerializedHandle(
    // @ts-expect-error compatibility expected to be broken
    use: TypeOnly<current.ISerializedHandle>);
use_current_RemovedInterfaceDeclaration_ISerializedHandle(
    get_old_InterfaceDeclaration_ISerializedHandle());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "RemovedInterfaceDeclaration_ISerializedHandle": {"backCompat": false}
*/
declare function get_current_RemovedInterfaceDeclaration_ISerializedHandle():
    // @ts-expect-error compatibility expected to be broken
    TypeOnly<current.ISerializedHandle>;
declare function use_old_InterfaceDeclaration_ISerializedHandle(
    use: TypeOnly<old.ISerializedHandle>);
use_old_InterfaceDeclaration_ISerializedHandle(
    get_current_RemovedInterfaceDeclaration_ISerializedHandle());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "VariableDeclaration_isFluidCodeDetails": {"forwardCompat": false}
*/
declare function get_old_VariableDeclaration_isFluidCodeDetails():
    TypeOnly<typeof old.isFluidCodeDetails>;
declare function use_current_VariableDeclaration_isFluidCodeDetails(
    use: TypeOnly<typeof current.isFluidCodeDetails>);
use_current_VariableDeclaration_isFluidCodeDetails(
    get_old_VariableDeclaration_isFluidCodeDetails());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "VariableDeclaration_isFluidCodeDetails": {"backCompat": false}
*/
declare function get_current_VariableDeclaration_isFluidCodeDetails():
    TypeOnly<typeof current.isFluidCodeDetails>;
declare function use_old_VariableDeclaration_isFluidCodeDetails(
    use: TypeOnly<typeof old.isFluidCodeDetails>);
use_old_VariableDeclaration_isFluidCodeDetails(
    get_current_VariableDeclaration_isFluidCodeDetails());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "VariableDeclaration_isFluidPackage": {"forwardCompat": false}
*/
declare function get_old_VariableDeclaration_isFluidPackage():
    TypeOnly<typeof old.isFluidPackage>;
declare function use_current_VariableDeclaration_isFluidPackage(
    use: TypeOnly<typeof current.isFluidPackage>);
use_current_VariableDeclaration_isFluidPackage(
    get_old_VariableDeclaration_isFluidPackage());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "VariableDeclaration_isFluidPackage": {"backCompat": false}
*/
declare function get_current_VariableDeclaration_isFluidPackage():
    TypeOnly<typeof current.isFluidPackage>;
declare function use_old_VariableDeclaration_isFluidPackage(
    use: TypeOnly<typeof old.isFluidPackage>);
use_old_VariableDeclaration_isFluidPackage(
    get_current_VariableDeclaration_isFluidPackage());
