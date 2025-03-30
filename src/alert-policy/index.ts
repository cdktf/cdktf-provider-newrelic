/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/newrelic/newrelic/3.60.0/docs/resources/alert_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlertPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The New Relic account ID to operate on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.0/docs/resources/alert_policy#account_id AlertPolicy#account_id}
  */
  readonly accountId?: number;
  /**
  * An array of channel IDs (integers) to assign to the policy. Adding or removing channel IDs from this array will result in a new alert policy resource being created and the old one being destroyed. Also note that channel IDs cannot be imported via terraform import.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.0/docs/resources/alert_policy#channel_ids AlertPolicy#channel_ids}
  */
  readonly channelIds?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.0/docs/resources/alert_policy#id AlertPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The rollup strategy for the policy. Options include: PER_POLICY, PER_CONDITION, or PER_CONDITION_AND_TARGET. The default is PER_POLICY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.0/docs/resources/alert_policy#incident_preference AlertPolicy#incident_preference}
  */
  readonly incidentPreference?: string;
  /**
  * The name of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.0/docs/resources/alert_policy#name AlertPolicy#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.0/docs/resources/alert_policy newrelic_alert_policy}
*/
export class AlertPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_alert_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AlertPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AlertPolicy to import
  * @param importFromId The id of the existing AlertPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.0/docs/resources/alert_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlertPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "newrelic_alert_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.0/docs/resources/alert_policy newrelic_alert_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlertPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: AlertPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_alert_policy',
      terraformGeneratorMetadata: {
        providerName: 'newrelic',
        providerVersion: '3.60.0',
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
    this._channelIds = config.channelIds;
    this._id = config.id;
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
      channel_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._channelIds),
      id: cdktf.stringToTerraform(this._id),
      incident_preference: cdktf.stringToTerraform(this._incidentPreference),
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
      channel_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._channelIds),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      incident_preference: {
        value: cdktf.stringToHclTerraform(this._incidentPreference),
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
