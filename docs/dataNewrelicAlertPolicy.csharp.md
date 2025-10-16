# `dataNewrelicAlertPolicy` Submodule <a name="`dataNewrelicAlertPolicy` Submodule" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataNewrelicAlertPolicy <a name="DataNewrelicAlertPolicy" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/data-sources/alert_policy newrelic_alert_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new DataNewrelicAlertPolicy(Construct Scope, string Id, DataNewrelicAlertPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicyConfig">DataNewrelicAlertPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicyConfig">DataNewrelicAlertPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.resetIncidentPreference">ResetIncidentPreference</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIncidentPreference` <a name="ResetIncidentPreference" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.resetIncidentPreference"></a>

```csharp
private void ResetIncidentPreference()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataNewrelicAlertPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

DataNewrelicAlertPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

DataNewrelicAlertPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

DataNewrelicAlertPolicy.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

DataNewrelicAlertPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataNewrelicAlertPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataNewrelicAlertPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataNewrelicAlertPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/data-sources/alert_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataNewrelicAlertPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.accountIdInput">AccountIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.incidentPreferenceInput">IncidentPreferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.accountId">AccountId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.incidentPreference">IncidentPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.accountIdInput"></a>

```csharp
public double AccountIdInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IncidentPreferenceInput`<sup>Optional</sup> <a name="IncidentPreferenceInput" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.incidentPreferenceInput"></a>

```csharp
public string IncidentPreferenceInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.accountId"></a>

```csharp
public double AccountId { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IncidentPreference`<sup>Required</sup> <a name="IncidentPreference" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.incidentPreference"></a>

```csharp
public string IncidentPreference { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataNewrelicAlertPolicyConfig <a name="DataNewrelicAlertPolicyConfig" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new DataNewrelicAlertPolicyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    double AccountId = null,
    string Id = null,
    string IncidentPreference = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicyConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicyConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicyConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicyConfig.property.name">Name</a></code> | <code>string</code> | The name of the alert policy in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicyConfig.property.accountId">AccountId</a></code> | <code>double</code> | The New Relic account ID to operate on. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/data-sources/alert_policy#id DataNewrelicAlertPolicy#id}. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicyConfig.property.incidentPreference">IncidentPreference</a></code> | <code>string</code> | The rollup strategy for the policy, which can be `PER_POLICY`, `PER_CONDITION`, or `PER_CONDITION_AND_TARGET`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the alert policy in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/data-sources/alert_policy#name DataNewrelicAlertPolicy#name}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicyConfig.property.accountId"></a>

```csharp
public double AccountId { get; set; }
```

- *Type:* double

The New Relic account ID to operate on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/data-sources/alert_policy#account_id DataNewrelicAlertPolicy#account_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/data-sources/alert_policy#id DataNewrelicAlertPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncidentPreference`<sup>Optional</sup> <a name="IncidentPreference" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicyConfig.property.incidentPreference"></a>

```csharp
public string IncidentPreference { get; set; }
```

- *Type:* string

The rollup strategy for the policy, which can be `PER_POLICY`, `PER_CONDITION`, or `PER_CONDITION_AND_TARGET`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/data-sources/alert_policy#incident_preference DataNewrelicAlertPolicy#incident_preference}

---



