// https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudAwsGovcloudIntegrationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the account in New Relic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#account_id CloudAwsGovcloudIntegrations#account_id}
  */
  readonly accountId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#id CloudAwsGovcloudIntegrations#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the linked AwsGovCloud account in New Relic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#linked_account_id CloudAwsGovcloudIntegrations#linked_account_id}
  */
  readonly linkedAccountId: number;
  /**
  * alb block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#alb CloudAwsGovcloudIntegrations#alb}
  */
  readonly alb?: CloudAwsGovcloudIntegrationsAlb;
  /**
  * api_gateway block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#api_gateway CloudAwsGovcloudIntegrations#api_gateway}
  */
  readonly apiGateway?: CloudAwsGovcloudIntegrationsApiGateway;
  /**
  * auto_scaling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#auto_scaling CloudAwsGovcloudIntegrations#auto_scaling}
  */
  readonly autoScaling?: CloudAwsGovcloudIntegrationsAutoScaling;
  /**
  * aws_direct_connect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#aws_direct_connect CloudAwsGovcloudIntegrations#aws_direct_connect}
  */
  readonly awsDirectConnect?: CloudAwsGovcloudIntegrationsAwsDirectConnect;
  /**
  * aws_states block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#aws_states CloudAwsGovcloudIntegrations#aws_states}
  */
  readonly awsStates?: CloudAwsGovcloudIntegrationsAwsStates;
  /**
  * cloudtrail block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#cloudtrail CloudAwsGovcloudIntegrations#cloudtrail}
  */
  readonly cloudtrail?: CloudAwsGovcloudIntegrationsCloudtrail;
  /**
  * dynamo_db block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#dynamo_db CloudAwsGovcloudIntegrations#dynamo_db}
  */
  readonly dynamoDb?: CloudAwsGovcloudIntegrationsDynamoDb;
  /**
  * ebs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#ebs CloudAwsGovcloudIntegrations#ebs}
  */
  readonly ebs?: CloudAwsGovcloudIntegrationsEbs;
  /**
  * ec2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#ec2 CloudAwsGovcloudIntegrations#ec2}
  */
  readonly ec2?: CloudAwsGovcloudIntegrationsEc2;
  /**
  * elastic_search block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#elastic_search CloudAwsGovcloudIntegrations#elastic_search}
  */
  readonly elasticSearch?: CloudAwsGovcloudIntegrationsElasticSearch;
  /**
  * elb block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#elb CloudAwsGovcloudIntegrations#elb}
  */
  readonly elb?: CloudAwsGovcloudIntegrationsElb;
  /**
  * emr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#emr CloudAwsGovcloudIntegrations#emr}
  */
  readonly emr?: CloudAwsGovcloudIntegrationsEmr;
  /**
  * iam block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#iam CloudAwsGovcloudIntegrations#iam}
  */
  readonly iam?: CloudAwsGovcloudIntegrationsIam;
  /**
  * lambda block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#lambda CloudAwsGovcloudIntegrations#lambda}
  */
  readonly lambda?: CloudAwsGovcloudIntegrationsLambda;
  /**
  * rds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#rds CloudAwsGovcloudIntegrations#rds}
  */
  readonly rds?: CloudAwsGovcloudIntegrationsRds;
  /**
  * red_shift block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#red_shift CloudAwsGovcloudIntegrations#red_shift}
  */
  readonly redShift?: CloudAwsGovcloudIntegrationsRedShift;
  /**
  * route53 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#route53 CloudAwsGovcloudIntegrations#route53}
  */
  readonly route53?: CloudAwsGovcloudIntegrationsRoute53;
  /**
  * s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#s3 CloudAwsGovcloudIntegrations#s3}
  */
  readonly s3?: CloudAwsGovcloudIntegrationsS3;
  /**
  * sns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#sns CloudAwsGovcloudIntegrations#sns}
  */
  readonly sns?: CloudAwsGovcloudIntegrationsSns;
  /**
  * sqs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#sqs CloudAwsGovcloudIntegrations#sqs}
  */
  readonly sqs?: CloudAwsGovcloudIntegrationsSqs;
}
export interface CloudAwsGovcloudIntegrationsAlb {
  /**
  * Specify each AWS region that includes the resources that you want to monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#aws_regions CloudAwsGovcloudIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * Determine if extra inventory data be collected or not. May affect total data collection time and contribute to the Cloud provider API rate limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#fetch_extended_inventory CloudAwsGovcloudIntegrations#fetch_extended_inventory}
  */
  readonly fetchExtendedInventory?: boolean | cdktf.IResolvable;
  /**
  * Specify if tags should be collected. May affect total data collection time and contribute to the Cloud provider API rate limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#fetch_tags CloudAwsGovcloudIntegrations#fetch_tags}
  */
  readonly fetchTags?: boolean | cdktf.IResolvable;
  /**
  * Specify each name or prefix for the LBs that you want to monitor. Filter values are case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#load_balancer_prefixes CloudAwsGovcloudIntegrations#load_balancer_prefixes}
  */
  readonly loadBalancerPrefixes?: string[];
  /**
  * The data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#metrics_polling_interval CloudAwsGovcloudIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#tag_key CloudAwsGovcloudIntegrations#tag_key}
  */
  readonly tagKey?: string;
  /**
  * Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.
  * 
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#tag_value CloudAwsGovcloudIntegrations#tag_value}
  */
  readonly tagValue?: string;
}

