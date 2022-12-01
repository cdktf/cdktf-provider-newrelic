// https://www.terraform.io/docs/providers/newrelic/d/synthetics_private_location
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNewrelicSyntheticsPrivateLocationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the account in New Relic.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/synthetics_private_location#account_id DataNewrelicSyntheticsPrivateLocation#account_id}
  */
  readonly accountId?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/synthetics_private_location#id DataNewrelicSyntheticsPrivateLocation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the Synthetics monitor private location.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/synthetics_private_location#name DataNewrelicSyntheticsPrivateLocation#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/newrelic/d/synthetics_private_location newrelic_synthetics_private_location}
*/
export class DataNewrelicSyntheticsPrivateLocation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_synthetics_private_location";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/newrelic/d/synthetics_private_location newrelic_synthetics_private_location} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNewrelicSyntheticsPrivateLocationConfig
  */
  public constructor(scope: Construct, id: string, config: DataNewrelicSyntheticsPrivateLocationConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_synthetics_private_location',
      terraformGeneratorMetadata: {
        providerName: 'newrelic',
        providerVersion: '3.8.0',
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

  // account_id - computed: false, optional: true, required: false
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
}
