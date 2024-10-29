/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudAzureIntegrationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the account in New Relic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#account_id CloudAzureIntegrations#account_id}
  */
  readonly accountId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#id CloudAzureIntegrations#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the linked Azure account in New Relic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#linked_account_id CloudAzureIntegrations#linked_account_id}
  */
  readonly linkedAccountId: number;
  /**
  * api_management block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#api_management CloudAzureIntegrations#api_management}
  */
  readonly apiManagement?: CloudAzureIntegrationsApiManagement;
  /**
  * app_gateway block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#app_gateway CloudAzureIntegrations#app_gateway}
  */
  readonly appGateway?: CloudAzureIntegrationsAppGateway;
  /**
  * app_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#app_service CloudAzureIntegrations#app_service}
  */
  readonly appService?: CloudAzureIntegrationsAppService;
  /**
  * containers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#containers CloudAzureIntegrations#containers}
  */
  readonly containers?: CloudAzureIntegrationsContainers;
  /**
  * cosmos_db block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#cosmos_db CloudAzureIntegrations#cosmos_db}
  */
  readonly cosmosDb?: CloudAzureIntegrationsCosmosDb;
  /**
  * cost_management block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#cost_management CloudAzureIntegrations#cost_management}
  */
  readonly costManagement?: CloudAzureIntegrationsCostManagement;
  /**
  * data_factory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#data_factory CloudAzureIntegrations#data_factory}
  */
  readonly dataFactory?: CloudAzureIntegrationsDataFactory;
  /**
  * event_hub block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#event_hub CloudAzureIntegrations#event_hub}
  */
  readonly eventHub?: CloudAzureIntegrationsEventHub;
  /**
  * express_route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#express_route CloudAzureIntegrations#express_route}
  */
  readonly expressRoute?: CloudAzureIntegrationsExpressRoute;
  /**
  * firewalls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#firewalls CloudAzureIntegrations#firewalls}
  */
  readonly firewalls?: CloudAzureIntegrationsFirewalls;
  /**
  * front_door block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#front_door CloudAzureIntegrations#front_door}
  */
  readonly frontDoor?: CloudAzureIntegrationsFrontDoor;
  /**
  * functions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#functions CloudAzureIntegrations#functions}
  */
  readonly functions?: CloudAzureIntegrationsFunctions;
  /**
  * key_vault block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#key_vault CloudAzureIntegrations#key_vault}
  */
  readonly keyVault?: CloudAzureIntegrationsKeyVault;
  /**
  * load_balancer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#load_balancer CloudAzureIntegrations#load_balancer}
  */
  readonly loadBalancer?: CloudAzureIntegrationsLoadBalancer;
  /**
  * logic_apps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#logic_apps CloudAzureIntegrations#logic_apps}
  */
  readonly logicApps?: CloudAzureIntegrationsLogicApps;
  /**
  * machine_learning block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#machine_learning CloudAzureIntegrations#machine_learning}
  */
  readonly machineLearning?: CloudAzureIntegrationsMachineLearning;
  /**
  * maria_db block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#maria_db CloudAzureIntegrations#maria_db}
  */
  readonly mariaDb?: CloudAzureIntegrationsMariaDb;
  /**
  * monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#monitor CloudAzureIntegrations#monitor}
  */
  readonly monitor?: CloudAzureIntegrationsMonitor;
  /**
  * mysql block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#mysql CloudAzureIntegrations#mysql}
  */
  readonly mysql?: CloudAzureIntegrationsMysql;
  /**
  * mysql_flexible block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#mysql_flexible CloudAzureIntegrations#mysql_flexible}
  */
  readonly mysqlFlexible?: CloudAzureIntegrationsMysqlFlexible;
  /**
  * postgresql block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#postgresql CloudAzureIntegrations#postgresql}
  */
  readonly postgresql?: CloudAzureIntegrationsPostgresql;
  /**
  * postgresql_flexible block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#postgresql_flexible CloudAzureIntegrations#postgresql_flexible}
  */
  readonly postgresqlFlexible?: CloudAzureIntegrationsPostgresqlFlexible;
  /**
  * power_bi_dedicated block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#power_bi_dedicated CloudAzureIntegrations#power_bi_dedicated}
  */
  readonly powerBiDedicated?: CloudAzureIntegrationsPowerBiDedicated;
  /**
  * redis_cache block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#redis_cache CloudAzureIntegrations#redis_cache}
  */
  readonly redisCache?: CloudAzureIntegrationsRedisCache;
  /**
  * service_bus block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#service_bus CloudAzureIntegrations#service_bus}
  */
  readonly serviceBus?: CloudAzureIntegrationsServiceBus;
  /**
  * sql block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#sql CloudAzureIntegrations#sql}
  */
  readonly sql?: CloudAzureIntegrationsSql;
  /**
  * sql_managed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#sql_managed CloudAzureIntegrations#sql_managed}
  */
  readonly sqlManaged?: CloudAzureIntegrationsSqlManaged;
  /**
  * storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#storage CloudAzureIntegrations#storage}
  */
  readonly storage?: CloudAzureIntegrationsStorage;
  /**
  * virtual_machine block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#virtual_machine CloudAzureIntegrations#virtual_machine}
  */
  readonly virtualMachine?: CloudAzureIntegrationsVirtualMachine;
  /**
  * virtual_networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#virtual_networks CloudAzureIntegrations#virtual_networks}
  */
  readonly virtualNetworks?: CloudAzureIntegrationsVirtualNetworks;
  /**
  * vms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#vms CloudAzureIntegrations#vms}
  */
  readonly vms?: CloudAzureIntegrationsVms;
  /**
  * vpn_gateway block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#vpn_gateway CloudAzureIntegrations#vpn_gateway}
  */
  readonly vpnGateway?: CloudAzureIntegrationsVpnGateway;
}
export interface CloudAzureIntegrationsApiManagement {
  /**
  * The data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}
  */
  readonly resourceGroups?: string[];
}

export function cloudAzureIntegrationsApiManagementToTerraform(struct?: CloudAzureIntegrationsApiManagementOutputReference | CloudAzureIntegrationsApiManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
    resource_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceGroups),
  }
}


export function cloudAzureIntegrationsApiManagementToHclTerraform(struct?: CloudAzureIntegrationsApiManagementOutputReference | CloudAzureIntegrationsApiManagement): any {
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
    resource_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAzureIntegrationsApiManagementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAzureIntegrationsApiManagement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    if (this._resourceGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroups = this._resourceGroups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAzureIntegrationsApiManagement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
      this._resourceGroups = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
      this._resourceGroups = value.resourceGroups;
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

  // resource_groups - computed: false, optional: true, required: false
  private _resourceGroups?: string[]; 
  public get resourceGroups() {
    return this.getListAttribute('resource_groups');
  }
  public set resourceGroups(value: string[]) {
    this._resourceGroups = value;
  }
  public resetResourceGroups() {
    this._resourceGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupsInput() {
    return this._resourceGroups;
  }
}
export interface CloudAzureIntegrationsAppGateway {
  /**
  * The data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}
  */
  readonly resourceGroups?: string[];
}

export function cloudAzureIntegrationsAppGatewayToTerraform(struct?: CloudAzureIntegrationsAppGatewayOutputReference | CloudAzureIntegrationsAppGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
    resource_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceGroups),
  }
}


export function cloudAzureIntegrationsAppGatewayToHclTerraform(struct?: CloudAzureIntegrationsAppGatewayOutputReference | CloudAzureIntegrationsAppGateway): any {
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
    resource_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAzureIntegrationsAppGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAzureIntegrationsAppGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    if (this._resourceGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroups = this._resourceGroups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAzureIntegrationsAppGateway | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
      this._resourceGroups = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
      this._resourceGroups = value.resourceGroups;
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

  // resource_groups - computed: false, optional: true, required: false
  private _resourceGroups?: string[]; 
  public get resourceGroups() {
    return this.getListAttribute('resource_groups');
  }
  public set resourceGroups(value: string[]) {
    this._resourceGroups = value;
  }
  public resetResourceGroups() {
    this._resourceGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupsInput() {
    return this._resourceGroups;
  }
}
export interface CloudAzureIntegrationsAppService {
  /**
  * The data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}
  */
  readonly resourceGroups?: string[];
}

export function cloudAzureIntegrationsAppServiceToTerraform(struct?: CloudAzureIntegrationsAppServiceOutputReference | CloudAzureIntegrationsAppService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
    resource_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceGroups),
  }
}


export function cloudAzureIntegrationsAppServiceToHclTerraform(struct?: CloudAzureIntegrationsAppServiceOutputReference | CloudAzureIntegrationsAppService): any {
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
    resource_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAzureIntegrationsAppServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAzureIntegrationsAppService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    if (this._resourceGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroups = this._resourceGroups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAzureIntegrationsAppService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
      this._resourceGroups = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
      this._resourceGroups = value.resourceGroups;
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

  // resource_groups - computed: false, optional: true, required: false
  private _resourceGroups?: string[]; 
  public get resourceGroups() {
    return this.getListAttribute('resource_groups');
  }
  public set resourceGroups(value: string[]) {
    this._resourceGroups = value;
  }
  public resetResourceGroups() {
    this._resourceGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupsInput() {
    return this._resourceGroups;
  }
}
export interface CloudAzureIntegrationsContainers {
  /**
  * The data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}
  */
  readonly resourceGroups?: string[];
}

export function cloudAzureIntegrationsContainersToTerraform(struct?: CloudAzureIntegrationsContainersOutputReference | CloudAzureIntegrationsContainers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
    resource_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceGroups),
  }
}


