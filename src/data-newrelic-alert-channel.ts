// https://www.terraform.io/docs/providers/newrelic/d/alert_channel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNewrelicAlertChannelConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the alert channel in New Relic.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/alert_channel#name DataNewrelicAlertChannel#name}
  */
  readonly name: string;
}
export class DataNewrelicAlertChannelConfigA extends cdktf.ComplexComputedList {

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
  public get headers() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('headers') as any;
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
  public get payload() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('payload') as any;
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

/**
* Represents a {@link https://www.terraform.io/docs/providers/newrelic/d/alert_channel newrelic_alert_channel}
*/
export class DataNewrelicAlertChannel extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "newrelic_alert_channel";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/newrelic/d/alert_channel newrelic_alert_channel} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNewrelicAlertChannelConfig
  */
  public constructor(scope: Construct, id: string, config: DataNewrelicAlertChannelConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_alert_channel',
      terraformGeneratorMetadata: {
        providerName: 'newrelic'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: true, optional: false, required: false
  public config(index: string) {
    return new DataNewrelicAlertChannelConfigA(this, 'config', index);
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('policy_ids') as any;
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
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
