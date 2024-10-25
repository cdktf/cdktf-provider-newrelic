/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/synthetics_monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SyntheticsMonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the newrelic account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/synthetics_monitor#account_id SyntheticsMonitor#account_id}
  */
  readonly accountId?: number;
  /**
  * The multiple browsers list on which synthetic monitors will run. Valid values are array of CHROME,and FIREFOX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/synthetics_monitor#browsers SyntheticsMonitor#browsers}
  */
  readonly browsers?: string[];
  /**
  * Bypass HEAD request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/synthetics_monitor#bypass_head_request SyntheticsMonitor#bypass_head_request}
  */
  readonly bypassHeadRequest?: boolean | cdktf.IResolvable;
  /**
  * The device orientation the user would like to represent. Valid values are LANDSCAPE, PORTRAIT, or NONE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/synthetics_monitor#device_orientation SyntheticsMonitor#device_orientation}
  */
  readonly deviceOrientation?: string;
  /**
  * The device type that a user can select. Valid values are MOBILE, TABLET, or NONE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/synthetics_monitor#device_type SyntheticsMonitor#device_type}
  */
  readonly deviceType?: string;
  /**
  * The multiple devices list on which synthetic monitors will run. Valid values are array of DESKTOP, MOBILE_LANDSCAPE, MOBILE_PORTRAIT, TABLET_LANDSCAPE and TABLET_PORTRAIT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/synthetics_monitor#devices SyntheticsMonitor#devices}
  */
  readonly devices?: string[];
  /**
  * Capture a screenshot during job execution
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/synthetics_monitor#enable_screenshot_on_failure_and_script SyntheticsMonitor#enable_screenshot_on_failure_and_script}
  */
  readonly enableScreenshotOnFailureAndScript?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/synthetics_monitor#id SyntheticsMonitor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The locations in which this monitor should be run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/synthetics_monitor#locations_private SyntheticsMonitor#locations_private}
  */
  readonly locationsPrivate?: string[];
  /**
  * The locations in which this monitor should be run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/synthetics_monitor#locations_public SyntheticsMonitor#locations_public}
  */
  readonly locationsPublic?: string[];
  /**
  * The title of this monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/synthetics_monitor#name SyntheticsMonitor#name}
  */
  readonly name: string;
  /**
  * The interval at which this monitor should run. Valid values are EVERY_MINUTE, EVERY_5_MINUTES, EVERY_10_MINUTES, EVERY_15_MINUTES, EVERY_30_MINUTES, EVERY_HOUR, EVERY_6_HOURS, EVERY_12_HOURS, or EVERY_DAY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/synthetics_monitor#period SyntheticsMonitor#period}
  */
  readonly period?: string;
  /**
  * The runtime type that the monitor will run
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/synthetics_monitor#runtime_type SyntheticsMonitor#runtime_type}
  */
  readonly runtimeType?: string;
  /**
  * The specific version of the runtime type selected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/synthetics_monitor#runtime_type_version SyntheticsMonitor#runtime_type_version}
  */
  readonly runtimeTypeVersion?: string;
  /**
  * The programing language that should execute the script
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/synthetics_monitor#script_language SyntheticsMonitor#script_language}
  */
  readonly scriptLanguage?: string;
  /**
  * The monitor status (ENABLED or DISABLED).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/synthetics_monitor#status SyntheticsMonitor#status}
  */
  readonly status: string;
  /**
  * Fail the monitor check if redirected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/synthetics_monitor#treat_redirect_as_failure SyntheticsMonitor#treat_redirect_as_failure}
  */
  readonly treatRedirectAsFailure?: boolean | cdktf.IResolvable;
  /**
  * The monitor type. Valid values are SIMPLE AND BROWSER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/synthetics_monitor#type SyntheticsMonitor#type}
  */
  readonly type: string;
  /**
  * The URI for the monitor to hit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/synthetics_monitor#uri SyntheticsMonitor#uri}
  */
  readonly uri?: string;
  /**
  * A boolean attribute to be set true by the customer, if they would like to use the unsupported legacy runtime of Synthetic Monitors by means of an exemption given until the October 22, 2024 Legacy Runtime EOL. Setting this attribute to true would allow skipping validation performed by the the New Relic Terraform Provider starting v3.43.0 to disallow using the legacy runtime with new monitors. This would, hence, allow creation of monitors in the legacy runtime until the October 22, 2024 Legacy Runtime EOL, if exempt by the API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/synthetics_monitor#use_unsupported_legacy_runtime SyntheticsMonitor#use_unsupported_legacy_runtime}
  */
  readonly useUnsupportedLegacyRuntime?: boolean | cdktf.IResolvable;
  /**
  * The string to validate against in the response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/synthetics_monitor#validation_string SyntheticsMonitor#validation_string}
  */
  readonly validationString?: string;
  /**
  * Verify SSL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/synthetics_monitor#verify_ssl SyntheticsMonitor#verify_ssl}
  */
  readonly verifySsl?: boolean | cdktf.IResolvable;
  /**
  * custom_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/synthetics_monitor#custom_header SyntheticsMonitor#custom_header}
  */
  readonly customHeader?: SyntheticsMonitorCustomHeader[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/synthetics_monitor#tag SyntheticsMonitor#tag}
  */
  readonly tag?: SyntheticsMonitorTag[] | cdktf.IResolvable;
}
export interface SyntheticsMonitorCustomHeader {
  /**
  * Header name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/synthetics_monitor#name SyntheticsMonitor#name}
  */
  readonly name?: string;
  /**
  * Header value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/synthetics_monitor#value SyntheticsMonitor#value}
  */
  readonly value?: string;
}