export function cloudAzureIntegrationsContainersToHclTerraform(struct?: CloudAzureIntegrationsContainersOutputReference | CloudAzureIntegrationsContainers): any {
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
    resource_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAzureIntegrationsContainersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAzureIntegrationsContainers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    if (this._resourceGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroups = this._resourceGroups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAzureIntegrationsContainers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
      this._resourceGroups = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
      this._resourceGroups = value.resourceGroups;
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

  // resource_groups - computed: false, optional: true, required: false
  private _resourceGroups?: string[]; 
  public get resourceGroups() {
    return this.getListAttribute('resource_groups');
  }
  public set resourceGroups(value: string[]) {
    this._resourceGroups = value;
  }
  public resetResourceGroups() {
    this._resourceGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupsInput() {
    return this._resourceGroups;
  }
}
export interface CloudAzureIntegrationsCosmosDb {
  /**
  * The data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}
  */
  readonly resourceGroups?: string[];
}

export function cloudAzureIntegrationsCosmosDbToTerraform(struct?: CloudAzureIntegrationsCosmosDbOutputReference | CloudAzureIntegrationsCosmosDb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
    resource_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceGroups),
  }
}


export function cloudAzureIntegrationsCosmosDbToHclTerraform(struct?: CloudAzureIntegrationsCosmosDbOutputReference | CloudAzureIntegrationsCosmosDb): any {
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
    resource_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAzureIntegrationsCosmosDbOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAzureIntegrationsCosmosDb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    if (this._resourceGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroups = this._resourceGroups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAzureIntegrationsCosmosDb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
      this._resourceGroups = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
      this._resourceGroups = value.resourceGroups;
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

  // resource_groups - computed: false, optional: true, required: false
  private _resourceGroups?: string[]; 
  public get resourceGroups() {
    return this.getListAttribute('resource_groups');
  }
  public set resourceGroups(value: string[]) {
    this._resourceGroups = value;
  }
  public resetResourceGroups() {
    this._resourceGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupsInput() {
    return this._resourceGroups;
  }
}
export interface CloudAzureIntegrationsCostManagement {
  /**
  * The data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Specify if additional cost data per tag should be collected. This field is case sensitive.
  * 
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#tag_keys CloudAzureIntegrations#tag_keys}
  */
  readonly tagKeys?: string[];
}

export function cloudAzureIntegrationsCostManagementToTerraform(struct?: CloudAzureIntegrationsCostManagementOutputReference | CloudAzureIntegrationsCostManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
    tag_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tagKeys),
  }
}


export function cloudAzureIntegrationsCostManagementToHclTerraform(struct?: CloudAzureIntegrationsCostManagementOutputReference | CloudAzureIntegrationsCostManagement): any {
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
    tag_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tagKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAzureIntegrationsCostManagementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAzureIntegrationsCostManagement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    if (this._tagKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagKeys = this._tagKeys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAzureIntegrationsCostManagement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
      this._tagKeys = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
      this._tagKeys = value.tagKeys;
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

  // tag_keys - computed: false, optional: true, required: false
  private _tagKeys?: string[]; 
  public get tagKeys() {
    return this.getListAttribute('tag_keys');
  }
  public set tagKeys(value: string[]) {
    this._tagKeys = value;
  }
  public resetTagKeys() {
    this._tagKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeysInput() {
    return this._tagKeys;
  }
}
export interface CloudAzureIntegrationsDataFactory {
  /**
  * The data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}
  */
  readonly resourceGroups?: string[];
}

export function cloudAzureIntegrationsDataFactoryToTerraform(struct?: CloudAzureIntegrationsDataFactoryOutputReference | CloudAzureIntegrationsDataFactory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
    resource_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceGroups),
  }
}


export function cloudAzureIntegrationsDataFactoryToHclTerraform(struct?: CloudAzureIntegrationsDataFactoryOutputReference | CloudAzureIntegrationsDataFactory): any {
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
    resource_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAzureIntegrationsDataFactoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAzureIntegrationsDataFactory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    if (this._resourceGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroups = this._resourceGroups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAzureIntegrationsDataFactory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
      this._resourceGroups = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
      this._resourceGroups = value.resourceGroups;
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

  // resource_groups - computed: false, optional: true, required: false
  private _resourceGroups?: string[]; 
  public get resourceGroups() {
    return this.getListAttribute('resource_groups');
  }
  public set resourceGroups(value: string[]) {
    this._resourceGroups = value;
  }
  public resetResourceGroups() {
    this._resourceGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupsInput() {
    return this._resourceGroups;
  }
}
export interface CloudAzureIntegrationsEventHub {
  /**
  * The data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}
  */
  readonly resourceGroups?: string[];
}

export function cloudAzureIntegrationsEventHubToTerraform(struct?: CloudAzureIntegrationsEventHubOutputReference | CloudAzureIntegrationsEventHub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
    resource_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceGroups),
  }
}


export function cloudAzureIntegrationsEventHubToHclTerraform(struct?: CloudAzureIntegrationsEventHubOutputReference | CloudAzureIntegrationsEventHub): any {
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
    resource_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAzureIntegrationsEventHubOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAzureIntegrationsEventHub | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    if (this._resourceGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroups = this._resourceGroups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAzureIntegrationsEventHub | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
      this._resourceGroups = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
      this._resourceGroups = value.resourceGroups;
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

  // resource_groups - computed: false, optional: true, required: false
  private _resourceGroups?: string[]; 
  public get resourceGroups() {
    return this.getListAttribute('resource_groups');
  }
  public set resourceGroups(value: string[]) {
    this._resourceGroups = value;
  }
  public resetResourceGroups() {
    this._resourceGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupsInput() {
    return this._resourceGroups;
  }
}
export interface CloudAzureIntegrationsExpressRoute {
  /**
  * The data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}
  */
  readonly resourceGroups?: string[];
}

export function cloudAzureIntegrationsExpressRouteToTerraform(struct?: CloudAzureIntegrationsExpressRouteOutputReference | CloudAzureIntegrationsExpressRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
    resource_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceGroups),
  }
}


export function cloudAzureIntegrationsExpressRouteToHclTerraform(struct?: CloudAzureIntegrationsExpressRouteOutputReference | CloudAzureIntegrationsExpressRoute): any {
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
    resource_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAzureIntegrationsExpressRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAzureIntegrationsExpressRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    if (this._resourceGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroups = this._resourceGroups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAzureIntegrationsExpressRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
      this._resourceGroups = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
      this._resourceGroups = value.resourceGroups;
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

  // resource_groups - computed: false, optional: true, required: false
  private _resourceGroups?: string[]; 
  public get resourceGroups() {
    return this.getListAttribute('resource_groups');
  }
  public set resourceGroups(value: string[]) {
    this._resourceGroups = value;
  }
  public resetResourceGroups() {
    this._resourceGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupsInput() {
    return this._resourceGroups;
  }
}
export interface CloudAzureIntegrationsFirewalls {
  /**
  * The data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}
  */
  readonly resourceGroups?: string[];
}

export function cloudAzureIntegrationsFirewallsToTerraform(struct?: CloudAzureIntegrationsFirewallsOutputReference | CloudAzureIntegrationsFirewalls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
    resource_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceGroups),
  }
}


export function cloudAzureIntegrationsFirewallsToHclTerraform(struct?: CloudAzureIntegrationsFirewallsOutputReference | CloudAzureIntegrationsFirewalls): any {
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
    resource_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAzureIntegrationsFirewallsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAzureIntegrationsFirewalls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    if (this._resourceGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroups = this._resourceGroups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAzureIntegrationsFirewalls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
      this._resourceGroups = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
      this._resourceGroups = value.resourceGroups;
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

  // resource_groups - computed: false, optional: true, required: false
  private _resourceGroups?: string[]; 
  public get resourceGroups() {
    return this.getListAttribute('resource_groups');
  }
  public set resourceGroups(value: string[]) {
    this._resourceGroups = value;
  }
  public resetResourceGroups() {
    this._resourceGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupsInput() {
    return this._resourceGroups;
  }
}
export interface CloudAzureIntegrationsFrontDoor {
  /**
  * The data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}
  */
  readonly resourceGroups?: string[];
}

export function cloudAzureIntegrationsFrontDoorToTerraform(struct?: CloudAzureIntegrationsFrontDoorOutputReference | CloudAzureIntegrationsFrontDoor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
    resource_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceGroups),
  }
}


