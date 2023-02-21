# `dataNewrelicNotificationDestination` Submodule <a name="`dataNewrelicNotificationDestination` Submodule" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataNewrelicNotificationDestination <a name="DataNewrelicNotificationDestination" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/d/notification_destination newrelic_notification_destination}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new DataNewrelicNotificationDestination(Construct Scope, string Id, DataNewrelicNotificationDestinationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig">DataNewrelicNotificationDestinationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig">DataNewrelicNotificationDestinationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.putAuthBasic">PutAuthBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.putAuthToken">PutAuthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.putProperty">PutProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.resetActive">ResetActive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.resetAuthBasic">ResetAuthBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.resetAuthToken">ResetAuthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.resetProperty">ResetProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAuthBasic` <a name="PutAuthBasic" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.putAuthBasic"></a>

```csharp
private void PutAuthBasic(DataNewrelicNotificationDestinationAuthBasic Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.putAuthBasic.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasic">DataNewrelicNotificationDestinationAuthBasic</a>

---

##### `PutAuthToken` <a name="PutAuthToken" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.putAuthToken"></a>

```csharp
private void PutAuthToken(DataNewrelicNotificationDestinationAuthToken Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.putAuthToken.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthToken">DataNewrelicNotificationDestinationAuthToken</a>

---

##### `PutProperty` <a name="PutProperty" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.putProperty"></a>

```csharp
private void PutProperty(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.putProperty.parameter.value"></a>

- *Type:* object

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetActive` <a name="ResetActive" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.resetActive"></a>

```csharp
private void ResetActive()
```

##### `ResetAuthBasic` <a name="ResetAuthBasic" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.resetAuthBasic"></a>

```csharp
private void ResetAuthBasic()
```

##### `ResetAuthToken` <a name="ResetAuthToken" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.resetAuthToken"></a>

```csharp
private void ResetAuthToken()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetProperty` <a name="ResetProperty" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.resetProperty"></a>

```csharp
private void ResetProperty()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.resetType"></a>

```csharp
private void ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

DataNewrelicNotificationDestination.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

DataNewrelicNotificationDestination.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

DataNewrelicNotificationDestination.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.authBasic">AuthBasic</a></code> | <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference">DataNewrelicNotificationDestinationAuthBasicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.authToken">AuthToken</a></code> | <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference">DataNewrelicNotificationDestinationAuthTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.lastSent">LastSent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.property">Property</a></code> | <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList">DataNewrelicNotificationDestinationPropertyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.accountIdInput">AccountIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.activeInput">ActiveInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.authBasicInput">AuthBasicInput</a></code> | <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasic">DataNewrelicNotificationDestinationAuthBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.authTokenInput">AuthTokenInput</a></code> | <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthToken">DataNewrelicNotificationDestinationAuthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.propertyInput">PropertyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.accountId">AccountId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.active">Active</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AuthBasic`<sup>Required</sup> <a name="AuthBasic" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.authBasic"></a>

```csharp
public DataNewrelicNotificationDestinationAuthBasicOutputReference AuthBasic { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference">DataNewrelicNotificationDestinationAuthBasicOutputReference</a>

---

##### `AuthToken`<sup>Required</sup> <a name="AuthToken" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.authToken"></a>

```csharp
public DataNewrelicNotificationDestinationAuthTokenOutputReference AuthToken { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference">DataNewrelicNotificationDestinationAuthTokenOutputReference</a>

---

##### `LastSent`<sup>Required</sup> <a name="LastSent" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.lastSent"></a>

```csharp
public string LastSent { get; }
```

- *Type:* string

---

##### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.property"></a>

```csharp
public DataNewrelicNotificationDestinationPropertyList Property { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList">DataNewrelicNotificationDestinationPropertyList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.accountIdInput"></a>

```csharp
public double AccountIdInput { get; }
```

- *Type:* double

---

##### `ActiveInput`<sup>Optional</sup> <a name="ActiveInput" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.activeInput"></a>

```csharp
public object ActiveInput { get; }
```

- *Type:* object

---

##### `AuthBasicInput`<sup>Optional</sup> <a name="AuthBasicInput" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.authBasicInput"></a>

```csharp
public DataNewrelicNotificationDestinationAuthBasic AuthBasicInput { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasic">DataNewrelicNotificationDestinationAuthBasic</a>

---

##### `AuthTokenInput`<sup>Optional</sup> <a name="AuthTokenInput" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.authTokenInput"></a>

```csharp
public DataNewrelicNotificationDestinationAuthToken AuthTokenInput { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthToken">DataNewrelicNotificationDestinationAuthToken</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PropertyInput`<sup>Optional</sup> <a name="PropertyInput" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.propertyInput"></a>

```csharp
public object PropertyInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.accountId"></a>

```csharp
public double AccountId { get; }
```

- *Type:* double

---

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.active"></a>

```csharp
public object Active { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataNewrelicNotificationDestinationAuthBasic <a name="DataNewrelicNotificationDestinationAuthBasic" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasic.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new DataNewrelicNotificationDestinationAuthBasic {
    string User = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasic.property.user">User</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/notification_destination#user DataNewrelicNotificationDestination#user}. |

---

##### `User`<sup>Optional</sup> <a name="User" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasic.property.user"></a>

```csharp
public string User { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/notification_destination#user DataNewrelicNotificationDestination#user}.

---

### DataNewrelicNotificationDestinationAuthToken <a name="DataNewrelicNotificationDestinationAuthToken" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthToken.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new DataNewrelicNotificationDestinationAuthToken {
    string Prefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthToken.property.prefix">Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/notification_destination#prefix DataNewrelicNotificationDestination#prefix}. |

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthToken.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/notification_destination#prefix DataNewrelicNotificationDestination#prefix}.

---

### DataNewrelicNotificationDestinationConfig <a name="DataNewrelicNotificationDestinationConfig" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new DataNewrelicNotificationDestinationConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Id,
    double AccountId = null,
    object Active = null,
    DataNewrelicNotificationDestinationAuthBasic AuthBasic = null,
    DataNewrelicNotificationDestinationAuthToken AuthToken = null,
    string Name = null,
    object Property = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.id">Id</a></code> | <code>string</code> | The ID of the destination. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.accountId">AccountId</a></code> | <code>double</code> | The account ID under which to put the destination. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.active">Active</a></code> | <code>object</code> | Indicates whether the destination is active. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.authBasic">AuthBasic</a></code> | <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasic">DataNewrelicNotificationDestinationAuthBasic</a></code> | auth_basic block. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.authToken">AuthToken</a></code> | <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthToken">DataNewrelicNotificationDestinationAuthToken</a></code> | auth_token block. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.name">Name</a></code> | <code>string</code> | The name of the destination. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.property">Property</a></code> | <code>object</code> | property block. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.type">Type</a></code> | <code>string</code> | The type of the destination. One of: (WEBHOOK, EMAIL, SERVICE_NOW, PAGERDUTY_ACCOUNT_INTEGRATION, PAGERDUTY_SERVICE_INTEGRATION, JIRA, SLACK, SLACK_COLLABORATION, SLACK_LEGACY, MOBILE_PUSH, EVENT_BRIDGE). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The ID of the destination.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/notification_destination#id DataNewrelicNotificationDestination#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.accountId"></a>

```csharp
public double AccountId { get; set; }
```

- *Type:* double

The account ID under which to put the destination.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/notification_destination#account_id DataNewrelicNotificationDestination#account_id}

---

##### `Active`<sup>Optional</sup> <a name="Active" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.active"></a>

```csharp
public object Active { get; set; }
```

- *Type:* object

Indicates whether the destination is active.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/notification_destination#active DataNewrelicNotificationDestination#active}

---

##### `AuthBasic`<sup>Optional</sup> <a name="AuthBasic" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.authBasic"></a>

```csharp
public DataNewrelicNotificationDestinationAuthBasic AuthBasic { get; set; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasic">DataNewrelicNotificationDestinationAuthBasic</a>

auth_basic block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/notification_destination#auth_basic DataNewrelicNotificationDestination#auth_basic}

---

##### `AuthToken`<sup>Optional</sup> <a name="AuthToken" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.authToken"></a>

```csharp
public DataNewrelicNotificationDestinationAuthToken AuthToken { get; set; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthToken">DataNewrelicNotificationDestinationAuthToken</a>

auth_token block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/notification_destination#auth_token DataNewrelicNotificationDestination#auth_token}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the destination.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/notification_destination#name DataNewrelicNotificationDestination#name}

---

##### `Property`<sup>Optional</sup> <a name="Property" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.property"></a>

```csharp
public object Property { get; set; }
```

- *Type:* object

property block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/notification_destination#property DataNewrelicNotificationDestination#property}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of the destination. One of: (WEBHOOK, EMAIL, SERVICE_NOW, PAGERDUTY_ACCOUNT_INTEGRATION, PAGERDUTY_SERVICE_INTEGRATION, JIRA, SLACK, SLACK_COLLABORATION, SLACK_LEGACY, MOBILE_PUSH, EVENT_BRIDGE).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/notification_destination#type DataNewrelicNotificationDestination#type}

---

### DataNewrelicNotificationDestinationProperty <a name="DataNewrelicNotificationDestinationProperty" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationProperty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationProperty.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new DataNewrelicNotificationDestinationProperty {
    string Key,
    string Value,
    string DisplayValue = null,
    string Label = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationProperty.property.key">Key</a></code> | <code>string</code> | Notification property key. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationProperty.property.value">Value</a></code> | <code>string</code> | Notification property value. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationProperty.property.displayValue">DisplayValue</a></code> | <code>string</code> | Notification property display key. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationProperty.property.label">Label</a></code> | <code>string</code> | Notification property label. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationProperty.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Notification property key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/notification_destination#key DataNewrelicNotificationDestination#key}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationProperty.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Notification property value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/notification_destination#value DataNewrelicNotificationDestination#value}

---

##### `DisplayValue`<sup>Optional</sup> <a name="DisplayValue" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationProperty.property.displayValue"></a>

```csharp
public string DisplayValue { get; set; }
```

- *Type:* string

Notification property display key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/notification_destination#display_value DataNewrelicNotificationDestination#display_value}

---

##### `Label`<sup>Optional</sup> <a name="Label" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationProperty.property.label"></a>

```csharp
public string Label { get; set; }
```

- *Type:* string

Notification property label.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/notification_destination#label DataNewrelicNotificationDestination#label}

---

## Classes <a name="Classes" id="Classes"></a>

### DataNewrelicNotificationDestinationAuthBasicOutputReference <a name="DataNewrelicNotificationDestinationAuthBasicOutputReference" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new DataNewrelicNotificationDestinationAuthBasicOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.resetUser">ResetUser</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUser` <a name="ResetUser" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.resetUser"></a>

```csharp
private void ResetUser()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.property.userInput">UserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.property.user">User</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasic">DataNewrelicNotificationDestinationAuthBasic</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.property.userInput"></a>

```csharp
public string UserInput { get; }
```

- *Type:* string

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.property.user"></a>

```csharp
public string User { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasicOutputReference.property.internalValue"></a>

```csharp
public DataNewrelicNotificationDestinationAuthBasic InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthBasic">DataNewrelicNotificationDestinationAuthBasic</a>

---


### DataNewrelicNotificationDestinationAuthTokenOutputReference <a name="DataNewrelicNotificationDestinationAuthTokenOutputReference" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new DataNewrelicNotificationDestinationAuthTokenOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.resetPrefix"></a>

```csharp
private void ResetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthToken">DataNewrelicNotificationDestinationAuthToken</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthTokenOutputReference.property.internalValue"></a>

```csharp
public DataNewrelicNotificationDestinationAuthToken InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationAuthToken">DataNewrelicNotificationDestinationAuthToken</a>

---


### DataNewrelicNotificationDestinationPropertyList <a name="DataNewrelicNotificationDestinationPropertyList" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new DataNewrelicNotificationDestinationPropertyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.get"></a>

```csharp
private DataNewrelicNotificationDestinationPropertyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataNewrelicNotificationDestinationPropertyOutputReference <a name="DataNewrelicNotificationDestinationPropertyOutputReference" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new DataNewrelicNotificationDestinationPropertyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.resetDisplayValue">ResetDisplayValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.resetLabel">ResetLabel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplayValue` <a name="ResetDisplayValue" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.resetDisplayValue"></a>

```csharp
private void ResetDisplayValue()
```

##### `ResetLabel` <a name="ResetLabel" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.resetLabel"></a>

```csharp
private void ResetLabel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.property.displayValueInput">DisplayValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.property.labelInput">LabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.property.displayValue">DisplayValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.property.label">Label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayValueInput`<sup>Optional</sup> <a name="DisplayValueInput" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.property.displayValueInput"></a>

```csharp
public string DisplayValueInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.property.labelInput"></a>

```csharp
public string LabelInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `DisplayValue`<sup>Required</sup> <a name="DisplayValue" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.property.displayValue"></a>

```csharp
public string DisplayValue { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.property.label"></a>

```csharp
public string Label { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



