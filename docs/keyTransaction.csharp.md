# `keyTransaction` Submodule <a name="`keyTransaction` Submodule" id="@cdktf/provider-newrelic.keyTransaction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KeyTransaction <a name="KeyTransaction" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/key_transaction newrelic_key_transaction}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new KeyTransaction(Construct Scope, string Id, KeyTransactionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig">KeyTransactionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig">KeyTransactionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a KeyTransaction resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

KeyTransaction.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

KeyTransaction.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

KeyTransaction.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

KeyTransaction.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a KeyTransaction resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KeyTransaction to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KeyTransaction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/key_transaction#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the KeyTransaction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.apdexIndexInput">ApdexIndexInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.applicationGuidInput">ApplicationGuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.browserApdexTargetInput">BrowserApdexTargetInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.metricNameInput">MetricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.apdexIndex">ApdexIndex</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.applicationGuid">ApplicationGuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.browserApdexTarget">BrowserApdexTarget</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.metricName">MetricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `ApdexIndexInput`<sup>Optional</sup> <a name="ApdexIndexInput" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.apdexIndexInput"></a>

```csharp
public double ApdexIndexInput { get; }
```

- *Type:* double

---

##### `ApplicationGuidInput`<sup>Optional</sup> <a name="ApplicationGuidInput" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.applicationGuidInput"></a>

```csharp
public string ApplicationGuidInput { get; }
```

- *Type:* string

---

##### `BrowserApdexTargetInput`<sup>Optional</sup> <a name="BrowserApdexTargetInput" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.browserApdexTargetInput"></a>

```csharp
public double BrowserApdexTargetInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MetricNameInput`<sup>Optional</sup> <a name="MetricNameInput" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.metricNameInput"></a>

```csharp
public string MetricNameInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ApdexIndex`<sup>Required</sup> <a name="ApdexIndex" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.apdexIndex"></a>

```csharp
public double ApdexIndex { get; }
```

- *Type:* double

---

##### `ApplicationGuid`<sup>Required</sup> <a name="ApplicationGuid" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.applicationGuid"></a>

```csharp
public string ApplicationGuid { get; }
```

- *Type:* string

---

##### `BrowserApdexTarget`<sup>Required</sup> <a name="BrowserApdexTarget" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.browserApdexTarget"></a>

```csharp
public double BrowserApdexTarget { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.metricName"></a>

```csharp
public string MetricName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KeyTransactionConfig <a name="KeyTransactionConfig" id="@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new KeyTransactionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    double ApdexIndex,
    string ApplicationGuid,
    double BrowserApdexTarget,
    string MetricName,
    string Name,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.apdexIndex">ApdexIndex</a></code> | <code>double</code> | The acceptable amount of the time spent in the backend before customers get frustrated (Apdex target). |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.applicationGuid">ApplicationGuid</a></code> | <code>string</code> | The GUID of the application. |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.browserApdexTarget">BrowserApdexTarget</a></code> | <code>double</code> | The acceptable amount of time for rendering a page in a browser before customers get frustrated (browser Apdex target). |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.metricName">MetricName</a></code> | <code>string</code> | The name of the metric underlying this key transaction. |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.name">Name</a></code> | <code>string</code> | The name of the key transaction. |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/key_transaction#id KeyTransaction#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `ApdexIndex`<sup>Required</sup> <a name="ApdexIndex" id="@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.apdexIndex"></a>

```csharp
public double ApdexIndex { get; set; }
```

- *Type:* double

The acceptable amount of the time spent in the backend before customers get frustrated (Apdex target).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/key_transaction#apdex_index KeyTransaction#apdex_index}

---

##### `ApplicationGuid`<sup>Required</sup> <a name="ApplicationGuid" id="@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.applicationGuid"></a>

```csharp
public string ApplicationGuid { get; set; }
```

- *Type:* string

The GUID of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/key_transaction#application_guid KeyTransaction#application_guid}

---

##### `BrowserApdexTarget`<sup>Required</sup> <a name="BrowserApdexTarget" id="@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.browserApdexTarget"></a>

```csharp
public double BrowserApdexTarget { get; set; }
```

- *Type:* double

The acceptable amount of time for rendering a page in a browser before customers get frustrated (browser Apdex target).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/key_transaction#browser_apdex_target KeyTransaction#browser_apdex_target}

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.metricName"></a>

```csharp
public string MetricName { get; set; }
```

- *Type:* string

The name of the metric underlying this key transaction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/key_transaction#metric_name KeyTransaction#metric_name}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the key transaction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/key_transaction#name KeyTransaction#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/key_transaction#id KeyTransaction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



