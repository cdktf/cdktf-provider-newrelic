// https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/synthetics_alert_condition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SyntheticsAlertConditionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set whether to enable the alert condition. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/synthetics_alert_condition#enabled SyntheticsAlertCondition#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/synthetics_alert_condition#id SyntheticsAlertCondition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the Synthetics monitor to be referenced in the alert condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/synthetics_alert_condition#monitor_id SyntheticsAlertCondition#monitor_id}
  */
  readonly monitorId: string;
  /**
  * The title of this condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/synthetics_alert_condition#name SyntheticsAlertCondition#name}
  */
  readonly name: string;
  /**
  * The ID of the policy where this condition should be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/synthetics_alert_condition#policy_id SyntheticsAlertCondition#policy_id}
  */
  readonly policyId: number;
  /**
  * Runbook URL to display in notifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/synthetics_alert_condition#runbook_url SyntheticsAlertCondition#runbook_url}
  */
  readonly runbookUrl?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/synthetics_alert_condition newrelic_synthetics_alert_condition}
*/
export class SyntheticsAlertCondition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_synthetics_alert_condition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SyntheticsAlertCondition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SyntheticsAlertCondition to import
  * @param importFromId The id of the existing SyntheticsAlertCondition that should be imported. Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/synthetics_alert_condition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SyntheticsAlertCondition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "newrelic_synthetics_alert_condition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/synthetics_alert_condition newrelic_synthetics_alert_condition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SyntheticsAlertConditionConfig
  */
  public constructor(scope: Construct, id: string, config: SyntheticsAlertConditionConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_synthetics_alert_condition',
      terraformGeneratorMetadata: {
        providerName: 'newrelic',
        providerVersion: '3.52.1',
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
    this._enabled = config.enabled;
    this._id = config.id;
    this._monitorId = config.monitorId;
    this._name = config.name;
    this._policyId = config.policyId;
    this._runbookUrl = config.runbookUrl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // entity_guid - computed: true, optional: false, required: false
  public get entityGuid() {
    return this.getStringAttribute('entity_guid');
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

  // monitor_id - computed: false, optional: false, required: true
  private _monitorId?: string; 
  public get monitorId() {
    return this.getStringAttribute('monitor_id');
  }
  public set monitorId(value: string) {
    this._monitorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorIdInput() {
    return this._monitorId;
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

  // policy_id - computed: false, optional: false, required: true
  private _policyId?: number; 
  public get policyId() {
    return this.getNumberAttribute('policy_id');
  }
  public set policyId(value: number) {
    this._policyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // runbook_url - computed: false, optional: true, required: false
  private _runbookUrl?: string; 
  public get runbookUrl() {
    return this.getStringAttribute('runbook_url');
  }
  public set runbookUrl(value: string) {
    this._runbookUrl = value;
  }
  public resetRunbookUrl() {
    this._runbookUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runbookUrlInput() {
    return this._runbookUrl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      monitor_id: cdktf.stringToTerraform(this._monitorId),
      name: cdktf.stringToTerraform(this._name),
      policy_id: cdktf.numberToTerraform(this._policyId),
      runbook_url: cdktf.stringToTerraform(this._runbookUrl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
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
      monitor_id: {
        value: cdktf.stringToHclTerraform(this._monitorId),
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
      policy_id: {
        value: cdktf.numberToHclTerraform(this._policyId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      runbook_url: {
        value: cdktf.stringToHclTerraform(this._runbookUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
