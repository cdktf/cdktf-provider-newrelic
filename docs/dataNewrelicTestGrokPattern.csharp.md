# `dataNewrelicTestGrokPattern` Submodule <a name="`dataNewrelicTestGrokPattern` Submodule" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataNewrelicTestGrokPattern <a name="DataNewrelicTestGrokPattern" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/data-sources/test_grok_pattern newrelic_test_grok_pattern}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new DataNewrelicTestGrokPattern(Construct Scope, string Id, DataNewrelicTestGrokPatternConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig">DataNewrelicTestGrokPatternConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig">DataNewrelicTestGrokPatternConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataNewrelicTestGrokPattern resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

DataNewrelicTestGrokPattern.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

DataNewrelicTestGrokPattern.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

DataNewrelicTestGrokPattern.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

DataNewrelicTestGrokPattern.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataNewrelicTestGrokPattern resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataNewrelicTestGrokPattern to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataNewrelicTestGrokPattern that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/data-sources/test_grok_pattern#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataNewrelicTestGrokPattern to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.testGrok">TestGrok</a></code> | <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList">DataNewrelicTestGrokPatternTestGrokList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.accountIdInput">AccountIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.grokInput">GrokInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.logLinesInput">LogLinesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.accountId">AccountId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.grok">Grok</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.logLines">LogLines</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `TestGrok`<sup>Required</sup> <a name="TestGrok" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.testGrok"></a>

```csharp
public DataNewrelicTestGrokPatternTestGrokList TestGrok { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList">DataNewrelicTestGrokPatternTestGrokList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.accountIdInput"></a>

```csharp
public double AccountIdInput { get; }
```

- *Type:* double

---

##### `GrokInput`<sup>Optional</sup> <a name="GrokInput" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.grokInput"></a>

```csharp
public string GrokInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LogLinesInput`<sup>Optional</sup> <a name="LogLinesInput" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.logLinesInput"></a>

```csharp
public string[] LogLinesInput { get; }
```

- *Type:* string[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.accountId"></a>

```csharp
public double AccountId { get; }
```

- *Type:* double

---

##### `Grok`<sup>Required</sup> <a name="Grok" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.grok"></a>

```csharp
public string Grok { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LogLines`<sup>Required</sup> <a name="LogLines" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.logLines"></a>

```csharp
public string[] LogLines { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataNewrelicTestGrokPatternConfig <a name="DataNewrelicTestGrokPatternConfig" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new DataNewrelicTestGrokPatternConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Grok,
    string[] LogLines,
    double AccountId = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.grok">Grok</a></code> | <code>string</code> | The Grok pattern to test. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.logLines">LogLines</a></code> | <code>string[]</code> | The log lines to test the Grok pattern against. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.accountId">AccountId</a></code> | <code>double</code> | The account id associated with the test grok. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/data-sources/test_grok_pattern#id DataNewrelicTestGrokPattern#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Grok`<sup>Required</sup> <a name="Grok" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.grok"></a>

```csharp
public string Grok { get; set; }
```

- *Type:* string

The Grok pattern to test.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/data-sources/test_grok_pattern#grok DataNewrelicTestGrokPattern#grok}

---

##### `LogLines`<sup>Required</sup> <a name="LogLines" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.logLines"></a>

```csharp
public string[] LogLines { get; set; }
```

- *Type:* string[]

The log lines to test the Grok pattern against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/data-sources/test_grok_pattern#log_lines DataNewrelicTestGrokPattern#log_lines}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.accountId"></a>

```csharp
public double AccountId { get; set; }
```

- *Type:* double

The account id associated with the test grok.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/data-sources/test_grok_pattern#account_id DataNewrelicTestGrokPattern#account_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/data-sources/test_grok_pattern#id DataNewrelicTestGrokPattern#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataNewrelicTestGrokPatternTestGrok <a name="DataNewrelicTestGrokPatternTestGrok" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrok"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrok.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new DataNewrelicTestGrokPatternTestGrok {

};
```


### DataNewrelicTestGrokPatternTestGrokAttributes <a name="DataNewrelicTestGrokPatternTestGrokAttributes" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new DataNewrelicTestGrokPatternTestGrokAttributes {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataNewrelicTestGrokPatternTestGrokAttributesList <a name="DataNewrelicTestGrokPatternTestGrokAttributesList" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new DataNewrelicTestGrokPatternTestGrokAttributesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.get"></a>

```csharp
private DataNewrelicTestGrokPatternTestGrokAttributesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataNewrelicTestGrokPatternTestGrokAttributesOutputReference <a name="DataNewrelicTestGrokPatternTestGrokAttributesOutputReference" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new DataNewrelicTestGrokPatternTestGrokAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributes">DataNewrelicTestGrokPatternTestGrokAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.property.internalValue"></a>

```csharp
public DataNewrelicTestGrokPatternTestGrokAttributes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributes">DataNewrelicTestGrokPatternTestGrokAttributes</a>

---


### DataNewrelicTestGrokPatternTestGrokList <a name="DataNewrelicTestGrokPatternTestGrokList" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new DataNewrelicTestGrokPatternTestGrokList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.get"></a>

```csharp
private DataNewrelicTestGrokPatternTestGrokOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataNewrelicTestGrokPatternTestGrokOutputReference <a name="DataNewrelicTestGrokPatternTestGrokOutputReference" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new DataNewrelicTestGrokPatternTestGrokOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.property.attributes">Attributes</a></code> | <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList">DataNewrelicTestGrokPatternTestGrokAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.property.logLine">LogLine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.property.matched">Matched</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrok">DataNewrelicTestGrokPatternTestGrok</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.property.attributes"></a>

```csharp
public DataNewrelicTestGrokPatternTestGrokAttributesList Attributes { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList">DataNewrelicTestGrokPatternTestGrokAttributesList</a>

---

##### `LogLine`<sup>Required</sup> <a name="LogLine" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.property.logLine"></a>

```csharp
public string LogLine { get; }
```

- *Type:* string

---

##### `Matched`<sup>Required</sup> <a name="Matched" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.property.matched"></a>

```csharp
public IResolvable Matched { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.property.internalValue"></a>

```csharp
public DataNewrelicTestGrokPatternTestGrok InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrok">DataNewrelicTestGrokPatternTestGrok</a>

---



