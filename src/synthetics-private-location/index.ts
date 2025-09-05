/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/synthetics_private_location
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SyntheticsPrivateLocationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the account in New Relic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/synthetics_private_location#account_id SyntheticsPrivateLocation#account_id}
  */
  readonly accountId?: number;
  /**
  * The private location description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/synthetics_private_location#description SyntheticsPrivateLocation#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/synthetics_private_location#id SyntheticsPrivateLocation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the private location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/synthetics_private_location#name SyntheticsPrivateLocation#name}
  */
  readonly name: string;
  /**
  * The private location requires a password to edit if value is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/synthetics_private_location#verified_script_execution SyntheticsPrivateLocation#verified_script_execution}
  */
  readonly verifiedScriptExecution?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/synthetics_private_location newrelic_synthetics_private_location}
*/
export class SyntheticsPrivateLocation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_synthetics_private_location";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SyntheticsPrivateLocation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SyntheticsPrivateLocation to import
  * @param importFromId The id of the existing SyntheticsPrivateLocation that should be imported. Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/synthetics_private_location#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SyntheticsPrivateLocation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "newrelic_synthetics_private_location", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/synthetics_private_location newrelic_synthetics_private_location} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SyntheticsPrivateLocationConfig
  */
  public constructor(scope: Construct, id: string, config: SyntheticsPrivateLocationConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_synthetics_private_location',
      terraformGeneratorMetadata: {
        providerName: 'newrelic',
        providerVersion: '3.68.0',
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
    this._verifiedScriptExecution = config.verifiedScriptExecution;
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

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // domain_id - computed: true, optional: false, required: false
  public get domainId() {
    return this.getStringAttribute('domain_id');
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

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // location_id - computed: true, optional: false, required: false
  public get locationId() {
    return this.getStringAttribute('location_id');
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

  // verified_script_execution - computed: false, optional: true, required: false
  private _verifiedScriptExecution?: boolean | cdktf.IResolvable; 
  public get verifiedScriptExecution() {
    return this.getBooleanAttribute('verified_script_execution');
  }
  public set verifiedScriptExecution(value: boolean | cdktf.IResolvable) {
    this._verifiedScriptExecution = value;
  }
  public resetVerifiedScriptExecution() {
    this._verifiedScriptExecution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifiedScriptExecutionInput() {
    return this._verifiedScriptExecution;
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
      verified_script_execution: cdktf.booleanToTerraform(this._verifiedScriptExecution),
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
      verified_script_execution: {
        value: cdktf.booleanToHclTerraform(this._verifiedScriptExecution),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
