// https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/synthetics_broken_links_monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SyntheticsBrokenLinksMonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the newrelic account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/synthetics_broken_links_monitor#account_id SyntheticsBrokenLinksMonitor#account_id}
  */
  readonly accountId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/synthetics_broken_links_monitor#id SyntheticsBrokenLinksMonitor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List private location GUIDs for which the monitor will run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/synthetics_broken_links_monitor#locations_private SyntheticsBrokenLinksMonitor#locations_private}
  */
  readonly locationsPrivate?: string[];
  /**
  * Publicly available location names in which the monitor will run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/synthetics_broken_links_monitor#locations_public SyntheticsBrokenLinksMonitor#locations_public}
  */
  readonly locationsPublic?: string[];
  /**
  * The title of this monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/synthetics_broken_links_monitor#name SyntheticsBrokenLinksMonitor#name}
  */
  readonly name: string;
  /**
  * The interval at which this monitor should run. Valid values are EVERY_MINUTE, EVERY_5_MINUTES, EVERY_10_MINUTES, EVERY_15_MINUTES, EVERY_30_MINUTES, EVERY_HOUR, EVERY_6_HOURS, EVERY_12_HOURS, or EVERY_DAY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/synthetics_broken_links_monitor#period SyntheticsBrokenLinksMonitor#period}
  */
  readonly period: string;
  /**
  * The runtime type that the monitor will run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/synthetics_broken_links_monitor#runtime_type SyntheticsBrokenLinksMonitor#runtime_type}
  */
  readonly runtimeType?: string;
  /**
  * The specific semver version of the runtime type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/synthetics_broken_links_monitor#runtime_type_version SyntheticsBrokenLinksMonitor#runtime_type_version}
  */
  readonly runtimeTypeVersion?: string;
  /**
  * The monitor status (ENABLED or DISABLED).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/synthetics_broken_links_monitor#status SyntheticsBrokenLinksMonitor#status}
  */
  readonly status: string;
  /**
  * The URI the monitor runs against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/synthetics_broken_links_monitor#uri SyntheticsBrokenLinksMonitor#uri}
  */
  readonly uri: string;
  /**
  * A boolean attribute to be set true by the customer, if they would like to use the unsupported legacy runtime of Synthetic Monitors by means of an exemption given until the October 22, 2024 Legacy Runtime EOL. Setting this attribute to true would allow skipping validation performed by the the New Relic Terraform Provider starting v3.43.0 to disallow using the legacy runtime with new monitors. This would, hence, allow creation of monitors in the legacy runtime until the October 22, 2024 Legacy Runtime EOL, if exempt by the API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/synthetics_broken_links_monitor#use_unsupported_legacy_runtime SyntheticsBrokenLinksMonitor#use_unsupported_legacy_runtime}
  */
  readonly useUnsupportedLegacyRuntime?: boolean | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/synthetics_broken_links_monitor#tag SyntheticsBrokenLinksMonitor#tag}
  */
  readonly tag?: SyntheticsBrokenLinksMonitorTag[] | cdktf.IResolvable;
}
export interface SyntheticsBrokenLinksMonitorTag {
  /**
  * Name of the tag key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/synthetics_broken_links_monitor#key SyntheticsBrokenLinksMonitor#key}
  */
  readonly key: string;
  /**
  * Values associated with the tag key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/synthetics_broken_links_monitor#values SyntheticsBrokenLinksMonitor#values}
  */
  readonly values: string[];
}

export function syntheticsBrokenLinksMonitorTagToTerraform(struct?: SyntheticsBrokenLinksMonitorTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function syntheticsBrokenLinksMonitorTagToHclTerraform(struct?: SyntheticsBrokenLinksMonitorTag | cdktf.IResolvable): any {
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

export class SyntheticsBrokenLinksMonitorTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SyntheticsBrokenLinksMonitorTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SyntheticsBrokenLinksMonitorTag | cdktf.IResolvable | undefined) {
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

export class SyntheticsBrokenLinksMonitorTagList extends cdktf.ComplexList {
  public internalValue? : SyntheticsBrokenLinksMonitorTag[] | cdktf.IResolvable

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
  public get(index: number): SyntheticsBrokenLinksMonitorTagOutputReference {
    return new SyntheticsBrokenLinksMonitorTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/synthetics_broken_links_monitor newrelic_synthetics_broken_links_monitor}
*/
export class SyntheticsBrokenLinksMonitor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_synthetics_broken_links_monitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SyntheticsBrokenLinksMonitor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SyntheticsBrokenLinksMonitor to import
  * @param importFromId The id of the existing SyntheticsBrokenLinksMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/synthetics_broken_links_monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SyntheticsBrokenLinksMonitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "newrelic_synthetics_broken_links_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/synthetics_broken_links_monitor newrelic_synthetics_broken_links_monitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SyntheticsBrokenLinksMonitorConfig
  */
  public constructor(scope: Construct, id: string, config: SyntheticsBrokenLinksMonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_synthetics_broken_links_monitor',
      terraformGeneratorMetadata: {
        providerName: 'newrelic',
        providerVersion: '3.57.1',
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
    this._id = config.id;
    this._locationsPrivate = config.locationsPrivate;
    this._locationsPublic = config.locationsPublic;
    this._name = config.name;
    this._period = config.period;
    this._runtimeType = config.runtimeType;
    this._runtimeTypeVersion = config.runtimeTypeVersion;
    this._status = config.status;
    this._uri = config.uri;
    this._useUnsupportedLegacyRuntime = config.useUnsupportedLegacyRuntime;
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

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
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

  // tag - computed: false, optional: true, required: false
  private _tag = new SyntheticsBrokenLinksMonitorTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: SyntheticsBrokenLinksMonitorTag[] | cdktf.IResolvable) {
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
      id: cdktf.stringToTerraform(this._id),
      locations_private: cdktf.listMapper(cdktf.stringToTerraform, false)(this._locationsPrivate),
      locations_public: cdktf.listMapper(cdktf.stringToTerraform, false)(this._locationsPublic),
      name: cdktf.stringToTerraform(this._name),
      period: cdktf.stringToTerraform(this._period),
      runtime_type: cdktf.stringToTerraform(this._runtimeType),
      runtime_type_version: cdktf.stringToTerraform(this._runtimeTypeVersion),
      status: cdktf.stringToTerraform(this._status),
      uri: cdktf.stringToTerraform(this._uri),
      use_unsupported_legacy_runtime: cdktf.booleanToTerraform(this._useUnsupportedLegacyRuntime),
      tag: cdktf.listMapper(syntheticsBrokenLinksMonitorTagToTerraform, true)(this._tag.internalValue),
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
      status: {
        value: cdktf.stringToHclTerraform(this._status),
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
      tag: {
        value: cdktf.listMapperHcl(syntheticsBrokenLinksMonitorTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SyntheticsBrokenLinksMonitorTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