export function cloudAzureIntegrationsFrontDoorToHclTerraform(struct?: CloudAzureIntegrationsFrontDoorOutputReference | CloudAzureIntegrationsFrontDoor): any {
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
    resource_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAzureIntegrationsFrontDoorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAzureIntegrationsFrontDoor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    if (this._resourceGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroups = this._resourceGroups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAzureIntegrationsFrontDoor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
      this._resourceGroups = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
      this._resourceGroups = value.resourceGroups;
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

  // resource_groups - computed: false, optional: true, required: false
  private _resourceGroups?: string[]; 
  public get resourceGroups() {
    return this.getListAttribute('resource_groups');
  }
  public set resourceGroups(value: string[]) {
    this._resourceGroups = value;
  }
  public resetResourceGroups() {
    this._resourceGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupsInput() {
    return this._resourceGroups;
  }
}
export interface CloudAzureIntegrationsFunctions {
  /**
  * The data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}
  */
  readonly resourceGroups?: string[];
}

export function cloudAzureIntegrationsFunctionsToTerraform(struct?: CloudAzureIntegrationsFunctionsOutputReference | CloudAzureIntegrationsFunctions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
    resource_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceGroups),
  }
}


export function cloudAzureIntegrationsFunctionsToHclTerraform(struct?: CloudAzureIntegrationsFunctionsOutputReference | CloudAzureIntegrationsFunctions): any {
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
    resource_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAzureIntegrationsFunctionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAzureIntegrationsFunctions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    if (this._resourceGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroups = this._resourceGroups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAzureIntegrationsFunctions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
      this._resourceGroups = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
      this._resourceGroups = value.resourceGroups;
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

  // resource_groups - computed: false, optional: true, required: false
  private _resourceGroups?: string[]; 
  public get resourceGroups() {
    return this.getListAttribute('resource_groups');
  }
  public set resourceGroups(value: string[]) {
    this._resourceGroups = value;
  }
  public resetResourceGroups() {
    this._resourceGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupsInput() {
    return this._resourceGroups;
  }
}
export interface CloudAzureIntegrationsKeyVault {
  /**
  * The data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}
  */
  readonly resourceGroups?: string[];
}

export function cloudAzureIntegrationsKeyVaultToTerraform(struct?: CloudAzureIntegrationsKeyVaultOutputReference | CloudAzureIntegrationsKeyVault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
    resource_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceGroups),
  }
}


export function cloudAzureIntegrationsKeyVaultToHclTerraform(struct?: CloudAzureIntegrationsKeyVaultOutputReference | CloudAzureIntegrationsKeyVault): any {
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
    resource_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAzureIntegrationsKeyVaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAzureIntegrationsKeyVault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    if (this._resourceGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroups = this._resourceGroups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAzureIntegrationsKeyVault | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
      this._resourceGroups = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
      this._resourceGroups = value.resourceGroups;
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

  // resource_groups - computed: false, optional: true, required: false
  private _resourceGroups?: string[]; 
  public get resourceGroups() {
    return this.getListAttribute('resource_groups');
  }
  public set resourceGroups(value: string[]) {
    this._resourceGroups = value;
  }
  public resetResourceGroups() {
    this._resourceGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupsInput() {
    return this._resourceGroups;
  }
}
export interface CloudAzureIntegrationsLoadBalancer {
  /**
  * The data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}
  */
  readonly resourceGroups?: string[];
}

export function cloudAzureIntegrationsLoadBalancerToTerraform(struct?: CloudAzureIntegrationsLoadBalancerOutputReference | CloudAzureIntegrationsLoadBalancer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
    resource_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceGroups),
  }
}


export function cloudAzureIntegrationsLoadBalancerToHclTerraform(struct?: CloudAzureIntegrationsLoadBalancerOutputReference | CloudAzureIntegrationsLoadBalancer): any {
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
    resource_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAzureIntegrationsLoadBalancerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAzureIntegrationsLoadBalancer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    if (this._resourceGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroups = this._resourceGroups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAzureIntegrationsLoadBalancer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
      this._resourceGroups = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
      this._resourceGroups = value.resourceGroups;
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

  // resource_groups - computed: false, optional: true, required: false
  private _resourceGroups?: string[]; 
  public get resourceGroups() {
    return this.getListAttribute('resource_groups');
  }
  public set resourceGroups(value: string[]) {
    this._resourceGroups = value;
  }
  public resetResourceGroups() {
    this._resourceGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupsInput() {
    return this._resourceGroups;
  }
}
export interface CloudAzureIntegrationsLogicApps {
  /**
  * The data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}
  */
  readonly resourceGroups?: string[];
}

export function cloudAzureIntegrationsLogicAppsToTerraform(struct?: CloudAzureIntegrationsLogicAppsOutputReference | CloudAzureIntegrationsLogicApps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
    resource_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceGroups),
  }
}


export function cloudAzureIntegrationsLogicAppsToHclTerraform(struct?: CloudAzureIntegrationsLogicAppsOutputReference | CloudAzureIntegrationsLogicApps): any {
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
    resource_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAzureIntegrationsLogicAppsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAzureIntegrationsLogicApps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    if (this._resourceGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroups = this._resourceGroups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAzureIntegrationsLogicApps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
      this._resourceGroups = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
      this._resourceGroups = value.resourceGroups;
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

  // resource_groups - computed: false, optional: true, required: false
  private _resourceGroups?: string[]; 
  public get resourceGroups() {
    return this.getListAttribute('resource_groups');
  }
  public set resourceGroups(value: string[]) {
    this._resourceGroups = value;
  }
  public resetResourceGroups() {
    this._resourceGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupsInput() {
    return this._resourceGroups;
  }
}
export interface CloudAzureIntegrationsMachineLearning {
  /**
  * The data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}
  */
  readonly resourceGroups?: string[];
}

export function cloudAzureIntegrationsMachineLearningToTerraform(struct?: CloudAzureIntegrationsMachineLearningOutputReference | CloudAzureIntegrationsMachineLearning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
    resource_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceGroups),
  }
}


export function cloudAzureIntegrationsMachineLearningToHclTerraform(struct?: CloudAzureIntegrationsMachineLearningOutputReference | CloudAzureIntegrationsMachineLearning): any {
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
    resource_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAzureIntegrationsMachineLearningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAzureIntegrationsMachineLearning | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    if (this._resourceGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroups = this._resourceGroups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAzureIntegrationsMachineLearning | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
      this._resourceGroups = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
      this._resourceGroups = value.resourceGroups;
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

  // resource_groups - computed: false, optional: true, required: false
  private _resourceGroups?: string[]; 
  public get resourceGroups() {
    return this.getListAttribute('resource_groups');
  }
  public set resourceGroups(value: string[]) {
    this._resourceGroups = value;
  }
  public resetResourceGroups() {
    this._resourceGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupsInput() {
    return this._resourceGroups;
  }
}
export interface CloudAzureIntegrationsMariaDb {
  /**
  * The data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}
  */
  readonly resourceGroups?: string[];
}

export function cloudAzureIntegrationsMariaDbToTerraform(struct?: CloudAzureIntegrationsMariaDbOutputReference | CloudAzureIntegrationsMariaDb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
    resource_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceGroups),
  }
}


export function cloudAzureIntegrationsMariaDbToHclTerraform(struct?: CloudAzureIntegrationsMariaDbOutputReference | CloudAzureIntegrationsMariaDb): any {
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
    resource_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAzureIntegrationsMariaDbOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAzureIntegrationsMariaDb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    if (this._resourceGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroups = this._resourceGroups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAzureIntegrationsMariaDb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
      this._resourceGroups = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
      this._resourceGroups = value.resourceGroups;
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

  // resource_groups - computed: false, optional: true, required: false
  private _resourceGroups?: string[]; 
  public get resourceGroups() {
    return this.getListAttribute('resource_groups');
  }
  public set resourceGroups(value: string[]) {
    this._resourceGroups = value;
  }
  public resetResourceGroups() {
    this._resourceGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupsInput() {
    return this._resourceGroups;
  }
}
export interface CloudAzureIntegrationsMonitor {
  /**
  * A flag that specifies if the integration is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#enabled CloudAzureIntegrations#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specify resource tags in 'key:value' form to be excluded from monitoring
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#exclude_tags CloudAzureIntegrations#exclude_tags}
  */
  readonly excludeTags?: string[];
  /**
  * Specify resource tags in 'key:value' form to be monitored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#include_tags CloudAzureIntegrations#include_tags}
  */
  readonly includeTags?: string[];
  /**
  * The data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}
  */
  readonly resourceGroups?: string[];
  /**
  * Specify each Azure resource type that needs to be monitored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#resource_types CloudAzureIntegrations#resource_types}
  */
  readonly resourceTypes?: string[];
}

export function cloudAzureIntegrationsMonitorToTerraform(struct?: CloudAzureIntegrationsMonitorOutputReference | CloudAzureIntegrationsMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    exclude_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeTags),
    include_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includeTags),
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
    resource_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceGroups),
    resource_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceTypes),
  }
}