export function syntheticsMonitorCustomHeaderToTerraform(struct?: SyntheticsMonitorCustomHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function syntheticsMonitorCustomHeaderToHclTerraform(struct?: SyntheticsMonitorCustomHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsMonitorCustomHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SyntheticsMonitorCustomHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsMonitorCustomHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class SyntheticsMonitorCustomHeaderList extends cdktf.ComplexList {
  public internalValue? : SyntheticsMonitorCustomHeader[] | cdktf.IResolvable

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
  public get(index: number): SyntheticsMonitorCustomHeaderOutputReference {
    return new SyntheticsMonitorCustomHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SyntheticsMonitorTag {
  /**
  * Name of the tag key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/synthetics_monitor#key SyntheticsMonitor#key}
  */
  readonly key: string;
  /**
  * Values associated with the tag key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/synthetics_monitor#values SyntheticsMonitor#values}
  */
  readonly values: string[];
}

export function syntheticsMonitorTagToTerraform(struct?: SyntheticsMonitorTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function syntheticsMonitorTagToHclTerraform(struct?: SyntheticsMonitorTag | cdktf.IResolvable): any {
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

export class SyntheticsMonitorTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SyntheticsMonitorTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SyntheticsMonitorTag | cdktf.IResolvable | undefined) {
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

export class SyntheticsMonitorTagList extends cdktf.ComplexList {
  public internalValue? : SyntheticsMonitorTag[] | cdktf.IResolvable

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
  public get(index: number): SyntheticsMonitorTagOutputReference {
    return new SyntheticsMonitorTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/synthetics_monitor newrelic_synthetics_monitor}
*/
export class SyntheticsMonitor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_synthetics_monitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SyntheticsMonitor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SyntheticsMonitor to import
  * @param importFromId The id of the existing SyntheticsMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/synthetics_monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SyntheticsMonitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "newrelic_synthetics_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/synthetics_monitor newrelic_synthetics_monitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SyntheticsMonitorConfig
  */
  public constructor(scope: Construct, id: string, config: SyntheticsMonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_synthetics_monitor',
      terraformGeneratorMetadata: {
        providerName: 'newrelic',
        providerVersion: '3.51.0',
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
    this._bypassHeadRequest = config.bypassHeadRequest;
    this._deviceOrientation = config.deviceOrientation;
    this._deviceType = config.deviceType;
    this._devices = config.devices;
    this._enableScreenshotOnFailureAndScript = config.enableScreenshotOnFailureAndScript;
    this._id = config.id;
    this._locationsPrivate = config.locationsPrivate;
    this._locationsPublic = config.locationsPublic;
    this._name = config.name;
    this._period = config.period;
    this._runtimeType = config.runtimeType;
    this._runtimeTypeVersion = config.runtimeTypeVersion;
    this._scriptLanguage = config.scriptLanguage;
    this._status = config.status;
    this._treatRedirectAsFailure = config.treatRedirectAsFailure;
    this._type = config.type;
    this._uri = config.uri;
    this._useUnsupportedLegacyRuntime = config.useUnsupportedLegacyRuntime;
    this._validationString = config.validationString;
    this._verifySsl = config.verifySsl;
    this._customHeader.internalValue = config.customHeader;
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

  // bypass_head_request - computed: false, optional: true, required: false
  private _bypassHeadRequest?: boolean | cdktf.IResolvable; 
  public get bypassHeadRequest() {
    return this.getBooleanAttribute('bypass_head_request');
  }
  public set bypassHeadRequest(value: boolean | cdktf.IResolvable) {
    this._bypassHeadRequest = value;
  }
  public resetBypassHeadRequest() {
    this._bypassHeadRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassHeadRequestInput() {
    return this._bypassHeadRequest;
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

  // locations_private - computed: false, optional: true, required: false
  private _locationsPrivate?: string[]; 
  public get locationsPrivate() {
    return cdktf.Fn.tolist(this.getListAttribute('locations_private'));
  }
  public set locationsPrivate(value: string[]) {
    this._locationsPrivate = value;
  }
  public resetLocationsPrivate() {
    this._locationsPrivate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationsPrivateInput() {
    return this._locationsPrivate;
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

  // period - computed: true, optional: true, required: false
  private _period?: string; 
  public get period() {
    return this.getStringAttribute('period');
  }
  public set period(value: string) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
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

  // treat_redirect_as_failure - computed: false, optional: true, required: false
  private _treatRedirectAsFailure?: boolean | cdktf.IResolvable; 
  public get treatRedirectAsFailure() {
    return this.getBooleanAttribute('treat_redirect_as_failure');
  }
  public set treatRedirectAsFailure(value: boolean | cdktf.IResolvable) {
    this._treatRedirectAsFailure = value;
  }
  public resetTreatRedirectAsFailure() {
    this._treatRedirectAsFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get treatRedirectAsFailureInput() {
    return this._treatRedirectAsFailure;
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

  // uri - computed: false, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
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

  // validation_string - computed: false, optional: true, required: false
  private _validationString?: string; 
  public get validationString() {
    return this.getStringAttribute('validation_string');
  }
  public set validationString(value: string) {
    this._validationString = value;
  }
  public resetValidationString() {
    this._validationString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationStringInput() {
    return this._validationString;
  }

  // verify_ssl - computed: false, optional: true, required: false
  private _verifySsl?: boolean | cdktf.IResolvable; 
  public get verifySsl() {
    return this.getBooleanAttribute('verify_ssl');
  }
  public set verifySsl(value: boolean | cdktf.IResolvable) {
    this._verifySsl = value;
  }
  public resetVerifySsl() {
    this._verifySsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifySslInput() {
    return this._verifySsl;
  }

  // custom_header - computed: false, optional: true, required: false
  private _customHeader = new SyntheticsMonitorCustomHeaderList(this, "custom_header", true);
  public get customHeader() {
    return this._customHeader;
  }
  public putCustomHeader(value: SyntheticsMonitorCustomHeader[] | cdktf.IResolvable) {
    this._customHeader.internalValue = value;
  }
  public resetCustomHeader() {
    this._customHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHeaderInput() {
    return this._customHeader.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new SyntheticsMonitorTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: SyntheticsMonitorTag[] | cdktf.IResolvable) {
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
      bypass_head_request: cdktf.booleanToTerraform(this._bypassHeadRequest),
      device_orientation: cdktf.stringToTerraform(this._deviceOrientation),
      device_type: cdktf.stringToTerraform(this._deviceType),
      devices: cdktf.listMapper(cdktf.stringToTerraform, false)(this._devices),
      enable_screenshot_on_failure_and_script: cdktf.booleanToTerraform(this._enableScreenshotOnFailureAndScript),
      id: cdktf.stringToTerraform(this._id),
      locations_private: cdktf.listMapper(cdktf.stringToTerraform, false)(this._locationsPrivate),
      locations_public: cdktf.listMapper(cdktf.stringToTerraform, false)(this._locationsPublic),
      name: cdktf.stringToTerraform(this._name),
      period: cdktf.stringToTerraform(this._period),
      runtime_type: cdktf.stringToTerraform(this._runtimeType),
      runtime_type_version: cdktf.stringToTerraform(this._runtimeTypeVersion),
      script_language: cdktf.stringToTerraform(this._scriptLanguage),
      status: cdktf.stringToTerraform(this._status),
      treat_redirect_as_failure: cdktf.booleanToTerraform(this._treatRedirectAsFailure),
      type: cdktf.stringToTerraform(this._type),
      uri: cdktf.stringToTerraform(this._uri),
      use_unsupported_legacy_runtime: cdktf.booleanToTerraform(this._useUnsupportedLegacyRuntime),
      validation_string: cdktf.stringToTerraform(this._validationString),
      verify_ssl: cdktf.booleanToTerraform(this._verifySsl),
      custom_header: cdktf.listMapper(syntheticsMonitorCustomHeaderToTerraform, true)(this._customHeader.internalValue),
      tag: cdktf.listMapper(syntheticsMonitorTagToTerraform, true)(this._tag.internalValue),
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
      bypass_head_request: {
        value: cdktf.booleanToHclTerraform(this._bypassHeadRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      locations_private: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._locationsPrivate),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      treat_redirect_as_failure: {
        value: cdktf.booleanToHclTerraform(this._treatRedirectAsFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uri: {
        value: cdktf.stringToHclTerraform(this._uri),
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
      validation_string: {
        value: cdktf.stringToHclTerraform(this._validationString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      verify_ssl: {
        value: cdktf.booleanToHclTerraform(this._verifySsl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      custom_header: {
        value: cdktf.listMapperHcl(syntheticsMonitorCustomHeaderToHclTerraform, true)(this._customHeader.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SyntheticsMonitorCustomHeaderList",
      },
      tag: {
        value: cdktf.listMapperHcl(syntheticsMonitorTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SyntheticsMonitorTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
