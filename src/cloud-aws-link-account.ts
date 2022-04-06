// https://www.terraform.io/docs/providers/newrelic/r/cloud_aws_link_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudAwsLinkAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * The New Relic account ID where you want to link the AWS account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_aws_link_account#account_id CloudAwsLinkAccount#account_id}
  */
  readonly accountId?: number;
  /**
  * The AWS role ARN.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_aws_link_account#arn CloudAwsLinkAccount#arn}
  */
  readonly arn: string;
  /**
  * How metrics will be collected. Defaults to `PULL` if empty.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_aws_link_account#metric_collection_mode CloudAwsLinkAccount#metric_collection_mode}
  */
  readonly metricCollectionMode?: string;
  /**
  * The name of the linked account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_aws_link_account#name CloudAwsLinkAccount#name}
  */
  readonly name: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_aws_link_account#timeouts CloudAwsLinkAccount#timeouts}
  */
  readonly timeouts?: CloudAwsLinkAccountTimeouts;
}
export interface CloudAwsLinkAccountTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_aws_link_account#create CloudAwsLinkAccount#create}
  */
  readonly create?: string;
}

export function cloudAwsLinkAccountTimeoutsToTerraform(struct?: CloudAwsLinkAccountTimeoutsOutputReference | CloudAwsLinkAccountTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}

export class CloudAwsLinkAccountTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsLinkAccountTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAwsLinkAccountTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_aws_link_account newrelic_cloud_aws_link_account}
*/
export class CloudAwsLinkAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_cloud_aws_link_account";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_aws_link_account newrelic_cloud_aws_link_account} Resource
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
        providerVersion: '2.41.4',
        providerVersionConstraint: '~> 2.32'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountId = config.accountId;
    this._arn = config.arn;
    this._metricCollectionMode = config.metricCollectionMode;
    this._name = config.name;
    this._timeouts.internalValue = config.timeouts;
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
  public get id() {
    return this.getStringAttribute('id');
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudAwsLinkAccountTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudAwsLinkAccountTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.numberToTerraform(this._accountId),
      arn: cdktf.stringToTerraform(this._arn),
      metric_collection_mode: cdktf.stringToTerraform(this._metricCollectionMode),
      name: cdktf.stringToTerraform(this._name),
      timeouts: cloudAwsLinkAccountTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