export function cloudAzureIntegrationsMonitorToHclTerraform(struct?: CloudAzureIntegrationsMonitorOutputReference | CloudAzureIntegrationsMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exclude_tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeTags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includeTags),
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
    resource_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resource_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAzureIntegrationsMonitorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAzureIntegrationsMonitor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._excludeTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeTags = this._excludeTags;
    }
    if (this._includeTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeTags = this._includeTags;
    }
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    if (this._resourceGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroups = this._resourceGroups;
    }
    if (this._resourceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTypes = this._resourceTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAzureIntegrationsMonitor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._excludeTags = undefined;
      this._includeTags = undefined;
      this._metricsPollingInterval = undefined;
      this._resourceGroups = undefined;
      this._resourceTypes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._excludeTags = value.excludeTags;
      this._includeTags = value.includeTags;
      this._metricsPollingInterval = value.metricsPollingInterval;
      this._resourceGroups = value.resourceGroups;
      this._resourceTypes = value.resourceTypes;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // exclude_tags - computed: false, optional: true, required: false
  private _excludeTags?: string[]; 
  public get excludeTags() {
    return this.getListAttribute('exclude_tags');
  }
  public set excludeTags(value: string[]) {
    this._excludeTags = value;
  }
  public resetExcludeTags() {
    this._excludeTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeTagsInput() {
    return this._excludeTags;
  }

  // include_tags - computed: false, optional: true, required: false
  private _includeTags?: string[]; 
  public get includeTags() {
    return this.getListAttribute('include_tags');
  }
  public set includeTags(value: string[]) {
    this._includeTags = value;
  }
  public resetIncludeTags() {
    this._includeTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeTagsInput() {
    return this._includeTags;
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

  // resource_groups - computed: false, optional: true, required: false
  private _resourceGroups?: string[]; 
  public get resourceGroups() {
    return this.getListAttribute('resource_groups');
  }
  public set resourceGroups(value: string[]) {
    this._resourceGroups = value;
  }
  public resetResourceGroups() {
    this._resourceGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupsInput() {
    return this._resourceGroups;
  }

  // resource_types - computed: false, optional: true, required: false
  private _resourceTypes?: string[]; 
  public get resourceTypes() {
    return this.getListAttribute('resource_types');
  }
  public set resourceTypes(value: string[]) {
    this._resourceTypes = value;
  }
  public resetResourceTypes() {
    this._resourceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypesInput() {
    return this._resourceTypes;
  }
}
export interface CloudAzureIntegrationsMysql {
  /**
  * The data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}
  */
  readonly resourceGroups?: string[];
}

export function cloudAzureIntegrationsMysqlToTerraform(struct?: CloudAzureIntegrationsMysqlOutputReference | CloudAzureIntegrationsMysql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
    resource_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceGroups),
  }
}


export function cloudAzureIntegrationsMysqlToHclTerraform(struct?: CloudAzureIntegrationsMysqlOutputReference | CloudAzureIntegrationsMysql): any {
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
    resource_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAzureIntegrationsMysqlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAzureIntegrationsMysql | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    if (this._resourceGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroups = this._resourceGroups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAzureIntegrationsMysql | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
      this._resourceGroups = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
      this._resourceGroups = value.resourceGroups;
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

  // resource_groups - computed: false, optional: true, required: false
  private _resourceGroups?: string[]; 
  public get resourceGroups() {
    return this.getListAttribute('resource_groups');
  }
  public set resourceGroups(value: string[]) {
    this._resourceGroups = value;
  }
  public resetResourceGroups() {
    this._resourceGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupsInput() {
    return this._resourceGroups;
  }
}
export interface CloudAzureIntegrationsMysqlFlexible {
  /**
  * The data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}
  */
  readonly resourceGroups?: string[];
}

export function cloudAzureIntegrationsMysqlFlexibleToTerraform(struct?: CloudAzureIntegrationsMysqlFlexibleOutputReference | CloudAzureIntegrationsMysqlFlexible): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
    resource_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceGroups),
  }
}


export function cloudAzureIntegrationsMysqlFlexibleToHclTerraform(struct?: CloudAzureIntegrationsMysqlFlexibleOutputReference | CloudAzureIntegrationsMysqlFlexible): any {
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
    resource_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAzureIntegrationsMysqlFlexibleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAzureIntegrationsMysqlFlexible | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    if (this._resourceGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroups = this._resourceGroups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAzureIntegrationsMysqlFlexible | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
      this._resourceGroups = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
      this._resourceGroups = value.resourceGroups;
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

  // resource_groups - computed: false, optional: true, required: false
  private _resourceGroups?: string[]; 
  public get resourceGroups() {
    return this.getListAttribute('resource_groups');
  }
  public set resourceGroups(value: string[]) {
    this._resourceGroups = value;
  }
  public resetResourceGroups() {
    this._resourceGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupsInput() {
    return this._resourceGroups;
  }
}
export interface CloudAzureIntegrationsPostgresql {
  /**
  * The data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}
  */
  readonly resourceGroups?: string[];
}

export function cloudAzureIntegrationsPostgresqlToTerraform(struct?: CloudAzureIntegrationsPostgresqlOutputReference | CloudAzureIntegrationsPostgresql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
    resource_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceGroups),
  }
}


export function cloudAzureIntegrationsPostgresqlToHclTerraform(struct?: CloudAzureIntegrationsPostgresqlOutputReference | CloudAzureIntegrationsPostgresql): any {
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
    resource_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAzureIntegrationsPostgresqlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAzureIntegrationsPostgresql | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    if (this._resourceGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroups = this._resourceGroups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAzureIntegrationsPostgresql | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
      this._resourceGroups = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
      this._resourceGroups = value.resourceGroups;
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

  // resource_groups - computed: false, optional: true, required: false
  private _resourceGroups?: string[]; 
  public get resourceGroups() {
    return this.getListAttribute('resource_groups');
  }
  public set resourceGroups(value: string[]) {
    this._resourceGroups = value;
  }
  public resetResourceGroups() {
    this._resourceGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupsInput() {
    return this._resourceGroups;
  }
}
export interface CloudAzureIntegrationsPostgresqlFlexible {
  /**
  * The data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}
  */
  readonly resourceGroups?: string[];
}

export function cloudAzureIntegrationsPostgresqlFlexibleToTerraform(struct?: CloudAzureIntegrationsPostgresqlFlexibleOutputReference | CloudAzureIntegrationsPostgresqlFlexible): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
    resource_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceGroups),
  }
}


export function cloudAzureIntegrationsPostgresqlFlexibleToHclTerraform(struct?: CloudAzureIntegrationsPostgresqlFlexibleOutputReference | CloudAzureIntegrationsPostgresqlFlexible): any {
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
    resource_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAzureIntegrationsPostgresqlFlexibleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAzureIntegrationsPostgresqlFlexible | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    if (this._resourceGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroups = this._resourceGroups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAzureIntegrationsPostgresqlFlexible | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
      this._resourceGroups = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
      this._resourceGroups = value.resourceGroups;
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

  // resource_groups - computed: false, optional: true, required: false
  private _resourceGroups?: string[]; 
  public get resourceGroups() {
    return this.getListAttribute('resource_groups');
  }
  public set resourceGroups(value: string[]) {
    this._resourceGroups = value;
  }
  public resetResourceGroups() {
    this._resourceGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupsInput() {
    return this._resourceGroups;
  }
}
export interface CloudAzureIntegrationsPowerBiDedicated {
  /**
  * The data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}
  */
  readonly resourceGroups?: string[];
}

export function cloudAzureIntegrationsPowerBiDedicatedToTerraform(struct?: CloudAzureIntegrationsPowerBiDedicatedOutputReference | CloudAzureIntegrationsPowerBiDedicated): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
    resource_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceGroups),
  }
}


export function cloudAzureIntegrationsPowerBiDedicatedToHclTerraform(struct?: CloudAzureIntegrationsPowerBiDedicatedOutputReference | CloudAzureIntegrationsPowerBiDedicated): any {
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
    resource_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAzureIntegrationsPowerBiDedicatedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAzureIntegrationsPowerBiDedicated | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    if (this._resourceGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroups = this._resourceGroups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAzureIntegrationsPowerBiDedicated | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
      this._resourceGroups = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
      this._resourceGroups = value.resourceGroups;
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

  // resource_groups - computed: false, optional: true, required: false
  private _resourceGroups?: string[]; 
  public get resourceGroups() {
    return this.getListAttribute('resource_groups');
  }
  public set resourceGroups(value: string[]) {
    this._resourceGroups = value;
  }
  public resetResourceGroups() {
    this._resourceGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupsInput() {
    return this._resourceGroups;
  }
}
export interface CloudAzureIntegrationsRedisCache {
  /**
  * The data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}
  */
  readonly resourceGroups?: string[];
}

export function cloudAzureIntegrationsRedisCacheToTerraform(struct?: CloudAzureIntegrationsRedisCacheOutputReference | CloudAzureIntegrationsRedisCache): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
    resource_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceGroups),
  }
}