export function cloudAwsGovcloudIntegrationsAlbToTerraform(struct?: CloudAwsGovcloudIntegrationsAlbOutputReference | CloudAwsGovcloudIntegrationsAlb): any {
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


export function cloudAwsGovcloudIntegrationsAlbToHclTerraform(struct?: CloudAwsGovcloudIntegrationsAlbOutputReference | CloudAwsGovcloudIntegrationsAlb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.awsRegions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    fetch_extended_inventory: {
      value: cdktf.booleanToHclTerraform(struct!.fetchExtendedInventory),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fetch_tags: {
      value: cdktf.booleanToHclTerraform(struct!.fetchTags),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    load_balancer_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.loadBalancerPrefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    metrics_polling_interval: {
      value: cdktf.numberToHclTerraform(struct!.metricsPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tag_key: {
      value: cdktf.stringToHclTerraform(struct!.tagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_value: {
      value: cdktf.stringToHclTerraform(struct!.tagValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAwsGovcloudIntegrationsAlbOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsGovcloudIntegrationsAlb | undefined {
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

  public set internalValue(value: CloudAwsGovcloudIntegrationsAlb | undefined) {
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
export interface CloudAwsGovcloudIntegrationsApiGateway {
  /**
  * Specify each AWS region that includes the resources that you want to monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#aws_regions CloudAwsGovcloudIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * The data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#metrics_polling_interval CloudAwsGovcloudIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Determine if extra inventory data be collected or not. May affect total data collection time and contribute to the Cloud provider API rate limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#stage_prefixes CloudAwsGovcloudIntegrations#stage_prefixes}
  */
  readonly stagePrefixes?: string[];
  /**
  * Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#tag_key CloudAwsGovcloudIntegrations#tag_key}
  */
  readonly tagKey?: string;
  /**
  * Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.
  * 
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#tag_value CloudAwsGovcloudIntegrations#tag_value}
  */
  readonly tagValue?: string;
}

export function cloudAwsGovcloudIntegrationsApiGatewayToTerraform(struct?: CloudAwsGovcloudIntegrationsApiGatewayOutputReference | CloudAwsGovcloudIntegrationsApiGateway): any {
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


export function cloudAwsGovcloudIntegrationsApiGatewayToHclTerraform(struct?: CloudAwsGovcloudIntegrationsApiGatewayOutputReference | CloudAwsGovcloudIntegrationsApiGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.awsRegions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    metrics_polling_interval: {
      value: cdktf.numberToHclTerraform(struct!.metricsPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stage_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.stagePrefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tag_key: {
      value: cdktf.stringToHclTerraform(struct!.tagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_value: {
      value: cdktf.stringToHclTerraform(struct!.tagValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAwsGovcloudIntegrationsApiGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsGovcloudIntegrationsApiGateway | undefined {
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

  public set internalValue(value: CloudAwsGovcloudIntegrationsApiGateway | undefined) {
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
export interface CloudAwsGovcloudIntegrationsAutoScaling {
  /**
  * Specify each AWS region that includes the resources that you want to monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#aws_regions CloudAwsGovcloudIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * The data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#metrics_polling_interval CloudAwsGovcloudIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudAwsGovcloudIntegrationsAutoScalingToTerraform(struct?: CloudAwsGovcloudIntegrationsAutoScalingOutputReference | CloudAwsGovcloudIntegrationsAutoScaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.awsRegions),
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudAwsGovcloudIntegrationsAutoScalingToHclTerraform(struct?: CloudAwsGovcloudIntegrationsAutoScalingOutputReference | CloudAwsGovcloudIntegrationsAutoScaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.awsRegions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    metrics_polling_interval: {
      value: cdktf.numberToHclTerraform(struct!.metricsPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAwsGovcloudIntegrationsAutoScalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsGovcloudIntegrationsAutoScaling | undefined {
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

  public set internalValue(value: CloudAwsGovcloudIntegrationsAutoScaling | undefined) {
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
export interface CloudAwsGovcloudIntegrationsAwsDirectConnect {
  /**
  * Specify each AWS region that includes the resources that you want to monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#aws_regions CloudAwsGovcloudIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * The data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#metrics_polling_interval CloudAwsGovcloudIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudAwsGovcloudIntegrationsAwsDirectConnectToTerraform(struct?: CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference | CloudAwsGovcloudIntegrationsAwsDirectConnect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.awsRegions),
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudAwsGovcloudIntegrationsAwsDirectConnectToHclTerraform(struct?: CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference | CloudAwsGovcloudIntegrationsAwsDirectConnect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.awsRegions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    metrics_polling_interval: {
      value: cdktf.numberToHclTerraform(struct!.metricsPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsGovcloudIntegrationsAwsDirectConnect | undefined {
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

  public set internalValue(value: CloudAwsGovcloudIntegrationsAwsDirectConnect | undefined) {
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
export interface CloudAwsGovcloudIntegrationsAwsStates {
  /**
  * Specify each AWS region that includes the resources that you want to monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#aws_regions CloudAwsGovcloudIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * The data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#metrics_polling_interval CloudAwsGovcloudIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudAwsGovcloudIntegrationsAwsStatesToTerraform(struct?: CloudAwsGovcloudIntegrationsAwsStatesOutputReference | CloudAwsGovcloudIntegrationsAwsStates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.awsRegions),
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudAwsGovcloudIntegrationsAwsStatesToHclTerraform(struct?: CloudAwsGovcloudIntegrationsAwsStatesOutputReference | CloudAwsGovcloudIntegrationsAwsStates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.awsRegions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    metrics_polling_interval: {
      value: cdktf.numberToHclTerraform(struct!.metricsPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAwsGovcloudIntegrationsAwsStatesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsGovcloudIntegrationsAwsStates | undefined {
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

  public set internalValue(value: CloudAwsGovcloudIntegrationsAwsStates | undefined) {
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
export interface CloudAwsGovcloudIntegrationsCloudtrail {
  /**
  * Specify each AWS region that includes the resources that you want to monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#aws_regions CloudAwsGovcloudIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * The data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#metrics_polling_interval CloudAwsGovcloudIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudAwsGovcloudIntegrationsCloudtrailToTerraform(struct?: CloudAwsGovcloudIntegrationsCloudtrailOutputReference | CloudAwsGovcloudIntegrationsCloudtrail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.awsRegions),
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudAwsGovcloudIntegrationsCloudtrailToHclTerraform(struct?: CloudAwsGovcloudIntegrationsCloudtrailOutputReference | CloudAwsGovcloudIntegrationsCloudtrail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.awsRegions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    metrics_polling_interval: {
      value: cdktf.numberToHclTerraform(struct!.metricsPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAwsGovcloudIntegrationsCloudtrailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsGovcloudIntegrationsCloudtrail | undefined {
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

  public set internalValue(value: CloudAwsGovcloudIntegrationsCloudtrail | undefined) {
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
export interface CloudAwsGovcloudIntegrationsDynamoDb {
  /**
  * Specify each AWS region that includes the resources that you want to monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#aws_regions CloudAwsGovcloudIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * Determine if extra inventory data be collected or not. May affect total data collection time and contribute to the Cloud provider API rate limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#fetch_extended_inventory CloudAwsGovcloudIntegrations#fetch_extended_inventory}
  */
  readonly fetchExtendedInventory?: boolean | cdktf.IResolvable;
  /**
  * Specify if tags should be collected. May affect total data collection time and contribute to the Cloud provider API rate limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#fetch_tags CloudAwsGovcloudIntegrations#fetch_tags}
  */
  readonly fetchTags?: boolean | cdktf.IResolvable;
  /**
  * The data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#metrics_polling_interval CloudAwsGovcloudIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#tag_key CloudAwsGovcloudIntegrations#tag_key}
  */
  readonly tagKey?: string;
  /**
  * Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.
  * 
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#tag_value CloudAwsGovcloudIntegrations#tag_value}
  */
  readonly tagValue?: string;
}

export function cloudAwsGovcloudIntegrationsDynamoDbToTerraform(struct?: CloudAwsGovcloudIntegrationsDynamoDbOutputReference | CloudAwsGovcloudIntegrationsDynamoDb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.awsRegions),
    fetch_extended_inventory: cdktf.booleanToTerraform(struct!.fetchExtendedInventory),
    fetch_tags: cdktf.booleanToTerraform(struct!.fetchTags),
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
    tag_key: cdktf.stringToTerraform(struct!.tagKey),
    tag_value: cdktf.stringToTerraform(struct!.tagValue),
  }
}


export function cloudAwsGovcloudIntegrationsDynamoDbToHclTerraform(struct?: CloudAwsGovcloudIntegrationsDynamoDbOutputReference | CloudAwsGovcloudIntegrationsDynamoDb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.awsRegions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    fetch_extended_inventory: {
      value: cdktf.booleanToHclTerraform(struct!.fetchExtendedInventory),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fetch_tags: {
      value: cdktf.booleanToHclTerraform(struct!.fetchTags),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metrics_polling_interval: {
      value: cdktf.numberToHclTerraform(struct!.metricsPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tag_key: {
      value: cdktf.stringToHclTerraform(struct!.tagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_value: {
      value: cdktf.stringToHclTerraform(struct!.tagValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAwsGovcloudIntegrationsDynamoDbOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsGovcloudIntegrationsDynamoDb | undefined {
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

  public set internalValue(value: CloudAwsGovcloudIntegrationsDynamoDb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsRegions = undefined;
      this._fetchExtendedInventory = undefined;
      this._fetchTags = undefined;
      this._metricsPollingInterval = undefined;
      this._tagKey = undefined;
      this._tagValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsRegions = value.awsRegions;
      this._fetchExtendedInventory = value.fetchExtendedInventory;
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
export interface CloudAwsGovcloudIntegrationsEbs {
  /**
  * Specify each AWS region that includes the resources that you want to monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#aws_regions CloudAwsGovcloudIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * Determine if extra inventory data be collected or not. May affect total data collection time and contribute to the Cloud provider API rate limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#fetch_extended_inventory CloudAwsGovcloudIntegrations#fetch_extended_inventory}
  */
  readonly fetchExtendedInventory?: boolean | cdktf.IResolvable;
  /**
  * The data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#metrics_polling_interval CloudAwsGovcloudIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#tag_key CloudAwsGovcloudIntegrations#tag_key}
  */
  readonly tagKey?: string;
  /**
  * Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.
  * 
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#tag_value CloudAwsGovcloudIntegrations#tag_value}
  */
  readonly tagValue?: string;
}

export function cloudAwsGovcloudIntegrationsEbsToTerraform(struct?: CloudAwsGovcloudIntegrationsEbsOutputReference | CloudAwsGovcloudIntegrationsEbs): any {
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


export function cloudAwsGovcloudIntegrationsEbsToHclTerraform(struct?: CloudAwsGovcloudIntegrationsEbsOutputReference | CloudAwsGovcloudIntegrationsEbs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.awsRegions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    fetch_extended_inventory: {
      value: cdktf.booleanToHclTerraform(struct!.fetchExtendedInventory),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metrics_polling_interval: {
      value: cdktf.numberToHclTerraform(struct!.metricsPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tag_key: {
      value: cdktf.stringToHclTerraform(struct!.tagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_value: {
      value: cdktf.stringToHclTerraform(struct!.tagValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAwsGovcloudIntegrationsEbsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsGovcloudIntegrationsEbs | undefined {
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

  public set internalValue(value: CloudAwsGovcloudIntegrationsEbs | undefined) {
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
export interface CloudAwsGovcloudIntegrationsEc2 {
  /**
  * Specify each AWS region that includes the resources that you want to monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#aws_regions CloudAwsGovcloudIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * Specify if IP addresses of ec2 instance should be collected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#fetch_ip_addresses CloudAwsGovcloudIntegrations#fetch_ip_addresses}
  */
  readonly fetchIpAddresses?: boolean | cdktf.IResolvable;
  /**
  * The data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#metrics_polling_interval CloudAwsGovcloudIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#tag_key CloudAwsGovcloudIntegrations#tag_key}
  */
  readonly tagKey?: string;
  /**
  * Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.
  * 
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#tag_value CloudAwsGovcloudIntegrations#tag_value}
  */
  readonly tagValue?: string;
}

export function cloudAwsGovcloudIntegrationsEc2ToTerraform(struct?: CloudAwsGovcloudIntegrationsEc2OutputReference | CloudAwsGovcloudIntegrationsEc2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.awsRegions),
    fetch_ip_addresses: cdktf.booleanToTerraform(struct!.fetchIpAddresses),
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
    tag_key: cdktf.stringToTerraform(struct!.tagKey),
    tag_value: cdktf.stringToTerraform(struct!.tagValue),
  }
}


export function cloudAwsGovcloudIntegrationsEc2ToHclTerraform(struct?: CloudAwsGovcloudIntegrationsEc2OutputReference | CloudAwsGovcloudIntegrationsEc2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.awsRegions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    fetch_ip_addresses: {
      value: cdktf.booleanToHclTerraform(struct!.fetchIpAddresses),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metrics_polling_interval: {
      value: cdktf.numberToHclTerraform(struct!.metricsPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tag_key: {
      value: cdktf.stringToHclTerraform(struct!.tagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_value: {
      value: cdktf.stringToHclTerraform(struct!.tagValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAwsGovcloudIntegrationsEc2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsGovcloudIntegrationsEc2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegions = this._awsRegions;
    }
    if (this._fetchIpAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.fetchIpAddresses = this._fetchIpAddresses;
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

  public set internalValue(value: CloudAwsGovcloudIntegrationsEc2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsRegions = undefined;
      this._fetchIpAddresses = undefined;
      this._metricsPollingInterval = undefined;
      this._tagKey = undefined;
      this._tagValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsRegions = value.awsRegions;
      this._fetchIpAddresses = value.fetchIpAddresses;
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

  // fetch_ip_addresses - computed: false, optional: true, required: false
  private _fetchIpAddresses?: boolean | cdktf.IResolvable; 
  public get fetchIpAddresses() {
    return this.getBooleanAttribute('fetch_ip_addresses');
  }
  public set fetchIpAddresses(value: boolean | cdktf.IResolvable) {
    this._fetchIpAddresses = value;
  }
  public resetFetchIpAddresses() {
    this._fetchIpAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchIpAddressesInput() {
    return this._fetchIpAddresses;
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
export interface CloudAwsGovcloudIntegrationsElasticSearch {
  /**
  * Specify each AWS region that includes the resources that you want to monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#aws_regions CloudAwsGovcloudIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * Specify if IP addresses of ec2 instance should be collected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#fetch_nodes CloudAwsGovcloudIntegrations#fetch_nodes}
  */
  readonly fetchNodes?: boolean | cdktf.IResolvable;
  /**
  * The data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#metrics_polling_interval CloudAwsGovcloudIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#tag_key CloudAwsGovcloudIntegrations#tag_key}
  */
  readonly tagKey?: string;
  /**
  * Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.
  * 
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#tag_value CloudAwsGovcloudIntegrations#tag_value}
  */
  readonly tagValue?: string;
}

export function cloudAwsGovcloudIntegrationsElasticSearchToTerraform(struct?: CloudAwsGovcloudIntegrationsElasticSearchOutputReference | CloudAwsGovcloudIntegrationsElasticSearch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.awsRegions),
    fetch_nodes: cdktf.booleanToTerraform(struct!.fetchNodes),
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
    tag_key: cdktf.stringToTerraform(struct!.tagKey),
    tag_value: cdktf.stringToTerraform(struct!.tagValue),
  }
}


export function cloudAwsGovcloudIntegrationsElasticSearchToHclTerraform(struct?: CloudAwsGovcloudIntegrationsElasticSearchOutputReference | CloudAwsGovcloudIntegrationsElasticSearch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.awsRegions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    fetch_nodes: {
      value: cdktf.booleanToHclTerraform(struct!.fetchNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metrics_polling_interval: {
      value: cdktf.numberToHclTerraform(struct!.metricsPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tag_key: {
      value: cdktf.stringToHclTerraform(struct!.tagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_value: {
      value: cdktf.stringToHclTerraform(struct!.tagValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAwsGovcloudIntegrationsElasticSearchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsGovcloudIntegrationsElasticSearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegions = this._awsRegions;
    }
    if (this._fetchNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.fetchNodes = this._fetchNodes;
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

  public set internalValue(value: CloudAwsGovcloudIntegrationsElasticSearch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsRegions = undefined;
      this._fetchNodes = undefined;
      this._metricsPollingInterval = undefined;
      this._tagKey = undefined;
      this._tagValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsRegions = value.awsRegions;
      this._fetchNodes = value.fetchNodes;
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

  // fetch_nodes - computed: false, optional: true, required: false
  private _fetchNodes?: boolean | cdktf.IResolvable; 
  public get fetchNodes() {
    return this.getBooleanAttribute('fetch_nodes');
  }
  public set fetchNodes(value: boolean | cdktf.IResolvable) {
    this._fetchNodes = value;
  }
  public resetFetchNodes() {
    this._fetchNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchNodesInput() {
    return this._fetchNodes;
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
export interface CloudAwsGovcloudIntegrationsElb {
  /**
  * Specify each AWS region that includes the resources that you want to monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#aws_regions CloudAwsGovcloudIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * Determine if extra inventory data be collected or not. May affect total data collection time and contribute to the Cloud provider API rate limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#fetch_extended_inventory CloudAwsGovcloudIntegrations#fetch_extended_inventory}
  */
  readonly fetchExtendedInventory?: boolean | cdktf.IResolvable;
  /**
  * Specify if tags should be collected. May affect total data collection time and contribute to the Cloud provider API rate limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#fetch_tags CloudAwsGovcloudIntegrations#fetch_tags}
  */
  readonly fetchTags?: boolean | cdktf.IResolvable;
  /**
  * The data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#metrics_polling_interval CloudAwsGovcloudIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudAwsGovcloudIntegrationsElbToTerraform(struct?: CloudAwsGovcloudIntegrationsElbOutputReference | CloudAwsGovcloudIntegrationsElb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.awsRegions),
    fetch_extended_inventory: cdktf.booleanToTerraform(struct!.fetchExtendedInventory),
    fetch_tags: cdktf.booleanToTerraform(struct!.fetchTags),
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudAwsGovcloudIntegrationsElbToHclTerraform(struct?: CloudAwsGovcloudIntegrationsElbOutputReference | CloudAwsGovcloudIntegrationsElb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.awsRegions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    fetch_extended_inventory: {
      value: cdktf.booleanToHclTerraform(struct!.fetchExtendedInventory),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fetch_tags: {
      value: cdktf.booleanToHclTerraform(struct!.fetchTags),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metrics_polling_interval: {
      value: cdktf.numberToHclTerraform(struct!.metricsPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAwsGovcloudIntegrationsElbOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsGovcloudIntegrationsElb | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAwsGovcloudIntegrationsElb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsRegions = undefined;
      this._fetchExtendedInventory = undefined;
      this._fetchTags = undefined;
      this._metricsPollingInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsRegions = value.awsRegions;
      this._fetchExtendedInventory = value.fetchExtendedInventory;
      this._fetchTags = value.fetchTags;
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
}
export interface CloudAwsGovcloudIntegrationsEmr {
  /**
  * Specify each AWS region that includes the resources that you want to monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#aws_regions CloudAwsGovcloudIntegrations#aws_regions}
  */
  readonly awsRegions?: string;
  /**
  * Specify if tags should be collected. May affect total data collection time and contribute to the Cloud provider API rate limit.
  * 
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#fetch_tags CloudAwsGovcloudIntegrations#fetch_tags}
  */
  readonly fetchTags?: boolean | cdktf.IResolvable;
  /**
  * The data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#metrics_polling_interval CloudAwsGovcloudIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#tag_key CloudAwsGovcloudIntegrations#tag_key}
  */
  readonly tagKey?: string;
  /**
  * Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.
  * 
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#tag_value CloudAwsGovcloudIntegrations#tag_value}
  */
  readonly tagValue?: string;
}

export function cloudAwsGovcloudIntegrationsEmrToTerraform(struct?: CloudAwsGovcloudIntegrationsEmrOutputReference | CloudAwsGovcloudIntegrationsEmr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_regions: cdktf.stringToTerraform(struct!.awsRegions),
    fetch_tags: cdktf.booleanToTerraform(struct!.fetchTags),
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
    tag_key: cdktf.stringToTerraform(struct!.tagKey),
    tag_value: cdktf.stringToTerraform(struct!.tagValue),
  }
}


export function cloudAwsGovcloudIntegrationsEmrToHclTerraform(struct?: CloudAwsGovcloudIntegrationsEmrOutputReference | CloudAwsGovcloudIntegrationsEmr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_regions: {
      value: cdktf.stringToHclTerraform(struct!.awsRegions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fetch_tags: {
      value: cdktf.booleanToHclTerraform(struct!.fetchTags),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metrics_polling_interval: {
      value: cdktf.numberToHclTerraform(struct!.metricsPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tag_key: {
      value: cdktf.stringToHclTerraform(struct!.tagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_value: {
      value: cdktf.stringToHclTerraform(struct!.tagValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAwsGovcloudIntegrationsEmrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsGovcloudIntegrationsEmr | undefined {
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

  public set internalValue(value: CloudAwsGovcloudIntegrationsEmr | undefined) {
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
  private _awsRegions?: string; 
  public get awsRegions() {
    return this.getStringAttribute('aws_regions');
  }
  public set awsRegions(value: string) {
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
export interface CloudAwsGovcloudIntegrationsIam {
  /**
  * The data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#metrics_polling_interval CloudAwsGovcloudIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#tag_key CloudAwsGovcloudIntegrations#tag_key}
  */
  readonly tagKey?: string;
  /**
  * Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.
  * 
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#tag_value CloudAwsGovcloudIntegrations#tag_value}
  */
  readonly tagValue?: string;
}

export function cloudAwsGovcloudIntegrationsIamToTerraform(struct?: CloudAwsGovcloudIntegrationsIamOutputReference | CloudAwsGovcloudIntegrationsIam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
    tag_key: cdktf.stringToTerraform(struct!.tagKey),
    tag_value: cdktf.stringToTerraform(struct!.tagValue),
  }
}


export function cloudAwsGovcloudIntegrationsIamToHclTerraform(struct?: CloudAwsGovcloudIntegrationsIamOutputReference | CloudAwsGovcloudIntegrationsIam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metrics_polling_interval: {
      value: cdktf.numberToHclTerraform(struct!.metricsPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tag_key: {
      value: cdktf.stringToHclTerraform(struct!.tagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_value: {
      value: cdktf.stringToHclTerraform(struct!.tagValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAwsGovcloudIntegrationsIamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsGovcloudIntegrationsIam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: CloudAwsGovcloudIntegrationsIam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
      this._tagKey = undefined;
      this._tagValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
      this._tagKey = value.tagKey;
      this._tagValue = value.tagValue;
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
export interface CloudAwsGovcloudIntegrationsLambda {
  /**
  * Specify each AWS region that includes the resources that you want to monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#aws_regions CloudAwsGovcloudIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * Specify if tags should be collected. May affect total data collection time and contribute to the Cloud provider API rate limit.
  * 
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#fetch_tags CloudAwsGovcloudIntegrations#fetch_tags}
  */
  readonly fetchTags?: boolean | cdktf.IResolvable;
  /**
  * The data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#metrics_polling_interval CloudAwsGovcloudIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#tag_key CloudAwsGovcloudIntegrations#tag_key}
  */
  readonly tagKey?: string;
  /**
  * Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.
  * 
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#tag_value CloudAwsGovcloudIntegrations#tag_value}
  */
  readonly tagValue?: string;
}

export function cloudAwsGovcloudIntegrationsLambdaToTerraform(struct?: CloudAwsGovcloudIntegrationsLambdaOutputReference | CloudAwsGovcloudIntegrationsLambda): any {
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


export function cloudAwsGovcloudIntegrationsLambdaToHclTerraform(struct?: CloudAwsGovcloudIntegrationsLambdaOutputReference | CloudAwsGovcloudIntegrationsLambda): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.awsRegions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    fetch_tags: {
      value: cdktf.booleanToHclTerraform(struct!.fetchTags),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metrics_polling_interval: {
      value: cdktf.numberToHclTerraform(struct!.metricsPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tag_key: {
      value: cdktf.stringToHclTerraform(struct!.tagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_value: {
      value: cdktf.stringToHclTerraform(struct!.tagValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAwsGovcloudIntegrationsLambdaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsGovcloudIntegrationsLambda | undefined {
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

  public set internalValue(value: CloudAwsGovcloudIntegrationsLambda | undefined) {
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
export interface CloudAwsGovcloudIntegrationsRds {
  /**
  * Specify each AWS region that includes the resources that you want to monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#aws_regions CloudAwsGovcloudIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * Specify if tags should be collected. May affect total data collection time and contribute to the Cloud provider API rate limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#fetch_tags CloudAwsGovcloudIntegrations#fetch_tags}
  */
  readonly fetchTags?: boolean | cdktf.IResolvable;
  /**
  * The data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#metrics_polling_interval CloudAwsGovcloudIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#tag_key CloudAwsGovcloudIntegrations#tag_key}
  */
  readonly tagKey?: string;
  /**
  * Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.
  * 
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#tag_value CloudAwsGovcloudIntegrations#tag_value}
  */
  readonly tagValue?: string;
}

export function cloudAwsGovcloudIntegrationsRdsToTerraform(struct?: CloudAwsGovcloudIntegrationsRdsOutputReference | CloudAwsGovcloudIntegrationsRds): any {
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


export function cloudAwsGovcloudIntegrationsRdsToHclTerraform(struct?: CloudAwsGovcloudIntegrationsRdsOutputReference | CloudAwsGovcloudIntegrationsRds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.awsRegions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    fetch_tags: {
      value: cdktf.booleanToHclTerraform(struct!.fetchTags),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metrics_polling_interval: {
      value: cdktf.numberToHclTerraform(struct!.metricsPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tag_key: {
      value: cdktf.stringToHclTerraform(struct!.tagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_value: {
      value: cdktf.stringToHclTerraform(struct!.tagValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAwsGovcloudIntegrationsRdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsGovcloudIntegrationsRds | undefined {
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

  public set internalValue(value: CloudAwsGovcloudIntegrationsRds | undefined) {
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
export interface CloudAwsGovcloudIntegrationsRedShift {
  /**
  * Specify each AWS region that includes the resources that you want to monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#aws_regions CloudAwsGovcloudIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * The data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#metrics_polling_interval CloudAwsGovcloudIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#tag_key CloudAwsGovcloudIntegrations#tag_key}
  */
  readonly tagKey?: string;
  /**
  * Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.
  * 
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#tag_value CloudAwsGovcloudIntegrations#tag_value}
  */
  readonly tagValue?: string;
}

export function cloudAwsGovcloudIntegrationsRedShiftToTerraform(struct?: CloudAwsGovcloudIntegrationsRedShiftOutputReference | CloudAwsGovcloudIntegrationsRedShift): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.awsRegions),
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
    tag_key: cdktf.stringToTerraform(struct!.tagKey),
    tag_value: cdktf.stringToTerraform(struct!.tagValue),
  }
}


export function cloudAwsGovcloudIntegrationsRedShiftToHclTerraform(struct?: CloudAwsGovcloudIntegrationsRedShiftOutputReference | CloudAwsGovcloudIntegrationsRedShift): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.awsRegions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    metrics_polling_interval: {
      value: cdktf.numberToHclTerraform(struct!.metricsPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tag_key: {
      value: cdktf.stringToHclTerraform(struct!.tagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_value: {
      value: cdktf.stringToHclTerraform(struct!.tagValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAwsGovcloudIntegrationsRedShiftOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsGovcloudIntegrationsRedShift | undefined {
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

  public set internalValue(value: CloudAwsGovcloudIntegrationsRedShift | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsRegions = undefined;
      this._metricsPollingInterval = undefined;
      this._tagKey = undefined;
      this._tagValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsRegions = value.awsRegions;
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
export interface CloudAwsGovcloudIntegrationsRoute53 {
  /**
  * Determine if extra inventory data be collected or not. May affect total data collection time and contribute to the Cloud provider API rate limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#fetch_extended_inventory CloudAwsGovcloudIntegrations#fetch_extended_inventory}
  */
  readonly fetchExtendedInventory?: boolean | cdktf.IResolvable;
  /**
  * The data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#metrics_polling_interval CloudAwsGovcloudIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudAwsGovcloudIntegrationsRoute53ToTerraform(struct?: CloudAwsGovcloudIntegrationsRoute53OutputReference | CloudAwsGovcloudIntegrationsRoute53): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fetch_extended_inventory: cdktf.booleanToTerraform(struct!.fetchExtendedInventory),
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudAwsGovcloudIntegrationsRoute53ToHclTerraform(struct?: CloudAwsGovcloudIntegrationsRoute53OutputReference | CloudAwsGovcloudIntegrationsRoute53): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fetch_extended_inventory: {
      value: cdktf.booleanToHclTerraform(struct!.fetchExtendedInventory),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metrics_polling_interval: {
      value: cdktf.numberToHclTerraform(struct!.metricsPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAwsGovcloudIntegrationsRoute53OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsGovcloudIntegrationsRoute53 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fetchExtendedInventory !== undefined) {
      hasAnyValues = true;
      internalValueResult.fetchExtendedInventory = this._fetchExtendedInventory;
    }
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAwsGovcloudIntegrationsRoute53 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fetchExtendedInventory = undefined;
      this._metricsPollingInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fetchExtendedInventory = value.fetchExtendedInventory;
      this._metricsPollingInterval = value.metricsPollingInterval;
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
export interface CloudAwsGovcloudIntegrationsS3 {
  /**
  * Determine if extra inventory data be collected or not. May affect total data collection time and contribute to the Cloud provider API rate limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#fetch_extended_inventory CloudAwsGovcloudIntegrations#fetch_extended_inventory}
  */
  readonly fetchExtendedInventory?: boolean | cdktf.IResolvable;
  /**
  * Specify if tags should be collected. May affect total data collection time and contribute to the Cloud provider API rate limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#fetch_tags CloudAwsGovcloudIntegrations#fetch_tags}
  */
  readonly fetchTags?: boolean | cdktf.IResolvable;
  /**
  * The data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#metrics_polling_interval CloudAwsGovcloudIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#tag_key CloudAwsGovcloudIntegrations#tag_key}
  */
  readonly tagKey?: string;
  /**
  * Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.
  * 
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#tag_value CloudAwsGovcloudIntegrations#tag_value}
  */
  readonly tagValue?: string;
}

export function cloudAwsGovcloudIntegrationsS3ToTerraform(struct?: CloudAwsGovcloudIntegrationsS3OutputReference | CloudAwsGovcloudIntegrationsS3): any {
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


export function cloudAwsGovcloudIntegrationsS3ToHclTerraform(struct?: CloudAwsGovcloudIntegrationsS3OutputReference | CloudAwsGovcloudIntegrationsS3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fetch_extended_inventory: {
      value: cdktf.booleanToHclTerraform(struct!.fetchExtendedInventory),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fetch_tags: {
      value: cdktf.booleanToHclTerraform(struct!.fetchTags),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metrics_polling_interval: {
      value: cdktf.numberToHclTerraform(struct!.metricsPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tag_key: {
      value: cdktf.stringToHclTerraform(struct!.tagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_value: {
      value: cdktf.stringToHclTerraform(struct!.tagValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAwsGovcloudIntegrationsS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsGovcloudIntegrationsS3 | undefined {
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

  public set internalValue(value: CloudAwsGovcloudIntegrationsS3 | undefined) {
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
export interface CloudAwsGovcloudIntegrationsSns {
  /**
  * Specify each AWS region that includes the resources that you want to monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#aws_regions CloudAwsGovcloudIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * Determine if extra inventory data be collected or not. May affect total data collection time and contribute to the Cloud provider API rate limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#fetch_extended_inventory CloudAwsGovcloudIntegrations#fetch_extended_inventory}
  */
  readonly fetchExtendedInventory?: boolean | cdktf.IResolvable;
  /**
  * The data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#metrics_polling_interval CloudAwsGovcloudIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudAwsGovcloudIntegrationsSnsToTerraform(struct?: CloudAwsGovcloudIntegrationsSnsOutputReference | CloudAwsGovcloudIntegrationsSns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.awsRegions),
    fetch_extended_inventory: cdktf.booleanToTerraform(struct!.fetchExtendedInventory),
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudAwsGovcloudIntegrationsSnsToHclTerraform(struct?: CloudAwsGovcloudIntegrationsSnsOutputReference | CloudAwsGovcloudIntegrationsSns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.awsRegions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    fetch_extended_inventory: {
      value: cdktf.booleanToHclTerraform(struct!.fetchExtendedInventory),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metrics_polling_interval: {
      value: cdktf.numberToHclTerraform(struct!.metricsPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAwsGovcloudIntegrationsSnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsGovcloudIntegrationsSns | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAwsGovcloudIntegrationsSns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsRegions = undefined;
      this._fetchExtendedInventory = undefined;
      this._metricsPollingInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsRegions = value.awsRegions;
      this._fetchExtendedInventory = value.fetchExtendedInventory;
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
}
export interface CloudAwsGovcloudIntegrationsSqs {
  /**
  * Specify each AWS region that includes the resources that you want to monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#aws_regions CloudAwsGovcloudIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * Determine if extra inventory data be collected or not. May affect total data collection time and contribute to the Cloud provider API rate limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#fetch_extended_inventory CloudAwsGovcloudIntegrations#fetch_extended_inventory}
  */
  readonly fetchExtendedInventory?: boolean | cdktf.IResolvable;
  /**
  * Specify if tags should be collected. May affect total data collection time and contribute to the Cloud provider API rate limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#fetch_tags CloudAwsGovcloudIntegrations#fetch_tags}
  */
  readonly fetchTags?: boolean | cdktf.IResolvable;
  /**
  * The data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#metrics_polling_interval CloudAwsGovcloudIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Specify each name or prefix for the Queues that you want to monitor. Filter values are case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#queue_prefixes CloudAwsGovcloudIntegrations#queue_prefixes}
  */
  readonly queuePrefixes?: string[];
  /**
  * Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#tag_key CloudAwsGovcloudIntegrations#tag_key}
  */
  readonly tagKey?: string;
  /**
  * Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.
  * 
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#tag_value CloudAwsGovcloudIntegrations#tag_value}
  */
  readonly tagValue?: string;
}

export function cloudAwsGovcloudIntegrationsSqsToTerraform(struct?: CloudAwsGovcloudIntegrationsSqsOutputReference | CloudAwsGovcloudIntegrationsSqs): any {
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


export function cloudAwsGovcloudIntegrationsSqsToHclTerraform(struct?: CloudAwsGovcloudIntegrationsSqsOutputReference | CloudAwsGovcloudIntegrationsSqs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.awsRegions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    fetch_extended_inventory: {
      value: cdktf.booleanToHclTerraform(struct!.fetchExtendedInventory),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fetch_tags: {
      value: cdktf.booleanToHclTerraform(struct!.fetchTags),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metrics_polling_interval: {
      value: cdktf.numberToHclTerraform(struct!.metricsPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    queue_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.queuePrefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tag_key: {
      value: cdktf.stringToHclTerraform(struct!.tagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_value: {
      value: cdktf.stringToHclTerraform(struct!.tagValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAwsGovcloudIntegrationsSqsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsGovcloudIntegrationsSqs | undefined {
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

  public set internalValue(value: CloudAwsGovcloudIntegrationsSqs | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations newrelic_cloud_aws_govcloud_integrations}
*/
export class CloudAwsGovcloudIntegrations extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_cloud_aws_govcloud_integrations";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudAwsGovcloudIntegrations resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudAwsGovcloudIntegrations to import
  * @param importFromId The id of the existing CloudAwsGovcloudIntegrations that should be imported. Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudAwsGovcloudIntegrations to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "newrelic_cloud_aws_govcloud_integrations", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.1/docs/resources/cloud_aws_govcloud_integrations newrelic_cloud_aws_govcloud_integrations} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudAwsGovcloudIntegrationsConfig
  */
  public constructor(scope: Construct, id: string, config: CloudAwsGovcloudIntegrationsConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_cloud_aws_govcloud_integrations',
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
    this._accountId = config.accountId;
    this._id = config.id;
    this._linkedAccountId = config.linkedAccountId;
    this._alb.internalValue = config.alb;
    this._apiGateway.internalValue = config.apiGateway;
    this._autoScaling.internalValue = config.autoScaling;
    this._awsDirectConnect.internalValue = config.awsDirectConnect;
    this._awsStates.internalValue = config.awsStates;
    this._cloudtrail.internalValue = config.cloudtrail;
    this._dynamoDb.internalValue = config.dynamoDb;
    this._ebs.internalValue = config.ebs;
    this._ec2.internalValue = config.ec2;
    this._elasticSearch.internalValue = config.elasticSearch;
    this._elb.internalValue = config.elb;
    this._emr.internalValue = config.emr;
    this._iam.internalValue = config.iam;
    this._lambda.internalValue = config.lambda;
    this._rds.internalValue = config.rds;
    this._redShift.internalValue = config.redShift;
    this._route53.internalValue = config.route53;
    this._s3.internalValue = config.s3;
    this._sns.internalValue = config.sns;
    this._sqs.internalValue = config.sqs;
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
  private _alb = new CloudAwsGovcloudIntegrationsAlbOutputReference(this, "alb");
  public get alb() {
    return this._alb;
  }
  public putAlb(value: CloudAwsGovcloudIntegrationsAlb) {
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
  private _apiGateway = new CloudAwsGovcloudIntegrationsApiGatewayOutputReference(this, "api_gateway");
  public get apiGateway() {
    return this._apiGateway;
  }
  public putApiGateway(value: CloudAwsGovcloudIntegrationsApiGateway) {
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
  private _autoScaling = new CloudAwsGovcloudIntegrationsAutoScalingOutputReference(this, "auto_scaling");
  public get autoScaling() {
    return this._autoScaling;
  }
  public putAutoScaling(value: CloudAwsGovcloudIntegrationsAutoScaling) {
    this._autoScaling.internalValue = value;
  }
  public resetAutoScaling() {
    this._autoScaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingInput() {
    return this._autoScaling.internalValue;
  }

  // aws_direct_connect - computed: false, optional: true, required: false
  private _awsDirectConnect = new CloudAwsGovcloudIntegrationsAwsDirectConnectOutputReference(this, "aws_direct_connect");
  public get awsDirectConnect() {
    return this._awsDirectConnect;
  }
  public putAwsDirectConnect(value: CloudAwsGovcloudIntegrationsAwsDirectConnect) {
    this._awsDirectConnect.internalValue = value;
  }
  public resetAwsDirectConnect() {
    this._awsDirectConnect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsDirectConnectInput() {
    return this._awsDirectConnect.internalValue;
  }

  // aws_states - computed: false, optional: true, required: false
  private _awsStates = new CloudAwsGovcloudIntegrationsAwsStatesOutputReference(this, "aws_states");
  public get awsStates() {
    return this._awsStates;
  }
  public putAwsStates(value: CloudAwsGovcloudIntegrationsAwsStates) {
    this._awsStates.internalValue = value;
  }
  public resetAwsStates() {
    this._awsStates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsStatesInput() {
    return this._awsStates.internalValue;
  }

  // cloudtrail - computed: false, optional: true, required: false
  private _cloudtrail = new CloudAwsGovcloudIntegrationsCloudtrailOutputReference(this, "cloudtrail");
  public get cloudtrail() {
    return this._cloudtrail;
  }
  public putCloudtrail(value: CloudAwsGovcloudIntegrationsCloudtrail) {
    this._cloudtrail.internalValue = value;
  }
  public resetCloudtrail() {
    this._cloudtrail.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudtrailInput() {
    return this._cloudtrail.internalValue;
  }

  // dynamo_db - computed: false, optional: true, required: false
  private _dynamoDb = new CloudAwsGovcloudIntegrationsDynamoDbOutputReference(this, "dynamo_db");
  public get dynamoDb() {
    return this._dynamoDb;
  }
  public putDynamoDb(value: CloudAwsGovcloudIntegrationsDynamoDb) {
    this._dynamoDb.internalValue = value;
  }
  public resetDynamoDb() {
    this._dynamoDb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamoDbInput() {
    return this._dynamoDb.internalValue;
  }

  // ebs - computed: false, optional: true, required: false
  private _ebs = new CloudAwsGovcloudIntegrationsEbsOutputReference(this, "ebs");
  public get ebs() {
    return this._ebs;
  }
  public putEbs(value: CloudAwsGovcloudIntegrationsEbs) {
    this._ebs.internalValue = value;
  }
  public resetEbs() {
    this._ebs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsInput() {
    return this._ebs.internalValue;
  }

  // ec2 - computed: false, optional: true, required: false
  private _ec2 = new CloudAwsGovcloudIntegrationsEc2OutputReference(this, "ec2");
  public get ec2() {
    return this._ec2;
  }
  public putEc2(value: CloudAwsGovcloudIntegrationsEc2) {
    this._ec2.internalValue = value;
  }
  public resetEc2() {
    this._ec2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2Input() {
    return this._ec2.internalValue;
  }

  // elastic_search - computed: false, optional: true, required: false
  private _elasticSearch = new CloudAwsGovcloudIntegrationsElasticSearchOutputReference(this, "elastic_search");
  public get elasticSearch() {
    return this._elasticSearch;
  }
  public putElasticSearch(value: CloudAwsGovcloudIntegrationsElasticSearch) {
    this._elasticSearch.internalValue = value;
  }
  public resetElasticSearch() {
    this._elasticSearch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticSearchInput() {
    return this._elasticSearch.internalValue;
  }

  // elb - computed: false, optional: true, required: false
  private _elb = new CloudAwsGovcloudIntegrationsElbOutputReference(this, "elb");
  public get elb() {
    return this._elb;
  }
  public putElb(value: CloudAwsGovcloudIntegrationsElb) {
    this._elb.internalValue = value;
  }
  public resetElb() {
    this._elb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elbInput() {
    return this._elb.internalValue;
  }

  // emr - computed: false, optional: true, required: false
  private _emr = new CloudAwsGovcloudIntegrationsEmrOutputReference(this, "emr");
  public get emr() {
    return this._emr;
  }
  public putEmr(value: CloudAwsGovcloudIntegrationsEmr) {
    this._emr.internalValue = value;
  }
  public resetEmr() {
    this._emr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emrInput() {
    return this._emr.internalValue;
  }

  // iam - computed: false, optional: true, required: false
  private _iam = new CloudAwsGovcloudIntegrationsIamOutputReference(this, "iam");
  public get iam() {
    return this._iam;
  }
  public putIam(value: CloudAwsGovcloudIntegrationsIam) {
    this._iam.internalValue = value;
  }
  public resetIam() {
    this._iam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamInput() {
    return this._iam.internalValue;
  }

  // lambda - computed: false, optional: true, required: false
  private _lambda = new CloudAwsGovcloudIntegrationsLambdaOutputReference(this, "lambda");
  public get lambda() {
    return this._lambda;
  }
  public putLambda(value: CloudAwsGovcloudIntegrationsLambda) {
    this._lambda.internalValue = value;
  }
  public resetLambda() {
    this._lambda.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaInput() {
    return this._lambda.internalValue;
  }

  // rds - computed: false, optional: true, required: false
  private _rds = new CloudAwsGovcloudIntegrationsRdsOutputReference(this, "rds");
  public get rds() {
    return this._rds;
  }
  public putRds(value: CloudAwsGovcloudIntegrationsRds) {
    this._rds.internalValue = value;
  }
  public resetRds() {
    this._rds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdsInput() {
    return this._rds.internalValue;
  }

  // red_shift - computed: false, optional: true, required: false
  private _redShift = new CloudAwsGovcloudIntegrationsRedShiftOutputReference(this, "red_shift");
  public get redShift() {
    return this._redShift;
  }
  public putRedShift(value: CloudAwsGovcloudIntegrationsRedShift) {
    this._redShift.internalValue = value;
  }
  public resetRedShift() {
    this._redShift.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redShiftInput() {
    return this._redShift.internalValue;
  }

  // route53 - computed: false, optional: true, required: false
  private _route53 = new CloudAwsGovcloudIntegrationsRoute53OutputReference(this, "route53");
  public get route53() {
    return this._route53;
  }
  public putRoute53(value: CloudAwsGovcloudIntegrationsRoute53) {
    this._route53.internalValue = value;
  }
  public resetRoute53() {
    this._route53.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get route53Input() {
    return this._route53.internalValue;
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new CloudAwsGovcloudIntegrationsS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: CloudAwsGovcloudIntegrationsS3) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }

  // sns - computed: false, optional: true, required: false
  private _sns = new CloudAwsGovcloudIntegrationsSnsOutputReference(this, "sns");
  public get sns() {
    return this._sns;
  }
  public putSns(value: CloudAwsGovcloudIntegrationsSns) {
    this._sns.internalValue = value;
  }
  public resetSns() {
    this._sns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snsInput() {
    return this._sns.internalValue;
  }

  // sqs - computed: false, optional: true, required: false
  private _sqs = new CloudAwsGovcloudIntegrationsSqsOutputReference(this, "sqs");
  public get sqs() {
    return this._sqs;
  }
  public putSqs(value: CloudAwsGovcloudIntegrationsSqs) {
    this._sqs.internalValue = value;
  }
  public resetSqs() {
    this._sqs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqsInput() {
    return this._sqs.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.numberToTerraform(this._accountId),
      id: cdktf.stringToTerraform(this._id),
      linked_account_id: cdktf.numberToTerraform(this._linkedAccountId),
      alb: cloudAwsGovcloudIntegrationsAlbToTerraform(this._alb.internalValue),
      api_gateway: cloudAwsGovcloudIntegrationsApiGatewayToTerraform(this._apiGateway.internalValue),
      auto_scaling: cloudAwsGovcloudIntegrationsAutoScalingToTerraform(this._autoScaling.internalValue),
      aws_direct_connect: cloudAwsGovcloudIntegrationsAwsDirectConnectToTerraform(this._awsDirectConnect.internalValue),
      aws_states: cloudAwsGovcloudIntegrationsAwsStatesToTerraform(this._awsStates.internalValue),
      cloudtrail: cloudAwsGovcloudIntegrationsCloudtrailToTerraform(this._cloudtrail.internalValue),
      dynamo_db: cloudAwsGovcloudIntegrationsDynamoDbToTerraform(this._dynamoDb.internalValue),
      ebs: cloudAwsGovcloudIntegrationsEbsToTerraform(this._ebs.internalValue),
      ec2: cloudAwsGovcloudIntegrationsEc2ToTerraform(this._ec2.internalValue),
      elastic_search: cloudAwsGovcloudIntegrationsElasticSearchToTerraform(this._elasticSearch.internalValue),
      elb: cloudAwsGovcloudIntegrationsElbToTerraform(this._elb.internalValue),
      emr: cloudAwsGovcloudIntegrationsEmrToTerraform(this._emr.internalValue),
      iam: cloudAwsGovcloudIntegrationsIamToTerraform(this._iam.internalValue),
      lambda: cloudAwsGovcloudIntegrationsLambdaToTerraform(this._lambda.internalValue),
      rds: cloudAwsGovcloudIntegrationsRdsToTerraform(this._rds.internalValue),
      red_shift: cloudAwsGovcloudIntegrationsRedShiftToTerraform(this._redShift.internalValue),
      route53: cloudAwsGovcloudIntegrationsRoute53ToTerraform(this._route53.internalValue),
      s3: cloudAwsGovcloudIntegrationsS3ToTerraform(this._s3.internalValue),
      sns: cloudAwsGovcloudIntegrationsSnsToTerraform(this._sns.internalValue),
      sqs: cloudAwsGovcloudIntegrationsSqsToTerraform(this._sqs.internalValue),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      linked_account_id: {
        value: cdktf.numberToHclTerraform(this._linkedAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      alb: {
        value: cloudAwsGovcloudIntegrationsAlbToHclTerraform(this._alb.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsGovcloudIntegrationsAlbList",
      },
      api_gateway: {
        value: cloudAwsGovcloudIntegrationsApiGatewayToHclTerraform(this._apiGateway.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsGovcloudIntegrationsApiGatewayList",
      },
      auto_scaling: {
        value: cloudAwsGovcloudIntegrationsAutoScalingToHclTerraform(this._autoScaling.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsGovcloudIntegrationsAutoScalingList",
      },
      aws_direct_connect: {
        value: cloudAwsGovcloudIntegrationsAwsDirectConnectToHclTerraform(this._awsDirectConnect.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsGovcloudIntegrationsAwsDirectConnectList",
      },
      aws_states: {
        value: cloudAwsGovcloudIntegrationsAwsStatesToHclTerraform(this._awsStates.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsGovcloudIntegrationsAwsStatesList",
      },
      cloudtrail: {
        value: cloudAwsGovcloudIntegrationsCloudtrailToHclTerraform(this._cloudtrail.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsGovcloudIntegrationsCloudtrailList",
      },
      dynamo_db: {
        value: cloudAwsGovcloudIntegrationsDynamoDbToHclTerraform(this._dynamoDb.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsGovcloudIntegrationsDynamoDbList",
      },
      ebs: {
        value: cloudAwsGovcloudIntegrationsEbsToHclTerraform(this._ebs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsGovcloudIntegrationsEbsList",
      },
      ec2: {
        value: cloudAwsGovcloudIntegrationsEc2ToHclTerraform(this._ec2.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsGovcloudIntegrationsEc2List",
      },
      elastic_search: {
        value: cloudAwsGovcloudIntegrationsElasticSearchToHclTerraform(this._elasticSearch.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsGovcloudIntegrationsElasticSearchList",
      },
      elb: {
        value: cloudAwsGovcloudIntegrationsElbToHclTerraform(this._elb.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsGovcloudIntegrationsElbList",
      },
      emr: {
        value: cloudAwsGovcloudIntegrationsEmrToHclTerraform(this._emr.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsGovcloudIntegrationsEmrList",
      },
      iam: {
        value: cloudAwsGovcloudIntegrationsIamToHclTerraform(this._iam.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsGovcloudIntegrationsIamList",
      },
      lambda: {
        value: cloudAwsGovcloudIntegrationsLambdaToHclTerraform(this._lambda.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsGovcloudIntegrationsLambdaList",
      },
      rds: {
        value: cloudAwsGovcloudIntegrationsRdsToHclTerraform(this._rds.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsGovcloudIntegrationsRdsList",
      },
      red_shift: {
        value: cloudAwsGovcloudIntegrationsRedShiftToHclTerraform(this._redShift.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsGovcloudIntegrationsRedShiftList",
      },
      route53: {
        value: cloudAwsGovcloudIntegrationsRoute53ToHclTerraform(this._route53.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsGovcloudIntegrationsRoute53List",
      },
      s3: {
        value: cloudAwsGovcloudIntegrationsS3ToHclTerraform(this._s3.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsGovcloudIntegrationsS3List",
      },
      sns: {
        value: cloudAwsGovcloudIntegrationsSnsToHclTerraform(this._sns.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsGovcloudIntegrationsSnsList",
      },
      sqs: {
        value: cloudAwsGovcloudIntegrationsSqsToHclTerraform(this._sqs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsGovcloudIntegrationsSqsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
