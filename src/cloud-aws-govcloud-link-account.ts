// https://www.terraform.io/docs/providers/newrelic/r/cloud_aws_govcloud_link_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudAwsGovcloudLinkAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * access-key-id of awsGovcloud account
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_aws_govcloud_link_account#access_key_id CloudAwsGovcloudLinkAccount#access_key_id}
  */
  readonly accessKeyId: string;
  /**
  * The ID of the account in New Relic.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_aws_govcloud_link_account#account_id CloudAwsGovcloudLinkAccount#account_id}
  */
  readonly accountId?: number;
  /**
  * awsGovcloud account id
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_aws_govcloud_link_account#aws_account_id CloudAwsGovcloudLinkAccount#aws_account_id}
  */
  readonly awsAccountId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_aws_govcloud_link_account#id CloudAwsGovcloudLinkAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * push or pull
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_aws_govcloud_link_account#metric_collection_mode CloudAwsGovcloudLinkAccount#metric_collection_mode}
  */
  readonly metricCollectionMode?: string;
  /**
  * name of the account
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_aws_govcloud_link_account#name CloudAwsGovcloudLinkAccount#name}
  */
  readonly name: string;
  /**
  * secret access key of the awsGovcloud account
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_aws_govcloud_link_account#secret_access_key CloudAwsGovcloudLinkAccount#secret_access_key}
  */
  readonly secretAccessKey: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_aws_govcloud_link_account newrelic_cloud_aws_govcloud_link_account}
*/
export class CloudAwsGovcloudLinkAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_cloud_aws_govcloud_link_account";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_aws_govcloud_link_account newrelic_cloud_aws_govcloud_link_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudAwsGovcloudLinkAccountConfig
  */
  public constructor(scope: Construct, id: string, config: CloudAwsGovcloudLinkAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_cloud_aws_govcloud_link_account',
      terraformGeneratorMetadata: {
        providerName: 'newrelic',
        providerVersion: '2.48.2',
        providerVersionConstraint: '~> 2.32'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accessKeyId = config.accessKeyId;
    this._accountId = config.accountId;
    this._awsAccountId = config.awsAccountId;
    this._id = config.id;
    this._metricCollectionMode = config.metricCollectionMode;
    this._name = config.name;
    this._secretAccessKey = config.secretAccessKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_key_id - computed: false, optional: false, required: true
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

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

  // aws_account_id - computed: false, optional: false, required: true
  private _awsAccountId?: string; 
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }
  public set awsAccountId(value: string) {
    this._awsAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountIdInput() {
    return this._awsAccountId;
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

  // secret_access_key - computed: false, optional: false, required: true
  private _secretAccessKey?: string; 
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }
  public set secretAccessKey(value: string) {
    this._secretAccessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyInput() {
    return this._secretAccessKey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_key_id: cdktf.stringToTerraform(this._accessKeyId),
      account_id: cdktf.numberToTerraform(this._accountId),
      aws_account_id: cdktf.stringToTerraform(this._awsAccountId),
      id: cdktf.stringToTerraform(this._id),
      metric_collection_mode: cdktf.stringToTerraform(this._metricCollectionMode),
      name: cdktf.stringToTerraform(this._name),
      secret_access_key: cdktf.stringToTerraform(this._secretAccessKey),
    };
  }
}
