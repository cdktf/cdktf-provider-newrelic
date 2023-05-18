// https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudAwsIntegrationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the account in New Relic.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#account_id CloudAwsIntegrations#account_id}
  */
  readonly accountId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#id CloudAwsIntegrations#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the linked AWS account in New Relic
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#linked_account_id CloudAwsIntegrations#linked_account_id}
  */
  readonly linkedAccountId: number;
  /**
  * alb block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#alb CloudAwsIntegrations#alb}
  */
  readonly alb?: CloudAwsIntegrationsAlb;
  /**
  * api_gateway block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#api_gateway CloudAwsIntegrations#api_gateway}
  */
  readonly apiGateway?: CloudAwsIntegrationsApiGateway;
  /**
  * auto_scaling block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#auto_scaling CloudAwsIntegrations#auto_scaling}
  */
  readonly autoScaling?: CloudAwsIntegrationsAutoScaling;
  /**
  * aws_app_sync block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_app_sync CloudAwsIntegrations#aws_app_sync}
  */
  readonly awsAppSync?: CloudAwsIntegrationsAwsAppSync;
  /**
  * aws_athena block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_athena CloudAwsIntegrations#aws_athena}
  */
  readonly awsAthena?: CloudAwsIntegrationsAwsAthena;
  /**
  * aws_cognito block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_cognito CloudAwsIntegrations#aws_cognito}
  */
  readonly awsCognito?: CloudAwsIntegrationsAwsCognito;
  /**
  * aws_connect block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_connect CloudAwsIntegrations#aws_connect}
  */
  readonly awsConnect?: CloudAwsIntegrationsAwsConnect;
  /**
  * aws_direct_connect block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_direct_connect CloudAwsIntegrations#aws_direct_connect}
  */
  readonly awsDirectConnect?: CloudAwsIntegrationsAwsDirectConnect;
  /**
  * aws_fsx block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_fsx CloudAwsIntegrations#aws_fsx}
  */
  readonly awsFsx?: CloudAwsIntegrationsAwsFsx;
  /**
  * billing block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#billing CloudAwsIntegrations#billing}
  */
  readonly billing?: CloudAwsIntegrationsBilling;
  /**
  * cloudtrail block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#cloudtrail CloudAwsIntegrations#cloudtrail}
  */
  readonly cloudtrail?: CloudAwsIntegrationsCloudtrail;
  /**
  * doc_db block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#doc_db CloudAwsIntegrations#doc_db}
  */
  readonly docDb?: CloudAwsIntegrationsDocDb;
  /**
  * ebs block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#ebs CloudAwsIntegrations#ebs}
  */
  readonly ebs?: CloudAwsIntegrationsEbs;
  /**
  * elasticache block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#elasticache CloudAwsIntegrations#elasticache}
  */
  readonly elasticache?: CloudAwsIntegrationsElasticache;
  /**
  * health block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#health CloudAwsIntegrations#health}
  */
  readonly health?: CloudAwsIntegrationsHealth;
  /**
  * s3 block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#s3 CloudAwsIntegrations#s3}
  */
  readonly s3?: CloudAwsIntegrationsS3;
  /**
  * sqs block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#sqs CloudAwsIntegrations#sqs}
  */
  readonly sqs?: CloudAwsIntegrationsSqs;
  /**
  * trusted_advisor block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#trusted_advisor CloudAwsIntegrations#trusted_advisor}
  */
  readonly trustedAdvisor?: CloudAwsIntegrationsTrustedAdvisor;
  /**
  * vpc block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#vpc CloudAwsIntegrations#vpc}
  */
  readonly vpc?: CloudAwsIntegrationsVpc;
  /**
  * x_ray block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#x_ray CloudAwsIntegrations#x_ray}
  */
  readonly xRay?: CloudAwsIntegrationsXRay;
}
export interface CloudAwsIntegrationsAlb {
  /**
  * Specify each AWS region that includes the resources that you want to monitor.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * Determine if extra inventory data be collected or not. May affect total data collection time and contribute to the Cloud provider API rate limit.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#fetch_extended_inventory CloudAwsIntegrations#fetch_extended_inventory}
  */
  readonly fetchExtendedInventory?: boolean | cdktf.IResolvable;
  /**
  * Specify if tags should be collected. May affect total data collection time and contribute to the Cloud provider API rate limit.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#fetch_tags CloudAwsIntegrations#fetch_tags}
  */
  readonly fetchTags?: boolean | cdktf.IResolvable;
  /**
  * Specify each name or prefix for the LBs that you want to monitor. Filter values are case-sensitive.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#load_balancer_prefixes CloudAwsIntegrations#load_balancer_prefixes}
  */
  readonly loadBalancerPrefixes?: string[];
  /**
  * The data polling interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_key CloudAwsIntegrations#tag_key}
  */
  readonly tagKey?: string;
  /**
  * Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.


  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_value CloudAwsIntegrations#tag_value}
  */
  readonly tagValue?: string;
}

export function cloudAwsIntegrationsAlbToTerraform(struct?: CloudAwsIntegrationsAlbOutputReference | CloudAwsIntegrationsAlb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.awsRegions),
    fetch_extended_inventory: cdktf.booleanToTerraform(struct!.fetchExtendedInventory),
    fetch_tags: cdktf.booleanToTerraform(struct!.fetchTags),
    load_balancer_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.loadBalancerPrefixes),
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
    tag_key: cdktf.stringToTerraform(struct!.tagKey),
    tag_value: cdktf.stringToTerraform(struct!.tagValue),
  }
}

export class CloudAwsIntegrationsAlbOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsIntegrationsAlb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegions = this._awsRegions;
    }
    if (this._fetchExtendedInventory !== undefined) {
      hasAnyValues = true;
      internalValueResult.fetchExtendedInventory = this._fetchExtendedInventory;
    }
    if (this._fetchTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.fetchTags = this._fetchTags;
    }
    if (this._loadBalancerPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerPrefixes = this._loadBalancerPrefixes;
    }
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    if (this._tagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagKey = this._tagKey;
    }
    if (this._tagValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValue = this._tagValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAwsIntegrationsAlb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsRegions = undefined;
      this._fetchExtendedInventory = undefined;
      this._fetchTags = undefined;
      this._loadBalancerPrefixes = undefined;
      this._metricsPollingInterval = undefined;
      this._tagKey = undefined;
      this._tagValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsRegions = value.awsRegions;
      this._fetchExtendedInventory = value.fetchExtendedInventory;
      this._fetchTags = value.fetchTags;
      this._loadBalancerPrefixes = value.loadBalancerPrefixes;
      this._metricsPollingInterval = value.metricsPollingInterval;
      this._tagKey = value.tagKey;
      this._tagValue = value.tagValue;
    }
  }

  // aws_regions - computed: false, optional: true, required: false
  private _awsRegions?: string[]; 
  public get awsRegions() {
    return this.getListAttribute('aws_regions');
  }
  public set awsRegions(value: string[]) {
    this._awsRegions = value;
  }
  public resetAwsRegions() {
    this._awsRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionsInput() {
    return this._awsRegions;
  }

  // fetch_extended_inventory - computed: false, optional: true, required: false
  private _fetchExtendedInventory?: boolean | cdktf.IResolvable; 
  public get fetchExtendedInventory() {
    return this.getBooleanAttribute('fetch_extended_inventory');
  }
  public set fetchExtendedInventory(value: boolean | cdktf.IResolvable) {
    this._fetchExtendedInventory = value;
  }
  public resetFetchExtendedInventory() {
    this._fetchExtendedInventory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchExtendedInventoryInput() {
    return this._fetchExtendedInventory;
  }

  // fetch_tags - computed: false, optional: true, required: false
  private _fetchTags?: boolean | cdktf.IResolvable; 
  public get fetchTags() {
    return this.getBooleanAttribute('fetch_tags');
  }
  public set fetchTags(value: boolean | cdktf.IResolvable) {
    this._fetchTags = value;
  }
  public resetFetchTags() {
    this._fetchTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchTagsInput() {
    return this._fetchTags;
  }

  // load_balancer_prefixes - computed: false, optional: true, required: false
  private _loadBalancerPrefixes?: string[]; 
  public get loadBalancerPrefixes() {
    return this.getListAttribute('load_balancer_prefixes');
  }
  public set loadBalancerPrefixes(value: string[]) {
    this._loadBalancerPrefixes = value;
  }
  public resetLoadBalancerPrefixes() {
    this._loadBalancerPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerPrefixesInput() {
    return this._loadBalancerPrefixes;
  }

  // metrics_polling_interval - computed: false, optional: true, required: false
  private _metricsPollingInterval?: number; 
  public get metricsPollingInterval() {
    return this.getNumberAttribute('metrics_polling_interval');
  }
  public set metricsPollingInterval(value: number) {
    this._metricsPollingInterval = value;
  }
  public resetMetricsPollingInterval() {
    this._metricsPollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsPollingIntervalInput() {
    return this._metricsPollingInterval;
  }

  // tag_key - computed: false, optional: true, required: false
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  public resetTagKey() {
    this._tagKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
  }

  // tag_value - computed: false, optional: true, required: false
  private _tagValue?: string; 
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
  public set tagValue(value: string) {
    this._tagValue = value;
  }
  public resetTagValue() {
    this._tagValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueInput() {
    return this._tagValue;
  }
}
export interface CloudAwsIntegrationsApiGateway {
  /**
  * Specify each AWS region that includes the resources that you want to monitor
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * The data polling interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Determine if extra inventory data be collected or not. May affect total data collection time and contribute to the Cloud provider API rate limit.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#stage_prefixes CloudAwsIntegrations#stage_prefixes}
  */
  readonly stagePrefixes?: string[];
  /**
  * Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_key CloudAwsIntegrations#tag_key}
  */
  readonly tagKey?: string;
  /**
  * Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.


  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_value CloudAwsIntegrations#tag_value}
  */
  readonly tagValue?: string;
}

export function cloudAwsIntegrationsApiGatewayToTerraform(struct?: CloudAwsIntegrationsApiGatewayOutputReference | CloudAwsIntegrationsApiGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.awsRegions),
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
    stage_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.stagePrefixes),
    tag_key: cdktf.stringToTerraform(struct!.tagKey),
    tag_value: cdktf.stringToTerraform(struct!.tagValue),
  }
}

export class CloudAwsIntegrationsApiGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsIntegrationsApiGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegions = this._awsRegions;
    }
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    if (this._stagePrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.stagePrefixes = this._stagePrefixes;
    }
    if (this._tagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagKey = this._tagKey;
    }
    if (this._tagValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValue = this._tagValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAwsIntegrationsApiGateway | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsRegions = undefined;
      this._metricsPollingInterval = undefined;
      this._stagePrefixes = undefined;
      this._tagKey = undefined;
      this._tagValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsRegions = value.awsRegions;
      this._metricsPollingInterval = value.metricsPollingInterval;
      this._stagePrefixes = value.stagePrefixes;
      this._tagKey = value.tagKey;
      this._tagValue = value.tagValue;
    }
  }

  // aws_regions - computed: false, optional: true, required: false
  private _awsRegions?: string[]; 
  public get awsRegions() {
    return this.getListAttribute('aws_regions');
  }
  public set awsRegions(value: string[]) {
    this._awsRegions = value;
  }
  public resetAwsRegions() {
    this._awsRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionsInput() {
    return this._awsRegions;
  }

  // metrics_polling_interval - computed: false, optional: true, required: false
  private _metricsPollingInterval?: number; 
  public get metricsPollingInterval() {
    return this.getNumberAttribute('metrics_polling_interval');
  }
  public set metricsPollingInterval(value: number) {
    this._metricsPollingInterval = value;
  }
  public resetMetricsPollingInterval() {
    this._metricsPollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsPollingIntervalInput() {
    return this._metricsPollingInterval;
  }

  // stage_prefixes - computed: false, optional: true, required: false
  private _stagePrefixes?: string[]; 
  public get stagePrefixes() {
    return this.getListAttribute('stage_prefixes');
  }
  public set stagePrefixes(value: string[]) {
    this._stagePrefixes = value;
  }
  public resetStagePrefixes() {
    this._stagePrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stagePrefixesInput() {
    return this._stagePrefixes;
  }

  // tag_key - computed: false, optional: true, required: false
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  public resetTagKey() {
    this._tagKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
  }

  // tag_value - computed: false, optional: true, required: false
  private _tagValue?: string; 
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
  public set tagValue(value: string) {
    this._tagValue = value;
  }
  public resetTagValue() {
    this._tagValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueInput() {
    return this._tagValue;
  }
}
export interface CloudAwsIntegrationsAutoScaling {
  /**
  * Specify each AWS region that includes the resources that you want to monitor.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * The data polling interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudAwsIntegrationsAutoScalingToTerraform(struct?: CloudAwsIntegrationsAutoScalingOutputReference | CloudAwsIntegrationsAutoScaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.awsRegions),
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
  }
}

export class CloudAwsIntegrationsAutoScalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsIntegrationsAutoScaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegions = this._awsRegions;
    }
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAwsIntegrationsAutoScaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsRegions = undefined;
      this._metricsPollingInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsRegions = value.awsRegions;
      this._metricsPollingInterval = value.metricsPollingInterval;
    }
  }

  // aws_regions - computed: false, optional: true, required: false
  private _awsRegions?: string[]; 
  public get awsRegions() {
    return this.getListAttribute('aws_regions');
  }
  public set awsRegions(value: string[]) {
    this._awsRegions = value;
  }
  public resetAwsRegions() {
    this._awsRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionsInput() {
    return this._awsRegions;
  }

  // metrics_polling_interval - computed: false, optional: true, required: false
  private _metricsPollingInterval?: number; 
  public get metricsPollingInterval() {
    return this.getNumberAttribute('metrics_polling_interval');
  }
  public set metricsPollingInterval(value: number) {
    this._metricsPollingInterval = value;
  }
  public resetMetricsPollingInterval() {
    this._metricsPollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsPollingIntervalInput() {
    return this._metricsPollingInterval;
  }
}
export interface CloudAwsIntegrationsAwsAppSync {
  /**
  * Specify each AWS region that includes the resources that you want to monitor.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * The data polling interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudAwsIntegrationsAwsAppSyncToTerraform(struct?: CloudAwsIntegrationsAwsAppSyncOutputReference | CloudAwsIntegrationsAwsAppSync): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.awsRegions),
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
  }
}

export class CloudAwsIntegrationsAwsAppSyncOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsIntegrationsAwsAppSync | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegions = this._awsRegions;
    }
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAwsIntegrationsAwsAppSync | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsRegions = undefined;
      this._metricsPollingInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsRegions = value.awsRegions;
      this._metricsPollingInterval = value.metricsPollingInterval;
    }
  }

  // aws_regions - computed: false, optional: true, required: false
  private _awsRegions?: string[]; 
  public get awsRegions() {
    return this.getListAttribute('aws_regions');
  }
  public set awsRegions(value: string[]) {
    this._awsRegions = value;
  }
  public resetAwsRegions() {
    this._awsRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionsInput() {
    return this._awsRegions;
  }

  // metrics_polling_interval - computed: false, optional: true, required: false
  private _metricsPollingInterval?: number; 
  public get metricsPollingInterval() {
    return this.getNumberAttribute('metrics_polling_interval');
  }
  public set metricsPollingInterval(value: number) {
    this._metricsPollingInterval = value;
  }
  public resetMetricsPollingInterval() {
    this._metricsPollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsPollingIntervalInput() {
    return this._metricsPollingInterval;
  }
}
export interface CloudAwsIntegrationsAwsAthena {
  /**
  * Specify each AWS region that includes the resources that you want to monitor.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * The data polling interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudAwsIntegrationsAwsAthenaToTerraform(struct?: CloudAwsIntegrationsAwsAthenaOutputReference | CloudAwsIntegrationsAwsAthena): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.awsRegions),
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
  }
}

export class CloudAwsIntegrationsAwsAthenaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsIntegrationsAwsAthena | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegions = this._awsRegions;
    }
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAwsIntegrationsAwsAthena | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsRegions = undefined;
      this._metricsPollingInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsRegions = value.awsRegions;
      this._metricsPollingInterval = value.metricsPollingInterval;
    }
  }

  // aws_regions - computed: false, optional: true, required: false
  private _awsRegions?: string[]; 
  public get awsRegions() {
    return this.getListAttribute('aws_regions');
  }
  public set awsRegions(value: string[]) {
    this._awsRegions = value;
  }
  public resetAwsRegions() {
    this._awsRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionsInput() {
    return this._awsRegions;
  }

  // metrics_polling_interval - computed: false, optional: true, required: false
  private _metricsPollingInterval?: number; 
  public get metricsPollingInterval() {
    return this.getNumberAttribute('metrics_polling_interval');
  }
  public set metricsPollingInterval(value: number) {
    this._metricsPollingInterval = value;
  }
  public resetMetricsPollingInterval() {
    this._metricsPollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsPollingIntervalInput() {
    return this._metricsPollingInterval;
  }
}
export interface CloudAwsIntegrationsAwsCognito {
  /**
  * Specify each AWS region that includes the resources that you want to monitor.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * The data polling interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudAwsIntegrationsAwsCognitoToTerraform(struct?: CloudAwsIntegrationsAwsCognitoOutputReference | CloudAwsIntegrationsAwsCognito): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.awsRegions),
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
  }
}

export class CloudAwsIntegrationsAwsCognitoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsIntegrationsAwsCognito | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegions = this._awsRegions;
    }
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAwsIntegrationsAwsCognito | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsRegions = undefined;
      this._metricsPollingInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsRegions = value.awsRegions;
      this._metricsPollingInterval = value.metricsPollingInterval;
    }
  }

  // aws_regions - computed: false, optional: true, required: false
  private _awsRegions?: string[]; 
  public get awsRegions() {
    return this.getListAttribute('aws_regions');
  }
  public set awsRegions(value: string[]) {
    this._awsRegions = value;
  }
  public resetAwsRegions() {
    this._awsRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionsInput() {
    return this._awsRegions;
  }

  // metrics_polling_interval - computed: false, optional: true, required: false
  private _metricsPollingInterval?: number; 
  public get metricsPollingInterval() {
    return this.getNumberAttribute('metrics_polling_interval');
  }
  public set metricsPollingInterval(value: number) {
    this._metricsPollingInterval = value;
  }
  public resetMetricsPollingInterval() {
    this._metricsPollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsPollingIntervalInput() {
    return this._metricsPollingInterval;
  }
}
export interface CloudAwsIntegrationsAwsConnect {
  /**
  * Specify each AWS region that includes the resources that you want to monitor.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * The data polling interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudAwsIntegrationsAwsConnectToTerraform(struct?: CloudAwsIntegrationsAwsConnectOutputReference | CloudAwsIntegrationsAwsConnect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.awsRegions),
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
  }
}

export class CloudAwsIntegrationsAwsConnectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsIntegrationsAwsConnect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegions = this._awsRegions;
    }
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAwsIntegrationsAwsConnect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsRegions = undefined;
      this._metricsPollingInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsRegions = value.awsRegions;
      this._metricsPollingInterval = value.metricsPollingInterval;
    }
  }

  // aws_regions - computed: false, optional: true, required: false
  private _awsRegions?: string[]; 
  public get awsRegions() {
    return this.getListAttribute('aws_regions');
  }
  public set awsRegions(value: string[]) {
    this._awsRegions = value;
  }
  public resetAwsRegions() {
    this._awsRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionsInput() {
    return this._awsRegions;
  }

  // metrics_polling_interval - computed: false, optional: true, required: false
  private _metricsPollingInterval?: number; 
  public get metricsPollingInterval() {
    return this.getNumberAttribute('metrics_polling_interval');
  }
  public set metricsPollingInterval(value: number) {
    this._metricsPollingInterval = value;
  }
  public resetMetricsPollingInterval() {
    this._metricsPollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsPollingIntervalInput() {
    return this._metricsPollingInterval;
  }
}
export interface CloudAwsIntegrationsAwsDirectConnect {
  /**
  * Specify each AWS region that includes the resources that you want to monitor.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * The data polling interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudAwsIntegrationsAwsDirectConnectToTerraform(struct?: CloudAwsIntegrationsAwsDirectConnectOutputReference | CloudAwsIntegrationsAwsDirectConnect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.awsRegions),
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
  }
}

export class CloudAwsIntegrationsAwsDirectConnectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsIntegrationsAwsDirectConnect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegions = this._awsRegions;
    }
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAwsIntegrationsAwsDirectConnect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsRegions = undefined;
      this._metricsPollingInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsRegions = value.awsRegions;
      this._metricsPollingInterval = value.metricsPollingInterval;
    }
  }

  // aws_regions - computed: false, optional: true, required: false
  private _awsRegions?: string[]; 
  public get awsRegions() {
    return this.getListAttribute('aws_regions');
  }
  public set awsRegions(value: string[]) {
    this._awsRegions = value;
  }
  public resetAwsRegions() {
    this._awsRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionsInput() {
    return this._awsRegions;
  }

  // metrics_polling_interval - computed: false, optional: true, required: false
  private _metricsPollingInterval?: number; 
  public get metricsPollingInterval() {
    return this.getNumberAttribute('metrics_polling_interval');
  }
  public set metricsPollingInterval(value: number) {
    this._metricsPollingInterval = value;
  }
  public resetMetricsPollingInterval() {
    this._metricsPollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsPollingIntervalInput() {
    return this._metricsPollingInterval;
  }
}
export interface CloudAwsIntegrationsAwsFsx {
  /**
  * Specify each AWS region that includes the resources that you want to monitor.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * The data polling interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudAwsIntegrationsAwsFsxToTerraform(struct?: CloudAwsIntegrationsAwsFsxOutputReference | CloudAwsIntegrationsAwsFsx): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.awsRegions),
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
  }
}

export class CloudAwsIntegrationsAwsFsxOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsIntegrationsAwsFsx | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegions = this._awsRegions;
    }
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAwsIntegrationsAwsFsx | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsRegions = undefined;
      this._metricsPollingInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsRegions = value.awsRegions;
      this._metricsPollingInterval = value.metricsPollingInterval;
    }
  }

  // aws_regions - computed: false, optional: true, required: false
  private _awsRegions?: string[]; 
  public get awsRegions() {
    return this.getListAttribute('aws_regions');
  }
  public set awsRegions(value: string[]) {
    this._awsRegions = value;
  }
  public resetAwsRegions() {
    this._awsRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionsInput() {
    return this._awsRegions;
  }

  // metrics_polling_interval - computed: false, optional: true, required: false
  private _metricsPollingInterval?: number; 
  public get metricsPollingInterval() {
    return this.getNumberAttribute('metrics_polling_interval');
  }
  public set metricsPollingInterval(value: number) {
    this._metricsPollingInterval = value;
  }
  public resetMetricsPollingInterval() {
    this._metricsPollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsPollingIntervalInput() {
    return this._metricsPollingInterval;
  }
}
export interface CloudAwsIntegrationsBilling {
  /**
  * The data polling interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudAwsIntegrationsBillingToTerraform(struct?: CloudAwsIntegrationsBillingOutputReference | CloudAwsIntegrationsBilling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
  }
}

export class CloudAwsIntegrationsBillingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsIntegrationsBilling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAwsIntegrationsBilling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
    }
  }

  // metrics_polling_interval - computed: false, optional: true, required: false
  private _metricsPollingInterval?: number; 
  public get metricsPollingInterval() {
    return this.getNumberAttribute('metrics_polling_interval');
  }
  public set metricsPollingInterval(value: number) {
    this._metricsPollingInterval = value;
  }
  public resetMetricsPollingInterval() {
    this._metricsPollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsPollingIntervalInput() {
    return this._metricsPollingInterval;
  }
}
export interface CloudAwsIntegrationsCloudtrail {
  /**
  * Specify each AWS region that includes the resources that you want to monitor.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * The data polling interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudAwsIntegrationsCloudtrailToTerraform(struct?: CloudAwsIntegrationsCloudtrailOutputReference | CloudAwsIntegrationsCloudtrail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.awsRegions),
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
  }
}

export class CloudAwsIntegrationsCloudtrailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsIntegrationsCloudtrail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegions = this._awsRegions;
    }
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAwsIntegrationsCloudtrail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsRegions = undefined;
      this._metricsPollingInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsRegions = value.awsRegions;
      this._metricsPollingInterval = value.metricsPollingInterval;
    }
  }

  // aws_regions - computed: false, optional: true, required: false
  private _awsRegions?: string[]; 
  public get awsRegions() {
    return this.getListAttribute('aws_regions');
  }
  public set awsRegions(value: string[]) {
    this._awsRegions = value;
  }
  public resetAwsRegions() {
    this._awsRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionsInput() {
    return this._awsRegions;
  }

  // metrics_polling_interval - computed: false, optional: true, required: false
  private _metricsPollingInterval?: number; 
  public get metricsPollingInterval() {
    return this.getNumberAttribute('metrics_polling_interval');
  }
  public set metricsPollingInterval(value: number) {
    this._metricsPollingInterval = value;
  }
  public resetMetricsPollingInterval() {
    this._metricsPollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsPollingIntervalInput() {
    return this._metricsPollingInterval;
  }
}
export interface CloudAwsIntegrationsDocDb {
  /**
  * Specify each AWS region that includes the resources that you want to monitor.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * The data polling interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudAwsIntegrationsDocDbToTerraform(struct?: CloudAwsIntegrationsDocDbOutputReference | CloudAwsIntegrationsDocDb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.awsRegions),
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
  }
}

export class CloudAwsIntegrationsDocDbOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsIntegrationsDocDb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegions = this._awsRegions;
    }
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAwsIntegrationsDocDb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsRegions = undefined;
      this._metricsPollingInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsRegions = value.awsRegions;
      this._metricsPollingInterval = value.metricsPollingInterval;
    }
  }

  // aws_regions - computed: false, optional: true, required: false
  private _awsRegions?: string[]; 
  public get awsRegions() {
    return this.getListAttribute('aws_regions');
  }
  public set awsRegions(value: string[]) {
    this._awsRegions = value;
  }
  public resetAwsRegions() {
    this._awsRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionsInput() {
    return this._awsRegions;
  }

  // metrics_polling_interval - computed: false, optional: true, required: false
  private _metricsPollingInterval?: number; 
  public get metricsPollingInterval() {
    return this.getNumberAttribute('metrics_polling_interval');
  }
  public set metricsPollingInterval(value: number) {
    this._metricsPollingInterval = value;
  }
  public resetMetricsPollingInterval() {
    this._metricsPollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsPollingIntervalInput() {
    return this._metricsPollingInterval;
  }
}
export interface CloudAwsIntegrationsEbs {
  /**
  * Specify each AWS region that includes the resources that you want to monitor.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * Determine if extra inventory data be collected or not. May affect total data collection time and contribute to the Cloud provider API rate limit.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#fetch_extended_inventory CloudAwsIntegrations#fetch_extended_inventory}
  */
  readonly fetchExtendedInventory?: boolean | cdktf.IResolvable;
  /**
  * The data polling interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_key CloudAwsIntegrations#tag_key}
  */
  readonly tagKey?: string;
  /**
  * Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_value CloudAwsIntegrations#tag_value}
  */
  readonly tagValue?: string;
}

export function cloudAwsIntegrationsEbsToTerraform(struct?: CloudAwsIntegrationsEbsOutputReference | CloudAwsIntegrationsEbs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.awsRegions),
    fetch_extended_inventory: cdktf.booleanToTerraform(struct!.fetchExtendedInventory),
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
    tag_key: cdktf.stringToTerraform(struct!.tagKey),
    tag_value: cdktf.stringToTerraform(struct!.tagValue),
  }
}

export class CloudAwsIntegrationsEbsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsIntegrationsEbs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegions = this._awsRegions;
    }
    if (this._fetchExtendedInventory !== undefined) {
      hasAnyValues = true;
      internalValueResult.fetchExtendedInventory = this._fetchExtendedInventory;
    }
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    if (this._tagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagKey = this._tagKey;
    }
    if (this._tagValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValue = this._tagValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAwsIntegrationsEbs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsRegions = undefined;
      this._fetchExtendedInventory = undefined;
      this._metricsPollingInterval = undefined;
      this._tagKey = undefined;
      this._tagValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsRegions = value.awsRegions;
      this._fetchExtendedInventory = value.fetchExtendedInventory;
      this._metricsPollingInterval = value.metricsPollingInterval;
      this._tagKey = value.tagKey;
      this._tagValue = value.tagValue;
    }
  }

  // aws_regions - computed: false, optional: true, required: false
  private _awsRegions?: string[]; 
  public get awsRegions() {
    return this.getListAttribute('aws_regions');
  }
  public set awsRegions(value: string[]) {
    this._awsRegions = value;
  }
  public resetAwsRegions() {
    this._awsRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionsInput() {
    return this._awsRegions;
  }

  // fetch_extended_inventory - computed: false, optional: true, required: false
  private _fetchExtendedInventory?: boolean | cdktf.IResolvable; 
  public get fetchExtendedInventory() {
    return this.getBooleanAttribute('fetch_extended_inventory');
  }
  public set fetchExtendedInventory(value: boolean | cdktf.IResolvable) {
    this._fetchExtendedInventory = value;
  }
  public resetFetchExtendedInventory() {
    this._fetchExtendedInventory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchExtendedInventoryInput() {
    return this._fetchExtendedInventory;
  }

  // metrics_polling_interval - computed: false, optional: true, required: false
  private _metricsPollingInterval?: number; 
  public get metricsPollingInterval() {
    return this.getNumberAttribute('metrics_polling_interval');
  }
  public set metricsPollingInterval(value: number) {
    this._metricsPollingInterval = value;
  }
  public resetMetricsPollingInterval() {
    this._metricsPollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsPollingIntervalInput() {
    return this._metricsPollingInterval;
  }

  // tag_key - computed: false, optional: true, required: false
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  public resetTagKey() {
    this._tagKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
  }

  // tag_value - computed: false, optional: true, required: false
  private _tagValue?: string; 
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
  public set tagValue(value: string) {
    this._tagValue = value;
  }
  public resetTagValue() {
    this._tagValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueInput() {
    return this._tagValue;
  }
}
export interface CloudAwsIntegrationsElasticache {
  /**
  * Specify each AWS region that includes the resources that you want to monitor.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * Specify if tags should be collected. May affect total data collection time and contribute to the Cloud provider API rate limit.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#fetch_tags CloudAwsIntegrations#fetch_tags}
  */
  readonly fetchTags?: boolean | cdktf.IResolvable;
  /**
  * The data polling interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_key CloudAwsIntegrations#tag_key}
  */
  readonly tagKey?: string;
  /**
  * Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.


  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_value CloudAwsIntegrations#tag_value}
  */
  readonly tagValue?: string;
}

export function cloudAwsIntegrationsElasticacheToTerraform(struct?: CloudAwsIntegrationsElasticacheOutputReference | CloudAwsIntegrationsElasticache): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.awsRegions),
    fetch_tags: cdktf.booleanToTerraform(struct!.fetchTags),
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
    tag_key: cdktf.stringToTerraform(struct!.tagKey),
    tag_value: cdktf.stringToTerraform(struct!.tagValue),
  }
}

export class CloudAwsIntegrationsElasticacheOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsIntegrationsElasticache | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegions = this._awsRegions;
    }
    if (this._fetchTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.fetchTags = this._fetchTags;
    }
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    if (this._tagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagKey = this._tagKey;
    }
    if (this._tagValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValue = this._tagValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAwsIntegrationsElasticache | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsRegions = undefined;
      this._fetchTags = undefined;
      this._metricsPollingInterval = undefined;
      this._tagKey = undefined;
      this._tagValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsRegions = value.awsRegions;
      this._fetchTags = value.fetchTags;
      this._metricsPollingInterval = value.metricsPollingInterval;
      this._tagKey = value.tagKey;
      this._tagValue = value.tagValue;
    }
  }

  // aws_regions - computed: false, optional: true, required: false
  private _awsRegions?: string[]; 
  public get awsRegions() {
    return this.getListAttribute('aws_regions');
  }
  public set awsRegions(value: string[]) {
    this._awsRegions = value;
  }
  public resetAwsRegions() {
    this._awsRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionsInput() {
    return this._awsRegions;
  }

  // fetch_tags - computed: false, optional: true, required: false
  private _fetchTags?: boolean | cdktf.IResolvable; 
  public get fetchTags() {
    return this.getBooleanAttribute('fetch_tags');
  }
  public set fetchTags(value: boolean | cdktf.IResolvable) {
    this._fetchTags = value;
  }
  public resetFetchTags() {
    this._fetchTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchTagsInput() {
    return this._fetchTags;
  }

  // metrics_polling_interval - computed: false, optional: true, required: false
  private _metricsPollingInterval?: number; 
  public get metricsPollingInterval() {
    return this.getNumberAttribute('metrics_polling_interval');
  }
  public set metricsPollingInterval(value: number) {
    this._metricsPollingInterval = value;
  }
  public resetMetricsPollingInterval() {
    this._metricsPollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsPollingIntervalInput() {
    return this._metricsPollingInterval;
  }

  // tag_key - computed: false, optional: true, required: false
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  public resetTagKey() {
    this._tagKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
  }

  // tag_value - computed: false, optional: true, required: false
  private _tagValue?: string; 
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
  public set tagValue(value: string) {
    this._tagValue = value;
  }
  public resetTagValue() {
    this._tagValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueInput() {
    return this._tagValue;
  }
}
export interface CloudAwsIntegrationsHealth {
  /**
  * The data polling interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudAwsIntegrationsHealthToTerraform(struct?: CloudAwsIntegrationsHealthOutputReference | CloudAwsIntegrationsHealth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
  }
}

export class CloudAwsIntegrationsHealthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsIntegrationsHealth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAwsIntegrationsHealth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
    }
  }

  // metrics_polling_interval - computed: false, optional: true, required: false
  private _metricsPollingInterval?: number; 
  public get metricsPollingInterval() {
    return this.getNumberAttribute('metrics_polling_interval');
  }
  public set metricsPollingInterval(value: number) {
    this._metricsPollingInterval = value;
  }
  public resetMetricsPollingInterval() {
    this._metricsPollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsPollingIntervalInput() {
    return this._metricsPollingInterval;
  }
}
export interface CloudAwsIntegrationsS3 {
  /**
  * Determine if extra inventory data be collected or not. May affect total data collection time and contribute to the Cloud provider API rate limit.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#fetch_extended_inventory CloudAwsIntegrations#fetch_extended_inventory}
  */
  readonly fetchExtendedInventory?: boolean | cdktf.IResolvable;
  /**
  * Specify if tags should be collected. May affect total data collection time and contribute to the Cloud provider API rate limit.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#fetch_tags CloudAwsIntegrations#fetch_tags}
  */
  readonly fetchTags?: boolean | cdktf.IResolvable;
  /**
  * The data polling interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_key CloudAwsIntegrations#tag_key}
  */
  readonly tagKey?: string;
  /**
  * Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_value CloudAwsIntegrations#tag_value}
  */
  readonly tagValue?: string;
}

export function cloudAwsIntegrationsS3ToTerraform(struct?: CloudAwsIntegrationsS3OutputReference | CloudAwsIntegrationsS3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fetch_extended_inventory: cdktf.booleanToTerraform(struct!.fetchExtendedInventory),
    fetch_tags: cdktf.booleanToTerraform(struct!.fetchTags),
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
    tag_key: cdktf.stringToTerraform(struct!.tagKey),
    tag_value: cdktf.stringToTerraform(struct!.tagValue),
  }
}

export class CloudAwsIntegrationsS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsIntegrationsS3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fetchExtendedInventory !== undefined) {
      hasAnyValues = true;
      internalValueResult.fetchExtendedInventory = this._fetchExtendedInventory;
    }
    if (this._fetchTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.fetchTags = this._fetchTags;
    }
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    if (this._tagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagKey = this._tagKey;
    }
    if (this._tagValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValue = this._tagValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAwsIntegrationsS3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fetchExtendedInventory = undefined;
      this._fetchTags = undefined;
      this._metricsPollingInterval = undefined;
      this._tagKey = undefined;
      this._tagValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fetchExtendedInventory = value.fetchExtendedInventory;
      this._fetchTags = value.fetchTags;
      this._metricsPollingInterval = value.metricsPollingInterval;
      this._tagKey = value.tagKey;
      this._tagValue = value.tagValue;
    }
  }

  // fetch_extended_inventory - computed: false, optional: true, required: false
  private _fetchExtendedInventory?: boolean | cdktf.IResolvable; 
  public get fetchExtendedInventory() {
    return this.getBooleanAttribute('fetch_extended_inventory');
  }
  public set fetchExtendedInventory(value: boolean | cdktf.IResolvable) {
    this._fetchExtendedInventory = value;
  }
  public resetFetchExtendedInventory() {
    this._fetchExtendedInventory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchExtendedInventoryInput() {
    return this._fetchExtendedInventory;
  }

  // fetch_tags - computed: false, optional: true, required: false
  private _fetchTags?: boolean | cdktf.IResolvable; 
  public get fetchTags() {
    return this.getBooleanAttribute('fetch_tags');
  }
  public set fetchTags(value: boolean | cdktf.IResolvable) {
    this._fetchTags = value;
  }
  public resetFetchTags() {
    this._fetchTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchTagsInput() {
    return this._fetchTags;
  }

  // metrics_polling_interval - computed: false, optional: true, required: false
  private _metricsPollingInterval?: number; 
  public get metricsPollingInterval() {
    return this.getNumberAttribute('metrics_polling_interval');
  }
  public set metricsPollingInterval(value: number) {
    this._metricsPollingInterval = value;
  }
  public resetMetricsPollingInterval() {
    this._metricsPollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsPollingIntervalInput() {
    return this._metricsPollingInterval;
  }

  // tag_key - computed: false, optional: true, required: false
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  public resetTagKey() {
    this._tagKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
  }

  // tag_value - computed: false, optional: true, required: false
  private _tagValue?: string; 
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
  public set tagValue(value: string) {
    this._tagValue = value;
  }
  public resetTagValue() {
    this._tagValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueInput() {
    return this._tagValue;
  }
}
export interface CloudAwsIntegrationsSqs {
  /**
  * Specify each AWS region that includes the resources that you want to monitor.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * Determine if extra inventory data be collected or not. May affect total data collection time and contribute to the Cloud provider API rate limit.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#fetch_extended_inventory CloudAwsIntegrations#fetch_extended_inventory}
  */
  readonly fetchExtendedInventory?: boolean | cdktf.IResolvable;
  /**
  * Specify if tags should be collected. May affect total data collection time and contribute to the Cloud provider API rate limit.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#fetch_tags CloudAwsIntegrations#fetch_tags}
  */
  readonly fetchTags?: boolean | cdktf.IResolvable;
  /**
  * The data polling interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Specify each name or prefix for the Queues that you want to monitor. Filter values are case-sensitive.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#queue_prefixes CloudAwsIntegrations#queue_prefixes}
  */
  readonly queuePrefixes?: string[];
  /**
  * Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_key CloudAwsIntegrations#tag_key}
  */
  readonly tagKey?: string;
  /**
  * Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_value CloudAwsIntegrations#tag_value}
  */
  readonly tagValue?: string;
}

export function cloudAwsIntegrationsSqsToTerraform(struct?: CloudAwsIntegrationsSqsOutputReference | CloudAwsIntegrationsSqs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.awsRegions),
    fetch_extended_inventory: cdktf.booleanToTerraform(struct!.fetchExtendedInventory),
    fetch_tags: cdktf.booleanToTerraform(struct!.fetchTags),
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
    queue_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.queuePrefixes),
    tag_key: cdktf.stringToTerraform(struct!.tagKey),
    tag_value: cdktf.stringToTerraform(struct!.tagValue),
  }
}

export class CloudAwsIntegrationsSqsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsIntegrationsSqs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegions = this._awsRegions;
    }
    if (this._fetchExtendedInventory !== undefined) {
      hasAnyValues = true;
      internalValueResult.fetchExtendedInventory = this._fetchExtendedInventory;
    }
    if (this._fetchTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.fetchTags = this._fetchTags;
    }
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    if (this._queuePrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.queuePrefixes = this._queuePrefixes;
    }
    if (this._tagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagKey = this._tagKey;
    }
    if (this._tagValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValue = this._tagValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAwsIntegrationsSqs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsRegions = undefined;
      this._fetchExtendedInventory = undefined;
      this._fetchTags = undefined;
      this._metricsPollingInterval = undefined;
      this._queuePrefixes = undefined;
      this._tagKey = undefined;
      this._tagValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsRegions = value.awsRegions;
      this._fetchExtendedInventory = value.fetchExtendedInventory;
      this._fetchTags = value.fetchTags;
      this._metricsPollingInterval = value.metricsPollingInterval;
      this._queuePrefixes = value.queuePrefixes;
      this._tagKey = value.tagKey;
      this._tagValue = value.tagValue;
    }
  }

  // aws_regions - computed: false, optional: true, required: false
  private _awsRegions?: string[]; 
  public get awsRegions() {
    return this.getListAttribute('aws_regions');
  }
  public set awsRegions(value: string[]) {
    this._awsRegions = value;
  }
  public resetAwsRegions() {
    this._awsRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionsInput() {
    return this._awsRegions;
  }

  // fetch_extended_inventory - computed: false, optional: true, required: false
  private _fetchExtendedInventory?: boolean | cdktf.IResolvable; 
  public get fetchExtendedInventory() {
    return this.getBooleanAttribute('fetch_extended_inventory');
  }
  public set fetchExtendedInventory(value: boolean | cdktf.IResolvable) {
    this._fetchExtendedInventory = value;
  }
  public resetFetchExtendedInventory() {
    this._fetchExtendedInventory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchExtendedInventoryInput() {
    return this._fetchExtendedInventory;
  }

  // fetch_tags - computed: false, optional: true, required: false
  private _fetchTags?: boolean | cdktf.IResolvable; 
  public get fetchTags() {
    return this.getBooleanAttribute('fetch_tags');
  }
  public set fetchTags(value: boolean | cdktf.IResolvable) {
    this._fetchTags = value;
  }
  public resetFetchTags() {
    this._fetchTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchTagsInput() {
    return this._fetchTags;
  }

  // metrics_polling_interval - computed: false, optional: true, required: false
  private _metricsPollingInterval?: number; 
  public get metricsPollingInterval() {
    return this.getNumberAttribute('metrics_polling_interval');
  }
  public set metricsPollingInterval(value: number) {
    this._metricsPollingInterval = value;
  }
  public resetMetricsPollingInterval() {
    this._metricsPollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsPollingIntervalInput() {
    return this._metricsPollingInterval;
  }

  // queue_prefixes - computed: false, optional: true, required: false
  private _queuePrefixes?: string[]; 
  public get queuePrefixes() {
    return this.getListAttribute('queue_prefixes');
  }
  public set queuePrefixes(value: string[]) {
    this._queuePrefixes = value;
  }
  public resetQueuePrefixes() {
    this._queuePrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queuePrefixesInput() {
    return this._queuePrefixes;
  }

  // tag_key - computed: false, optional: true, required: false
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  public resetTagKey() {
    this._tagKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
  }

  // tag_value - computed: false, optional: true, required: false
  private _tagValue?: string; 
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
  public set tagValue(value: string) {
    this._tagValue = value;
  }
  public resetTagValue() {
    this._tagValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueInput() {
    return this._tagValue;
  }
}
export interface CloudAwsIntegrationsTrustedAdvisor {
  /**
  * The data polling interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudAwsIntegrationsTrustedAdvisorToTerraform(struct?: CloudAwsIntegrationsTrustedAdvisorOutputReference | CloudAwsIntegrationsTrustedAdvisor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
  }
}

export class CloudAwsIntegrationsTrustedAdvisorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsIntegrationsTrustedAdvisor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAwsIntegrationsTrustedAdvisor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
    }
  }

  // metrics_polling_interval - computed: false, optional: true, required: false
  private _metricsPollingInterval?: number; 
  public get metricsPollingInterval() {
    return this.getNumberAttribute('metrics_polling_interval');
  }
  public set metricsPollingInterval(value: number) {
    this._metricsPollingInterval = value;
  }
  public resetMetricsPollingInterval() {
    this._metricsPollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsPollingIntervalInput() {
    return this._metricsPollingInterval;
  }
}
export interface CloudAwsIntegrationsVpc {
  /**
  * Specify each AWS region that includes the resources that you want to monitor.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * Specify if NAT gateway should be monitored. May affect total data collection time and contribute to the Cloud provider API rate limit.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#fetch_nat_gateway CloudAwsIntegrations#fetch_nat_gateway}
  */
  readonly fetchNatGateway?: boolean | cdktf.IResolvable;
  /**
  * Specify if VPN should be monitored. May affect total data collection time and contribute to the Cloud provider API rate limit.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#fetch_vpn CloudAwsIntegrations#fetch_vpn}
  */
  readonly fetchVpn?: boolean | cdktf.IResolvable;
  /**
  * The data polling interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_key CloudAwsIntegrations#tag_key}
  */
  readonly tagKey?: string;
  /**
  * Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_value CloudAwsIntegrations#tag_value}
  */
  readonly tagValue?: string;
}

export function cloudAwsIntegrationsVpcToTerraform(struct?: CloudAwsIntegrationsVpcOutputReference | CloudAwsIntegrationsVpc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.awsRegions),
    fetch_nat_gateway: cdktf.booleanToTerraform(struct!.fetchNatGateway),
    fetch_vpn: cdktf.booleanToTerraform(struct!.fetchVpn),
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
    tag_key: cdktf.stringToTerraform(struct!.tagKey),
    tag_value: cdktf.stringToTerraform(struct!.tagValue),
  }
}

export class CloudAwsIntegrationsVpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsIntegrationsVpc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegions = this._awsRegions;
    }
    if (this._fetchNatGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.fetchNatGateway = this._fetchNatGateway;
    }
    if (this._fetchVpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fetchVpn = this._fetchVpn;
    }
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    if (this._tagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagKey = this._tagKey;
    }
    if (this._tagValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValue = this._tagValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAwsIntegrationsVpc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsRegions = undefined;
      this._fetchNatGateway = undefined;
      this._fetchVpn = undefined;
      this._metricsPollingInterval = undefined;
      this._tagKey = undefined;
      this._tagValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsRegions = value.awsRegions;
      this._fetchNatGateway = value.fetchNatGateway;
      this._fetchVpn = value.fetchVpn;
      this._metricsPollingInterval = value.metricsPollingInterval;
      this._tagKey = value.tagKey;
      this._tagValue = value.tagValue;
    }
  }

  // aws_regions - computed: false, optional: true, required: false
  private _awsRegions?: string[]; 
  public get awsRegions() {
    return this.getListAttribute('aws_regions');
  }
  public set awsRegions(value: string[]) {
    this._awsRegions = value;
  }
  public resetAwsRegions() {
    this._awsRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionsInput() {
    return this._awsRegions;
  }

  // fetch_nat_gateway - computed: false, optional: true, required: false
  private _fetchNatGateway?: boolean | cdktf.IResolvable; 
  public get fetchNatGateway() {
    return this.getBooleanAttribute('fetch_nat_gateway');
  }
  public set fetchNatGateway(value: boolean | cdktf.IResolvable) {
    this._fetchNatGateway = value;
  }
  public resetFetchNatGateway() {
    this._fetchNatGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchNatGatewayInput() {
    return this._fetchNatGateway;
  }

  // fetch_vpn - computed: false, optional: true, required: false
  private _fetchVpn?: boolean | cdktf.IResolvable; 
  public get fetchVpn() {
    return this.getBooleanAttribute('fetch_vpn');
  }
  public set fetchVpn(value: boolean | cdktf.IResolvable) {
    this._fetchVpn = value;
  }
  public resetFetchVpn() {
    this._fetchVpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchVpnInput() {
    return this._fetchVpn;
  }

  // metrics_polling_interval - computed: false, optional: true, required: false
  private _metricsPollingInterval?: number; 
  public get metricsPollingInterval() {
    return this.getNumberAttribute('metrics_polling_interval');
  }
  public set metricsPollingInterval(value: number) {
    this._metricsPollingInterval = value;
  }
  public resetMetricsPollingInterval() {
    this._metricsPollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsPollingIntervalInput() {
    return this._metricsPollingInterval;
  }

  // tag_key - computed: false, optional: true, required: false
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  public resetTagKey() {
    this._tagKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
  }

  // tag_value - computed: false, optional: true, required: false
  private _tagValue?: string; 
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
  public set tagValue(value: string) {
    this._tagValue = value;
  }
  public resetTagValue() {
    this._tagValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueInput() {
    return this._tagValue;
  }
}
export interface CloudAwsIntegrationsXRay {
  /**
  * Specify each AWS region that includes the resources that you want to monitor.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * The data polling interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudAwsIntegrationsXRayToTerraform(struct?: CloudAwsIntegrationsXRayOutputReference | CloudAwsIntegrationsXRay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.awsRegions),
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
  }
}

export class CloudAwsIntegrationsXRayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsIntegrationsXRay | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegions = this._awsRegions;
    }
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAwsIntegrationsXRay | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsRegions = undefined;
      this._metricsPollingInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsRegions = value.awsRegions;
      this._metricsPollingInterval = value.metricsPollingInterval;
    }
  }

  // aws_regions - computed: false, optional: true, required: false
  private _awsRegions?: string[]; 
  public get awsRegions() {
    return this.getListAttribute('aws_regions');
  }
  public set awsRegions(value: string[]) {
    this._awsRegions = value;
  }
  public resetAwsRegions() {
    this._awsRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionsInput() {
    return this._awsRegions;
  }

  // metrics_polling_interval - computed: false, optional: true, required: false
  private _metricsPollingInterval?: number; 
  public get metricsPollingInterval() {
    return this.getNumberAttribute('metrics_polling_interval');
  }
  public set metricsPollingInterval(value: number) {
    this._metricsPollingInterval = value;
  }
  public resetMetricsPollingInterval() {
    this._metricsPollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsPollingIntervalInput() {
    return this._metricsPollingInterval;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations newrelic_cloud_aws_integrations}
*/
export class CloudAwsIntegrations extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_cloud_aws_integrations";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations newrelic_cloud_aws_integrations} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudAwsIntegrationsConfig
  */
  public constructor(scope: Construct, id: string, config: CloudAwsIntegrationsConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_cloud_aws_integrations',
      terraformGeneratorMetadata: {
        providerName: 'newrelic',
        providerVersion: '3.23.0',
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
    this._linkedAccountId = config.linkedAccountId;
    this._alb.internalValue = config.alb;
    this._apiGateway.internalValue = config.apiGateway;
    this._autoScaling.internalValue = config.autoScaling;
    this._awsAppSync.internalValue = config.awsAppSync;
    this._awsAthena.internalValue = config.awsAthena;
    this._awsCognito.internalValue = config.awsCognito;
    this._awsConnect.internalValue = config.awsConnect;
    this._awsDirectConnect.internalValue = config.awsDirectConnect;
    this._awsFsx.internalValue = config.awsFsx;
    this._billing.internalValue = config.billing;
    this._cloudtrail.internalValue = config.cloudtrail;
    this._docDb.internalValue = config.docDb;
    this._ebs.internalValue = config.ebs;
    this._elasticache.internalValue = config.elasticache;
    this._health.internalValue = config.health;
    this._s3.internalValue = config.s3;
    this._sqs.internalValue = config.sqs;
    this._trustedAdvisor.internalValue = config.trustedAdvisor;
    this._vpc.internalValue = config.vpc;
    this._xRay.internalValue = config.xRay;
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

  // linked_account_id - computed: false, optional: false, required: true
  private _linkedAccountId?: number; 
  public get linkedAccountId() {
    return this.getNumberAttribute('linked_account_id');
  }
  public set linkedAccountId(value: number) {
    this._linkedAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linkedAccountIdInput() {
    return this._linkedAccountId;
  }

  // alb - computed: false, optional: true, required: false
  private _alb = new CloudAwsIntegrationsAlbOutputReference(this, "alb");
  public get alb() {
    return this._alb;
  }
  public putAlb(value: CloudAwsIntegrationsAlb) {
    this._alb.internalValue = value;
  }
  public resetAlb() {
    this._alb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get albInput() {
    return this._alb.internalValue;
  }

  // api_gateway - computed: false, optional: true, required: false
  private _apiGateway = new CloudAwsIntegrationsApiGatewayOutputReference(this, "api_gateway");
  public get apiGateway() {
    return this._apiGateway;
  }
  public putApiGateway(value: CloudAwsIntegrationsApiGateway) {
    this._apiGateway.internalValue = value;
  }
  public resetApiGateway() {
    this._apiGateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGatewayInput() {
    return this._apiGateway.internalValue;
  }

  // auto_scaling - computed: false, optional: true, required: false
  private _autoScaling = new CloudAwsIntegrationsAutoScalingOutputReference(this, "auto_scaling");
  public get autoScaling() {
    return this._autoScaling;
  }
  public putAutoScaling(value: CloudAwsIntegrationsAutoScaling) {
    this._autoScaling.internalValue = value;
  }
  public resetAutoScaling() {
    this._autoScaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingInput() {
    return this._autoScaling.internalValue;
  }

  // aws_app_sync - computed: false, optional: true, required: false
  private _awsAppSync = new CloudAwsIntegrationsAwsAppSyncOutputReference(this, "aws_app_sync");
  public get awsAppSync() {
    return this._awsAppSync;
  }
  public putAwsAppSync(value: CloudAwsIntegrationsAwsAppSync) {
    this._awsAppSync.internalValue = value;
  }
  public resetAwsAppSync() {
    this._awsAppSync.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAppSyncInput() {
    return this._awsAppSync.internalValue;
  }

  // aws_athena - computed: false, optional: true, required: false
  private _awsAthena = new CloudAwsIntegrationsAwsAthenaOutputReference(this, "aws_athena");
  public get awsAthena() {
    return this._awsAthena;
  }
  public putAwsAthena(value: CloudAwsIntegrationsAwsAthena) {
    this._awsAthena.internalValue = value;
  }
  public resetAwsAthena() {
    this._awsAthena.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAthenaInput() {
    return this._awsAthena.internalValue;
  }

  // aws_cognito - computed: false, optional: true, required: false
  private _awsCognito = new CloudAwsIntegrationsAwsCognitoOutputReference(this, "aws_cognito");
  public get awsCognito() {
    return this._awsCognito;
  }
  public putAwsCognito(value: CloudAwsIntegrationsAwsCognito) {
    this._awsCognito.internalValue = value;
  }
  public resetAwsCognito() {
    this._awsCognito.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsCognitoInput() {
    return this._awsCognito.internalValue;
  }

  // aws_connect - computed: false, optional: true, required: false
  private _awsConnect = new CloudAwsIntegrationsAwsConnectOutputReference(this, "aws_connect");
  public get awsConnect() {
    return this._awsConnect;
  }
  public putAwsConnect(value: CloudAwsIntegrationsAwsConnect) {
    this._awsConnect.internalValue = value;
  }
  public resetAwsConnect() {
    this._awsConnect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsConnectInput() {
    return this._awsConnect.internalValue;
  }

  // aws_direct_connect - computed: false, optional: true, required: false
  private _awsDirectConnect = new CloudAwsIntegrationsAwsDirectConnectOutputReference(this, "aws_direct_connect");
  public get awsDirectConnect() {
    return this._awsDirectConnect;
  }
  public putAwsDirectConnect(value: CloudAwsIntegrationsAwsDirectConnect) {
    this._awsDirectConnect.internalValue = value;
  }
  public resetAwsDirectConnect() {
    this._awsDirectConnect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsDirectConnectInput() {
    return this._awsDirectConnect.internalValue;
  }

  // aws_fsx - computed: false, optional: true, required: false
  private _awsFsx = new CloudAwsIntegrationsAwsFsxOutputReference(this, "aws_fsx");
  public get awsFsx() {
    return this._awsFsx;
  }
  public putAwsFsx(value: CloudAwsIntegrationsAwsFsx) {
    this._awsFsx.internalValue = value;
  }
  public resetAwsFsx() {
    this._awsFsx.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsFsxInput() {
    return this._awsFsx.internalValue;
  }

  // billing - computed: false, optional: true, required: false
  private _billing = new CloudAwsIntegrationsBillingOutputReference(this, "billing");
  public get billing() {
    return this._billing;
  }
  public putBilling(value: CloudAwsIntegrationsBilling) {
    this._billing.internalValue = value;
  }
  public resetBilling() {
    this._billing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingInput() {
    return this._billing.internalValue;
  }

  // cloudtrail - computed: false, optional: true, required: false
  private _cloudtrail = new CloudAwsIntegrationsCloudtrailOutputReference(this, "cloudtrail");
  public get cloudtrail() {
    return this._cloudtrail;
  }
  public putCloudtrail(value: CloudAwsIntegrationsCloudtrail) {
    this._cloudtrail.internalValue = value;
  }
  public resetCloudtrail() {
    this._cloudtrail.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudtrailInput() {
    return this._cloudtrail.internalValue;
  }

  // doc_db - computed: false, optional: true, required: false
  private _docDb = new CloudAwsIntegrationsDocDbOutputReference(this, "doc_db");
  public get docDb() {
    return this._docDb;
  }
  public putDocDb(value: CloudAwsIntegrationsDocDb) {
    this._docDb.internalValue = value;
  }
  public resetDocDb() {
    this._docDb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get docDbInput() {
    return this._docDb.internalValue;
  }

  // ebs - computed: false, optional: true, required: false
  private _ebs = new CloudAwsIntegrationsEbsOutputReference(this, "ebs");
  public get ebs() {
    return this._ebs;
  }
  public putEbs(value: CloudAwsIntegrationsEbs) {
    this._ebs.internalValue = value;
  }
  public resetEbs() {
    this._ebs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsInput() {
    return this._ebs.internalValue;
  }

  // elasticache - computed: false, optional: true, required: false
  private _elasticache = new CloudAwsIntegrationsElasticacheOutputReference(this, "elasticache");
  public get elasticache() {
    return this._elasticache;
  }
  public putElasticache(value: CloudAwsIntegrationsElasticache) {
    this._elasticache.internalValue = value;
  }
  public resetElasticache() {
    this._elasticache.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticacheInput() {
    return this._elasticache.internalValue;
  }

  // health - computed: false, optional: true, required: false
  private _health = new CloudAwsIntegrationsHealthOutputReference(this, "health");
  public get health() {
    return this._health;
  }
  public putHealth(value: CloudAwsIntegrationsHealth) {
    this._health.internalValue = value;
  }
  public resetHealth() {
    this._health.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthInput() {
    return this._health.internalValue;
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new CloudAwsIntegrationsS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: CloudAwsIntegrationsS3) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }

  // sqs - computed: false, optional: true, required: false
  private _sqs = new CloudAwsIntegrationsSqsOutputReference(this, "sqs");
  public get sqs() {
    return this._sqs;
  }
  public putSqs(value: CloudAwsIntegrationsSqs) {
    this._sqs.internalValue = value;
  }
  public resetSqs() {
    this._sqs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqsInput() {
    return this._sqs.internalValue;
  }

  // trusted_advisor - computed: false, optional: true, required: false
  private _trustedAdvisor = new CloudAwsIntegrationsTrustedAdvisorOutputReference(this, "trusted_advisor");
  public get trustedAdvisor() {
    return this._trustedAdvisor;
  }
  public putTrustedAdvisor(value: CloudAwsIntegrationsTrustedAdvisor) {
    this._trustedAdvisor.internalValue = value;
  }
  public resetTrustedAdvisor() {
    this._trustedAdvisor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedAdvisorInput() {
    return this._trustedAdvisor.internalValue;
  }

  // vpc - computed: false, optional: true, required: false
  private _vpc = new CloudAwsIntegrationsVpcOutputReference(this, "vpc");
  public get vpc() {
    return this._vpc;
  }
  public putVpc(value: CloudAwsIntegrationsVpc) {
    this._vpc.internalValue = value;
  }
  public resetVpc() {
    this._vpc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcInput() {
    return this._vpc.internalValue;
  }

  // x_ray - computed: false, optional: true, required: false
  private _xRay = new CloudAwsIntegrationsXRayOutputReference(this, "x_ray");
  public get xRay() {
    return this._xRay;
  }
  public putXRay(value: CloudAwsIntegrationsXRay) {
    this._xRay.internalValue = value;
  }
  public resetXRay() {
    this._xRay.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xRayInput() {
    return this._xRay.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.numberToTerraform(this._accountId),
      id: cdktf.stringToTerraform(this._id),
      linked_account_id: cdktf.numberToTerraform(this._linkedAccountId),
      alb: cloudAwsIntegrationsAlbToTerraform(this._alb.internalValue),
      api_gateway: cloudAwsIntegrationsApiGatewayToTerraform(this._apiGateway.internalValue),
      auto_scaling: cloudAwsIntegrationsAutoScalingToTerraform(this._autoScaling.internalValue),
      aws_app_sync: cloudAwsIntegrationsAwsAppSyncToTerraform(this._awsAppSync.internalValue),
      aws_athena: cloudAwsIntegrationsAwsAthenaToTerraform(this._awsAthena.internalValue),
      aws_cognito: cloudAwsIntegrationsAwsCognitoToTerraform(this._awsCognito.internalValue),
      aws_connect: cloudAwsIntegrationsAwsConnectToTerraform(this._awsConnect.internalValue),
      aws_direct_connect: cloudAwsIntegrationsAwsDirectConnectToTerraform(this._awsDirectConnect.internalValue),
      aws_fsx: cloudAwsIntegrationsAwsFsxToTerraform(this._awsFsx.internalValue),
      billing: cloudAwsIntegrationsBillingToTerraform(this._billing.internalValue),
      cloudtrail: cloudAwsIntegrationsCloudtrailToTerraform(this._cloudtrail.internalValue),
      doc_db: cloudAwsIntegrationsDocDbToTerraform(this._docDb.internalValue),
      ebs: cloudAwsIntegrationsEbsToTerraform(this._ebs.internalValue),
      elasticache: cloudAwsIntegrationsElasticacheToTerraform(this._elasticache.internalValue),
      health: cloudAwsIntegrationsHealthToTerraform(this._health.internalValue),
      s3: cloudAwsIntegrationsS3ToTerraform(this._s3.internalValue),
      sqs: cloudAwsIntegrationsSqsToTerraform(this._sqs.internalValue),
      trusted_advisor: cloudAwsIntegrationsTrustedAdvisorToTerraform(this._trustedAdvisor.internalValue),
      vpc: cloudAwsIntegrationsVpcToTerraform(this._vpc.internalValue),
      x_ray: cloudAwsIntegrationsXRayToTerraform(this._xRay.internalValue),
    };
  }
}