export function cloudAzureIntegrationsRedisCacheToHclTerraform(struct?: CloudAzureIntegrationsRedisCacheOutputReference | CloudAzureIntegrationsRedisCache): any {
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
    resource_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAzureIntegrationsRedisCacheOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAzureIntegrationsRedisCache | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    if (this._resourceGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroups = this._resourceGroups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAzureIntegrationsRedisCache | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
      this._resourceGroups = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
      this._resourceGroups = value.resourceGroups;
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

  // resource_groups - computed: false, optional: true, required: false
  private _resourceGroups?: string[]; 
  public get resourceGroups() {
    return this.getListAttribute('resource_groups');
  }
  public set resourceGroups(value: string[]) {
    this._resourceGroups = value;
  }
  public resetResourceGroups() {
    this._resourceGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupsInput() {
    return this._resourceGroups;
  }
}
export interface CloudAzureIntegrationsServiceBus {
  /**
  * The data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}
  */
  readonly resourceGroups?: string[];
}

export function cloudAzureIntegrationsServiceBusToTerraform(struct?: CloudAzureIntegrationsServiceBusOutputReference | CloudAzureIntegrationsServiceBus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
    resource_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceGroups),
  }
}


export function cloudAzureIntegrationsServiceBusToHclTerraform(struct?: CloudAzureIntegrationsServiceBusOutputReference | CloudAzureIntegrationsServiceBus): any {
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
    resource_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAzureIntegrationsServiceBusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAzureIntegrationsServiceBus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    if (this._resourceGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroups = this._resourceGroups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAzureIntegrationsServiceBus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
      this._resourceGroups = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
      this._resourceGroups = value.resourceGroups;
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

  // resource_groups - computed: false, optional: true, required: false
  private _resourceGroups?: string[]; 
  public get resourceGroups() {
    return this.getListAttribute('resource_groups');
  }
  public set resourceGroups(value: string[]) {
    this._resourceGroups = value;
  }
  public resetResourceGroups() {
    this._resourceGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupsInput() {
    return this._resourceGroups;
  }
}
export interface CloudAzureIntegrationsSql {
  /**
  * The data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}
  */
  readonly resourceGroups?: string[];
}

export function cloudAzureIntegrationsSqlToTerraform(struct?: CloudAzureIntegrationsSqlOutputReference | CloudAzureIntegrationsSql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
    resource_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceGroups),
  }
}


export function cloudAzureIntegrationsSqlToHclTerraform(struct?: CloudAzureIntegrationsSqlOutputReference | CloudAzureIntegrationsSql): any {
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
    resource_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAzureIntegrationsSqlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAzureIntegrationsSql | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    if (this._resourceGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroups = this._resourceGroups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAzureIntegrationsSql | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
      this._resourceGroups = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
      this._resourceGroups = value.resourceGroups;
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

  // resource_groups - computed: false, optional: true, required: false
  private _resourceGroups?: string[]; 
  public get resourceGroups() {
    return this.getListAttribute('resource_groups');
  }
  public set resourceGroups(value: string[]) {
    this._resourceGroups = value;
  }
  public resetResourceGroups() {
    this._resourceGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupsInput() {
    return this._resourceGroups;
  }
}
export interface CloudAzureIntegrationsSqlManaged {
  /**
  * The data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}
  */
  readonly resourceGroups?: string[];
}

export function cloudAzureIntegrationsSqlManagedToTerraform(struct?: CloudAzureIntegrationsSqlManagedOutputReference | CloudAzureIntegrationsSqlManaged): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
    resource_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceGroups),
  }
}


export function cloudAzureIntegrationsSqlManagedToHclTerraform(struct?: CloudAzureIntegrationsSqlManagedOutputReference | CloudAzureIntegrationsSqlManaged): any {
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
    resource_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAzureIntegrationsSqlManagedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAzureIntegrationsSqlManaged | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    if (this._resourceGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroups = this._resourceGroups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAzureIntegrationsSqlManaged | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
      this._resourceGroups = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
      this._resourceGroups = value.resourceGroups;
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

  // resource_groups - computed: false, optional: true, required: false
  private _resourceGroups?: string[]; 
  public get resourceGroups() {
    return this.getListAttribute('resource_groups');
  }
  public set resourceGroups(value: string[]) {
    this._resourceGroups = value;
  }
  public resetResourceGroups() {
    this._resourceGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupsInput() {
    return this._resourceGroups;
  }
}
export interface CloudAzureIntegrationsStorage {
  /**
  * The data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}
  */
  readonly resourceGroups?: string[];
}

export function cloudAzureIntegrationsStorageToTerraform(struct?: CloudAzureIntegrationsStorageOutputReference | CloudAzureIntegrationsStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
    resource_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceGroups),
  }
}


export function cloudAzureIntegrationsStorageToHclTerraform(struct?: CloudAzureIntegrationsStorageOutputReference | CloudAzureIntegrationsStorage): any {
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
    resource_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAzureIntegrationsStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAzureIntegrationsStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    if (this._resourceGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroups = this._resourceGroups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAzureIntegrationsStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
      this._resourceGroups = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
      this._resourceGroups = value.resourceGroups;
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

  // resource_groups - computed: false, optional: true, required: false
  private _resourceGroups?: string[]; 
  public get resourceGroups() {
    return this.getListAttribute('resource_groups');
  }
  public set resourceGroups(value: string[]) {
    this._resourceGroups = value;
  }
  public resetResourceGroups() {
    this._resourceGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupsInput() {
    return this._resourceGroups;
  }
}
export interface CloudAzureIntegrationsVirtualMachine {
  /**
  * The data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}
  */
  readonly resourceGroups?: string[];
}

export function cloudAzureIntegrationsVirtualMachineToTerraform(struct?: CloudAzureIntegrationsVirtualMachineOutputReference | CloudAzureIntegrationsVirtualMachine): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
    resource_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceGroups),
  }
}


export function cloudAzureIntegrationsVirtualMachineToHclTerraform(struct?: CloudAzureIntegrationsVirtualMachineOutputReference | CloudAzureIntegrationsVirtualMachine): any {
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
    resource_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAzureIntegrationsVirtualMachineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAzureIntegrationsVirtualMachine | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    if (this._resourceGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroups = this._resourceGroups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAzureIntegrationsVirtualMachine | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
      this._resourceGroups = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
      this._resourceGroups = value.resourceGroups;
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

  // resource_groups - computed: false, optional: true, required: false
  private _resourceGroups?: string[]; 
  public get resourceGroups() {
    return this.getListAttribute('resource_groups');
  }
  public set resourceGroups(value: string[]) {
    this._resourceGroups = value;
  }
  public resetResourceGroups() {
    this._resourceGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupsInput() {
    return this._resourceGroups;
  }
}
export interface CloudAzureIntegrationsVirtualNetworks {
  /**
  * The data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}
  */
  readonly resourceGroups?: string[];
}

export function cloudAzureIntegrationsVirtualNetworksToTerraform(struct?: CloudAzureIntegrationsVirtualNetworksOutputReference | CloudAzureIntegrationsVirtualNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
    resource_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceGroups),
  }
}


export function cloudAzureIntegrationsVirtualNetworksToHclTerraform(struct?: CloudAzureIntegrationsVirtualNetworksOutputReference | CloudAzureIntegrationsVirtualNetworks): any {
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
    resource_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAzureIntegrationsVirtualNetworksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAzureIntegrationsVirtualNetworks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    if (this._resourceGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroups = this._resourceGroups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAzureIntegrationsVirtualNetworks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
      this._resourceGroups = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
      this._resourceGroups = value.resourceGroups;
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

  // resource_groups - computed: false, optional: true, required: false
  private _resourceGroups?: string[]; 
  public get resourceGroups() {
    return this.getListAttribute('resource_groups');
  }
  public set resourceGroups(value: string[]) {
    this._resourceGroups = value;
  }
  public resetResourceGroups() {
    this._resourceGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupsInput() {
    return this._resourceGroups;
  }
}
export interface CloudAzureIntegrationsVms {
  /**
  * The data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}
  */
  readonly resourceGroups?: string[];
}

export function cloudAzureIntegrationsVmsToTerraform(struct?: CloudAzureIntegrationsVmsOutputReference | CloudAzureIntegrationsVms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
    resource_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceGroups),
  }
}


export function cloudAzureIntegrationsVmsToHclTerraform(struct?: CloudAzureIntegrationsVmsOutputReference | CloudAzureIntegrationsVms): any {
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
    resource_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAzureIntegrationsVmsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAzureIntegrationsVms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    if (this._resourceGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroups = this._resourceGroups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAzureIntegrationsVms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
      this._resourceGroups = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
      this._resourceGroups = value.resourceGroups;
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

  // resource_groups - computed: false, optional: true, required: false
  private _resourceGroups?: string[]; 
  public get resourceGroups() {
    return this.getListAttribute('resource_groups');
  }
  public set resourceGroups(value: string[]) {
    this._resourceGroups = value;
  }
  public resetResourceGroups() {
    this._resourceGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupsInput() {
    return this._resourceGroups;
  }
}
export interface CloudAzureIntegrationsVpnGateway {
  /**
  * The data polling interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: number;
  /**
  * Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}
  */
  readonly resourceGroups?: string[];
}

export function cloudAzureIntegrationsVpnGatewayToTerraform(struct?: CloudAzureIntegrationsVpnGatewayOutputReference | CloudAzureIntegrationsVpnGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics_polling_interval: cdktf.numberToTerraform(struct!.metricsPollingInterval),
    resource_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceGroups),
  }
}


