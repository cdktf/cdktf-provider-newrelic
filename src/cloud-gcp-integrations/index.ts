// https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_gcp_integrations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudGcpIntegrationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the newrelic account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_gcp_integrations#account_id CloudGcpIntegrations#account_id}
  */
  readonly accountId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_gcp_integrations#id CloudGcpIntegrations#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Id of the linked gcp account in New Relic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_gcp_integrations#linked_account_id CloudGcpIntegrations#linked_account_id}
  */
  readonly linkedAccountId: number;
  /**
  * alloy_db block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_gcp_integrations#alloy_db CloudGcpIntegrations#alloy_db}
  */
  readonly alloyDb?: CloudGcpIntegrationsAlloyDb;
  /**
  * app_engine block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_gcp_integrations#app_engine CloudGcpIntegrations#app_engine}
  */
  readonly appEngine?: CloudGcpIntegrationsAppEngine;
  /**
  * big_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_gcp_integrations#big_query CloudGcpIntegrations#big_query}
  */
  readonly bigQuery?: CloudGcpIntegrationsBigQuery;
  /**
  * big_table block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_gcp_integrations#big_table CloudGcpIntegrations#big_table}
  */
  readonly bigTable?: CloudGcpIntegrationsBigTable;
  /**
  * composer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_gcp_integrations#composer CloudGcpIntegrations#composer}
  */
  readonly composer?: CloudGcpIntegrationsComposer;
  /**
  * data_flow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_gcp_integrations#data_flow CloudGcpIntegrations#data_flow}
  */
  readonly dataFlow?: CloudGcpIntegrationsDataFlow;
  /**
  * data_proc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_gcp_integrations#data_proc CloudGcpIntegrations#data_proc}
  */
  readonly dataProc?: CloudGcpIntegrationsDataProc;
  /**
  * data_store block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_gcp_integrations#data_store CloudGcpIntegrations#data_store}
  */
  readonly dataStore?: CloudGcpIntegrationsDataStore;
  /**
  * fire_base_database block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_gcp_integrations#fire_base_database CloudGcpIntegrations#fire_base_database}
  */
  readonly fireBaseDatabase?: CloudGcpIntegrationsFireBaseDatabase;
  /**
  * fire_base_hosting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_gcp_integrations#fire_base_hosting CloudGcpIntegrations#fire_base_hosting}
  */
  readonly fireBaseHosting?: CloudGcpIntegrationsFireBaseHosting;
  /**
  * fire_base_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_gcp_integrations#fire_base_storage CloudGcpIntegrations#fire_base_storage}
  */
  readonly fireBaseStorage?: CloudGcpIntegrationsFireBaseStorage;
  /**
  * fire_store block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_gcp_integrations#fire_store CloudGcpIntegrations#fire_store}
  */
  readonly fireStore?: CloudGcpIntegrationsFireStore;
  /**
  * functions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_gcp_integrations#functions CloudGcpIntegrations#functions}
  */
  readonly functions?: CloudGcpIntegrationsFunctions;
  /**
  * interconnect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_gcp_integrations#interconnect CloudGcpIntegrations#interconnect}
  */
  readonly interconnect?: CloudGcpIntegrationsInterconnect;
  /**
  * kubernetes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_gcp_integrations#kubernetes CloudGcpIntegrations#kubernetes}
  */
  readonly kubernetes?: CloudGcpIntegrationsKubernetes;
  /**
  * load_balancing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_gcp_integrations#load_balancing CloudGcpIntegrations#load_balancing}
  */
  readonly loadBalancing?: CloudGcpIntegrationsLoadBalancing;
  /**
  * mem_cache block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_gcp_integrations#mem_cache CloudGcpIntegrations#mem_cache}
  */
  readonly memCache?: CloudGcpIntegrationsMemCache;
  /**
  * pub_sub block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_gcp_integrations#pub_sub CloudGcpIntegrations#pub_sub}
  */
  readonly pubSub?: CloudGcpIntegrationsPubSub;
  /**
  * redis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_gcp_integrations#redis CloudGcpIntegrations#redis}
  */
  readonly redis?: CloudGcpIntegrationsRedis;
  /**
  * router block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_gcp_integrations#router CloudGcpIntegrations#router}
  */
  readonly router?: CloudGcpIntegrationsRouter;
  /**
  * run block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_gcp_integrations#run CloudGcpIntegrations#run}
  */
  readonly run?: CloudGcpIntegrationsRun;
  /**
  * spanner block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_gcp_integrations#spanner CloudGcpIntegrations#spanner}
  */
  readonly spanner?: CloudGcpIntegrationsSpanner;
  /**
  * sql block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_gcp_integrations#sql CloudGcpIntegrations#sql}
  */
  readonly sql?: CloudGcpIntegrationsSql;
  /**
  * storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_gcp_integrations#storage CloudGcpIntegrations#storage}
  */
  readonly storage?: CloudGcpIntegrationsStorage;
  /**
  * virtual_machines block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_gcp_integrations#virtual_machines CloudGcpIntegrations#virtual_machines}
  */
  readonly virtualMachines?: CloudGcpIntegrationsVirtualMachines;
  /**
  * vpc_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_gcp_integrations#vpc_access CloudGcpIntegrations#vpc_access}
  */
  readonly vpcAccess?: CloudGcpIntegrationsVpcAccess;
}
export interface CloudGcpIntegrationsAlloyDb {
  /**
  * the data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudGcpIntegrationsAlloyDbToTerraform(struct?: CloudGcpIntegrationsAlloyDbOutputReference | CloudGcpIntegrationsAlloyDb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudGcpIntegrationsAlloyDbToHclTerraform(struct?: CloudGcpIntegrationsAlloyDbOutputReference | CloudGcpIntegrationsAlloyDb): any {
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

export class CloudGcpIntegrationsAlloyDbOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudGcpIntegrationsAlloyDb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGcpIntegrationsAlloyDb | undefined) {
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
export interface CloudGcpIntegrationsAppEngine {
  /**
  * the data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudGcpIntegrationsAppEngineToTerraform(struct?: CloudGcpIntegrationsAppEngineOutputReference | CloudGcpIntegrationsAppEngine): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudGcpIntegrationsAppEngineToHclTerraform(struct?: CloudGcpIntegrationsAppEngineOutputReference | CloudGcpIntegrationsAppEngine): any {
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

export class CloudGcpIntegrationsAppEngineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudGcpIntegrationsAppEngine | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGcpIntegrationsAppEngine | undefined) {
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
export interface CloudGcpIntegrationsBigQuery {
  /**
  * to fetch tags of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_gcp_integrations#fetch_tags CloudGcpIntegrations#fetch_tags}
  */
  readonly fetchTags?: boolean | cdktf.IResolvable;
  /**
  * the data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudGcpIntegrationsBigQueryToTerraform(struct?: CloudGcpIntegrationsBigQueryOutputReference | CloudGcpIntegrationsBigQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fetch_tags: cdktf.booleanToTerraform(struct!.fetchTags),
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudGcpIntegrationsBigQueryToHclTerraform(struct?: CloudGcpIntegrationsBigQueryOutputReference | CloudGcpIntegrationsBigQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class CloudGcpIntegrationsBigQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudGcpIntegrationsBigQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: CloudGcpIntegrationsBigQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fetchTags = undefined;
      this._metricsPollingInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fetchTags = value.fetchTags;
      this._metricsPollingInterval = value.metricsPollingInterval;
    }
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
export interface CloudGcpIntegrationsBigTable {
  /**
  * the data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudGcpIntegrationsBigTableToTerraform(struct?: CloudGcpIntegrationsBigTableOutputReference | CloudGcpIntegrationsBigTable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudGcpIntegrationsBigTableToHclTerraform(struct?: CloudGcpIntegrationsBigTableOutputReference | CloudGcpIntegrationsBigTable): any {
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

export class CloudGcpIntegrationsBigTableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudGcpIntegrationsBigTable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGcpIntegrationsBigTable | undefined) {
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
export interface CloudGcpIntegrationsComposer {
  /**
  * the data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudGcpIntegrationsComposerToTerraform(struct?: CloudGcpIntegrationsComposerOutputReference | CloudGcpIntegrationsComposer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudGcpIntegrationsComposerToHclTerraform(struct?: CloudGcpIntegrationsComposerOutputReference | CloudGcpIntegrationsComposer): any {
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

export class CloudGcpIntegrationsComposerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudGcpIntegrationsComposer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGcpIntegrationsComposer | undefined) {
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
export interface CloudGcpIntegrationsDataFlow {
  /**
  * the data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudGcpIntegrationsDataFlowToTerraform(struct?: CloudGcpIntegrationsDataFlowOutputReference | CloudGcpIntegrationsDataFlow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudGcpIntegrationsDataFlowToHclTerraform(struct?: CloudGcpIntegrationsDataFlowOutputReference | CloudGcpIntegrationsDataFlow): any {
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

export class CloudGcpIntegrationsDataFlowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudGcpIntegrationsDataFlow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGcpIntegrationsDataFlow | undefined) {
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
export interface CloudGcpIntegrationsDataProc {
  /**
  * the data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudGcpIntegrationsDataProcToTerraform(struct?: CloudGcpIntegrationsDataProcOutputReference | CloudGcpIntegrationsDataProc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudGcpIntegrationsDataProcToHclTerraform(struct?: CloudGcpIntegrationsDataProcOutputReference | CloudGcpIntegrationsDataProc): any {
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

export class CloudGcpIntegrationsDataProcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudGcpIntegrationsDataProc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGcpIntegrationsDataProc | undefined) {
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
export interface CloudGcpIntegrationsDataStore {
  /**
  * the data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudGcpIntegrationsDataStoreToTerraform(struct?: CloudGcpIntegrationsDataStoreOutputReference | CloudGcpIntegrationsDataStore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudGcpIntegrationsDataStoreToHclTerraform(struct?: CloudGcpIntegrationsDataStoreOutputReference | CloudGcpIntegrationsDataStore): any {
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

export class CloudGcpIntegrationsDataStoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudGcpIntegrationsDataStore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGcpIntegrationsDataStore | undefined) {
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
export interface CloudGcpIntegrationsFireBaseDatabase {
  /**
  * the data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudGcpIntegrationsFireBaseDatabaseToTerraform(struct?: CloudGcpIntegrationsFireBaseDatabaseOutputReference | CloudGcpIntegrationsFireBaseDatabase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudGcpIntegrationsFireBaseDatabaseToHclTerraform(struct?: CloudGcpIntegrationsFireBaseDatabaseOutputReference | CloudGcpIntegrationsFireBaseDatabase): any {
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

export class CloudGcpIntegrationsFireBaseDatabaseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudGcpIntegrationsFireBaseDatabase | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGcpIntegrationsFireBaseDatabase | undefined) {
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
export interface CloudGcpIntegrationsFireBaseHosting {
  /**
  * the data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudGcpIntegrationsFireBaseHostingToTerraform(struct?: CloudGcpIntegrationsFireBaseHostingOutputReference | CloudGcpIntegrationsFireBaseHosting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudGcpIntegrationsFireBaseHostingToHclTerraform(struct?: CloudGcpIntegrationsFireBaseHostingOutputReference | CloudGcpIntegrationsFireBaseHosting): any {
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

export class CloudGcpIntegrationsFireBaseHostingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudGcpIntegrationsFireBaseHosting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGcpIntegrationsFireBaseHosting | undefined) {
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
export interface CloudGcpIntegrationsFireBaseStorage {
  /**
  * the data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudGcpIntegrationsFireBaseStorageToTerraform(struct?: CloudGcpIntegrationsFireBaseStorageOutputReference | CloudGcpIntegrationsFireBaseStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudGcpIntegrationsFireBaseStorageToHclTerraform(struct?: CloudGcpIntegrationsFireBaseStorageOutputReference | CloudGcpIntegrationsFireBaseStorage): any {
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

export class CloudGcpIntegrationsFireBaseStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudGcpIntegrationsFireBaseStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGcpIntegrationsFireBaseStorage | undefined) {
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
export interface CloudGcpIntegrationsFireStore {
  /**
  * the data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudGcpIntegrationsFireStoreToTerraform(struct?: CloudGcpIntegrationsFireStoreOutputReference | CloudGcpIntegrationsFireStore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudGcpIntegrationsFireStoreToHclTerraform(struct?: CloudGcpIntegrationsFireStoreOutputReference | CloudGcpIntegrationsFireStore): any {
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

export class CloudGcpIntegrationsFireStoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudGcpIntegrationsFireStore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGcpIntegrationsFireStore | undefined) {
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
export interface CloudGcpIntegrationsFunctions {
  /**
  * the data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudGcpIntegrationsFunctionsToTerraform(struct?: CloudGcpIntegrationsFunctionsOutputReference | CloudGcpIntegrationsFunctions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudGcpIntegrationsFunctionsToHclTerraform(struct?: CloudGcpIntegrationsFunctionsOutputReference | CloudGcpIntegrationsFunctions): any {
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

export class CloudGcpIntegrationsFunctionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudGcpIntegrationsFunctions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGcpIntegrationsFunctions | undefined) {
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
export interface CloudGcpIntegrationsInterconnect {
  /**
  * the data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudGcpIntegrationsInterconnectToTerraform(struct?: CloudGcpIntegrationsInterconnectOutputReference | CloudGcpIntegrationsInterconnect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudGcpIntegrationsInterconnectToHclTerraform(struct?: CloudGcpIntegrationsInterconnectOutputReference | CloudGcpIntegrationsInterconnect): any {
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

export class CloudGcpIntegrationsInterconnectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudGcpIntegrationsInterconnect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGcpIntegrationsInterconnect | undefined) {
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
export interface CloudGcpIntegrationsKubernetes {
  /**
  * the data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudGcpIntegrationsKubernetesToTerraform(struct?: CloudGcpIntegrationsKubernetesOutputReference | CloudGcpIntegrationsKubernetes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudGcpIntegrationsKubernetesToHclTerraform(struct?: CloudGcpIntegrationsKubernetesOutputReference | CloudGcpIntegrationsKubernetes): any {
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

export class CloudGcpIntegrationsKubernetesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudGcpIntegrationsKubernetes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGcpIntegrationsKubernetes | undefined) {
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
export interface CloudGcpIntegrationsLoadBalancing {
  /**
  * the data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudGcpIntegrationsLoadBalancingToTerraform(struct?: CloudGcpIntegrationsLoadBalancingOutputReference | CloudGcpIntegrationsLoadBalancing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudGcpIntegrationsLoadBalancingToHclTerraform(struct?: CloudGcpIntegrationsLoadBalancingOutputReference | CloudGcpIntegrationsLoadBalancing): any {
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

export class CloudGcpIntegrationsLoadBalancingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudGcpIntegrationsLoadBalancing | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGcpIntegrationsLoadBalancing | undefined) {
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
export interface CloudGcpIntegrationsMemCache {
  /**
  * the data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudGcpIntegrationsMemCacheToTerraform(struct?: CloudGcpIntegrationsMemCacheOutputReference | CloudGcpIntegrationsMemCache): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudGcpIntegrationsMemCacheToHclTerraform(struct?: CloudGcpIntegrationsMemCacheOutputReference | CloudGcpIntegrationsMemCache): any {
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

export class CloudGcpIntegrationsMemCacheOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudGcpIntegrationsMemCache | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGcpIntegrationsMemCache | undefined) {
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
export interface CloudGcpIntegrationsPubSub {
  /**
  * to fetch tags of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_gcp_integrations#fetch_tags CloudGcpIntegrations#fetch_tags}
  */
  readonly fetchTags?: boolean | cdktf.IResolvable;
  /**
  * the data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudGcpIntegrationsPubSubToTerraform(struct?: CloudGcpIntegrationsPubSubOutputReference | CloudGcpIntegrationsPubSub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fetch_tags: cdktf.booleanToTerraform(struct!.fetchTags),
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudGcpIntegrationsPubSubToHclTerraform(struct?: CloudGcpIntegrationsPubSubOutputReference | CloudGcpIntegrationsPubSub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class CloudGcpIntegrationsPubSubOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudGcpIntegrationsPubSub | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: CloudGcpIntegrationsPubSub | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fetchTags = undefined;
      this._metricsPollingInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fetchTags = value.fetchTags;
      this._metricsPollingInterval = value.metricsPollingInterval;
    }
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
export interface CloudGcpIntegrationsRedis {
  /**
  * the data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudGcpIntegrationsRedisToTerraform(struct?: CloudGcpIntegrationsRedisOutputReference | CloudGcpIntegrationsRedis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudGcpIntegrationsRedisToHclTerraform(struct?: CloudGcpIntegrationsRedisOutputReference | CloudGcpIntegrationsRedis): any {
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

export class CloudGcpIntegrationsRedisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudGcpIntegrationsRedis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGcpIntegrationsRedis | undefined) {
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
export interface CloudGcpIntegrationsRouter {
  /**
  * the data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudGcpIntegrationsRouterToTerraform(struct?: CloudGcpIntegrationsRouterOutputReference | CloudGcpIntegrationsRouter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudGcpIntegrationsRouterToHclTerraform(struct?: CloudGcpIntegrationsRouterOutputReference | CloudGcpIntegrationsRouter): any {
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

export class CloudGcpIntegrationsRouterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudGcpIntegrationsRouter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGcpIntegrationsRouter | undefined) {
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
export interface CloudGcpIntegrationsRun {
  /**
  * the data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudGcpIntegrationsRunToTerraform(struct?: CloudGcpIntegrationsRunOutputReference | CloudGcpIntegrationsRun): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudGcpIntegrationsRunToHclTerraform(struct?: CloudGcpIntegrationsRunOutputReference | CloudGcpIntegrationsRun): any {
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

export class CloudGcpIntegrationsRunOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudGcpIntegrationsRun | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGcpIntegrationsRun | undefined) {
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
export interface CloudGcpIntegrationsSpanner {
  /**
  * to fetch tags of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_gcp_integrations#fetch_tags CloudGcpIntegrations#fetch_tags}
  */
  readonly fetchTags?: boolean | cdktf.IResolvable;
  /**
  * the data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudGcpIntegrationsSpannerToTerraform(struct?: CloudGcpIntegrationsSpannerOutputReference | CloudGcpIntegrationsSpanner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fetch_tags: cdktf.booleanToTerraform(struct!.fetchTags),
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudGcpIntegrationsSpannerToHclTerraform(struct?: CloudGcpIntegrationsSpannerOutputReference | CloudGcpIntegrationsSpanner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class CloudGcpIntegrationsSpannerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudGcpIntegrationsSpanner | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: CloudGcpIntegrationsSpanner | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fetchTags = undefined;
      this._metricsPollingInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fetchTags = value.fetchTags;
      this._metricsPollingInterval = value.metricsPollingInterval;
    }
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
export interface CloudGcpIntegrationsSql {
  /**
  * the data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudGcpIntegrationsSqlToTerraform(struct?: CloudGcpIntegrationsSqlOutputReference | CloudGcpIntegrationsSql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudGcpIntegrationsSqlToHclTerraform(struct?: CloudGcpIntegrationsSqlOutputReference | CloudGcpIntegrationsSql): any {
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

export class CloudGcpIntegrationsSqlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudGcpIntegrationsSql | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGcpIntegrationsSql | undefined) {
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
export interface CloudGcpIntegrationsStorage {
  /**
  * to fetch tags of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_gcp_integrations#fetch_tags CloudGcpIntegrations#fetch_tags}
  */
  readonly fetchTags?: boolean | cdktf.IResolvable;
  /**
  * the data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudGcpIntegrationsStorageToTerraform(struct?: CloudGcpIntegrationsStorageOutputReference | CloudGcpIntegrationsStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fetch_tags: cdktf.booleanToTerraform(struct!.fetchTags),
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudGcpIntegrationsStorageToHclTerraform(struct?: CloudGcpIntegrationsStorageOutputReference | CloudGcpIntegrationsStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class CloudGcpIntegrationsStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudGcpIntegrationsStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: CloudGcpIntegrationsStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fetchTags = undefined;
      this._metricsPollingInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fetchTags = value.fetchTags;
      this._metricsPollingInterval = value.metricsPollingInterval;
    }
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
export interface CloudGcpIntegrationsVirtualMachines {
  /**
  * the data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudGcpIntegrationsVirtualMachinesToTerraform(struct?: CloudGcpIntegrationsVirtualMachinesOutputReference | CloudGcpIntegrationsVirtualMachines): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudGcpIntegrationsVirtualMachinesToHclTerraform(struct?: CloudGcpIntegrationsVirtualMachinesOutputReference | CloudGcpIntegrationsVirtualMachines): any {
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

export class CloudGcpIntegrationsVirtualMachinesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudGcpIntegrationsVirtualMachines | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGcpIntegrationsVirtualMachines | undefined) {
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
export interface CloudGcpIntegrationsVpcAccess {
  /**
  * the data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
}

export function cloudGcpIntegrationsVpcAccessToTerraform(struct?: CloudGcpIntegrationsVpcAccessOutputReference | CloudGcpIntegrationsVpcAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
  }
}


export function cloudGcpIntegrationsVpcAccessToHclTerraform(struct?: CloudGcpIntegrationsVpcAccessOutputReference | CloudGcpIntegrationsVpcAccess): any {
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

export class CloudGcpIntegrationsVpcAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudGcpIntegrationsVpcAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGcpIntegrationsVpcAccess | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_gcp_integrations newrelic_cloud_gcp_integrations}
*/
export class CloudGcpIntegrations extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_cloud_gcp_integrations";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudGcpIntegrations resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudGcpIntegrations to import
  * @param importFromId The id of the existing CloudGcpIntegrations that should be imported. Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_gcp_integrations#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudGcpIntegrations to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "newrelic_cloud_gcp_integrations", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_gcp_integrations newrelic_cloud_gcp_integrations} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudGcpIntegrationsConfig
  */
  public constructor(scope: Construct, id: string, config: CloudGcpIntegrationsConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_cloud_gcp_integrations',
      terraformGeneratorMetadata: {
        providerName: 'newrelic',
        providerVersion: '3.52.0',
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
    this._alloyDb.internalValue = config.alloyDb;
    this._appEngine.internalValue = config.appEngine;
    this._bigQuery.internalValue = config.bigQuery;
    this._bigTable.internalValue = config.bigTable;
    this._composer.internalValue = config.composer;
    this._dataFlow.internalValue = config.dataFlow;
    this._dataProc.internalValue = config.dataProc;
    this._dataStore.internalValue = config.dataStore;
    this._fireBaseDatabase.internalValue = config.fireBaseDatabase;
    this._fireBaseHosting.internalValue = config.fireBaseHosting;
    this._fireBaseStorage.internalValue = config.fireBaseStorage;
    this._fireStore.internalValue = config.fireStore;
    this._functions.internalValue = config.functions;
    this._interconnect.internalValue = config.interconnect;
    this._kubernetes.internalValue = config.kubernetes;
    this._loadBalancing.internalValue = config.loadBalancing;
    this._memCache.internalValue = config.memCache;
    this._pubSub.internalValue = config.pubSub;
    this._redis.internalValue = config.redis;
    this._router.internalValue = config.router;
    this._run.internalValue = config.run;
    this._spanner.internalValue = config.spanner;
    this._sql.internalValue = config.sql;
    this._storage.internalValue = config.storage;
    this._virtualMachines.internalValue = config.virtualMachines;
    this._vpcAccess.internalValue = config.vpcAccess;
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

  // alloy_db - computed: false, optional: true, required: false
  private _alloyDb = new CloudGcpIntegrationsAlloyDbOutputReference(this, "alloy_db");
  public get alloyDb() {
    return this._alloyDb;
  }
  public putAlloyDb(value: CloudGcpIntegrationsAlloyDb) {
    this._alloyDb.internalValue = value;
  }
  public resetAlloyDb() {
    this._alloyDb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alloyDbInput() {
    return this._alloyDb.internalValue;
  }

  // app_engine - computed: false, optional: true, required: false
  private _appEngine = new CloudGcpIntegrationsAppEngineOutputReference(this, "app_engine");
  public get appEngine() {
    return this._appEngine;
  }
  public putAppEngine(value: CloudGcpIntegrationsAppEngine) {
    this._appEngine.internalValue = value;
  }
  public resetAppEngine() {
    this._appEngine.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appEngineInput() {
    return this._appEngine.internalValue;
  }

  // big_query - computed: false, optional: true, required: false
  private _bigQuery = new CloudGcpIntegrationsBigQueryOutputReference(this, "big_query");
  public get bigQuery() {
    return this._bigQuery;
  }
  public putBigQuery(value: CloudGcpIntegrationsBigQuery) {
    this._bigQuery.internalValue = value;
  }
  public resetBigQuery() {
    this._bigQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigQueryInput() {
    return this._bigQuery.internalValue;
  }

  // big_table - computed: false, optional: true, required: false
  private _bigTable = new CloudGcpIntegrationsBigTableOutputReference(this, "big_table");
  public get bigTable() {
    return this._bigTable;
  }
  public putBigTable(value: CloudGcpIntegrationsBigTable) {
    this._bigTable.internalValue = value;
  }
  public resetBigTable() {
    this._bigTable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigTableInput() {
    return this._bigTable.internalValue;
  }

  // composer - computed: false, optional: true, required: false
  private _composer = new CloudGcpIntegrationsComposerOutputReference(this, "composer");
  public get composer() {
    return this._composer;
  }
  public putComposer(value: CloudGcpIntegrationsComposer) {
    this._composer.internalValue = value;
  }
  public resetComposer() {
    this._composer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get composerInput() {
    return this._composer.internalValue;
  }

  // data_flow - computed: false, optional: true, required: false
  private _dataFlow = new CloudGcpIntegrationsDataFlowOutputReference(this, "data_flow");
  public get dataFlow() {
    return this._dataFlow;
  }
  public putDataFlow(value: CloudGcpIntegrationsDataFlow) {
    this._dataFlow.internalValue = value;
  }
  public resetDataFlow() {
    this._dataFlow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFlowInput() {
    return this._dataFlow.internalValue;
  }

  // data_proc - computed: false, optional: true, required: false
  private _dataProc = new CloudGcpIntegrationsDataProcOutputReference(this, "data_proc");
  public get dataProc() {
    return this._dataProc;
  }
  public putDataProc(value: CloudGcpIntegrationsDataProc) {
    this._dataProc.internalValue = value;
  }
  public resetDataProc() {
    this._dataProc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataProcInput() {
    return this._dataProc.internalValue;
  }

  // data_store - computed: false, optional: true, required: false
  private _dataStore = new CloudGcpIntegrationsDataStoreOutputReference(this, "data_store");
  public get dataStore() {
    return this._dataStore;
  }
  public putDataStore(value: CloudGcpIntegrationsDataStore) {
    this._dataStore.internalValue = value;
  }
  public resetDataStore() {
    this._dataStore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoreInput() {
    return this._dataStore.internalValue;
  }

  // fire_base_database - computed: false, optional: true, required: false
  private _fireBaseDatabase = new CloudGcpIntegrationsFireBaseDatabaseOutputReference(this, "fire_base_database");
  public get fireBaseDatabase() {
    return this._fireBaseDatabase;
  }
  public putFireBaseDatabase(value: CloudGcpIntegrationsFireBaseDatabase) {
    this._fireBaseDatabase.internalValue = value;
  }
  public resetFireBaseDatabase() {
    this._fireBaseDatabase.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fireBaseDatabaseInput() {
    return this._fireBaseDatabase.internalValue;
  }

  // fire_base_hosting - computed: false, optional: true, required: false
  private _fireBaseHosting = new CloudGcpIntegrationsFireBaseHostingOutputReference(this, "fire_base_hosting");
  public get fireBaseHosting() {
    return this._fireBaseHosting;
  }
  public putFireBaseHosting(value: CloudGcpIntegrationsFireBaseHosting) {
    this._fireBaseHosting.internalValue = value;
  }
  public resetFireBaseHosting() {
    this._fireBaseHosting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fireBaseHostingInput() {
    return this._fireBaseHosting.internalValue;
  }

  // fire_base_storage - computed: false, optional: true, required: false
  private _fireBaseStorage = new CloudGcpIntegrationsFireBaseStorageOutputReference(this, "fire_base_storage");
  public get fireBaseStorage() {
    return this._fireBaseStorage;
  }
  public putFireBaseStorage(value: CloudGcpIntegrationsFireBaseStorage) {
    this._fireBaseStorage.internalValue = value;
  }
  public resetFireBaseStorage() {
    this._fireBaseStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fireBaseStorageInput() {
    return this._fireBaseStorage.internalValue;
  }

  // fire_store - computed: false, optional: true, required: false
  private _fireStore = new CloudGcpIntegrationsFireStoreOutputReference(this, "fire_store");
  public get fireStore() {
    return this._fireStore;
  }
  public putFireStore(value: CloudGcpIntegrationsFireStore) {
    this._fireStore.internalValue = value;
  }
  public resetFireStore() {
    this._fireStore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fireStoreInput() {
    return this._fireStore.internalValue;
  }

  // functions - computed: false, optional: true, required: false
  private _functions = new CloudGcpIntegrationsFunctionsOutputReference(this, "functions");
  public get functions() {
    return this._functions;
  }
  public putFunctions(value: CloudGcpIntegrationsFunctions) {
    this._functions.internalValue = value;
  }
  public resetFunctions() {
    this._functions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionsInput() {
    return this._functions.internalValue;
  }

  // interconnect - computed: false, optional: true, required: false
  private _interconnect = new CloudGcpIntegrationsInterconnectOutputReference(this, "interconnect");
  public get interconnect() {
    return this._interconnect;
  }
  public putInterconnect(value: CloudGcpIntegrationsInterconnect) {
    this._interconnect.internalValue = value;
  }
  public resetInterconnect() {
    this._interconnect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interconnectInput() {
    return this._interconnect.internalValue;
  }

  // kubernetes - computed: false, optional: true, required: false
  private _kubernetes = new CloudGcpIntegrationsKubernetesOutputReference(this, "kubernetes");
  public get kubernetes() {
    return this._kubernetes;
  }
  public putKubernetes(value: CloudGcpIntegrationsKubernetes) {
    this._kubernetes.internalValue = value;
  }
  public resetKubernetes() {
    this._kubernetes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesInput() {
    return this._kubernetes.internalValue;
  }

  // load_balancing - computed: false, optional: true, required: false
  private _loadBalancing = new CloudGcpIntegrationsLoadBalancingOutputReference(this, "load_balancing");
  public get loadBalancing() {
    return this._loadBalancing;
  }
  public putLoadBalancing(value: CloudGcpIntegrationsLoadBalancing) {
    this._loadBalancing.internalValue = value;
  }
  public resetLoadBalancing() {
    this._loadBalancing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancingInput() {
    return this._loadBalancing.internalValue;
  }

  // mem_cache - computed: false, optional: true, required: false
  private _memCache = new CloudGcpIntegrationsMemCacheOutputReference(this, "mem_cache");
  public get memCache() {
    return this._memCache;
  }
  public putMemCache(value: CloudGcpIntegrationsMemCache) {
    this._memCache.internalValue = value;
  }
  public resetMemCache() {
    this._memCache.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memCacheInput() {
    return this._memCache.internalValue;
  }

  // pub_sub - computed: false, optional: true, required: false
  private _pubSub = new CloudGcpIntegrationsPubSubOutputReference(this, "pub_sub");
  public get pubSub() {
    return this._pubSub;
  }
  public putPubSub(value: CloudGcpIntegrationsPubSub) {
    this._pubSub.internalValue = value;
  }
  public resetPubSub() {
    this._pubSub.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pubSubInput() {
    return this._pubSub.internalValue;
  }

  // redis - computed: false, optional: true, required: false
  private _redis = new CloudGcpIntegrationsRedisOutputReference(this, "redis");
  public get redis() {
    return this._redis;
  }
  public putRedis(value: CloudGcpIntegrationsRedis) {
    this._redis.internalValue = value;
  }
  public resetRedis() {
    this._redis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisInput() {
    return this._redis.internalValue;
  }

  // router - computed: false, optional: true, required: false
  private _router = new CloudGcpIntegrationsRouterOutputReference(this, "router");
  public get router() {
    return this._router;
  }
  public putRouter(value: CloudGcpIntegrationsRouter) {
    this._router.internalValue = value;
  }
  public resetRouter() {
    this._router.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerInput() {
    return this._router.internalValue;
  }

  // run - computed: false, optional: true, required: false
  private _run = new CloudGcpIntegrationsRunOutputReference(this, "run");
  public get run() {
    return this._run;
  }
  public putRun(value: CloudGcpIntegrationsRun) {
    this._run.internalValue = value;
  }
  public resetRun() {
    this._run.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runInput() {
    return this._run.internalValue;
  }

  // spanner - computed: false, optional: true, required: false
  private _spanner = new CloudGcpIntegrationsSpannerOutputReference(this, "spanner");
  public get spanner() {
    return this._spanner;
  }
  public putSpanner(value: CloudGcpIntegrationsSpanner) {
    this._spanner.internalValue = value;
  }
  public resetSpanner() {
    this._spanner.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spannerInput() {
    return this._spanner.internalValue;
  }

  // sql - computed: false, optional: true, required: false
  private _sql = new CloudGcpIntegrationsSqlOutputReference(this, "sql");
  public get sql() {
    return this._sql;
  }
  public putSql(value: CloudGcpIntegrationsSql) {
    this._sql.internalValue = value;
  }
  public resetSql() {
    this._sql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlInput() {
    return this._sql.internalValue;
  }

  // storage - computed: false, optional: true, required: false
  private _storage = new CloudGcpIntegrationsStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: CloudGcpIntegrationsStorage) {
    this._storage.internalValue = value;
  }
  public resetStorage() {
    this._storage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }

  // virtual_machines - computed: false, optional: true, required: false
  private _virtualMachines = new CloudGcpIntegrationsVirtualMachinesOutputReference(this, "virtual_machines");
  public get virtualMachines() {
    return this._virtualMachines;
  }
  public putVirtualMachines(value: CloudGcpIntegrationsVirtualMachines) {
    this._virtualMachines.internalValue = value;
  }
  public resetVirtualMachines() {
    this._virtualMachines.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMachinesInput() {
    return this._virtualMachines.internalValue;
  }

  // vpc_access - computed: false, optional: true, required: false
  private _vpcAccess = new CloudGcpIntegrationsVpcAccessOutputReference(this, "vpc_access");
  public get vpcAccess() {
    return this._vpcAccess;
  }
  public putVpcAccess(value: CloudGcpIntegrationsVpcAccess) {
    this._vpcAccess.internalValue = value;
  }
  public resetVpcAccess() {
    this._vpcAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcAccessInput() {
    return this._vpcAccess.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.numberToTerraform(this._accountId),
      id: cdktf.stringToTerraform(this._id),
      linked_account_id: cdktf.numberToTerraform(this._linkedAccountId),
      alloy_db: cloudGcpIntegrationsAlloyDbToTerraform(this._alloyDb.internalValue),
      app_engine: cloudGcpIntegrationsAppEngineToTerraform(this._appEngine.internalValue),
      big_query: cloudGcpIntegrationsBigQueryToTerraform(this._bigQuery.internalValue),
      big_table: cloudGcpIntegrationsBigTableToTerraform(this._bigTable.internalValue),
      composer: cloudGcpIntegrationsComposerToTerraform(this._composer.internalValue),
      data_flow: cloudGcpIntegrationsDataFlowToTerraform(this._dataFlow.internalValue),
      data_proc: cloudGcpIntegrationsDataProcToTerraform(this._dataProc.internalValue),
      data_store: cloudGcpIntegrationsDataStoreToTerraform(this._dataStore.internalValue),
      fire_base_database: cloudGcpIntegrationsFireBaseDatabaseToTerraform(this._fireBaseDatabase.internalValue),
      fire_base_hosting: cloudGcpIntegrationsFireBaseHostingToTerraform(this._fireBaseHosting.internalValue),
      fire_base_storage: cloudGcpIntegrationsFireBaseStorageToTerraform(this._fireBaseStorage.internalValue),
      fire_store: cloudGcpIntegrationsFireStoreToTerraform(this._fireStore.internalValue),
      functions: cloudGcpIntegrationsFunctionsToTerraform(this._functions.internalValue),
      interconnect: cloudGcpIntegrationsInterconnectToTerraform(this._interconnect.internalValue),
      kubernetes: cloudGcpIntegrationsKubernetesToTerraform(this._kubernetes.internalValue),
      load_balancing: cloudGcpIntegrationsLoadBalancingToTerraform(this._loadBalancing.internalValue),
      mem_cache: cloudGcpIntegrationsMemCacheToTerraform(this._memCache.internalValue),
      pub_sub: cloudGcpIntegrationsPubSubToTerraform(this._pubSub.internalValue),
      redis: cloudGcpIntegrationsRedisToTerraform(this._redis.internalValue),
      router: cloudGcpIntegrationsRouterToTerraform(this._router.internalValue),
      run: cloudGcpIntegrationsRunToTerraform(this._run.internalValue),
      spanner: cloudGcpIntegrationsSpannerToTerraform(this._spanner.internalValue),
      sql: cloudGcpIntegrationsSqlToTerraform(this._sql.internalValue),
      storage: cloudGcpIntegrationsStorageToTerraform(this._storage.internalValue),
      virtual_machines: cloudGcpIntegrationsVirtualMachinesToTerraform(this._virtualMachines.internalValue),
      vpc_access: cloudGcpIntegrationsVpcAccessToTerraform(this._vpcAccess.internalValue),
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
      alloy_db: {
        value: cloudGcpIntegrationsAlloyDbToHclTerraform(this._alloyDb.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudGcpIntegrationsAlloyDbList",
      },
      app_engine: {
        value: cloudGcpIntegrationsAppEngineToHclTerraform(this._appEngine.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudGcpIntegrationsAppEngineList",
      },
      big_query: {
        value: cloudGcpIntegrationsBigQueryToHclTerraform(this._bigQuery.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudGcpIntegrationsBigQueryList",
      },
      big_table: {
        value: cloudGcpIntegrationsBigTableToHclTerraform(this._bigTable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudGcpIntegrationsBigTableList",
      },
      composer: {
        value: cloudGcpIntegrationsComposerToHclTerraform(this._composer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudGcpIntegrationsComposerList",
      },
      data_flow: {
        value: cloudGcpIntegrationsDataFlowToHclTerraform(this._dataFlow.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudGcpIntegrationsDataFlowList",
      },
      data_proc: {
        value: cloudGcpIntegrationsDataProcToHclTerraform(this._dataProc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudGcpIntegrationsDataProcList",
      },
      data_store: {
        value: cloudGcpIntegrationsDataStoreToHclTerraform(this._dataStore.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudGcpIntegrationsDataStoreList",
      },
      fire_base_database: {
        value: cloudGcpIntegrationsFireBaseDatabaseToHclTerraform(this._fireBaseDatabase.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudGcpIntegrationsFireBaseDatabaseList",
      },
      fire_base_hosting: {
        value: cloudGcpIntegrationsFireBaseHostingToHclTerraform(this._fireBaseHosting.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudGcpIntegrationsFireBaseHostingList",
      },
      fire_base_storage: {
        value: cloudGcpIntegrationsFireBaseStorageToHclTerraform(this._fireBaseStorage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudGcpIntegrationsFireBaseStorageList",
      },
      fire_store: {
        value: cloudGcpIntegrationsFireStoreToHclTerraform(this._fireStore.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudGcpIntegrationsFireStoreList",
      },
      functions: {
        value: cloudGcpIntegrationsFunctionsToHclTerraform(this._functions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudGcpIntegrationsFunctionsList",
      },
      interconnect: {
        value: cloudGcpIntegrationsInterconnectToHclTerraform(this._interconnect.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudGcpIntegrationsInterconnectList",
      },
      kubernetes: {
        value: cloudGcpIntegrationsKubernetesToHclTerraform(this._kubernetes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudGcpIntegrationsKubernetesList",
      },
      load_balancing: {
        value: cloudGcpIntegrationsLoadBalancingToHclTerraform(this._loadBalancing.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudGcpIntegrationsLoadBalancingList",
      },
      mem_cache: {
        value: cloudGcpIntegrationsMemCacheToHclTerraform(this._memCache.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudGcpIntegrationsMemCacheList",
      },
      pub_sub: {
        value: cloudGcpIntegrationsPubSubToHclTerraform(this._pubSub.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudGcpIntegrationsPubSubList",
      },
      redis: {
        value: cloudGcpIntegrationsRedisToHclTerraform(this._redis.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudGcpIntegrationsRedisList",
      },
      router: {
        value: cloudGcpIntegrationsRouterToHclTerraform(this._router.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudGcpIntegrationsRouterList",
      },
      run: {
        value: cloudGcpIntegrationsRunToHclTerraform(this._run.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudGcpIntegrationsRunList",
      },
      spanner: {
        value: cloudGcpIntegrationsSpannerToHclTerraform(this._spanner.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudGcpIntegrationsSpannerList",
      },
      sql: {
        value: cloudGcpIntegrationsSqlToHclTerraform(this._sql.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudGcpIntegrationsSqlList",
      },
      storage: {
        value: cloudGcpIntegrationsStorageToHclTerraform(this._storage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudGcpIntegrationsStorageList",
      },
      virtual_machines: {
        value: cloudGcpIntegrationsVirtualMachinesToHclTerraform(this._virtualMachines.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudGcpIntegrationsVirtualMachinesList",
      },
      vpc_access: {
        value: cloudGcpIntegrationsVpcAccessToHclTerraform(this._vpcAccess.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudGcpIntegrationsVpcAccessList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
