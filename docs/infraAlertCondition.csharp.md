# `infraAlertCondition` Submodule <a name="`infraAlertCondition` Submodule" id="@cdktf/provider-newrelic.infraAlertCondition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### InfraAlertCondition <a name="InfraAlertCondition" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.66.0/docs/resources/infra_alert_condition newrelic_infra_alert_condition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new InfraAlertCondition(Construct Scope, string Id, InfraAlertConditionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig">InfraAlertConditionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig">InfraAlertConditionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.putCritical">PutCritical</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.putWarning">PutWarning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetComparison">ResetComparison</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetCritical">ResetCritical</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetEvent">ResetEvent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetIntegrationProvider">ResetIntegrationProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetProcessWhere">ResetProcessWhere</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetRunbookUrl">ResetRunbookUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetSelect">ResetSelect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetViolationCloseTimer">ResetViolationCloseTimer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetWarning">ResetWarning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetWhere">ResetWhere</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCritical` <a name="PutCritical" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.putCritical"></a>

```csharp
private void PutCritical(InfraAlertConditionCritical Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.putCritical.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical">InfraAlertConditionCritical</a>

---

##### `PutWarning` <a name="PutWarning" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.putWarning"></a>

```csharp
private void PutWarning(InfraAlertConditionWarning Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.putWarning.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning">InfraAlertConditionWarning</a>

---

##### `ResetComparison` <a name="ResetComparison" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetComparison"></a>

```csharp
private void ResetComparison()
```

##### `ResetCritical` <a name="ResetCritical" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetCritical"></a>

```csharp
private void ResetCritical()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetEvent` <a name="ResetEvent" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetEvent"></a>

```csharp
private void ResetEvent()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIntegrationProvider` <a name="ResetIntegrationProvider" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetIntegrationProvider"></a>

```csharp
private void ResetIntegrationProvider()
```

##### `ResetProcessWhere` <a name="ResetProcessWhere" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetProcessWhere"></a>

```csharp
private void ResetProcessWhere()
```

##### `ResetRunbookUrl` <a name="ResetRunbookUrl" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetRunbookUrl"></a>

```csharp
private void ResetRunbookUrl()
```

##### `ResetSelect` <a name="ResetSelect" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetSelect"></a>

```csharp
private void ResetSelect()
```

##### `ResetViolationCloseTimer` <a name="ResetViolationCloseTimer" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetViolationCloseTimer"></a>

```csharp
private void ResetViolationCloseTimer()
```

##### `ResetWarning` <a name="ResetWarning" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetWarning"></a>

```csharp
private void ResetWarning()
```

##### `ResetWhere` <a name="ResetWhere" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetWhere"></a>

```csharp
private void ResetWhere()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a InfraAlertCondition resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

InfraAlertCondition.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

InfraAlertCondition.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

InfraAlertCondition.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

InfraAlertCondition.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a InfraAlertCondition resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the InfraAlertCondition to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing InfraAlertCondition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.66.0/docs/resources/infra_alert_condition#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the InfraAlertCondition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.createdAt">CreatedAt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.critical">Critical</a></code> | <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference">InfraAlertConditionCriticalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.entityGuid">EntityGuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.updatedAt">UpdatedAt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.warning">Warning</a></code> | <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference">InfraAlertConditionWarningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.comparisonInput">ComparisonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.criticalInput">CriticalInput</a></code> | <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical">InfraAlertConditionCritical</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.eventInput">EventInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.integrationProviderInput">IntegrationProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.policyIdInput">PolicyIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.processWhereInput">ProcessWhereInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.runbookUrlInput">RunbookUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.selectInput">SelectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.violationCloseTimerInput">ViolationCloseTimerInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.warningInput">WarningInput</a></code> | <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning">InfraAlertConditionWarning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.whereInput">WhereInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.comparison">Comparison</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.event">Event</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.integrationProvider">IntegrationProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.policyId">PolicyId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.processWhere">ProcessWhere</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.runbookUrl">RunbookUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.select">Select</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.violationCloseTimer">ViolationCloseTimer</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.where">Where</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.createdAt"></a>

```csharp
public double CreatedAt { get; }
```

- *Type:* double

---

##### `Critical`<sup>Required</sup> <a name="Critical" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.critical"></a>

```csharp
public InfraAlertConditionCriticalOutputReference Critical { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference">InfraAlertConditionCriticalOutputReference</a>

---

##### `EntityGuid`<sup>Required</sup> <a name="EntityGuid" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.entityGuid"></a>

```csharp
public string EntityGuid { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.updatedAt"></a>

```csharp
public double UpdatedAt { get; }
```

- *Type:* double

---

##### `Warning`<sup>Required</sup> <a name="Warning" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.warning"></a>

```csharp
public InfraAlertConditionWarningOutputReference Warning { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference">InfraAlertConditionWarningOutputReference</a>

---

##### `ComparisonInput`<sup>Optional</sup> <a name="ComparisonInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.comparisonInput"></a>

```csharp
public string ComparisonInput { get; }
```

- *Type:* string

---

##### `CriticalInput`<sup>Optional</sup> <a name="CriticalInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.criticalInput"></a>

```csharp
public InfraAlertConditionCritical CriticalInput { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical">InfraAlertConditionCritical</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `EventInput`<sup>Optional</sup> <a name="EventInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.eventInput"></a>

```csharp
public string EventInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IntegrationProviderInput`<sup>Optional</sup> <a name="IntegrationProviderInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.integrationProviderInput"></a>

```csharp
public string IntegrationProviderInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.policyIdInput"></a>

```csharp
public double PolicyIdInput { get; }
```

- *Type:* double

---

##### `ProcessWhereInput`<sup>Optional</sup> <a name="ProcessWhereInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.processWhereInput"></a>

```csharp
public string ProcessWhereInput { get; }
```

- *Type:* string

---

##### `RunbookUrlInput`<sup>Optional</sup> <a name="RunbookUrlInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.runbookUrlInput"></a>

```csharp
public string RunbookUrlInput { get; }
```

- *Type:* string

---

##### `SelectInput`<sup>Optional</sup> <a name="SelectInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.selectInput"></a>

```csharp
public string SelectInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ViolationCloseTimerInput`<sup>Optional</sup> <a name="ViolationCloseTimerInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.violationCloseTimerInput"></a>

```csharp
public double ViolationCloseTimerInput { get; }
```

- *Type:* double

---

##### `WarningInput`<sup>Optional</sup> <a name="WarningInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.warningInput"></a>

```csharp
public InfraAlertConditionWarning WarningInput { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning">InfraAlertConditionWarning</a>

---

##### `WhereInput`<sup>Optional</sup> <a name="WhereInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.whereInput"></a>

```csharp
public string WhereInput { get; }
```

- *Type:* string

---

##### `Comparison`<sup>Required</sup> <a name="Comparison" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.comparison"></a>

```csharp
public string Comparison { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Event`<sup>Required</sup> <a name="Event" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.event"></a>

```csharp
public string Event { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IntegrationProvider`<sup>Required</sup> <a name="IntegrationProvider" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.integrationProvider"></a>

```csharp
public string IntegrationProvider { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.policyId"></a>

```csharp
public double PolicyId { get; }
```

- *Type:* double

---

##### `ProcessWhere`<sup>Required</sup> <a name="ProcessWhere" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.processWhere"></a>

```csharp
public string ProcessWhere { get; }
```

- *Type:* string

---

##### `RunbookUrl`<sup>Required</sup> <a name="RunbookUrl" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.runbookUrl"></a>

```csharp
public string RunbookUrl { get; }
```

- *Type:* string

---

##### `Select`<sup>Required</sup> <a name="Select" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.select"></a>

```csharp
public string Select { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `ViolationCloseTimer`<sup>Required</sup> <a name="ViolationCloseTimer" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.violationCloseTimer"></a>

```csharp
public double ViolationCloseTimer { get; }
```

- *Type:* double

---

##### `Where`<sup>Required</sup> <a name="Where" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.where"></a>

```csharp
public string Where { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### InfraAlertConditionConfig <a name="InfraAlertConditionConfig" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new InfraAlertConditionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    double PolicyId,
    string Type,
    string Comparison = null,
    InfraAlertConditionCritical Critical = null,
    string Description = null,
    object Enabled = null,
    string Event = null,
    string Id = null,
    string IntegrationProvider = null,
    string ProcessWhere = null,
    string RunbookUrl = null,
    string Select = null,
    double ViolationCloseTimer = null,
    InfraAlertConditionWarning Warning = null,
    string Where = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.name">Name</a></code> | <code>string</code> | The Infrastructure alert condition's name. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.policyId">PolicyId</a></code> | <code>double</code> | The ID of the alert policy where this condition should be used. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.type">Type</a></code> | <code>string</code> | The type of Infrastructure alert condition. Valid values are infra_process_running, infra_metric, and infra_host_not_reporting. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.comparison">Comparison</a></code> | <code>string</code> | The operator used to evaluate the threshold value. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.critical">Critical</a></code> | <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical">InfraAlertConditionCritical</a></code> | critical block. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.description">Description</a></code> | <code>string</code> | The description of the Infrastructure alert condition. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.enabled">Enabled</a></code> | <code>object</code> | Whether the condition is turned on or off. Valid values are true and false. Defaults to true. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.event">Event</a></code> | <code>string</code> | The metric event; for example, SystemSample or StorageSample. Supported by the infra_metric condition type. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.66.0/docs/resources/infra_alert_condition#id InfraAlertCondition#id}. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.integrationProvider">IntegrationProvider</a></code> | <code>string</code> | For alerts on integrations, use this instead of event. Supported by the infra_metric condition type. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.processWhere">ProcessWhere</a></code> | <code>string</code> | Any filters applied to processes; for example: commandName = 'java'. Supported by the infra_process_running condition type. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.runbookUrl">RunbookUrl</a></code> | <code>string</code> | Runbook URL to display in notifications. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.select">Select</a></code> | <code>string</code> | The attribute name to identify the metric being targeted; |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.violationCloseTimer">ViolationCloseTimer</a></code> | <code>double</code> | Determines how much time, in hours, will pass before an incident is automatically closed. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.warning">Warning</a></code> | <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning">InfraAlertConditionWarning</a></code> | warning block. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.where">Where</a></code> | <code>string</code> | If applicable, this identifies any Infrastructure host filters used; for example: hostname LIKE '%cassandra%'. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The Infrastructure alert condition's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.66.0/docs/resources/infra_alert_condition#name InfraAlertCondition#name}

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.policyId"></a>

```csharp
public double PolicyId { get; set; }
```

- *Type:* double

The ID of the alert policy where this condition should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.66.0/docs/resources/infra_alert_condition#policy_id InfraAlertCondition#policy_id}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of Infrastructure alert condition. Valid values are infra_process_running, infra_metric, and infra_host_not_reporting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.66.0/docs/resources/infra_alert_condition#type InfraAlertCondition#type}

---

##### `Comparison`<sup>Optional</sup> <a name="Comparison" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.comparison"></a>

```csharp
public string Comparison { get; set; }
```

- *Type:* string

The operator used to evaluate the threshold value.

Valid values are above, below, and equal. Supported by the infra_metric and infra_process_running condition types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.66.0/docs/resources/infra_alert_condition#comparison InfraAlertCondition#comparison}

---

##### `Critical`<sup>Optional</sup> <a name="Critical" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.critical"></a>

```csharp
public InfraAlertConditionCritical Critical { get; set; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical">InfraAlertConditionCritical</a>

critical block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.66.0/docs/resources/infra_alert_condition#critical InfraAlertCondition#critical}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the Infrastructure alert condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.66.0/docs/resources/infra_alert_condition#description InfraAlertCondition#description}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Whether the condition is turned on or off. Valid values are true and false. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.66.0/docs/resources/infra_alert_condition#enabled InfraAlertCondition#enabled}

---

##### `Event`<sup>Optional</sup> <a name="Event" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.event"></a>

```csharp
public string Event { get; set; }
```

- *Type:* string

The metric event; for example, SystemSample or StorageSample. Supported by the infra_metric condition type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.66.0/docs/resources/infra_alert_condition#event InfraAlertCondition#event}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.66.0/docs/resources/infra_alert_condition#id InfraAlertCondition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IntegrationProvider`<sup>Optional</sup> <a name="IntegrationProvider" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.integrationProvider"></a>

```csharp
public string IntegrationProvider { get; set; }
```

- *Type:* string

For alerts on integrations, use this instead of event. Supported by the infra_metric condition type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.66.0/docs/resources/infra_alert_condition#integration_provider InfraAlertCondition#integration_provider}

---

##### `ProcessWhere`<sup>Optional</sup> <a name="ProcessWhere" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.processWhere"></a>

```csharp
public string ProcessWhere { get; set; }
```

- *Type:* string

Any filters applied to processes; for example: commandName = 'java'. Supported by the infra_process_running condition type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.66.0/docs/resources/infra_alert_condition#process_where InfraAlertCondition#process_where}

---

##### `RunbookUrl`<sup>Optional</sup> <a name="RunbookUrl" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.runbookUrl"></a>

```csharp
public string RunbookUrl { get; set; }
```

- *Type:* string

Runbook URL to display in notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.66.0/docs/resources/infra_alert_condition#runbook_url InfraAlertCondition#runbook_url}

---

##### `Select`<sup>Optional</sup> <a name="Select" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.select"></a>

```csharp
public string Select { get; set; }
```

- *Type:* string

The attribute name to identify the metric being targeted;

for example, cpuPercent, diskFreePercent, or memoryResidentSizeBytes. The underlying API will automatically populate this value for Infrastructure integrations (for example diskFreePercent), so make sure to explicitly include this value to avoid diff issues. Supported by the infra_metric condition type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.66.0/docs/resources/infra_alert_condition#select InfraAlertCondition#select}

---

##### `ViolationCloseTimer`<sup>Optional</sup> <a name="ViolationCloseTimer" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.violationCloseTimer"></a>

```csharp
public double ViolationCloseTimer { get; set; }
```

- *Type:* double

Determines how much time, in hours, will pass before an incident is automatically closed.

Valid values are 1, 2, 4, 8, 12, 24, 48, or 72

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.66.0/docs/resources/infra_alert_condition#violation_close_timer InfraAlertCondition#violation_close_timer}

---

##### `Warning`<sup>Optional</sup> <a name="Warning" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.warning"></a>

```csharp
public InfraAlertConditionWarning Warning { get; set; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning">InfraAlertConditionWarning</a>

warning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.66.0/docs/resources/infra_alert_condition#warning InfraAlertCondition#warning}

---

##### `Where`<sup>Optional</sup> <a name="Where" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.where"></a>

```csharp
public string Where { get; set; }
```

- *Type:* string

If applicable, this identifies any Infrastructure host filters used; for example: hostname LIKE '%cassandra%'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.66.0/docs/resources/infra_alert_condition#where InfraAlertCondition#where}

---

### InfraAlertConditionCritical <a name="InfraAlertConditionCritical" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new InfraAlertConditionCritical {
    double Duration,
    string TimeFunction = null,
    double Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical.property.duration">Duration</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.66.0/docs/resources/infra_alert_condition#duration InfraAlertCondition#duration}. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical.property.timeFunction">TimeFunction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.66.0/docs/resources/infra_alert_condition#time_function InfraAlertCondition#time_function}. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical.property.value">Value</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.66.0/docs/resources/infra_alert_condition#value InfraAlertCondition#value}. |

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical.property.duration"></a>

```csharp
public double Duration { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.66.0/docs/resources/infra_alert_condition#duration InfraAlertCondition#duration}.

---

##### `TimeFunction`<sup>Optional</sup> <a name="TimeFunction" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical.property.timeFunction"></a>

```csharp
public string TimeFunction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.66.0/docs/resources/infra_alert_condition#time_function InfraAlertCondition#time_function}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.66.0/docs/resources/infra_alert_condition#value InfraAlertCondition#value}.

---

### InfraAlertConditionWarning <a name="InfraAlertConditionWarning" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new InfraAlertConditionWarning {
    double Duration,
    string TimeFunction = null,
    double Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning.property.duration">Duration</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.66.0/docs/resources/infra_alert_condition#duration InfraAlertCondition#duration}. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning.property.timeFunction">TimeFunction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.66.0/docs/resources/infra_alert_condition#time_function InfraAlertCondition#time_function}. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning.property.value">Value</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.66.0/docs/resources/infra_alert_condition#value InfraAlertCondition#value}. |

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning.property.duration"></a>

```csharp
public double Duration { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.66.0/docs/resources/infra_alert_condition#duration InfraAlertCondition#duration}.

---

##### `TimeFunction`<sup>Optional</sup> <a name="TimeFunction" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning.property.timeFunction"></a>

```csharp
public string TimeFunction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.66.0/docs/resources/infra_alert_condition#time_function InfraAlertCondition#time_function}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.66.0/docs/resources/infra_alert_condition#value InfraAlertCondition#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### InfraAlertConditionCriticalOutputReference <a name="InfraAlertConditionCriticalOutputReference" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new InfraAlertConditionCriticalOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.resetTimeFunction">ResetTimeFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTimeFunction` <a name="ResetTimeFunction" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.resetTimeFunction"></a>

```csharp
private void ResetTimeFunction()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.durationInput">DurationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.timeFunctionInput">TimeFunctionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.duration">Duration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.timeFunction">TimeFunction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical">InfraAlertConditionCritical</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.durationInput"></a>

```csharp
public double DurationInput { get; }
```

- *Type:* double

---

##### `TimeFunctionInput`<sup>Optional</sup> <a name="TimeFunctionInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.timeFunctionInput"></a>

```csharp
public string TimeFunctionInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.duration"></a>

```csharp
public double Duration { get; }
```

- *Type:* double

---

##### `TimeFunction`<sup>Required</sup> <a name="TimeFunction" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.timeFunction"></a>

```csharp
public string TimeFunction { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.internalValue"></a>

```csharp
public InfraAlertConditionCritical InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical">InfraAlertConditionCritical</a>

---


### InfraAlertConditionWarningOutputReference <a name="InfraAlertConditionWarningOutputReference" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new InfraAlertConditionWarningOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.resetTimeFunction">ResetTimeFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTimeFunction` <a name="ResetTimeFunction" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.resetTimeFunction"></a>

```csharp
private void ResetTimeFunction()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.durationInput">DurationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.timeFunctionInput">TimeFunctionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.duration">Duration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.timeFunction">TimeFunction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning">InfraAlertConditionWarning</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.durationInput"></a>

```csharp
public double DurationInput { get; }
```

- *Type:* double

---

##### `TimeFunctionInput`<sup>Optional</sup> <a name="TimeFunctionInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.timeFunctionInput"></a>

```csharp
public string TimeFunctionInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.duration"></a>

```csharp
public double Duration { get; }
```

- *Type:* double

---

##### `TimeFunction`<sup>Required</sup> <a name="TimeFunction" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.timeFunction"></a>

```csharp
public string TimeFunction { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.internalValue"></a>

```csharp
public InfraAlertConditionWarning InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning">InfraAlertConditionWarning</a>

---



