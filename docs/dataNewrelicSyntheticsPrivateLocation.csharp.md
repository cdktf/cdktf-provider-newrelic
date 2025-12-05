# `dataNewrelicSyntheticsPrivateLocation` Submodule <a name="`dataNewrelicSyntheticsPrivateLocation` Submodule" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataNewrelicSyntheticsPrivateLocation <a name="DataNewrelicSyntheticsPrivateLocation" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/data-sources/synthetics_private_location newrelic_synthetics_private_location}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new DataNewrelicSyntheticsPrivateLocation(Construct Scope, string Id, DataNewrelicSyntheticsPrivateLocationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig">DataNewrelicSyntheticsPrivateLocationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig">DataNewrelicSyntheticsPrivateLocationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.resetKey">ResetKey</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.resetKey"></a>

```csharp
private void ResetKey()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataNewrelicSyntheticsPrivateLocation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

DataNewrelicSyntheticsPrivateLocation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

DataNewrelicSyntheticsPrivateLocation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

DataNewrelicSyntheticsPrivateLocation.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

DataNewrelicSyntheticsPrivateLocation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataNewrelicSyntheticsPrivateLocation resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataNewrelicSyntheticsPrivateLocation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataNewrelicSyntheticsPrivateLocation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/data-sources/synthetics_private_location#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataNewrelicSyntheticsPrivateLocation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.accountIdInput">AccountIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.keyInput">KeyInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.accountId">AccountId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.key">Key</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.accountIdInput"></a>

```csharp
public double AccountIdInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.keyInput"></a>

```csharp
public string[] KeyInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.accountId"></a>

```csharp
public double AccountId { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.key"></a>

```csharp
public string[] Key { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataNewrelicSyntheticsPrivateLocationConfig <a name="DataNewrelicSyntheticsPrivateLocationConfig" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new DataNewrelicSyntheticsPrivateLocationConfig {
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
    string[] Key = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.name">Name</a></code> | <code>string</code> | The name of the Synthetics monitor private location. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.accountId">AccountId</a></code> | <code>double</code> | The ID of the account in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/data-sources/synthetics_private_location#id DataNewrelicSyntheticsPrivateLocation#id}. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.key">Key</a></code> | <code>string[]</code> | The key of the queried private location. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the Synthetics monitor private location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/data-sources/synthetics_private_location#name DataNewrelicSyntheticsPrivateLocation#name}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.accountId"></a>

```csharp
public double AccountId { get; set; }
```

- *Type:* double

The ID of the account in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/data-sources/synthetics_private_location#account_id DataNewrelicSyntheticsPrivateLocation#account_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/data-sources/synthetics_private_location#id DataNewrelicSyntheticsPrivateLocation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.key"></a>

```csharp
public string[] Key { get; set; }
```

- *Type:* string[]

The key of the queried private location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/data-sources/synthetics_private_location#key DataNewrelicSyntheticsPrivateLocation#key}

---



