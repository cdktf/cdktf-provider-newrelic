/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudAwsIntegrationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the account in New Relic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#account_id CloudAwsIntegrations#account_id}
  */
  readonly accountId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#id CloudAwsIntegrations#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the linked AWS account in New Relic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#linked_account_id CloudAwsIntegrations#linked_account_id}
  */
  readonly linkedAccountId: number;
  /**
  * alb block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#alb CloudAwsIntegrations#alb}
  */
  readonly alb?: CloudAwsIntegrationsAlb;
  /**
  * api_gateway block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#api_gateway CloudAwsIntegrations#api_gateway}
  */
  readonly apiGateway?: CloudAwsIntegrationsApiGateway;
  /**
  * auto_scaling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#auto_scaling CloudAwsIntegrations#auto_scaling}
  */
  readonly autoScaling?: CloudAwsIntegrationsAutoScaling;
  /**
  * aws_app_sync block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#aws_app_sync CloudAwsIntegrations#aws_app_sync}
  */
  readonly awsAppSync?: CloudAwsIntegrationsAwsAppSync;
  /**
  * aws_athena block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#aws_athena CloudAwsIntegrations#aws_athena}
  */
  readonly awsAthena?: CloudAwsIntegrationsAwsAthena;
  /**
  * aws_auto_discovery block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#aws_auto_discovery CloudAwsIntegrations#aws_auto_discovery}
  */
  readonly awsAutoDiscovery?: CloudAwsIntegrationsAwsAutoDiscovery;
  /**
  * aws_cognito block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#aws_cognito CloudAwsIntegrations#aws_cognito}
  */
  readonly awsCognito?: CloudAwsIntegrationsAwsCognito;
  /**
  * aws_connect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#aws_connect CloudAwsIntegrations#aws_connect}
  */
  readonly awsConnect?: CloudAwsIntegrationsAwsConnect;
  /**
  * aws_direct_connect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#aws_direct_connect CloudAwsIntegrations#aws_direct_connect}
  */
  readonly awsDirectConnect?: CloudAwsIntegrationsAwsDirectConnect;
  /**
  * aws_fsx block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#aws_fsx CloudAwsIntegrations#aws_fsx}
  */
  readonly awsFsx?: CloudAwsIntegrationsAwsFsx;
  /**
  * aws_glue block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#aws_glue CloudAwsIntegrations#aws_glue}
  */
  readonly awsGlue?: CloudAwsIntegrationsAwsGlue;
  /**
  * aws_kinesis_analytics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#aws_kinesis_analytics CloudAwsIntegrations#aws_kinesis_analytics}
  */
  readonly awsKinesisAnalytics?: CloudAwsIntegrationsAwsKinesisAnalytics;
  /**
  * aws_media_convert block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#aws_media_convert CloudAwsIntegrations#aws_media_convert}
  */
  readonly awsMediaConvert?: CloudAwsIntegrationsAwsMediaConvert;
  /**
  * aws_media_package_vod block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#aws_media_package_vod CloudAwsIntegrations#aws_media_package_vod}
  */
  readonly awsMediaPackageVod?: CloudAwsIntegrationsAwsMediaPackageVod;
  /**
  * aws_mq block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#aws_mq CloudAwsIntegrations#aws_mq}
  */
  readonly awsMq?: CloudAwsIntegrationsAwsMq;
  /**
  * aws_msk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#aws_msk CloudAwsIntegrations#aws_msk}
  */
  readonly awsMsk?: CloudAwsIntegrationsAwsMsk;
  /**
  * aws_neptune block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#aws_neptune CloudAwsIntegrations#aws_neptune}
  */
  readonly awsNeptune?: CloudAwsIntegrationsAwsNeptune;
  /**
  * aws_qldb block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#aws_qldb CloudAwsIntegrations#aws_qldb}
  */
  readonly awsQldb?: CloudAwsIntegrationsAwsQldb;
  /**
  * aws_route53resolver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#aws_route53resolver CloudAwsIntegrations#aws_route53resolver}
  */
  readonly awsRoute53Resolver?: CloudAwsIntegrationsAwsRoute53Resolver;
  /**
  * aws_states block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#aws_states CloudAwsIntegrations#aws_states}
  */
  readonly awsStates?: CloudAwsIntegrationsAwsStates;
  /**
  * aws_transit_gateway block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#aws_transit_gateway CloudAwsIntegrations#aws_transit_gateway}
  */
  readonly awsTransitGateway?: CloudAwsIntegrationsAwsTransitGateway;
  /**
  * aws_waf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#aws_waf CloudAwsIntegrations#aws_waf}
  */
  readonly awsWaf?: CloudAwsIntegrationsAwsWaf;
  /**
  * aws_wafv2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#aws_wafv2 CloudAwsIntegrations#aws_wafv2}
  */
  readonly awsWafv2?: CloudAwsIntegrationsAwsWafv2;
  /**
  * billing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#billing CloudAwsIntegrations#billing}
  */
  readonly billing?: CloudAwsIntegrationsBilling;
  /**
  * cloudfront block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#cloudfront CloudAwsIntegrations#cloudfront}
  */
  readonly cloudfront?: CloudAwsIntegrationsCloudfront;
  /**
  * cloudtrail block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#cloudtrail CloudAwsIntegrations#cloudtrail}
  */
  readonly cloudtrail?: CloudAwsIntegrationsCloudtrail;
  /**
  * doc_db block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#doc_db CloudAwsIntegrations#doc_db}
  */
  readonly docDb?: CloudAwsIntegrationsDocDb;
  /**
  * dynamodb block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#dynamodb CloudAwsIntegrations#dynamodb}
  */
  readonly dynamodb?: CloudAwsIntegrationsDynamodb;
  /**
  * ebs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#ebs CloudAwsIntegrations#ebs}
  */
  readonly ebs?: CloudAwsIntegrationsEbs;
  /**
  * ec2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#ec2 CloudAwsIntegrations#ec2}
  */
  readonly ec2?: CloudAwsIntegrationsEc2;
  /**
  * ecs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#ecs CloudAwsIntegrations#ecs}
  */
  readonly ecs?: CloudAwsIntegrationsEcs;
  /**
  * efs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#efs CloudAwsIntegrations#efs}
  */
  readonly efs?: CloudAwsIntegrationsEfs;
  /**
  * elasticache block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#elasticache CloudAwsIntegrations#elasticache}
  */
  readonly elasticache?: CloudAwsIntegrationsElasticache;
  /**
  * elasticbeanstalk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#elasticbeanstalk CloudAwsIntegrations#elasticbeanstalk}
  */
  readonly elasticbeanstalk?: CloudAwsIntegrationsElasticbeanstalk;
  /**
  * elasticsearch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#elasticsearch CloudAwsIntegrations#elasticsearch}
  */
  readonly elasticsearch?: CloudAwsIntegrationsElasticsearch;
  /**
  * elb block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#elb CloudAwsIntegrations#elb}
  */
  readonly elb?: CloudAwsIntegrationsElb;
  /**
  * emr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#emr CloudAwsIntegrations#emr}
  */
  readonly emr?: CloudAwsIntegrationsEmr;
  /**
  * health block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#health CloudAwsIntegrations#health}
  */
  readonly health?: CloudAwsIntegrationsHealth;
  /**
  * iam block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#iam CloudAwsIntegrations#iam}
  */
  readonly iam?: CloudAwsIntegrationsIam;
  /**
  * iot block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#iot CloudAwsIntegrations#iot}
  */
  readonly iot?: CloudAwsIntegrationsIot;
  /**
  * kinesis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#kinesis CloudAwsIntegrations#kinesis}
  */
  readonly kinesis?: CloudAwsIntegrationsKinesis;
  /**
  * kinesis_firehose block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#kinesis_firehose CloudAwsIntegrations#kinesis_firehose}
  */
  readonly kinesisFirehose?: CloudAwsIntegrationsKinesisFirehose;
  /**
  * lambda block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#lambda CloudAwsIntegrations#lambda}
  */
  readonly lambda?: CloudAwsIntegrationsLambda;
  /**
  * rds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#rds CloudAwsIntegrations#rds}
  */
  readonly rds?: CloudAwsIntegrationsRds;
  /**
  * redshift block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#redshift CloudAwsIntegrations#redshift}
  */
  readonly redshift?: CloudAwsIntegrationsRedshift;
  /**
  * route53 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#route53 CloudAwsIntegrations#route53}
  */
  readonly route53?: CloudAwsIntegrationsRoute53;
  /**
  * s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#s3 CloudAwsIntegrations#s3}
  */
  readonly s3?: CloudAwsIntegrationsS3;
  /**
  * ses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#ses CloudAwsIntegrations#ses}
  */
  readonly ses?: CloudAwsIntegrationsSes;
  /**
  * sns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#sns CloudAwsIntegrations#sns}
  */
  readonly sns?: CloudAwsIntegrationsSns;
  /**
  * sqs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#sqs CloudAwsIntegrations#sqs}
  */
  readonly sqs?: CloudAwsIntegrationsSqs;
  /**
  * trusted_advisor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#trusted_advisor CloudAwsIntegrations#trusted_advisor}
  */
  readonly trustedAdvisor?: CloudAwsIntegrationsTrustedAdvisor;
  /**
  * vpc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#vpc CloudAwsIntegrations#vpc}
  */
  readonly vpc?: CloudAwsIntegrationsVpc;
  /**
  * x_ray block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#x_ray CloudAwsIntegrations#x_ray}
  */
  readonly xRay?: CloudAwsIntegrationsXRay;
}
export interface CloudAwsIntegrationsAlb {
  /**
  * Specify each AWS region that includes the resources that you want to monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * Determine if extra inventory data be collected or not. May affect total data collection time and contribute to the Cloud provider API rate limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#fetch_extended_inventory CloudAwsIntegrations#fetch_extended_inventory}
  */
  readonly fetchExtendedInventory?: boolean | cdktf.IResolvable;
  /**
  * Specify if tags should be collected. May affect total data collection time and contribute to the Cloud provider API rate limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#fetch_tags CloudAwsIntegrations#fetch_tags}
  */
  readonly fetchTags?: boolean | cdktf.IResolvable;
  /**
  * Specify each name or prefix for the LBs that you want to monitor. Filter values are case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#load_balancer_prefixes CloudAwsIntegrations#load_balancer_prefixes}
  */
  readonly loadBalancerPrefixes?: string[];
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#tag_key CloudAwsIntegrations#tag_key}
  */
  readonly tagKey?: string;
  /**
  * Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.
  * 
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#tag_value CloudAwsIntegrations#tag_value}
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


export function cloudAwsIntegrationsAlbToHclTerraform(struct?: CloudAwsIntegrationsAlbOutputReference | CloudAwsIntegrationsAlb): any {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Determine if extra inventory data be collected or not. May affect total data collection time and contribute to the Cloud provider API rate limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#stage_prefixes CloudAwsIntegrations#stage_prefixes}
  */
  readonly stagePrefixes?: string[];
  /**
  * Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#tag_key CloudAwsIntegrations#tag_key}
  */
  readonly tagKey?: string;
  /**
  * Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.
  * 
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#tag_value CloudAwsIntegrations#tag_value}
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


export function cloudAwsIntegrationsApiGatewayToHclTerraform(struct?: CloudAwsIntegrationsApiGatewayOutputReference | CloudAwsIntegrationsApiGateway): any {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
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


export function cloudAwsIntegrationsAutoScalingToHclTerraform(struct?: CloudAwsIntegrationsAutoScalingOutputReference | CloudAwsIntegrationsAutoScaling): any {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
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


export function cloudAwsIntegrationsAwsAppSyncToHclTerraform(struct?: CloudAwsIntegrationsAwsAppSyncOutputReference | CloudAwsIntegrationsAwsAppSync): any {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
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


export function cloudAwsIntegrationsAwsAthenaToHclTerraform(struct?: CloudAwsIntegrationsAwsAthenaOutputReference | CloudAwsIntegrationsAwsAthena): any {
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
export interface CloudAwsIntegrationsAwsAutoDiscovery {
  /**
  * Specify each AWS region that includes the resources that you want to monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudAwsIntegrationsAwsAutoDiscoveryToTerraform(struct?: CloudAwsIntegrationsAwsAutoDiscoveryOutputReference | CloudAwsIntegrationsAwsAutoDiscovery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.awsRegions),
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudAwsIntegrationsAwsAutoDiscoveryToHclTerraform(struct?: CloudAwsIntegrationsAwsAutoDiscoveryOutputReference | CloudAwsIntegrationsAwsAutoDiscovery): any {
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

export class CloudAwsIntegrationsAwsAutoDiscoveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsIntegrationsAwsAutoDiscovery | undefined {
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

  public set internalValue(value: CloudAwsIntegrationsAwsAutoDiscovery | undefined) {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
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


export function cloudAwsIntegrationsAwsCognitoToHclTerraform(struct?: CloudAwsIntegrationsAwsCognitoOutputReference | CloudAwsIntegrationsAwsCognito): any {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
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


export function cloudAwsIntegrationsAwsConnectToHclTerraform(struct?: CloudAwsIntegrationsAwsConnectOutputReference | CloudAwsIntegrationsAwsConnect): any {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
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


export function cloudAwsIntegrationsAwsDirectConnectToHclTerraform(struct?: CloudAwsIntegrationsAwsDirectConnectOutputReference | CloudAwsIntegrationsAwsDirectConnect): any {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
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


export function cloudAwsIntegrationsAwsFsxToHclTerraform(struct?: CloudAwsIntegrationsAwsFsxOutputReference | CloudAwsIntegrationsAwsFsx): any {
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
export interface CloudAwsIntegrationsAwsGlue {
  /**
  * Specify each AWS region that includes the resources that you want to monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudAwsIntegrationsAwsGlueToTerraform(struct?: CloudAwsIntegrationsAwsGlueOutputReference | CloudAwsIntegrationsAwsGlue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.awsRegions),
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudAwsIntegrationsAwsGlueToHclTerraform(struct?: CloudAwsIntegrationsAwsGlueOutputReference | CloudAwsIntegrationsAwsGlue): any {
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

export class CloudAwsIntegrationsAwsGlueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsIntegrationsAwsGlue | undefined {
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

  public set internalValue(value: CloudAwsIntegrationsAwsGlue | undefined) {
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
export interface CloudAwsIntegrationsAwsKinesisAnalytics {
  /**
  * Specify each AWS region that includes the resources that you want to monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudAwsIntegrationsAwsKinesisAnalyticsToTerraform(struct?: CloudAwsIntegrationsAwsKinesisAnalyticsOutputReference | CloudAwsIntegrationsAwsKinesisAnalytics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.awsRegions),
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudAwsIntegrationsAwsKinesisAnalyticsToHclTerraform(struct?: CloudAwsIntegrationsAwsKinesisAnalyticsOutputReference | CloudAwsIntegrationsAwsKinesisAnalytics): any {
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

export class CloudAwsIntegrationsAwsKinesisAnalyticsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsIntegrationsAwsKinesisAnalytics | undefined {
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

  public set internalValue(value: CloudAwsIntegrationsAwsKinesisAnalytics | undefined) {
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
export interface CloudAwsIntegrationsAwsMediaConvert {
  /**
  * Specify each AWS region that includes the resources that you want to monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudAwsIntegrationsAwsMediaConvertToTerraform(struct?: CloudAwsIntegrationsAwsMediaConvertOutputReference | CloudAwsIntegrationsAwsMediaConvert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.awsRegions),
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudAwsIntegrationsAwsMediaConvertToHclTerraform(struct?: CloudAwsIntegrationsAwsMediaConvertOutputReference | CloudAwsIntegrationsAwsMediaConvert): any {
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

export class CloudAwsIntegrationsAwsMediaConvertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsIntegrationsAwsMediaConvert | undefined {
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

  public set internalValue(value: CloudAwsIntegrationsAwsMediaConvert | undefined) {
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
export interface CloudAwsIntegrationsAwsMediaPackageVod {
  /**
  * Specify each AWS region that includes the resources that you want to monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudAwsIntegrationsAwsMediaPackageVodToTerraform(struct?: CloudAwsIntegrationsAwsMediaPackageVodOutputReference | CloudAwsIntegrationsAwsMediaPackageVod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.awsRegions),
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudAwsIntegrationsAwsMediaPackageVodToHclTerraform(struct?: CloudAwsIntegrationsAwsMediaPackageVodOutputReference | CloudAwsIntegrationsAwsMediaPackageVod): any {
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

export class CloudAwsIntegrationsAwsMediaPackageVodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsIntegrationsAwsMediaPackageVod | undefined {
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

  public set internalValue(value: CloudAwsIntegrationsAwsMediaPackageVod | undefined) {
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
export interface CloudAwsIntegrationsAwsMq {
  /**
  * Specify each AWS region that includes the resources that you want to monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudAwsIntegrationsAwsMqToTerraform(struct?: CloudAwsIntegrationsAwsMqOutputReference | CloudAwsIntegrationsAwsMq): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.awsRegions),
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudAwsIntegrationsAwsMqToHclTerraform(struct?: CloudAwsIntegrationsAwsMqOutputReference | CloudAwsIntegrationsAwsMq): any {
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

export class CloudAwsIntegrationsAwsMqOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsIntegrationsAwsMq | undefined {
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

  public set internalValue(value: CloudAwsIntegrationsAwsMq | undefined) {
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
export interface CloudAwsIntegrationsAwsMsk {
  /**
  * Specify each AWS region that includes the resources that you want to monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudAwsIntegrationsAwsMskToTerraform(struct?: CloudAwsIntegrationsAwsMskOutputReference | CloudAwsIntegrationsAwsMsk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.awsRegions),
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudAwsIntegrationsAwsMskToHclTerraform(struct?: CloudAwsIntegrationsAwsMskOutputReference | CloudAwsIntegrationsAwsMsk): any {
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

export class CloudAwsIntegrationsAwsMskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsIntegrationsAwsMsk | undefined {
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

  public set internalValue(value: CloudAwsIntegrationsAwsMsk | undefined) {
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
export interface CloudAwsIntegrationsAwsNeptune {
  /**
  * Specify each AWS region that includes the resources that you want to monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudAwsIntegrationsAwsNeptuneToTerraform(struct?: CloudAwsIntegrationsAwsNeptuneOutputReference | CloudAwsIntegrationsAwsNeptune): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.awsRegions),
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudAwsIntegrationsAwsNeptuneToHclTerraform(struct?: CloudAwsIntegrationsAwsNeptuneOutputReference | CloudAwsIntegrationsAwsNeptune): any {
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

export class CloudAwsIntegrationsAwsNeptuneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsIntegrationsAwsNeptune | undefined {
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

  public set internalValue(value: CloudAwsIntegrationsAwsNeptune | undefined) {
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
export interface CloudAwsIntegrationsAwsQldb {
  /**
  * Specify each AWS region that includes the resources that you want to monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudAwsIntegrationsAwsQldbToTerraform(struct?: CloudAwsIntegrationsAwsQldbOutputReference | CloudAwsIntegrationsAwsQldb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.awsRegions),
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudAwsIntegrationsAwsQldbToHclTerraform(struct?: CloudAwsIntegrationsAwsQldbOutputReference | CloudAwsIntegrationsAwsQldb): any {
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

export class CloudAwsIntegrationsAwsQldbOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsIntegrationsAwsQldb | undefined {
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

  public set internalValue(value: CloudAwsIntegrationsAwsQldb | undefined) {
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
export interface CloudAwsIntegrationsAwsRoute53Resolver {
  /**
  * Specify each AWS region that includes the resources that you want to monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudAwsIntegrationsAwsRoute53ResolverToTerraform(struct?: CloudAwsIntegrationsAwsRoute53ResolverOutputReference | CloudAwsIntegrationsAwsRoute53Resolver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.awsRegions),
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudAwsIntegrationsAwsRoute53ResolverToHclTerraform(struct?: CloudAwsIntegrationsAwsRoute53ResolverOutputReference | CloudAwsIntegrationsAwsRoute53Resolver): any {
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

export class CloudAwsIntegrationsAwsRoute53ResolverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsIntegrationsAwsRoute53Resolver | undefined {
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

  public set internalValue(value: CloudAwsIntegrationsAwsRoute53Resolver | undefined) {
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
export interface CloudAwsIntegrationsAwsStates {
  /**
  * Specify each AWS region that includes the resources that you want to monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudAwsIntegrationsAwsStatesToTerraform(struct?: CloudAwsIntegrationsAwsStatesOutputReference | CloudAwsIntegrationsAwsStates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.awsRegions),
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudAwsIntegrationsAwsStatesToHclTerraform(struct?: CloudAwsIntegrationsAwsStatesOutputReference | CloudAwsIntegrationsAwsStates): any {
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

export class CloudAwsIntegrationsAwsStatesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsIntegrationsAwsStates | undefined {
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

  public set internalValue(value: CloudAwsIntegrationsAwsStates | undefined) {
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
export interface CloudAwsIntegrationsAwsTransitGateway {
  /**
  * Specify each AWS region that includes the resources that you want to monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudAwsIntegrationsAwsTransitGatewayToTerraform(struct?: CloudAwsIntegrationsAwsTransitGatewayOutputReference | CloudAwsIntegrationsAwsTransitGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.awsRegions),
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudAwsIntegrationsAwsTransitGatewayToHclTerraform(struct?: CloudAwsIntegrationsAwsTransitGatewayOutputReference | CloudAwsIntegrationsAwsTransitGateway): any {
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

export class CloudAwsIntegrationsAwsTransitGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsIntegrationsAwsTransitGateway | undefined {
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

  public set internalValue(value: CloudAwsIntegrationsAwsTransitGateway | undefined) {
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
export interface CloudAwsIntegrationsAwsWaf {
  /**
  * Specify each AWS region that includes the resources that you want to monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudAwsIntegrationsAwsWafToTerraform(struct?: CloudAwsIntegrationsAwsWafOutputReference | CloudAwsIntegrationsAwsWaf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.awsRegions),
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudAwsIntegrationsAwsWafToHclTerraform(struct?: CloudAwsIntegrationsAwsWafOutputReference | CloudAwsIntegrationsAwsWaf): any {
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

export class CloudAwsIntegrationsAwsWafOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsIntegrationsAwsWaf | undefined {
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

  public set internalValue(value: CloudAwsIntegrationsAwsWaf | undefined) {
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
export interface CloudAwsIntegrationsAwsWafv2 {
  /**
  * Specify each AWS region that includes the resources that you want to monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudAwsIntegrationsAwsWafv2ToTerraform(struct?: CloudAwsIntegrationsAwsWafv2OutputReference | CloudAwsIntegrationsAwsWafv2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.awsRegions),
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudAwsIntegrationsAwsWafv2ToHclTerraform(struct?: CloudAwsIntegrationsAwsWafv2OutputReference | CloudAwsIntegrationsAwsWafv2): any {
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

export class CloudAwsIntegrationsAwsWafv2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsIntegrationsAwsWafv2 | undefined {
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

  public set internalValue(value: CloudAwsIntegrationsAwsWafv2 | undefined) {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
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


export function cloudAwsIntegrationsBillingToHclTerraform(struct?: CloudAwsIntegrationsBillingOutputReference | CloudAwsIntegrationsBilling): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
export interface CloudAwsIntegrationsCloudfront {
  /**
  * Specify if Lambdas@Edge should be monitored. May affect total data collection time and contribute to the Cloud provider API rate limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#fetch_lambdas_at_edge CloudAwsIntegrations#fetch_lambdas_at_edge}
  */
  readonly fetchLambdasAtEdge?: boolean | cdktf.IResolvable;
  /**
  * Specify if tags should be collected. May affect total data collection time and contribute to the Cloud provider API rate limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#fetch_tags CloudAwsIntegrations#fetch_tags}
  */
  readonly fetchTags?: boolean | cdktf.IResolvable;
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#tag_key CloudAwsIntegrations#tag_key}
  */
  readonly tagKey?: string;
  /**
  * Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.
  * 
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#tag_value CloudAwsIntegrations#tag_value}
  */
  readonly tagValue?: string;
}

