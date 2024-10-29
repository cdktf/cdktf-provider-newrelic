/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/synthetics_script_monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SyntheticsScriptMonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the newrelic account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/synthetics_script_monitor#account_id SyntheticsScriptMonitor#account_id}
  */
  readonly accountId?: number;
  /**
  * The multiple browsers list on which synthetic monitors will run. Valid values are array of CHROME,and FIREFOX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/synthetics_script_monitor#browsers SyntheticsScriptMonitor#browsers}
  */
  readonly browsers?: string[];
  /**
  * The device orientation the user would like to represent. Valid values are LANDSCAPE, PORTRAIT, or NONE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/synthetics_script_monitor#device_orientation SyntheticsScriptMonitor#device_orientation}
  */
  readonly deviceOrientation?: string;
  /**
  * The device type that a user can select. Valid values are MOBILE, TABLET, or NONE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/synthetics_script_monitor#device_type SyntheticsScriptMonitor#device_type}
  */
  readonly deviceType?: string;
  /**
  * The multiple devices list on which synthetic monitors will run. Valid values are array of DESKTOP, MOBILE_LANDSCAPE, MOBILE_PORTRAIT, TABLET_LANDSCAPE and TABLET_PORTRAIT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/synthetics_script_monitor#devices SyntheticsScriptMonitor#devices}
  */
  readonly devices?: string[];
  /**
  * Capture a screenshot during job execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/synthetics_script_monitor#enable_screenshot_on_failure_and_script SyntheticsScriptMonitor#enable_screenshot_on_failure_and_script}
  */
  readonly enableScreenshotOnFailureAndScript?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/synthetics_script_monitor#id SyntheticsScriptMonitor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The public location(s) that the monitor will run jobs from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/synthetics_script_monitor#locations_public SyntheticsScriptMonitor#locations_public}
  */
  readonly locationsPublic?: string[];
  /**
  * The title of this monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/synthetics_script_monitor#name SyntheticsScriptMonitor#name}
  */
  readonly name: string;
  /**
  * The interval at which this monitor should run. Valid values are EVERY_MINUTE, EVERY_5_MINUTES, EVERY_10_MINUTES, EVERY_15_MINUTES, EVERY_30_MINUTES, EVERY_HOUR, EVERY_6_HOURS, EVERY_12_HOURS, or EVERY_DAY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/synthetics_script_monitor#period SyntheticsScriptMonitor#period}
  */
  readonly period: string;
  /**
  * The runtime type that the monitor will run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/synthetics_script_monitor#runtime_type SyntheticsScriptMonitor#runtime_type}
  */
  readonly runtimeType?: string;
  /**
  * The specific semver version of the runtime type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/synthetics_script_monitor#runtime_type_version SyntheticsScriptMonitor#runtime_type_version}
  */
  readonly runtimeTypeVersion?: string;
  /**
  * The script that the monitor runs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/synthetics_script_monitor#script SyntheticsScriptMonitor#script}
  */
  readonly script?: string;
  /**
  * The programing language that should execute the script.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/synthetics_script_monitor#script_language SyntheticsScriptMonitor#script_language}
  */
  readonly scriptLanguage?: string;
  /**
  * The monitor status (ENABLED or DISABLED).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/synthetics_script_monitor#status SyntheticsScriptMonitor#status}
  */
  readonly status: string;
  /**
  * The monitor type. Valid values are SCRIPT_BROWSER, and SCRIPT_API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/synthetics_script_monitor#type SyntheticsScriptMonitor#type}
  */
  readonly type: string;
  /**
  * A boolean attribute to be set true by the customer, if they would like to use the unsupported legacy runtime of Synthetic Monitors by means of an exemption given until the October 22, 2024 Legacy Runtime EOL. Setting this attribute to true would allow skipping validation performed by the the New Relic Terraform Provider starting v3.43.0 to disallow using the legacy runtime with new monitors. This would, hence, allow creation of monitors in the legacy runtime until the October 22, 2024 Legacy Runtime EOL, if exempt by the API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/synthetics_script_monitor#use_unsupported_legacy_runtime SyntheticsScriptMonitor#use_unsupported_legacy_runtime}
  */
  readonly useUnsupportedLegacyRuntime?: boolean | cdktf.IResolvable;
  /**
  * location_private block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/synthetics_script_monitor#location_private SyntheticsScriptMonitor#location_private}
  */
  readonly locationPrivate?: SyntheticsScriptMonitorLocationPrivate[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/synthetics_script_monitor#tag SyntheticsScriptMonitor#tag}
  */
  readonly tag?: SyntheticsScriptMonitorTag[] | cdktf.IResolvable;
}
export interface SyntheticsScriptMonitorLocationPrivate {
  /**
  * The unique identifier for the Synthetics private location in New Relic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/synthetics_script_monitor#guid SyntheticsScriptMonitor#guid}
  */
  readonly guid: string;
  /**
  * The location's Verified Script Execution password (Only necessary if Verified Script Execution is enabled for the location).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/synthetics_script_monitor#vse_password SyntheticsScriptMonitor#vse_password}
  */
  readonly vsePassword?: string;
}

