// https://www.terraform.io/docs/providers/newrelic/r/nrql_drop_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NrqlDropRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account with the NRQL drop rule will be put.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_drop_rule#account_id NrqlDropRule#account_id}
  */
  readonly accountId?: number;
  /**
  * The drop rule action (drop_data, drop_attributes, or drop_attributes_from_metric_aggregates).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_drop_rule#action NrqlDropRule#action}
  */
  readonly action: string;
  /**
  * Provides additional information about the rule.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_drop_rule#description NrqlDropRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_drop_rule#id NrqlDropRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Explains which data to apply the drop rule to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_drop_rule#nrql NrqlDropRule#nrql}
  */
  readonly nrql: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_drop_rule newrelic_nrql_drop_rule}
*/
export class NrqlDropRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_nrql_drop_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_drop_rule newrelic_nrql_drop_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NrqlDropRuleConfig
  */
  public constructor(scope: Construct, id: string, config: NrqlDropRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_nrql_drop_rule',
      terraformGeneratorMetadata: {
        providerName: 'newrelic',
        providerVersion: '3.19.0',
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
    this._action = config.action;
    this._description = config.description;
    this._id = config.id;
    this._nrql = config.nrql;
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

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // nrql - computed: false, optional: false, required: true
  private _nrql?: string; 
  public get nrql() {
    return this.getStringAttribute('nrql');
  }
  public set nrql(value: string) {
    this._nrql = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nrqlInput() {
    return this._nrql;
  }

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.numberToTerraform(this._accountId),
      action: cdktf.stringToTerraform(this._action),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      nrql: cdktf.stringToTerraform(this._nrql),
    };
  }
}
