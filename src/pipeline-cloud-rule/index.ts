/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/newrelic/newrelic/3.74.0/docs/resources/pipeline_cloud_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PipelineCloudRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account ID where the Pipeline Cloud rule will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.74.0/docs/resources/pipeline_cloud_rule#account_id PipelineCloudRule#account_id}
  */
  readonly accountId?: number;
  /**
  * Provides additional information about the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.74.0/docs/resources/pipeline_cloud_rule#description PipelineCloudRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.74.0/docs/resources/pipeline_cloud_rule#id PipelineCloudRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the rule. This must be unique within an account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.74.0/docs/resources/pipeline_cloud_rule#name PipelineCloudRule#name}
  */
  readonly name: string;
  /**
  * The NRQL query that defines which data will be processed by this pipeline cloud rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.74.0/docs/resources/pipeline_cloud_rule#nrql PipelineCloudRule#nrql}
  */
  readonly nrql: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.74.0/docs/resources/pipeline_cloud_rule newrelic_pipeline_cloud_rule}
*/
export class PipelineCloudRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_pipeline_cloud_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PipelineCloudRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PipelineCloudRule to import
  * @param importFromId The id of the existing PipelineCloudRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.74.0/docs/resources/pipeline_cloud_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PipelineCloudRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "newrelic_pipeline_cloud_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/newrelic/newrelic/3.74.0/docs/resources/pipeline_cloud_rule newrelic_pipeline_cloud_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PipelineCloudRuleConfig
  */
  public constructor(scope: Construct, id: string, config: PipelineCloudRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_pipeline_cloud_rule',
      terraformGeneratorMetadata: {
        providerName: 'newrelic',
        providerVersion: '3.74.0',
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
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.numberToTerraform(this._accountId),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      nrql: cdktf.stringToTerraform(this._nrql),
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      nrql: {
        value: cdktf.stringToHclTerraform(this._nrql),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
