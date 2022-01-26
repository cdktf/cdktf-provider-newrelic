// https://www.terraform.io/docs/providers/newrelic/r/alert_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlertPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The New Relic account ID to operate on.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_policy#account_id AlertPolicy#account_id}
  */
  readonly accountId?: number;
  /**
  * An array of channel IDs (integers) to assign to the policy. Adding or removing channel IDs from this array will result in a new alert policy resource being created and the old one being destroyed. Also note that channel IDs cannot be imported via terraform import.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_policy#channel_ids AlertPolicy#channel_ids}
  */
  readonly channelIds?: number[];
  /**
  * The rollup strategy for the policy. Options include: PER_POLICY, PER_CONDITION, or PER_CONDITION_AND_TARGET. The default is PER_POLICY.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_policy#incident_preference AlertPolicy#incident_preference}
  */
  readonly incidentPreference?: string;
  /**
  * The name of the policy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_policy#name AlertPolicy#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/alert_policy newrelic_alert_policy}
*/
export class AlertPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "newrelic_alert_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/newrelic/r/alert_policy newrelic_alert_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlertPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: AlertPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_alert_policy',
      terraformGeneratorMetadata: {
        providerName: 'newrelic'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountId = config.accountId;
    this._channelIds = config.channelIds;
    this._incidentPreference = config.incidentPreference;
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

  // channel_ids - computed: false, optional: true, required: false
  private _channelIds?: number[]; 
  public get channelIds() {
    return this.getNumberListAttribute('channel_ids');
  }
  public set channelIds(value: number[]) {
    this._channelIds = value;
  }
  public resetChannelIds() {
    this._channelIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelIdsInput() {
    return this._channelIds;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // incident_preference - computed: false, optional: true, required: false
  private _incidentPreference?: string; 
  public get incidentPreference() {
    return this.getStringAttribute('incident_preference');
  }
  public set incidentPreference(value: string) {
    this._incidentPreference = value;
  }
  public resetIncidentPreference() {
    this._incidentPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentPreferenceInput() {
    return this._incidentPreference;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.numberToTerraform(this._accountId),
      channel_ids: cdktf.listMapper(cdktf.numberToTerraform)(this._channelIds),
      incident_preference: cdktf.stringToTerraform(this._incidentPreference),
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