export function cloudAzureIntegrationsVpnGatewayToHclTerraform(struct?: CloudAzureIntegrationsVpnGatewayOutputReference | CloudAzureIntegrationsVpnGateway): any {
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
    resource_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAzureIntegrationsVpnGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAzureIntegrationsVpnGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPollingInterval = this._metricsPollingInterval;
    }
    if (this._resourceGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroups = this._resourceGroups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAzureIntegrationsVpnGateway | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricsPollingInterval = undefined;
      this._resourceGroups = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricsPollingInterval = value.metricsPollingInterval;
      this._resourceGroups = value.resourceGroups;
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

  // resource_groups - computed: false, optional: true, required: false
  private _resourceGroups?: string[]; 
  public get resourceGroups() {
    return this.getListAttribute('resource_groups');
  }
  public set resourceGroups(value: string[]) {
    this._resourceGroups = value;
  }
  public resetResourceGroups() {
    this._resourceGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupsInput() {
    return this._resourceGroups;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations newrelic_cloud_azure_integrations}
*/
export class CloudAzureIntegrations extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_cloud_azure_integrations";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudAzureIntegrations resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudAzureIntegrations to import
  * @param importFromId The id of the existing CloudAzureIntegrations that should be imported. Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudAzureIntegrations to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "newrelic_cloud_azure_integrations", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/cloud_azure_integrations newrelic_cloud_azure_integrations} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudAzureIntegrationsConfig
  */
  public constructor(scope: Construct, id: string, config: CloudAzureIntegrationsConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_cloud_azure_integrations',
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
    this._apiManagement.internalValue = config.apiManagement;
    this._appGateway.internalValue = config.appGateway;
    this._appService.internalValue = config.appService;
    this._containers.internalValue = config.containers;
    this._cosmosDb.internalValue = config.cosmosDb;
    this._costManagement.internalValue = config.costManagement;
    this._dataFactory.internalValue = config.dataFactory;
    this._eventHub.internalValue = config.eventHub;
    this._expressRoute.internalValue = config.expressRoute;
    this._firewalls.internalValue = config.firewalls;
    this._frontDoor.internalValue = config.frontDoor;
    this._functions.internalValue = config.functions;
    this._keyVault.internalValue = config.keyVault;
    this._loadBalancer.internalValue = config.loadBalancer;
    this._logicApps.internalValue = config.logicApps;
    this._machineLearning.internalValue = config.machineLearning;
    this._mariaDb.internalValue = config.mariaDb;
    this._monitor.internalValue = config.monitor;
    this._mysql.internalValue = config.mysql;
    this._mysqlFlexible.internalValue = config.mysqlFlexible;
    this._postgresql.internalValue = config.postgresql;
    this._postgresqlFlexible.internalValue = config.postgresqlFlexible;
    this._powerBiDedicated.internalValue = config.powerBiDedicated;
    this._redisCache.internalValue = config.redisCache;
    this._serviceBus.internalValue = config.serviceBus;
    this._sql.internalValue = config.sql;
    this._sqlManaged.internalValue = config.sqlManaged;
    this._storage.internalValue = config.storage;
    this._virtualMachine.internalValue = config.virtualMachine;
    this._virtualNetworks.internalValue = config.virtualNetworks;
    this._vms.internalValue = config.vms;
    this._vpnGateway.internalValue = config.vpnGateway;
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

  // api_management - computed: false, optional: true, required: false
  private _apiManagement = new CloudAzureIntegrationsApiManagementOutputReference(this, "api_management");
  public get apiManagement() {
    return this._apiManagement;
  }
  public putApiManagement(value: CloudAzureIntegrationsApiManagement) {
    this._apiManagement.internalValue = value;
  }
  public resetApiManagement() {
    this._apiManagement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiManagementInput() {
    return this._apiManagement.internalValue;
  }

  // app_gateway - computed: false, optional: true, required: false
  private _appGateway = new CloudAzureIntegrationsAppGatewayOutputReference(this, "app_gateway");
  public get appGateway() {
    return this._appGateway;
  }
  public putAppGateway(value: CloudAzureIntegrationsAppGateway) {
    this._appGateway.internalValue = value;
  }
  public resetAppGateway() {
    this._appGateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appGatewayInput() {
    return this._appGateway.internalValue;
  }

  // app_service - computed: false, optional: true, required: false
  private _appService = new CloudAzureIntegrationsAppServiceOutputReference(this, "app_service");
  public get appService() {
    return this._appService;
  }
  public putAppService(value: CloudAzureIntegrationsAppService) {
    this._appService.internalValue = value;
  }
  public resetAppService() {
    this._appService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appServiceInput() {
    return this._appService.internalValue;
  }

  // containers - computed: false, optional: true, required: false
  private _containers = new CloudAzureIntegrationsContainersOutputReference(this, "containers");
  public get containers() {
    return this._containers;
  }
  public putContainers(value: CloudAzureIntegrationsContainers) {
    this._containers.internalValue = value;
  }
  public resetContainers() {
    this._containers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containersInput() {
    return this._containers.internalValue;
  }

  // cosmos_db - computed: false, optional: true, required: false
  private _cosmosDb = new CloudAzureIntegrationsCosmosDbOutputReference(this, "cosmos_db");
  public get cosmosDb() {
    return this._cosmosDb;
  }
  public putCosmosDb(value: CloudAzureIntegrationsCosmosDb) {
    this._cosmosDb.internalValue = value;
  }
  public resetCosmosDb() {
    this._cosmosDb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosmosDbInput() {
    return this._cosmosDb.internalValue;
  }

  // cost_management - computed: false, optional: true, required: false
  private _costManagement = new CloudAzureIntegrationsCostManagementOutputReference(this, "cost_management");
  public get costManagement() {
    return this._costManagement;
  }
  public putCostManagement(value: CloudAzureIntegrationsCostManagement) {
    this._costManagement.internalValue = value;
  }
  public resetCostManagement() {
    this._costManagement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costManagementInput() {
    return this._costManagement.internalValue;
  }

  // data_factory - computed: false, optional: true, required: false
  private _dataFactory = new CloudAzureIntegrationsDataFactoryOutputReference(this, "data_factory");
  public get dataFactory() {
    return this._dataFactory;
  }
  public putDataFactory(value: CloudAzureIntegrationsDataFactory) {
    this._dataFactory.internalValue = value;
  }
  public resetDataFactory() {
    this._dataFactory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFactoryInput() {
    return this._dataFactory.internalValue;
  }

  // event_hub - computed: false, optional: true, required: false
  private _eventHub = new CloudAzureIntegrationsEventHubOutputReference(this, "event_hub");
  public get eventHub() {
    return this._eventHub;
  }
  public putEventHub(value: CloudAzureIntegrationsEventHub) {
    this._eventHub.internalValue = value;
  }
  public resetEventHub() {
    this._eventHub.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventHubInput() {
    return this._eventHub.internalValue;
  }

  // express_route - computed: false, optional: true, required: false
  private _expressRoute = new CloudAzureIntegrationsExpressRouteOutputReference(this, "express_route");
  public get expressRoute() {
    return this._expressRoute;
  }
  public putExpressRoute(value: CloudAzureIntegrationsExpressRoute) {
    this._expressRoute.internalValue = value;
  }
  public resetExpressRoute() {
    this._expressRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressRouteInput() {
    return this._expressRoute.internalValue;
  }

  // firewalls - computed: false, optional: true, required: false
  private _firewalls = new CloudAzureIntegrationsFirewallsOutputReference(this, "firewalls");
  public get firewalls() {
    return this._firewalls;
  }
  public putFirewalls(value: CloudAzureIntegrationsFirewalls) {
    this._firewalls.internalValue = value;
  }
  public resetFirewalls() {
    this._firewalls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallsInput() {
    return this._firewalls.internalValue;
  }

  // front_door - computed: false, optional: true, required: false
  private _frontDoor = new CloudAzureIntegrationsFrontDoorOutputReference(this, "front_door");
  public get frontDoor() {
    return this._frontDoor;
  }
  public putFrontDoor(value: CloudAzureIntegrationsFrontDoor) {
    this._frontDoor.internalValue = value;
  }
  public resetFrontDoor() {
    this._frontDoor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frontDoorInput() {
    return this._frontDoor.internalValue;
  }

  // functions - computed: false, optional: true, required: false
  private _functions = new CloudAzureIntegrationsFunctionsOutputReference(this, "functions");
  public get functions() {
    return this._functions;
  }
  public putFunctions(value: CloudAzureIntegrationsFunctions) {
    this._functions.internalValue = value;
  }
  public resetFunctions() {
    this._functions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionsInput() {
    return this._functions.internalValue;
  }

  // key_vault - computed: false, optional: true, required: false
  private _keyVault = new CloudAzureIntegrationsKeyVaultOutputReference(this, "key_vault");
  public get keyVault() {
    return this._keyVault;
  }
  public putKeyVault(value: CloudAzureIntegrationsKeyVault) {
    this._keyVault.internalValue = value;
  }
  public resetKeyVault() {
    this._keyVault.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultInput() {
    return this._keyVault.internalValue;
  }

  // load_balancer - computed: false, optional: true, required: false
  private _loadBalancer = new CloudAzureIntegrationsLoadBalancerOutputReference(this, "load_balancer");
  public get loadBalancer() {
    return this._loadBalancer;
  }
  public putLoadBalancer(value: CloudAzureIntegrationsLoadBalancer) {
    this._loadBalancer.internalValue = value;
  }
  public resetLoadBalancer() {
    this._loadBalancer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerInput() {
    return this._loadBalancer.internalValue;
  }

  // logic_apps - computed: false, optional: true, required: false
  private _logicApps = new CloudAzureIntegrationsLogicAppsOutputReference(this, "logic_apps");
  public get logicApps() {
    return this._logicApps;
  }
  public putLogicApps(value: CloudAzureIntegrationsLogicApps) {
    this._logicApps.internalValue = value;
  }
  public resetLogicApps() {
    this._logicApps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicAppsInput() {
    return this._logicApps.internalValue;
  }

  // machine_learning - computed: false, optional: true, required: false
  private _machineLearning = new CloudAzureIntegrationsMachineLearningOutputReference(this, "machine_learning");
  public get machineLearning() {
    return this._machineLearning;
  }
  public putMachineLearning(value: CloudAzureIntegrationsMachineLearning) {
    this._machineLearning.internalValue = value;
  }
  public resetMachineLearning() {
    this._machineLearning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineLearningInput() {
    return this._machineLearning.internalValue;
  }

  // maria_db - computed: false, optional: true, required: false
  private _mariaDb = new CloudAzureIntegrationsMariaDbOutputReference(this, "maria_db");
  public get mariaDb() {
    return this._mariaDb;
  }
  public putMariaDb(value: CloudAzureIntegrationsMariaDb) {
    this._mariaDb.internalValue = value;
  }
  public resetMariaDb() {
    this._mariaDb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mariaDbInput() {
    return this._mariaDb.internalValue;
  }

  // monitor - computed: false, optional: true, required: false
  private _monitor = new CloudAzureIntegrationsMonitorOutputReference(this, "monitor");
  public get monitor() {
    return this._monitor;
  }
  public putMonitor(value: CloudAzureIntegrationsMonitor) {
    this._monitor.internalValue = value;
  }
  public resetMonitor() {
    this._monitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor.internalValue;
  }

  // mysql - computed: false, optional: true, required: false
  private _mysql = new CloudAzureIntegrationsMysqlOutputReference(this, "mysql");
  public get mysql() {
    return this._mysql;
  }
  public putMysql(value: CloudAzureIntegrationsMysql) {
    this._mysql.internalValue = value;
  }
  public resetMysql() {
    this._mysql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlInput() {
    return this._mysql.internalValue;
  }

  // mysql_flexible - computed: false, optional: true, required: false
  private _mysqlFlexible = new CloudAzureIntegrationsMysqlFlexibleOutputReference(this, "mysql_flexible");
  public get mysqlFlexible() {
    return this._mysqlFlexible;
  }
  public putMysqlFlexible(value: CloudAzureIntegrationsMysqlFlexible) {
    this._mysqlFlexible.internalValue = value;
  }
  public resetMysqlFlexible() {
    this._mysqlFlexible.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlFlexibleInput() {
    return this._mysqlFlexible.internalValue;
  }

  // postgresql - computed: false, optional: true, required: false
  private _postgresql = new CloudAzureIntegrationsPostgresqlOutputReference(this, "postgresql");
  public get postgresql() {
    return this._postgresql;
  }
  public putPostgresql(value: CloudAzureIntegrationsPostgresql) {
    this._postgresql.internalValue = value;
  }
  public resetPostgresql() {
    this._postgresql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlInput() {
    return this._postgresql.internalValue;
  }

  // postgresql_flexible - computed: false, optional: true, required: false
  private _postgresqlFlexible = new CloudAzureIntegrationsPostgresqlFlexibleOutputReference(this, "postgresql_flexible");
  public get postgresqlFlexible() {
    return this._postgresqlFlexible;
  }
  public putPostgresqlFlexible(value: CloudAzureIntegrationsPostgresqlFlexible) {
    this._postgresqlFlexible.internalValue = value;
  }
  public resetPostgresqlFlexible() {
    this._postgresqlFlexible.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlFlexibleInput() {
    return this._postgresqlFlexible.internalValue;
  }

  // power_bi_dedicated - computed: false, optional: true, required: false
  private _powerBiDedicated = new CloudAzureIntegrationsPowerBiDedicatedOutputReference(this, "power_bi_dedicated");
  public get powerBiDedicated() {
    return this._powerBiDedicated;
  }
  public putPowerBiDedicated(value: CloudAzureIntegrationsPowerBiDedicated) {
    this._powerBiDedicated.internalValue = value;
  }
  public resetPowerBiDedicated() {
    this._powerBiDedicated.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerBiDedicatedInput() {
    return this._powerBiDedicated.internalValue;
  }

  // redis_cache - computed: false, optional: true, required: false
  private _redisCache = new CloudAzureIntegrationsRedisCacheOutputReference(this, "redis_cache");
  public get redisCache() {
    return this._redisCache;
  }
  public putRedisCache(value: CloudAzureIntegrationsRedisCache) {
    this._redisCache.internalValue = value;
  }
  public resetRedisCache() {
    this._redisCache.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisCacheInput() {
    return this._redisCache.internalValue;
  }

  // service_bus - computed: false, optional: true, required: false
  private _serviceBus = new CloudAzureIntegrationsServiceBusOutputReference(this, "service_bus");
  public get serviceBus() {
    return this._serviceBus;
  }
  public putServiceBus(value: CloudAzureIntegrationsServiceBus) {
    this._serviceBus.internalValue = value;
  }
  public resetServiceBus() {
    this._serviceBus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceBusInput() {
    return this._serviceBus.internalValue;
  }

  // sql - computed: false, optional: true, required: false
  private _sql = new CloudAzureIntegrationsSqlOutputReference(this, "sql");
  public get sql() {
    return this._sql;
  }
  public putSql(value: CloudAzureIntegrationsSql) {
    this._sql.internalValue = value;
  }
  public resetSql() {
    this._sql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlInput() {
    return this._sql.internalValue;
  }

  // sql_managed - computed: false, optional: true, required: false
  private _sqlManaged = new CloudAzureIntegrationsSqlManagedOutputReference(this, "sql_managed");
  public get sqlManaged() {
    return this._sqlManaged;
  }
  public putSqlManaged(value: CloudAzureIntegrationsSqlManaged) {
    this._sqlManaged.internalValue = value;
  }
  public resetSqlManaged() {
    this._sqlManaged.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlManagedInput() {
    return this._sqlManaged.internalValue;
  }

  // storage - computed: false, optional: true, required: false
  private _storage = new CloudAzureIntegrationsStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: CloudAzureIntegrationsStorage) {
    this._storage.internalValue = value;
  }
  public resetStorage() {
    this._storage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }

  // virtual_machine - computed: false, optional: true, required: false
  private _virtualMachine = new CloudAzureIntegrationsVirtualMachineOutputReference(this, "virtual_machine");
  public get virtualMachine() {
    return this._virtualMachine;
  }
  public putVirtualMachine(value: CloudAzureIntegrationsVirtualMachine) {
    this._virtualMachine.internalValue = value;
  }
  public resetVirtualMachine() {
    this._virtualMachine.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMachineInput() {
    return this._virtualMachine.internalValue;
  }

  // virtual_networks - computed: false, optional: true, required: false
  private _virtualNetworks = new CloudAzureIntegrationsVirtualNetworksOutputReference(this, "virtual_networks");
  public get virtualNetworks() {
    return this._virtualNetworks;
  }
  public putVirtualNetworks(value: CloudAzureIntegrationsVirtualNetworks) {
    this._virtualNetworks.internalValue = value;
  }
  public resetVirtualNetworks() {
    this._virtualNetworks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworksInput() {
    return this._virtualNetworks.internalValue;
  }

  // vms - computed: false, optional: true, required: false
  private _vms = new CloudAzureIntegrationsVmsOutputReference(this, "vms");
  public get vms() {
    return this._vms;
  }
  public putVms(value: CloudAzureIntegrationsVms) {
    this._vms.internalValue = value;
  }
  public resetVms() {
    this._vms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmsInput() {
    return this._vms.internalValue;
  }

  // vpn_gateway - computed: false, optional: true, required: false
  private _vpnGateway = new CloudAzureIntegrationsVpnGatewayOutputReference(this, "vpn_gateway");
  public get vpnGateway() {
    return this._vpnGateway;
  }
  public putVpnGateway(value: CloudAzureIntegrationsVpnGateway) {
    this._vpnGateway.internalValue = value;
  }
  public resetVpnGateway() {
    this._vpnGateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnGatewayInput() {
    return this._vpnGateway.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.numberToTerraform(this._accountId),
      id: cdktf.stringToTerraform(this._id),
      linked_account_id: cdktf.numberToTerraform(this._linkedAccountId),
      api_management: cloudAzureIntegrationsApiManagementToTerraform(this._apiManagement.internalValue),
      app_gateway: cloudAzureIntegrationsAppGatewayToTerraform(this._appGateway.internalValue),
      app_service: cloudAzureIntegrationsAppServiceToTerraform(this._appService.internalValue),
      containers: cloudAzureIntegrationsContainersToTerraform(this._containers.internalValue),
      cosmos_db: cloudAzureIntegrationsCosmosDbToTerraform(this._cosmosDb.internalValue),
      cost_management: cloudAzureIntegrationsCostManagementToTerraform(this._costManagement.internalValue),
      data_factory: cloudAzureIntegrationsDataFactoryToTerraform(this._dataFactory.internalValue),
      event_hub: cloudAzureIntegrationsEventHubToTerraform(this._eventHub.internalValue),
      express_route: cloudAzureIntegrationsExpressRouteToTerraform(this._expressRoute.internalValue),
      firewalls: cloudAzureIntegrationsFirewallsToTerraform(this._firewalls.internalValue),
      front_door: cloudAzureIntegrationsFrontDoorToTerraform(this._frontDoor.internalValue),
      functions: cloudAzureIntegrationsFunctionsToTerraform(this._functions.internalValue),
      key_vault: cloudAzureIntegrationsKeyVaultToTerraform(this._keyVault.internalValue),
      load_balancer: cloudAzureIntegrationsLoadBalancerToTerraform(this._loadBalancer.internalValue),
      logic_apps: cloudAzureIntegrationsLogicAppsToTerraform(this._logicApps.internalValue),
      machine_learning: cloudAzureIntegrationsMachineLearningToTerraform(this._machineLearning.internalValue),
      maria_db: cloudAzureIntegrationsMariaDbToTerraform(this._mariaDb.internalValue),
      monitor: cloudAzureIntegrationsMonitorToTerraform(this._monitor.internalValue),
      mysql: cloudAzureIntegrationsMysqlToTerraform(this._mysql.internalValue),
      mysql_flexible: cloudAzureIntegrationsMysqlFlexibleToTerraform(this._mysqlFlexible.internalValue),
      postgresql: cloudAzureIntegrationsPostgresqlToTerraform(this._postgresql.internalValue),
      postgresql_flexible: cloudAzureIntegrationsPostgresqlFlexibleToTerraform(this._postgresqlFlexible.internalValue),
      power_bi_dedicated: cloudAzureIntegrationsPowerBiDedicatedToTerraform(this._powerBiDedicated.internalValue),
      redis_cache: cloudAzureIntegrationsRedisCacheToTerraform(this._redisCache.internalValue),
      service_bus: cloudAzureIntegrationsServiceBusToTerraform(this._serviceBus.internalValue),
      sql: cloudAzureIntegrationsSqlToTerraform(this._sql.internalValue),
      sql_managed: cloudAzureIntegrationsSqlManagedToTerraform(this._sqlManaged.internalValue),
      storage: cloudAzureIntegrationsStorageToTerraform(this._storage.internalValue),
      virtual_machine: cloudAzureIntegrationsVirtualMachineToTerraform(this._virtualMachine.internalValue),
      virtual_networks: cloudAzureIntegrationsVirtualNetworksToTerraform(this._virtualNetworks.internalValue),
      vms: cloudAzureIntegrationsVmsToTerraform(this._vms.internalValue),
      vpn_gateway: cloudAzureIntegrationsVpnGatewayToTerraform(this._vpnGateway.internalValue),
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
      api_management: {
        value: cloudAzureIntegrationsApiManagementToHclTerraform(this._apiManagement.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAzureIntegrationsApiManagementList",
      },
      app_gateway: {
        value: cloudAzureIntegrationsAppGatewayToHclTerraform(this._appGateway.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAzureIntegrationsAppGatewayList",
      },
      app_service: {
        value: cloudAzureIntegrationsAppServiceToHclTerraform(this._appService.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAzureIntegrationsAppServiceList",
      },
      containers: {
        value: cloudAzureIntegrationsContainersToHclTerraform(this._containers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAzureIntegrationsContainersList",
      },
      cosmos_db: {
        value: cloudAzureIntegrationsCosmosDbToHclTerraform(this._cosmosDb.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAzureIntegrationsCosmosDbList",
      },
      cost_management: {
        value: cloudAzureIntegrationsCostManagementToHclTerraform(this._costManagement.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAzureIntegrationsCostManagementList",
      },
      data_factory: {
        value: cloudAzureIntegrationsDataFactoryToHclTerraform(this._dataFactory.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAzureIntegrationsDataFactoryList",
      },
      event_hub: {
        value: cloudAzureIntegrationsEventHubToHclTerraform(this._eventHub.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAzureIntegrationsEventHubList",
      },
      express_route: {
        value: cloudAzureIntegrationsExpressRouteToHclTerraform(this._expressRoute.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAzureIntegrationsExpressRouteList",
      },
      firewalls: {
        value: cloudAzureIntegrationsFirewallsToHclTerraform(this._firewalls.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAzureIntegrationsFirewallsList",
      },
      front_door: {
        value: cloudAzureIntegrationsFrontDoorToHclTerraform(this._frontDoor.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAzureIntegrationsFrontDoorList",
      },
      functions: {
        value: cloudAzureIntegrationsFunctionsToHclTerraform(this._functions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAzureIntegrationsFunctionsList",
      },
      key_vault: {
        value: cloudAzureIntegrationsKeyVaultToHclTerraform(this._keyVault.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAzureIntegrationsKeyVaultList",
      },
      load_balancer: {
        value: cloudAzureIntegrationsLoadBalancerToHclTerraform(this._loadBalancer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAzureIntegrationsLoadBalancerList",
      },
      logic_apps: {
        value: cloudAzureIntegrationsLogicAppsToHclTerraform(this._logicApps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAzureIntegrationsLogicAppsList",
      },
      machine_learning: {
        value: cloudAzureIntegrationsMachineLearningToHclTerraform(this._machineLearning.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAzureIntegrationsMachineLearningList",
      },
      maria_db: {
        value: cloudAzureIntegrationsMariaDbToHclTerraform(this._mariaDb.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAzureIntegrationsMariaDbList",
      },
      monitor: {
        value: cloudAzureIntegrationsMonitorToHclTerraform(this._monitor.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAzureIntegrationsMonitorList",
      },
      mysql: {
        value: cloudAzureIntegrationsMysqlToHclTerraform(this._mysql.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAzureIntegrationsMysqlList",
      },
      mysql_flexible: {
        value: cloudAzureIntegrationsMysqlFlexibleToHclTerraform(this._mysqlFlexible.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAzureIntegrationsMysqlFlexibleList",
      },
      postgresql: {
        value: cloudAzureIntegrationsPostgresqlToHclTerraform(this._postgresql.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAzureIntegrationsPostgresqlList",
      },
      postgresql_flexible: {
        value: cloudAzureIntegrationsPostgresqlFlexibleToHclTerraform(this._postgresqlFlexible.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAzureIntegrationsPostgresqlFlexibleList",
      },
      power_bi_dedicated: {
        value: cloudAzureIntegrationsPowerBiDedicatedToHclTerraform(this._powerBiDedicated.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAzureIntegrationsPowerBiDedicatedList",
      },
      redis_cache: {
        value: cloudAzureIntegrationsRedisCacheToHclTerraform(this._redisCache.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAzureIntegrationsRedisCacheList",
      },
      service_bus: {
        value: cloudAzureIntegrationsServiceBusToHclTerraform(this._serviceBus.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAzureIntegrationsServiceBusList",
      },
      sql: {
        value: cloudAzureIntegrationsSqlToHclTerraform(this._sql.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAzureIntegrationsSqlList",
      },
      sql_managed: {
        value: cloudAzureIntegrationsSqlManagedToHclTerraform(this._sqlManaged.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAzureIntegrationsSqlManagedList",
      },
      storage: {
        value: cloudAzureIntegrationsStorageToHclTerraform(this._storage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAzureIntegrationsStorageList",
      },
      virtual_machine: {
        value: cloudAzureIntegrationsVirtualMachineToHclTerraform(this._virtualMachine.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAzureIntegrationsVirtualMachineList",
      },
      virtual_networks: {
        value: cloudAzureIntegrationsVirtualNetworksToHclTerraform(this._virtualNetworks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAzureIntegrationsVirtualNetworksList",
      },
      vms: {
        value: cloudAzureIntegrationsVmsToHclTerraform(this._vms.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAzureIntegrationsVmsList",
      },
      vpn_gateway: {
        value: cloudAzureIntegrationsVpnGatewayToHclTerraform(this._vpnGateway.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAzureIntegrationsVpnGatewayList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
