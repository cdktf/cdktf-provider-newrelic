// https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/data-sources/alert_channel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNewrelicAlertChannelConfig extends cdktf.TerraformMetaArguments {
  /**
  * The New Relic account ID where you want to retrieve the alert channel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/data-sources/alert_channel#account_id DataNewrelicAlertChannel#account_id}
  */
  readonly accountId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/data-sources/alert_channel#id DataNewrelicAlertChannel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the alert channel in New Relic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/data-sources/alert_channel#name DataNewrelicAlertChannel#name}
  */
  readonly name: string;
}
export interface DataNewrelicAlertChannelConfigA {
}

export function dataNewrelicAlertChannelConfigAToTerraform(struct?: DataNewrelicAlertChannelConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNewrelicAlertChannelConfigAToHclTerraform(struct?: DataNewrelicAlertChannelConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNewrelicAlertChannelConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataNewrelicAlertChannelConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNewrelicAlertChannelConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_key - computed: true, optional: false, required: false
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }

  // auth_password - computed: true, optional: false, required: false
  public get authPassword() {
    return this.getStringAttribute('auth_password');
  }

  // auth_type - computed: true, optional: false, required: false
  public get authType() {
    return this.getStringAttribute('auth_type');
  }

  // auth_username - computed: true, optional: false, required: false
  public get authUsername() {
    return this.getStringAttribute('auth_username');
  }

  // base_url - computed: true, optional: false, required: false
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }

  // channel - computed: true, optional: false, required: false
  public get channel() {
    return this.getStringAttribute('channel');
  }

  // headers - computed: true, optional: false, required: false
  private _headers = new cdktf.StringMap(this, "headers");
  public get headers() {
    return this._headers;
  }

  // include_json_attachment - computed: true, optional: false, required: false
  public get includeJsonAttachment() {
    return this.getStringAttribute('include_json_attachment');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // payload - computed: true, optional: false, required: false
  private _payload = new cdktf.StringMap(this, "payload");
  public get payload() {
    return this._payload;
  }

  // payload_string - computed: true, optional: false, required: false
  public get payloadString() {
    return this.getStringAttribute('payload_string');
  }

  // payload_type - computed: true, optional: false, required: false
  public get payloadType() {
    return this.getStringAttribute('payload_type');
  }

  // recipients - computed: true, optional: false, required: false
  public get recipients() {
    return this.getStringAttribute('recipients');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // route_key - computed: true, optional: false, required: false
  public get routeKey() {
    return this.getStringAttribute('route_key');
  }

  // service_key - computed: true, optional: false, required: false
  public get serviceKey() {
    return this.getStringAttribute('service_key');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getStringAttribute('tags');
  }

  // teams - computed: true, optional: false, required: false
  public get teams() {
    return this.getStringAttribute('teams');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
  }
}

export class DataNewrelicAlertChannelConfigAList extends cdktf.ComplexList {

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
  public get(index: number): DataNewrelicAlertChannelConfigAOutputReference {
    return new DataNewrelicAlertChannelConfigAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/data-sources/alert_channel newrelic_alert_channel}
*/
export class DataNewrelicAlertChannel extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_alert_channel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNewrelicAlertChannel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNewrelicAlertChannel to import
  * @param importFromId The id of the existing DataNewrelicAlertChannel that should be imported. Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/data-sources/alert_channel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNewrelicAlertChannel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "newrelic_alert_channel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/data-sources/alert_channel newrelic_alert_channel} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNewrelicAlertChannelConfig
  */
  public constructor(scope: Construct, id: string, config: DataNewrelicAlertChannelConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_alert_channel',
      terraformGeneratorMetadata: {
        providerName: 'newrelic',
        providerVersion: '3.59.0',
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
    this._name = config.name;
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

  // config - computed: true, optional: false, required: false
  private _config = new DataNewrelicAlertChannelConfigAList(this, "config", false);
  public get config() {
    return this._config;
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

  // policy_ids - computed: true, optional: false, required: false
  public get policyIds() {
    return this.getNumberListAttribute('policy_ids');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.numberToTerraform(this._accountId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
