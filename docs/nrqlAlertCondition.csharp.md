# `nrqlAlertCondition` Submodule <a name="`nrqlAlertCondition` Submodule" id="@cdktf/provider-newrelic.nrqlAlertCondition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NrqlAlertCondition <a name="NrqlAlertCondition" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition newrelic_nrql_alert_condition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new NrqlAlertCondition(Construct Scope, string Id, NrqlAlertConditionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig">NrqlAlertConditionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig">NrqlAlertConditionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.putCritical">PutCritical</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.putNrql">PutNrql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.putTerm">PutTerm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.putWarning">PutWarning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetAggregationDelay">ResetAggregationDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetAggregationMethod">ResetAggregationMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetAggregationTimer">ResetAggregationTimer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetAggregationWindow">ResetAggregationWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetBaselineDirection">ResetBaselineDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetCloseViolationsOnExpiration">ResetCloseViolationsOnExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetCritical">ResetCritical</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetEvaluationDelay">ResetEvaluationDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetExpirationDuration">ResetExpirationDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetFillOption">ResetFillOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetFillValue">ResetFillValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetIgnoreOnExpectedTermination">ResetIgnoreOnExpectedTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetOpenViolationOnExpiration">ResetOpenViolationOnExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetRunbookUrl">ResetRunbookUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetSignalSeasonality">ResetSignalSeasonality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetSlideBy">ResetSlideBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetTargetEntity">ResetTargetEntity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetTerm">ResetTerm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetTitleTemplate">ResetTitleTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetViolationTimeLimit">ResetViolationTimeLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetViolationTimeLimitSeconds">ResetViolationTimeLimitSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetWarning">ResetWarning</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCritical` <a name="PutCritical" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.putCritical"></a>

