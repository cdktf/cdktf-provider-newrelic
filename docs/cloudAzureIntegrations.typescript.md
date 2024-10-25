# `cloudAzureIntegrations` Submodule <a name="`cloudAzureIntegrations` Submodule" id="@cdktf/provider-newrelic.cloudAzureIntegrations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudAzureIntegrations <a name="CloudAzureIntegrations" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations newrelic_cloud_azure_integrations}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

new cloudAzureIntegrations.CloudAzureIntegrations(scope: Construct, id: string, config: CloudAzureIntegrationsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig">CloudAzureIntegrationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig">CloudAzureIntegrationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putApiManagement">putApiManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putAppGateway">putAppGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putAppService">putAppService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putContainers">putContainers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putCosmosDb">putCosmosDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putCostManagement">putCostManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putDataFactory">putDataFactory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putEventHub">putEventHub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putExpressRoute">putExpressRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putFirewalls">putFirewalls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putFrontDoor">putFrontDoor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putFunctions">putFunctions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putKeyVault">putKeyVault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putLoadBalancer">putLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putLogicApps">putLogicApps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putMachineLearning">putMachineLearning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putMariaDb">putMariaDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putMonitor">putMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putMysql">putMysql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putMysqlFlexible">putMysqlFlexible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putPostgresql">putPostgresql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putPostgresqlFlexible">putPostgresqlFlexible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putPowerBiDedicated">putPowerBiDedicated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putRedisCache">putRedisCache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putServiceBus">putServiceBus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putSql">putSql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putSqlManaged">putSqlManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putStorage">putStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putVirtualMachine">putVirtualMachine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putVirtualNetworks">putVirtualNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putVms">putVms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putVpnGateway">putVpnGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetApiManagement">resetApiManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetAppGateway">resetAppGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetAppService">resetAppService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetContainers">resetContainers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetCosmosDb">resetCosmosDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetCostManagement">resetCostManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetDataFactory">resetDataFactory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetEventHub">resetEventHub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetExpressRoute">resetExpressRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetFirewalls">resetFirewalls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetFrontDoor">resetFrontDoor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetFunctions">resetFunctions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetKeyVault">resetKeyVault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetLoadBalancer">resetLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetLogicApps">resetLogicApps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetMachineLearning">resetMachineLearning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetMariaDb">resetMariaDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetMonitor">resetMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetMysql">resetMysql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetMysqlFlexible">resetMysqlFlexible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetPostgresql">resetPostgresql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetPostgresqlFlexible">resetPostgresqlFlexible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetPowerBiDedicated">resetPowerBiDedicated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetRedisCache">resetRedisCache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetServiceBus">resetServiceBus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetSql">resetSql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetSqlManaged">resetSqlManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetStorage">resetStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetVirtualMachine">resetVirtualMachine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetVirtualNetworks">resetVirtualNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetVms">resetVms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetVpnGateway">resetVpnGateway</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putApiManagement` <a name="putApiManagement" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putApiManagement"></a>

```typescript
public putApiManagement(value: CloudAzureIntegrationsApiManagement): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putApiManagement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagement">CloudAzureIntegrationsApiManagement</a>

---

##### `putAppGateway` <a name="putAppGateway" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putAppGateway"></a>

```typescript
public putAppGateway(value: CloudAzureIntegrationsAppGateway): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putAppGateway.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGateway">CloudAzureIntegrationsAppGateway</a>

---

##### `putAppService` <a name="putAppService" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putAppService"></a>

```typescript
public putAppService(value: CloudAzureIntegrationsAppService): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putAppService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppService">CloudAzureIntegrationsAppService</a>

---

##### `putContainers` <a name="putContainers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putContainers"></a>

```typescript
public putContainers(value: CloudAzureIntegrationsContainers): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putContainers.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainers">CloudAzureIntegrationsContainers</a>

---

##### `putCosmosDb` <a name="putCosmosDb" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putCosmosDb"></a>

```typescript
public putCosmosDb(value: CloudAzureIntegrationsCosmosDb): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putCosmosDb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDb">CloudAzureIntegrationsCosmosDb</a>

---

##### `putCostManagement` <a name="putCostManagement" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putCostManagement"></a>

```typescript
public putCostManagement(value: CloudAzureIntegrationsCostManagement): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putCostManagement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagement">CloudAzureIntegrationsCostManagement</a>

---

##### `putDataFactory` <a name="putDataFactory" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putDataFactory"></a>

```typescript
public putDataFactory(value: CloudAzureIntegrationsDataFactory): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putDataFactory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactory">CloudAzureIntegrationsDataFactory</a>

---

##### `putEventHub` <a name="putEventHub" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putEventHub"></a>

```typescript
public putEventHub(value: CloudAzureIntegrationsEventHub): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putEventHub.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHub">CloudAzureIntegrationsEventHub</a>

---

##### `putExpressRoute` <a name="putExpressRoute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putExpressRoute"></a>

```typescript
public putExpressRoute(value: CloudAzureIntegrationsExpressRoute): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putExpressRoute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRoute">CloudAzureIntegrationsExpressRoute</a>

---

##### `putFirewalls` <a name="putFirewalls" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putFirewalls"></a>

```typescript
public putFirewalls(value: CloudAzureIntegrationsFirewalls): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putFirewalls.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewalls">CloudAzureIntegrationsFirewalls</a>

---

##### `putFrontDoor` <a name="putFrontDoor" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putFrontDoor"></a>

```typescript
public putFrontDoor(value: CloudAzureIntegrationsFrontDoor): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putFrontDoor.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoor">CloudAzureIntegrationsFrontDoor</a>

---

##### `putFunctions` <a name="putFunctions" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putFunctions"></a>

```typescript
public putFunctions(value: CloudAzureIntegrationsFunctions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putFunctions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctions">CloudAzureIntegrationsFunctions</a>

---

##### `putKeyVault` <a name="putKeyVault" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putKeyVault"></a>

```typescript
public putKeyVault(value: CloudAzureIntegrationsKeyVault): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putKeyVault.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVault">CloudAzureIntegrationsKeyVault</a>

---

##### `putLoadBalancer` <a name="putLoadBalancer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putLoadBalancer"></a>

```typescript
public putLoadBalancer(value: CloudAzureIntegrationsLoadBalancer): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putLoadBalancer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancer">CloudAzureIntegrationsLoadBalancer</a>

---

##### `putLogicApps` <a name="putLogicApps" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putLogicApps"></a>

```typescript
public putLogicApps(value: CloudAzureIntegrationsLogicApps): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putLogicApps.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicApps">CloudAzureIntegrationsLogicApps</a>

---

##### `putMachineLearning` <a name="putMachineLearning" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putMachineLearning"></a>

```typescript
public putMachineLearning(value: CloudAzureIntegrationsMachineLearning): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putMachineLearning.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearning">CloudAzureIntegrationsMachineLearning</a>

---

##### `putMariaDb` <a name="putMariaDb" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putMariaDb"></a>

```typescript
public putMariaDb(value: CloudAzureIntegrationsMariaDb): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putMariaDb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDb">CloudAzureIntegrationsMariaDb</a>

---

##### `putMonitor` <a name="putMonitor" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putMonitor"></a>

```typescript
public putMonitor(value: CloudAzureIntegrationsMonitor): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putMonitor.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitor">CloudAzureIntegrationsMonitor</a>

---

##### `putMysql` <a name="putMysql" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putMysql"></a>

```typescript
public putMysql(value: CloudAzureIntegrationsMysql): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putMysql.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysql">CloudAzureIntegrationsMysql</a>

---

##### `putMysqlFlexible` <a name="putMysqlFlexible" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putMysqlFlexible"></a>

```typescript
public putMysqlFlexible(value: CloudAzureIntegrationsMysqlFlexible): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putMysqlFlexible.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexible">CloudAzureIntegrationsMysqlFlexible</a>

---

##### `putPostgresql` <a name="putPostgresql" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putPostgresql"></a>

```typescript
public putPostgresql(value: CloudAzureIntegrationsPostgresql): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putPostgresql.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresql">CloudAzureIntegrationsPostgresql</a>

---

##### `putPostgresqlFlexible` <a name="putPostgresqlFlexible" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putPostgresqlFlexible"></a>

```typescript
public putPostgresqlFlexible(value: CloudAzureIntegrationsPostgresqlFlexible): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putPostgresqlFlexible.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexible">CloudAzureIntegrationsPostgresqlFlexible</a>

---

##### `putPowerBiDedicated` <a name="putPowerBiDedicated" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putPowerBiDedicated"></a>

```typescript
public putPowerBiDedicated(value: CloudAzureIntegrationsPowerBiDedicated): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putPowerBiDedicated.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicated">CloudAzureIntegrationsPowerBiDedicated</a>

---

##### `putRedisCache` <a name="putRedisCache" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putRedisCache"></a>

```typescript
public putRedisCache(value: CloudAzureIntegrationsRedisCache): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putRedisCache.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCache">CloudAzureIntegrationsRedisCache</a>

---

##### `putServiceBus` <a name="putServiceBus" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putServiceBus"></a>

```typescript
public putServiceBus(value: CloudAzureIntegrationsServiceBus): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putServiceBus.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBus">CloudAzureIntegrationsServiceBus</a>

---

##### `putSql` <a name="putSql" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putSql"></a>

```typescript
public putSql(value: CloudAzureIntegrationsSql): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putSql.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSql">CloudAzureIntegrationsSql</a>

---

##### `putSqlManaged` <a name="putSqlManaged" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putSqlManaged"></a>

```typescript
public putSqlManaged(value: CloudAzureIntegrationsSqlManaged): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putSqlManaged.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManaged">CloudAzureIntegrationsSqlManaged</a>

---

##### `putStorage` <a name="putStorage" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putStorage"></a>

```typescript
public putStorage(value: CloudAzureIntegrationsStorage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putStorage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorage">CloudAzureIntegrationsStorage</a>

---

##### `putVirtualMachine` <a name="putVirtualMachine" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putVirtualMachine"></a>

```typescript
public putVirtualMachine(value: CloudAzureIntegrationsVirtualMachine): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putVirtualMachine.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachine">CloudAzureIntegrationsVirtualMachine</a>

---

##### `putVirtualNetworks` <a name="putVirtualNetworks" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putVirtualNetworks"></a>

```typescript
public putVirtualNetworks(value: CloudAzureIntegrationsVirtualNetworks): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putVirtualNetworks.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworks">CloudAzureIntegrationsVirtualNetworks</a>

---

##### `putVms` <a name="putVms" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putVms"></a>

```typescript
public putVms(value: CloudAzureIntegrationsVms): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putVms.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVms">CloudAzureIntegrationsVms</a>

---

##### `putVpnGateway` <a name="putVpnGateway" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putVpnGateway"></a>

```typescript
public putVpnGateway(value: CloudAzureIntegrationsVpnGateway): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putVpnGateway.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGateway">CloudAzureIntegrationsVpnGateway</a>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetApiManagement` <a name="resetApiManagement" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetApiManagement"></a>

```typescript
public resetApiManagement(): void
```

##### `resetAppGateway` <a name="resetAppGateway" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetAppGateway"></a>

```typescript
public resetAppGateway(): void
```

##### `resetAppService` <a name="resetAppService" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetAppService"></a>

```typescript
public resetAppService(): void
```

##### `resetContainers` <a name="resetContainers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetContainers"></a>

```typescript
public resetContainers(): void
```

##### `resetCosmosDb` <a name="resetCosmosDb" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetCosmosDb"></a>

```typescript
public resetCosmosDb(): void
```

##### `resetCostManagement` <a name="resetCostManagement" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetCostManagement"></a>

```typescript
public resetCostManagement(): void
```

##### `resetDataFactory` <a name="resetDataFactory" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetDataFactory"></a>

```typescript
public resetDataFactory(): void
```

##### `resetEventHub` <a name="resetEventHub" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetEventHub"></a>

```typescript
public resetEventHub(): void
```

##### `resetExpressRoute` <a name="resetExpressRoute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetExpressRoute"></a>

```typescript
public resetExpressRoute(): void
```

##### `resetFirewalls` <a name="resetFirewalls" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetFirewalls"></a>

```typescript
public resetFirewalls(): void
```

##### `resetFrontDoor` <a name="resetFrontDoor" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetFrontDoor"></a>

```typescript
public resetFrontDoor(): void
```

##### `resetFunctions` <a name="resetFunctions" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetFunctions"></a>

```typescript
public resetFunctions(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKeyVault` <a name="resetKeyVault" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetKeyVault"></a>

```typescript
public resetKeyVault(): void
```

##### `resetLoadBalancer` <a name="resetLoadBalancer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetLoadBalancer"></a>

```typescript
public resetLoadBalancer(): void
```

##### `resetLogicApps` <a name="resetLogicApps" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetLogicApps"></a>

```typescript
public resetLogicApps(): void
```

##### `resetMachineLearning` <a name="resetMachineLearning" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetMachineLearning"></a>

```typescript
public resetMachineLearning(): void
```

##### `resetMariaDb` <a name="resetMariaDb" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetMariaDb"></a>

```typescript
public resetMariaDb(): void
```

##### `resetMonitor` <a name="resetMonitor" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetMonitor"></a>

```typescript
public resetMonitor(): void
```

##### `resetMysql` <a name="resetMysql" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetMysql"></a>

```typescript
public resetMysql(): void
```

##### `resetMysqlFlexible` <a name="resetMysqlFlexible" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetMysqlFlexible"></a>

```typescript
public resetMysqlFlexible(): void
```

##### `resetPostgresql` <a name="resetPostgresql" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetPostgresql"></a>

```typescript
public resetPostgresql(): void
```

##### `resetPostgresqlFlexible` <a name="resetPostgresqlFlexible" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetPostgresqlFlexible"></a>

```typescript
public resetPostgresqlFlexible(): void
```

##### `resetPowerBiDedicated` <a name="resetPowerBiDedicated" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetPowerBiDedicated"></a>

```typescript
public resetPowerBiDedicated(): void
```

##### `resetRedisCache` <a name="resetRedisCache" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetRedisCache"></a>

```typescript
public resetRedisCache(): void
```

##### `resetServiceBus` <a name="resetServiceBus" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetServiceBus"></a>

```typescript
public resetServiceBus(): void
```

##### `resetSql` <a name="resetSql" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetSql"></a>

```typescript
public resetSql(): void
```

##### `resetSqlManaged` <a name="resetSqlManaged" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetSqlManaged"></a>

```typescript
public resetSqlManaged(): void
```

##### `resetStorage` <a name="resetStorage" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetStorage"></a>

```typescript
public resetStorage(): void
```

##### `resetVirtualMachine` <a name="resetVirtualMachine" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetVirtualMachine"></a>

```typescript
public resetVirtualMachine(): void
```

##### `resetVirtualNetworks` <a name="resetVirtualNetworks" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetVirtualNetworks"></a>

```typescript
public resetVirtualNetworks(): void
```

##### `resetVms` <a name="resetVms" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetVms"></a>

```typescript
public resetVms(): void
```

##### `resetVpnGateway` <a name="resetVpnGateway" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetVpnGateway"></a>

```typescript
public resetVpnGateway(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CloudAzureIntegrations resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.isConstruct"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

cloudAzureIntegrations.CloudAzureIntegrations.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.isTerraformElement"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

cloudAzureIntegrations.CloudAzureIntegrations.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.isTerraformResource"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

cloudAzureIntegrations.CloudAzureIntegrations.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.generateConfigForImport"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

cloudAzureIntegrations.CloudAzureIntegrations.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CloudAzureIntegrations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudAzureIntegrations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudAzureIntegrations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudAzureIntegrations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.apiManagement">apiManagement</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference">CloudAzureIntegrationsApiManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.appGateway">appGateway</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference">CloudAzureIntegrationsAppGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.appService">appService</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference">CloudAzureIntegrationsAppServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.containers">containers</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference">CloudAzureIntegrationsContainersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.cosmosDb">cosmosDb</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference">CloudAzureIntegrationsCosmosDbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.costManagement">costManagement</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference">CloudAzureIntegrationsCostManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.dataFactory">dataFactory</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference">CloudAzureIntegrationsDataFactoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.eventHub">eventHub</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference">CloudAzureIntegrationsEventHubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.expressRoute">expressRoute</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference">CloudAzureIntegrationsExpressRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.firewalls">firewalls</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference">CloudAzureIntegrationsFirewallsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.frontDoor">frontDoor</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference">CloudAzureIntegrationsFrontDoorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.functions">functions</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference">CloudAzureIntegrationsFunctionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.keyVault">keyVault</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference">CloudAzureIntegrationsKeyVaultOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.loadBalancer">loadBalancer</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference">CloudAzureIntegrationsLoadBalancerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.logicApps">logicApps</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference">CloudAzureIntegrationsLogicAppsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.machineLearning">machineLearning</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference">CloudAzureIntegrationsMachineLearningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.mariaDb">mariaDb</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference">CloudAzureIntegrationsMariaDbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.monitor">monitor</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference">CloudAzureIntegrationsMonitorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.mysql">mysql</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference">CloudAzureIntegrationsMysqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.mysqlFlexible">mysqlFlexible</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference">CloudAzureIntegrationsMysqlFlexibleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.postgresql">postgresql</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference">CloudAzureIntegrationsPostgresqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.postgresqlFlexible">postgresqlFlexible</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference">CloudAzureIntegrationsPostgresqlFlexibleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.powerBiDedicated">powerBiDedicated</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference">CloudAzureIntegrationsPowerBiDedicatedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.redisCache">redisCache</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference">CloudAzureIntegrationsRedisCacheOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.serviceBus">serviceBus</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference">CloudAzureIntegrationsServiceBusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.sql">sql</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference">CloudAzureIntegrationsSqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.sqlManaged">sqlManaged</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference">CloudAzureIntegrationsSqlManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.storage">storage</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference">CloudAzureIntegrationsStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.virtualMachine">virtualMachine</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference">CloudAzureIntegrationsVirtualMachineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.virtualNetworks">virtualNetworks</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference">CloudAzureIntegrationsVirtualNetworksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.vms">vms</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference">CloudAzureIntegrationsVmsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.vpnGateway">vpnGateway</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference">CloudAzureIntegrationsVpnGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.accountIdInput">accountIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.apiManagementInput">apiManagementInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagement">CloudAzureIntegrationsApiManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.appGatewayInput">appGatewayInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGateway">CloudAzureIntegrationsAppGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.appServiceInput">appServiceInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppService">CloudAzureIntegrationsAppService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.containersInput">containersInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainers">CloudAzureIntegrationsContainers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.cosmosDbInput">cosmosDbInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDb">CloudAzureIntegrationsCosmosDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.costManagementInput">costManagementInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagement">CloudAzureIntegrationsCostManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.dataFactoryInput">dataFactoryInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactory">CloudAzureIntegrationsDataFactory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.eventHubInput">eventHubInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHub">CloudAzureIntegrationsEventHub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.expressRouteInput">expressRouteInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRoute">CloudAzureIntegrationsExpressRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.firewallsInput">firewallsInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewalls">CloudAzureIntegrationsFirewalls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.frontDoorInput">frontDoorInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoor">CloudAzureIntegrationsFrontDoor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.functionsInput">functionsInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctions">CloudAzureIntegrationsFunctions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.keyVaultInput">keyVaultInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVault">CloudAzureIntegrationsKeyVault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.linkedAccountIdInput">linkedAccountIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.loadBalancerInput">loadBalancerInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancer">CloudAzureIntegrationsLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.logicAppsInput">logicAppsInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicApps">CloudAzureIntegrationsLogicApps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.machineLearningInput">machineLearningInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearning">CloudAzureIntegrationsMachineLearning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.mariaDbInput">mariaDbInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDb">CloudAzureIntegrationsMariaDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.monitorInput">monitorInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitor">CloudAzureIntegrationsMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.mysqlFlexibleInput">mysqlFlexibleInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexible">CloudAzureIntegrationsMysqlFlexible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.mysqlInput">mysqlInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysql">CloudAzureIntegrationsMysql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.postgresqlFlexibleInput">postgresqlFlexibleInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexible">CloudAzureIntegrationsPostgresqlFlexible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.postgresqlInput">postgresqlInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresql">CloudAzureIntegrationsPostgresql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.powerBiDedicatedInput">powerBiDedicatedInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicated">CloudAzureIntegrationsPowerBiDedicated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.redisCacheInput">redisCacheInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCache">CloudAzureIntegrationsRedisCache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.serviceBusInput">serviceBusInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBus">CloudAzureIntegrationsServiceBus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.sqlInput">sqlInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSql">CloudAzureIntegrationsSql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.sqlManagedInput">sqlManagedInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManaged">CloudAzureIntegrationsSqlManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.storageInput">storageInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorage">CloudAzureIntegrationsStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.virtualMachineInput">virtualMachineInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachine">CloudAzureIntegrationsVirtualMachine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.virtualNetworksInput">virtualNetworksInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworks">CloudAzureIntegrationsVirtualNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.vmsInput">vmsInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVms">CloudAzureIntegrationsVms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.vpnGatewayInput">vpnGatewayInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGateway">CloudAzureIntegrationsVpnGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.accountId">accountId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.linkedAccountId">linkedAccountId</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apiManagement`<sup>Required</sup> <a name="apiManagement" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.apiManagement"></a>

```typescript
public readonly apiManagement: CloudAzureIntegrationsApiManagementOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference">CloudAzureIntegrationsApiManagementOutputReference</a>

---

##### `appGateway`<sup>Required</sup> <a name="appGateway" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.appGateway"></a>

```typescript
public readonly appGateway: CloudAzureIntegrationsAppGatewayOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference">CloudAzureIntegrationsAppGatewayOutputReference</a>

---

##### `appService`<sup>Required</sup> <a name="appService" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.appService"></a>

```typescript
public readonly appService: CloudAzureIntegrationsAppServiceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference">CloudAzureIntegrationsAppServiceOutputReference</a>

---

##### `containers`<sup>Required</sup> <a name="containers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.containers"></a>

```typescript
public readonly containers: CloudAzureIntegrationsContainersOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference">CloudAzureIntegrationsContainersOutputReference</a>

---

##### `cosmosDb`<sup>Required</sup> <a name="cosmosDb" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.cosmosDb"></a>

```typescript
public readonly cosmosDb: CloudAzureIntegrationsCosmosDbOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference">CloudAzureIntegrationsCosmosDbOutputReference</a>

---

##### `costManagement`<sup>Required</sup> <a name="costManagement" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.costManagement"></a>

```typescript
public readonly costManagement: CloudAzureIntegrationsCostManagementOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference">CloudAzureIntegrationsCostManagementOutputReference</a>

---

##### `dataFactory`<sup>Required</sup> <a name="dataFactory" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.dataFactory"></a>

```typescript
public readonly dataFactory: CloudAzureIntegrationsDataFactoryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference">CloudAzureIntegrationsDataFactoryOutputReference</a>

---

##### `eventHub`<sup>Required</sup> <a name="eventHub" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.eventHub"></a>

```typescript
public readonly eventHub: CloudAzureIntegrationsEventHubOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference">CloudAzureIntegrationsEventHubOutputReference</a>

---

##### `expressRoute`<sup>Required</sup> <a name="expressRoute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.expressRoute"></a>

```typescript
public readonly expressRoute: CloudAzureIntegrationsExpressRouteOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference">CloudAzureIntegrationsExpressRouteOutputReference</a>

---

##### `firewalls`<sup>Required</sup> <a name="firewalls" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.firewalls"></a>

```typescript
public readonly firewalls: CloudAzureIntegrationsFirewallsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference">CloudAzureIntegrationsFirewallsOutputReference</a>

---

##### `frontDoor`<sup>Required</sup> <a name="frontDoor" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.frontDoor"></a>

```typescript
public readonly frontDoor: CloudAzureIntegrationsFrontDoorOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference">CloudAzureIntegrationsFrontDoorOutputReference</a>

---

##### `functions`<sup>Required</sup> <a name="functions" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.functions"></a>

```typescript
public readonly functions: CloudAzureIntegrationsFunctionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference">CloudAzureIntegrationsFunctionsOutputReference</a>

---

##### `keyVault`<sup>Required</sup> <a name="keyVault" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.keyVault"></a>

```typescript
public readonly keyVault: CloudAzureIntegrationsKeyVaultOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference">CloudAzureIntegrationsKeyVaultOutputReference</a>

---

##### `loadBalancer`<sup>Required</sup> <a name="loadBalancer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.loadBalancer"></a>

```typescript
public readonly loadBalancer: CloudAzureIntegrationsLoadBalancerOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference">CloudAzureIntegrationsLoadBalancerOutputReference</a>

---

##### `logicApps`<sup>Required</sup> <a name="logicApps" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.logicApps"></a>

```typescript
public readonly logicApps: CloudAzureIntegrationsLogicAppsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference">CloudAzureIntegrationsLogicAppsOutputReference</a>

---

##### `machineLearning`<sup>Required</sup> <a name="machineLearning" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.machineLearning"></a>

```typescript
public readonly machineLearning: CloudAzureIntegrationsMachineLearningOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference">CloudAzureIntegrationsMachineLearningOutputReference</a>

---

##### `mariaDb`<sup>Required</sup> <a name="mariaDb" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.mariaDb"></a>

```typescript
public readonly mariaDb: CloudAzureIntegrationsMariaDbOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference">CloudAzureIntegrationsMariaDbOutputReference</a>

---

##### `monitor`<sup>Required</sup> <a name="monitor" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.monitor"></a>

```typescript
public readonly monitor: CloudAzureIntegrationsMonitorOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference">CloudAzureIntegrationsMonitorOutputReference</a>

---

##### `mysql`<sup>Required</sup> <a name="mysql" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.mysql"></a>

```typescript
public readonly mysql: CloudAzureIntegrationsMysqlOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference">CloudAzureIntegrationsMysqlOutputReference</a>

---

##### `mysqlFlexible`<sup>Required</sup> <a name="mysqlFlexible" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.mysqlFlexible"></a>

```typescript
public readonly mysqlFlexible: CloudAzureIntegrationsMysqlFlexibleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference">CloudAzureIntegrationsMysqlFlexibleOutputReference</a>

---

##### `postgresql`<sup>Required</sup> <a name="postgresql" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.postgresql"></a>

```typescript
public readonly postgresql: CloudAzureIntegrationsPostgresqlOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference">CloudAzureIntegrationsPostgresqlOutputReference</a>

---

##### `postgresqlFlexible`<sup>Required</sup> <a name="postgresqlFlexible" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.postgresqlFlexible"></a>

```typescript
public readonly postgresqlFlexible: CloudAzureIntegrationsPostgresqlFlexibleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference">CloudAzureIntegrationsPostgresqlFlexibleOutputReference</a>

---

##### `powerBiDedicated`<sup>Required</sup> <a name="powerBiDedicated" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.powerBiDedicated"></a>

```typescript
public readonly powerBiDedicated: CloudAzureIntegrationsPowerBiDedicatedOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference">CloudAzureIntegrationsPowerBiDedicatedOutputReference</a>

---

##### `redisCache`<sup>Required</sup> <a name="redisCache" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.redisCache"></a>

```typescript
public readonly redisCache: CloudAzureIntegrationsRedisCacheOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference">CloudAzureIntegrationsRedisCacheOutputReference</a>

---

##### `serviceBus`<sup>Required</sup> <a name="serviceBus" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.serviceBus"></a>

```typescript
public readonly serviceBus: CloudAzureIntegrationsServiceBusOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference">CloudAzureIntegrationsServiceBusOutputReference</a>

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.sql"></a>

```typescript
public readonly sql: CloudAzureIntegrationsSqlOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference">CloudAzureIntegrationsSqlOutputReference</a>

---

##### `sqlManaged`<sup>Required</sup> <a name="sqlManaged" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.sqlManaged"></a>

```typescript
public readonly sqlManaged: CloudAzureIntegrationsSqlManagedOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference">CloudAzureIntegrationsSqlManagedOutputReference</a>

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.storage"></a>

```typescript
public readonly storage: CloudAzureIntegrationsStorageOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference">CloudAzureIntegrationsStorageOutputReference</a>

---

##### `virtualMachine`<sup>Required</sup> <a name="virtualMachine" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.virtualMachine"></a>

```typescript
public readonly virtualMachine: CloudAzureIntegrationsVirtualMachineOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference">CloudAzureIntegrationsVirtualMachineOutputReference</a>

---

##### `virtualNetworks`<sup>Required</sup> <a name="virtualNetworks" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.virtualNetworks"></a>

```typescript
public readonly virtualNetworks: CloudAzureIntegrationsVirtualNetworksOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference">CloudAzureIntegrationsVirtualNetworksOutputReference</a>

---

##### `vms`<sup>Required</sup> <a name="vms" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.vms"></a>

```typescript
public readonly vms: CloudAzureIntegrationsVmsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference">CloudAzureIntegrationsVmsOutputReference</a>

---

##### `vpnGateway`<sup>Required</sup> <a name="vpnGateway" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.vpnGateway"></a>

```typescript
public readonly vpnGateway: CloudAzureIntegrationsVpnGatewayOutputReference;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference">CloudAzureIntegrationsVpnGatewayOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* number

---

##### `apiManagementInput`<sup>Optional</sup> <a name="apiManagementInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.apiManagementInput"></a>

```typescript
public readonly apiManagementInput: CloudAzureIntegrationsApiManagement;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagement">CloudAzureIntegrationsApiManagement</a>

---

##### `appGatewayInput`<sup>Optional</sup> <a name="appGatewayInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.appGatewayInput"></a>

```typescript
public readonly appGatewayInput: CloudAzureIntegrationsAppGateway;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGateway">CloudAzureIntegrationsAppGateway</a>

---

##### `appServiceInput`<sup>Optional</sup> <a name="appServiceInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.appServiceInput"></a>

```typescript
public readonly appServiceInput: CloudAzureIntegrationsAppService;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppService">CloudAzureIntegrationsAppService</a>

---

##### `containersInput`<sup>Optional</sup> <a name="containersInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.containersInput"></a>

```typescript
public readonly containersInput: CloudAzureIntegrationsContainers;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainers">CloudAzureIntegrationsContainers</a>

---

##### `cosmosDbInput`<sup>Optional</sup> <a name="cosmosDbInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.cosmosDbInput"></a>

```typescript
public readonly cosmosDbInput: CloudAzureIntegrationsCosmosDb;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDb">CloudAzureIntegrationsCosmosDb</a>

---

##### `costManagementInput`<sup>Optional</sup> <a name="costManagementInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.costManagementInput"></a>

```typescript
public readonly costManagementInput: CloudAzureIntegrationsCostManagement;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagement">CloudAzureIntegrationsCostManagement</a>

---

##### `dataFactoryInput`<sup>Optional</sup> <a name="dataFactoryInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.dataFactoryInput"></a>

```typescript
public readonly dataFactoryInput: CloudAzureIntegrationsDataFactory;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactory">CloudAzureIntegrationsDataFactory</a>

---

##### `eventHubInput`<sup>Optional</sup> <a name="eventHubInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.eventHubInput"></a>

```typescript
public readonly eventHubInput: CloudAzureIntegrationsEventHub;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHub">CloudAzureIntegrationsEventHub</a>

---

##### `expressRouteInput`<sup>Optional</sup> <a name="expressRouteInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.expressRouteInput"></a>

```typescript
public readonly expressRouteInput: CloudAzureIntegrationsExpressRoute;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRoute">CloudAzureIntegrationsExpressRoute</a>

---

##### `firewallsInput`<sup>Optional</sup> <a name="firewallsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.firewallsInput"></a>

```typescript
public readonly firewallsInput: CloudAzureIntegrationsFirewalls;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewalls">CloudAzureIntegrationsFirewalls</a>

---

##### `frontDoorInput`<sup>Optional</sup> <a name="frontDoorInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.frontDoorInput"></a>

```typescript
public readonly frontDoorInput: CloudAzureIntegrationsFrontDoor;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoor">CloudAzureIntegrationsFrontDoor</a>

---

##### `functionsInput`<sup>Optional</sup> <a name="functionsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.functionsInput"></a>

```typescript
public readonly functionsInput: CloudAzureIntegrationsFunctions;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctions">CloudAzureIntegrationsFunctions</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyVaultInput`<sup>Optional</sup> <a name="keyVaultInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.keyVaultInput"></a>

```typescript
public readonly keyVaultInput: CloudAzureIntegrationsKeyVault;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVault">CloudAzureIntegrationsKeyVault</a>

---

##### `linkedAccountIdInput`<sup>Optional</sup> <a name="linkedAccountIdInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.linkedAccountIdInput"></a>

```typescript
public readonly linkedAccountIdInput: number;
```

- *Type:* number

---

##### `loadBalancerInput`<sup>Optional</sup> <a name="loadBalancerInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.loadBalancerInput"></a>

```typescript
public readonly loadBalancerInput: CloudAzureIntegrationsLoadBalancer;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancer">CloudAzureIntegrationsLoadBalancer</a>

---

##### `logicAppsInput`<sup>Optional</sup> <a name="logicAppsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.logicAppsInput"></a>

```typescript
public readonly logicAppsInput: CloudAzureIntegrationsLogicApps;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicApps">CloudAzureIntegrationsLogicApps</a>

---

##### `machineLearningInput`<sup>Optional</sup> <a name="machineLearningInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.machineLearningInput"></a>

```typescript
public readonly machineLearningInput: CloudAzureIntegrationsMachineLearning;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearning">CloudAzureIntegrationsMachineLearning</a>

---

##### `mariaDbInput`<sup>Optional</sup> <a name="mariaDbInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.mariaDbInput"></a>

```typescript
public readonly mariaDbInput: CloudAzureIntegrationsMariaDb;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDb">CloudAzureIntegrationsMariaDb</a>

---

##### `monitorInput`<sup>Optional</sup> <a name="monitorInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.monitorInput"></a>

```typescript
public readonly monitorInput: CloudAzureIntegrationsMonitor;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitor">CloudAzureIntegrationsMonitor</a>

---

##### `mysqlFlexibleInput`<sup>Optional</sup> <a name="mysqlFlexibleInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.mysqlFlexibleInput"></a>

```typescript
public readonly mysqlFlexibleInput: CloudAzureIntegrationsMysqlFlexible;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexible">CloudAzureIntegrationsMysqlFlexible</a>

---

##### `mysqlInput`<sup>Optional</sup> <a name="mysqlInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.mysqlInput"></a>

```typescript
public readonly mysqlInput: CloudAzureIntegrationsMysql;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysql">CloudAzureIntegrationsMysql</a>

---

##### `postgresqlFlexibleInput`<sup>Optional</sup> <a name="postgresqlFlexibleInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.postgresqlFlexibleInput"></a>

```typescript
public readonly postgresqlFlexibleInput: CloudAzureIntegrationsPostgresqlFlexible;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexible">CloudAzureIntegrationsPostgresqlFlexible</a>

---

##### `postgresqlInput`<sup>Optional</sup> <a name="postgresqlInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.postgresqlInput"></a>

```typescript
public readonly postgresqlInput: CloudAzureIntegrationsPostgresql;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresql">CloudAzureIntegrationsPostgresql</a>

---

##### `powerBiDedicatedInput`<sup>Optional</sup> <a name="powerBiDedicatedInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.powerBiDedicatedInput"></a>

```typescript
public readonly powerBiDedicatedInput: CloudAzureIntegrationsPowerBiDedicated;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicated">CloudAzureIntegrationsPowerBiDedicated</a>

---

##### `redisCacheInput`<sup>Optional</sup> <a name="redisCacheInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.redisCacheInput"></a>

```typescript
public readonly redisCacheInput: CloudAzureIntegrationsRedisCache;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCache">CloudAzureIntegrationsRedisCache</a>

---

##### `serviceBusInput`<sup>Optional</sup> <a name="serviceBusInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.serviceBusInput"></a>

```typescript
public readonly serviceBusInput: CloudAzureIntegrationsServiceBus;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBus">CloudAzureIntegrationsServiceBus</a>

---

##### `sqlInput`<sup>Optional</sup> <a name="sqlInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.sqlInput"></a>

```typescript
public readonly sqlInput: CloudAzureIntegrationsSql;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSql">CloudAzureIntegrationsSql</a>

---

##### `sqlManagedInput`<sup>Optional</sup> <a name="sqlManagedInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.sqlManagedInput"></a>

```typescript
public readonly sqlManagedInput: CloudAzureIntegrationsSqlManaged;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManaged">CloudAzureIntegrationsSqlManaged</a>

---

##### `storageInput`<sup>Optional</sup> <a name="storageInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.storageInput"></a>

```typescript
public readonly storageInput: CloudAzureIntegrationsStorage;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorage">CloudAzureIntegrationsStorage</a>

---

##### `virtualMachineInput`<sup>Optional</sup> <a name="virtualMachineInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.virtualMachineInput"></a>

```typescript
public readonly virtualMachineInput: CloudAzureIntegrationsVirtualMachine;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachine">CloudAzureIntegrationsVirtualMachine</a>

---

##### `virtualNetworksInput`<sup>Optional</sup> <a name="virtualNetworksInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.virtualNetworksInput"></a>

```typescript
public readonly virtualNetworksInput: CloudAzureIntegrationsVirtualNetworks;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworks">CloudAzureIntegrationsVirtualNetworks</a>

---

##### `vmsInput`<sup>Optional</sup> <a name="vmsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.vmsInput"></a>

```typescript
public readonly vmsInput: CloudAzureIntegrationsVms;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVms">CloudAzureIntegrationsVms</a>

---

##### `vpnGatewayInput`<sup>Optional</sup> <a name="vpnGatewayInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.vpnGatewayInput"></a>

```typescript
public readonly vpnGatewayInput: CloudAzureIntegrationsVpnGateway;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGateway">CloudAzureIntegrationsVpnGateway</a>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `linkedAccountId`<sup>Required</sup> <a name="linkedAccountId" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.linkedAccountId"></a>

```typescript
public readonly linkedAccountId: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudAzureIntegrationsApiManagement <a name="CloudAzureIntegrationsApiManagement" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagement.Initializer"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

const cloudAzureIntegrationsApiManagement: cloudAzureIntegrations.CloudAzureIntegrationsApiManagement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagement.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagement.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagement.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `resourceGroups`<sup>Optional</sup> <a name="resourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagement.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsAppGateway <a name="CloudAzureIntegrationsAppGateway" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGateway"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGateway.Initializer"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

const cloudAzureIntegrationsAppGateway: cloudAzureIntegrations.CloudAzureIntegrationsAppGateway = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGateway.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGateway.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGateway.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `resourceGroups`<sup>Optional</sup> <a name="resourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGateway.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsAppService <a name="CloudAzureIntegrationsAppService" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppService.Initializer"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

const cloudAzureIntegrationsAppService: cloudAzureIntegrations.CloudAzureIntegrationsAppService = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppService.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppService.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppService.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `resourceGroups`<sup>Optional</sup> <a name="resourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppService.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsConfig <a name="CloudAzureIntegrationsConfig" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.Initializer"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

const cloudAzureIntegrationsConfig: cloudAzureIntegrations.CloudAzureIntegrationsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.linkedAccountId">linkedAccountId</a></code> | <code>number</code> | The ID of the linked Azure account in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.accountId">accountId</a></code> | <code>number</code> | The ID of the account in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.apiManagement">apiManagement</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagement">CloudAzureIntegrationsApiManagement</a></code> | api_management block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.appGateway">appGateway</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGateway">CloudAzureIntegrationsAppGateway</a></code> | app_gateway block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.appService">appService</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppService">CloudAzureIntegrationsAppService</a></code> | app_service block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.containers">containers</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainers">CloudAzureIntegrationsContainers</a></code> | containers block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.cosmosDb">cosmosDb</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDb">CloudAzureIntegrationsCosmosDb</a></code> | cosmos_db block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.costManagement">costManagement</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagement">CloudAzureIntegrationsCostManagement</a></code> | cost_management block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.dataFactory">dataFactory</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactory">CloudAzureIntegrationsDataFactory</a></code> | data_factory block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.eventHub">eventHub</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHub">CloudAzureIntegrationsEventHub</a></code> | event_hub block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.expressRoute">expressRoute</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRoute">CloudAzureIntegrationsExpressRoute</a></code> | express_route block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.firewalls">firewalls</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewalls">CloudAzureIntegrationsFirewalls</a></code> | firewalls block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.frontDoor">frontDoor</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoor">CloudAzureIntegrationsFrontDoor</a></code> | front_door block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.functions">functions</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctions">CloudAzureIntegrationsFunctions</a></code> | functions block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#id CloudAzureIntegrations#id}. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.keyVault">keyVault</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVault">CloudAzureIntegrationsKeyVault</a></code> | key_vault block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.loadBalancer">loadBalancer</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancer">CloudAzureIntegrationsLoadBalancer</a></code> | load_balancer block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.logicApps">logicApps</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicApps">CloudAzureIntegrationsLogicApps</a></code> | logic_apps block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.machineLearning">machineLearning</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearning">CloudAzureIntegrationsMachineLearning</a></code> | machine_learning block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.mariaDb">mariaDb</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDb">CloudAzureIntegrationsMariaDb</a></code> | maria_db block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.monitor">monitor</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitor">CloudAzureIntegrationsMonitor</a></code> | monitor block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.mysql">mysql</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysql">CloudAzureIntegrationsMysql</a></code> | mysql block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.mysqlFlexible">mysqlFlexible</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexible">CloudAzureIntegrationsMysqlFlexible</a></code> | mysql_flexible block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.postgresql">postgresql</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresql">CloudAzureIntegrationsPostgresql</a></code> | postgresql block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.postgresqlFlexible">postgresqlFlexible</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexible">CloudAzureIntegrationsPostgresqlFlexible</a></code> | postgresql_flexible block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.powerBiDedicated">powerBiDedicated</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicated">CloudAzureIntegrationsPowerBiDedicated</a></code> | power_bi_dedicated block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.redisCache">redisCache</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCache">CloudAzureIntegrationsRedisCache</a></code> | redis_cache block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.serviceBus">serviceBus</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBus">CloudAzureIntegrationsServiceBus</a></code> | service_bus block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.sql">sql</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSql">CloudAzureIntegrationsSql</a></code> | sql block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.sqlManaged">sqlManaged</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManaged">CloudAzureIntegrationsSqlManaged</a></code> | sql_managed block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.storage">storage</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorage">CloudAzureIntegrationsStorage</a></code> | storage block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.virtualMachine">virtualMachine</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachine">CloudAzureIntegrationsVirtualMachine</a></code> | virtual_machine block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.virtualNetworks">virtualNetworks</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworks">CloudAzureIntegrationsVirtualNetworks</a></code> | virtual_networks block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.vms">vms</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVms">CloudAzureIntegrationsVms</a></code> | vms block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.vpnGateway">vpnGateway</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGateway">CloudAzureIntegrationsVpnGateway</a></code> | vpn_gateway block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `linkedAccountId`<sup>Required</sup> <a name="linkedAccountId" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.linkedAccountId"></a>

```typescript
public readonly linkedAccountId: number;
```

- *Type:* number

The ID of the linked Azure account in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#linked_account_id CloudAzureIntegrations#linked_account_id}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

The ID of the account in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#account_id CloudAzureIntegrations#account_id}

---

##### `apiManagement`<sup>Optional</sup> <a name="apiManagement" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.apiManagement"></a>

```typescript
public readonly apiManagement: CloudAzureIntegrationsApiManagement;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagement">CloudAzureIntegrationsApiManagement</a>

api_management block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#api_management CloudAzureIntegrations#api_management}

---

##### `appGateway`<sup>Optional</sup> <a name="appGateway" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.appGateway"></a>

```typescript
public readonly appGateway: CloudAzureIntegrationsAppGateway;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGateway">CloudAzureIntegrationsAppGateway</a>

app_gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#app_gateway CloudAzureIntegrations#app_gateway}

---

##### `appService`<sup>Optional</sup> <a name="appService" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.appService"></a>

```typescript
public readonly appService: CloudAzureIntegrationsAppService;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppService">CloudAzureIntegrationsAppService</a>

app_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#app_service CloudAzureIntegrations#app_service}

---

##### `containers`<sup>Optional</sup> <a name="containers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.containers"></a>

```typescript
public readonly containers: CloudAzureIntegrationsContainers;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainers">CloudAzureIntegrationsContainers</a>

containers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#containers CloudAzureIntegrations#containers}

---

##### `cosmosDb`<sup>Optional</sup> <a name="cosmosDb" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.cosmosDb"></a>

```typescript
public readonly cosmosDb: CloudAzureIntegrationsCosmosDb;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDb">CloudAzureIntegrationsCosmosDb</a>

cosmos_db block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#cosmos_db CloudAzureIntegrations#cosmos_db}

---

##### `costManagement`<sup>Optional</sup> <a name="costManagement" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.costManagement"></a>

```typescript
public readonly costManagement: CloudAzureIntegrationsCostManagement;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagement">CloudAzureIntegrationsCostManagement</a>

cost_management block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#cost_management CloudAzureIntegrations#cost_management}

---

##### `dataFactory`<sup>Optional</sup> <a name="dataFactory" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.dataFactory"></a>

```typescript
public readonly dataFactory: CloudAzureIntegrationsDataFactory;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactory">CloudAzureIntegrationsDataFactory</a>

data_factory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#data_factory CloudAzureIntegrations#data_factory}

---

##### `eventHub`<sup>Optional</sup> <a name="eventHub" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.eventHub"></a>

```typescript
public readonly eventHub: CloudAzureIntegrationsEventHub;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHub">CloudAzureIntegrationsEventHub</a>

event_hub block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#event_hub CloudAzureIntegrations#event_hub}

---

##### `expressRoute`<sup>Optional</sup> <a name="expressRoute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.expressRoute"></a>

```typescript
public readonly expressRoute: CloudAzureIntegrationsExpressRoute;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRoute">CloudAzureIntegrationsExpressRoute</a>

express_route block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#express_route CloudAzureIntegrations#express_route}

---

##### `firewalls`<sup>Optional</sup> <a name="firewalls" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.firewalls"></a>

```typescript
public readonly firewalls: CloudAzureIntegrationsFirewalls;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewalls">CloudAzureIntegrationsFirewalls</a>

firewalls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#firewalls CloudAzureIntegrations#firewalls}

---

##### `frontDoor`<sup>Optional</sup> <a name="frontDoor" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.frontDoor"></a>

```typescript
public readonly frontDoor: CloudAzureIntegrationsFrontDoor;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoor">CloudAzureIntegrationsFrontDoor</a>

front_door block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#front_door CloudAzureIntegrations#front_door}

---

##### `functions`<sup>Optional</sup> <a name="functions" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.functions"></a>

```typescript
public readonly functions: CloudAzureIntegrationsFunctions;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctions">CloudAzureIntegrationsFunctions</a>

functions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#functions CloudAzureIntegrations#functions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#id CloudAzureIntegrations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyVault`<sup>Optional</sup> <a name="keyVault" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.keyVault"></a>

```typescript
public readonly keyVault: CloudAzureIntegrationsKeyVault;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVault">CloudAzureIntegrationsKeyVault</a>

key_vault block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#key_vault CloudAzureIntegrations#key_vault}

---

##### `loadBalancer`<sup>Optional</sup> <a name="loadBalancer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.loadBalancer"></a>

```typescript
public readonly loadBalancer: CloudAzureIntegrationsLoadBalancer;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancer">CloudAzureIntegrationsLoadBalancer</a>

load_balancer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#load_balancer CloudAzureIntegrations#load_balancer}

---

##### `logicApps`<sup>Optional</sup> <a name="logicApps" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.logicApps"></a>

```typescript
public readonly logicApps: CloudAzureIntegrationsLogicApps;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicApps">CloudAzureIntegrationsLogicApps</a>

logic_apps block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#logic_apps CloudAzureIntegrations#logic_apps}

---

##### `machineLearning`<sup>Optional</sup> <a name="machineLearning" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.machineLearning"></a>

```typescript
public readonly machineLearning: CloudAzureIntegrationsMachineLearning;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearning">CloudAzureIntegrationsMachineLearning</a>

machine_learning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#machine_learning CloudAzureIntegrations#machine_learning}

---

##### `mariaDb`<sup>Optional</sup> <a name="mariaDb" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.mariaDb"></a>

```typescript
public readonly mariaDb: CloudAzureIntegrationsMariaDb;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDb">CloudAzureIntegrationsMariaDb</a>

maria_db block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#maria_db CloudAzureIntegrations#maria_db}

---

##### `monitor`<sup>Optional</sup> <a name="monitor" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.monitor"></a>

```typescript
public readonly monitor: CloudAzureIntegrationsMonitor;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitor">CloudAzureIntegrationsMonitor</a>

monitor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#monitor CloudAzureIntegrations#monitor}

---

##### `mysql`<sup>Optional</sup> <a name="mysql" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.mysql"></a>

```typescript
public readonly mysql: CloudAzureIntegrationsMysql;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysql">CloudAzureIntegrationsMysql</a>

mysql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#mysql CloudAzureIntegrations#mysql}

---

##### `mysqlFlexible`<sup>Optional</sup> <a name="mysqlFlexible" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.mysqlFlexible"></a>

```typescript
public readonly mysqlFlexible: CloudAzureIntegrationsMysqlFlexible;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexible">CloudAzureIntegrationsMysqlFlexible</a>

mysql_flexible block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#mysql_flexible CloudAzureIntegrations#mysql_flexible}

---

##### `postgresql`<sup>Optional</sup> <a name="postgresql" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.postgresql"></a>

```typescript
public readonly postgresql: CloudAzureIntegrationsPostgresql;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresql">CloudAzureIntegrationsPostgresql</a>

postgresql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#postgresql CloudAzureIntegrations#postgresql}

---

##### `postgresqlFlexible`<sup>Optional</sup> <a name="postgresqlFlexible" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.postgresqlFlexible"></a>

```typescript
public readonly postgresqlFlexible: CloudAzureIntegrationsPostgresqlFlexible;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexible">CloudAzureIntegrationsPostgresqlFlexible</a>

postgresql_flexible block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#postgresql_flexible CloudAzureIntegrations#postgresql_flexible}

---

##### `powerBiDedicated`<sup>Optional</sup> <a name="powerBiDedicated" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.powerBiDedicated"></a>

```typescript
public readonly powerBiDedicated: CloudAzureIntegrationsPowerBiDedicated;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicated">CloudAzureIntegrationsPowerBiDedicated</a>

power_bi_dedicated block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#power_bi_dedicated CloudAzureIntegrations#power_bi_dedicated}

---

##### `redisCache`<sup>Optional</sup> <a name="redisCache" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.redisCache"></a>

```typescript
public readonly redisCache: CloudAzureIntegrationsRedisCache;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCache">CloudAzureIntegrationsRedisCache</a>

redis_cache block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#redis_cache CloudAzureIntegrations#redis_cache}

---

##### `serviceBus`<sup>Optional</sup> <a name="serviceBus" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.serviceBus"></a>

```typescript
public readonly serviceBus: CloudAzureIntegrationsServiceBus;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBus">CloudAzureIntegrationsServiceBus</a>

service_bus block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#service_bus CloudAzureIntegrations#service_bus}

---

##### `sql`<sup>Optional</sup> <a name="sql" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.sql"></a>

```typescript
public readonly sql: CloudAzureIntegrationsSql;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSql">CloudAzureIntegrationsSql</a>

sql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#sql CloudAzureIntegrations#sql}

---

##### `sqlManaged`<sup>Optional</sup> <a name="sqlManaged" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.sqlManaged"></a>

```typescript
public readonly sqlManaged: CloudAzureIntegrationsSqlManaged;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManaged">CloudAzureIntegrationsSqlManaged</a>

sql_managed block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#sql_managed CloudAzureIntegrations#sql_managed}

---

##### `storage`<sup>Optional</sup> <a name="storage" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.storage"></a>

```typescript
public readonly storage: CloudAzureIntegrationsStorage;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorage">CloudAzureIntegrationsStorage</a>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#storage CloudAzureIntegrations#storage}

---

##### `virtualMachine`<sup>Optional</sup> <a name="virtualMachine" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.virtualMachine"></a>

```typescript
public readonly virtualMachine: CloudAzureIntegrationsVirtualMachine;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachine">CloudAzureIntegrationsVirtualMachine</a>

virtual_machine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#virtual_machine CloudAzureIntegrations#virtual_machine}

---

##### `virtualNetworks`<sup>Optional</sup> <a name="virtualNetworks" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.virtualNetworks"></a>

```typescript
public readonly virtualNetworks: CloudAzureIntegrationsVirtualNetworks;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworks">CloudAzureIntegrationsVirtualNetworks</a>

virtual_networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#virtual_networks CloudAzureIntegrations#virtual_networks}

---

##### `vms`<sup>Optional</sup> <a name="vms" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.vms"></a>

```typescript
public readonly vms: CloudAzureIntegrationsVms;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVms">CloudAzureIntegrationsVms</a>

vms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#vms CloudAzureIntegrations#vms}

---

##### `vpnGateway`<sup>Optional</sup> <a name="vpnGateway" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.vpnGateway"></a>

```typescript
public readonly vpnGateway: CloudAzureIntegrationsVpnGateway;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGateway">CloudAzureIntegrationsVpnGateway</a>

vpn_gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#vpn_gateway CloudAzureIntegrations#vpn_gateway}

---

### CloudAzureIntegrationsContainers <a name="CloudAzureIntegrationsContainers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainers.Initializer"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

const cloudAzureIntegrationsContainers: cloudAzureIntegrations.CloudAzureIntegrationsContainers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainers.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainers.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainers.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `resourceGroups`<sup>Optional</sup> <a name="resourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainers.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsCosmosDb <a name="CloudAzureIntegrationsCosmosDb" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDb.Initializer"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

const cloudAzureIntegrationsCosmosDb: cloudAzureIntegrations.CloudAzureIntegrationsCosmosDb = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDb.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDb.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDb.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `resourceGroups`<sup>Optional</sup> <a name="resourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDb.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsCostManagement <a name="CloudAzureIntegrationsCostManagement" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagement.Initializer"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

const cloudAzureIntegrationsCostManagement: cloudAzureIntegrations.CloudAzureIntegrationsCostManagement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagement.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagement.property.tagKeys">tagKeys</a></code> | <code>string[]</code> | Specify if additional cost data per tag should be collected. This field is case sensitive. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagement.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `tagKeys`<sup>Optional</sup> <a name="tagKeys" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagement.property.tagKeys"></a>

```typescript
public readonly tagKeys: string[];
```

- *Type:* string[]

Specify if additional cost data per tag should be collected. This field is case sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#tag_keys CloudAzureIntegrations#tag_keys}

---

### CloudAzureIntegrationsDataFactory <a name="CloudAzureIntegrationsDataFactory" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactory.Initializer"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

const cloudAzureIntegrationsDataFactory: cloudAzureIntegrations.CloudAzureIntegrationsDataFactory = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactory.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactory.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactory.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `resourceGroups`<sup>Optional</sup> <a name="resourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactory.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsEventHub <a name="CloudAzureIntegrationsEventHub" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHub.Initializer"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

const cloudAzureIntegrationsEventHub: cloudAzureIntegrations.CloudAzureIntegrationsEventHub = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHub.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHub.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHub.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `resourceGroups`<sup>Optional</sup> <a name="resourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHub.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsExpressRoute <a name="CloudAzureIntegrationsExpressRoute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRoute.Initializer"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

const cloudAzureIntegrationsExpressRoute: cloudAzureIntegrations.CloudAzureIntegrationsExpressRoute = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRoute.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRoute.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRoute.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `resourceGroups`<sup>Optional</sup> <a name="resourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRoute.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsFirewalls <a name="CloudAzureIntegrationsFirewalls" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewalls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewalls.Initializer"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

const cloudAzureIntegrationsFirewalls: cloudAzureIntegrations.CloudAzureIntegrationsFirewalls = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewalls.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewalls.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewalls.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `resourceGroups`<sup>Optional</sup> <a name="resourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewalls.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsFrontDoor <a name="CloudAzureIntegrationsFrontDoor" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoor.Initializer"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

const cloudAzureIntegrationsFrontDoor: cloudAzureIntegrations.CloudAzureIntegrationsFrontDoor = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoor.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoor.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoor.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `resourceGroups`<sup>Optional</sup> <a name="resourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoor.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsFunctions <a name="CloudAzureIntegrationsFunctions" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctions.Initializer"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

const cloudAzureIntegrationsFunctions: cloudAzureIntegrations.CloudAzureIntegrationsFunctions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctions.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctions.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctions.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `resourceGroups`<sup>Optional</sup> <a name="resourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctions.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsKeyVault <a name="CloudAzureIntegrationsKeyVault" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVault"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVault.Initializer"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

const cloudAzureIntegrationsKeyVault: cloudAzureIntegrations.CloudAzureIntegrationsKeyVault = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVault.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVault.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVault.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `resourceGroups`<sup>Optional</sup> <a name="resourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVault.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsLoadBalancer <a name="CloudAzureIntegrationsLoadBalancer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancer.Initializer"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

const cloudAzureIntegrationsLoadBalancer: cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancer.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancer.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancer.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `resourceGroups`<sup>Optional</sup> <a name="resourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancer.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsLogicApps <a name="CloudAzureIntegrationsLogicApps" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicApps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicApps.Initializer"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

const cloudAzureIntegrationsLogicApps: cloudAzureIntegrations.CloudAzureIntegrationsLogicApps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicApps.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicApps.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicApps.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `resourceGroups`<sup>Optional</sup> <a name="resourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicApps.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsMachineLearning <a name="CloudAzureIntegrationsMachineLearning" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearning.Initializer"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

const cloudAzureIntegrationsMachineLearning: cloudAzureIntegrations.CloudAzureIntegrationsMachineLearning = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearning.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearning.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearning.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `resourceGroups`<sup>Optional</sup> <a name="resourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearning.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsMariaDb <a name="CloudAzureIntegrationsMariaDb" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDb.Initializer"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

const cloudAzureIntegrationsMariaDb: cloudAzureIntegrations.CloudAzureIntegrationsMariaDb = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDb.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDb.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDb.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `resourceGroups`<sup>Optional</sup> <a name="resourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDb.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsMonitor <a name="CloudAzureIntegrationsMonitor" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitor.Initializer"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

const cloudAzureIntegrationsMonitor: cloudAzureIntegrations.CloudAzureIntegrationsMonitor = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitor.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | A flag that specifies if the integration is active. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitor.property.excludeTags">excludeTags</a></code> | <code>string[]</code> | Specify resource tags in 'key:value' form to be excluded from monitoring. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitor.property.includeTags">includeTags</a></code> | <code>string[]</code> | Specify resource tags in 'key:value' form to be monitored. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitor.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitor.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitor.property.resourceTypes">resourceTypes</a></code> | <code>string[]</code> | Specify each Azure resource type that needs to be monitored. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitor.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

A flag that specifies if the integration is active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#enabled CloudAzureIntegrations#enabled}

---

##### `excludeTags`<sup>Optional</sup> <a name="excludeTags" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitor.property.excludeTags"></a>

```typescript
public readonly excludeTags: string[];
```

- *Type:* string[]

Specify resource tags in 'key:value' form to be excluded from monitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#exclude_tags CloudAzureIntegrations#exclude_tags}

---

##### `includeTags`<sup>Optional</sup> <a name="includeTags" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitor.property.includeTags"></a>

```typescript
public readonly includeTags: string[];
```

- *Type:* string[]

Specify resource tags in 'key:value' form to be monitored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#include_tags CloudAzureIntegrations#include_tags}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitor.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `resourceGroups`<sup>Optional</sup> <a name="resourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitor.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

##### `resourceTypes`<sup>Optional</sup> <a name="resourceTypes" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitor.property.resourceTypes"></a>

```typescript
public readonly resourceTypes: string[];
```

- *Type:* string[]

Specify each Azure resource type that needs to be monitored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#resource_types CloudAzureIntegrations#resource_types}

---

### CloudAzureIntegrationsMysql <a name="CloudAzureIntegrationsMysql" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysql.Initializer"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

const cloudAzureIntegrationsMysql: cloudAzureIntegrations.CloudAzureIntegrationsMysql = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysql.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysql.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysql.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `resourceGroups`<sup>Optional</sup> <a name="resourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysql.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsMysqlFlexible <a name="CloudAzureIntegrationsMysqlFlexible" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexible"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexible.Initializer"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

const cloudAzureIntegrationsMysqlFlexible: cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexible = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexible.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexible.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexible.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `resourceGroups`<sup>Optional</sup> <a name="resourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexible.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsPostgresql <a name="CloudAzureIntegrationsPostgresql" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresql.Initializer"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

const cloudAzureIntegrationsPostgresql: cloudAzureIntegrations.CloudAzureIntegrationsPostgresql = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresql.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresql.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresql.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `resourceGroups`<sup>Optional</sup> <a name="resourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresql.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsPostgresqlFlexible <a name="CloudAzureIntegrationsPostgresqlFlexible" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexible"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexible.Initializer"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

const cloudAzureIntegrationsPostgresqlFlexible: cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexible = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexible.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexible.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexible.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `resourceGroups`<sup>Optional</sup> <a name="resourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexible.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsPowerBiDedicated <a name="CloudAzureIntegrationsPowerBiDedicated" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicated"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicated.Initializer"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

const cloudAzureIntegrationsPowerBiDedicated: cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicated = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicated.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicated.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicated.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `resourceGroups`<sup>Optional</sup> <a name="resourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicated.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsRedisCache <a name="CloudAzureIntegrationsRedisCache" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCache"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCache.Initializer"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

const cloudAzureIntegrationsRedisCache: cloudAzureIntegrations.CloudAzureIntegrationsRedisCache = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCache.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCache.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCache.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `resourceGroups`<sup>Optional</sup> <a name="resourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCache.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsServiceBus <a name="CloudAzureIntegrationsServiceBus" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBus.Initializer"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

const cloudAzureIntegrationsServiceBus: cloudAzureIntegrations.CloudAzureIntegrationsServiceBus = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBus.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBus.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBus.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `resourceGroups`<sup>Optional</sup> <a name="resourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBus.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsSql <a name="CloudAzureIntegrationsSql" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSql.Initializer"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

const cloudAzureIntegrationsSql: cloudAzureIntegrations.CloudAzureIntegrationsSql = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSql.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSql.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSql.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `resourceGroups`<sup>Optional</sup> <a name="resourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSql.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsSqlManaged <a name="CloudAzureIntegrationsSqlManaged" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManaged"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManaged.Initializer"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

const cloudAzureIntegrationsSqlManaged: cloudAzureIntegrations.CloudAzureIntegrationsSqlManaged = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManaged.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManaged.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManaged.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `resourceGroups`<sup>Optional</sup> <a name="resourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManaged.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsStorage <a name="CloudAzureIntegrationsStorage" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorage.Initializer"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

const cloudAzureIntegrationsStorage: cloudAzureIntegrations.CloudAzureIntegrationsStorage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorage.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorage.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorage.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `resourceGroups`<sup>Optional</sup> <a name="resourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorage.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsVirtualMachine <a name="CloudAzureIntegrationsVirtualMachine" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachine"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachine.Initializer"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

const cloudAzureIntegrationsVirtualMachine: cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachine = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachine.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachine.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachine.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `resourceGroups`<sup>Optional</sup> <a name="resourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachine.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsVirtualNetworks <a name="CloudAzureIntegrationsVirtualNetworks" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworks.Initializer"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

const cloudAzureIntegrationsVirtualNetworks: cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworks.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworks.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworks.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `resourceGroups`<sup>Optional</sup> <a name="resourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworks.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsVms <a name="CloudAzureIntegrationsVms" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVms.Initializer"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

const cloudAzureIntegrationsVms: cloudAzureIntegrations.CloudAzureIntegrationsVms = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVms.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVms.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVms.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `resourceGroups`<sup>Optional</sup> <a name="resourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVms.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsVpnGateway <a name="CloudAzureIntegrationsVpnGateway" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGateway"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGateway.Initializer"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

const cloudAzureIntegrationsVpnGateway: cloudAzureIntegrations.CloudAzureIntegrationsVpnGateway = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGateway.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGateway.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGateway.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `resourceGroups`<sup>Optional</sup> <a name="resourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGateway.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudAzureIntegrationsApiManagementOutputReference <a name="CloudAzureIntegrationsApiManagementOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.Initializer"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

new cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.resetResourceGroups">resetResourceGroups</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```

##### `resetResourceGroups` <a name="resetResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.resetResourceGroups"></a>

```typescript
public resetResourceGroups(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.property.resourceGroupsInput">resourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagement">CloudAzureIntegrationsApiManagement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `resourceGroupsInput`<sup>Optional</sup> <a name="resourceGroupsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.property.resourceGroupsInput"></a>

```typescript
public readonly resourceGroupsInput: string[];
```

- *Type:* string[]

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `resourceGroups`<sup>Required</sup> <a name="resourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAzureIntegrationsApiManagement;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagement">CloudAzureIntegrationsApiManagement</a>

---


### CloudAzureIntegrationsAppGatewayOutputReference <a name="CloudAzureIntegrationsAppGatewayOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.Initializer"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

new cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.resetResourceGroups">resetResourceGroups</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```

##### `resetResourceGroups` <a name="resetResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.resetResourceGroups"></a>

```typescript
public resetResourceGroups(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.property.resourceGroupsInput">resourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGateway">CloudAzureIntegrationsAppGateway</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `resourceGroupsInput`<sup>Optional</sup> <a name="resourceGroupsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.property.resourceGroupsInput"></a>

```typescript
public readonly resourceGroupsInput: string[];
```

- *Type:* string[]

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `resourceGroups`<sup>Required</sup> <a name="resourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAzureIntegrationsAppGateway;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGateway">CloudAzureIntegrationsAppGateway</a>

---


### CloudAzureIntegrationsAppServiceOutputReference <a name="CloudAzureIntegrationsAppServiceOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.Initializer"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

new cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.resetResourceGroups">resetResourceGroups</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```

##### `resetResourceGroups` <a name="resetResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.resetResourceGroups"></a>

```typescript
public resetResourceGroups(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.property.resourceGroupsInput">resourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppService">CloudAzureIntegrationsAppService</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `resourceGroupsInput`<sup>Optional</sup> <a name="resourceGroupsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.property.resourceGroupsInput"></a>

```typescript
public readonly resourceGroupsInput: string[];
```

- *Type:* string[]

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `resourceGroups`<sup>Required</sup> <a name="resourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAzureIntegrationsAppService;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppService">CloudAzureIntegrationsAppService</a>

---


### CloudAzureIntegrationsContainersOutputReference <a name="CloudAzureIntegrationsContainersOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.Initializer"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

new cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.resetResourceGroups">resetResourceGroups</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```

##### `resetResourceGroups` <a name="resetResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.resetResourceGroups"></a>

```typescript
public resetResourceGroups(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.property.resourceGroupsInput">resourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainers">CloudAzureIntegrationsContainers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `resourceGroupsInput`<sup>Optional</sup> <a name="resourceGroupsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.property.resourceGroupsInput"></a>

```typescript
public readonly resourceGroupsInput: string[];
```

- *Type:* string[]

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `resourceGroups`<sup>Required</sup> <a name="resourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAzureIntegrationsContainers;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainers">CloudAzureIntegrationsContainers</a>

---


### CloudAzureIntegrationsCosmosDbOutputReference <a name="CloudAzureIntegrationsCosmosDbOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.Initializer"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

new cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.resetResourceGroups">resetResourceGroups</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```

##### `resetResourceGroups` <a name="resetResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.resetResourceGroups"></a>

```typescript
public resetResourceGroups(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.property.resourceGroupsInput">resourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDb">CloudAzureIntegrationsCosmosDb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `resourceGroupsInput`<sup>Optional</sup> <a name="resourceGroupsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.property.resourceGroupsInput"></a>

```typescript
public readonly resourceGroupsInput: string[];
```

- *Type:* string[]

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `resourceGroups`<sup>Required</sup> <a name="resourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAzureIntegrationsCosmosDb;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDb">CloudAzureIntegrationsCosmosDb</a>

---


### CloudAzureIntegrationsCostManagementOutputReference <a name="CloudAzureIntegrationsCostManagementOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.Initializer"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

new cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.resetTagKeys">resetTagKeys</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```

##### `resetTagKeys` <a name="resetTagKeys" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.resetTagKeys"></a>

```typescript
public resetTagKeys(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.property.tagKeysInput">tagKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.property.tagKeys">tagKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagement">CloudAzureIntegrationsCostManagement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `tagKeysInput`<sup>Optional</sup> <a name="tagKeysInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.property.tagKeysInput"></a>

```typescript
public readonly tagKeysInput: string[];
```

- *Type:* string[]

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `tagKeys`<sup>Required</sup> <a name="tagKeys" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.property.tagKeys"></a>

```typescript
public readonly tagKeys: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAzureIntegrationsCostManagement;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagement">CloudAzureIntegrationsCostManagement</a>

---


### CloudAzureIntegrationsDataFactoryOutputReference <a name="CloudAzureIntegrationsDataFactoryOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.Initializer"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

new cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.resetResourceGroups">resetResourceGroups</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```

##### `resetResourceGroups` <a name="resetResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.resetResourceGroups"></a>

```typescript
public resetResourceGroups(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.property.resourceGroupsInput">resourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactory">CloudAzureIntegrationsDataFactory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `resourceGroupsInput`<sup>Optional</sup> <a name="resourceGroupsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.property.resourceGroupsInput"></a>

```typescript
public readonly resourceGroupsInput: string[];
```

- *Type:* string[]

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `resourceGroups`<sup>Required</sup> <a name="resourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAzureIntegrationsDataFactory;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactory">CloudAzureIntegrationsDataFactory</a>

---


### CloudAzureIntegrationsEventHubOutputReference <a name="CloudAzureIntegrationsEventHubOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.Initializer"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

new cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.resetResourceGroups">resetResourceGroups</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```

##### `resetResourceGroups` <a name="resetResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.resetResourceGroups"></a>

```typescript
public resetResourceGroups(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.property.resourceGroupsInput">resourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHub">CloudAzureIntegrationsEventHub</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `resourceGroupsInput`<sup>Optional</sup> <a name="resourceGroupsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.property.resourceGroupsInput"></a>

```typescript
public readonly resourceGroupsInput: string[];
```

- *Type:* string[]

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `resourceGroups`<sup>Required</sup> <a name="resourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAzureIntegrationsEventHub;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHub">CloudAzureIntegrationsEventHub</a>

---


### CloudAzureIntegrationsExpressRouteOutputReference <a name="CloudAzureIntegrationsExpressRouteOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.Initializer"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

new cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.resetResourceGroups">resetResourceGroups</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```

##### `resetResourceGroups` <a name="resetResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.resetResourceGroups"></a>

```typescript
public resetResourceGroups(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.property.resourceGroupsInput">resourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRoute">CloudAzureIntegrationsExpressRoute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `resourceGroupsInput`<sup>Optional</sup> <a name="resourceGroupsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.property.resourceGroupsInput"></a>

```typescript
public readonly resourceGroupsInput: string[];
```

- *Type:* string[]

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `resourceGroups`<sup>Required</sup> <a name="resourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAzureIntegrationsExpressRoute;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRoute">CloudAzureIntegrationsExpressRoute</a>

---


### CloudAzureIntegrationsFirewallsOutputReference <a name="CloudAzureIntegrationsFirewallsOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.Initializer"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

new cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.resetResourceGroups">resetResourceGroups</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```

##### `resetResourceGroups` <a name="resetResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.resetResourceGroups"></a>

```typescript
public resetResourceGroups(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.property.resourceGroupsInput">resourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewalls">CloudAzureIntegrationsFirewalls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `resourceGroupsInput`<sup>Optional</sup> <a name="resourceGroupsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.property.resourceGroupsInput"></a>

```typescript
public readonly resourceGroupsInput: string[];
```

- *Type:* string[]

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `resourceGroups`<sup>Required</sup> <a name="resourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAzureIntegrationsFirewalls;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewalls">CloudAzureIntegrationsFirewalls</a>

---


### CloudAzureIntegrationsFrontDoorOutputReference <a name="CloudAzureIntegrationsFrontDoorOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.Initializer"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

new cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.resetResourceGroups">resetResourceGroups</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```

##### `resetResourceGroups` <a name="resetResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.resetResourceGroups"></a>

```typescript
public resetResourceGroups(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.property.resourceGroupsInput">resourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoor">CloudAzureIntegrationsFrontDoor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `resourceGroupsInput`<sup>Optional</sup> <a name="resourceGroupsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.property.resourceGroupsInput"></a>

```typescript
public readonly resourceGroupsInput: string[];
```

- *Type:* string[]

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `resourceGroups`<sup>Required</sup> <a name="resourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAzureIntegrationsFrontDoor;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoor">CloudAzureIntegrationsFrontDoor</a>

---


### CloudAzureIntegrationsFunctionsOutputReference <a name="CloudAzureIntegrationsFunctionsOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.Initializer"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

new cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.resetResourceGroups">resetResourceGroups</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```

##### `resetResourceGroups` <a name="resetResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.resetResourceGroups"></a>

```typescript
public resetResourceGroups(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.property.resourceGroupsInput">resourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctions">CloudAzureIntegrationsFunctions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `resourceGroupsInput`<sup>Optional</sup> <a name="resourceGroupsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.property.resourceGroupsInput"></a>

```typescript
public readonly resourceGroupsInput: string[];
```

- *Type:* string[]

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `resourceGroups`<sup>Required</sup> <a name="resourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAzureIntegrationsFunctions;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctions">CloudAzureIntegrationsFunctions</a>

---


### CloudAzureIntegrationsKeyVaultOutputReference <a name="CloudAzureIntegrationsKeyVaultOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.Initializer"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

new cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.resetResourceGroups">resetResourceGroups</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```

##### `resetResourceGroups` <a name="resetResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.resetResourceGroups"></a>

```typescript
public resetResourceGroups(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.property.resourceGroupsInput">resourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVault">CloudAzureIntegrationsKeyVault</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `resourceGroupsInput`<sup>Optional</sup> <a name="resourceGroupsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.property.resourceGroupsInput"></a>

```typescript
public readonly resourceGroupsInput: string[];
```

- *Type:* string[]

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `resourceGroups`<sup>Required</sup> <a name="resourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAzureIntegrationsKeyVault;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVault">CloudAzureIntegrationsKeyVault</a>

---


### CloudAzureIntegrationsLoadBalancerOutputReference <a name="CloudAzureIntegrationsLoadBalancerOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.Initializer"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

new cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.resetResourceGroups">resetResourceGroups</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```

##### `resetResourceGroups` <a name="resetResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.resetResourceGroups"></a>

```typescript
public resetResourceGroups(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.property.resourceGroupsInput">resourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancer">CloudAzureIntegrationsLoadBalancer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `resourceGroupsInput`<sup>Optional</sup> <a name="resourceGroupsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.property.resourceGroupsInput"></a>

```typescript
public readonly resourceGroupsInput: string[];
```

- *Type:* string[]

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `resourceGroups`<sup>Required</sup> <a name="resourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAzureIntegrationsLoadBalancer;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancer">CloudAzureIntegrationsLoadBalancer</a>

---


### CloudAzureIntegrationsLogicAppsOutputReference <a name="CloudAzureIntegrationsLogicAppsOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.Initializer"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

new cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.resetResourceGroups">resetResourceGroups</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```

##### `resetResourceGroups` <a name="resetResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.resetResourceGroups"></a>

```typescript
public resetResourceGroups(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.property.resourceGroupsInput">resourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicApps">CloudAzureIntegrationsLogicApps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `resourceGroupsInput`<sup>Optional</sup> <a name="resourceGroupsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.property.resourceGroupsInput"></a>

```typescript
public readonly resourceGroupsInput: string[];
```

- *Type:* string[]

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `resourceGroups`<sup>Required</sup> <a name="resourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAzureIntegrationsLogicApps;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicApps">CloudAzureIntegrationsLogicApps</a>

---


### CloudAzureIntegrationsMachineLearningOutputReference <a name="CloudAzureIntegrationsMachineLearningOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.Initializer"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

new cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.resetResourceGroups">resetResourceGroups</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```

##### `resetResourceGroups` <a name="resetResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.resetResourceGroups"></a>

```typescript
public resetResourceGroups(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.property.resourceGroupsInput">resourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearning">CloudAzureIntegrationsMachineLearning</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `resourceGroupsInput`<sup>Optional</sup> <a name="resourceGroupsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.property.resourceGroupsInput"></a>

```typescript
public readonly resourceGroupsInput: string[];
```

- *Type:* string[]

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `resourceGroups`<sup>Required</sup> <a name="resourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAzureIntegrationsMachineLearning;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearning">CloudAzureIntegrationsMachineLearning</a>

---


### CloudAzureIntegrationsMariaDbOutputReference <a name="CloudAzureIntegrationsMariaDbOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.Initializer"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

new cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.resetResourceGroups">resetResourceGroups</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```

##### `resetResourceGroups` <a name="resetResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.resetResourceGroups"></a>

```typescript
public resetResourceGroups(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.property.resourceGroupsInput">resourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDb">CloudAzureIntegrationsMariaDb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `resourceGroupsInput`<sup>Optional</sup> <a name="resourceGroupsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.property.resourceGroupsInput"></a>

```typescript
public readonly resourceGroupsInput: string[];
```

- *Type:* string[]

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `resourceGroups`<sup>Required</sup> <a name="resourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAzureIntegrationsMariaDb;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDb">CloudAzureIntegrationsMariaDb</a>

---


### CloudAzureIntegrationsMonitorOutputReference <a name="CloudAzureIntegrationsMonitorOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.Initializer"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

new cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.resetExcludeTags">resetExcludeTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.resetIncludeTags">resetIncludeTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.resetResourceGroups">resetResourceGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.resetResourceTypes">resetResourceTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetExcludeTags` <a name="resetExcludeTags" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.resetExcludeTags"></a>

```typescript
public resetExcludeTags(): void
```

##### `resetIncludeTags` <a name="resetIncludeTags" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.resetIncludeTags"></a>

```typescript
public resetIncludeTags(): void
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```

##### `resetResourceGroups` <a name="resetResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.resetResourceGroups"></a>

```typescript
public resetResourceGroups(): void
```

##### `resetResourceTypes` <a name="resetResourceTypes" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.resetResourceTypes"></a>

```typescript
public resetResourceTypes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.excludeTagsInput">excludeTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.includeTagsInput">includeTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.resourceGroupsInput">resourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.resourceTypesInput">resourceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.excludeTags">excludeTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.includeTags">includeTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.resourceTypes">resourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitor">CloudAzureIntegrationsMonitor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `excludeTagsInput`<sup>Optional</sup> <a name="excludeTagsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.excludeTagsInput"></a>

```typescript
public readonly excludeTagsInput: string[];
```

- *Type:* string[]

---

##### `includeTagsInput`<sup>Optional</sup> <a name="includeTagsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.includeTagsInput"></a>

```typescript
public readonly includeTagsInput: string[];
```

- *Type:* string[]

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `resourceGroupsInput`<sup>Optional</sup> <a name="resourceGroupsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.resourceGroupsInput"></a>

```typescript
public readonly resourceGroupsInput: string[];
```

- *Type:* string[]

---

##### `resourceTypesInput`<sup>Optional</sup> <a name="resourceTypesInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.resourceTypesInput"></a>

```typescript
public readonly resourceTypesInput: string[];
```

- *Type:* string[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `excludeTags`<sup>Required</sup> <a name="excludeTags" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.excludeTags"></a>

```typescript
public readonly excludeTags: string[];
```

- *Type:* string[]

---

##### `includeTags`<sup>Required</sup> <a name="includeTags" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.includeTags"></a>

```typescript
public readonly includeTags: string[];
```

- *Type:* string[]

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `resourceGroups`<sup>Required</sup> <a name="resourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.resourceTypes"></a>

```typescript
public readonly resourceTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAzureIntegrationsMonitor;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitor">CloudAzureIntegrationsMonitor</a>

---


### CloudAzureIntegrationsMysqlFlexibleOutputReference <a name="CloudAzureIntegrationsMysqlFlexibleOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.Initializer"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

new cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.resetResourceGroups">resetResourceGroups</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```

##### `resetResourceGroups` <a name="resetResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.resetResourceGroups"></a>

```typescript
public resetResourceGroups(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.property.resourceGroupsInput">resourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexible">CloudAzureIntegrationsMysqlFlexible</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `resourceGroupsInput`<sup>Optional</sup> <a name="resourceGroupsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.property.resourceGroupsInput"></a>

```typescript
public readonly resourceGroupsInput: string[];
```

- *Type:* string[]

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `resourceGroups`<sup>Required</sup> <a name="resourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAzureIntegrationsMysqlFlexible;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexible">CloudAzureIntegrationsMysqlFlexible</a>

---


### CloudAzureIntegrationsMysqlOutputReference <a name="CloudAzureIntegrationsMysqlOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.Initializer"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

new cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.resetResourceGroups">resetResourceGroups</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```

##### `resetResourceGroups` <a name="resetResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.resetResourceGroups"></a>

```typescript
public resetResourceGroups(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.property.resourceGroupsInput">resourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysql">CloudAzureIntegrationsMysql</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `resourceGroupsInput`<sup>Optional</sup> <a name="resourceGroupsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.property.resourceGroupsInput"></a>

```typescript
public readonly resourceGroupsInput: string[];
```

- *Type:* string[]

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `resourceGroups`<sup>Required</sup> <a name="resourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAzureIntegrationsMysql;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysql">CloudAzureIntegrationsMysql</a>

---


### CloudAzureIntegrationsPostgresqlFlexibleOutputReference <a name="CloudAzureIntegrationsPostgresqlFlexibleOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.Initializer"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

new cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.resetResourceGroups">resetResourceGroups</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```

##### `resetResourceGroups` <a name="resetResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.resetResourceGroups"></a>

```typescript
public resetResourceGroups(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.property.resourceGroupsInput">resourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexible">CloudAzureIntegrationsPostgresqlFlexible</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `resourceGroupsInput`<sup>Optional</sup> <a name="resourceGroupsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.property.resourceGroupsInput"></a>

```typescript
public readonly resourceGroupsInput: string[];
```

- *Type:* string[]

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `resourceGroups`<sup>Required</sup> <a name="resourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAzureIntegrationsPostgresqlFlexible;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexible">CloudAzureIntegrationsPostgresqlFlexible</a>

---


### CloudAzureIntegrationsPostgresqlOutputReference <a name="CloudAzureIntegrationsPostgresqlOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.Initializer"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

new cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.resetResourceGroups">resetResourceGroups</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```

##### `resetResourceGroups` <a name="resetResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.resetResourceGroups"></a>

```typescript
public resetResourceGroups(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.property.resourceGroupsInput">resourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresql">CloudAzureIntegrationsPostgresql</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `resourceGroupsInput`<sup>Optional</sup> <a name="resourceGroupsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.property.resourceGroupsInput"></a>

```typescript
public readonly resourceGroupsInput: string[];
```

- *Type:* string[]

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `resourceGroups`<sup>Required</sup> <a name="resourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAzureIntegrationsPostgresql;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresql">CloudAzureIntegrationsPostgresql</a>

---


### CloudAzureIntegrationsPowerBiDedicatedOutputReference <a name="CloudAzureIntegrationsPowerBiDedicatedOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.Initializer"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

new cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.resetResourceGroups">resetResourceGroups</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```

##### `resetResourceGroups` <a name="resetResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.resetResourceGroups"></a>

```typescript
public resetResourceGroups(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.property.resourceGroupsInput">resourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicated">CloudAzureIntegrationsPowerBiDedicated</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `resourceGroupsInput`<sup>Optional</sup> <a name="resourceGroupsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.property.resourceGroupsInput"></a>

```typescript
public readonly resourceGroupsInput: string[];
```

- *Type:* string[]

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `resourceGroups`<sup>Required</sup> <a name="resourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAzureIntegrationsPowerBiDedicated;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicated">CloudAzureIntegrationsPowerBiDedicated</a>

---


### CloudAzureIntegrationsRedisCacheOutputReference <a name="CloudAzureIntegrationsRedisCacheOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.Initializer"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

new cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.resetResourceGroups">resetResourceGroups</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```

##### `resetResourceGroups` <a name="resetResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.resetResourceGroups"></a>

```typescript
public resetResourceGroups(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.property.resourceGroupsInput">resourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCache">CloudAzureIntegrationsRedisCache</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `resourceGroupsInput`<sup>Optional</sup> <a name="resourceGroupsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.property.resourceGroupsInput"></a>

```typescript
public readonly resourceGroupsInput: string[];
```

- *Type:* string[]

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `resourceGroups`<sup>Required</sup> <a name="resourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAzureIntegrationsRedisCache;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCache">CloudAzureIntegrationsRedisCache</a>

---


### CloudAzureIntegrationsServiceBusOutputReference <a name="CloudAzureIntegrationsServiceBusOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.Initializer"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

new cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.resetResourceGroups">resetResourceGroups</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```

##### `resetResourceGroups` <a name="resetResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.resetResourceGroups"></a>

```typescript
public resetResourceGroups(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.property.resourceGroupsInput">resourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBus">CloudAzureIntegrationsServiceBus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `resourceGroupsInput`<sup>Optional</sup> <a name="resourceGroupsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.property.resourceGroupsInput"></a>

```typescript
public readonly resourceGroupsInput: string[];
```

- *Type:* string[]

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `resourceGroups`<sup>Required</sup> <a name="resourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAzureIntegrationsServiceBus;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBus">CloudAzureIntegrationsServiceBus</a>

---


### CloudAzureIntegrationsSqlManagedOutputReference <a name="CloudAzureIntegrationsSqlManagedOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.Initializer"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

new cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.resetResourceGroups">resetResourceGroups</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```

##### `resetResourceGroups` <a name="resetResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.resetResourceGroups"></a>

```typescript
public resetResourceGroups(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.property.resourceGroupsInput">resourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManaged">CloudAzureIntegrationsSqlManaged</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `resourceGroupsInput`<sup>Optional</sup> <a name="resourceGroupsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.property.resourceGroupsInput"></a>

```typescript
public readonly resourceGroupsInput: string[];
```

- *Type:* string[]

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `resourceGroups`<sup>Required</sup> <a name="resourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAzureIntegrationsSqlManaged;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManaged">CloudAzureIntegrationsSqlManaged</a>

---


### CloudAzureIntegrationsSqlOutputReference <a name="CloudAzureIntegrationsSqlOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.Initializer"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

new cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.resetResourceGroups">resetResourceGroups</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```

##### `resetResourceGroups` <a name="resetResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.resetResourceGroups"></a>

```typescript
public resetResourceGroups(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.property.resourceGroupsInput">resourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSql">CloudAzureIntegrationsSql</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `resourceGroupsInput`<sup>Optional</sup> <a name="resourceGroupsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.property.resourceGroupsInput"></a>

```typescript
public readonly resourceGroupsInput: string[];
```

- *Type:* string[]

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `resourceGroups`<sup>Required</sup> <a name="resourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAzureIntegrationsSql;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSql">CloudAzureIntegrationsSql</a>

---


### CloudAzureIntegrationsStorageOutputReference <a name="CloudAzureIntegrationsStorageOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.Initializer"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

new cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.resetResourceGroups">resetResourceGroups</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```

##### `resetResourceGroups` <a name="resetResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.resetResourceGroups"></a>

```typescript
public resetResourceGroups(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.property.resourceGroupsInput">resourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorage">CloudAzureIntegrationsStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `resourceGroupsInput`<sup>Optional</sup> <a name="resourceGroupsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.property.resourceGroupsInput"></a>

```typescript
public readonly resourceGroupsInput: string[];
```

- *Type:* string[]

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `resourceGroups`<sup>Required</sup> <a name="resourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAzureIntegrationsStorage;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorage">CloudAzureIntegrationsStorage</a>

---


### CloudAzureIntegrationsVirtualMachineOutputReference <a name="CloudAzureIntegrationsVirtualMachineOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.Initializer"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

new cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.resetResourceGroups">resetResourceGroups</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```

##### `resetResourceGroups` <a name="resetResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.resetResourceGroups"></a>

```typescript
public resetResourceGroups(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.property.resourceGroupsInput">resourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachine">CloudAzureIntegrationsVirtualMachine</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `resourceGroupsInput`<sup>Optional</sup> <a name="resourceGroupsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.property.resourceGroupsInput"></a>

```typescript
public readonly resourceGroupsInput: string[];
```

- *Type:* string[]

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `resourceGroups`<sup>Required</sup> <a name="resourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAzureIntegrationsVirtualMachine;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachine">CloudAzureIntegrationsVirtualMachine</a>

---


### CloudAzureIntegrationsVirtualNetworksOutputReference <a name="CloudAzureIntegrationsVirtualNetworksOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.Initializer"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

new cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.resetResourceGroups">resetResourceGroups</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```

##### `resetResourceGroups` <a name="resetResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.resetResourceGroups"></a>

```typescript
public resetResourceGroups(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.property.resourceGroupsInput">resourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworks">CloudAzureIntegrationsVirtualNetworks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `resourceGroupsInput`<sup>Optional</sup> <a name="resourceGroupsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.property.resourceGroupsInput"></a>

```typescript
public readonly resourceGroupsInput: string[];
```

- *Type:* string[]

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `resourceGroups`<sup>Required</sup> <a name="resourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAzureIntegrationsVirtualNetworks;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworks">CloudAzureIntegrationsVirtualNetworks</a>

---


### CloudAzureIntegrationsVmsOutputReference <a name="CloudAzureIntegrationsVmsOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.Initializer"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

new cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.resetResourceGroups">resetResourceGroups</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```

##### `resetResourceGroups` <a name="resetResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.resetResourceGroups"></a>

```typescript
public resetResourceGroups(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.property.resourceGroupsInput">resourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVms">CloudAzureIntegrationsVms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `resourceGroupsInput`<sup>Optional</sup> <a name="resourceGroupsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.property.resourceGroupsInput"></a>

```typescript
public readonly resourceGroupsInput: string[];
```

- *Type:* string[]

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `resourceGroups`<sup>Required</sup> <a name="resourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAzureIntegrationsVms;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVms">CloudAzureIntegrationsVms</a>

---


### CloudAzureIntegrationsVpnGatewayOutputReference <a name="CloudAzureIntegrationsVpnGatewayOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.Initializer"></a>

```typescript
import { cloudAzureIntegrations } from '@cdktf/provider-newrelic'

new cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.resetResourceGroups">resetResourceGroups</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```

##### `resetResourceGroups` <a name="resetResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.resetResourceGroups"></a>

```typescript
public resetResourceGroups(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.property.resourceGroupsInput">resourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.property.resourceGroups">resourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGateway">CloudAzureIntegrationsVpnGateway</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `resourceGroupsInput`<sup>Optional</sup> <a name="resourceGroupsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.property.resourceGroupsInput"></a>

```typescript
public readonly resourceGroupsInput: string[];
```

- *Type:* string[]

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `resourceGroups`<sup>Required</sup> <a name="resourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.property.resourceGroups"></a>

```typescript
public readonly resourceGroups: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAzureIntegrationsVpnGateway;
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGateway">CloudAzureIntegrationsVpnGateway</a>

---



