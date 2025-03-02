// https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/cloud_aws_link_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudAwsLinkAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * The New Relic account ID where you want to link the AWS account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/cloud_aws_link_account#account_id CloudAwsLinkAccount#account_id}
  */
  readonly accountId?: number;
  /**
  * The AWS role ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/cloud_aws_link_account#arn CloudAwsLinkAccount#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/cloud_aws_link_account#id CloudAwsLinkAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * How metrics will be collected. Defaults to `PULL` if empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/cloud_aws_link_account#metric_collection_mode CloudAwsLinkAccount#metric_collection_mode}
  */
  readonly metricCollectionMode?: string;
  /**
  * The name of the linked account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/cloud_aws_link_account#name CloudAwsLinkAccount#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/cloud_aws_link_account newrelic_cloud_aws_link_account}
*/
export class CloudAwsLinkAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_cloud_aws_link_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudAwsLinkAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudAwsLinkAccount to import
  * @param importFromId The id of the existing CloudAwsLinkAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/cloud_aws_link_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudAwsLinkAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "newrelic_cloud_aws_link_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/cloud_aws_link_account newrelic_cloud_aws_link_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudAwsLinkAccountConfig
  */
  public constructor(scope: Construct, id: string, config: CloudAwsLinkAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_cloud_aws_link_account',
      terraformGeneratorMetadata: {
        providerName: 'newrelic',
        providerVersion: '3.57.0',
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
    this._arn = config.arn;
    this._id = config.id;
    this._metricCollectionMode = config.metricCollectionMode;
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

  // arn - computed: false, optional: false, required: true
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
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

  // metric_collection_mode - computed: false, optional: true, required: false
  private _metricCollectionMode?: string; 
  public get metricCollectionMode() {
    return this.getStringAttribute('metric_collection_mode');
  }
  public set metricCollectionMode(value: string) {
    this._metricCollectionMode = value;
  }
  public resetMetricCollectionMode() {
    this._metricCollectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricCollectionModeInput() {
    return this._metricCollectionMode;
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
      arn: cdktf.stringToTerraform(this._arn),
      id: cdktf.stringToTerraform(this._id),
      metric_collection_mode: cdktf.stringToTerraform(this._metricCollectionMode),
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
      arn: {
        value: cdktf.stringToHclTerraform(this._arn),
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
      metric_collection_mode: {
        value: cdktf.stringToHclTerraform(this._metricCollectionMode),
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