export function cloudAwsIntegrationsCloudfrontToTerraform(struct?: CloudAwsIntegrationsCloudfrontOutputReference | CloudAwsIntegrationsCloudfront): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fetch_lambdas_at_edge: cdktf.booleanToTerraform(struct!.fetchLambdasAtEdge),
    fetch_tags: cdktf.booleanToTerraform(struct!.fetchTags),
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
    tag_key: cdktf.stringToTerraform(struct!.tagKey),
    tag_value: cdktf.stringToTerraform(struct!.tagValue),
  }
}


export function cloudAwsIntegrationsCloudfrontToHclTerraform(struct?: CloudAwsIntegrationsCloudfrontOutputReference | CloudAwsIntegrationsCloudfront): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fetch_lambdas_at_edge: {
      value: cdktf.booleanToHclTerraform(struct!.fetchLambdasAtEdge),
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

export class CloudAwsIntegrationsCloudfrontOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsIntegrationsCloudfront | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fetchLambdasAtEdge !== undefined) {
      hasAnyValues = true;
      internalValueResult.fetchLambdasAtEdge = this._fetchLambdasAtEdge;
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

  public set internalValue(value: CloudAwsIntegrationsCloudfront | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fetchLambdasAtEdge = undefined;
      this._fetchTags = undefined;
      this._metricsPollingInterval = undefined;
      this._tagKey = undefined;
      this._tagValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fetchLambdasAtEdge = value.fetchLambdasAtEdge;
      this._fetchTags = value.fetchTags;
      this._metricsPollingInterval = value.metricsPollingInterval;
      this._tagKey = value.tagKey;
      this._tagValue = value.tagValue;
    }
  }

  // fetch_lambdas_at_edge - computed: false, optional: true, required: false
  private _fetchLambdasAtEdge?: boolean | cdktf.IResolvable; 
  public get fetchLambdasAtEdge() {
    return this.getBooleanAttribute('fetch_lambdas_at_edge');
  }
  public set fetchLambdasAtEdge(value: boolean | cdktf.IResolvable) {
    this._fetchLambdasAtEdge = value;
  }
  public resetFetchLambdasAtEdge() {
    this._fetchLambdasAtEdge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchLambdasAtEdgeInput() {
    return this._fetchLambdasAtEdge;
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
export interface CloudAwsIntegrationsCloudtrail {
  /**
  * Specify each AWS region that includes the resources that you want to monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
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


export function cloudAwsIntegrationsCloudtrailToHclTerraform(struct?: CloudAwsIntegrationsCloudtrailOutputReference | CloudAwsIntegrationsCloudtrail): any {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
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


export function cloudAwsIntegrationsDocDbToHclTerraform(struct?: CloudAwsIntegrationsDocDbOutputReference | CloudAwsIntegrationsDocDb): any {
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
export interface CloudAwsIntegrationsDynamodb {
  /**
  * Specify each AWS region that includes the resources that you want to monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * Determine if extra inventory data be collected or not. May affect total data collection time and contribute to the Cloud provider API rate limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#fetch_extended_inventory CloudAwsIntegrations#fetch_extended_inventory}
  */
  readonly fetchExtendedInventory?: boolean | cdktf.IResolvable;
  /**
  * Specify if tags and the extended inventory should be collected. May affect total data collection time and contribute to the Cloud provider API rate limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#fetch_tags CloudAwsIntegrations#fetch_tags}
  */
  readonly fetchTags?: boolean | cdktf.IResolvable;
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#tag_key CloudAwsIntegrations#tag_key}
  */
  readonly tagKey?: string;
  /**
  * Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#tag_value CloudAwsIntegrations#tag_value}
  */
  readonly tagValue?: string;
}

export function cloudAwsIntegrationsDynamodbToTerraform(struct?: CloudAwsIntegrationsDynamodbOutputReference | CloudAwsIntegrationsDynamodb): any {
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


export function cloudAwsIntegrationsDynamodbToHclTerraform(struct?: CloudAwsIntegrationsDynamodbOutputReference | CloudAwsIntegrationsDynamodb): any {
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

export class CloudAwsIntegrationsDynamodbOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsIntegrationsDynamodb | undefined {
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

  public set internalValue(value: CloudAwsIntegrationsDynamodb | undefined) {
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
export interface CloudAwsIntegrationsEbs {
  /**
  * Specify each AWS region that includes the resources that you want to monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * Determine if extra inventory data be collected or not. May affect total data collection time and contribute to the Cloud provider API rate limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#fetch_extended_inventory CloudAwsIntegrations#fetch_extended_inventory}
  */
  readonly fetchExtendedInventory?: boolean | cdktf.IResolvable;
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#tag_key CloudAwsIntegrations#tag_key}
  */
  readonly tagKey?: string;
  /**
  * Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#tag_value CloudAwsIntegrations#tag_value}
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


export function cloudAwsIntegrationsEbsToHclTerraform(struct?: CloudAwsIntegrationsEbsOutputReference | CloudAwsIntegrationsEbs): any {
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
export interface CloudAwsIntegrationsEc2 {
  /**
  * Specify each AWS region that includes the resources that you want to monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * Specify if the old legacy metadata and tag names have to be kept, it will consume more ingest data size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#duplicate_ec2_tags CloudAwsIntegrations#duplicate_ec2_tags}
  */
  readonly duplicateEc2Tags?: boolean | cdktf.IResolvable;
  /**
  * Specify if IP addresses of ec2 instance should be collected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#fetch_ip_addresses CloudAwsIntegrations#fetch_ip_addresses}
  */
  readonly fetchIpAddresses?: boolean | cdktf.IResolvable;
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#tag_key CloudAwsIntegrations#tag_key}
  */
  readonly tagKey?: string;
  /**
  * Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.
  * 
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#tag_value CloudAwsIntegrations#tag_value}
  */
  readonly tagValue?: string;
}

export function cloudAwsIntegrationsEc2ToTerraform(struct?: CloudAwsIntegrationsEc2OutputReference | CloudAwsIntegrationsEc2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.awsRegions),
    duplicate_ec2_tags: cdktf.booleanToTerraform(struct!.duplicateEc2Tags),
    fetch_ip_addresses: cdktf.booleanToTerraform(struct!.fetchIpAddresses),
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
    tag_key: cdktf.stringToTerraform(struct!.tagKey),
    tag_value: cdktf.stringToTerraform(struct!.tagValue),
  }
}


export function cloudAwsIntegrationsEc2ToHclTerraform(struct?: CloudAwsIntegrationsEc2OutputReference | CloudAwsIntegrationsEc2): any {
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
    duplicate_ec2_tags: {
      value: cdktf.booleanToHclTerraform(struct!.duplicateEc2Tags),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class CloudAwsIntegrationsEc2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsIntegrationsEc2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegions = this._awsRegions;
    }
    if (this._duplicateEc2Tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.duplicateEc2Tags = this._duplicateEc2Tags;
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

  public set internalValue(value: CloudAwsIntegrationsEc2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsRegions = undefined;
      this._duplicateEc2Tags = undefined;
      this._fetchIpAddresses = undefined;
      this._metricsPollingInterval = undefined;
      this._tagKey = undefined;
      this._tagValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsRegions = value.awsRegions;
      this._duplicateEc2Tags = value.duplicateEc2Tags;
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

  // duplicate_ec2_tags - computed: false, optional: true, required: false
  private _duplicateEc2Tags?: boolean | cdktf.IResolvable; 
  public get duplicateEc2Tags() {
    return this.getBooleanAttribute('duplicate_ec2_tags');
  }
  public set duplicateEc2Tags(value: boolean | cdktf.IResolvable) {
    this._duplicateEc2Tags = value;
  }
  public resetDuplicateEc2Tags() {
    this._duplicateEc2Tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duplicateEc2TagsInput() {
    return this._duplicateEc2Tags;
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
export interface CloudAwsIntegrationsEcs {
  /**
  * Specify each AWS region that includes the resources that you want to monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * Specify if tags and the extended inventory should be collected. May affect total data collection time and contribute to the Cloud provider API rate limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#fetch_tags CloudAwsIntegrations#fetch_tags}
  */
  readonly fetchTags?: boolean | cdktf.IResolvable;
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#tag_key CloudAwsIntegrations#tag_key}
  */
  readonly tagKey?: string;
  /**
  * Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#tag_value CloudAwsIntegrations#tag_value}
  */
  readonly tagValue?: string;
}

export function cloudAwsIntegrationsEcsToTerraform(struct?: CloudAwsIntegrationsEcsOutputReference | CloudAwsIntegrationsEcs): any {
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


export function cloudAwsIntegrationsEcsToHclTerraform(struct?: CloudAwsIntegrationsEcsOutputReference | CloudAwsIntegrationsEcs): any {
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

export class CloudAwsIntegrationsEcsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsIntegrationsEcs | undefined {
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

  public set internalValue(value: CloudAwsIntegrationsEcs | undefined) {
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
export interface CloudAwsIntegrationsEfs {
  /**
  * Specify each AWS region that includes the resources that you want to monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * Specify if tags and the extended inventory should be collected. May affect total data collection time and contribute to the Cloud provider API rate limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#fetch_tags CloudAwsIntegrations#fetch_tags}
  */
  readonly fetchTags?: boolean | cdktf.IResolvable;
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#tag_key CloudAwsIntegrations#tag_key}
  */
  readonly tagKey?: string;
  /**
  * Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#tag_value CloudAwsIntegrations#tag_value}
  */
  readonly tagValue?: string;
}

export function cloudAwsIntegrationsEfsToTerraform(struct?: CloudAwsIntegrationsEfsOutputReference | CloudAwsIntegrationsEfs): any {
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


export function cloudAwsIntegrationsEfsToHclTerraform(struct?: CloudAwsIntegrationsEfsOutputReference | CloudAwsIntegrationsEfs): any {
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

export class CloudAwsIntegrationsEfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsIntegrationsEfs | undefined {
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

  public set internalValue(value: CloudAwsIntegrationsEfs | undefined) {
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
export interface CloudAwsIntegrationsElasticache {
  /**
  * Specify each AWS region that includes the resources that you want to monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * Specify if tags should be collected. May affect total data collection time and contribute to the Cloud provider API rate limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#fetch_tags CloudAwsIntegrations#fetch_tags}
  */
  readonly fetchTags?: boolean | cdktf.IResolvable;
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#tag_key CloudAwsIntegrations#tag_key}
  */
  readonly tagKey?: string;
  /**
  * Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.
  * 
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#tag_value CloudAwsIntegrations#tag_value}
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


export function cloudAwsIntegrationsElasticacheToHclTerraform(struct?: CloudAwsIntegrationsElasticacheOutputReference | CloudAwsIntegrationsElasticache): any {
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
export interface CloudAwsIntegrationsElasticbeanstalk {
  /**
  * Specify each AWS region that includes the resources that you want to monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * Determine if extra inventory data be collected or not. May affect total data collection time and contribute to the Cloud provider API rate limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#fetch_extended_inventory CloudAwsIntegrations#fetch_extended_inventory}
  */
  readonly fetchExtendedInventory?: boolean | cdktf.IResolvable;
  /**
  * Specify if tags and the extended inventory should be collected. May affect total data collection time and contribute to the Cloud provider API rate limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#fetch_tags CloudAwsIntegrations#fetch_tags}
  */
  readonly fetchTags?: boolean | cdktf.IResolvable;
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#tag_key CloudAwsIntegrations#tag_key}
  */
  readonly tagKey?: string;
  /**
  * Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#tag_value CloudAwsIntegrations#tag_value}
  */
  readonly tagValue?: string;
}

export function cloudAwsIntegrationsElasticbeanstalkToTerraform(struct?: CloudAwsIntegrationsElasticbeanstalkOutputReference | CloudAwsIntegrationsElasticbeanstalk): any {
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


export function cloudAwsIntegrationsElasticbeanstalkToHclTerraform(struct?: CloudAwsIntegrationsElasticbeanstalkOutputReference | CloudAwsIntegrationsElasticbeanstalk): any {
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

export class CloudAwsIntegrationsElasticbeanstalkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsIntegrationsElasticbeanstalk | undefined {
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

  public set internalValue(value: CloudAwsIntegrationsElasticbeanstalk | undefined) {
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
export interface CloudAwsIntegrationsElasticsearch {
  /**
  * Specify each AWS region that includes the resources that you want to monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * Specify if metrics should be collected for nodes. Turning it on will increase the number of API calls made to CloudWatch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#fetch_nodes CloudAwsIntegrations#fetch_nodes}
  */
  readonly fetchNodes?: boolean | cdktf.IResolvable;
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#tag_key CloudAwsIntegrations#tag_key}
  */
  readonly tagKey?: string;
  /**
  * Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.
  * 
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#tag_value CloudAwsIntegrations#tag_value}
  */
  readonly tagValue?: string;
}

export function cloudAwsIntegrationsElasticsearchToTerraform(struct?: CloudAwsIntegrationsElasticsearchOutputReference | CloudAwsIntegrationsElasticsearch): any {
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


export function cloudAwsIntegrationsElasticsearchToHclTerraform(struct?: CloudAwsIntegrationsElasticsearchOutputReference | CloudAwsIntegrationsElasticsearch): any {
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

export class CloudAwsIntegrationsElasticsearchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsIntegrationsElasticsearch | undefined {
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

  public set internalValue(value: CloudAwsIntegrationsElasticsearch | undefined) {
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
export interface CloudAwsIntegrationsElb {
  /**
  * Specify each AWS region that includes the resources that you want to monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * Determine if extra inventory data be collected or not. May affect total data collection time and contribute to the Cloud provider API rate limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#fetch_extended_inventory CloudAwsIntegrations#fetch_extended_inventory}
  */
  readonly fetchExtendedInventory?: boolean | cdktf.IResolvable;
  /**
  * Specify if tags should be collected. May affect total data collection time and contribute to the Cloud provider API rate limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#fetch_tags CloudAwsIntegrations#fetch_tags}
  */
  readonly fetchTags?: boolean | cdktf.IResolvable;
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudAwsIntegrationsElbToTerraform(struct?: CloudAwsIntegrationsElbOutputReference | CloudAwsIntegrationsElb): any {
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


export function cloudAwsIntegrationsElbToHclTerraform(struct?: CloudAwsIntegrationsElbOutputReference | CloudAwsIntegrationsElb): any {
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

export class CloudAwsIntegrationsElbOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsIntegrationsElb | undefined {
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

  public set internalValue(value: CloudAwsIntegrationsElb | undefined) {
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
export interface CloudAwsIntegrationsEmr {
  /**
  * Specify each AWS region that includes the resources that you want to monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * Specify if tags and the extended inventory should be collected. May affect total data collection time and contribute to the Cloud provider API rate limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#fetch_tags CloudAwsIntegrations#fetch_tags}
  */
  readonly fetchTags?: boolean | cdktf.IResolvable;
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#tag_key CloudAwsIntegrations#tag_key}
  */
  readonly tagKey?: string;
  /**
  * Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#tag_value CloudAwsIntegrations#tag_value}
  */
  readonly tagValue?: string;
}

export function cloudAwsIntegrationsEmrToTerraform(struct?: CloudAwsIntegrationsEmrOutputReference | CloudAwsIntegrationsEmr): any {
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


export function cloudAwsIntegrationsEmrToHclTerraform(struct?: CloudAwsIntegrationsEmrOutputReference | CloudAwsIntegrationsEmr): any {
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

export class CloudAwsIntegrationsEmrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsIntegrationsEmr | undefined {
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

  public set internalValue(value: CloudAwsIntegrationsEmr | undefined) {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
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


export function cloudAwsIntegrationsHealthToHclTerraform(struct?: CloudAwsIntegrationsHealthOutputReference | CloudAwsIntegrationsHealth): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
export interface CloudAwsIntegrationsIam {
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#tag_key CloudAwsIntegrations#tag_key}
  */
  readonly tagKey?: string;
  /**
  * Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#tag_value CloudAwsIntegrations#tag_value}
  */
  readonly tagValue?: string;
}

export function cloudAwsIntegrationsIamToTerraform(struct?: CloudAwsIntegrationsIamOutputReference | CloudAwsIntegrationsIam): any {
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


export function cloudAwsIntegrationsIamToHclTerraform(struct?: CloudAwsIntegrationsIamOutputReference | CloudAwsIntegrationsIam): any {
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

export class CloudAwsIntegrationsIamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsIntegrationsIam | undefined {
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

  public set internalValue(value: CloudAwsIntegrationsIam | undefined) {
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
export interface CloudAwsIntegrationsIot {
  /**
  * Specify each AWS region that includes the resources that you want to monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudAwsIntegrationsIotToTerraform(struct?: CloudAwsIntegrationsIotOutputReference | CloudAwsIntegrationsIot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.awsRegions),
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudAwsIntegrationsIotToHclTerraform(struct?: CloudAwsIntegrationsIotOutputReference | CloudAwsIntegrationsIot): any {
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

export class CloudAwsIntegrationsIotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsIntegrationsIot | undefined {
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

  public set internalValue(value: CloudAwsIntegrationsIot | undefined) {
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
export interface CloudAwsIntegrationsKinesis {
  /**
  * Specify each AWS region that includes the resources that you want to monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * Specify if Shards should be monitored. May affect total data collection time and contribute to the Cloud provider API rate limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#fetch_shards CloudAwsIntegrations#fetch_shards}
  */
  readonly fetchShards?: boolean | cdktf.IResolvable;
  /**
  * Specify if tags and the extended inventory should be collected. May affect total data collection time and contribute to the Cloud provider API rate limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#fetch_tags CloudAwsIntegrations#fetch_tags}
  */
  readonly fetchTags?: boolean | cdktf.IResolvable;
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#tag_key CloudAwsIntegrations#tag_key}
  */
  readonly tagKey?: string;
  /**
  * Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#tag_value CloudAwsIntegrations#tag_value}
  */
  readonly tagValue?: string;
}

export function cloudAwsIntegrationsKinesisToTerraform(struct?: CloudAwsIntegrationsKinesisOutputReference | CloudAwsIntegrationsKinesis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.awsRegions),
    fetch_shards: cdktf.booleanToTerraform(struct!.fetchShards),
    fetch_tags: cdktf.booleanToTerraform(struct!.fetchTags),
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
    tag_key: cdktf.stringToTerraform(struct!.tagKey),
    tag_value: cdktf.stringToTerraform(struct!.tagValue),
  }
}


export function cloudAwsIntegrationsKinesisToHclTerraform(struct?: CloudAwsIntegrationsKinesisOutputReference | CloudAwsIntegrationsKinesis): any {
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
    fetch_shards: {
      value: cdktf.booleanToHclTerraform(struct!.fetchShards),
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

export class CloudAwsIntegrationsKinesisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsIntegrationsKinesis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegions = this._awsRegions;
    }
    if (this._fetchShards !== undefined) {
      hasAnyValues = true;
      internalValueResult.fetchShards = this._fetchShards;
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

  public set internalValue(value: CloudAwsIntegrationsKinesis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsRegions = undefined;
      this._fetchShards = undefined;
      this._fetchTags = undefined;
      this._metricsPollingInterval = undefined;
      this._tagKey = undefined;
      this._tagValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsRegions = value.awsRegions;
      this._fetchShards = value.fetchShards;
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

  // fetch_shards - computed: false, optional: true, required: false
  private _fetchShards?: boolean | cdktf.IResolvable; 
  public get fetchShards() {
    return this.getBooleanAttribute('fetch_shards');
  }
  public set fetchShards(value: boolean | cdktf.IResolvable) {
    this._fetchShards = value;
  }
  public resetFetchShards() {
    this._fetchShards = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchShardsInput() {
    return this._fetchShards;
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
export interface CloudAwsIntegrationsKinesisFirehose {
  /**
  * Specify each AWS region that includes the resources that you want to monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudAwsIntegrationsKinesisFirehoseToTerraform(struct?: CloudAwsIntegrationsKinesisFirehoseOutputReference | CloudAwsIntegrationsKinesisFirehose): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.awsRegions),
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudAwsIntegrationsKinesisFirehoseToHclTerraform(struct?: CloudAwsIntegrationsKinesisFirehoseOutputReference | CloudAwsIntegrationsKinesisFirehose): any {
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

export class CloudAwsIntegrationsKinesisFirehoseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsIntegrationsKinesisFirehose | undefined {
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

  public set internalValue(value: CloudAwsIntegrationsKinesisFirehose | undefined) {
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
export interface CloudAwsIntegrationsLambda {
  /**
  * Specify each AWS region that includes the resources that you want to monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * Specify if tags and the extended inventory should be collected. May affect total data collection time and contribute to the Cloud provider API rate limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#fetch_tags CloudAwsIntegrations#fetch_tags}
  */
  readonly fetchTags?: boolean | cdktf.IResolvable;
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#tag_key CloudAwsIntegrations#tag_key}
  */
  readonly tagKey?: string;
  /**
  * Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#tag_value CloudAwsIntegrations#tag_value}
  */
  readonly tagValue?: string;
}

export function cloudAwsIntegrationsLambdaToTerraform(struct?: CloudAwsIntegrationsLambdaOutputReference | CloudAwsIntegrationsLambda): any {
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


export function cloudAwsIntegrationsLambdaToHclTerraform(struct?: CloudAwsIntegrationsLambdaOutputReference | CloudAwsIntegrationsLambda): any {
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

export class CloudAwsIntegrationsLambdaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsIntegrationsLambda | undefined {
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

  public set internalValue(value: CloudAwsIntegrationsLambda | undefined) {
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
export interface CloudAwsIntegrationsRds {
  /**
  * Specify each AWS region that includes the resources that you want to monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * Specify if tags and the extended inventory should be collected. May affect total data collection time and contribute to the Cloud provider API rate limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#fetch_tags CloudAwsIntegrations#fetch_tags}
  */
  readonly fetchTags?: boolean | cdktf.IResolvable;
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#tag_key CloudAwsIntegrations#tag_key}
  */
  readonly tagKey?: string;
  /**
  * Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#tag_value CloudAwsIntegrations#tag_value}
  */
  readonly tagValue?: string;
}

export function cloudAwsIntegrationsRdsToTerraform(struct?: CloudAwsIntegrationsRdsOutputReference | CloudAwsIntegrationsRds): any {
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


export function cloudAwsIntegrationsRdsToHclTerraform(struct?: CloudAwsIntegrationsRdsOutputReference | CloudAwsIntegrationsRds): any {
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

export class CloudAwsIntegrationsRdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsIntegrationsRds | undefined {
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

  public set internalValue(value: CloudAwsIntegrationsRds | undefined) {
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
export interface CloudAwsIntegrationsRedshift {
  /**
  * Specify each AWS region that includes the resources that you want to monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#tag_key CloudAwsIntegrations#tag_key}
  */
  readonly tagKey?: string;
  /**
  * Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#tag_value CloudAwsIntegrations#tag_value}
  */
  readonly tagValue?: string;
}

export function cloudAwsIntegrationsRedshiftToTerraform(struct?: CloudAwsIntegrationsRedshiftOutputReference | CloudAwsIntegrationsRedshift): any {
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


export function cloudAwsIntegrationsRedshiftToHclTerraform(struct?: CloudAwsIntegrationsRedshiftOutputReference | CloudAwsIntegrationsRedshift): any {
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

export class CloudAwsIntegrationsRedshiftOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsIntegrationsRedshift | undefined {
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

  public set internalValue(value: CloudAwsIntegrationsRedshift | undefined) {
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
export interface CloudAwsIntegrationsRoute53 {
  /**
  * Determine if extra inventory data be collected or not. May affect total data collection time and contribute to the Cloud provider API rate limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#fetch_extended_inventory CloudAwsIntegrations#fetch_extended_inventory}
  */
  readonly fetchExtendedInventory?: boolean | cdktf.IResolvable;
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudAwsIntegrationsRoute53ToTerraform(struct?: CloudAwsIntegrationsRoute53OutputReference | CloudAwsIntegrationsRoute53): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fetch_extended_inventory: cdktf.booleanToTerraform(struct!.fetchExtendedInventory),
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudAwsIntegrationsRoute53ToHclTerraform(struct?: CloudAwsIntegrationsRoute53OutputReference | CloudAwsIntegrationsRoute53): any {
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

export class CloudAwsIntegrationsRoute53OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsIntegrationsRoute53 | undefined {
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

  public set internalValue(value: CloudAwsIntegrationsRoute53 | undefined) {
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
export interface CloudAwsIntegrationsS3 {
  /**
  * Determine if extra inventory data be collected or not. May affect total data collection time and contribute to the Cloud provider API rate limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#fetch_extended_inventory CloudAwsIntegrations#fetch_extended_inventory}
  */
  readonly fetchExtendedInventory?: boolean | cdktf.IResolvable;
  /**
  * Specify if tags should be collected. May affect total data collection time and contribute to the Cloud provider API rate limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#fetch_tags CloudAwsIntegrations#fetch_tags}
  */
  readonly fetchTags?: boolean | cdktf.IResolvable;
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#tag_key CloudAwsIntegrations#tag_key}
  */
  readonly tagKey?: string;
  /**
  * Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#tag_value CloudAwsIntegrations#tag_value}
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


export function cloudAwsIntegrationsS3ToHclTerraform(struct?: CloudAwsIntegrationsS3OutputReference | CloudAwsIntegrationsS3): any {
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
export interface CloudAwsIntegrationsSes {
  /**
  * Specify each AWS region that includes the resources that you want to monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudAwsIntegrationsSesToTerraform(struct?: CloudAwsIntegrationsSesOutputReference | CloudAwsIntegrationsSes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.awsRegions),
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudAwsIntegrationsSesToHclTerraform(struct?: CloudAwsIntegrationsSesOutputReference | CloudAwsIntegrationsSes): any {
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

export class CloudAwsIntegrationsSesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsIntegrationsSes | undefined {
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

  public set internalValue(value: CloudAwsIntegrationsSes | undefined) {
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
export interface CloudAwsIntegrationsSns {
  /**
  * Specify each AWS region that includes the resources that you want to monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * Determine if extra inventory data be collected or not. May affect total data collection time and contribute to the Cloud provider API rate limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#fetch_extended_inventory CloudAwsIntegrations#fetch_extended_inventory}
  */
  readonly fetchExtendedInventory?: boolean | cdktf.IResolvable;
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudAwsIntegrationsSnsToTerraform(struct?: CloudAwsIntegrationsSnsOutputReference | CloudAwsIntegrationsSns): any {
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


export function cloudAwsIntegrationsSnsToHclTerraform(struct?: CloudAwsIntegrationsSnsOutputReference | CloudAwsIntegrationsSns): any {
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

export class CloudAwsIntegrationsSnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAwsIntegrationsSns | undefined {
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

  public set internalValue(value: CloudAwsIntegrationsSns | undefined) {
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
export interface CloudAwsIntegrationsSqs {
  /**
  * Specify each AWS region that includes the resources that you want to monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * Determine if extra inventory data be collected or not. May affect total data collection time and contribute to the Cloud provider API rate limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#fetch_extended_inventory CloudAwsIntegrations#fetch_extended_inventory}
  */
  readonly fetchExtendedInventory?: boolean | cdktf.IResolvable;
  /**
  * Specify if tags should be collected. May affect total data collection time and contribute to the Cloud provider API rate limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#fetch_tags CloudAwsIntegrations#fetch_tags}
  */
  readonly fetchTags?: boolean | cdktf.IResolvable;
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Specify each name or prefix for the Queues that you want to monitor. Filter values are case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#queue_prefixes CloudAwsIntegrations#queue_prefixes}
  */
  readonly queuePrefixes?: string[];
  /**
  * Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#tag_key CloudAwsIntegrations#tag_key}
  */
  readonly tagKey?: string;
  /**
  * Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#tag_value CloudAwsIntegrations#tag_value}
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


export function cloudAwsIntegrationsSqsToHclTerraform(struct?: CloudAwsIntegrationsSqsOutputReference | CloudAwsIntegrationsSqs): any {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
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


export function cloudAwsIntegrationsTrustedAdvisorToHclTerraform(struct?: CloudAwsIntegrationsTrustedAdvisorOutputReference | CloudAwsIntegrationsTrustedAdvisor): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * Specify if NAT gateway should be monitored. May affect total data collection time and contribute to the Cloud provider API rate limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#fetch_nat_gateway CloudAwsIntegrations#fetch_nat_gateway}
  */
  readonly fetchNatGateway?: boolean | cdktf.IResolvable;
  /**
  * Specify if VPN should be monitored. May affect total data collection time and contribute to the Cloud provider API rate limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#fetch_vpn CloudAwsIntegrations#fetch_vpn}
  */
  readonly fetchVpn?: boolean | cdktf.IResolvable;
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#tag_key CloudAwsIntegrations#tag_key}
  */
  readonly tagKey?: string;
  /**
  * Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#tag_value CloudAwsIntegrations#tag_value}
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


export function cloudAwsIntegrationsVpcToHclTerraform(struct?: CloudAwsIntegrationsVpcOutputReference | CloudAwsIntegrationsVpc): any {
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
    fetch_nat_gateway: {
      value: cdktf.booleanToHclTerraform(struct!.fetchNatGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fetch_vpn: {
      value: cdktf.booleanToHclTerraform(struct!.fetchVpn),
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * The data polling interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}
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


export function cloudAwsIntegrationsXRayToHclTerraform(struct?: CloudAwsIntegrationsXRayOutputReference | CloudAwsIntegrationsXRay): any {
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
* Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations newrelic_cloud_aws_integrations}
*/
export class CloudAwsIntegrations extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_cloud_aws_integrations";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudAwsIntegrations resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudAwsIntegrations to import
  * @param importFromId The id of the existing CloudAwsIntegrations that should be imported. Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudAwsIntegrations to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "newrelic_cloud_aws_integrations", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_aws_integrations newrelic_cloud_aws_integrations} Resource
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
        providerVersion: '3.76.1',
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
    this._awsAutoDiscovery.internalValue = config.awsAutoDiscovery;
    this._awsCognito.internalValue = config.awsCognito;
    this._awsConnect.internalValue = config.awsConnect;
    this._awsDirectConnect.internalValue = config.awsDirectConnect;
    this._awsFsx.internalValue = config.awsFsx;
    this._awsGlue.internalValue = config.awsGlue;
    this._awsKinesisAnalytics.internalValue = config.awsKinesisAnalytics;
    this._awsMediaConvert.internalValue = config.awsMediaConvert;
    this._awsMediaPackageVod.internalValue = config.awsMediaPackageVod;
    this._awsMq.internalValue = config.awsMq;
    this._awsMsk.internalValue = config.awsMsk;
    this._awsNeptune.internalValue = config.awsNeptune;
    this._awsQldb.internalValue = config.awsQldb;
    this._awsRoute53Resolver.internalValue = config.awsRoute53Resolver;
    this._awsStates.internalValue = config.awsStates;
    this._awsTransitGateway.internalValue = config.awsTransitGateway;
    this._awsWaf.internalValue = config.awsWaf;
    this._awsWafv2.internalValue = config.awsWafv2;
    this._billing.internalValue = config.billing;
    this._cloudfront.internalValue = config.cloudfront;
    this._cloudtrail.internalValue = config.cloudtrail;
    this._docDb.internalValue = config.docDb;
    this._dynamodb.internalValue = config.dynamodb;
    this._ebs.internalValue = config.ebs;
    this._ec2.internalValue = config.ec2;
    this._ecs.internalValue = config.ecs;
    this._efs.internalValue = config.efs;
    this._elasticache.internalValue = config.elasticache;
    this._elasticbeanstalk.internalValue = config.elasticbeanstalk;
    this._elasticsearch.internalValue = config.elasticsearch;
    this._elb.internalValue = config.elb;
    this._emr.internalValue = config.emr;
    this._health.internalValue = config.health;
    this._iam.internalValue = config.iam;
    this._iot.internalValue = config.iot;
    this._kinesis.internalValue = config.kinesis;
    this._kinesisFirehose.internalValue = config.kinesisFirehose;
    this._lambda.internalValue = config.lambda;
    this._rds.internalValue = config.rds;
    this._redshift.internalValue = config.redshift;
    this._route53.internalValue = config.route53;
    this._s3.internalValue = config.s3;
    this._ses.internalValue = config.ses;
    this._sns.internalValue = config.sns;
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

  // aws_auto_discovery - computed: false, optional: true, required: false
  private _awsAutoDiscovery = new CloudAwsIntegrationsAwsAutoDiscoveryOutputReference(this, "aws_auto_discovery");
  public get awsAutoDiscovery() {
    return this._awsAutoDiscovery;
  }
  public putAwsAutoDiscovery(value: CloudAwsIntegrationsAwsAutoDiscovery) {
    this._awsAutoDiscovery.internalValue = value;
  }
  public resetAwsAutoDiscovery() {
    this._awsAutoDiscovery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAutoDiscoveryInput() {
    return this._awsAutoDiscovery.internalValue;
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

  // aws_glue - computed: false, optional: true, required: false
  private _awsGlue = new CloudAwsIntegrationsAwsGlueOutputReference(this, "aws_glue");
  public get awsGlue() {
    return this._awsGlue;
  }
  public putAwsGlue(value: CloudAwsIntegrationsAwsGlue) {
    this._awsGlue.internalValue = value;
  }
  public resetAwsGlue() {
    this._awsGlue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsGlueInput() {
    return this._awsGlue.internalValue;
  }

  // aws_kinesis_analytics - computed: false, optional: true, required: false
  private _awsKinesisAnalytics = new CloudAwsIntegrationsAwsKinesisAnalyticsOutputReference(this, "aws_kinesis_analytics");
  public get awsKinesisAnalytics() {
    return this._awsKinesisAnalytics;
  }
  public putAwsKinesisAnalytics(value: CloudAwsIntegrationsAwsKinesisAnalytics) {
    this._awsKinesisAnalytics.internalValue = value;
  }
  public resetAwsKinesisAnalytics() {
    this._awsKinesisAnalytics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsKinesisAnalyticsInput() {
    return this._awsKinesisAnalytics.internalValue;
  }

  // aws_media_convert - computed: false, optional: true, required: false
  private _awsMediaConvert = new CloudAwsIntegrationsAwsMediaConvertOutputReference(this, "aws_media_convert");
  public get awsMediaConvert() {
    return this._awsMediaConvert;
  }
  public putAwsMediaConvert(value: CloudAwsIntegrationsAwsMediaConvert) {
    this._awsMediaConvert.internalValue = value;
  }
  public resetAwsMediaConvert() {
    this._awsMediaConvert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsMediaConvertInput() {
    return this._awsMediaConvert.internalValue;
  }

  // aws_media_package_vod - computed: false, optional: true, required: false
  private _awsMediaPackageVod = new CloudAwsIntegrationsAwsMediaPackageVodOutputReference(this, "aws_media_package_vod");
  public get awsMediaPackageVod() {
    return this._awsMediaPackageVod;
  }
  public putAwsMediaPackageVod(value: CloudAwsIntegrationsAwsMediaPackageVod) {
    this._awsMediaPackageVod.internalValue = value;
  }
  public resetAwsMediaPackageVod() {
    this._awsMediaPackageVod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsMediaPackageVodInput() {
    return this._awsMediaPackageVod.internalValue;
  }

  // aws_mq - computed: false, optional: true, required: false
  private _awsMq = new CloudAwsIntegrationsAwsMqOutputReference(this, "aws_mq");
  public get awsMq() {
    return this._awsMq;
  }
  public putAwsMq(value: CloudAwsIntegrationsAwsMq) {
    this._awsMq.internalValue = value;
  }
  public resetAwsMq() {
    this._awsMq.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsMqInput() {
    return this._awsMq.internalValue;
  }

  // aws_msk - computed: false, optional: true, required: false
  private _awsMsk = new CloudAwsIntegrationsAwsMskOutputReference(this, "aws_msk");
  public get awsMsk() {
    return this._awsMsk;
  }
  public putAwsMsk(value: CloudAwsIntegrationsAwsMsk) {
    this._awsMsk.internalValue = value;
  }
  public resetAwsMsk() {
    this._awsMsk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsMskInput() {
    return this._awsMsk.internalValue;
  }

  // aws_neptune - computed: false, optional: true, required: false
  private _awsNeptune = new CloudAwsIntegrationsAwsNeptuneOutputReference(this, "aws_neptune");
  public get awsNeptune() {
    return this._awsNeptune;
  }
  public putAwsNeptune(value: CloudAwsIntegrationsAwsNeptune) {
    this._awsNeptune.internalValue = value;
  }
  public resetAwsNeptune() {
    this._awsNeptune.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsNeptuneInput() {
    return this._awsNeptune.internalValue;
  }

  // aws_qldb - computed: false, optional: true, required: false
  private _awsQldb = new CloudAwsIntegrationsAwsQldbOutputReference(this, "aws_qldb");
  public get awsQldb() {
    return this._awsQldb;
  }
  public putAwsQldb(value: CloudAwsIntegrationsAwsQldb) {
    this._awsQldb.internalValue = value;
  }
  public resetAwsQldb() {
    this._awsQldb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsQldbInput() {
    return this._awsQldb.internalValue;
  }

  // aws_route53resolver - computed: false, optional: true, required: false
  private _awsRoute53Resolver = new CloudAwsIntegrationsAwsRoute53ResolverOutputReference(this, "aws_route53resolver");
  public get awsRoute53Resolver() {
    return this._awsRoute53Resolver;
  }
  public putAwsRoute53Resolver(value: CloudAwsIntegrationsAwsRoute53Resolver) {
    this._awsRoute53Resolver.internalValue = value;
  }
  public resetAwsRoute53Resolver() {
    this._awsRoute53Resolver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRoute53ResolverInput() {
    return this._awsRoute53Resolver.internalValue;
  }

  // aws_states - computed: false, optional: true, required: false
  private _awsStates = new CloudAwsIntegrationsAwsStatesOutputReference(this, "aws_states");
  public get awsStates() {
    return this._awsStates;
  }
  public putAwsStates(value: CloudAwsIntegrationsAwsStates) {
    this._awsStates.internalValue = value;
  }
  public resetAwsStates() {
    this._awsStates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsStatesInput() {
    return this._awsStates.internalValue;
  }

  // aws_transit_gateway - computed: false, optional: true, required: false
  private _awsTransitGateway = new CloudAwsIntegrationsAwsTransitGatewayOutputReference(this, "aws_transit_gateway");
  public get awsTransitGateway() {
    return this._awsTransitGateway;
  }
  public putAwsTransitGateway(value: CloudAwsIntegrationsAwsTransitGateway) {
    this._awsTransitGateway.internalValue = value;
  }
  public resetAwsTransitGateway() {
    this._awsTransitGateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsTransitGatewayInput() {
    return this._awsTransitGateway.internalValue;
  }

  // aws_waf - computed: false, optional: true, required: false
  private _awsWaf = new CloudAwsIntegrationsAwsWafOutputReference(this, "aws_waf");
  public get awsWaf() {
    return this._awsWaf;
  }
  public putAwsWaf(value: CloudAwsIntegrationsAwsWaf) {
    this._awsWaf.internalValue = value;
  }
  public resetAwsWaf() {
    this._awsWaf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsWafInput() {
    return this._awsWaf.internalValue;
  }

  // aws_wafv2 - computed: false, optional: true, required: false
  private _awsWafv2 = new CloudAwsIntegrationsAwsWafv2OutputReference(this, "aws_wafv2");
  public get awsWafv2() {
    return this._awsWafv2;
  }
  public putAwsWafv2(value: CloudAwsIntegrationsAwsWafv2) {
    this._awsWafv2.internalValue = value;
  }
  public resetAwsWafv2() {
    this._awsWafv2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsWafv2Input() {
    return this._awsWafv2.internalValue;
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

  // cloudfront - computed: false, optional: true, required: false
  private _cloudfront = new CloudAwsIntegrationsCloudfrontOutputReference(this, "cloudfront");
  public get cloudfront() {
    return this._cloudfront;
  }
  public putCloudfront(value: CloudAwsIntegrationsCloudfront) {
    this._cloudfront.internalValue = value;
  }
  public resetCloudfront() {
    this._cloudfront.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudfrontInput() {
    return this._cloudfront.internalValue;
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

  // dynamodb - computed: false, optional: true, required: false
  private _dynamodb = new CloudAwsIntegrationsDynamodbOutputReference(this, "dynamodb");
  public get dynamodb() {
    return this._dynamodb;
  }
  public putDynamodb(value: CloudAwsIntegrationsDynamodb) {
    this._dynamodb.internalValue = value;
  }
  public resetDynamodb() {
    this._dynamodb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamodbInput() {
    return this._dynamodb.internalValue;
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

  // ec2 - computed: false, optional: true, required: false
  private _ec2 = new CloudAwsIntegrationsEc2OutputReference(this, "ec2");
  public get ec2() {
    return this._ec2;
  }
  public putEc2(value: CloudAwsIntegrationsEc2) {
    this._ec2.internalValue = value;
  }
  public resetEc2() {
    this._ec2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2Input() {
    return this._ec2.internalValue;
  }

  // ecs - computed: false, optional: true, required: false
  private _ecs = new CloudAwsIntegrationsEcsOutputReference(this, "ecs");
  public get ecs() {
    return this._ecs;
  }
  public putEcs(value: CloudAwsIntegrationsEcs) {
    this._ecs.internalValue = value;
  }
  public resetEcs() {
    this._ecs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecsInput() {
    return this._ecs.internalValue;
  }

  // efs - computed: false, optional: true, required: false
  private _efs = new CloudAwsIntegrationsEfsOutputReference(this, "efs");
  public get efs() {
    return this._efs;
  }
  public putEfs(value: CloudAwsIntegrationsEfs) {
    this._efs.internalValue = value;
  }
  public resetEfs() {
    this._efs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get efsInput() {
    return this._efs.internalValue;
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

  // elasticbeanstalk - computed: false, optional: true, required: false
  private _elasticbeanstalk = new CloudAwsIntegrationsElasticbeanstalkOutputReference(this, "elasticbeanstalk");
  public get elasticbeanstalk() {
    return this._elasticbeanstalk;
  }
  public putElasticbeanstalk(value: CloudAwsIntegrationsElasticbeanstalk) {
    this._elasticbeanstalk.internalValue = value;
  }
  public resetElasticbeanstalk() {
    this._elasticbeanstalk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticbeanstalkInput() {
    return this._elasticbeanstalk.internalValue;
  }

  // elasticsearch - computed: false, optional: true, required: false
  private _elasticsearch = new CloudAwsIntegrationsElasticsearchOutputReference(this, "elasticsearch");
  public get elasticsearch() {
    return this._elasticsearch;
  }
  public putElasticsearch(value: CloudAwsIntegrationsElasticsearch) {
    this._elasticsearch.internalValue = value;
  }
  public resetElasticsearch() {
    this._elasticsearch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchInput() {
    return this._elasticsearch.internalValue;
  }

  // elb - computed: false, optional: true, required: false
  private _elb = new CloudAwsIntegrationsElbOutputReference(this, "elb");
  public get elb() {
    return this._elb;
  }
  public putElb(value: CloudAwsIntegrationsElb) {
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
  private _emr = new CloudAwsIntegrationsEmrOutputReference(this, "emr");
  public get emr() {
    return this._emr;
  }
  public putEmr(value: CloudAwsIntegrationsEmr) {
    this._emr.internalValue = value;
  }
  public resetEmr() {
    this._emr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emrInput() {
    return this._emr.internalValue;
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

  // iam - computed: false, optional: true, required: false
  private _iam = new CloudAwsIntegrationsIamOutputReference(this, "iam");
  public get iam() {
    return this._iam;
  }
  public putIam(value: CloudAwsIntegrationsIam) {
    this._iam.internalValue = value;
  }
  public resetIam() {
    this._iam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamInput() {
    return this._iam.internalValue;
  }

  // iot - computed: false, optional: true, required: false
  private _iot = new CloudAwsIntegrationsIotOutputReference(this, "iot");
  public get iot() {
    return this._iot;
  }
  public putIot(value: CloudAwsIntegrationsIot) {
    this._iot.internalValue = value;
  }
  public resetIot() {
    this._iot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iotInput() {
    return this._iot.internalValue;
  }

  // kinesis - computed: false, optional: true, required: false
  private _kinesis = new CloudAwsIntegrationsKinesisOutputReference(this, "kinesis");
  public get kinesis() {
    return this._kinesis;
  }
  public putKinesis(value: CloudAwsIntegrationsKinesis) {
    this._kinesis.internalValue = value;
  }
  public resetKinesis() {
    this._kinesis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisInput() {
    return this._kinesis.internalValue;
  }

  // kinesis_firehose - computed: false, optional: true, required: false
  private _kinesisFirehose = new CloudAwsIntegrationsKinesisFirehoseOutputReference(this, "kinesis_firehose");
  public get kinesisFirehose() {
    return this._kinesisFirehose;
  }
  public putKinesisFirehose(value: CloudAwsIntegrationsKinesisFirehose) {
    this._kinesisFirehose.internalValue = value;
  }
  public resetKinesisFirehose() {
    this._kinesisFirehose.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisFirehoseInput() {
    return this._kinesisFirehose.internalValue;
  }

  // lambda - computed: false, optional: true, required: false
  private _lambda = new CloudAwsIntegrationsLambdaOutputReference(this, "lambda");
  public get lambda() {
    return this._lambda;
  }
  public putLambda(value: CloudAwsIntegrationsLambda) {
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
  private _rds = new CloudAwsIntegrationsRdsOutputReference(this, "rds");
  public get rds() {
    return this._rds;
  }
  public putRds(value: CloudAwsIntegrationsRds) {
    this._rds.internalValue = value;
  }
  public resetRds() {
    this._rds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdsInput() {
    return this._rds.internalValue;
  }

  // redshift - computed: false, optional: true, required: false
  private _redshift = new CloudAwsIntegrationsRedshiftOutputReference(this, "redshift");
  public get redshift() {
    return this._redshift;
  }
  public putRedshift(value: CloudAwsIntegrationsRedshift) {
    this._redshift.internalValue = value;
  }
  public resetRedshift() {
    this._redshift.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redshiftInput() {
    return this._redshift.internalValue;
  }

  // route53 - computed: false, optional: true, required: false
  private _route53 = new CloudAwsIntegrationsRoute53OutputReference(this, "route53");
  public get route53() {
    return this._route53;
  }
  public putRoute53(value: CloudAwsIntegrationsRoute53) {
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

  // ses - computed: false, optional: true, required: false
  private _ses = new CloudAwsIntegrationsSesOutputReference(this, "ses");
  public get ses() {
    return this._ses;
  }
  public putSes(value: CloudAwsIntegrationsSes) {
    this._ses.internalValue = value;
  }
  public resetSes() {
    this._ses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sesInput() {
    return this._ses.internalValue;
  }

  // sns - computed: false, optional: true, required: false
  private _sns = new CloudAwsIntegrationsSnsOutputReference(this, "sns");
  public get sns() {
    return this._sns;
  }
  public putSns(value: CloudAwsIntegrationsSns) {
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
      aws_auto_discovery: cloudAwsIntegrationsAwsAutoDiscoveryToTerraform(this._awsAutoDiscovery.internalValue),
      aws_cognito: cloudAwsIntegrationsAwsCognitoToTerraform(this._awsCognito.internalValue),
      aws_connect: cloudAwsIntegrationsAwsConnectToTerraform(this._awsConnect.internalValue),
      aws_direct_connect: cloudAwsIntegrationsAwsDirectConnectToTerraform(this._awsDirectConnect.internalValue),
      aws_fsx: cloudAwsIntegrationsAwsFsxToTerraform(this._awsFsx.internalValue),
      aws_glue: cloudAwsIntegrationsAwsGlueToTerraform(this._awsGlue.internalValue),
      aws_kinesis_analytics: cloudAwsIntegrationsAwsKinesisAnalyticsToTerraform(this._awsKinesisAnalytics.internalValue),
      aws_media_convert: cloudAwsIntegrationsAwsMediaConvertToTerraform(this._awsMediaConvert.internalValue),
      aws_media_package_vod: cloudAwsIntegrationsAwsMediaPackageVodToTerraform(this._awsMediaPackageVod.internalValue),
      aws_mq: cloudAwsIntegrationsAwsMqToTerraform(this._awsMq.internalValue),
      aws_msk: cloudAwsIntegrationsAwsMskToTerraform(this._awsMsk.internalValue),
      aws_neptune: cloudAwsIntegrationsAwsNeptuneToTerraform(this._awsNeptune.internalValue),
      aws_qldb: cloudAwsIntegrationsAwsQldbToTerraform(this._awsQldb.internalValue),
      aws_route53resolver: cloudAwsIntegrationsAwsRoute53ResolverToTerraform(this._awsRoute53Resolver.internalValue),
      aws_states: cloudAwsIntegrationsAwsStatesToTerraform(this._awsStates.internalValue),
      aws_transit_gateway: cloudAwsIntegrationsAwsTransitGatewayToTerraform(this._awsTransitGateway.internalValue),
      aws_waf: cloudAwsIntegrationsAwsWafToTerraform(this._awsWaf.internalValue),
      aws_wafv2: cloudAwsIntegrationsAwsWafv2ToTerraform(this._awsWafv2.internalValue),
      billing: cloudAwsIntegrationsBillingToTerraform(this._billing.internalValue),
      cloudfront: cloudAwsIntegrationsCloudfrontToTerraform(this._cloudfront.internalValue),
      cloudtrail: cloudAwsIntegrationsCloudtrailToTerraform(this._cloudtrail.internalValue),
      doc_db: cloudAwsIntegrationsDocDbToTerraform(this._docDb.internalValue),
      dynamodb: cloudAwsIntegrationsDynamodbToTerraform(this._dynamodb.internalValue),
      ebs: cloudAwsIntegrationsEbsToTerraform(this._ebs.internalValue),
      ec2: cloudAwsIntegrationsEc2ToTerraform(this._ec2.internalValue),
      ecs: cloudAwsIntegrationsEcsToTerraform(this._ecs.internalValue),
      efs: cloudAwsIntegrationsEfsToTerraform(this._efs.internalValue),
      elasticache: cloudAwsIntegrationsElasticacheToTerraform(this._elasticache.internalValue),
      elasticbeanstalk: cloudAwsIntegrationsElasticbeanstalkToTerraform(this._elasticbeanstalk.internalValue),
      elasticsearch: cloudAwsIntegrationsElasticsearchToTerraform(this._elasticsearch.internalValue),
      elb: cloudAwsIntegrationsElbToTerraform(this._elb.internalValue),
      emr: cloudAwsIntegrationsEmrToTerraform(this._emr.internalValue),
      health: cloudAwsIntegrationsHealthToTerraform(this._health.internalValue),
      iam: cloudAwsIntegrationsIamToTerraform(this._iam.internalValue),
      iot: cloudAwsIntegrationsIotToTerraform(this._iot.internalValue),
      kinesis: cloudAwsIntegrationsKinesisToTerraform(this._kinesis.internalValue),
      kinesis_firehose: cloudAwsIntegrationsKinesisFirehoseToTerraform(this._kinesisFirehose.internalValue),
      lambda: cloudAwsIntegrationsLambdaToTerraform(this._lambda.internalValue),
      rds: cloudAwsIntegrationsRdsToTerraform(this._rds.internalValue),
      redshift: cloudAwsIntegrationsRedshiftToTerraform(this._redshift.internalValue),
      route53: cloudAwsIntegrationsRoute53ToTerraform(this._route53.internalValue),
      s3: cloudAwsIntegrationsS3ToTerraform(this._s3.internalValue),
      ses: cloudAwsIntegrationsSesToTerraform(this._ses.internalValue),
      sns: cloudAwsIntegrationsSnsToTerraform(this._sns.internalValue),
      sqs: cloudAwsIntegrationsSqsToTerraform(this._sqs.internalValue),
      trusted_advisor: cloudAwsIntegrationsTrustedAdvisorToTerraform(this._trustedAdvisor.internalValue),
      vpc: cloudAwsIntegrationsVpcToTerraform(this._vpc.internalValue),
      x_ray: cloudAwsIntegrationsXRayToTerraform(this._xRay.internalValue),
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
        value: cloudAwsIntegrationsAlbToHclTerraform(this._alb.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsIntegrationsAlbList",
      },
      api_gateway: {
        value: cloudAwsIntegrationsApiGatewayToHclTerraform(this._apiGateway.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsIntegrationsApiGatewayList",
      },
      auto_scaling: {
        value: cloudAwsIntegrationsAutoScalingToHclTerraform(this._autoScaling.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsIntegrationsAutoScalingList",
      },
      aws_app_sync: {
        value: cloudAwsIntegrationsAwsAppSyncToHclTerraform(this._awsAppSync.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsIntegrationsAwsAppSyncList",
      },
      aws_athena: {
        value: cloudAwsIntegrationsAwsAthenaToHclTerraform(this._awsAthena.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsIntegrationsAwsAthenaList",
      },
      aws_auto_discovery: {
        value: cloudAwsIntegrationsAwsAutoDiscoveryToHclTerraform(this._awsAutoDiscovery.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsIntegrationsAwsAutoDiscoveryList",
      },
      aws_cognito: {
        value: cloudAwsIntegrationsAwsCognitoToHclTerraform(this._awsCognito.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsIntegrationsAwsCognitoList",
      },
      aws_connect: {
        value: cloudAwsIntegrationsAwsConnectToHclTerraform(this._awsConnect.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsIntegrationsAwsConnectList",
      },
      aws_direct_connect: {
        value: cloudAwsIntegrationsAwsDirectConnectToHclTerraform(this._awsDirectConnect.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsIntegrationsAwsDirectConnectList",
      },
      aws_fsx: {
        value: cloudAwsIntegrationsAwsFsxToHclTerraform(this._awsFsx.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsIntegrationsAwsFsxList",
      },
      aws_glue: {
        value: cloudAwsIntegrationsAwsGlueToHclTerraform(this._awsGlue.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsIntegrationsAwsGlueList",
      },
      aws_kinesis_analytics: {
        value: cloudAwsIntegrationsAwsKinesisAnalyticsToHclTerraform(this._awsKinesisAnalytics.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsIntegrationsAwsKinesisAnalyticsList",
      },
      aws_media_convert: {
        value: cloudAwsIntegrationsAwsMediaConvertToHclTerraform(this._awsMediaConvert.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsIntegrationsAwsMediaConvertList",
      },
      aws_media_package_vod: {
        value: cloudAwsIntegrationsAwsMediaPackageVodToHclTerraform(this._awsMediaPackageVod.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsIntegrationsAwsMediaPackageVodList",
      },
      aws_mq: {
        value: cloudAwsIntegrationsAwsMqToHclTerraform(this._awsMq.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsIntegrationsAwsMqList",
      },
      aws_msk: {
        value: cloudAwsIntegrationsAwsMskToHclTerraform(this._awsMsk.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsIntegrationsAwsMskList",
      },
      aws_neptune: {
        value: cloudAwsIntegrationsAwsNeptuneToHclTerraform(this._awsNeptune.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsIntegrationsAwsNeptuneList",
      },
      aws_qldb: {
        value: cloudAwsIntegrationsAwsQldbToHclTerraform(this._awsQldb.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsIntegrationsAwsQldbList",
      },
      aws_route53resolver: {
        value: cloudAwsIntegrationsAwsRoute53ResolverToHclTerraform(this._awsRoute53Resolver.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsIntegrationsAwsRoute53ResolverList",
      },
      aws_states: {
        value: cloudAwsIntegrationsAwsStatesToHclTerraform(this._awsStates.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsIntegrationsAwsStatesList",
      },
      aws_transit_gateway: {
        value: cloudAwsIntegrationsAwsTransitGatewayToHclTerraform(this._awsTransitGateway.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsIntegrationsAwsTransitGatewayList",
      },
      aws_waf: {
        value: cloudAwsIntegrationsAwsWafToHclTerraform(this._awsWaf.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsIntegrationsAwsWafList",
      },
      aws_wafv2: {
        value: cloudAwsIntegrationsAwsWafv2ToHclTerraform(this._awsWafv2.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsIntegrationsAwsWafv2List",
      },
      billing: {
        value: cloudAwsIntegrationsBillingToHclTerraform(this._billing.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsIntegrationsBillingList",
      },
      cloudfront: {
        value: cloudAwsIntegrationsCloudfrontToHclTerraform(this._cloudfront.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsIntegrationsCloudfrontList",
      },
      cloudtrail: {
        value: cloudAwsIntegrationsCloudtrailToHclTerraform(this._cloudtrail.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsIntegrationsCloudtrailList",
      },
      doc_db: {
        value: cloudAwsIntegrationsDocDbToHclTerraform(this._docDb.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsIntegrationsDocDbList",
      },
      dynamodb: {
        value: cloudAwsIntegrationsDynamodbToHclTerraform(this._dynamodb.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsIntegrationsDynamodbList",
      },
      ebs: {
        value: cloudAwsIntegrationsEbsToHclTerraform(this._ebs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsIntegrationsEbsList",
      },
      ec2: {
        value: cloudAwsIntegrationsEc2ToHclTerraform(this._ec2.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsIntegrationsEc2List",
      },
      ecs: {
        value: cloudAwsIntegrationsEcsToHclTerraform(this._ecs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsIntegrationsEcsList",
      },
      efs: {
        value: cloudAwsIntegrationsEfsToHclTerraform(this._efs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsIntegrationsEfsList",
      },
      elasticache: {
        value: cloudAwsIntegrationsElasticacheToHclTerraform(this._elasticache.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsIntegrationsElasticacheList",
      },
      elasticbeanstalk: {
        value: cloudAwsIntegrationsElasticbeanstalkToHclTerraform(this._elasticbeanstalk.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsIntegrationsElasticbeanstalkList",
      },
      elasticsearch: {
        value: cloudAwsIntegrationsElasticsearchToHclTerraform(this._elasticsearch.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsIntegrationsElasticsearchList",
      },
      elb: {
        value: cloudAwsIntegrationsElbToHclTerraform(this._elb.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsIntegrationsElbList",
      },
      emr: {
        value: cloudAwsIntegrationsEmrToHclTerraform(this._emr.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsIntegrationsEmrList",
      },
      health: {
        value: cloudAwsIntegrationsHealthToHclTerraform(this._health.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsIntegrationsHealthList",
      },
      iam: {
        value: cloudAwsIntegrationsIamToHclTerraform(this._iam.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsIntegrationsIamList",
      },
      iot: {
        value: cloudAwsIntegrationsIotToHclTerraform(this._iot.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsIntegrationsIotList",
      },
      kinesis: {
        value: cloudAwsIntegrationsKinesisToHclTerraform(this._kinesis.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsIntegrationsKinesisList",
      },
      kinesis_firehose: {
        value: cloudAwsIntegrationsKinesisFirehoseToHclTerraform(this._kinesisFirehose.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsIntegrationsKinesisFirehoseList",
      },
      lambda: {
        value: cloudAwsIntegrationsLambdaToHclTerraform(this._lambda.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsIntegrationsLambdaList",
      },
      rds: {
        value: cloudAwsIntegrationsRdsToHclTerraform(this._rds.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsIntegrationsRdsList",
      },
      redshift: {
        value: cloudAwsIntegrationsRedshiftToHclTerraform(this._redshift.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsIntegrationsRedshiftList",
      },
      route53: {
        value: cloudAwsIntegrationsRoute53ToHclTerraform(this._route53.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsIntegrationsRoute53List",
      },
      s3: {
        value: cloudAwsIntegrationsS3ToHclTerraform(this._s3.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsIntegrationsS3List",
      },
      ses: {
        value: cloudAwsIntegrationsSesToHclTerraform(this._ses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsIntegrationsSesList",
      },
      sns: {
        value: cloudAwsIntegrationsSnsToHclTerraform(this._sns.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsIntegrationsSnsList",
      },
      sqs: {
        value: cloudAwsIntegrationsSqsToHclTerraform(this._sqs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsIntegrationsSqsList",
      },
      trusted_advisor: {
        value: cloudAwsIntegrationsTrustedAdvisorToHclTerraform(this._trustedAdvisor.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsIntegrationsTrustedAdvisorList",
      },
      vpc: {
        value: cloudAwsIntegrationsVpcToHclTerraform(this._vpc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsIntegrationsVpcList",
      },
      x_ray: {
        value: cloudAwsIntegrationsXRayToHclTerraform(this._xRay.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAwsIntegrationsXRayList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