```csharp
private void PutCritical(NrqlAlertConditionCritical Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.putCritical.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical">NrqlAlertConditionCritical</a>

---

##### `PutNrql` <a name="PutNrql" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.putNrql"></a>

```csharp
private void PutNrql(NrqlAlertConditionNrql Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.putNrql.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrql">NrqlAlertConditionNrql</a>

---

##### `PutTerm` <a name="PutTerm" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.putTerm"></a>

```csharp
private void PutTerm(IResolvable|NrqlAlertConditionTerm[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.putTerm.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm">NrqlAlertConditionTerm</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.putTimeouts"></a>

```csharp
private void PutTimeouts(NrqlAlertConditionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeouts">NrqlAlertConditionTimeouts</a>

---

##### `PutWarning` <a name="PutWarning" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.putWarning"></a>

```csharp
private void PutWarning(NrqlAlertConditionWarning Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.putWarning.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning">NrqlAlertConditionWarning</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetAggregationDelay` <a name="ResetAggregationDelay" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetAggregationDelay"></a>

```csharp
private void ResetAggregationDelay()
```

##### `ResetAggregationMethod` <a name="ResetAggregationMethod" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetAggregationMethod"></a>

```csharp
private void ResetAggregationMethod()
```

##### `ResetAggregationTimer` <a name="ResetAggregationTimer" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetAggregationTimer"></a>

```csharp
private void ResetAggregationTimer()
```

##### `ResetAggregationWindow` <a name="ResetAggregationWindow" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetAggregationWindow"></a>

```csharp
private void ResetAggregationWindow()
```

##### `ResetBaselineDirection` <a name="ResetBaselineDirection" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetBaselineDirection"></a>

```csharp
private void ResetBaselineDirection()
```

##### `ResetCloseViolationsOnExpiration` <a name="ResetCloseViolationsOnExpiration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetCloseViolationsOnExpiration"></a>

```csharp
private void ResetCloseViolationsOnExpiration()
```

##### `ResetCritical` <a name="ResetCritical" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetCritical"></a>

```csharp
private void ResetCritical()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetEvaluationDelay` <a name="ResetEvaluationDelay" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetEvaluationDelay"></a>

```csharp
private void ResetEvaluationDelay()
```

##### `ResetExpirationDuration` <a name="ResetExpirationDuration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetExpirationDuration"></a>

```csharp
private void ResetExpirationDuration()
```

##### `ResetFillOption` <a name="ResetFillOption" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetFillOption"></a>

```csharp
private void ResetFillOption()
```

##### `ResetFillValue` <a name="ResetFillValue" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetFillValue"></a>

```csharp
private void ResetFillValue()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIgnoreOnExpectedTermination` <a name="ResetIgnoreOnExpectedTermination" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetIgnoreOnExpectedTermination"></a>

```csharp
private void ResetIgnoreOnExpectedTermination()
```

##### `ResetOpenViolationOnExpiration` <a name="ResetOpenViolationOnExpiration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetOpenViolationOnExpiration"></a>

```csharp
private void ResetOpenViolationOnExpiration()
```

##### `ResetRunbookUrl` <a name="ResetRunbookUrl" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetRunbookUrl"></a>

```csharp
private void ResetRunbookUrl()
```

##### `ResetSignalSeasonality` <a name="ResetSignalSeasonality" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetSignalSeasonality"></a>

```csharp
private void ResetSignalSeasonality()
```

##### `ResetSlideBy` <a name="ResetSlideBy" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetSlideBy"></a>

```csharp
private void ResetSlideBy()
```

##### `ResetTargetEntity` <a name="ResetTargetEntity" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetTargetEntity"></a>

```csharp
private void ResetTargetEntity()
```

##### `ResetTerm` <a name="ResetTerm" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetTerm"></a>

```csharp
private void ResetTerm()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTitleTemplate` <a name="ResetTitleTemplate" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetTitleTemplate"></a>

```csharp
private void ResetTitleTemplate()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetViolationTimeLimit` <a name="ResetViolationTimeLimit" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetViolationTimeLimit"></a>

```csharp
private void ResetViolationTimeLimit()
```

##### `ResetViolationTimeLimitSeconds` <a name="ResetViolationTimeLimitSeconds" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetViolationTimeLimitSeconds"></a>

```csharp
private void ResetViolationTimeLimitSeconds()
```

##### `ResetWarning` <a name="ResetWarning" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetWarning"></a>

```csharp
private void ResetWarning()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NrqlAlertCondition resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

NrqlAlertCondition.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

NrqlAlertCondition.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

NrqlAlertCondition.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

NrqlAlertCondition.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a NrqlAlertCondition resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NrqlAlertCondition to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NrqlAlertCondition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the NrqlAlertCondition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.critical">Critical</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference">NrqlAlertConditionCriticalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.entityGuid">EntityGuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.nrql">Nrql</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference">NrqlAlertConditionNrqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.term">Term</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList">NrqlAlertConditionTermList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference">NrqlAlertConditionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.warning">Warning</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference">NrqlAlertConditionWarningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.accountIdInput">AccountIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.aggregationDelayInput">AggregationDelayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.aggregationMethodInput">AggregationMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.aggregationTimerInput">AggregationTimerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.aggregationWindowInput">AggregationWindowInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.baselineDirectionInput">BaselineDirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.closeViolationsOnExpirationInput">CloseViolationsOnExpirationInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.criticalInput">CriticalInput</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical">NrqlAlertConditionCritical</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.enabledInput">EnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.evaluationDelayInput">EvaluationDelayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.expirationDurationInput">ExpirationDurationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.fillOptionInput">FillOptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.fillValueInput">FillValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.ignoreOnExpectedTerminationInput">IgnoreOnExpectedTerminationInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.nrqlInput">NrqlInput</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrql">NrqlAlertConditionNrql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.openViolationOnExpirationInput">OpenViolationOnExpirationInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.policyIdInput">PolicyIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.runbookUrlInput">RunbookUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.signalSeasonalityInput">SignalSeasonalityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.slideByInput">SlideByInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.targetEntityInput">TargetEntityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.termInput">TermInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm">NrqlAlertConditionTerm</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.timeoutsInput">TimeoutsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeouts">NrqlAlertConditionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.titleTemplateInput">TitleTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.violationTimeLimitInput">ViolationTimeLimitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.violationTimeLimitSecondsInput">ViolationTimeLimitSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.warningInput">WarningInput</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning">NrqlAlertConditionWarning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.accountId">AccountId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.aggregationDelay">AggregationDelay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.aggregationMethod">AggregationMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.aggregationTimer">AggregationTimer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.aggregationWindow">AggregationWindow</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.baselineDirection">BaselineDirection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.closeViolationsOnExpiration">CloseViolationsOnExpiration</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.enabled">Enabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.evaluationDelay">EvaluationDelay</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.expirationDuration">ExpirationDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.fillOption">FillOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.fillValue">FillValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.ignoreOnExpectedTermination">IgnoreOnExpectedTermination</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.openViolationOnExpiration">OpenViolationOnExpiration</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.policyId">PolicyId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.runbookUrl">RunbookUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.signalSeasonality">SignalSeasonality</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.slideBy">SlideBy</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.targetEntity">TargetEntity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.titleTemplate">TitleTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.violationTimeLimit">ViolationTimeLimit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.violationTimeLimitSeconds">ViolationTimeLimitSeconds</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Critical`<sup>Required</sup> <a name="Critical" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.critical"></a>

```csharp
public NrqlAlertConditionCriticalOutputReference Critical { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference">NrqlAlertConditionCriticalOutputReference</a>

---

##### `EntityGuid`<sup>Required</sup> <a name="EntityGuid" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.entityGuid"></a>

```csharp
public string EntityGuid { get; }
```

- *Type:* string

---

##### `Nrql`<sup>Required</sup> <a name="Nrql" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.nrql"></a>

```csharp
public NrqlAlertConditionNrqlOutputReference Nrql { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference">NrqlAlertConditionNrqlOutputReference</a>

---

##### `Term`<sup>Required</sup> <a name="Term" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.term"></a>

```csharp
public NrqlAlertConditionTermList Term { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList">NrqlAlertConditionTermList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.timeouts"></a>

```csharp
public NrqlAlertConditionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference">NrqlAlertConditionTimeoutsOutputReference</a>

---

##### `Warning`<sup>Required</sup> <a name="Warning" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.warning"></a>

```csharp
public NrqlAlertConditionWarningOutputReference Warning { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference">NrqlAlertConditionWarningOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.accountIdInput"></a>

```csharp
public double AccountIdInput { get; }
```

- *Type:* double

---

##### `AggregationDelayInput`<sup>Optional</sup> <a name="AggregationDelayInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.aggregationDelayInput"></a>

```csharp
public string AggregationDelayInput { get; }
```

- *Type:* string

---

##### `AggregationMethodInput`<sup>Optional</sup> <a name="AggregationMethodInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.aggregationMethodInput"></a>

```csharp
public string AggregationMethodInput { get; }
```

- *Type:* string

---

##### `AggregationTimerInput`<sup>Optional</sup> <a name="AggregationTimerInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.aggregationTimerInput"></a>

```csharp
public string AggregationTimerInput { get; }
```

- *Type:* string

---

##### `AggregationWindowInput`<sup>Optional</sup> <a name="AggregationWindowInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.aggregationWindowInput"></a>

```csharp
public double AggregationWindowInput { get; }
```

- *Type:* double

---

##### `BaselineDirectionInput`<sup>Optional</sup> <a name="BaselineDirectionInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.baselineDirectionInput"></a>

```csharp
public string BaselineDirectionInput { get; }
```

- *Type:* string

---

##### `CloseViolationsOnExpirationInput`<sup>Optional</sup> <a name="CloseViolationsOnExpirationInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.closeViolationsOnExpirationInput"></a>

```csharp
public bool|IResolvable CloseViolationsOnExpirationInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `CriticalInput`<sup>Optional</sup> <a name="CriticalInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.criticalInput"></a>

```csharp
public NrqlAlertConditionCritical CriticalInput { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical">NrqlAlertConditionCritical</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `EvaluationDelayInput`<sup>Optional</sup> <a name="EvaluationDelayInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.evaluationDelayInput"></a>

```csharp
public double EvaluationDelayInput { get; }
```

- *Type:* double

---

##### `ExpirationDurationInput`<sup>Optional</sup> <a name="ExpirationDurationInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.expirationDurationInput"></a>

```csharp
public double ExpirationDurationInput { get; }
```

- *Type:* double

---

##### `FillOptionInput`<sup>Optional</sup> <a name="FillOptionInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.fillOptionInput"></a>

```csharp
public string FillOptionInput { get; }
```

- *Type:* string

---

##### `FillValueInput`<sup>Optional</sup> <a name="FillValueInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.fillValueInput"></a>

```csharp
public double FillValueInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IgnoreOnExpectedTerminationInput`<sup>Optional</sup> <a name="IgnoreOnExpectedTerminationInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.ignoreOnExpectedTerminationInput"></a>

```csharp
public bool|IResolvable IgnoreOnExpectedTerminationInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NrqlInput`<sup>Optional</sup> <a name="NrqlInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.nrqlInput"></a>

```csharp
public NrqlAlertConditionNrql NrqlInput { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrql">NrqlAlertConditionNrql</a>

---

##### `OpenViolationOnExpirationInput`<sup>Optional</sup> <a name="OpenViolationOnExpirationInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.openViolationOnExpirationInput"></a>

```csharp
public bool|IResolvable OpenViolationOnExpirationInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.policyIdInput"></a>

```csharp
public double PolicyIdInput { get; }
```

- *Type:* double

---

##### `RunbookUrlInput`<sup>Optional</sup> <a name="RunbookUrlInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.runbookUrlInput"></a>

```csharp
public string RunbookUrlInput { get; }
```

- *Type:* string

---

##### `SignalSeasonalityInput`<sup>Optional</sup> <a name="SignalSeasonalityInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.signalSeasonalityInput"></a>

```csharp
public string SignalSeasonalityInput { get; }
```

- *Type:* string

---

##### `SlideByInput`<sup>Optional</sup> <a name="SlideByInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.slideByInput"></a>

```csharp
public double SlideByInput { get; }
```

- *Type:* double

---

##### `TargetEntityInput`<sup>Optional</sup> <a name="TargetEntityInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.targetEntityInput"></a>

```csharp
public string TargetEntityInput { get; }
```

- *Type:* string

---

##### `TermInput`<sup>Optional</sup> <a name="TermInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.termInput"></a>

```csharp
public IResolvable|NrqlAlertConditionTerm[] TermInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm">NrqlAlertConditionTerm</a>[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.timeoutsInput"></a>

```csharp
public IResolvable|NrqlAlertConditionTimeouts TimeoutsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeouts">NrqlAlertConditionTimeouts</a>

---

##### `TitleTemplateInput`<sup>Optional</sup> <a name="TitleTemplateInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.titleTemplateInput"></a>

```csharp
public string TitleTemplateInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ViolationTimeLimitInput`<sup>Optional</sup> <a name="ViolationTimeLimitInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.violationTimeLimitInput"></a>

```csharp
public string ViolationTimeLimitInput { get; }
```

- *Type:* string

---

##### `ViolationTimeLimitSecondsInput`<sup>Optional</sup> <a name="ViolationTimeLimitSecondsInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.violationTimeLimitSecondsInput"></a>

```csharp
public double ViolationTimeLimitSecondsInput { get; }
```

- *Type:* double

---

##### `WarningInput`<sup>Optional</sup> <a name="WarningInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.warningInput"></a>

```csharp
public NrqlAlertConditionWarning WarningInput { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning">NrqlAlertConditionWarning</a>

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.accountId"></a>

```csharp
public double AccountId { get; }
```

- *Type:* double

---

##### `AggregationDelay`<sup>Required</sup> <a name="AggregationDelay" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.aggregationDelay"></a>

```csharp
public string AggregationDelay { get; }
```

- *Type:* string

---

##### `AggregationMethod`<sup>Required</sup> <a name="AggregationMethod" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.aggregationMethod"></a>

```csharp
public string AggregationMethod { get; }
```

- *Type:* string

---

##### `AggregationTimer`<sup>Required</sup> <a name="AggregationTimer" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.aggregationTimer"></a>

```csharp
public string AggregationTimer { get; }
```

- *Type:* string

---

##### `AggregationWindow`<sup>Required</sup> <a name="AggregationWindow" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.aggregationWindow"></a>

```csharp
public double AggregationWindow { get; }
```

- *Type:* double

---

##### `BaselineDirection`<sup>Required</sup> <a name="BaselineDirection" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.baselineDirection"></a>

```csharp
public string BaselineDirection { get; }
```

- *Type:* string

---

##### `CloseViolationsOnExpiration`<sup>Required</sup> <a name="CloseViolationsOnExpiration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.closeViolationsOnExpiration"></a>

```csharp
public bool|IResolvable CloseViolationsOnExpiration { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `EvaluationDelay`<sup>Required</sup> <a name="EvaluationDelay" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.evaluationDelay"></a>

```csharp
public double EvaluationDelay { get; }
```

- *Type:* double

---

##### `ExpirationDuration`<sup>Required</sup> <a name="ExpirationDuration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.expirationDuration"></a>

```csharp
public double ExpirationDuration { get; }
```

- *Type:* double

---

##### `FillOption`<sup>Required</sup> <a name="FillOption" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.fillOption"></a>

```csharp
public string FillOption { get; }
```

- *Type:* string

---

##### `FillValue`<sup>Required</sup> <a name="FillValue" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.fillValue"></a>

```csharp
public double FillValue { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IgnoreOnExpectedTermination`<sup>Required</sup> <a name="IgnoreOnExpectedTermination" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.ignoreOnExpectedTermination"></a>

```csharp
public bool|IResolvable IgnoreOnExpectedTermination { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OpenViolationOnExpiration`<sup>Required</sup> <a name="OpenViolationOnExpiration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.openViolationOnExpiration"></a>

```csharp
public bool|IResolvable OpenViolationOnExpiration { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.policyId"></a>

```csharp
public double PolicyId { get; }
```

- *Type:* double

---

##### `RunbookUrl`<sup>Required</sup> <a name="RunbookUrl" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.runbookUrl"></a>

```csharp
public string RunbookUrl { get; }
```

- *Type:* string

---

##### `SignalSeasonality`<sup>Required</sup> <a name="SignalSeasonality" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.signalSeasonality"></a>

```csharp
public string SignalSeasonality { get; }
```

- *Type:* string

---

##### `SlideBy`<sup>Required</sup> <a name="SlideBy" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.slideBy"></a>

```csharp
public double SlideBy { get; }
```

- *Type:* double

---

##### `TargetEntity`<sup>Required</sup> <a name="TargetEntity" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.targetEntity"></a>

```csharp
public string TargetEntity { get; }
```

- *Type:* string

---

##### `TitleTemplate`<sup>Required</sup> <a name="TitleTemplate" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.titleTemplate"></a>

```csharp
public string TitleTemplate { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `ViolationTimeLimit`<sup>Required</sup> <a name="ViolationTimeLimit" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.violationTimeLimit"></a>

```csharp
public string ViolationTimeLimit { get; }
```

- *Type:* string

---

##### `ViolationTimeLimitSeconds`<sup>Required</sup> <a name="ViolationTimeLimitSeconds" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.violationTimeLimitSeconds"></a>

```csharp
public double ViolationTimeLimitSeconds { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NrqlAlertConditionConfig <a name="NrqlAlertConditionConfig" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new NrqlAlertConditionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    NrqlAlertConditionNrql Nrql,
    double PolicyId,
    double AccountId = null,
    string AggregationDelay = null,
    string AggregationMethod = null,
    string AggregationTimer = null,
    double AggregationWindow = null,
    string BaselineDirection = null,
    bool|IResolvable CloseViolationsOnExpiration = null,
    NrqlAlertConditionCritical Critical = null,
    string Description = null,
    bool|IResolvable Enabled = null,
    double EvaluationDelay = null,
    double ExpirationDuration = null,
    string FillOption = null,
    double FillValue = null,
    string Id = null,
    bool|IResolvable IgnoreOnExpectedTermination = null,
    bool|IResolvable OpenViolationOnExpiration = null,
    string RunbookUrl = null,
    string SignalSeasonality = null,
    double SlideBy = null,
    string TargetEntity = null,
    IResolvable|NrqlAlertConditionTerm[] Term = null,
    NrqlAlertConditionTimeouts Timeouts = null,
    string TitleTemplate = null,
    string Type = null,
    string ViolationTimeLimit = null,
    double ViolationTimeLimitSeconds = null,
    NrqlAlertConditionWarning Warning = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.name">Name</a></code> | <code>string</code> | The title of the condition. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.nrql">Nrql</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrql">NrqlAlertConditionNrql</a></code> | nrql block. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.policyId">PolicyId</a></code> | <code>double</code> | The ID of the policy where this condition should be used. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.accountId">AccountId</a></code> | <code>double</code> | The New Relic account ID for managing your NRQL alert conditions. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.aggregationDelay">AggregationDelay</a></code> | <code>string</code> | How long we wait for data that belongs in each aggregation window. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.aggregationMethod">AggregationMethod</a></code> | <code>string</code> | The method that determines when we consider an aggregation window to be complete so that we can evaluate the signal for incidents. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.aggregationTimer">AggregationTimer</a></code> | <code>string</code> | How long we wait after each data point arrives to make sure we've processed the whole batch. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.aggregationWindow">AggregationWindow</a></code> | <code>double</code> | The duration of the time window used to evaluate the NRQL query, in seconds. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.baselineDirection">BaselineDirection</a></code> | <code>string</code> | The baseline direction of a baseline NRQL alert condition. Valid values are: 'LOWER_ONLY', 'UPPER_AND_LOWER', 'UPPER_ONLY' (case insensitive). |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.closeViolationsOnExpiration">CloseViolationsOnExpiration</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Whether to close all open incidents when the signal expires. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.critical">Critical</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical">NrqlAlertConditionCritical</a></code> | critical block. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.description">Description</a></code> | <code>string</code> | The description of the NRQL alert condition. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.enabled">Enabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Whether or not to enable the alert condition. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.evaluationDelay">EvaluationDelay</a></code> | <code>double</code> | How long we wait until the signal starts evaluating. The maximum delay is 7200 seconds (120 minutes). |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.expirationDuration">ExpirationDuration</a></code> | <code>double</code> | The amount of time (in seconds) to wait before considering the signal expired. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.fillOption">FillOption</a></code> | <code>string</code> | Which strategy to use when filling gaps in the signal. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.fillValue">FillValue</a></code> | <code>double</code> | If using the 'static' fill option, this value will be used for filling gaps in the signal. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#id NrqlAlertCondition#id}. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.ignoreOnExpectedTermination">IgnoreOnExpectedTermination</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Whether to ignore expected termination of a signal when considering whether to create a loss of signal incident. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.openViolationOnExpiration">OpenViolationOnExpiration</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Whether to create a new incident to capture that the signal expired. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.runbookUrl">RunbookUrl</a></code> | <code>string</code> | Runbook URL to display in notifications. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.signalSeasonality">SignalSeasonality</a></code> | <code>string</code> | Seasonality under which a condition's signal(s) are evaluated. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.slideBy">SlideBy</a></code> | <code>double</code> | The duration of overlapping time windows used to smooth the chart line, in seconds. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.targetEntity">TargetEntity</a></code> | <code>string</code> | BETA PREVIEW: the `target_entity` field is in limited release and only enabled for preview on a per-account basis. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.term">Term</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm">NrqlAlertConditionTerm</a>[]</code> | term block. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeouts">NrqlAlertConditionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.titleTemplate">TitleTemplate</a></code> | <code>string</code> | This field allows you to create a custom title to be used when incidents are opened by the condition. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.type">Type</a></code> | <code>string</code> | The type of NRQL alert condition to create. Valid values are: 'static', 'baseline'. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.violationTimeLimit">ViolationTimeLimit</a></code> | <code>string</code> | Sets a time limit, in hours, that will automatically force-close a long-lasting incident after the time limit you select. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.violationTimeLimitSeconds">ViolationTimeLimitSeconds</a></code> | <code>double</code> | Sets a time limit, in seconds, that will automatically force-close a long-lasting incident after the time limit you select. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.warning">Warning</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning">NrqlAlertConditionWarning</a></code> | warning block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The title of the condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#name NrqlAlertCondition#name}

---

##### `Nrql`<sup>Required</sup> <a name="Nrql" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.nrql"></a>

```csharp
public NrqlAlertConditionNrql Nrql { get; set; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrql">NrqlAlertConditionNrql</a>

nrql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#nrql NrqlAlertCondition#nrql}

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.policyId"></a>

```csharp
public double PolicyId { get; set; }
```

- *Type:* double

The ID of the policy where this condition should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#policy_id NrqlAlertCondition#policy_id}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.accountId"></a>

```csharp
public double AccountId { get; set; }
```

- *Type:* double

The New Relic account ID for managing your NRQL alert conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#account_id NrqlAlertCondition#account_id}

---

##### `AggregationDelay`<sup>Optional</sup> <a name="AggregationDelay" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.aggregationDelay"></a>

```csharp
public string AggregationDelay { get; set; }
```

- *Type:* string

How long we wait for data that belongs in each aggregation window.

Depending on your data, a longer delay may increase accuracy but delay notifications. Use aggregationDelay with the EVENT_FLOW and CADENCE aggregation methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#aggregation_delay NrqlAlertCondition#aggregation_delay}

---

##### `AggregationMethod`<sup>Optional</sup> <a name="AggregationMethod" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.aggregationMethod"></a>

```csharp
public string AggregationMethod { get; set; }
```

- *Type:* string

The method that determines when we consider an aggregation window to be complete so that we can evaluate the signal for incidents.

Default is EVENT_FLOW.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#aggregation_method NrqlAlertCondition#aggregation_method}

---

##### `AggregationTimer`<sup>Optional</sup> <a name="AggregationTimer" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.aggregationTimer"></a>

```csharp
public string AggregationTimer { get; set; }
```

- *Type:* string

How long we wait after each data point arrives to make sure we've processed the whole batch.

Use aggregationTimer with the EVENT_TIMER aggregation method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#aggregation_timer NrqlAlertCondition#aggregation_timer}

---

##### `AggregationWindow`<sup>Optional</sup> <a name="AggregationWindow" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.aggregationWindow"></a>

```csharp
public double AggregationWindow { get; set; }
```

- *Type:* double

The duration of the time window used to evaluate the NRQL query, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#aggregation_window NrqlAlertCondition#aggregation_window}

---

##### `BaselineDirection`<sup>Optional</sup> <a name="BaselineDirection" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.baselineDirection"></a>

```csharp
public string BaselineDirection { get; set; }
```

- *Type:* string

The baseline direction of a baseline NRQL alert condition. Valid values are: 'LOWER_ONLY', 'UPPER_AND_LOWER', 'UPPER_ONLY' (case insensitive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#baseline_direction NrqlAlertCondition#baseline_direction}

---

##### `CloseViolationsOnExpiration`<sup>Optional</sup> <a name="CloseViolationsOnExpiration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.closeViolationsOnExpiration"></a>

```csharp
public bool|IResolvable CloseViolationsOnExpiration { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Whether to close all open incidents when the signal expires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#close_violations_on_expiration NrqlAlertCondition#close_violations_on_expiration}

---

##### `Critical`<sup>Optional</sup> <a name="Critical" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.critical"></a>

```csharp
public NrqlAlertConditionCritical Critical { get; set; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical">NrqlAlertConditionCritical</a>

critical block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#critical NrqlAlertCondition#critical}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the NRQL alert condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#description NrqlAlertCondition#description}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Whether or not to enable the alert condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#enabled NrqlAlertCondition#enabled}

---

##### `EvaluationDelay`<sup>Optional</sup> <a name="EvaluationDelay" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.evaluationDelay"></a>

```csharp
public double EvaluationDelay { get; set; }
```

- *Type:* double

How long we wait until the signal starts evaluating. The maximum delay is 7200 seconds (120 minutes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#evaluation_delay NrqlAlertCondition#evaluation_delay}

---

##### `ExpirationDuration`<sup>Optional</sup> <a name="ExpirationDuration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.expirationDuration"></a>

```csharp
public double ExpirationDuration { get; set; }
```

- *Type:* double

The amount of time (in seconds) to wait before considering the signal expired.

Must be in the range of 30 to 172800 (inclusive)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#expiration_duration NrqlAlertCondition#expiration_duration}

---

##### `FillOption`<sup>Optional</sup> <a name="FillOption" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.fillOption"></a>

```csharp
public string FillOption { get; set; }
```

- *Type:* string

Which strategy to use when filling gaps in the signal.

If static, the 'fill value' will be used for filling gaps in the signal. Valid values are: 'NONE', 'LAST_VALUE', or 'STATIC' (case insensitive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#fill_option NrqlAlertCondition#fill_option}

---

##### `FillValue`<sup>Optional</sup> <a name="FillValue" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.fillValue"></a>

```csharp
public double FillValue { get; set; }
```

- *Type:* double

If using the 'static' fill option, this value will be used for filling gaps in the signal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#fill_value NrqlAlertCondition#fill_value}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#id NrqlAlertCondition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IgnoreOnExpectedTermination`<sup>Optional</sup> <a name="IgnoreOnExpectedTermination" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.ignoreOnExpectedTermination"></a>

```csharp
public bool|IResolvable IgnoreOnExpectedTermination { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Whether to ignore expected termination of a signal when considering whether to create a loss of signal incident.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#ignore_on_expected_termination NrqlAlertCondition#ignore_on_expected_termination}

---

##### `OpenViolationOnExpiration`<sup>Optional</sup> <a name="OpenViolationOnExpiration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.openViolationOnExpiration"></a>

```csharp
public bool|IResolvable OpenViolationOnExpiration { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Whether to create a new incident to capture that the signal expired.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#open_violation_on_expiration NrqlAlertCondition#open_violation_on_expiration}

---

##### `RunbookUrl`<sup>Optional</sup> <a name="RunbookUrl" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.runbookUrl"></a>

```csharp
public string RunbookUrl { get; set; }
```

- *Type:* string

Runbook URL to display in notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#runbook_url NrqlAlertCondition#runbook_url}

---

##### `SignalSeasonality`<sup>Optional</sup> <a name="SignalSeasonality" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.signalSeasonality"></a>

```csharp
public string SignalSeasonality { get; set; }
```

- *Type:* string

Seasonality under which a condition's signal(s) are evaluated.

Valid values are: 'NEW_RELIC_CALCULATION', 'HOURLY', 'DAILY', 'WEEKLY', or 'NONE'. To have New Relic calculate seasonality automatically, set to 'NEW_RELIC_CALCULATION' (default). To turn off seasonality completely, set to 'NONE'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#signal_seasonality NrqlAlertCondition#signal_seasonality}

---

##### `SlideBy`<sup>Optional</sup> <a name="SlideBy" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.slideBy"></a>

```csharp
public double SlideBy { get; set; }
```

- *Type:* double

The duration of overlapping time windows used to smooth the chart line, in seconds.

Must be a factor of `aggregation_window` and less than the aggregation window. If `aggregation_window` is less than or equal to 3600 seconds, it should be greater or equal to 30 seconds. If `aggregation_window` is greater than 3600 seconds but less than 7200 seconds, it should be greater or equal to `aggregation_window / 120`.  If `aggregation_window` is greater than 7200 seconds, it should be greater or equal to `aggregation_window / 24

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#slide_by NrqlAlertCondition#slide_by}

---

##### `TargetEntity`<sup>Optional</sup> <a name="TargetEntity" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.targetEntity"></a>

```csharp
public string TargetEntity { get; set; }
```

- *Type:* string

BETA PREVIEW: the `target_entity` field is in limited release and only enabled for preview on a per-account basis.

* The GUID of the entity explicitly targeted by the condition. Issues triggered by this condition will affect the health status of this entity instead of having the affected entity detected automatically

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#target_entity NrqlAlertCondition#target_entity}

---

##### `Term`<sup>Optional</sup> <a name="Term" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.term"></a>

```csharp
public IResolvable|NrqlAlertConditionTerm[] Term { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm">NrqlAlertConditionTerm</a>[]

term block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#term NrqlAlertCondition#term}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.timeouts"></a>

```csharp
public NrqlAlertConditionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeouts">NrqlAlertConditionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#timeouts NrqlAlertCondition#timeouts}

---

##### `TitleTemplate`<sup>Optional</sup> <a name="TitleTemplate" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.titleTemplate"></a>

```csharp
public string TitleTemplate { get; set; }
```

- *Type:* string

This field allows you to create a custom title to be used when incidents are opened by the condition.

Setting this field will override the default title. Must be Handlebars format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#title_template NrqlAlertCondition#title_template}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of NRQL alert condition to create. Valid values are: 'static', 'baseline'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#type NrqlAlertCondition#type}

---

##### `ViolationTimeLimit`<sup>Optional</sup> <a name="ViolationTimeLimit" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.violationTimeLimit"></a>

```csharp
public string ViolationTimeLimit { get; set; }
```

- *Type:* string

Sets a time limit, in hours, that will automatically force-close a long-lasting incident after the time limit you select.

Possible values are 'ONE_HOUR', 'TWO_HOURS', 'FOUR_HOURS', 'EIGHT_HOURS', 'TWELVE_HOURS', 'TWENTY_FOUR_HOURS', 'THIRTY_DAYS' (case insensitive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#violation_time_limit NrqlAlertCondition#violation_time_limit}

---

##### `ViolationTimeLimitSeconds`<sup>Optional</sup> <a name="ViolationTimeLimitSeconds" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.violationTimeLimitSeconds"></a>

```csharp
public double ViolationTimeLimitSeconds { get; set; }
```

- *Type:* double

Sets a time limit, in seconds, that will automatically force-close a long-lasting incident after the time limit you select.

Must be in the range of 300 to 2592000 (inclusive)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#violation_time_limit_seconds NrqlAlertCondition#violation_time_limit_seconds}

---

##### `Warning`<sup>Optional</sup> <a name="Warning" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.warning"></a>

```csharp
public NrqlAlertConditionWarning Warning { get; set; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning">NrqlAlertConditionWarning</a>

warning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#warning NrqlAlertCondition#warning}

---

### NrqlAlertConditionCritical <a name="NrqlAlertConditionCritical" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new NrqlAlertConditionCritical {
    double Threshold,
    bool|IResolvable DisableHealthStatusReporting = null,
    double Duration = null,
    string Operator = null,
    NrqlAlertConditionCriticalPrediction Prediction = null,
    double ThresholdDuration = null,
    string ThresholdOccurrences = null,
    string TimeFunction = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical.property.threshold">Threshold</a></code> | <code>double</code> | For baseline conditions must be in range [1, 1000]. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical.property.disableHealthStatusReporting">DisableHealthStatusReporting</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Violations will not change system health status for this term. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical.property.duration">Duration</a></code> | <code>double</code> | In minutes, must be in the range of 1 to 120 (inclusive). |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical.property.operator">Operator</a></code> | <code>string</code> | One of (above, above_or_equals, below, below_or_equals, equals, not_equals). Defaults to 'equals'. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical.property.prediction">Prediction</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPrediction">NrqlAlertConditionCriticalPrediction</a></code> | prediction block. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical.property.thresholdDuration">ThresholdDuration</a></code> | <code>double</code> | The duration, in seconds, that the threshold must violate in order to create an incident. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical.property.thresholdOccurrences">ThresholdOccurrences</a></code> | <code>string</code> | The criteria for how many data points must be in violation for the specified threshold duration. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical.property.timeFunction">TimeFunction</a></code> | <code>string</code> | Valid values are: 'all' or 'any'. |

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical.property.threshold"></a>

```csharp
public double Threshold { get; set; }
```

- *Type:* double

For baseline conditions must be in range [1, 1000].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#threshold NrqlAlertCondition#threshold}

---

##### `DisableHealthStatusReporting`<sup>Optional</sup> <a name="DisableHealthStatusReporting" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical.property.disableHealthStatusReporting"></a>

```csharp
public bool|IResolvable DisableHealthStatusReporting { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Violations will not change system health status for this term.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#disable_health_status_reporting NrqlAlertCondition#disable_health_status_reporting}

---

##### `Duration`<sup>Optional</sup> <a name="Duration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical.property.duration"></a>

```csharp
public double Duration { get; set; }
```

- *Type:* double

In minutes, must be in the range of 1 to 120 (inclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#duration NrqlAlertCondition#duration}

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

One of (above, above_or_equals, below, below_or_equals, equals, not_equals). Defaults to 'equals'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#operator NrqlAlertCondition#operator}

---

##### `Prediction`<sup>Optional</sup> <a name="Prediction" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical.property.prediction"></a>

```csharp
public NrqlAlertConditionCriticalPrediction Prediction { get; set; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPrediction">NrqlAlertConditionCriticalPrediction</a>

prediction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#prediction NrqlAlertCondition#prediction}

---

##### `ThresholdDuration`<sup>Optional</sup> <a name="ThresholdDuration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical.property.thresholdDuration"></a>

```csharp
public double ThresholdDuration { get; set; }
```

- *Type:* double

The duration, in seconds, that the threshold must violate in order to create an incident.

Value must be a multiple of the 'aggregation_window' (which has a default of 60 seconds). Value must be within 120-86400 seconds for baseline conditions, and within 60-86400 seconds for static conditions

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#threshold_duration NrqlAlertCondition#threshold_duration}

---

##### `ThresholdOccurrences`<sup>Optional</sup> <a name="ThresholdOccurrences" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical.property.thresholdOccurrences"></a>

```csharp
public string ThresholdOccurrences { get; set; }
```

- *Type:* string

The criteria for how many data points must be in violation for the specified threshold duration.

Valid values are: 'ALL' or 'AT_LEAST_ONCE' (case insensitive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#threshold_occurrences NrqlAlertCondition#threshold_occurrences}

---

##### `TimeFunction`<sup>Optional</sup> <a name="TimeFunction" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical.property.timeFunction"></a>

```csharp
public string TimeFunction { get; set; }
```

- *Type:* string

Valid values are: 'all' or 'any'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#time_function NrqlAlertCondition#time_function}

---

### NrqlAlertConditionCriticalPrediction <a name="NrqlAlertConditionCriticalPrediction" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPrediction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPrediction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new NrqlAlertConditionCriticalPrediction {
    double PredictBy = null,
    bool|IResolvable PreferPredictionViolation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPrediction.property.predictBy">PredictBy</a></code> | <code>double</code> | BETA PREVIEW: the `predict_by` field is in limited release and only enabled for preview on a per-account basis. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPrediction.property.preferPredictionViolation">PreferPredictionViolation</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | BETA PREVIEW: the `prefer_prediction_violation` field is in limited release and only enabled for preview on a per-account basis. |

---

##### `PredictBy`<sup>Optional</sup> <a name="PredictBy" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPrediction.property.predictBy"></a>

```csharp
public double PredictBy { get; set; }
```

- *Type:* double

BETA PREVIEW: the `predict_by` field is in limited release and only enabled for preview on a per-account basis.

* The duration, in seconds, that the prediction should look into the future.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#predict_by NrqlAlertCondition#predict_by}

---

##### `PreferPredictionViolation`<sup>Optional</sup> <a name="PreferPredictionViolation" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPrediction.property.preferPredictionViolation"></a>

```csharp
public bool|IResolvable PreferPredictionViolation { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

BETA PREVIEW: the `prefer_prediction_violation` field is in limited release and only enabled for preview on a per-account basis.

* If a prediction incident is open when a term's static threshold is breached by the actual signal, default behavior is to close the prediction incident and open a static incident. Setting `prefer_prediction_violation` to `true` overrides this behavior leaving the prediction incident open and preventing a static incident from opening.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#prefer_prediction_violation NrqlAlertCondition#prefer_prediction_violation}

---

### NrqlAlertConditionNrql <a name="NrqlAlertConditionNrql" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrql.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new NrqlAlertConditionNrql {
    string Query,
    double DataAccountId = null,
    double EvaluationOffset = null,
    string SinceValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrql.property.query">Query</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#query NrqlAlertCondition#query}. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrql.property.dataAccountId">DataAccountId</a></code> | <code>double</code> | The New Relic account ID to use as the basis for the NRQL alert condition's `query`; |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrql.property.evaluationOffset">EvaluationOffset</a></code> | <code>double</code> | NRQL queries are evaluated in one-minute time windows. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrql.property.sinceValue">SinceValue</a></code> | <code>string</code> | NRQL queries are evaluated in one-minute time windows. |

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrql.property.query"></a>

```csharp
public string Query { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#query NrqlAlertCondition#query}.

---

##### `DataAccountId`<sup>Optional</sup> <a name="DataAccountId" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrql.property.dataAccountId"></a>

```csharp
public double DataAccountId { get; set; }
```

- *Type:* double

The New Relic account ID to use as the basis for the NRQL alert condition's `query`;

will default to `account_id` if unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#data_account_id NrqlAlertCondition#data_account_id}

---

##### `EvaluationOffset`<sup>Optional</sup> <a name="EvaluationOffset" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrql.property.evaluationOffset"></a>

```csharp
public double EvaluationOffset { get; set; }
```

- *Type:* double

NRQL queries are evaluated in one-minute time windows.

The start time depends on the value you provide in the NRQL condition's `evaluation_offset`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#evaluation_offset NrqlAlertCondition#evaluation_offset}

---

##### `SinceValue`<sup>Optional</sup> <a name="SinceValue" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrql.property.sinceValue"></a>

```csharp
public string SinceValue { get; set; }
```

- *Type:* string

NRQL queries are evaluated in one-minute time windows.

The start time depends on the value you provide in the NRQL condition's `since_value`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#since_value NrqlAlertCondition#since_value}

---

### NrqlAlertConditionTerm <a name="NrqlAlertConditionTerm" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new NrqlAlertConditionTerm {
    double Threshold,
    bool|IResolvable DisableHealthStatusReporting = null,
    double Duration = null,
    string Operator = null,
    NrqlAlertConditionTermPrediction Prediction = null,
    string Priority = null,
    double ThresholdDuration = null,
    string ThresholdOccurrences = null,
    string TimeFunction = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm.property.threshold">Threshold</a></code> | <code>double</code> | For baseline conditions must be in range [1, 1000]. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm.property.disableHealthStatusReporting">DisableHealthStatusReporting</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Violations will not change system health status for this term. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm.property.duration">Duration</a></code> | <code>double</code> | In minutes, must be in the range of 1 to 120 (inclusive). |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm.property.operator">Operator</a></code> | <code>string</code> | One of (above, above_or_equals, below, below_or_equals, equals, not_equals). Defaults to 'equals'. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm.property.prediction">Prediction</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPrediction">NrqlAlertConditionTermPrediction</a></code> | prediction block. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm.property.priority">Priority</a></code> | <code>string</code> | One of (critical, warning). Defaults to 'critical'. At least one condition term must have priority set to 'critical'. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm.property.thresholdDuration">ThresholdDuration</a></code> | <code>double</code> | The duration, in seconds, that the threshold must violate in order to create an incident. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm.property.thresholdOccurrences">ThresholdOccurrences</a></code> | <code>string</code> | The criteria for how many data points must be in violation for the specified threshold duration. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm.property.timeFunction">TimeFunction</a></code> | <code>string</code> | Valid values are: 'all' or 'any'. |

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm.property.threshold"></a>

```csharp
public double Threshold { get; set; }
```

- *Type:* double

For baseline conditions must be in range [1, 1000].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#threshold NrqlAlertCondition#threshold}

---

##### `DisableHealthStatusReporting`<sup>Optional</sup> <a name="DisableHealthStatusReporting" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm.property.disableHealthStatusReporting"></a>

```csharp
public bool|IResolvable DisableHealthStatusReporting { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Violations will not change system health status for this term.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#disable_health_status_reporting NrqlAlertCondition#disable_health_status_reporting}

---

##### `Duration`<sup>Optional</sup> <a name="Duration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm.property.duration"></a>

```csharp
public double Duration { get; set; }
```

- *Type:* double

In minutes, must be in the range of 1 to 120 (inclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#duration NrqlAlertCondition#duration}

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

One of (above, above_or_equals, below, below_or_equals, equals, not_equals). Defaults to 'equals'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#operator NrqlAlertCondition#operator}

---

##### `Prediction`<sup>Optional</sup> <a name="Prediction" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm.property.prediction"></a>

```csharp
public NrqlAlertConditionTermPrediction Prediction { get; set; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPrediction">NrqlAlertConditionTermPrediction</a>

prediction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#prediction NrqlAlertCondition#prediction}

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm.property.priority"></a>

```csharp
public string Priority { get; set; }
```

- *Type:* string

One of (critical, warning). Defaults to 'critical'. At least one condition term must have priority set to 'critical'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#priority NrqlAlertCondition#priority}

---

##### `ThresholdDuration`<sup>Optional</sup> <a name="ThresholdDuration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm.property.thresholdDuration"></a>

```csharp
public double ThresholdDuration { get; set; }
```

- *Type:* double

The duration, in seconds, that the threshold must violate in order to create an incident.

Value must be a multiple of the 'aggregation_window' (which has a default of 60 seconds). Value must be within 120-86400 seconds for baseline conditions, and within 60-86400 seconds for static conditions

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#threshold_duration NrqlAlertCondition#threshold_duration}

---

##### `ThresholdOccurrences`<sup>Optional</sup> <a name="ThresholdOccurrences" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm.property.thresholdOccurrences"></a>

```csharp
public string ThresholdOccurrences { get; set; }
```

- *Type:* string

The criteria for how many data points must be in violation for the specified threshold duration.

Valid values are: 'ALL' or 'AT_LEAST_ONCE' (case insensitive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#threshold_occurrences NrqlAlertCondition#threshold_occurrences}

---

##### `TimeFunction`<sup>Optional</sup> <a name="TimeFunction" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm.property.timeFunction"></a>

```csharp
public string TimeFunction { get; set; }
```

- *Type:* string

Valid values are: 'all' or 'any'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#time_function NrqlAlertCondition#time_function}

---

### NrqlAlertConditionTermPrediction <a name="NrqlAlertConditionTermPrediction" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPrediction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPrediction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new NrqlAlertConditionTermPrediction {
    double PredictBy = null,
    bool|IResolvable PreferPredictionViolation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPrediction.property.predictBy">PredictBy</a></code> | <code>double</code> | BETA PREVIEW: the `predict_by` field is in limited release and only enabled for preview on a per-account basis. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPrediction.property.preferPredictionViolation">PreferPredictionViolation</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | BETA PREVIEW: the `prefer_prediction_violation` field is in limited release and only enabled for preview on a per-account basis. |

---

##### `PredictBy`<sup>Optional</sup> <a name="PredictBy" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPrediction.property.predictBy"></a>

```csharp
public double PredictBy { get; set; }
```

- *Type:* double

BETA PREVIEW: the `predict_by` field is in limited release and only enabled for preview on a per-account basis.

* The duration, in seconds, that the prediction should look into the future.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#predict_by NrqlAlertCondition#predict_by}

---

##### `PreferPredictionViolation`<sup>Optional</sup> <a name="PreferPredictionViolation" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPrediction.property.preferPredictionViolation"></a>

```csharp
public bool|IResolvable PreferPredictionViolation { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

BETA PREVIEW: the `prefer_prediction_violation` field is in limited release and only enabled for preview on a per-account basis.

* If a prediction incident is open when a term's static threshold is breached by the actual signal, default behavior is to close the prediction incident and open a static incident. Setting `prefer_prediction_violation` to `true` overrides this behavior leaving the prediction incident open and preventing a static incident from opening.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#prefer_prediction_violation NrqlAlertCondition#prefer_prediction_violation}

---

### NrqlAlertConditionTimeouts <a name="NrqlAlertConditionTimeouts" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new NrqlAlertConditionTimeouts {
    string Create = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#create NrqlAlertCondition#create}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#create NrqlAlertCondition#create}.

---

### NrqlAlertConditionWarning <a name="NrqlAlertConditionWarning" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new NrqlAlertConditionWarning {
    double Threshold,
    bool|IResolvable DisableHealthStatusReporting = null,
    double Duration = null,
    string Operator = null,
    NrqlAlertConditionWarningPrediction Prediction = null,
    double ThresholdDuration = null,
    string ThresholdOccurrences = null,
    string TimeFunction = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning.property.threshold">Threshold</a></code> | <code>double</code> | For baseline conditions must be in range [1, 1000]. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning.property.disableHealthStatusReporting">DisableHealthStatusReporting</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Violations will not change system health status for this term. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning.property.duration">Duration</a></code> | <code>double</code> | In minutes, must be in the range of 1 to 120 (inclusive). |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning.property.operator">Operator</a></code> | <code>string</code> | One of (above, above_or_equals, below, below_or_equals, equals, not_equals). Defaults to 'equals'. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning.property.prediction">Prediction</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPrediction">NrqlAlertConditionWarningPrediction</a></code> | prediction block. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning.property.thresholdDuration">ThresholdDuration</a></code> | <code>double</code> | The duration, in seconds, that the threshold must violate in order to create an incident. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning.property.thresholdOccurrences">ThresholdOccurrences</a></code> | <code>string</code> | The criteria for how many data points must be in violation for the specified threshold duration. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning.property.timeFunction">TimeFunction</a></code> | <code>string</code> | Valid values are: 'all' or 'any'. |

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning.property.threshold"></a>

```csharp
public double Threshold { get; set; }
```

- *Type:* double

For baseline conditions must be in range [1, 1000].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#threshold NrqlAlertCondition#threshold}

---

##### `DisableHealthStatusReporting`<sup>Optional</sup> <a name="DisableHealthStatusReporting" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning.property.disableHealthStatusReporting"></a>

```csharp
public bool|IResolvable DisableHealthStatusReporting { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Violations will not change system health status for this term.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#disable_health_status_reporting NrqlAlertCondition#disable_health_status_reporting}

---

##### `Duration`<sup>Optional</sup> <a name="Duration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning.property.duration"></a>

```csharp
public double Duration { get; set; }
```

- *Type:* double

In minutes, must be in the range of 1 to 120 (inclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#duration NrqlAlertCondition#duration}

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

One of (above, above_or_equals, below, below_or_equals, equals, not_equals). Defaults to 'equals'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#operator NrqlAlertCondition#operator}

---

##### `Prediction`<sup>Optional</sup> <a name="Prediction" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning.property.prediction"></a>

```csharp
public NrqlAlertConditionWarningPrediction Prediction { get; set; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPrediction">NrqlAlertConditionWarningPrediction</a>

prediction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#prediction NrqlAlertCondition#prediction}

---

##### `ThresholdDuration`<sup>Optional</sup> <a name="ThresholdDuration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning.property.thresholdDuration"></a>

```csharp
public double ThresholdDuration { get; set; }
```

- *Type:* double

The duration, in seconds, that the threshold must violate in order to create an incident.

Value must be a multiple of the 'aggregation_window' (which has a default of 60 seconds). Value must be within 120-86400 seconds for baseline conditions, and within 60-86400 seconds for static conditions

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#threshold_duration NrqlAlertCondition#threshold_duration}

---

##### `ThresholdOccurrences`<sup>Optional</sup> <a name="ThresholdOccurrences" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning.property.thresholdOccurrences"></a>

```csharp
public string ThresholdOccurrences { get; set; }
```

- *Type:* string

The criteria for how many data points must be in violation for the specified threshold duration.

Valid values are: 'ALL' or 'AT_LEAST_ONCE' (case insensitive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#threshold_occurrences NrqlAlertCondition#threshold_occurrences}

---

##### `TimeFunction`<sup>Optional</sup> <a name="TimeFunction" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning.property.timeFunction"></a>

```csharp
public string TimeFunction { get; set; }
```

- *Type:* string

Valid values are: 'all' or 'any'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#time_function NrqlAlertCondition#time_function}

---

### NrqlAlertConditionWarningPrediction <a name="NrqlAlertConditionWarningPrediction" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPrediction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPrediction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new NrqlAlertConditionWarningPrediction {
    double PredictBy = null,
    bool|IResolvable PreferPredictionViolation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPrediction.property.predictBy">PredictBy</a></code> | <code>double</code> | BETA PREVIEW: the `predict_by` field is in limited release and only enabled for preview on a per-account basis. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPrediction.property.preferPredictionViolation">PreferPredictionViolation</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | BETA PREVIEW: the `prefer_prediction_violation` field is in limited release and only enabled for preview on a per-account basis. |

---

##### `PredictBy`<sup>Optional</sup> <a name="PredictBy" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPrediction.property.predictBy"></a>

```csharp
public double PredictBy { get; set; }
```

- *Type:* double

BETA PREVIEW: the `predict_by` field is in limited release and only enabled for preview on a per-account basis.

* The duration, in seconds, that the prediction should look into the future.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#predict_by NrqlAlertCondition#predict_by}

---

##### `PreferPredictionViolation`<sup>Optional</sup> <a name="PreferPredictionViolation" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPrediction.property.preferPredictionViolation"></a>

```csharp
public bool|IResolvable PreferPredictionViolation { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

BETA PREVIEW: the `prefer_prediction_violation` field is in limited release and only enabled for preview on a per-account basis.

* If a prediction incident is open when a term's static threshold is breached by the actual signal, default behavior is to close the prediction incident and open a static incident. Setting `prefer_prediction_violation` to `true` overrides this behavior leaving the prediction incident open and preventing a static incident from opening.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/nrql_alert_condition#prefer_prediction_violation NrqlAlertCondition#prefer_prediction_violation}

---

## Classes <a name="Classes" id="Classes"></a>

### NrqlAlertConditionCriticalOutputReference <a name="NrqlAlertConditionCriticalOutputReference" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new NrqlAlertConditionCriticalOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.putPrediction">PutPrediction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.resetDisableHealthStatusReporting">ResetDisableHealthStatusReporting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.resetDuration">ResetDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.resetPrediction">ResetPrediction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.resetThresholdDuration">ResetThresholdDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.resetThresholdOccurrences">ResetThresholdOccurrences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.resetTimeFunction">ResetTimeFunction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPrediction` <a name="PutPrediction" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.putPrediction"></a>

```csharp
private void PutPrediction(NrqlAlertConditionCriticalPrediction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.putPrediction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPrediction">NrqlAlertConditionCriticalPrediction</a>

---

##### `ResetDisableHealthStatusReporting` <a name="ResetDisableHealthStatusReporting" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.resetDisableHealthStatusReporting"></a>

```csharp
private void ResetDisableHealthStatusReporting()
```

##### `ResetDuration` <a name="ResetDuration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.resetDuration"></a>

```csharp
private void ResetDuration()
```

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.resetOperator"></a>

```csharp
private void ResetOperator()
```

##### `ResetPrediction` <a name="ResetPrediction" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.resetPrediction"></a>

```csharp
private void ResetPrediction()
```

##### `ResetThresholdDuration` <a name="ResetThresholdDuration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.resetThresholdDuration"></a>

```csharp
private void ResetThresholdDuration()
```

##### `ResetThresholdOccurrences` <a name="ResetThresholdOccurrences" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.resetThresholdOccurrences"></a>

```csharp
private void ResetThresholdOccurrences()
```

##### `ResetTimeFunction` <a name="ResetTimeFunction" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.resetTimeFunction"></a>

```csharp
private void ResetTimeFunction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.prediction">Prediction</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference">NrqlAlertConditionCriticalPredictionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.disableHealthStatusReportingInput">DisableHealthStatusReportingInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.durationInput">DurationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.predictionInput">PredictionInput</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPrediction">NrqlAlertConditionCriticalPrediction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.thresholdDurationInput">ThresholdDurationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.thresholdOccurrencesInput">ThresholdOccurrencesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.timeFunctionInput">TimeFunctionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.disableHealthStatusReporting">DisableHealthStatusReporting</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.duration">Duration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.threshold">Threshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.thresholdDuration">ThresholdDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.thresholdOccurrences">ThresholdOccurrences</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.timeFunction">TimeFunction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical">NrqlAlertConditionCritical</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Prediction`<sup>Required</sup> <a name="Prediction" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.prediction"></a>

```csharp
public NrqlAlertConditionCriticalPredictionOutputReference Prediction { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference">NrqlAlertConditionCriticalPredictionOutputReference</a>

---

##### `DisableHealthStatusReportingInput`<sup>Optional</sup> <a name="DisableHealthStatusReportingInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.disableHealthStatusReportingInput"></a>

```csharp
public bool|IResolvable DisableHealthStatusReportingInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.durationInput"></a>

```csharp
public double DurationInput { get; }
```

- *Type:* double

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `PredictionInput`<sup>Optional</sup> <a name="PredictionInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.predictionInput"></a>

```csharp
public NrqlAlertConditionCriticalPrediction PredictionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPrediction">NrqlAlertConditionCriticalPrediction</a>

---

##### `ThresholdDurationInput`<sup>Optional</sup> <a name="ThresholdDurationInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.thresholdDurationInput"></a>

```csharp
public double ThresholdDurationInput { get; }
```

- *Type:* double

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.thresholdInput"></a>

```csharp
public double ThresholdInput { get; }
```

- *Type:* double

---

##### `ThresholdOccurrencesInput`<sup>Optional</sup> <a name="ThresholdOccurrencesInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.thresholdOccurrencesInput"></a>

```csharp
public string ThresholdOccurrencesInput { get; }
```

- *Type:* string

---

##### `TimeFunctionInput`<sup>Optional</sup> <a name="TimeFunctionInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.timeFunctionInput"></a>

```csharp
public string TimeFunctionInput { get; }
```

- *Type:* string

---

##### `DisableHealthStatusReporting`<sup>Required</sup> <a name="DisableHealthStatusReporting" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.disableHealthStatusReporting"></a>

```csharp
public bool|IResolvable DisableHealthStatusReporting { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.duration"></a>

```csharp
public double Duration { get; }
```

- *Type:* double

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.threshold"></a>

```csharp
public double Threshold { get; }
```

- *Type:* double

---

##### `ThresholdDuration`<sup>Required</sup> <a name="ThresholdDuration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.thresholdDuration"></a>

```csharp
public double ThresholdDuration { get; }
```

- *Type:* double

---

##### `ThresholdOccurrences`<sup>Required</sup> <a name="ThresholdOccurrences" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.thresholdOccurrences"></a>

```csharp
public string ThresholdOccurrences { get; }
```

- *Type:* string

---

##### `TimeFunction`<sup>Required</sup> <a name="TimeFunction" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.timeFunction"></a>

```csharp
public string TimeFunction { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.internalValue"></a>

```csharp
public NrqlAlertConditionCritical InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical">NrqlAlertConditionCritical</a>

---


### NrqlAlertConditionCriticalPredictionOutputReference <a name="NrqlAlertConditionCriticalPredictionOutputReference" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new NrqlAlertConditionCriticalPredictionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.resetPredictBy">ResetPredictBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.resetPreferPredictionViolation">ResetPreferPredictionViolation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPredictBy` <a name="ResetPredictBy" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.resetPredictBy"></a>

```csharp
private void ResetPredictBy()
```

##### `ResetPreferPredictionViolation` <a name="ResetPreferPredictionViolation" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.resetPreferPredictionViolation"></a>

```csharp
private void ResetPreferPredictionViolation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.property.predictByInput">PredictByInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.property.preferPredictionViolationInput">PreferPredictionViolationInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.property.predictBy">PredictBy</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.property.preferPredictionViolation">PreferPredictionViolation</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPrediction">NrqlAlertConditionCriticalPrediction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PredictByInput`<sup>Optional</sup> <a name="PredictByInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.property.predictByInput"></a>

```csharp
public double PredictByInput { get; }
```

- *Type:* double

---

##### `PreferPredictionViolationInput`<sup>Optional</sup> <a name="PreferPredictionViolationInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.property.preferPredictionViolationInput"></a>

```csharp
public bool|IResolvable PreferPredictionViolationInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `PredictBy`<sup>Required</sup> <a name="PredictBy" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.property.predictBy"></a>

```csharp
public double PredictBy { get; }
```

- *Type:* double

---

##### `PreferPredictionViolation`<sup>Required</sup> <a name="PreferPredictionViolation" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.property.preferPredictionViolation"></a>

```csharp
public bool|IResolvable PreferPredictionViolation { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.property.internalValue"></a>

```csharp
public NrqlAlertConditionCriticalPrediction InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPrediction">NrqlAlertConditionCriticalPrediction</a>

---


### NrqlAlertConditionNrqlOutputReference <a name="NrqlAlertConditionNrqlOutputReference" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new NrqlAlertConditionNrqlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.resetDataAccountId">ResetDataAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.resetEvaluationOffset">ResetEvaluationOffset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.resetSinceValue">ResetSinceValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDataAccountId` <a name="ResetDataAccountId" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.resetDataAccountId"></a>

```csharp
private void ResetDataAccountId()
```

##### `ResetEvaluationOffset` <a name="ResetEvaluationOffset" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.resetEvaluationOffset"></a>

```csharp
private void ResetEvaluationOffset()
```

##### `ResetSinceValue` <a name="ResetSinceValue" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.resetSinceValue"></a>

```csharp
private void ResetSinceValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.property.dataAccountIdInput">DataAccountIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.property.evaluationOffsetInput">EvaluationOffsetInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.property.queryInput">QueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.property.sinceValueInput">SinceValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.property.dataAccountId">DataAccountId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.property.evaluationOffset">EvaluationOffset</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.property.sinceValue">SinceValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrql">NrqlAlertConditionNrql</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataAccountIdInput`<sup>Optional</sup> <a name="DataAccountIdInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.property.dataAccountIdInput"></a>

```csharp
public double DataAccountIdInput { get; }
```

- *Type:* double

---

##### `EvaluationOffsetInput`<sup>Optional</sup> <a name="EvaluationOffsetInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.property.evaluationOffsetInput"></a>

```csharp
public double EvaluationOffsetInput { get; }
```

- *Type:* double

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.property.queryInput"></a>

```csharp
public string QueryInput { get; }
```

- *Type:* string

---

##### `SinceValueInput`<sup>Optional</sup> <a name="SinceValueInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.property.sinceValueInput"></a>

```csharp
public string SinceValueInput { get; }
```

- *Type:* string

---

##### `DataAccountId`<sup>Required</sup> <a name="DataAccountId" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.property.dataAccountId"></a>

```csharp
public double DataAccountId { get; }
```

- *Type:* double

---

##### `EvaluationOffset`<sup>Required</sup> <a name="EvaluationOffset" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.property.evaluationOffset"></a>

```csharp
public double EvaluationOffset { get; }
```

- *Type:* double

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `SinceValue`<sup>Required</sup> <a name="SinceValue" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.property.sinceValue"></a>

```csharp
public string SinceValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.property.internalValue"></a>

```csharp
public NrqlAlertConditionNrql InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrql">NrqlAlertConditionNrql</a>

---


### NrqlAlertConditionTermList <a name="NrqlAlertConditionTermList" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new NrqlAlertConditionTermList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.get"></a>

```csharp
private NrqlAlertConditionTermOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm">NrqlAlertConditionTerm</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.property.internalValue"></a>

```csharp
public IResolvable|NrqlAlertConditionTerm[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm">NrqlAlertConditionTerm</a>[]

---


### NrqlAlertConditionTermOutputReference <a name="NrqlAlertConditionTermOutputReference" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new NrqlAlertConditionTermOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.putPrediction">PutPrediction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.resetDisableHealthStatusReporting">ResetDisableHealthStatusReporting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.resetDuration">ResetDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.resetPrediction">ResetPrediction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.resetThresholdDuration">ResetThresholdDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.resetThresholdOccurrences">ResetThresholdOccurrences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.resetTimeFunction">ResetTimeFunction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPrediction` <a name="PutPrediction" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.putPrediction"></a>

```csharp
private void PutPrediction(NrqlAlertConditionTermPrediction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.putPrediction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPrediction">NrqlAlertConditionTermPrediction</a>

---

##### `ResetDisableHealthStatusReporting` <a name="ResetDisableHealthStatusReporting" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.resetDisableHealthStatusReporting"></a>

```csharp
private void ResetDisableHealthStatusReporting()
```

##### `ResetDuration` <a name="ResetDuration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.resetDuration"></a>

```csharp
private void ResetDuration()
```

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.resetOperator"></a>

```csharp
private void ResetOperator()
```

##### `ResetPrediction` <a name="ResetPrediction" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.resetPrediction"></a>

```csharp
private void ResetPrediction()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetThresholdDuration` <a name="ResetThresholdDuration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.resetThresholdDuration"></a>

```csharp
private void ResetThresholdDuration()
```

##### `ResetThresholdOccurrences` <a name="ResetThresholdOccurrences" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.resetThresholdOccurrences"></a>

```csharp
private void ResetThresholdOccurrences()
```

##### `ResetTimeFunction` <a name="ResetTimeFunction" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.resetTimeFunction"></a>

```csharp
private void ResetTimeFunction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.prediction">Prediction</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference">NrqlAlertConditionTermPredictionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.disableHealthStatusReportingInput">DisableHealthStatusReportingInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.durationInput">DurationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.predictionInput">PredictionInput</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPrediction">NrqlAlertConditionTermPrediction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.priorityInput">PriorityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.thresholdDurationInput">ThresholdDurationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.thresholdOccurrencesInput">ThresholdOccurrencesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.timeFunctionInput">TimeFunctionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.disableHealthStatusReporting">DisableHealthStatusReporting</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.duration">Duration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.priority">Priority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.threshold">Threshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.thresholdDuration">ThresholdDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.thresholdOccurrences">ThresholdOccurrences</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.timeFunction">TimeFunction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm">NrqlAlertConditionTerm</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Prediction`<sup>Required</sup> <a name="Prediction" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.prediction"></a>

```csharp
public NrqlAlertConditionTermPredictionOutputReference Prediction { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference">NrqlAlertConditionTermPredictionOutputReference</a>

---

##### `DisableHealthStatusReportingInput`<sup>Optional</sup> <a name="DisableHealthStatusReportingInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.disableHealthStatusReportingInput"></a>

```csharp
public bool|IResolvable DisableHealthStatusReportingInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.durationInput"></a>

```csharp
public double DurationInput { get; }
```

- *Type:* double

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `PredictionInput`<sup>Optional</sup> <a name="PredictionInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.predictionInput"></a>

```csharp
public NrqlAlertConditionTermPrediction PredictionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPrediction">NrqlAlertConditionTermPrediction</a>

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.priorityInput"></a>

```csharp
public string PriorityInput { get; }
```

- *Type:* string

---

##### `ThresholdDurationInput`<sup>Optional</sup> <a name="ThresholdDurationInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.thresholdDurationInput"></a>

```csharp
public double ThresholdDurationInput { get; }
```

- *Type:* double

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.thresholdInput"></a>

```csharp
public double ThresholdInput { get; }
```

- *Type:* double

---

##### `ThresholdOccurrencesInput`<sup>Optional</sup> <a name="ThresholdOccurrencesInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.thresholdOccurrencesInput"></a>

```csharp
public string ThresholdOccurrencesInput { get; }
```

- *Type:* string

---

##### `TimeFunctionInput`<sup>Optional</sup> <a name="TimeFunctionInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.timeFunctionInput"></a>

```csharp
public string TimeFunctionInput { get; }
```

- *Type:* string

---

##### `DisableHealthStatusReporting`<sup>Required</sup> <a name="DisableHealthStatusReporting" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.disableHealthStatusReporting"></a>

```csharp
public bool|IResolvable DisableHealthStatusReporting { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.duration"></a>

```csharp
public double Duration { get; }
```

- *Type:* double

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.priority"></a>

```csharp
public string Priority { get; }
```

- *Type:* string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.threshold"></a>

```csharp
public double Threshold { get; }
```

- *Type:* double

---

##### `ThresholdDuration`<sup>Required</sup> <a name="ThresholdDuration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.thresholdDuration"></a>

```csharp
public double ThresholdDuration { get; }
```

- *Type:* double

---

##### `ThresholdOccurrences`<sup>Required</sup> <a name="ThresholdOccurrences" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.thresholdOccurrences"></a>

```csharp
public string ThresholdOccurrences { get; }
```

- *Type:* string

---

##### `TimeFunction`<sup>Required</sup> <a name="TimeFunction" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.timeFunction"></a>

```csharp
public string TimeFunction { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NrqlAlertConditionTerm InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm">NrqlAlertConditionTerm</a>

---


### NrqlAlertConditionTermPredictionOutputReference <a name="NrqlAlertConditionTermPredictionOutputReference" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new NrqlAlertConditionTermPredictionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.resetPredictBy">ResetPredictBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.resetPreferPredictionViolation">ResetPreferPredictionViolation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPredictBy` <a name="ResetPredictBy" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.resetPredictBy"></a>

```csharp
private void ResetPredictBy()
```

##### `ResetPreferPredictionViolation` <a name="ResetPreferPredictionViolation" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.resetPreferPredictionViolation"></a>

```csharp
private void ResetPreferPredictionViolation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.property.predictByInput">PredictByInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.property.preferPredictionViolationInput">PreferPredictionViolationInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.property.predictBy">PredictBy</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.property.preferPredictionViolation">PreferPredictionViolation</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPrediction">NrqlAlertConditionTermPrediction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PredictByInput`<sup>Optional</sup> <a name="PredictByInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.property.predictByInput"></a>

```csharp
public double PredictByInput { get; }
```

- *Type:* double

---

##### `PreferPredictionViolationInput`<sup>Optional</sup> <a name="PreferPredictionViolationInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.property.preferPredictionViolationInput"></a>

```csharp
public bool|IResolvable PreferPredictionViolationInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `PredictBy`<sup>Required</sup> <a name="PredictBy" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.property.predictBy"></a>

```csharp
public double PredictBy { get; }
```

- *Type:* double

---

##### `PreferPredictionViolation`<sup>Required</sup> <a name="PreferPredictionViolation" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.property.preferPredictionViolation"></a>

```csharp
public bool|IResolvable PreferPredictionViolation { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.property.internalValue"></a>

```csharp
public NrqlAlertConditionTermPrediction InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPrediction">NrqlAlertConditionTermPrediction</a>

---


### NrqlAlertConditionTimeoutsOutputReference <a name="NrqlAlertConditionTimeoutsOutputReference" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new NrqlAlertConditionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeouts">NrqlAlertConditionTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NrqlAlertConditionTimeouts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeouts">NrqlAlertConditionTimeouts</a>

---


### NrqlAlertConditionWarningOutputReference <a name="NrqlAlertConditionWarningOutputReference" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new NrqlAlertConditionWarningOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.putPrediction">PutPrediction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.resetDisableHealthStatusReporting">ResetDisableHealthStatusReporting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.resetDuration">ResetDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.resetPrediction">ResetPrediction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.resetThresholdDuration">ResetThresholdDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.resetThresholdOccurrences">ResetThresholdOccurrences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.resetTimeFunction">ResetTimeFunction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPrediction` <a name="PutPrediction" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.putPrediction"></a>

```csharp
private void PutPrediction(NrqlAlertConditionWarningPrediction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.putPrediction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPrediction">NrqlAlertConditionWarningPrediction</a>

---

##### `ResetDisableHealthStatusReporting` <a name="ResetDisableHealthStatusReporting" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.resetDisableHealthStatusReporting"></a>

```csharp
private void ResetDisableHealthStatusReporting()
```

##### `ResetDuration` <a name="ResetDuration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.resetDuration"></a>

```csharp
private void ResetDuration()
```

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.resetOperator"></a>

```csharp
private void ResetOperator()
```

##### `ResetPrediction` <a name="ResetPrediction" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.resetPrediction"></a>

```csharp
private void ResetPrediction()
```

##### `ResetThresholdDuration` <a name="ResetThresholdDuration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.resetThresholdDuration"></a>

```csharp
private void ResetThresholdDuration()
```

##### `ResetThresholdOccurrences` <a name="ResetThresholdOccurrences" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.resetThresholdOccurrences"></a>

```csharp
private void ResetThresholdOccurrences()
```

##### `ResetTimeFunction` <a name="ResetTimeFunction" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.resetTimeFunction"></a>

```csharp
private void ResetTimeFunction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.prediction">Prediction</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference">NrqlAlertConditionWarningPredictionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.disableHealthStatusReportingInput">DisableHealthStatusReportingInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.durationInput">DurationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.predictionInput">PredictionInput</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPrediction">NrqlAlertConditionWarningPrediction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.thresholdDurationInput">ThresholdDurationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.thresholdOccurrencesInput">ThresholdOccurrencesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.timeFunctionInput">TimeFunctionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.disableHealthStatusReporting">DisableHealthStatusReporting</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.duration">Duration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.threshold">Threshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.thresholdDuration">ThresholdDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.thresholdOccurrences">ThresholdOccurrences</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.timeFunction">TimeFunction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning">NrqlAlertConditionWarning</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Prediction`<sup>Required</sup> <a name="Prediction" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.prediction"></a>

```csharp
public NrqlAlertConditionWarningPredictionOutputReference Prediction { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference">NrqlAlertConditionWarningPredictionOutputReference</a>

---

##### `DisableHealthStatusReportingInput`<sup>Optional</sup> <a name="DisableHealthStatusReportingInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.disableHealthStatusReportingInput"></a>

```csharp
public bool|IResolvable DisableHealthStatusReportingInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.durationInput"></a>

```csharp
public double DurationInput { get; }
```

- *Type:* double

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `PredictionInput`<sup>Optional</sup> <a name="PredictionInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.predictionInput"></a>

```csharp
public NrqlAlertConditionWarningPrediction PredictionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPrediction">NrqlAlertConditionWarningPrediction</a>

---

##### `ThresholdDurationInput`<sup>Optional</sup> <a name="ThresholdDurationInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.thresholdDurationInput"></a>

```csharp
public double ThresholdDurationInput { get; }
```

- *Type:* double

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.thresholdInput"></a>

```csharp
public double ThresholdInput { get; }
```

- *Type:* double

---

##### `ThresholdOccurrencesInput`<sup>Optional</sup> <a name="ThresholdOccurrencesInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.thresholdOccurrencesInput"></a>

```csharp
public string ThresholdOccurrencesInput { get; }
```

- *Type:* string

---

##### `TimeFunctionInput`<sup>Optional</sup> <a name="TimeFunctionInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.timeFunctionInput"></a>

```csharp
public string TimeFunctionInput { get; }
```

- *Type:* string

---

##### `DisableHealthStatusReporting`<sup>Required</sup> <a name="DisableHealthStatusReporting" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.disableHealthStatusReporting"></a>

```csharp
public bool|IResolvable DisableHealthStatusReporting { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.duration"></a>

```csharp
public double Duration { get; }
```

- *Type:* double

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.threshold"></a>

```csharp
public double Threshold { get; }
```

- *Type:* double

---

##### `ThresholdDuration`<sup>Required</sup> <a name="ThresholdDuration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.thresholdDuration"></a>

```csharp
public double ThresholdDuration { get; }
```

- *Type:* double

---

##### `ThresholdOccurrences`<sup>Required</sup> <a name="ThresholdOccurrences" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.thresholdOccurrences"></a>

```csharp
public string ThresholdOccurrences { get; }
```

- *Type:* string

---

##### `TimeFunction`<sup>Required</sup> <a name="TimeFunction" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.timeFunction"></a>

```csharp
public string TimeFunction { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.internalValue"></a>

```csharp
public NrqlAlertConditionWarning InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning">NrqlAlertConditionWarning</a>

---


### NrqlAlertConditionWarningPredictionOutputReference <a name="NrqlAlertConditionWarningPredictionOutputReference" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new NrqlAlertConditionWarningPredictionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.resetPredictBy">ResetPredictBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.resetPreferPredictionViolation">ResetPreferPredictionViolation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPredictBy` <a name="ResetPredictBy" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.resetPredictBy"></a>

```csharp
private void ResetPredictBy()
```

##### `ResetPreferPredictionViolation` <a name="ResetPreferPredictionViolation" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.resetPreferPredictionViolation"></a>

```csharp
private void ResetPreferPredictionViolation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.property.predictByInput">PredictByInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.property.preferPredictionViolationInput">PreferPredictionViolationInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.property.predictBy">PredictBy</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.property.preferPredictionViolation">PreferPredictionViolation</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPrediction">NrqlAlertConditionWarningPrediction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PredictByInput`<sup>Optional</sup> <a name="PredictByInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.property.predictByInput"></a>

```csharp
public double PredictByInput { get; }
```

- *Type:* double

---

##### `PreferPredictionViolationInput`<sup>Optional</sup> <a name="PreferPredictionViolationInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.property.preferPredictionViolationInput"></a>

```csharp
public bool|IResolvable PreferPredictionViolationInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `PredictBy`<sup>Required</sup> <a name="PredictBy" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.property.predictBy"></a>

```csharp
public double PredictBy { get; }
```

- *Type:* double

---

##### `PreferPredictionViolation`<sup>Required</sup> <a name="PreferPredictionViolation" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.property.preferPredictionViolation"></a>

```csharp
public bool|IResolvable PreferPredictionViolation { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.property.internalValue"></a>

```csharp
public NrqlAlertConditionWarningPrediction InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPrediction">NrqlAlertConditionWarningPrediction</a>

---



