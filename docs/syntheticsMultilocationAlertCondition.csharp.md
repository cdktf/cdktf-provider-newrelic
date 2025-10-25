# `syntheticsMultilocationAlertCondition` Submodule <a name="`syntheticsMultilocationAlertCondition` Submodule" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SyntheticsMultilocationAlertCondition <a name="SyntheticsMultilocationAlertCondition" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/synthetics_multilocation_alert_condition newrelic_synthetics_multilocation_alert_condition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new SyntheticsMultilocationAlertCondition(Construct Scope, string Id, SyntheticsMultilocationAlertConditionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig">SyntheticsMultilocationAlertConditionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig">SyntheticsMultilocationAlertConditionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.putCritical">PutCritical</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.putWarning">PutWarning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.resetRunbookUrl">ResetRunbookUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.resetViolationTimeLimitSeconds">ResetViolationTimeLimitSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.resetWarning">ResetWarning</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCritical` <a name="PutCritical" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.putCritical"></a>

```csharp
private void PutCritical(SyntheticsMultilocationAlertConditionCritical Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.putCritical.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCritical">SyntheticsMultilocationAlertConditionCritical</a>

---

##### `PutWarning` <a name="PutWarning" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.putWarning"></a>

```csharp
private void PutWarning(SyntheticsMultilocationAlertConditionWarning Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.putWarning.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarning">SyntheticsMultilocationAlertConditionWarning</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRunbookUrl` <a name="ResetRunbookUrl" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.resetRunbookUrl"></a>

```csharp
private void ResetRunbookUrl()
```

##### `ResetViolationTimeLimitSeconds` <a name="ResetViolationTimeLimitSeconds" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.resetViolationTimeLimitSeconds"></a>

```csharp
private void ResetViolationTimeLimitSeconds()
```

##### `ResetWarning` <a name="ResetWarning" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.resetWarning"></a>

```csharp
private void ResetWarning()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SyntheticsMultilocationAlertCondition resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

SyntheticsMultilocationAlertCondition.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

SyntheticsMultilocationAlertCondition.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

SyntheticsMultilocationAlertCondition.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

SyntheticsMultilocationAlertCondition.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SyntheticsMultilocationAlertCondition resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SyntheticsMultilocationAlertCondition to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SyntheticsMultilocationAlertCondition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/synthetics_multilocation_alert_condition#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SyntheticsMultilocationAlertCondition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.critical">Critical</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference">SyntheticsMultilocationAlertConditionCriticalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.entityGuid">EntityGuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.warning">Warning</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference">SyntheticsMultilocationAlertConditionWarningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.criticalInput">CriticalInput</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCritical">SyntheticsMultilocationAlertConditionCritical</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.enabledInput">EnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.entitiesInput">EntitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.policyIdInput">PolicyIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.runbookUrlInput">RunbookUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.violationTimeLimitSecondsInput">ViolationTimeLimitSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.warningInput">WarningInput</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarning">SyntheticsMultilocationAlertConditionWarning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.enabled">Enabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.entities">Entities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.policyId">PolicyId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.runbookUrl">RunbookUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.violationTimeLimitSeconds">ViolationTimeLimitSeconds</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Critical`<sup>Required</sup> <a name="Critical" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.critical"></a>

```csharp
public SyntheticsMultilocationAlertConditionCriticalOutputReference Critical { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference">SyntheticsMultilocationAlertConditionCriticalOutputReference</a>

---

##### `EntityGuid`<sup>Required</sup> <a name="EntityGuid" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.entityGuid"></a>

```csharp
public string EntityGuid { get; }
```

- *Type:* string

---

##### `Warning`<sup>Required</sup> <a name="Warning" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.warning"></a>

```csharp
public SyntheticsMultilocationAlertConditionWarningOutputReference Warning { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference">SyntheticsMultilocationAlertConditionWarningOutputReference</a>

---

##### `CriticalInput`<sup>Optional</sup> <a name="CriticalInput" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.criticalInput"></a>

```csharp
public SyntheticsMultilocationAlertConditionCritical CriticalInput { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCritical">SyntheticsMultilocationAlertConditionCritical</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `EntitiesInput`<sup>Optional</sup> <a name="EntitiesInput" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.entitiesInput"></a>

```csharp
public string[] EntitiesInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.policyIdInput"></a>

```csharp
public double PolicyIdInput { get; }
```

- *Type:* double

---

##### `RunbookUrlInput`<sup>Optional</sup> <a name="RunbookUrlInput" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.runbookUrlInput"></a>

```csharp
public string RunbookUrlInput { get; }
```

- *Type:* string

---

##### `ViolationTimeLimitSecondsInput`<sup>Optional</sup> <a name="ViolationTimeLimitSecondsInput" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.violationTimeLimitSecondsInput"></a>

```csharp
public double ViolationTimeLimitSecondsInput { get; }
```

- *Type:* double

---

##### `WarningInput`<sup>Optional</sup> <a name="WarningInput" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.warningInput"></a>

```csharp
public SyntheticsMultilocationAlertConditionWarning WarningInput { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarning">SyntheticsMultilocationAlertConditionWarning</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Entities`<sup>Required</sup> <a name="Entities" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.entities"></a>

```csharp
public string[] Entities { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.policyId"></a>

```csharp
public double PolicyId { get; }
```

- *Type:* double

---

##### `RunbookUrl`<sup>Required</sup> <a name="RunbookUrl" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.runbookUrl"></a>

```csharp
public string RunbookUrl { get; }
```

- *Type:* string

---

##### `ViolationTimeLimitSeconds`<sup>Required</sup> <a name="ViolationTimeLimitSeconds" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.violationTimeLimitSeconds"></a>

```csharp
public double ViolationTimeLimitSeconds { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SyntheticsMultilocationAlertConditionConfig <a name="SyntheticsMultilocationAlertConditionConfig" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new SyntheticsMultilocationAlertConditionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    SyntheticsMultilocationAlertConditionCritical Critical,
    string[] Entities,
    string Name,
    double PolicyId,
    bool|IResolvable Enabled = null,
    string Id = null,
    string RunbookUrl = null,
    double ViolationTimeLimitSeconds = null,
    SyntheticsMultilocationAlertConditionWarning Warning = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.critical">Critical</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCritical">SyntheticsMultilocationAlertConditionCritical</a></code> | critical block. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.entities">Entities</a></code> | <code>string[]</code> | The GUIDs of the Synthetics monitors to alert on. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.name">Name</a></code> | <code>string</code> | The title of this condition. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.policyId">PolicyId</a></code> | <code>double</code> | The ID of the policy where this condition will be used. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.enabled">Enabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Set whether to enable the alert condition. Defaults to true. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/synthetics_multilocation_alert_condition#id SyntheticsMultilocationAlertCondition#id}. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.runbookUrl">RunbookUrl</a></code> | <code>string</code> | Runbook URL to display in notifications. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.violationTimeLimitSeconds">ViolationTimeLimitSeconds</a></code> | <code>double</code> | Sets a time limit, in seconds, that will automatically force-close a long-lasting incident after the time limit you select. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.warning">Warning</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarning">SyntheticsMultilocationAlertConditionWarning</a></code> | warning block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Critical`<sup>Required</sup> <a name="Critical" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.critical"></a>

```csharp
public SyntheticsMultilocationAlertConditionCritical Critical { get; set; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCritical">SyntheticsMultilocationAlertConditionCritical</a>

critical block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/synthetics_multilocation_alert_condition#critical SyntheticsMultilocationAlertCondition#critical}

---

##### `Entities`<sup>Required</sup> <a name="Entities" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.entities"></a>

```csharp
public string[] Entities { get; set; }
```

- *Type:* string[]

The GUIDs of the Synthetics monitors to alert on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/synthetics_multilocation_alert_condition#entities SyntheticsMultilocationAlertCondition#entities}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The title of this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/synthetics_multilocation_alert_condition#name SyntheticsMultilocationAlertCondition#name}

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.policyId"></a>

```csharp
public double PolicyId { get; set; }
```

- *Type:* double

The ID of the policy where this condition will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/synthetics_multilocation_alert_condition#policy_id SyntheticsMultilocationAlertCondition#policy_id}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Set whether to enable the alert condition. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/synthetics_multilocation_alert_condition#enabled SyntheticsMultilocationAlertCondition#enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/synthetics_multilocation_alert_condition#id SyntheticsMultilocationAlertCondition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RunbookUrl`<sup>Optional</sup> <a name="RunbookUrl" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.runbookUrl"></a>

```csharp
public string RunbookUrl { get; set; }
```

- *Type:* string

Runbook URL to display in notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/synthetics_multilocation_alert_condition#runbook_url SyntheticsMultilocationAlertCondition#runbook_url}

---

##### `ViolationTimeLimitSeconds`<sup>Optional</sup> <a name="ViolationTimeLimitSeconds" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.violationTimeLimitSeconds"></a>

```csharp
public double ViolationTimeLimitSeconds { get; set; }
```

- *Type:* double

Sets a time limit, in seconds, that will automatically force-close a long-lasting incident after the time limit you select.

Must be in the range of 300 to 2592000 (inclusive)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/synthetics_multilocation_alert_condition#violation_time_limit_seconds SyntheticsMultilocationAlertCondition#violation_time_limit_seconds}

---

##### `Warning`<sup>Optional</sup> <a name="Warning" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.warning"></a>

```csharp
public SyntheticsMultilocationAlertConditionWarning Warning { get; set; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarning">SyntheticsMultilocationAlertConditionWarning</a>

warning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/synthetics_multilocation_alert_condition#warning SyntheticsMultilocationAlertCondition#warning}

---

### SyntheticsMultilocationAlertConditionCritical <a name="SyntheticsMultilocationAlertConditionCritical" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCritical"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCritical.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new SyntheticsMultilocationAlertConditionCritical {
    double Threshold
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCritical.property.threshold">Threshold</a></code> | <code>double</code> | The minimum number of monitor locations that must be concurrently failing before an incident is opened. |

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCritical.property.threshold"></a>

```csharp
public double Threshold { get; set; }
```

- *Type:* double

The minimum number of monitor locations that must be concurrently failing before an incident is opened.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/synthetics_multilocation_alert_condition#threshold SyntheticsMultilocationAlertCondition#threshold}

---

### SyntheticsMultilocationAlertConditionWarning <a name="SyntheticsMultilocationAlertConditionWarning" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarning.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new SyntheticsMultilocationAlertConditionWarning {
    double Threshold
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarning.property.threshold">Threshold</a></code> | <code>double</code> | The minimum number of monitor locations that must be concurrently failing before an incident is opened. |

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarning.property.threshold"></a>

```csharp
public double Threshold { get; set; }
```

- *Type:* double

The minimum number of monitor locations that must be concurrently failing before an incident is opened.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/synthetics_multilocation_alert_condition#threshold SyntheticsMultilocationAlertCondition#threshold}

---

## Classes <a name="Classes" id="Classes"></a>

### SyntheticsMultilocationAlertConditionCriticalOutputReference <a name="SyntheticsMultilocationAlertConditionCriticalOutputReference" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new SyntheticsMultilocationAlertConditionCriticalOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.property.threshold">Threshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCritical">SyntheticsMultilocationAlertConditionCritical</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.property.thresholdInput"></a>

```csharp
public double ThresholdInput { get; }
```

- *Type:* double

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.property.threshold"></a>

```csharp
public double Threshold { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.property.internalValue"></a>

```csharp
public SyntheticsMultilocationAlertConditionCritical InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCritical">SyntheticsMultilocationAlertConditionCritical</a>

---


### SyntheticsMultilocationAlertConditionWarningOutputReference <a name="SyntheticsMultilocationAlertConditionWarningOutputReference" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new SyntheticsMultilocationAlertConditionWarningOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.property.threshold">Threshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarning">SyntheticsMultilocationAlertConditionWarning</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.property.thresholdInput"></a>

```csharp
public double ThresholdInput { get; }
```

- *Type:* double

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.property.threshold"></a>

```csharp
public double Threshold { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.property.internalValue"></a>

```csharp
public SyntheticsMultilocationAlertConditionWarning InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarning">SyntheticsMultilocationAlertConditionWarning</a>

---