export function syntheticsScriptMonitorLocationPrivateToTerraform(struct?: SyntheticsScriptMonitorLocationPrivate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    guid: cdktf.stringToTerraform(struct!.guid),
    vse_password: cdktf.stringToTerraform(struct!.vsePassword),
  }
}


export function syntheticsScriptMonitorLocationPrivateToHclTerraform(struct?: SyntheticsScriptMonitorLocationPrivate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    guid: {
      value: cdktf.stringToHclTerraform(struct!.guid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vse_password: {
      value: cdktf.stringToHclTerraform(struct!.vsePassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsScriptMonitorLocationPrivateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SyntheticsScriptMonitorLocationPrivate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._guid !== undefined) {
      hasAnyValues = true;
      internalValueResult.guid = this._guid;
    }
    if (this._vsePassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsePassword = this._vsePassword;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsScriptMonitorLocationPrivate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._guid = undefined;
      this._vsePassword = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._guid = value.guid;
      this._vsePassword = value.vsePassword;
    }
  }

  // guid - computed: false, optional: false, required: true
  private _guid?: string; 
  public get guid() {
    return this.getStringAttribute('guid');
  }
  public set guid(value: string) {
    this._guid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get guidInput() {
    return this._guid;
  }

  // vse_password - computed: false, optional: true, required: false
  private _vsePassword?: string; 
  public get vsePassword() {
    return this.getStringAttribute('vse_password');
  }
  public set vsePassword(value: string) {
    this._vsePassword = value;
  }
  public resetVsePassword() {
    this._vsePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsePasswordInput() {
    return this._vsePassword;
  }
}

export class SyntheticsScriptMonitorLocationPrivateList extends cdktf.ComplexList {
  public internalValue? : SyntheticsScriptMonitorLocationPrivate[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SyntheticsScriptMonitorLocationPrivateOutputReference {
    return new SyntheticsScriptMonitorLocationPrivateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SyntheticsScriptMonitorTag {
  /**
  * Name of the tag key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/synthetics_script_monitor#key SyntheticsScriptMonitor#key}
  */
  readonly key: string;
  /**
  * Values associated with the tag key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/synthetics_script_monitor#values SyntheticsScriptMonitor#values}
  */
  readonly values: string[];
}

export function syntheticsScriptMonitorTagToTerraform(struct?: SyntheticsScriptMonitorTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function syntheticsScriptMonitorTagToHclTerraform(struct?: SyntheticsScriptMonitorTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsScriptMonitorTagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SyntheticsScriptMonitorTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsScriptMonitorTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class SyntheticsScriptMonitorTagList extends cdktf.ComplexList {
  public internalValue? : SyntheticsScriptMonitorTag[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SyntheticsScriptMonitorTagOutputReference {
    return new SyntheticsScriptMonitorTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/synthetics_script_monitor newrelic_synthetics_script_monitor}
*/
export class SyntheticsScriptMonitor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_synthetics_script_monitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SyntheticsScriptMonitor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SyntheticsScriptMonitor to import
  * @param importFromId The id of the existing SyntheticsScriptMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/synthetics_script_monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SyntheticsScriptMonitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "newrelic_synthetics_script_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/synthetics_script_monitor newrelic_synthetics_script_monitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SyntheticsScriptMonitorConfig
  */
  public constructor(scope: Construct, id: string, config: SyntheticsScriptMonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_synthetics_script_monitor',
      terraformGeneratorMetadata: {
        providerName: 'newrelic',
        providerVersion: '3.52.0',
        providerVersionConstraint: '~> 3.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._browsers = config.browsers;
    this._deviceOrientation = config.deviceOrientation;
    this._deviceType = config.deviceType;
    this._devices = config.devices;
    this._enableScreenshotOnFailureAndScript = config.enableScreenshotOnFailureAndScript;
    this._id = config.id;
    this._locationsPublic = config.locationsPublic;
    this._name = config.name;
    this._period = config.period;
    this._runtimeType = config.runtimeType;
    this._runtimeTypeVersion = config.runtimeTypeVersion;
    this._script = config.script;
    this._scriptLanguage = config.scriptLanguage;
    this._status = config.status;
    this._type = config.type;
    this._useUnsupportedLegacyRuntime = config.useUnsupportedLegacyRuntime;
    this._locationPrivate.internalValue = config.locationPrivate;
    this._tag.internalValue = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: true, required: false
  private _accountId?: number; 
  public get accountId() {
    return this.getNumberAttribute('account_id');
  }
  public set accountId(value: number) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // browsers - computed: false, optional: true, required: false
  private _browsers?: string[]; 
  public get browsers() {
    return cdktf.Fn.tolist(this.getListAttribute('browsers'));
  }
  public set browsers(value: string[]) {
    this._browsers = value;
  }
  public resetBrowsers() {
    this._browsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browsersInput() {
    return this._browsers;
  }

  // device_orientation - computed: false, optional: true, required: false
  private _deviceOrientation?: string; 
  public get deviceOrientation() {
    return this.getStringAttribute('device_orientation');
  }
  public set deviceOrientation(value: string) {
    this._deviceOrientation = value;
  }
  public resetDeviceOrientation() {
    this._deviceOrientation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceOrientationInput() {
    return this._deviceOrientation;
  }

  // device_type - computed: false, optional: true, required: false
  private _deviceType?: string; 
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }
  public set deviceType(value: string) {
    this._deviceType = value;
  }
  public resetDeviceType() {
    this._deviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypeInput() {
    return this._deviceType;
  }

  // devices - computed: false, optional: true, required: false
  private _devices?: string[]; 
  public get devices() {
    return cdktf.Fn.tolist(this.getListAttribute('devices'));
  }
  public set devices(value: string[]) {
    this._devices = value;
  }
  public resetDevices() {
    this._devices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesInput() {
    return this._devices;
  }

  // enable_screenshot_on_failure_and_script - computed: false, optional: true, required: false
  private _enableScreenshotOnFailureAndScript?: boolean | cdktf.IResolvable; 
  public get enableScreenshotOnFailureAndScript() {
    return this.getBooleanAttribute('enable_screenshot_on_failure_and_script');
  }
  public set enableScreenshotOnFailureAndScript(value: boolean | cdktf.IResolvable) {
    this._enableScreenshotOnFailureAndScript = value;
  }
  public resetEnableScreenshotOnFailureAndScript() {
    this._enableScreenshotOnFailureAndScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableScreenshotOnFailureAndScriptInput() {
    return this._enableScreenshotOnFailureAndScript;
  }

  // guid - computed: true, optional: false, required: false
  public get guid() {
    return this.getStringAttribute('guid');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // locations_public - computed: false, optional: true, required: false
  private _locationsPublic?: string[]; 
  public get locationsPublic() {
    return cdktf.Fn.tolist(this.getListAttribute('locations_public'));
  }
  public set locationsPublic(value: string[]) {
    this._locationsPublic = value;
  }
  public resetLocationsPublic() {
    this._locationsPublic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationsPublicInput() {
    return this._locationsPublic;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // period - computed: false, optional: false, required: true
  private _period?: string; 
  public get period() {
    return this.getStringAttribute('period');
  }
  public set period(value: string) {
    this._period = value;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // period_in_minutes - computed: true, optional: false, required: false
  public get periodInMinutes() {
    return this.getNumberAttribute('period_in_minutes');
  }

  // runtime_type - computed: false, optional: true, required: false
  private _runtimeType?: string; 
  public get runtimeType() {
    return this.getStringAttribute('runtime_type');
  }
  public set runtimeType(value: string) {
    this._runtimeType = value;
  }
  public resetRuntimeType() {
    this._runtimeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeTypeInput() {
    return this._runtimeType;
  }

  // runtime_type_version - computed: false, optional: true, required: false
  private _runtimeTypeVersion?: string; 
  public get runtimeTypeVersion() {
    return this.getStringAttribute('runtime_type_version');
  }
  public set runtimeTypeVersion(value: string) {
    this._runtimeTypeVersion = value;
  }
  public resetRuntimeTypeVersion() {
    this._runtimeTypeVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeTypeVersionInput() {
    return this._runtimeTypeVersion;
  }

  // script - computed: false, optional: true, required: false
  private _script?: string; 
  public get script() {
    return this.getStringAttribute('script');
  }
  public set script(value: string) {
    this._script = value;
  }
  public resetScript() {
    this._script = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script;
  }

  // script_language - computed: false, optional: true, required: false
  private _scriptLanguage?: string; 
  public get scriptLanguage() {
    return this.getStringAttribute('script_language');
  }
  public set scriptLanguage(value: string) {
    this._scriptLanguage = value;
  }
  public resetScriptLanguage() {
    this._scriptLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptLanguageInput() {
    return this._scriptLanguage;
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // use_unsupported_legacy_runtime - computed: false, optional: true, required: false
  private _useUnsupportedLegacyRuntime?: boolean | cdktf.IResolvable; 
  public get useUnsupportedLegacyRuntime() {
    return this.getBooleanAttribute('use_unsupported_legacy_runtime');
  }
  public set useUnsupportedLegacyRuntime(value: boolean | cdktf.IResolvable) {
    this._useUnsupportedLegacyRuntime = value;
  }
  public resetUseUnsupportedLegacyRuntime() {
    this._useUnsupportedLegacyRuntime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useUnsupportedLegacyRuntimeInput() {
    return this._useUnsupportedLegacyRuntime;
  }

  // location_private - computed: false, optional: true, required: false
  private _locationPrivate = new SyntheticsScriptMonitorLocationPrivateList(this, "location_private", true);
  public get locationPrivate() {
    return this._locationPrivate;
  }
  public putLocationPrivate(value: SyntheticsScriptMonitorLocationPrivate[] | cdktf.IResolvable) {
    this._locationPrivate.internalValue = value;
  }
  public resetLocationPrivate() {
    this._locationPrivate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationPrivateInput() {
    return this._locationPrivate.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new SyntheticsScriptMonitorTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: SyntheticsScriptMonitorTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.numberToTerraform(this._accountId),
      browsers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._browsers),
      device_orientation: cdktf.stringToTerraform(this._deviceOrientation),
      device_type: cdktf.stringToTerraform(this._deviceType),
      devices: cdktf.listMapper(cdktf.stringToTerraform, false)(this._devices),
      enable_screenshot_on_failure_and_script: cdktf.booleanToTerraform(this._enableScreenshotOnFailureAndScript),
      id: cdktf.stringToTerraform(this._id),
      locations_public: cdktf.listMapper(cdktf.stringToTerraform, false)(this._locationsPublic),
      name: cdktf.stringToTerraform(this._name),
      period: cdktf.stringToTerraform(this._period),
      runtime_type: cdktf.stringToTerraform(this._runtimeType),
      runtime_type_version: cdktf.stringToTerraform(this._runtimeTypeVersion),
      script: cdktf.stringToTerraform(this._script),
      script_language: cdktf.stringToTerraform(this._scriptLanguage),
      status: cdktf.stringToTerraform(this._status),
      type: cdktf.stringToTerraform(this._type),
      use_unsupported_legacy_runtime: cdktf.booleanToTerraform(this._useUnsupportedLegacyRuntime),
      location_private: cdktf.listMapper(syntheticsScriptMonitorLocationPrivateToTerraform, true)(this._locationPrivate.internalValue),
      tag: cdktf.listMapper(syntheticsScriptMonitorTagToTerraform, true)(this._tag.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.numberToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      browsers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._browsers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      device_orientation: {
        value: cdktf.stringToHclTerraform(this._deviceOrientation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_type: {
        value: cdktf.stringToHclTerraform(this._deviceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      devices: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._devices),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      enable_screenshot_on_failure_and_script: {
        value: cdktf.booleanToHclTerraform(this._enableScreenshotOnFailureAndScript),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      locations_public: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._locationsPublic),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      period: {
        value: cdktf.stringToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      runtime_type: {
        value: cdktf.stringToHclTerraform(this._runtimeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      runtime_type_version: {
        value: cdktf.stringToHclTerraform(this._runtimeTypeVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      script: {
        value: cdktf.stringToHclTerraform(this._script),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      script_language: {
        value: cdktf.stringToHclTerraform(this._scriptLanguage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_unsupported_legacy_runtime: {
        value: cdktf.booleanToHclTerraform(this._useUnsupportedLegacyRuntime),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      location_private: {
        value: cdktf.listMapperHcl(syntheticsScriptMonitorLocationPrivateToHclTerraform, true)(this._locationPrivate.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SyntheticsScriptMonitorLocationPrivateList",
      },
      tag: {
        value: cdktf.listMapperHcl(syntheticsScriptMonitorTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SyntheticsScriptMonitorTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
