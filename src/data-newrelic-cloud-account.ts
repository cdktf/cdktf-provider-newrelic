// https://www.terraform.io/docs/providers/newrelic/d/cloud_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNewrelicCloudAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the New Relic account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/cloud_account#account_id DataNewrelicCloudAccount#account_id}
  */
  readonly accountId?: number;
  /**
  * The cloud provider of the account, e.g. aws, gcp, azure
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/cloud_account#cloud_provider DataNewrelicCloudAccount#cloud_provider}
  */
  readonly cloudProvider: string;
  /**
  * The name of the cloud account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/cloud_account#name DataNewrelicCloudAccount#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/newrelic/d/cloud_account newrelic_cloud_account}
*/
export class DataNewrelicCloudAccount extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_cloud_account";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/newrelic/d/cloud_account newrelic_cloud_account} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNewrelicCloudAccountConfig
  */
  public constructor(scope: Construct, id: string, config: DataNewrelicCloudAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_cloud_account',
      terraformGeneratorMetadata: {
        providerName: 'newrelic',
        providerVersion: '2.43.3',
        providerVersionConstraint: '~> 2.32'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountId = config.accountId;
    this._cloudProvider = config.cloudProvider;
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

  // cloud_provider - computed: false, optional: false, required: true
  private _cloudProvider?: string; 
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }
  public set cloudProvider(value: string) {
    this._cloudProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderInput() {
    return this._cloudProvider;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.numberToTerraform(this._accountId),
      cloud_provider: cdktf.stringToTerraform(this._cloudProvider),
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
