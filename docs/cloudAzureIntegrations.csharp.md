# `cloudAzureIntegrations` Submodule <a name="`cloudAzureIntegrations` Submodule" id="@cdktf/provider-newrelic.cloudAzureIntegrations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudAzureIntegrations <a name="CloudAzureIntegrations" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations newrelic_cloud_azure_integrations}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureIntegrations(Construct Scope, string Id, CloudAzureIntegrationsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig">CloudAzureIntegrationsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig">CloudAzureIntegrationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putApiManagement">PutApiManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putAppGateway">PutAppGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putAppService">PutAppService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putAutoDiscovery">PutAutoDiscovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putContainers">PutContainers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putCosmosDb">PutCosmosDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putCostManagement">PutCostManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putDataFactory">PutDataFactory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putEventHub">PutEventHub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putExpressRoute">PutExpressRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putFirewalls">PutFirewalls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putFrontDoor">PutFrontDoor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putFunctions">PutFunctions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putKeyVault">PutKeyVault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putLoadBalancer">PutLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putLogicApps">PutLogicApps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putMachineLearning">PutMachineLearning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putMariaDb">PutMariaDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putMonitor">PutMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putMysql">PutMysql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putMysqlFlexible">PutMysqlFlexible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putPostgresql">PutPostgresql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putPostgresqlFlexible">PutPostgresqlFlexible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putPowerBiDedicated">PutPowerBiDedicated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putRedisCache">PutRedisCache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putServiceBus">PutServiceBus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putSql">PutSql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putSqlManaged">PutSqlManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putStorage">PutStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putVirtualMachine">PutVirtualMachine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putVirtualNetworks">PutVirtualNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putVms">PutVms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putVpnGateway">PutVpnGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetApiManagement">ResetApiManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetAppGateway">ResetAppGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetAppService">ResetAppService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetAutoDiscovery">ResetAutoDiscovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetContainers">ResetContainers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetCosmosDb">ResetCosmosDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetCostManagement">ResetCostManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetDataFactory">ResetDataFactory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetEventHub">ResetEventHub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetExpressRoute">ResetExpressRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetFirewalls">ResetFirewalls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetFrontDoor">ResetFrontDoor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetFunctions">ResetFunctions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetKeyVault">ResetKeyVault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetLoadBalancer">ResetLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetLogicApps">ResetLogicApps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetMachineLearning">ResetMachineLearning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetMariaDb">ResetMariaDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetMonitor">ResetMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetMysql">ResetMysql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetMysqlFlexible">ResetMysqlFlexible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetPostgresql">ResetPostgresql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetPostgresqlFlexible">ResetPostgresqlFlexible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetPowerBiDedicated">ResetPowerBiDedicated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetRedisCache">ResetRedisCache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetServiceBus">ResetServiceBus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetSql">ResetSql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetSqlManaged">ResetSqlManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetStorage">ResetStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetVirtualMachine">ResetVirtualMachine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetVirtualNetworks">ResetVirtualNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetVms">ResetVms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetVpnGateway">ResetVpnGateway</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutApiManagement` <a name="PutApiManagement" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putApiManagement"></a>

