# `syntheticsPrivateLocation` Submodule <a name="`syntheticsPrivateLocation` Submodule" id="@cdktf/provider-newrelic.syntheticsPrivateLocation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SyntheticsPrivateLocation <a name="SyntheticsPrivateLocation" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.0/docs/resources/synthetics_private_location newrelic_synthetics_private_location}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new SyntheticsPrivateLocation(Construct Scope, string Id, SyntheticsPrivateLocationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig">SyntheticsPrivateLocationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig">SyntheticsPrivateLocationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.resetVerifiedScriptExecution">ResetVerifiedScriptExecution</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetVerifiedScriptExecution` <a name="ResetVerifiedScriptExecution" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.resetVerifiedScriptExecution"></a>

```csharp
private void ResetVerifiedScriptExecution()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SyntheticsPrivateLocation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

SyntheticsPrivateLocation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

SyntheticsPrivateLocation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

SyntheticsPrivateLocation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

SyntheticsPrivateLocation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SyntheticsPrivateLocation resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SyntheticsPrivateLocation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SyntheticsPrivateLocation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.0/docs/resources/synthetics_private_location#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SyntheticsPrivateLocation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.domainId">DomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.guid">Guid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.locationId">LocationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.accountIdInput">AccountIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.verifiedScriptExecutionInput">VerifiedScriptExecutionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.accountId">AccountId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.verifiedScriptExecution">VerifiedScriptExecution</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.domainId"></a>

```csharp
public string DomainId { get; }
```

- *Type:* string

---

##### `Guid`<sup>Required</sup> <a name="Guid" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.guid"></a>

```csharp
public string Guid { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `LocationId`<sup>Required</sup> <a name="LocationId" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.locationId"></a>

```csharp
public string LocationId { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.accountIdInput"></a>

```csharp
public double AccountIdInput { get; }
```

- *Type:* double

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `VerifiedScriptExecutionInput`<sup>Optional</sup> <a name="VerifiedScriptExecutionInput" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.verifiedScriptExecutionInput"></a>

```csharp
public object VerifiedScriptExecutionInput { get; }
```

- *Type:* object

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.accountId"></a>

```csharp
public double AccountId { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `VerifiedScriptExecution`<sup>Required</sup> <a name="VerifiedScriptExecution" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.verifiedScriptExecution"></a>

```csharp
public object VerifiedScriptExecution { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SyntheticsPrivateLocationConfig <a name="SyntheticsPrivateLocationConfig" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new SyntheticsPrivateLocationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Description,
    string Name,
    double AccountId = null,
    string Id = null,
    object VerifiedScriptExecution = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.description">Description</a></code> | <code>string</code> | The private location description. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.name">Name</a></code> | <code>string</code> | The name of the private location. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.accountId">AccountId</a></code> | <code>double</code> | The ID of the account in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.0/docs/resources/synthetics_private_location#id SyntheticsPrivateLocation#id}. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.verifiedScriptExecution">VerifiedScriptExecution</a></code> | <code>object</code> | The private location requires a password to edit if value is true. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The private location description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.0/docs/resources/synthetics_private_location#description SyntheticsPrivateLocation#description}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the private location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.0/docs/resources/synthetics_private_location#name SyntheticsPrivateLocation#name}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.accountId"></a>

```csharp
public double AccountId { get; set; }
```

- *Type:* double

The ID of the account in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.0/docs/resources/synthetics_private_location#account_id SyntheticsPrivateLocation#account_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.0/docs/resources/synthetics_private_location#id SyntheticsPrivateLocation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `VerifiedScriptExecution`<sup>Optional</sup> <a name="VerifiedScriptExecution" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.verifiedScriptExecution"></a>

```csharp
public object VerifiedScriptExecution { get; set; }
```

- *Type:* object

The private location requires a password to edit if value is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.0/docs/resources/synthetics_private_location#verified_script_execution SyntheticsPrivateLocation#verified_script_execution}

---



