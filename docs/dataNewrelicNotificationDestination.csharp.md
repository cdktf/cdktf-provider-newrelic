# `dataNewrelicNotificationDestination` Submodule <a name="`dataNewrelicNotificationDestination` Submodule" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataNewrelicNotificationDestination <a name="DataNewrelicNotificationDestination" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.65.0/docs/data-sources/notification_destination newrelic_notification_destination}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new DataNewrelicNotificationDestination(Construct Scope, string Id, DataNewrelicNotificationDestinationConfig Config = null);
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

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig">DataNewrelicNotificationDestinationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
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
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.putSecureUrl">PutSecureUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.resetSecureUrl">ResetSecureUrl</a></code> | *No description.* |

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

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

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

##### `PutSecureUrl` <a name="PutSecureUrl" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.putSecureUrl"></a>

```csharp
private void PutSecureUrl(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.putSecureUrl.parameter.value"></a>

- *Type:* object

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetSecureUrl` <a name="ResetSecureUrl" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.resetSecureUrl"></a>

```csharp
private void ResetSecureUrl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataNewrelicNotificationDestination resource upon running "cdktf plan <stack-name>". |

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

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

DataNewrelicNotificationDestination.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataNewrelicNotificationDestination resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataNewrelicNotificationDestination to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataNewrelicNotificationDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.65.0/docs/data-sources/notification_destination#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataNewrelicNotificationDestination to import is found.

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
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.active">Active</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.guid">Guid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.property">Property</a></code> | <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList">DataNewrelicNotificationDestinationPropertyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.secureUrl">SecureUrl</a></code> | <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlList">DataNewrelicNotificationDestinationSecureUrlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.accountIdInput">AccountIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.secureUrlInput">SecureUrlInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.accountId">AccountId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.name">Name</a></code> | <code>string</code> | *No description.* |

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
public object Count { get; }
```

- *Type:* object

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

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.active"></a>

```csharp
public IResolvable Active { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Guid`<sup>Required</sup> <a name="Guid" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.guid"></a>

```csharp
public string Guid { get; }
```

- *Type:* string

---

##### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.property"></a>

```csharp
public DataNewrelicNotificationDestinationPropertyList Property { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList">DataNewrelicNotificationDestinationPropertyList</a>

---

##### `SecureUrl`<sup>Required</sup> <a name="SecureUrl" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.secureUrl"></a>

```csharp
public DataNewrelicNotificationDestinationSecureUrlList SecureUrl { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlList">DataNewrelicNotificationDestinationSecureUrlList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.accountIdInput"></a>

```csharp
public double AccountIdInput { get; }
```

- *Type:* double

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

##### `SecureUrlInput`<sup>Optional</sup> <a name="SecureUrlInput" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.secureUrlInput"></a>

```csharp
public object SecureUrlInput { get; }
```

- *Type:* object

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.accountId"></a>

```csharp
public double AccountId { get; }
```

- *Type:* double

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

### DataNewrelicNotificationDestinationConfig <a name="DataNewrelicNotificationDestinationConfig" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new DataNewrelicNotificationDestinationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    double AccountId = null,
    string Id = null,
    string Name = null,
    object SecureUrl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.accountId">AccountId</a></code> | <code>double</code> | The account ID under which to put the destination. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.id">Id</a></code> | <code>string</code> | The ID of the destination. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.name">Name</a></code> | <code>string</code> | The name of the destination. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.secureUrl">SecureUrl</a></code> | <code>object</code> | secure_url block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

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

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.accountId"></a>

```csharp
public double AccountId { get; set; }
```

- *Type:* double

The account ID under which to put the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.65.0/docs/data-sources/notification_destination#account_id DataNewrelicNotificationDestination#account_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The ID of the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.65.0/docs/data-sources/notification_destination#id DataNewrelicNotificationDestination#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.65.0/docs/data-sources/notification_destination#name DataNewrelicNotificationDestination#name}

---

##### `SecureUrl`<sup>Optional</sup> <a name="SecureUrl" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.secureUrl"></a>

```csharp
public object SecureUrl { get; set; }
```

- *Type:* object

secure_url block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.65.0/docs/data-sources/notification_destination#secure_url DataNewrelicNotificationDestination#secure_url}

---

### DataNewrelicNotificationDestinationProperty <a name="DataNewrelicNotificationDestinationProperty" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationProperty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationProperty.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new DataNewrelicNotificationDestinationProperty {

};
```


### DataNewrelicNotificationDestinationSecureUrl <a name="DataNewrelicNotificationDestinationSecureUrl" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrl.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new DataNewrelicNotificationDestinationSecureUrl {
    string Prefix
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrl.property.prefix">Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.65.0/docs/data-sources/notification_destination#prefix DataNewrelicNotificationDestination#prefix}. |

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrl.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.65.0/docs/data-sources/notification_destination#prefix DataNewrelicNotificationDestination#prefix}.

---

## Classes <a name="Classes" id="Classes"></a>

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
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

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


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.property.displayValue">DisplayValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.property.label">Label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationProperty">DataNewrelicNotificationDestinationProperty</a></code> | *No description.* |

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
public DataNewrelicNotificationDestinationProperty InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationProperty">DataNewrelicNotificationDestinationProperty</a>

---


### DataNewrelicNotificationDestinationSecureUrlList <a name="DataNewrelicNotificationDestinationSecureUrlList" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new DataNewrelicNotificationDestinationSecureUrlList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlList.get"></a>

```csharp
private DataNewrelicNotificationDestinationSecureUrlOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataNewrelicNotificationDestinationSecureUrlOutputReference <a name="DataNewrelicNotificationDestinationSecureUrlOutputReference" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new DataNewrelicNotificationDestinationSecureUrlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