```csharp
private void PutApiManagement(CloudAzureIntegrationsApiManagement Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putApiManagement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagement">CloudAzureIntegrationsApiManagement</a>

---

##### `PutAppGateway` <a name="PutAppGateway" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putAppGateway"></a>

```csharp
private void PutAppGateway(CloudAzureIntegrationsAppGateway Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putAppGateway.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGateway">CloudAzureIntegrationsAppGateway</a>

---

##### `PutAppService` <a name="PutAppService" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putAppService"></a>

```csharp
private void PutAppService(CloudAzureIntegrationsAppService Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putAppService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppService">CloudAzureIntegrationsAppService</a>

---

##### `PutAutoDiscovery` <a name="PutAutoDiscovery" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putAutoDiscovery"></a>

```csharp
private void PutAutoDiscovery(CloudAzureIntegrationsAutoDiscovery Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putAutoDiscovery.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscovery">CloudAzureIntegrationsAutoDiscovery</a>

---

##### `PutContainers` <a name="PutContainers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putContainers"></a>

```csharp
private void PutContainers(CloudAzureIntegrationsContainers Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putContainers.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainers">CloudAzureIntegrationsContainers</a>

---

##### `PutCosmosDb` <a name="PutCosmosDb" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putCosmosDb"></a>

```csharp
private void PutCosmosDb(CloudAzureIntegrationsCosmosDb Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putCosmosDb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDb">CloudAzureIntegrationsCosmosDb</a>

---

##### `PutCostManagement` <a name="PutCostManagement" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putCostManagement"></a>

```csharp
private void PutCostManagement(CloudAzureIntegrationsCostManagement Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putCostManagement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagement">CloudAzureIntegrationsCostManagement</a>

---

##### `PutDataFactory` <a name="PutDataFactory" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putDataFactory"></a>

```csharp
private void PutDataFactory(CloudAzureIntegrationsDataFactory Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putDataFactory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactory">CloudAzureIntegrationsDataFactory</a>

---

##### `PutEventHub` <a name="PutEventHub" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putEventHub"></a>

```csharp
private void PutEventHub(CloudAzureIntegrationsEventHub Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putEventHub.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHub">CloudAzureIntegrationsEventHub</a>

---

##### `PutExpressRoute` <a name="PutExpressRoute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putExpressRoute"></a>

```csharp
private void PutExpressRoute(CloudAzureIntegrationsExpressRoute Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putExpressRoute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRoute">CloudAzureIntegrationsExpressRoute</a>

---

##### `PutFirewalls` <a name="PutFirewalls" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putFirewalls"></a>

```csharp
private void PutFirewalls(CloudAzureIntegrationsFirewalls Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putFirewalls.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewalls">CloudAzureIntegrationsFirewalls</a>

---

##### `PutFrontDoor` <a name="PutFrontDoor" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putFrontDoor"></a>

```csharp
private void PutFrontDoor(CloudAzureIntegrationsFrontDoor Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putFrontDoor.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoor">CloudAzureIntegrationsFrontDoor</a>

---

##### `PutFunctions` <a name="PutFunctions" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putFunctions"></a>

```csharp
private void PutFunctions(CloudAzureIntegrationsFunctions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putFunctions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctions">CloudAzureIntegrationsFunctions</a>

---

##### `PutKeyVault` <a name="PutKeyVault" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putKeyVault"></a>

```csharp
private void PutKeyVault(CloudAzureIntegrationsKeyVault Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putKeyVault.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVault">CloudAzureIntegrationsKeyVault</a>

---

##### `PutLoadBalancer` <a name="PutLoadBalancer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putLoadBalancer"></a>

```csharp
private void PutLoadBalancer(CloudAzureIntegrationsLoadBalancer Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putLoadBalancer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancer">CloudAzureIntegrationsLoadBalancer</a>

---

##### `PutLogicApps` <a name="PutLogicApps" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putLogicApps"></a>

```csharp
private void PutLogicApps(CloudAzureIntegrationsLogicApps Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putLogicApps.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicApps">CloudAzureIntegrationsLogicApps</a>

---

##### `PutMachineLearning` <a name="PutMachineLearning" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putMachineLearning"></a>

```csharp
private void PutMachineLearning(CloudAzureIntegrationsMachineLearning Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putMachineLearning.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearning">CloudAzureIntegrationsMachineLearning</a>

---

##### `PutMariaDb` <a name="PutMariaDb" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putMariaDb"></a>

```csharp
private void PutMariaDb(CloudAzureIntegrationsMariaDb Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putMariaDb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDb">CloudAzureIntegrationsMariaDb</a>

---

##### `PutMonitor` <a name="PutMonitor" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putMonitor"></a>

```csharp
private void PutMonitor(CloudAzureIntegrationsMonitor Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putMonitor.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitor">CloudAzureIntegrationsMonitor</a>

---

##### `PutMysql` <a name="PutMysql" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putMysql"></a>

```csharp
private void PutMysql(CloudAzureIntegrationsMysql Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putMysql.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysql">CloudAzureIntegrationsMysql</a>

---

##### `PutMysqlFlexible` <a name="PutMysqlFlexible" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putMysqlFlexible"></a>

```csharp
private void PutMysqlFlexible(CloudAzureIntegrationsMysqlFlexible Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putMysqlFlexible.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexible">CloudAzureIntegrationsMysqlFlexible</a>

---

##### `PutPostgresql` <a name="PutPostgresql" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putPostgresql"></a>

```csharp
private void PutPostgresql(CloudAzureIntegrationsPostgresql Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putPostgresql.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresql">CloudAzureIntegrationsPostgresql</a>

---

##### `PutPostgresqlFlexible` <a name="PutPostgresqlFlexible" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putPostgresqlFlexible"></a>

```csharp
private void PutPostgresqlFlexible(CloudAzureIntegrationsPostgresqlFlexible Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putPostgresqlFlexible.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexible">CloudAzureIntegrationsPostgresqlFlexible</a>

---

##### `PutPowerBiDedicated` <a name="PutPowerBiDedicated" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putPowerBiDedicated"></a>

```csharp
private void PutPowerBiDedicated(CloudAzureIntegrationsPowerBiDedicated Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putPowerBiDedicated.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicated">CloudAzureIntegrationsPowerBiDedicated</a>

---

##### `PutRedisCache` <a name="PutRedisCache" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putRedisCache"></a>

```csharp
private void PutRedisCache(CloudAzureIntegrationsRedisCache Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putRedisCache.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCache">CloudAzureIntegrationsRedisCache</a>

---

##### `PutServiceBus` <a name="PutServiceBus" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putServiceBus"></a>

```csharp
private void PutServiceBus(CloudAzureIntegrationsServiceBus Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putServiceBus.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBus">CloudAzureIntegrationsServiceBus</a>

---

##### `PutSql` <a name="PutSql" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putSql"></a>

```csharp
private void PutSql(CloudAzureIntegrationsSql Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putSql.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSql">CloudAzureIntegrationsSql</a>

---

##### `PutSqlManaged` <a name="PutSqlManaged" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putSqlManaged"></a>

```csharp
private void PutSqlManaged(CloudAzureIntegrationsSqlManaged Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putSqlManaged.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManaged">CloudAzureIntegrationsSqlManaged</a>

---

##### `PutStorage` <a name="PutStorage" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putStorage"></a>

```csharp
private void PutStorage(CloudAzureIntegrationsStorage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putStorage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorage">CloudAzureIntegrationsStorage</a>

---

##### `PutVirtualMachine` <a name="PutVirtualMachine" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putVirtualMachine"></a>

```csharp
private void PutVirtualMachine(CloudAzureIntegrationsVirtualMachine Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putVirtualMachine.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachine">CloudAzureIntegrationsVirtualMachine</a>

---

##### `PutVirtualNetworks` <a name="PutVirtualNetworks" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putVirtualNetworks"></a>

```csharp
private void PutVirtualNetworks(CloudAzureIntegrationsVirtualNetworks Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putVirtualNetworks.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworks">CloudAzureIntegrationsVirtualNetworks</a>

---

##### `PutVms` <a name="PutVms" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putVms"></a>

```csharp
private void PutVms(CloudAzureIntegrationsVms Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putVms.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVms">CloudAzureIntegrationsVms</a>

---

##### `PutVpnGateway` <a name="PutVpnGateway" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putVpnGateway"></a>

```csharp
private void PutVpnGateway(CloudAzureIntegrationsVpnGateway Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putVpnGateway.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGateway">CloudAzureIntegrationsVpnGateway</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetApiManagement` <a name="ResetApiManagement" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetApiManagement"></a>

```csharp
private void ResetApiManagement()
```

##### `ResetAppGateway` <a name="ResetAppGateway" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetAppGateway"></a>

```csharp
private void ResetAppGateway()
```

##### `ResetAppService` <a name="ResetAppService" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetAppService"></a>

```csharp
private void ResetAppService()
```

##### `ResetAutoDiscovery` <a name="ResetAutoDiscovery" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetAutoDiscovery"></a>

```csharp
private void ResetAutoDiscovery()
```

##### `ResetContainers` <a name="ResetContainers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetContainers"></a>

```csharp
private void ResetContainers()
```

##### `ResetCosmosDb` <a name="ResetCosmosDb" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetCosmosDb"></a>

```csharp
private void ResetCosmosDb()
```

##### `ResetCostManagement` <a name="ResetCostManagement" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetCostManagement"></a>

```csharp
private void ResetCostManagement()
```

##### `ResetDataFactory` <a name="ResetDataFactory" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetDataFactory"></a>

```csharp
private void ResetDataFactory()
```

##### `ResetEventHub` <a name="ResetEventHub" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetEventHub"></a>

```csharp
private void ResetEventHub()
```

##### `ResetExpressRoute` <a name="ResetExpressRoute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetExpressRoute"></a>

```csharp
private void ResetExpressRoute()
```

##### `ResetFirewalls` <a name="ResetFirewalls" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetFirewalls"></a>

```csharp
private void ResetFirewalls()
```

##### `ResetFrontDoor` <a name="ResetFrontDoor" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetFrontDoor"></a>

```csharp
private void ResetFrontDoor()
```

##### `ResetFunctions` <a name="ResetFunctions" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetFunctions"></a>

```csharp
private void ResetFunctions()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKeyVault` <a name="ResetKeyVault" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetKeyVault"></a>

```csharp
private void ResetKeyVault()
```

##### `ResetLoadBalancer` <a name="ResetLoadBalancer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetLoadBalancer"></a>

```csharp
private void ResetLoadBalancer()
```

##### `ResetLogicApps` <a name="ResetLogicApps" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetLogicApps"></a>

```csharp
private void ResetLogicApps()
```

##### `ResetMachineLearning` <a name="ResetMachineLearning" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetMachineLearning"></a>

```csharp
private void ResetMachineLearning()
```

##### `ResetMariaDb` <a name="ResetMariaDb" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetMariaDb"></a>

```csharp
private void ResetMariaDb()
```

##### `ResetMonitor` <a name="ResetMonitor" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetMonitor"></a>

```csharp
private void ResetMonitor()
```

##### `ResetMysql` <a name="ResetMysql" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetMysql"></a>

```csharp
private void ResetMysql()
```

##### `ResetMysqlFlexible` <a name="ResetMysqlFlexible" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetMysqlFlexible"></a>

```csharp
private void ResetMysqlFlexible()
```

##### `ResetPostgresql` <a name="ResetPostgresql" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetPostgresql"></a>

```csharp
private void ResetPostgresql()
```

##### `ResetPostgresqlFlexible` <a name="ResetPostgresqlFlexible" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetPostgresqlFlexible"></a>

```csharp
private void ResetPostgresqlFlexible()
```

##### `ResetPowerBiDedicated` <a name="ResetPowerBiDedicated" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetPowerBiDedicated"></a>

```csharp
private void ResetPowerBiDedicated()
```

##### `ResetRedisCache` <a name="ResetRedisCache" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetRedisCache"></a>

```csharp
private void ResetRedisCache()
```

##### `ResetServiceBus` <a name="ResetServiceBus" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetServiceBus"></a>

```csharp
private void ResetServiceBus()
```

##### `ResetSql` <a name="ResetSql" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetSql"></a>

```csharp
private void ResetSql()
```

##### `ResetSqlManaged` <a name="ResetSqlManaged" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetSqlManaged"></a>

```csharp
private void ResetSqlManaged()
```

##### `ResetStorage` <a name="ResetStorage" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetStorage"></a>

```csharp
private void ResetStorage()
```

##### `ResetVirtualMachine` <a name="ResetVirtualMachine" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetVirtualMachine"></a>

```csharp
private void ResetVirtualMachine()
```

##### `ResetVirtualNetworks` <a name="ResetVirtualNetworks" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetVirtualNetworks"></a>

```csharp
private void ResetVirtualNetworks()
```

##### `ResetVms` <a name="ResetVms" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetVms"></a>

```csharp
private void ResetVms()
```

##### `ResetVpnGateway` <a name="ResetVpnGateway" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetVpnGateway"></a>

```csharp
private void ResetVpnGateway()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CloudAzureIntegrations resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

CloudAzureIntegrations.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

CloudAzureIntegrations.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

CloudAzureIntegrations.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

CloudAzureIntegrations.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CloudAzureIntegrations resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudAzureIntegrations to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudAzureIntegrations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CloudAzureIntegrations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.apiManagement">ApiManagement</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference">CloudAzureIntegrationsApiManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.appGateway">AppGateway</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference">CloudAzureIntegrationsAppGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.appService">AppService</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference">CloudAzureIntegrationsAppServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.autoDiscovery">AutoDiscovery</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference">CloudAzureIntegrationsAutoDiscoveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.containers">Containers</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference">CloudAzureIntegrationsContainersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.cosmosDb">CosmosDb</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference">CloudAzureIntegrationsCosmosDbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.costManagement">CostManagement</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference">CloudAzureIntegrationsCostManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.dataFactory">DataFactory</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference">CloudAzureIntegrationsDataFactoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.eventHub">EventHub</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference">CloudAzureIntegrationsEventHubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.expressRoute">ExpressRoute</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference">CloudAzureIntegrationsExpressRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.firewalls">Firewalls</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference">CloudAzureIntegrationsFirewallsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.frontDoor">FrontDoor</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference">CloudAzureIntegrationsFrontDoorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.functions">Functions</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference">CloudAzureIntegrationsFunctionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.keyVault">KeyVault</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference">CloudAzureIntegrationsKeyVaultOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.loadBalancer">LoadBalancer</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference">CloudAzureIntegrationsLoadBalancerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.logicApps">LogicApps</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference">CloudAzureIntegrationsLogicAppsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.machineLearning">MachineLearning</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference">CloudAzureIntegrationsMachineLearningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.mariaDb">MariaDb</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference">CloudAzureIntegrationsMariaDbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.monitor">Monitor</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference">CloudAzureIntegrationsMonitorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.mysql">Mysql</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference">CloudAzureIntegrationsMysqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.mysqlFlexible">MysqlFlexible</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference">CloudAzureIntegrationsMysqlFlexibleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.postgresql">Postgresql</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference">CloudAzureIntegrationsPostgresqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.postgresqlFlexible">PostgresqlFlexible</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference">CloudAzureIntegrationsPostgresqlFlexibleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.powerBiDedicated">PowerBiDedicated</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference">CloudAzureIntegrationsPowerBiDedicatedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.redisCache">RedisCache</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference">CloudAzureIntegrationsRedisCacheOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.serviceBus">ServiceBus</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference">CloudAzureIntegrationsServiceBusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.sql">Sql</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference">CloudAzureIntegrationsSqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.sqlManaged">SqlManaged</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference">CloudAzureIntegrationsSqlManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.storage">Storage</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference">CloudAzureIntegrationsStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.virtualMachine">VirtualMachine</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference">CloudAzureIntegrationsVirtualMachineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.virtualNetworks">VirtualNetworks</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference">CloudAzureIntegrationsVirtualNetworksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.vms">Vms</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference">CloudAzureIntegrationsVmsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.vpnGateway">VpnGateway</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference">CloudAzureIntegrationsVpnGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.accountIdInput">AccountIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.apiManagementInput">ApiManagementInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagement">CloudAzureIntegrationsApiManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.appGatewayInput">AppGatewayInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGateway">CloudAzureIntegrationsAppGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.appServiceInput">AppServiceInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppService">CloudAzureIntegrationsAppService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.autoDiscoveryInput">AutoDiscoveryInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscovery">CloudAzureIntegrationsAutoDiscovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.containersInput">ContainersInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainers">CloudAzureIntegrationsContainers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.cosmosDbInput">CosmosDbInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDb">CloudAzureIntegrationsCosmosDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.costManagementInput">CostManagementInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagement">CloudAzureIntegrationsCostManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.dataFactoryInput">DataFactoryInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactory">CloudAzureIntegrationsDataFactory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.eventHubInput">EventHubInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHub">CloudAzureIntegrationsEventHub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.expressRouteInput">ExpressRouteInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRoute">CloudAzureIntegrationsExpressRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.firewallsInput">FirewallsInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewalls">CloudAzureIntegrationsFirewalls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.frontDoorInput">FrontDoorInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoor">CloudAzureIntegrationsFrontDoor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.functionsInput">FunctionsInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctions">CloudAzureIntegrationsFunctions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.keyVaultInput">KeyVaultInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVault">CloudAzureIntegrationsKeyVault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.linkedAccountIdInput">LinkedAccountIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.loadBalancerInput">LoadBalancerInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancer">CloudAzureIntegrationsLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.logicAppsInput">LogicAppsInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicApps">CloudAzureIntegrationsLogicApps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.machineLearningInput">MachineLearningInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearning">CloudAzureIntegrationsMachineLearning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.mariaDbInput">MariaDbInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDb">CloudAzureIntegrationsMariaDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.monitorInput">MonitorInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitor">CloudAzureIntegrationsMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.mysqlFlexibleInput">MysqlFlexibleInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexible">CloudAzureIntegrationsMysqlFlexible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.mysqlInput">MysqlInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysql">CloudAzureIntegrationsMysql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.postgresqlFlexibleInput">PostgresqlFlexibleInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexible">CloudAzureIntegrationsPostgresqlFlexible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.postgresqlInput">PostgresqlInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresql">CloudAzureIntegrationsPostgresql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.powerBiDedicatedInput">PowerBiDedicatedInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicated">CloudAzureIntegrationsPowerBiDedicated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.redisCacheInput">RedisCacheInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCache">CloudAzureIntegrationsRedisCache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.serviceBusInput">ServiceBusInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBus">CloudAzureIntegrationsServiceBus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.sqlInput">SqlInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSql">CloudAzureIntegrationsSql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.sqlManagedInput">SqlManagedInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManaged">CloudAzureIntegrationsSqlManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.storageInput">StorageInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorage">CloudAzureIntegrationsStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.virtualMachineInput">VirtualMachineInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachine">CloudAzureIntegrationsVirtualMachine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.virtualNetworksInput">VirtualNetworksInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworks">CloudAzureIntegrationsVirtualNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.vmsInput">VmsInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVms">CloudAzureIntegrationsVms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.vpnGatewayInput">VpnGatewayInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGateway">CloudAzureIntegrationsVpnGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.accountId">AccountId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.linkedAccountId">LinkedAccountId</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `ApiManagement`<sup>Required</sup> <a name="ApiManagement" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.apiManagement"></a>

```csharp
public CloudAzureIntegrationsApiManagementOutputReference ApiManagement { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference">CloudAzureIntegrationsApiManagementOutputReference</a>

---

##### `AppGateway`<sup>Required</sup> <a name="AppGateway" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.appGateway"></a>

```csharp
public CloudAzureIntegrationsAppGatewayOutputReference AppGateway { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference">CloudAzureIntegrationsAppGatewayOutputReference</a>

---

##### `AppService`<sup>Required</sup> <a name="AppService" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.appService"></a>

```csharp
public CloudAzureIntegrationsAppServiceOutputReference AppService { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference">CloudAzureIntegrationsAppServiceOutputReference</a>

---

##### `AutoDiscovery`<sup>Required</sup> <a name="AutoDiscovery" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.autoDiscovery"></a>

```csharp
public CloudAzureIntegrationsAutoDiscoveryOutputReference AutoDiscovery { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference">CloudAzureIntegrationsAutoDiscoveryOutputReference</a>

---

##### `Containers`<sup>Required</sup> <a name="Containers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.containers"></a>

```csharp
public CloudAzureIntegrationsContainersOutputReference Containers { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference">CloudAzureIntegrationsContainersOutputReference</a>

---

##### `CosmosDb`<sup>Required</sup> <a name="CosmosDb" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.cosmosDb"></a>

```csharp
public CloudAzureIntegrationsCosmosDbOutputReference CosmosDb { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference">CloudAzureIntegrationsCosmosDbOutputReference</a>

---

##### `CostManagement`<sup>Required</sup> <a name="CostManagement" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.costManagement"></a>

```csharp
public CloudAzureIntegrationsCostManagementOutputReference CostManagement { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference">CloudAzureIntegrationsCostManagementOutputReference</a>

---

##### `DataFactory`<sup>Required</sup> <a name="DataFactory" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.dataFactory"></a>

```csharp
public CloudAzureIntegrationsDataFactoryOutputReference DataFactory { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference">CloudAzureIntegrationsDataFactoryOutputReference</a>

---

##### `EventHub`<sup>Required</sup> <a name="EventHub" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.eventHub"></a>

```csharp
public CloudAzureIntegrationsEventHubOutputReference EventHub { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference">CloudAzureIntegrationsEventHubOutputReference</a>

---

##### `ExpressRoute`<sup>Required</sup> <a name="ExpressRoute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.expressRoute"></a>

```csharp
public CloudAzureIntegrationsExpressRouteOutputReference ExpressRoute { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference">CloudAzureIntegrationsExpressRouteOutputReference</a>

---

##### `Firewalls`<sup>Required</sup> <a name="Firewalls" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.firewalls"></a>

```csharp
public CloudAzureIntegrationsFirewallsOutputReference Firewalls { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference">CloudAzureIntegrationsFirewallsOutputReference</a>

---

##### `FrontDoor`<sup>Required</sup> <a name="FrontDoor" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.frontDoor"></a>

```csharp
public CloudAzureIntegrationsFrontDoorOutputReference FrontDoor { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference">CloudAzureIntegrationsFrontDoorOutputReference</a>

---

##### `Functions`<sup>Required</sup> <a name="Functions" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.functions"></a>

```csharp
public CloudAzureIntegrationsFunctionsOutputReference Functions { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference">CloudAzureIntegrationsFunctionsOutputReference</a>

---

##### `KeyVault`<sup>Required</sup> <a name="KeyVault" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.keyVault"></a>

```csharp
public CloudAzureIntegrationsKeyVaultOutputReference KeyVault { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference">CloudAzureIntegrationsKeyVaultOutputReference</a>

---

##### `LoadBalancer`<sup>Required</sup> <a name="LoadBalancer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.loadBalancer"></a>

```csharp
public CloudAzureIntegrationsLoadBalancerOutputReference LoadBalancer { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference">CloudAzureIntegrationsLoadBalancerOutputReference</a>

---

##### `LogicApps`<sup>Required</sup> <a name="LogicApps" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.logicApps"></a>

```csharp
public CloudAzureIntegrationsLogicAppsOutputReference LogicApps { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference">CloudAzureIntegrationsLogicAppsOutputReference</a>

---

##### `MachineLearning`<sup>Required</sup> <a name="MachineLearning" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.machineLearning"></a>

```csharp
public CloudAzureIntegrationsMachineLearningOutputReference MachineLearning { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference">CloudAzureIntegrationsMachineLearningOutputReference</a>

---

##### `MariaDb`<sup>Required</sup> <a name="MariaDb" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.mariaDb"></a>

```csharp
public CloudAzureIntegrationsMariaDbOutputReference MariaDb { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference">CloudAzureIntegrationsMariaDbOutputReference</a>

---

##### `Monitor`<sup>Required</sup> <a name="Monitor" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.monitor"></a>

```csharp
public CloudAzureIntegrationsMonitorOutputReference Monitor { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference">CloudAzureIntegrationsMonitorOutputReference</a>

---

##### `Mysql`<sup>Required</sup> <a name="Mysql" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.mysql"></a>

```csharp
public CloudAzureIntegrationsMysqlOutputReference Mysql { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference">CloudAzureIntegrationsMysqlOutputReference</a>

---

##### `MysqlFlexible`<sup>Required</sup> <a name="MysqlFlexible" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.mysqlFlexible"></a>

```csharp
public CloudAzureIntegrationsMysqlFlexibleOutputReference MysqlFlexible { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference">CloudAzureIntegrationsMysqlFlexibleOutputReference</a>

---

##### `Postgresql`<sup>Required</sup> <a name="Postgresql" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.postgresql"></a>

```csharp
public CloudAzureIntegrationsPostgresqlOutputReference Postgresql { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference">CloudAzureIntegrationsPostgresqlOutputReference</a>

---

##### `PostgresqlFlexible`<sup>Required</sup> <a name="PostgresqlFlexible" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.postgresqlFlexible"></a>

```csharp
public CloudAzureIntegrationsPostgresqlFlexibleOutputReference PostgresqlFlexible { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference">CloudAzureIntegrationsPostgresqlFlexibleOutputReference</a>

---

##### `PowerBiDedicated`<sup>Required</sup> <a name="PowerBiDedicated" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.powerBiDedicated"></a>

```csharp
public CloudAzureIntegrationsPowerBiDedicatedOutputReference PowerBiDedicated { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference">CloudAzureIntegrationsPowerBiDedicatedOutputReference</a>

---

##### `RedisCache`<sup>Required</sup> <a name="RedisCache" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.redisCache"></a>

```csharp
public CloudAzureIntegrationsRedisCacheOutputReference RedisCache { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference">CloudAzureIntegrationsRedisCacheOutputReference</a>

---

##### `ServiceBus`<sup>Required</sup> <a name="ServiceBus" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.serviceBus"></a>

```csharp
public CloudAzureIntegrationsServiceBusOutputReference ServiceBus { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference">CloudAzureIntegrationsServiceBusOutputReference</a>

---

##### `Sql`<sup>Required</sup> <a name="Sql" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.sql"></a>

```csharp
public CloudAzureIntegrationsSqlOutputReference Sql { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference">CloudAzureIntegrationsSqlOutputReference</a>

---

##### `SqlManaged`<sup>Required</sup> <a name="SqlManaged" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.sqlManaged"></a>

```csharp
public CloudAzureIntegrationsSqlManagedOutputReference SqlManaged { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference">CloudAzureIntegrationsSqlManagedOutputReference</a>

---

##### `Storage`<sup>Required</sup> <a name="Storage" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.storage"></a>

```csharp
public CloudAzureIntegrationsStorageOutputReference Storage { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference">CloudAzureIntegrationsStorageOutputReference</a>

---

##### `VirtualMachine`<sup>Required</sup> <a name="VirtualMachine" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.virtualMachine"></a>

```csharp
public CloudAzureIntegrationsVirtualMachineOutputReference VirtualMachine { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference">CloudAzureIntegrationsVirtualMachineOutputReference</a>

---

##### `VirtualNetworks`<sup>Required</sup> <a name="VirtualNetworks" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.virtualNetworks"></a>

```csharp
public CloudAzureIntegrationsVirtualNetworksOutputReference VirtualNetworks { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference">CloudAzureIntegrationsVirtualNetworksOutputReference</a>

---

##### `Vms`<sup>Required</sup> <a name="Vms" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.vms"></a>

```csharp
public CloudAzureIntegrationsVmsOutputReference Vms { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference">CloudAzureIntegrationsVmsOutputReference</a>

---

##### `VpnGateway`<sup>Required</sup> <a name="VpnGateway" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.vpnGateway"></a>

```csharp
public CloudAzureIntegrationsVpnGatewayOutputReference VpnGateway { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference">CloudAzureIntegrationsVpnGatewayOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.accountIdInput"></a>

```csharp
public double AccountIdInput { get; }
```

- *Type:* double

---

##### `ApiManagementInput`<sup>Optional</sup> <a name="ApiManagementInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.apiManagementInput"></a>

```csharp
public CloudAzureIntegrationsApiManagement ApiManagementInput { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagement">CloudAzureIntegrationsApiManagement</a>

---

##### `AppGatewayInput`<sup>Optional</sup> <a name="AppGatewayInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.appGatewayInput"></a>

```csharp
public CloudAzureIntegrationsAppGateway AppGatewayInput { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGateway">CloudAzureIntegrationsAppGateway</a>

---

##### `AppServiceInput`<sup>Optional</sup> <a name="AppServiceInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.appServiceInput"></a>

```csharp
public CloudAzureIntegrationsAppService AppServiceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppService">CloudAzureIntegrationsAppService</a>

---

##### `AutoDiscoveryInput`<sup>Optional</sup> <a name="AutoDiscoveryInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.autoDiscoveryInput"></a>

```csharp
public CloudAzureIntegrationsAutoDiscovery AutoDiscoveryInput { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscovery">CloudAzureIntegrationsAutoDiscovery</a>

---

##### `ContainersInput`<sup>Optional</sup> <a name="ContainersInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.containersInput"></a>

```csharp
public CloudAzureIntegrationsContainers ContainersInput { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainers">CloudAzureIntegrationsContainers</a>

---

##### `CosmosDbInput`<sup>Optional</sup> <a name="CosmosDbInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.cosmosDbInput"></a>

```csharp
public CloudAzureIntegrationsCosmosDb CosmosDbInput { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDb">CloudAzureIntegrationsCosmosDb</a>

---

##### `CostManagementInput`<sup>Optional</sup> <a name="CostManagementInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.costManagementInput"></a>

```csharp
public CloudAzureIntegrationsCostManagement CostManagementInput { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagement">CloudAzureIntegrationsCostManagement</a>

---

##### `DataFactoryInput`<sup>Optional</sup> <a name="DataFactoryInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.dataFactoryInput"></a>

```csharp
public CloudAzureIntegrationsDataFactory DataFactoryInput { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactory">CloudAzureIntegrationsDataFactory</a>

---

##### `EventHubInput`<sup>Optional</sup> <a name="EventHubInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.eventHubInput"></a>

```csharp
public CloudAzureIntegrationsEventHub EventHubInput { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHub">CloudAzureIntegrationsEventHub</a>

---

##### `ExpressRouteInput`<sup>Optional</sup> <a name="ExpressRouteInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.expressRouteInput"></a>

```csharp
public CloudAzureIntegrationsExpressRoute ExpressRouteInput { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRoute">CloudAzureIntegrationsExpressRoute</a>

---

##### `FirewallsInput`<sup>Optional</sup> <a name="FirewallsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.firewallsInput"></a>

```csharp
public CloudAzureIntegrationsFirewalls FirewallsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewalls">CloudAzureIntegrationsFirewalls</a>

---

##### `FrontDoorInput`<sup>Optional</sup> <a name="FrontDoorInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.frontDoorInput"></a>

```csharp
public CloudAzureIntegrationsFrontDoor FrontDoorInput { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoor">CloudAzureIntegrationsFrontDoor</a>

---

##### `FunctionsInput`<sup>Optional</sup> <a name="FunctionsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.functionsInput"></a>

```csharp
public CloudAzureIntegrationsFunctions FunctionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctions">CloudAzureIntegrationsFunctions</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyVaultInput`<sup>Optional</sup> <a name="KeyVaultInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.keyVaultInput"></a>

```csharp
public CloudAzureIntegrationsKeyVault KeyVaultInput { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVault">CloudAzureIntegrationsKeyVault</a>

---

##### `LinkedAccountIdInput`<sup>Optional</sup> <a name="LinkedAccountIdInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.linkedAccountIdInput"></a>

```csharp
public double LinkedAccountIdInput { get; }
```

- *Type:* double

---

##### `LoadBalancerInput`<sup>Optional</sup> <a name="LoadBalancerInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.loadBalancerInput"></a>

```csharp
public CloudAzureIntegrationsLoadBalancer LoadBalancerInput { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancer">CloudAzureIntegrationsLoadBalancer</a>

---

##### `LogicAppsInput`<sup>Optional</sup> <a name="LogicAppsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.logicAppsInput"></a>

```csharp
public CloudAzureIntegrationsLogicApps LogicAppsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicApps">CloudAzureIntegrationsLogicApps</a>

---

##### `MachineLearningInput`<sup>Optional</sup> <a name="MachineLearningInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.machineLearningInput"></a>

```csharp
public CloudAzureIntegrationsMachineLearning MachineLearningInput { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearning">CloudAzureIntegrationsMachineLearning</a>

---

##### `MariaDbInput`<sup>Optional</sup> <a name="MariaDbInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.mariaDbInput"></a>

```csharp
public CloudAzureIntegrationsMariaDb MariaDbInput { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDb">CloudAzureIntegrationsMariaDb</a>

---

##### `MonitorInput`<sup>Optional</sup> <a name="MonitorInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.monitorInput"></a>

```csharp
public CloudAzureIntegrationsMonitor MonitorInput { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitor">CloudAzureIntegrationsMonitor</a>

---

##### `MysqlFlexibleInput`<sup>Optional</sup> <a name="MysqlFlexibleInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.mysqlFlexibleInput"></a>

```csharp
public CloudAzureIntegrationsMysqlFlexible MysqlFlexibleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexible">CloudAzureIntegrationsMysqlFlexible</a>

---

##### `MysqlInput`<sup>Optional</sup> <a name="MysqlInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.mysqlInput"></a>

```csharp
public CloudAzureIntegrationsMysql MysqlInput { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysql">CloudAzureIntegrationsMysql</a>

---

##### `PostgresqlFlexibleInput`<sup>Optional</sup> <a name="PostgresqlFlexibleInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.postgresqlFlexibleInput"></a>

```csharp
public CloudAzureIntegrationsPostgresqlFlexible PostgresqlFlexibleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexible">CloudAzureIntegrationsPostgresqlFlexible</a>

---

##### `PostgresqlInput`<sup>Optional</sup> <a name="PostgresqlInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.postgresqlInput"></a>

```csharp
public CloudAzureIntegrationsPostgresql PostgresqlInput { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresql">CloudAzureIntegrationsPostgresql</a>

---

##### `PowerBiDedicatedInput`<sup>Optional</sup> <a name="PowerBiDedicatedInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.powerBiDedicatedInput"></a>

```csharp
public CloudAzureIntegrationsPowerBiDedicated PowerBiDedicatedInput { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicated">CloudAzureIntegrationsPowerBiDedicated</a>

---

##### `RedisCacheInput`<sup>Optional</sup> <a name="RedisCacheInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.redisCacheInput"></a>

```csharp
public CloudAzureIntegrationsRedisCache RedisCacheInput { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCache">CloudAzureIntegrationsRedisCache</a>

---

##### `ServiceBusInput`<sup>Optional</sup> <a name="ServiceBusInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.serviceBusInput"></a>

```csharp
public CloudAzureIntegrationsServiceBus ServiceBusInput { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBus">CloudAzureIntegrationsServiceBus</a>

---

##### `SqlInput`<sup>Optional</sup> <a name="SqlInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.sqlInput"></a>

```csharp
public CloudAzureIntegrationsSql SqlInput { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSql">CloudAzureIntegrationsSql</a>

---

##### `SqlManagedInput`<sup>Optional</sup> <a name="SqlManagedInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.sqlManagedInput"></a>

```csharp
public CloudAzureIntegrationsSqlManaged SqlManagedInput { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManaged">CloudAzureIntegrationsSqlManaged</a>

---

##### `StorageInput`<sup>Optional</sup> <a name="StorageInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.storageInput"></a>

```csharp
public CloudAzureIntegrationsStorage StorageInput { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorage">CloudAzureIntegrationsStorage</a>

---

##### `VirtualMachineInput`<sup>Optional</sup> <a name="VirtualMachineInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.virtualMachineInput"></a>

```csharp
public CloudAzureIntegrationsVirtualMachine VirtualMachineInput { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachine">CloudAzureIntegrationsVirtualMachine</a>

---

##### `VirtualNetworksInput`<sup>Optional</sup> <a name="VirtualNetworksInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.virtualNetworksInput"></a>

```csharp
public CloudAzureIntegrationsVirtualNetworks VirtualNetworksInput { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworks">CloudAzureIntegrationsVirtualNetworks</a>

---

##### `VmsInput`<sup>Optional</sup> <a name="VmsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.vmsInput"></a>

```csharp
public CloudAzureIntegrationsVms VmsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVms">CloudAzureIntegrationsVms</a>

---

##### `VpnGatewayInput`<sup>Optional</sup> <a name="VpnGatewayInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.vpnGatewayInput"></a>

```csharp
public CloudAzureIntegrationsVpnGateway VpnGatewayInput { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGateway">CloudAzureIntegrationsVpnGateway</a>

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.accountId"></a>

```csharp
public double AccountId { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LinkedAccountId`<sup>Required</sup> <a name="LinkedAccountId" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.linkedAccountId"></a>

```csharp
public double LinkedAccountId { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudAzureIntegrationsApiManagement <a name="CloudAzureIntegrationsApiManagement" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureIntegrationsApiManagement {
    double MetricsPollingInterval = null,
    string[] ResourceGroups = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagement.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagement.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagement.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; set; }
```

- *Type:* double

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `ResourceGroups`<sup>Optional</sup> <a name="ResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagement.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; set; }
```

- *Type:* string[]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsAppGateway <a name="CloudAzureIntegrationsAppGateway" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGateway"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGateway.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureIntegrationsAppGateway {
    double MetricsPollingInterval = null,
    string[] ResourceGroups = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGateway.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGateway.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGateway.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; set; }
```

- *Type:* double

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `ResourceGroups`<sup>Optional</sup> <a name="ResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGateway.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; set; }
```

- *Type:* string[]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsAppService <a name="CloudAzureIntegrationsAppService" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureIntegrationsAppService {
    double MetricsPollingInterval = null,
    string[] ResourceGroups = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppService.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppService.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppService.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; set; }
```

- *Type:* double

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `ResourceGroups`<sup>Optional</sup> <a name="ResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppService.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; set; }
```

- *Type:* string[]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsAutoDiscovery <a name="CloudAzureIntegrationsAutoDiscovery" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscovery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscovery.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureIntegrationsAutoDiscovery {
    double MetricsPollingInterval = null,
    string[] ResourceGroups = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscovery.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscovery.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscovery.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; set; }
```

- *Type:* double

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `ResourceGroups`<sup>Optional</sup> <a name="ResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscovery.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; set; }
```

- *Type:* string[]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsConfig <a name="CloudAzureIntegrationsConfig" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureIntegrationsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    double LinkedAccountId,
    double AccountId = null,
    CloudAzureIntegrationsApiManagement ApiManagement = null,
    CloudAzureIntegrationsAppGateway AppGateway = null,
    CloudAzureIntegrationsAppService AppService = null,
    CloudAzureIntegrationsAutoDiscovery AutoDiscovery = null,
    CloudAzureIntegrationsContainers Containers = null,
    CloudAzureIntegrationsCosmosDb CosmosDb = null,
    CloudAzureIntegrationsCostManagement CostManagement = null,
    CloudAzureIntegrationsDataFactory DataFactory = null,
    CloudAzureIntegrationsEventHub EventHub = null,
    CloudAzureIntegrationsExpressRoute ExpressRoute = null,
    CloudAzureIntegrationsFirewalls Firewalls = null,
    CloudAzureIntegrationsFrontDoor FrontDoor = null,
    CloudAzureIntegrationsFunctions Functions = null,
    string Id = null,
    CloudAzureIntegrationsKeyVault KeyVault = null,
    CloudAzureIntegrationsLoadBalancer LoadBalancer = null,
    CloudAzureIntegrationsLogicApps LogicApps = null,
    CloudAzureIntegrationsMachineLearning MachineLearning = null,
    CloudAzureIntegrationsMariaDb MariaDb = null,
    CloudAzureIntegrationsMonitor Monitor = null,
    CloudAzureIntegrationsMysql Mysql = null,
    CloudAzureIntegrationsMysqlFlexible MysqlFlexible = null,
    CloudAzureIntegrationsPostgresql Postgresql = null,
    CloudAzureIntegrationsPostgresqlFlexible PostgresqlFlexible = null,
    CloudAzureIntegrationsPowerBiDedicated PowerBiDedicated = null,
    CloudAzureIntegrationsRedisCache RedisCache = null,
    CloudAzureIntegrationsServiceBus ServiceBus = null,
    CloudAzureIntegrationsSql Sql = null,
    CloudAzureIntegrationsSqlManaged SqlManaged = null,
    CloudAzureIntegrationsStorage Storage = null,
    CloudAzureIntegrationsVirtualMachine VirtualMachine = null,
    CloudAzureIntegrationsVirtualNetworks VirtualNetworks = null,
    CloudAzureIntegrationsVms Vms = null,
    CloudAzureIntegrationsVpnGateway VpnGateway = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.linkedAccountId">LinkedAccountId</a></code> | <code>double</code> | The ID of the linked Azure account in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.accountId">AccountId</a></code> | <code>double</code> | The ID of the account in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.apiManagement">ApiManagement</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagement">CloudAzureIntegrationsApiManagement</a></code> | api_management block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.appGateway">AppGateway</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGateway">CloudAzureIntegrationsAppGateway</a></code> | app_gateway block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.appService">AppService</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppService">CloudAzureIntegrationsAppService</a></code> | app_service block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.autoDiscovery">AutoDiscovery</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscovery">CloudAzureIntegrationsAutoDiscovery</a></code> | auto_discovery block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.containers">Containers</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainers">CloudAzureIntegrationsContainers</a></code> | containers block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.cosmosDb">CosmosDb</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDb">CloudAzureIntegrationsCosmosDb</a></code> | cosmos_db block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.costManagement">CostManagement</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagement">CloudAzureIntegrationsCostManagement</a></code> | cost_management block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.dataFactory">DataFactory</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactory">CloudAzureIntegrationsDataFactory</a></code> | data_factory block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.eventHub">EventHub</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHub">CloudAzureIntegrationsEventHub</a></code> | event_hub block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.expressRoute">ExpressRoute</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRoute">CloudAzureIntegrationsExpressRoute</a></code> | express_route block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.firewalls">Firewalls</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewalls">CloudAzureIntegrationsFirewalls</a></code> | firewalls block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.frontDoor">FrontDoor</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoor">CloudAzureIntegrationsFrontDoor</a></code> | front_door block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.functions">Functions</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctions">CloudAzureIntegrationsFunctions</a></code> | functions block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#id CloudAzureIntegrations#id}. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.keyVault">KeyVault</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVault">CloudAzureIntegrationsKeyVault</a></code> | key_vault block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.loadBalancer">LoadBalancer</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancer">CloudAzureIntegrationsLoadBalancer</a></code> | load_balancer block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.logicApps">LogicApps</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicApps">CloudAzureIntegrationsLogicApps</a></code> | logic_apps block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.machineLearning">MachineLearning</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearning">CloudAzureIntegrationsMachineLearning</a></code> | machine_learning block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.mariaDb">MariaDb</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDb">CloudAzureIntegrationsMariaDb</a></code> | maria_db block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.monitor">Monitor</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitor">CloudAzureIntegrationsMonitor</a></code> | monitor block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.mysql">Mysql</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysql">CloudAzureIntegrationsMysql</a></code> | mysql block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.mysqlFlexible">MysqlFlexible</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexible">CloudAzureIntegrationsMysqlFlexible</a></code> | mysql_flexible block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.postgresql">Postgresql</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresql">CloudAzureIntegrationsPostgresql</a></code> | postgresql block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.postgresqlFlexible">PostgresqlFlexible</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexible">CloudAzureIntegrationsPostgresqlFlexible</a></code> | postgresql_flexible block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.powerBiDedicated">PowerBiDedicated</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicated">CloudAzureIntegrationsPowerBiDedicated</a></code> | power_bi_dedicated block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.redisCache">RedisCache</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCache">CloudAzureIntegrationsRedisCache</a></code> | redis_cache block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.serviceBus">ServiceBus</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBus">CloudAzureIntegrationsServiceBus</a></code> | service_bus block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.sql">Sql</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSql">CloudAzureIntegrationsSql</a></code> | sql block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.sqlManaged">SqlManaged</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManaged">CloudAzureIntegrationsSqlManaged</a></code> | sql_managed block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.storage">Storage</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorage">CloudAzureIntegrationsStorage</a></code> | storage block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.virtualMachine">VirtualMachine</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachine">CloudAzureIntegrationsVirtualMachine</a></code> | virtual_machine block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.virtualNetworks">VirtualNetworks</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworks">CloudAzureIntegrationsVirtualNetworks</a></code> | virtual_networks block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.vms">Vms</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVms">CloudAzureIntegrationsVms</a></code> | vms block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.vpnGateway">VpnGateway</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGateway">CloudAzureIntegrationsVpnGateway</a></code> | vpn_gateway block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `LinkedAccountId`<sup>Required</sup> <a name="LinkedAccountId" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.linkedAccountId"></a>

```csharp
public double LinkedAccountId { get; set; }
```

- *Type:* double

The ID of the linked Azure account in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#linked_account_id CloudAzureIntegrations#linked_account_id}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.accountId"></a>

```csharp
public double AccountId { get; set; }
```

- *Type:* double

The ID of the account in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#account_id CloudAzureIntegrations#account_id}

---

##### `ApiManagement`<sup>Optional</sup> <a name="ApiManagement" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.apiManagement"></a>

```csharp
public CloudAzureIntegrationsApiManagement ApiManagement { get; set; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagement">CloudAzureIntegrationsApiManagement</a>

api_management block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#api_management CloudAzureIntegrations#api_management}

---

##### `AppGateway`<sup>Optional</sup> <a name="AppGateway" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.appGateway"></a>

```csharp
public CloudAzureIntegrationsAppGateway AppGateway { get; set; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGateway">CloudAzureIntegrationsAppGateway</a>

app_gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#app_gateway CloudAzureIntegrations#app_gateway}

---

##### `AppService`<sup>Optional</sup> <a name="AppService" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.appService"></a>

```csharp
public CloudAzureIntegrationsAppService AppService { get; set; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppService">CloudAzureIntegrationsAppService</a>

app_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#app_service CloudAzureIntegrations#app_service}

---

##### `AutoDiscovery`<sup>Optional</sup> <a name="AutoDiscovery" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.autoDiscovery"></a>

```csharp
public CloudAzureIntegrationsAutoDiscovery AutoDiscovery { get; set; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscovery">CloudAzureIntegrationsAutoDiscovery</a>

auto_discovery block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#auto_discovery CloudAzureIntegrations#auto_discovery}

---

##### `Containers`<sup>Optional</sup> <a name="Containers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.containers"></a>

```csharp
public CloudAzureIntegrationsContainers Containers { get; set; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainers">CloudAzureIntegrationsContainers</a>

containers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#containers CloudAzureIntegrations#containers}

---

##### `CosmosDb`<sup>Optional</sup> <a name="CosmosDb" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.cosmosDb"></a>

```csharp
public CloudAzureIntegrationsCosmosDb CosmosDb { get; set; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDb">CloudAzureIntegrationsCosmosDb</a>

cosmos_db block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#cosmos_db CloudAzureIntegrations#cosmos_db}

---

##### `CostManagement`<sup>Optional</sup> <a name="CostManagement" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.costManagement"></a>

```csharp
public CloudAzureIntegrationsCostManagement CostManagement { get; set; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagement">CloudAzureIntegrationsCostManagement</a>

cost_management block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#cost_management CloudAzureIntegrations#cost_management}

---

##### `DataFactory`<sup>Optional</sup> <a name="DataFactory" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.dataFactory"></a>

```csharp
public CloudAzureIntegrationsDataFactory DataFactory { get; set; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactory">CloudAzureIntegrationsDataFactory</a>

data_factory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#data_factory CloudAzureIntegrations#data_factory}

---

##### `EventHub`<sup>Optional</sup> <a name="EventHub" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.eventHub"></a>

```csharp
public CloudAzureIntegrationsEventHub EventHub { get; set; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHub">CloudAzureIntegrationsEventHub</a>

event_hub block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#event_hub CloudAzureIntegrations#event_hub}

---

##### `ExpressRoute`<sup>Optional</sup> <a name="ExpressRoute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.expressRoute"></a>

```csharp
public CloudAzureIntegrationsExpressRoute ExpressRoute { get; set; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRoute">CloudAzureIntegrationsExpressRoute</a>

express_route block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#express_route CloudAzureIntegrations#express_route}

---

##### `Firewalls`<sup>Optional</sup> <a name="Firewalls" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.firewalls"></a>

```csharp
public CloudAzureIntegrationsFirewalls Firewalls { get; set; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewalls">CloudAzureIntegrationsFirewalls</a>

firewalls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#firewalls CloudAzureIntegrations#firewalls}

---

##### `FrontDoor`<sup>Optional</sup> <a name="FrontDoor" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.frontDoor"></a>

```csharp
public CloudAzureIntegrationsFrontDoor FrontDoor { get; set; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoor">CloudAzureIntegrationsFrontDoor</a>

front_door block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#front_door CloudAzureIntegrations#front_door}

---

##### `Functions`<sup>Optional</sup> <a name="Functions" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.functions"></a>

```csharp
public CloudAzureIntegrationsFunctions Functions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctions">CloudAzureIntegrationsFunctions</a>

functions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#functions CloudAzureIntegrations#functions}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#id CloudAzureIntegrations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KeyVault`<sup>Optional</sup> <a name="KeyVault" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.keyVault"></a>

```csharp
public CloudAzureIntegrationsKeyVault KeyVault { get; set; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVault">CloudAzureIntegrationsKeyVault</a>

key_vault block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#key_vault CloudAzureIntegrations#key_vault}

---

##### `LoadBalancer`<sup>Optional</sup> <a name="LoadBalancer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.loadBalancer"></a>

```csharp
public CloudAzureIntegrationsLoadBalancer LoadBalancer { get; set; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancer">CloudAzureIntegrationsLoadBalancer</a>

load_balancer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#load_balancer CloudAzureIntegrations#load_balancer}

---

##### `LogicApps`<sup>Optional</sup> <a name="LogicApps" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.logicApps"></a>

```csharp
public CloudAzureIntegrationsLogicApps LogicApps { get; set; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicApps">CloudAzureIntegrationsLogicApps</a>

logic_apps block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#logic_apps CloudAzureIntegrations#logic_apps}

---

##### `MachineLearning`<sup>Optional</sup> <a name="MachineLearning" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.machineLearning"></a>

```csharp
public CloudAzureIntegrationsMachineLearning MachineLearning { get; set; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearning">CloudAzureIntegrationsMachineLearning</a>

machine_learning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#machine_learning CloudAzureIntegrations#machine_learning}

---

##### `MariaDb`<sup>Optional</sup> <a name="MariaDb" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.mariaDb"></a>

```csharp
public CloudAzureIntegrationsMariaDb MariaDb { get; set; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDb">CloudAzureIntegrationsMariaDb</a>

maria_db block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#maria_db CloudAzureIntegrations#maria_db}

---

##### `Monitor`<sup>Optional</sup> <a name="Monitor" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.monitor"></a>

```csharp
public CloudAzureIntegrationsMonitor Monitor { get; set; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitor">CloudAzureIntegrationsMonitor</a>

monitor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#monitor CloudAzureIntegrations#monitor}

---

##### `Mysql`<sup>Optional</sup> <a name="Mysql" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.mysql"></a>

```csharp
public CloudAzureIntegrationsMysql Mysql { get; set; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysql">CloudAzureIntegrationsMysql</a>

mysql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#mysql CloudAzureIntegrations#mysql}

---

##### `MysqlFlexible`<sup>Optional</sup> <a name="MysqlFlexible" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.mysqlFlexible"></a>

```csharp
public CloudAzureIntegrationsMysqlFlexible MysqlFlexible { get; set; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexible">CloudAzureIntegrationsMysqlFlexible</a>

mysql_flexible block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#mysql_flexible CloudAzureIntegrations#mysql_flexible}

---

##### `Postgresql`<sup>Optional</sup> <a name="Postgresql" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.postgresql"></a>

```csharp
public CloudAzureIntegrationsPostgresql Postgresql { get; set; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresql">CloudAzureIntegrationsPostgresql</a>

postgresql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#postgresql CloudAzureIntegrations#postgresql}

---

##### `PostgresqlFlexible`<sup>Optional</sup> <a name="PostgresqlFlexible" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.postgresqlFlexible"></a>

```csharp
public CloudAzureIntegrationsPostgresqlFlexible PostgresqlFlexible { get; set; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexible">CloudAzureIntegrationsPostgresqlFlexible</a>

postgresql_flexible block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#postgresql_flexible CloudAzureIntegrations#postgresql_flexible}

---

##### `PowerBiDedicated`<sup>Optional</sup> <a name="PowerBiDedicated" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.powerBiDedicated"></a>

```csharp
public CloudAzureIntegrationsPowerBiDedicated PowerBiDedicated { get; set; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicated">CloudAzureIntegrationsPowerBiDedicated</a>

power_bi_dedicated block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#power_bi_dedicated CloudAzureIntegrations#power_bi_dedicated}

---

##### `RedisCache`<sup>Optional</sup> <a name="RedisCache" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.redisCache"></a>

```csharp
public CloudAzureIntegrationsRedisCache RedisCache { get; set; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCache">CloudAzureIntegrationsRedisCache</a>

redis_cache block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#redis_cache CloudAzureIntegrations#redis_cache}

---

##### `ServiceBus`<sup>Optional</sup> <a name="ServiceBus" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.serviceBus"></a>

```csharp
public CloudAzureIntegrationsServiceBus ServiceBus { get; set; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBus">CloudAzureIntegrationsServiceBus</a>

service_bus block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#service_bus CloudAzureIntegrations#service_bus}

---

##### `Sql`<sup>Optional</sup> <a name="Sql" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.sql"></a>

```csharp
public CloudAzureIntegrationsSql Sql { get; set; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSql">CloudAzureIntegrationsSql</a>

sql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#sql CloudAzureIntegrations#sql}

---

##### `SqlManaged`<sup>Optional</sup> <a name="SqlManaged" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.sqlManaged"></a>

```csharp
public CloudAzureIntegrationsSqlManaged SqlManaged { get; set; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManaged">CloudAzureIntegrationsSqlManaged</a>

sql_managed block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#sql_managed CloudAzureIntegrations#sql_managed}

---

##### `Storage`<sup>Optional</sup> <a name="Storage" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.storage"></a>

```csharp
public CloudAzureIntegrationsStorage Storage { get; set; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorage">CloudAzureIntegrationsStorage</a>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#storage CloudAzureIntegrations#storage}

---

##### `VirtualMachine`<sup>Optional</sup> <a name="VirtualMachine" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.virtualMachine"></a>

```csharp
public CloudAzureIntegrationsVirtualMachine VirtualMachine { get; set; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachine">CloudAzureIntegrationsVirtualMachine</a>

virtual_machine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#virtual_machine CloudAzureIntegrations#virtual_machine}

---

##### `VirtualNetworks`<sup>Optional</sup> <a name="VirtualNetworks" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.virtualNetworks"></a>

```csharp
public CloudAzureIntegrationsVirtualNetworks VirtualNetworks { get; set; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworks">CloudAzureIntegrationsVirtualNetworks</a>

virtual_networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#virtual_networks CloudAzureIntegrations#virtual_networks}

---

##### `Vms`<sup>Optional</sup> <a name="Vms" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.vms"></a>

```csharp
public CloudAzureIntegrationsVms Vms { get; set; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVms">CloudAzureIntegrationsVms</a>

vms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#vms CloudAzureIntegrations#vms}

---

##### `VpnGateway`<sup>Optional</sup> <a name="VpnGateway" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.vpnGateway"></a>

```csharp
public CloudAzureIntegrationsVpnGateway VpnGateway { get; set; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGateway">CloudAzureIntegrationsVpnGateway</a>

vpn_gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#vpn_gateway CloudAzureIntegrations#vpn_gateway}

---

### CloudAzureIntegrationsContainers <a name="CloudAzureIntegrationsContainers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureIntegrationsContainers {
    double MetricsPollingInterval = null,
    string[] ResourceGroups = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainers.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainers.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainers.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; set; }
```

- *Type:* double

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `ResourceGroups`<sup>Optional</sup> <a name="ResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainers.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; set; }
```

- *Type:* string[]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsCosmosDb <a name="CloudAzureIntegrationsCosmosDb" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDb.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureIntegrationsCosmosDb {
    double MetricsPollingInterval = null,
    string[] ResourceGroups = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDb.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDb.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDb.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; set; }
```

- *Type:* double

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `ResourceGroups`<sup>Optional</sup> <a name="ResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDb.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; set; }
```

- *Type:* string[]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsCostManagement <a name="CloudAzureIntegrationsCostManagement" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureIntegrationsCostManagement {
    double MetricsPollingInterval = null,
    string[] TagKeys = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagement.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagement.property.tagKeys">TagKeys</a></code> | <code>string[]</code> | Specify if additional cost data per tag should be collected. This field is case sensitive. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagement.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; set; }
```

- *Type:* double

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `TagKeys`<sup>Optional</sup> <a name="TagKeys" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagement.property.tagKeys"></a>

```csharp
public string[] TagKeys { get; set; }
```

- *Type:* string[]

Specify if additional cost data per tag should be collected. This field is case sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#tag_keys CloudAzureIntegrations#tag_keys}

---

### CloudAzureIntegrationsDataFactory <a name="CloudAzureIntegrationsDataFactory" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactory.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureIntegrationsDataFactory {
    double MetricsPollingInterval = null,
    string[] ResourceGroups = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactory.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactory.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactory.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; set; }
```

- *Type:* double

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `ResourceGroups`<sup>Optional</sup> <a name="ResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactory.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; set; }
```

- *Type:* string[]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsEventHub <a name="CloudAzureIntegrationsEventHub" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHub.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureIntegrationsEventHub {
    double MetricsPollingInterval = null,
    string[] ResourceGroups = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHub.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHub.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHub.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; set; }
```

- *Type:* double

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `ResourceGroups`<sup>Optional</sup> <a name="ResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHub.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; set; }
```

- *Type:* string[]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsExpressRoute <a name="CloudAzureIntegrationsExpressRoute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRoute.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureIntegrationsExpressRoute {
    double MetricsPollingInterval = null,
    string[] ResourceGroups = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRoute.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRoute.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRoute.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; set; }
```

- *Type:* double

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `ResourceGroups`<sup>Optional</sup> <a name="ResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRoute.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; set; }
```

- *Type:* string[]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsFirewalls <a name="CloudAzureIntegrationsFirewalls" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewalls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewalls.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureIntegrationsFirewalls {
    double MetricsPollingInterval = null,
    string[] ResourceGroups = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewalls.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewalls.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewalls.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; set; }
```

- *Type:* double

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `ResourceGroups`<sup>Optional</sup> <a name="ResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewalls.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; set; }
```

- *Type:* string[]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsFrontDoor <a name="CloudAzureIntegrationsFrontDoor" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoor.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureIntegrationsFrontDoor {
    double MetricsPollingInterval = null,
    string[] ResourceGroups = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoor.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoor.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoor.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; set; }
```

- *Type:* double

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `ResourceGroups`<sup>Optional</sup> <a name="ResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoor.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; set; }
```

- *Type:* string[]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsFunctions <a name="CloudAzureIntegrationsFunctions" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureIntegrationsFunctions {
    double MetricsPollingInterval = null,
    string[] ResourceGroups = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctions.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctions.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctions.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; set; }
```

- *Type:* double

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `ResourceGroups`<sup>Optional</sup> <a name="ResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctions.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; set; }
```

- *Type:* string[]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsKeyVault <a name="CloudAzureIntegrationsKeyVault" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVault"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVault.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureIntegrationsKeyVault {
    double MetricsPollingInterval = null,
    string[] ResourceGroups = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVault.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVault.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVault.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; set; }
```

- *Type:* double

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `ResourceGroups`<sup>Optional</sup> <a name="ResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVault.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; set; }
```

- *Type:* string[]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsLoadBalancer <a name="CloudAzureIntegrationsLoadBalancer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureIntegrationsLoadBalancer {
    double MetricsPollingInterval = null,
    string[] ResourceGroups = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancer.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancer.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancer.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; set; }
```

- *Type:* double

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `ResourceGroups`<sup>Optional</sup> <a name="ResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancer.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; set; }
```

- *Type:* string[]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsLogicApps <a name="CloudAzureIntegrationsLogicApps" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicApps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicApps.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureIntegrationsLogicApps {
    double MetricsPollingInterval = null,
    string[] ResourceGroups = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicApps.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicApps.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicApps.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; set; }
```

- *Type:* double

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `ResourceGroups`<sup>Optional</sup> <a name="ResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicApps.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; set; }
```

- *Type:* string[]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsMachineLearning <a name="CloudAzureIntegrationsMachineLearning" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearning.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureIntegrationsMachineLearning {
    double MetricsPollingInterval = null,
    string[] ResourceGroups = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearning.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearning.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearning.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; set; }
```

- *Type:* double

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `ResourceGroups`<sup>Optional</sup> <a name="ResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearning.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; set; }
```

- *Type:* string[]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsMariaDb <a name="CloudAzureIntegrationsMariaDb" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDb.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureIntegrationsMariaDb {
    double MetricsPollingInterval = null,
    string[] ResourceGroups = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDb.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDb.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDb.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; set; }
```

- *Type:* double

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `ResourceGroups`<sup>Optional</sup> <a name="ResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDb.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; set; }
```

- *Type:* string[]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsMonitor <a name="CloudAzureIntegrationsMonitor" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitor.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureIntegrationsMonitor {
    bool|IResolvable Enabled = null,
    string[] ExcludeTags = null,
    string[] IncludeTags = null,
    double MetricsPollingInterval = null,
    string[] ResourceGroups = null,
    string[] ResourceTypes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitor.property.enabled">Enabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | A flag that specifies if the integration is active. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitor.property.excludeTags">ExcludeTags</a></code> | <code>string[]</code> | Specify resource tags in 'key:value' form to be excluded from monitoring. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitor.property.includeTags">IncludeTags</a></code> | <code>string[]</code> | Specify resource tags in 'key:value' form to be monitored. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitor.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitor.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitor.property.resourceTypes">ResourceTypes</a></code> | <code>string[]</code> | Specify each Azure resource type that needs to be monitored. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitor.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

A flag that specifies if the integration is active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#enabled CloudAzureIntegrations#enabled}

---

##### `ExcludeTags`<sup>Optional</sup> <a name="ExcludeTags" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitor.property.excludeTags"></a>

```csharp
public string[] ExcludeTags { get; set; }
```

- *Type:* string[]

Specify resource tags in 'key:value' form to be excluded from monitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#exclude_tags CloudAzureIntegrations#exclude_tags}

---

##### `IncludeTags`<sup>Optional</sup> <a name="IncludeTags" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitor.property.includeTags"></a>

```csharp
public string[] IncludeTags { get; set; }
```

- *Type:* string[]

Specify resource tags in 'key:value' form to be monitored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#include_tags CloudAzureIntegrations#include_tags}

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitor.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; set; }
```

- *Type:* double

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `ResourceGroups`<sup>Optional</sup> <a name="ResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitor.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; set; }
```

- *Type:* string[]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

##### `ResourceTypes`<sup>Optional</sup> <a name="ResourceTypes" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitor.property.resourceTypes"></a>

```csharp
public string[] ResourceTypes { get; set; }
```

- *Type:* string[]

Specify each Azure resource type that needs to be monitored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#resource_types CloudAzureIntegrations#resource_types}

---

### CloudAzureIntegrationsMysql <a name="CloudAzureIntegrationsMysql" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysql.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureIntegrationsMysql {
    double MetricsPollingInterval = null,
    string[] ResourceGroups = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysql.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysql.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysql.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; set; }
```

- *Type:* double

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `ResourceGroups`<sup>Optional</sup> <a name="ResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysql.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; set; }
```

- *Type:* string[]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsMysqlFlexible <a name="CloudAzureIntegrationsMysqlFlexible" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexible"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexible.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureIntegrationsMysqlFlexible {
    double MetricsPollingInterval = null,
    string[] ResourceGroups = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexible.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexible.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexible.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; set; }
```

- *Type:* double

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `ResourceGroups`<sup>Optional</sup> <a name="ResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexible.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; set; }
```

- *Type:* string[]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsPostgresql <a name="CloudAzureIntegrationsPostgresql" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresql.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureIntegrationsPostgresql {
    double MetricsPollingInterval = null,
    string[] ResourceGroups = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresql.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresql.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresql.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; set; }
```

- *Type:* double

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `ResourceGroups`<sup>Optional</sup> <a name="ResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresql.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; set; }
```

- *Type:* string[]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsPostgresqlFlexible <a name="CloudAzureIntegrationsPostgresqlFlexible" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexible"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexible.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureIntegrationsPostgresqlFlexible {
    double MetricsPollingInterval = null,
    string[] ResourceGroups = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexible.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexible.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexible.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; set; }
```

- *Type:* double

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `ResourceGroups`<sup>Optional</sup> <a name="ResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexible.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; set; }
```

- *Type:* string[]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsPowerBiDedicated <a name="CloudAzureIntegrationsPowerBiDedicated" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicated"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicated.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureIntegrationsPowerBiDedicated {
    double MetricsPollingInterval = null,
    string[] ResourceGroups = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicated.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicated.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicated.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; set; }
```

- *Type:* double

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `ResourceGroups`<sup>Optional</sup> <a name="ResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicated.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; set; }
```

- *Type:* string[]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsRedisCache <a name="CloudAzureIntegrationsRedisCache" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCache"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCache.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureIntegrationsRedisCache {
    double MetricsPollingInterval = null,
    string[] ResourceGroups = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCache.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCache.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCache.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; set; }
```

- *Type:* double

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `ResourceGroups`<sup>Optional</sup> <a name="ResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCache.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; set; }
```

- *Type:* string[]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsServiceBus <a name="CloudAzureIntegrationsServiceBus" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureIntegrationsServiceBus {
    double MetricsPollingInterval = null,
    string[] ResourceGroups = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBus.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBus.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBus.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; set; }
```

- *Type:* double

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `ResourceGroups`<sup>Optional</sup> <a name="ResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBus.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; set; }
```

- *Type:* string[]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsSql <a name="CloudAzureIntegrationsSql" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSql.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureIntegrationsSql {
    double MetricsPollingInterval = null,
    string[] ResourceGroups = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSql.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSql.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSql.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; set; }
```

- *Type:* double

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `ResourceGroups`<sup>Optional</sup> <a name="ResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSql.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; set; }
```

- *Type:* string[]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsSqlManaged <a name="CloudAzureIntegrationsSqlManaged" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManaged"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManaged.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureIntegrationsSqlManaged {
    double MetricsPollingInterval = null,
    string[] ResourceGroups = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManaged.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManaged.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManaged.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; set; }
```

- *Type:* double

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `ResourceGroups`<sup>Optional</sup> <a name="ResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManaged.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; set; }
```

- *Type:* string[]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsStorage <a name="CloudAzureIntegrationsStorage" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureIntegrationsStorage {
    double MetricsPollingInterval = null,
    string[] ResourceGroups = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorage.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorage.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorage.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; set; }
```

- *Type:* double

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `ResourceGroups`<sup>Optional</sup> <a name="ResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorage.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; set; }
```

- *Type:* string[]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsVirtualMachine <a name="CloudAzureIntegrationsVirtualMachine" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachine"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachine.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureIntegrationsVirtualMachine {
    double MetricsPollingInterval = null,
    string[] ResourceGroups = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachine.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachine.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachine.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; set; }
```

- *Type:* double

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `ResourceGroups`<sup>Optional</sup> <a name="ResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachine.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; set; }
```

- *Type:* string[]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsVirtualNetworks <a name="CloudAzureIntegrationsVirtualNetworks" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureIntegrationsVirtualNetworks {
    double MetricsPollingInterval = null,
    string[] ResourceGroups = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworks.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworks.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworks.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; set; }
```

- *Type:* double

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `ResourceGroups`<sup>Optional</sup> <a name="ResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworks.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; set; }
```

- *Type:* string[]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsVms <a name="CloudAzureIntegrationsVms" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVms.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureIntegrationsVms {
    double MetricsPollingInterval = null,
    string[] ResourceGroups = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVms.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVms.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVms.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; set; }
```

- *Type:* double

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `ResourceGroups`<sup>Optional</sup> <a name="ResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVms.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; set; }
```

- *Type:* string[]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsVpnGateway <a name="CloudAzureIntegrationsVpnGateway" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGateway"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGateway.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureIntegrationsVpnGateway {
    double MetricsPollingInterval = null,
    string[] ResourceGroups = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGateway.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGateway.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGateway.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; set; }
```

- *Type:* double

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `ResourceGroups`<sup>Optional</sup> <a name="ResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGateway.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; set; }
```

- *Type:* string[]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudAzureIntegrationsApiManagementOutputReference <a name="CloudAzureIntegrationsApiManagementOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureIntegrationsApiManagementOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.resetResourceGroups">ResetResourceGroups</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.resetMetricsPollingInterval"></a>

```csharp
private void ResetMetricsPollingInterval()
```

##### `ResetResourceGroups` <a name="ResetResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.resetResourceGroups"></a>

```csharp
private void ResetResourceGroups()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.property.resourceGroupsInput">ResourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagement">CloudAzureIntegrationsApiManagement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.property.metricsPollingIntervalInput"></a>

```csharp
public double MetricsPollingIntervalInput { get; }
```

- *Type:* double

---

##### `ResourceGroupsInput`<sup>Optional</sup> <a name="ResourceGroupsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.property.resourceGroupsInput"></a>

```csharp
public string[] ResourceGroupsInput { get; }
```

- *Type:* string[]

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; }
```

- *Type:* double

---

##### `ResourceGroups`<sup>Required</sup> <a name="ResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.property.internalValue"></a>

```csharp
public CloudAzureIntegrationsApiManagement InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagement">CloudAzureIntegrationsApiManagement</a>

---


### CloudAzureIntegrationsAppGatewayOutputReference <a name="CloudAzureIntegrationsAppGatewayOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureIntegrationsAppGatewayOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.resetResourceGroups">ResetResourceGroups</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.resetMetricsPollingInterval"></a>

```csharp
private void ResetMetricsPollingInterval()
```

##### `ResetResourceGroups` <a name="ResetResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.resetResourceGroups"></a>

```csharp
private void ResetResourceGroups()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.property.resourceGroupsInput">ResourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGateway">CloudAzureIntegrationsAppGateway</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.property.metricsPollingIntervalInput"></a>

```csharp
public double MetricsPollingIntervalInput { get; }
```

- *Type:* double

---

##### `ResourceGroupsInput`<sup>Optional</sup> <a name="ResourceGroupsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.property.resourceGroupsInput"></a>

```csharp
public string[] ResourceGroupsInput { get; }
```

- *Type:* string[]

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; }
```

- *Type:* double

---

##### `ResourceGroups`<sup>Required</sup> <a name="ResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.property.internalValue"></a>

```csharp
public CloudAzureIntegrationsAppGateway InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGateway">CloudAzureIntegrationsAppGateway</a>

---


### CloudAzureIntegrationsAppServiceOutputReference <a name="CloudAzureIntegrationsAppServiceOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureIntegrationsAppServiceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.resetResourceGroups">ResetResourceGroups</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.resetMetricsPollingInterval"></a>

```csharp
private void ResetMetricsPollingInterval()
```

##### `ResetResourceGroups` <a name="ResetResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.resetResourceGroups"></a>

```csharp
private void ResetResourceGroups()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.property.resourceGroupsInput">ResourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppService">CloudAzureIntegrationsAppService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.property.metricsPollingIntervalInput"></a>

```csharp
public double MetricsPollingIntervalInput { get; }
```

- *Type:* double

---

##### `ResourceGroupsInput`<sup>Optional</sup> <a name="ResourceGroupsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.property.resourceGroupsInput"></a>

```csharp
public string[] ResourceGroupsInput { get; }
```

- *Type:* string[]

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; }
```

- *Type:* double

---

##### `ResourceGroups`<sup>Required</sup> <a name="ResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.property.internalValue"></a>

```csharp
public CloudAzureIntegrationsAppService InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppService">CloudAzureIntegrationsAppService</a>

---


### CloudAzureIntegrationsAutoDiscoveryOutputReference <a name="CloudAzureIntegrationsAutoDiscoveryOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureIntegrationsAutoDiscoveryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.resetResourceGroups">ResetResourceGroups</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.resetMetricsPollingInterval"></a>

```csharp
private void ResetMetricsPollingInterval()
```

##### `ResetResourceGroups` <a name="ResetResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.resetResourceGroups"></a>

```csharp
private void ResetResourceGroups()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.property.resourceGroupsInput">ResourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscovery">CloudAzureIntegrationsAutoDiscovery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.property.metricsPollingIntervalInput"></a>

```csharp
public double MetricsPollingIntervalInput { get; }
```

- *Type:* double

---

##### `ResourceGroupsInput`<sup>Optional</sup> <a name="ResourceGroupsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.property.resourceGroupsInput"></a>

```csharp
public string[] ResourceGroupsInput { get; }
```

- *Type:* string[]

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; }
```

- *Type:* double

---

##### `ResourceGroups`<sup>Required</sup> <a name="ResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.property.internalValue"></a>

```csharp
public CloudAzureIntegrationsAutoDiscovery InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscovery">CloudAzureIntegrationsAutoDiscovery</a>

---


### CloudAzureIntegrationsContainersOutputReference <a name="CloudAzureIntegrationsContainersOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureIntegrationsContainersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.resetResourceGroups">ResetResourceGroups</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.resetMetricsPollingInterval"></a>

```csharp
private void ResetMetricsPollingInterval()
```

##### `ResetResourceGroups` <a name="ResetResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.resetResourceGroups"></a>

```csharp
private void ResetResourceGroups()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.property.resourceGroupsInput">ResourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainers">CloudAzureIntegrationsContainers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.property.metricsPollingIntervalInput"></a>

```csharp
public double MetricsPollingIntervalInput { get; }
```

- *Type:* double

---

##### `ResourceGroupsInput`<sup>Optional</sup> <a name="ResourceGroupsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.property.resourceGroupsInput"></a>

```csharp
public string[] ResourceGroupsInput { get; }
```

- *Type:* string[]

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; }
```

- *Type:* double

---

##### `ResourceGroups`<sup>Required</sup> <a name="ResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.property.internalValue"></a>

```csharp
public CloudAzureIntegrationsContainers InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainers">CloudAzureIntegrationsContainers</a>

---


### CloudAzureIntegrationsCosmosDbOutputReference <a name="CloudAzureIntegrationsCosmosDbOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureIntegrationsCosmosDbOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.resetResourceGroups">ResetResourceGroups</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.resetMetricsPollingInterval"></a>

```csharp
private void ResetMetricsPollingInterval()
```

##### `ResetResourceGroups` <a name="ResetResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.resetResourceGroups"></a>

```csharp
private void ResetResourceGroups()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.property.resourceGroupsInput">ResourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDb">CloudAzureIntegrationsCosmosDb</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.property.metricsPollingIntervalInput"></a>

```csharp
public double MetricsPollingIntervalInput { get; }
```

- *Type:* double

---

##### `ResourceGroupsInput`<sup>Optional</sup> <a name="ResourceGroupsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.property.resourceGroupsInput"></a>

```csharp
public string[] ResourceGroupsInput { get; }
```

- *Type:* string[]

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; }
```

- *Type:* double

---

##### `ResourceGroups`<sup>Required</sup> <a name="ResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.property.internalValue"></a>

```csharp
public CloudAzureIntegrationsCosmosDb InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDb">CloudAzureIntegrationsCosmosDb</a>

---


### CloudAzureIntegrationsCostManagementOutputReference <a name="CloudAzureIntegrationsCostManagementOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureIntegrationsCostManagementOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.resetTagKeys">ResetTagKeys</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.resetMetricsPollingInterval"></a>

```csharp
private void ResetMetricsPollingInterval()
```

##### `ResetTagKeys` <a name="ResetTagKeys" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.resetTagKeys"></a>

```csharp
private void ResetTagKeys()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.property.tagKeysInput">TagKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.property.tagKeys">TagKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagement">CloudAzureIntegrationsCostManagement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.property.metricsPollingIntervalInput"></a>

```csharp
public double MetricsPollingIntervalInput { get; }
```

- *Type:* double

---

##### `TagKeysInput`<sup>Optional</sup> <a name="TagKeysInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.property.tagKeysInput"></a>

```csharp
public string[] TagKeysInput { get; }
```

- *Type:* string[]

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; }
```

- *Type:* double

---

##### `TagKeys`<sup>Required</sup> <a name="TagKeys" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.property.tagKeys"></a>

```csharp
public string[] TagKeys { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.property.internalValue"></a>

```csharp
public CloudAzureIntegrationsCostManagement InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagement">CloudAzureIntegrationsCostManagement</a>

---


### CloudAzureIntegrationsDataFactoryOutputReference <a name="CloudAzureIntegrationsDataFactoryOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureIntegrationsDataFactoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.resetResourceGroups">ResetResourceGroups</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.resetMetricsPollingInterval"></a>

```csharp
private void ResetMetricsPollingInterval()
```

##### `ResetResourceGroups` <a name="ResetResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.resetResourceGroups"></a>

```csharp
private void ResetResourceGroups()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.property.resourceGroupsInput">ResourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactory">CloudAzureIntegrationsDataFactory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.property.metricsPollingIntervalInput"></a>

```csharp
public double MetricsPollingIntervalInput { get; }
```

- *Type:* double

---

##### `ResourceGroupsInput`<sup>Optional</sup> <a name="ResourceGroupsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.property.resourceGroupsInput"></a>

```csharp
public string[] ResourceGroupsInput { get; }
```

- *Type:* string[]

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; }
```

- *Type:* double

---

##### `ResourceGroups`<sup>Required</sup> <a name="ResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.property.internalValue"></a>

```csharp
public CloudAzureIntegrationsDataFactory InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactory">CloudAzureIntegrationsDataFactory</a>

---


### CloudAzureIntegrationsEventHubOutputReference <a name="CloudAzureIntegrationsEventHubOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureIntegrationsEventHubOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.resetResourceGroups">ResetResourceGroups</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.resetMetricsPollingInterval"></a>

```csharp
private void ResetMetricsPollingInterval()
```

##### `ResetResourceGroups` <a name="ResetResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.resetResourceGroups"></a>

```csharp
private void ResetResourceGroups()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.property.resourceGroupsInput">ResourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHub">CloudAzureIntegrationsEventHub</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.property.metricsPollingIntervalInput"></a>

```csharp
public double MetricsPollingIntervalInput { get; }
```

- *Type:* double

---

##### `ResourceGroupsInput`<sup>Optional</sup> <a name="ResourceGroupsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.property.resourceGroupsInput"></a>

```csharp
public string[] ResourceGroupsInput { get; }
```

- *Type:* string[]

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; }
```

- *Type:* double

---

##### `ResourceGroups`<sup>Required</sup> <a name="ResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.property.internalValue"></a>

```csharp
public CloudAzureIntegrationsEventHub InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHub">CloudAzureIntegrationsEventHub</a>

---


### CloudAzureIntegrationsExpressRouteOutputReference <a name="CloudAzureIntegrationsExpressRouteOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureIntegrationsExpressRouteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.resetResourceGroups">ResetResourceGroups</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.resetMetricsPollingInterval"></a>

```csharp
private void ResetMetricsPollingInterval()
```

##### `ResetResourceGroups` <a name="ResetResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.resetResourceGroups"></a>

```csharp
private void ResetResourceGroups()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.property.resourceGroupsInput">ResourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRoute">CloudAzureIntegrationsExpressRoute</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.property.metricsPollingIntervalInput"></a>

```csharp
public double MetricsPollingIntervalInput { get; }
```

- *Type:* double

---

##### `ResourceGroupsInput`<sup>Optional</sup> <a name="ResourceGroupsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.property.resourceGroupsInput"></a>

```csharp
public string[] ResourceGroupsInput { get; }
```

- *Type:* string[]

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; }
```

- *Type:* double

---

##### `ResourceGroups`<sup>Required</sup> <a name="ResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.property.internalValue"></a>

```csharp
public CloudAzureIntegrationsExpressRoute InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRoute">CloudAzureIntegrationsExpressRoute</a>

---


### CloudAzureIntegrationsFirewallsOutputReference <a name="CloudAzureIntegrationsFirewallsOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureIntegrationsFirewallsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.resetResourceGroups">ResetResourceGroups</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.resetMetricsPollingInterval"></a>

```csharp
private void ResetMetricsPollingInterval()
```

##### `ResetResourceGroups` <a name="ResetResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.resetResourceGroups"></a>

```csharp
private void ResetResourceGroups()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.property.resourceGroupsInput">ResourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewalls">CloudAzureIntegrationsFirewalls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.property.metricsPollingIntervalInput"></a>

```csharp
public double MetricsPollingIntervalInput { get; }
```

- *Type:* double

---

##### `ResourceGroupsInput`<sup>Optional</sup> <a name="ResourceGroupsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.property.resourceGroupsInput"></a>

```csharp
public string[] ResourceGroupsInput { get; }
```

- *Type:* string[]

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; }
```

- *Type:* double

---

##### `ResourceGroups`<sup>Required</sup> <a name="ResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.property.internalValue"></a>

```csharp
public CloudAzureIntegrationsFirewalls InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewalls">CloudAzureIntegrationsFirewalls</a>

---


### CloudAzureIntegrationsFrontDoorOutputReference <a name="CloudAzureIntegrationsFrontDoorOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureIntegrationsFrontDoorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.resetResourceGroups">ResetResourceGroups</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.resetMetricsPollingInterval"></a>

```csharp
private void ResetMetricsPollingInterval()
```

##### `ResetResourceGroups` <a name="ResetResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.resetResourceGroups"></a>

```csharp
private void ResetResourceGroups()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.property.resourceGroupsInput">ResourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoor">CloudAzureIntegrationsFrontDoor</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.property.metricsPollingIntervalInput"></a>

```csharp
public double MetricsPollingIntervalInput { get; }
```

- *Type:* double

---

##### `ResourceGroupsInput`<sup>Optional</sup> <a name="ResourceGroupsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.property.resourceGroupsInput"></a>

```csharp
public string[] ResourceGroupsInput { get; }
```

- *Type:* string[]

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; }
```

- *Type:* double

---

##### `ResourceGroups`<sup>Required</sup> <a name="ResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.property.internalValue"></a>

```csharp
public CloudAzureIntegrationsFrontDoor InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoor">CloudAzureIntegrationsFrontDoor</a>

---


### CloudAzureIntegrationsFunctionsOutputReference <a name="CloudAzureIntegrationsFunctionsOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureIntegrationsFunctionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.resetResourceGroups">ResetResourceGroups</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.resetMetricsPollingInterval"></a>

```csharp
private void ResetMetricsPollingInterval()
```

##### `ResetResourceGroups` <a name="ResetResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.resetResourceGroups"></a>

```csharp
private void ResetResourceGroups()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.property.resourceGroupsInput">ResourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctions">CloudAzureIntegrationsFunctions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.property.metricsPollingIntervalInput"></a>

```csharp
public double MetricsPollingIntervalInput { get; }
```

- *Type:* double

---

##### `ResourceGroupsInput`<sup>Optional</sup> <a name="ResourceGroupsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.property.resourceGroupsInput"></a>

```csharp
public string[] ResourceGroupsInput { get; }
```

- *Type:* string[]

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; }
```

- *Type:* double

---

##### `ResourceGroups`<sup>Required</sup> <a name="ResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.property.internalValue"></a>

```csharp
public CloudAzureIntegrationsFunctions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctions">CloudAzureIntegrationsFunctions</a>

---


### CloudAzureIntegrationsKeyVaultOutputReference <a name="CloudAzureIntegrationsKeyVaultOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureIntegrationsKeyVaultOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.resetResourceGroups">ResetResourceGroups</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.resetMetricsPollingInterval"></a>

```csharp
private void ResetMetricsPollingInterval()
```

##### `ResetResourceGroups` <a name="ResetResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.resetResourceGroups"></a>

```csharp
private void ResetResourceGroups()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.property.resourceGroupsInput">ResourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVault">CloudAzureIntegrationsKeyVault</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.property.metricsPollingIntervalInput"></a>

```csharp
public double MetricsPollingIntervalInput { get; }
```

- *Type:* double

---

##### `ResourceGroupsInput`<sup>Optional</sup> <a name="ResourceGroupsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.property.resourceGroupsInput"></a>

```csharp
public string[] ResourceGroupsInput { get; }
```

- *Type:* string[]

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; }
```

- *Type:* double

---

##### `ResourceGroups`<sup>Required</sup> <a name="ResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.property.internalValue"></a>

```csharp
public CloudAzureIntegrationsKeyVault InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVault">CloudAzureIntegrationsKeyVault</a>

---


### CloudAzureIntegrationsLoadBalancerOutputReference <a name="CloudAzureIntegrationsLoadBalancerOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureIntegrationsLoadBalancerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.resetResourceGroups">ResetResourceGroups</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.resetMetricsPollingInterval"></a>

```csharp
private void ResetMetricsPollingInterval()
```

##### `ResetResourceGroups` <a name="ResetResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.resetResourceGroups"></a>

```csharp
private void ResetResourceGroups()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.property.resourceGroupsInput">ResourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancer">CloudAzureIntegrationsLoadBalancer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.property.metricsPollingIntervalInput"></a>

```csharp
public double MetricsPollingIntervalInput { get; }
```

- *Type:* double

---

##### `ResourceGroupsInput`<sup>Optional</sup> <a name="ResourceGroupsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.property.resourceGroupsInput"></a>

```csharp
public string[] ResourceGroupsInput { get; }
```

- *Type:* string[]

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; }
```

- *Type:* double

---

##### `ResourceGroups`<sup>Required</sup> <a name="ResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.property.internalValue"></a>

```csharp
public CloudAzureIntegrationsLoadBalancer InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancer">CloudAzureIntegrationsLoadBalancer</a>

---


### CloudAzureIntegrationsLogicAppsOutputReference <a name="CloudAzureIntegrationsLogicAppsOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureIntegrationsLogicAppsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.resetResourceGroups">ResetResourceGroups</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.resetMetricsPollingInterval"></a>

```csharp
private void ResetMetricsPollingInterval()
```

##### `ResetResourceGroups` <a name="ResetResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.resetResourceGroups"></a>

```csharp
private void ResetResourceGroups()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.property.resourceGroupsInput">ResourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicApps">CloudAzureIntegrationsLogicApps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.property.metricsPollingIntervalInput"></a>

```csharp
public double MetricsPollingIntervalInput { get; }
```

- *Type:* double

---

##### `ResourceGroupsInput`<sup>Optional</sup> <a name="ResourceGroupsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.property.resourceGroupsInput"></a>

```csharp
public string[] ResourceGroupsInput { get; }
```

- *Type:* string[]

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; }
```

- *Type:* double

---

##### `ResourceGroups`<sup>Required</sup> <a name="ResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.property.internalValue"></a>

```csharp
public CloudAzureIntegrationsLogicApps InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicApps">CloudAzureIntegrationsLogicApps</a>

---


### CloudAzureIntegrationsMachineLearningOutputReference <a name="CloudAzureIntegrationsMachineLearningOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureIntegrationsMachineLearningOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.resetResourceGroups">ResetResourceGroups</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.resetMetricsPollingInterval"></a>

```csharp
private void ResetMetricsPollingInterval()
```

##### `ResetResourceGroups` <a name="ResetResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.resetResourceGroups"></a>

```csharp
private void ResetResourceGroups()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.property.resourceGroupsInput">ResourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearning">CloudAzureIntegrationsMachineLearning</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.property.metricsPollingIntervalInput"></a>

```csharp
public double MetricsPollingIntervalInput { get; }
```

- *Type:* double

---

##### `ResourceGroupsInput`<sup>Optional</sup> <a name="ResourceGroupsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.property.resourceGroupsInput"></a>

```csharp
public string[] ResourceGroupsInput { get; }
```

- *Type:* string[]

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; }
```

- *Type:* double

---

##### `ResourceGroups`<sup>Required</sup> <a name="ResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.property.internalValue"></a>

```csharp
public CloudAzureIntegrationsMachineLearning InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearning">CloudAzureIntegrationsMachineLearning</a>

---


### CloudAzureIntegrationsMariaDbOutputReference <a name="CloudAzureIntegrationsMariaDbOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureIntegrationsMariaDbOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.resetResourceGroups">ResetResourceGroups</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.resetMetricsPollingInterval"></a>

```csharp
private void ResetMetricsPollingInterval()
```

##### `ResetResourceGroups` <a name="ResetResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.resetResourceGroups"></a>

```csharp
private void ResetResourceGroups()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.property.resourceGroupsInput">ResourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDb">CloudAzureIntegrationsMariaDb</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.property.metricsPollingIntervalInput"></a>

```csharp
public double MetricsPollingIntervalInput { get; }
```

- *Type:* double

---

##### `ResourceGroupsInput`<sup>Optional</sup> <a name="ResourceGroupsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.property.resourceGroupsInput"></a>

```csharp
public string[] ResourceGroupsInput { get; }
```

- *Type:* string[]

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; }
```

- *Type:* double

---

##### `ResourceGroups`<sup>Required</sup> <a name="ResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.property.internalValue"></a>

```csharp
public CloudAzureIntegrationsMariaDb InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDb">CloudAzureIntegrationsMariaDb</a>

---


### CloudAzureIntegrationsMonitorOutputReference <a name="CloudAzureIntegrationsMonitorOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureIntegrationsMonitorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.resetExcludeTags">ResetExcludeTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.resetIncludeTags">ResetIncludeTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.resetResourceGroups">ResetResourceGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.resetResourceTypes">ResetResourceTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetExcludeTags` <a name="ResetExcludeTags" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.resetExcludeTags"></a>

```csharp
private void ResetExcludeTags()
```

##### `ResetIncludeTags` <a name="ResetIncludeTags" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.resetIncludeTags"></a>

```csharp
private void ResetIncludeTags()
```

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.resetMetricsPollingInterval"></a>

```csharp
private void ResetMetricsPollingInterval()
```

##### `ResetResourceGroups` <a name="ResetResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.resetResourceGroups"></a>

```csharp
private void ResetResourceGroups()
```

##### `ResetResourceTypes` <a name="ResetResourceTypes" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.resetResourceTypes"></a>

```csharp
private void ResetResourceTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.excludeTagsInput">ExcludeTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.includeTagsInput">IncludeTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.resourceGroupsInput">ResourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.resourceTypesInput">ResourceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.enabled">Enabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.excludeTags">ExcludeTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.includeTags">IncludeTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.resourceTypes">ResourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitor">CloudAzureIntegrationsMonitor</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `ExcludeTagsInput`<sup>Optional</sup> <a name="ExcludeTagsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.excludeTagsInput"></a>

```csharp
public string[] ExcludeTagsInput { get; }
```

- *Type:* string[]

---

##### `IncludeTagsInput`<sup>Optional</sup> <a name="IncludeTagsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.includeTagsInput"></a>

```csharp
public string[] IncludeTagsInput { get; }
```

- *Type:* string[]

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.metricsPollingIntervalInput"></a>

```csharp
public double MetricsPollingIntervalInput { get; }
```

- *Type:* double

---

##### `ResourceGroupsInput`<sup>Optional</sup> <a name="ResourceGroupsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.resourceGroupsInput"></a>

```csharp
public string[] ResourceGroupsInput { get; }
```

- *Type:* string[]

---

##### `ResourceTypesInput`<sup>Optional</sup> <a name="ResourceTypesInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.resourceTypesInput"></a>

```csharp
public string[] ResourceTypesInput { get; }
```

- *Type:* string[]

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `ExcludeTags`<sup>Required</sup> <a name="ExcludeTags" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.excludeTags"></a>

```csharp
public string[] ExcludeTags { get; }
```

- *Type:* string[]

---

##### `IncludeTags`<sup>Required</sup> <a name="IncludeTags" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.includeTags"></a>

```csharp
public string[] IncludeTags { get; }
```

- *Type:* string[]

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; }
```

- *Type:* double

---

##### `ResourceGroups`<sup>Required</sup> <a name="ResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; }
```

- *Type:* string[]

---

##### `ResourceTypes`<sup>Required</sup> <a name="ResourceTypes" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.resourceTypes"></a>

```csharp
public string[] ResourceTypes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.internalValue"></a>

```csharp
public CloudAzureIntegrationsMonitor InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitor">CloudAzureIntegrationsMonitor</a>

---


### CloudAzureIntegrationsMysqlFlexibleOutputReference <a name="CloudAzureIntegrationsMysqlFlexibleOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureIntegrationsMysqlFlexibleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.resetResourceGroups">ResetResourceGroups</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.resetMetricsPollingInterval"></a>

```csharp
private void ResetMetricsPollingInterval()
```

##### `ResetResourceGroups` <a name="ResetResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.resetResourceGroups"></a>

```csharp
private void ResetResourceGroups()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.property.resourceGroupsInput">ResourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexible">CloudAzureIntegrationsMysqlFlexible</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.property.metricsPollingIntervalInput"></a>

```csharp
public double MetricsPollingIntervalInput { get; }
```

- *Type:* double

---

##### `ResourceGroupsInput`<sup>Optional</sup> <a name="ResourceGroupsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.property.resourceGroupsInput"></a>

```csharp
public string[] ResourceGroupsInput { get; }
```

- *Type:* string[]

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; }
```

- *Type:* double

---

##### `ResourceGroups`<sup>Required</sup> <a name="ResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.property.internalValue"></a>

```csharp
public CloudAzureIntegrationsMysqlFlexible InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexible">CloudAzureIntegrationsMysqlFlexible</a>

---


### CloudAzureIntegrationsMysqlOutputReference <a name="CloudAzureIntegrationsMysqlOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureIntegrationsMysqlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.resetResourceGroups">ResetResourceGroups</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.resetMetricsPollingInterval"></a>

```csharp
private void ResetMetricsPollingInterval()
```

##### `ResetResourceGroups` <a name="ResetResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.resetResourceGroups"></a>

```csharp
private void ResetResourceGroups()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.property.resourceGroupsInput">ResourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysql">CloudAzureIntegrationsMysql</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.property.metricsPollingIntervalInput"></a>

```csharp
public double MetricsPollingIntervalInput { get; }
```

- *Type:* double

---

##### `ResourceGroupsInput`<sup>Optional</sup> <a name="ResourceGroupsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.property.resourceGroupsInput"></a>

```csharp
public string[] ResourceGroupsInput { get; }
```

- *Type:* string[]

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; }
```

- *Type:* double

---

##### `ResourceGroups`<sup>Required</sup> <a name="ResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.property.internalValue"></a>

```csharp
public CloudAzureIntegrationsMysql InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysql">CloudAzureIntegrationsMysql</a>

---


### CloudAzureIntegrationsPostgresqlFlexibleOutputReference <a name="CloudAzureIntegrationsPostgresqlFlexibleOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureIntegrationsPostgresqlFlexibleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.resetResourceGroups">ResetResourceGroups</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.resetMetricsPollingInterval"></a>

```csharp
private void ResetMetricsPollingInterval()
```

##### `ResetResourceGroups` <a name="ResetResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.resetResourceGroups"></a>

```csharp
private void ResetResourceGroups()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.property.resourceGroupsInput">ResourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexible">CloudAzureIntegrationsPostgresqlFlexible</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.property.metricsPollingIntervalInput"></a>

```csharp
public double MetricsPollingIntervalInput { get; }
```

- *Type:* double

---

##### `ResourceGroupsInput`<sup>Optional</sup> <a name="ResourceGroupsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.property.resourceGroupsInput"></a>

```csharp
public string[] ResourceGroupsInput { get; }
```

- *Type:* string[]

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; }
```

- *Type:* double

---

##### `ResourceGroups`<sup>Required</sup> <a name="ResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.property.internalValue"></a>

```csharp
public CloudAzureIntegrationsPostgresqlFlexible InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexible">CloudAzureIntegrationsPostgresqlFlexible</a>

---


### CloudAzureIntegrationsPostgresqlOutputReference <a name="CloudAzureIntegrationsPostgresqlOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureIntegrationsPostgresqlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.resetResourceGroups">ResetResourceGroups</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.resetMetricsPollingInterval"></a>

```csharp
private void ResetMetricsPollingInterval()
```

##### `ResetResourceGroups` <a name="ResetResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.resetResourceGroups"></a>

```csharp
private void ResetResourceGroups()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.property.resourceGroupsInput">ResourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresql">CloudAzureIntegrationsPostgresql</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.property.metricsPollingIntervalInput"></a>

```csharp
public double MetricsPollingIntervalInput { get; }
```

- *Type:* double

---

##### `ResourceGroupsInput`<sup>Optional</sup> <a name="ResourceGroupsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.property.resourceGroupsInput"></a>

```csharp
public string[] ResourceGroupsInput { get; }
```

- *Type:* string[]

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; }
```

- *Type:* double

---

##### `ResourceGroups`<sup>Required</sup> <a name="ResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.property.internalValue"></a>

```csharp
public CloudAzureIntegrationsPostgresql InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresql">CloudAzureIntegrationsPostgresql</a>

---


### CloudAzureIntegrationsPowerBiDedicatedOutputReference <a name="CloudAzureIntegrationsPowerBiDedicatedOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureIntegrationsPowerBiDedicatedOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.resetResourceGroups">ResetResourceGroups</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.resetMetricsPollingInterval"></a>

```csharp
private void ResetMetricsPollingInterval()
```

##### `ResetResourceGroups` <a name="ResetResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.resetResourceGroups"></a>

```csharp
private void ResetResourceGroups()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.property.resourceGroupsInput">ResourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicated">CloudAzureIntegrationsPowerBiDedicated</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.property.metricsPollingIntervalInput"></a>

```csharp
public double MetricsPollingIntervalInput { get; }
```

- *Type:* double

---

##### `ResourceGroupsInput`<sup>Optional</sup> <a name="ResourceGroupsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.property.resourceGroupsInput"></a>

```csharp
public string[] ResourceGroupsInput { get; }
```

- *Type:* string[]

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; }
```

- *Type:* double

---

##### `ResourceGroups`<sup>Required</sup> <a name="ResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.property.internalValue"></a>

```csharp
public CloudAzureIntegrationsPowerBiDedicated InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicated">CloudAzureIntegrationsPowerBiDedicated</a>

---


### CloudAzureIntegrationsRedisCacheOutputReference <a name="CloudAzureIntegrationsRedisCacheOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureIntegrationsRedisCacheOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.resetResourceGroups">ResetResourceGroups</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.resetMetricsPollingInterval"></a>

```csharp
private void ResetMetricsPollingInterval()
```

##### `ResetResourceGroups` <a name="ResetResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.resetResourceGroups"></a>

```csharp
private void ResetResourceGroups()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.property.resourceGroupsInput">ResourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCache">CloudAzureIntegrationsRedisCache</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.property.metricsPollingIntervalInput"></a>

```csharp
public double MetricsPollingIntervalInput { get; }
```

- *Type:* double

---

##### `ResourceGroupsInput`<sup>Optional</sup> <a name="ResourceGroupsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.property.resourceGroupsInput"></a>

```csharp
public string[] ResourceGroupsInput { get; }
```

- *Type:* string[]

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; }
```

- *Type:* double

---

##### `ResourceGroups`<sup>Required</sup> <a name="ResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.property.internalValue"></a>

```csharp
public CloudAzureIntegrationsRedisCache InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCache">CloudAzureIntegrationsRedisCache</a>

---


### CloudAzureIntegrationsServiceBusOutputReference <a name="CloudAzureIntegrationsServiceBusOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureIntegrationsServiceBusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.resetResourceGroups">ResetResourceGroups</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.resetMetricsPollingInterval"></a>

```csharp
private void ResetMetricsPollingInterval()
```

##### `ResetResourceGroups` <a name="ResetResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.resetResourceGroups"></a>

```csharp
private void ResetResourceGroups()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.property.resourceGroupsInput">ResourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBus">CloudAzureIntegrationsServiceBus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.property.metricsPollingIntervalInput"></a>

```csharp
public double MetricsPollingIntervalInput { get; }
```

- *Type:* double

---

##### `ResourceGroupsInput`<sup>Optional</sup> <a name="ResourceGroupsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.property.resourceGroupsInput"></a>

```csharp
public string[] ResourceGroupsInput { get; }
```

- *Type:* string[]

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; }
```

- *Type:* double

---

##### `ResourceGroups`<sup>Required</sup> <a name="ResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.property.internalValue"></a>

```csharp
public CloudAzureIntegrationsServiceBus InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBus">CloudAzureIntegrationsServiceBus</a>

---


### CloudAzureIntegrationsSqlManagedOutputReference <a name="CloudAzureIntegrationsSqlManagedOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureIntegrationsSqlManagedOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.resetResourceGroups">ResetResourceGroups</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.resetMetricsPollingInterval"></a>

```csharp
private void ResetMetricsPollingInterval()
```

##### `ResetResourceGroups` <a name="ResetResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.resetResourceGroups"></a>

```csharp
private void ResetResourceGroups()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.property.resourceGroupsInput">ResourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManaged">CloudAzureIntegrationsSqlManaged</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.property.metricsPollingIntervalInput"></a>

```csharp
public double MetricsPollingIntervalInput { get; }
```

- *Type:* double

---

##### `ResourceGroupsInput`<sup>Optional</sup> <a name="ResourceGroupsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.property.resourceGroupsInput"></a>

```csharp
public string[] ResourceGroupsInput { get; }
```

- *Type:* string[]

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; }
```

- *Type:* double

---

##### `ResourceGroups`<sup>Required</sup> <a name="ResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.property.internalValue"></a>

```csharp
public CloudAzureIntegrationsSqlManaged InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManaged">CloudAzureIntegrationsSqlManaged</a>

---


### CloudAzureIntegrationsSqlOutputReference <a name="CloudAzureIntegrationsSqlOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureIntegrationsSqlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.resetResourceGroups">ResetResourceGroups</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.resetMetricsPollingInterval"></a>

```csharp
private void ResetMetricsPollingInterval()
```

##### `ResetResourceGroups` <a name="ResetResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.resetResourceGroups"></a>

```csharp
private void ResetResourceGroups()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.property.resourceGroupsInput">ResourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSql">CloudAzureIntegrationsSql</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.property.metricsPollingIntervalInput"></a>

```csharp
public double MetricsPollingIntervalInput { get; }
```

- *Type:* double

---

##### `ResourceGroupsInput`<sup>Optional</sup> <a name="ResourceGroupsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.property.resourceGroupsInput"></a>

```csharp
public string[] ResourceGroupsInput { get; }
```

- *Type:* string[]

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; }
```

- *Type:* double

---

##### `ResourceGroups`<sup>Required</sup> <a name="ResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.property.internalValue"></a>

```csharp
public CloudAzureIntegrationsSql InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSql">CloudAzureIntegrationsSql</a>

---


### CloudAzureIntegrationsStorageOutputReference <a name="CloudAzureIntegrationsStorageOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureIntegrationsStorageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.resetResourceGroups">ResetResourceGroups</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.resetMetricsPollingInterval"></a>

```csharp
private void ResetMetricsPollingInterval()
```

##### `ResetResourceGroups` <a name="ResetResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.resetResourceGroups"></a>

```csharp
private void ResetResourceGroups()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.property.resourceGroupsInput">ResourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorage">CloudAzureIntegrationsStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.property.metricsPollingIntervalInput"></a>

```csharp
public double MetricsPollingIntervalInput { get; }
```

- *Type:* double

---

##### `ResourceGroupsInput`<sup>Optional</sup> <a name="ResourceGroupsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.property.resourceGroupsInput"></a>

```csharp
public string[] ResourceGroupsInput { get; }
```

- *Type:* string[]

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; }
```

- *Type:* double

---

##### `ResourceGroups`<sup>Required</sup> <a name="ResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.property.internalValue"></a>

```csharp
public CloudAzureIntegrationsStorage InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorage">CloudAzureIntegrationsStorage</a>

---


### CloudAzureIntegrationsVirtualMachineOutputReference <a name="CloudAzureIntegrationsVirtualMachineOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureIntegrationsVirtualMachineOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.resetResourceGroups">ResetResourceGroups</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.resetMetricsPollingInterval"></a>

```csharp
private void ResetMetricsPollingInterval()
```

##### `ResetResourceGroups` <a name="ResetResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.resetResourceGroups"></a>

```csharp
private void ResetResourceGroups()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.property.resourceGroupsInput">ResourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachine">CloudAzureIntegrationsVirtualMachine</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.property.metricsPollingIntervalInput"></a>

```csharp
public double MetricsPollingIntervalInput { get; }
```

- *Type:* double

---

##### `ResourceGroupsInput`<sup>Optional</sup> <a name="ResourceGroupsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.property.resourceGroupsInput"></a>

```csharp
public string[] ResourceGroupsInput { get; }
```

- *Type:* string[]

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; }
```

- *Type:* double

---

##### `ResourceGroups`<sup>Required</sup> <a name="ResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.property.internalValue"></a>

```csharp
public CloudAzureIntegrationsVirtualMachine InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachine">CloudAzureIntegrationsVirtualMachine</a>

---


### CloudAzureIntegrationsVirtualNetworksOutputReference <a name="CloudAzureIntegrationsVirtualNetworksOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureIntegrationsVirtualNetworksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.resetResourceGroups">ResetResourceGroups</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.resetMetricsPollingInterval"></a>

```csharp
private void ResetMetricsPollingInterval()
```

##### `ResetResourceGroups` <a name="ResetResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.resetResourceGroups"></a>

```csharp
private void ResetResourceGroups()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.property.resourceGroupsInput">ResourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworks">CloudAzureIntegrationsVirtualNetworks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.property.metricsPollingIntervalInput"></a>

```csharp
public double MetricsPollingIntervalInput { get; }
```

- *Type:* double

---

##### `ResourceGroupsInput`<sup>Optional</sup> <a name="ResourceGroupsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.property.resourceGroupsInput"></a>

```csharp
public string[] ResourceGroupsInput { get; }
```

- *Type:* string[]

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; }
```

- *Type:* double

---

##### `ResourceGroups`<sup>Required</sup> <a name="ResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.property.internalValue"></a>

```csharp
public CloudAzureIntegrationsVirtualNetworks InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworks">CloudAzureIntegrationsVirtualNetworks</a>

---


### CloudAzureIntegrationsVmsOutputReference <a name="CloudAzureIntegrationsVmsOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureIntegrationsVmsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.resetResourceGroups">ResetResourceGroups</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.resetMetricsPollingInterval"></a>

```csharp
private void ResetMetricsPollingInterval()
```

##### `ResetResourceGroups` <a name="ResetResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.resetResourceGroups"></a>

```csharp
private void ResetResourceGroups()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.property.resourceGroupsInput">ResourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVms">CloudAzureIntegrationsVms</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.property.metricsPollingIntervalInput"></a>

```csharp
public double MetricsPollingIntervalInput { get; }
```

- *Type:* double

---

##### `ResourceGroupsInput`<sup>Optional</sup> <a name="ResourceGroupsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.property.resourceGroupsInput"></a>

```csharp
public string[] ResourceGroupsInput { get; }
```

- *Type:* string[]

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; }
```

- *Type:* double

---

##### `ResourceGroups`<sup>Required</sup> <a name="ResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.property.internalValue"></a>

```csharp
public CloudAzureIntegrationsVms InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVms">CloudAzureIntegrationsVms</a>

---


### CloudAzureIntegrationsVpnGatewayOutputReference <a name="CloudAzureIntegrationsVpnGatewayOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureIntegrationsVpnGatewayOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.resetResourceGroups">ResetResourceGroups</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.resetMetricsPollingInterval"></a>

```csharp
private void ResetMetricsPollingInterval()
```

##### `ResetResourceGroups` <a name="ResetResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.resetResourceGroups"></a>

```csharp
private void ResetResourceGroups()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.property.resourceGroupsInput">ResourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.property.resourceGroups">ResourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGateway">CloudAzureIntegrationsVpnGateway</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.property.metricsPollingIntervalInput"></a>

```csharp
public double MetricsPollingIntervalInput { get; }
```

- *Type:* double

---

##### `ResourceGroupsInput`<sup>Optional</sup> <a name="ResourceGroupsInput" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.property.resourceGroupsInput"></a>

```csharp
public string[] ResourceGroupsInput { get; }
```

- *Type:* string[]

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; }
```

- *Type:* double

---

##### `ResourceGroups`<sup>Required</sup> <a name="ResourceGroups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.property.resourceGroups"></a>

```csharp
public string[] ResourceGroups { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.property.internalValue"></a>

```csharp
public CloudAzureIntegrationsVpnGateway InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGateway">CloudAzureIntegrationsVpnGateway</a>

---



