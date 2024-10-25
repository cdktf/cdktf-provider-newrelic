# `syntheticsStepMonitor` Submodule <a name="`syntheticsStepMonitor` Submodule" id="@cdktf/provider-newrelic.syntheticsStepMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SyntheticsStepMonitor <a name="SyntheticsStepMonitor" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/synthetics_step_monitor newrelic_synthetics_step_monitor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new SyntheticsStepMonitor(Construct Scope, string Id, SyntheticsStepMonitorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig">SyntheticsStepMonitorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig">SyntheticsStepMonitorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.putLocationPrivate">PutLocationPrivate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.putSteps">PutSteps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.putTag">PutTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetBrowsers">ResetBrowsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetDevices">ResetDevices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetEnableScreenshotOnFailureAndScript">ResetEnableScreenshotOnFailureAndScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetLocationPrivate">ResetLocationPrivate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetLocationsPublic">ResetLocationsPublic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetRuntimeType">ResetRuntimeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetRuntimeTypeVersion">ResetRuntimeTypeVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetTag">ResetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetUseUnsupportedLegacyRuntime">ResetUseUnsupportedLegacyRuntime</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLocationPrivate` <a name="PutLocationPrivate" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.putLocationPrivate"></a>

```csharp
private void PutLocationPrivate(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.putLocationPrivate.parameter.value"></a>

- *Type:* object

---

##### `PutSteps` <a name="PutSteps" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.putSteps"></a>

```csharp
private void PutSteps(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.putSteps.parameter.value"></a>

- *Type:* object

---

##### `PutTag` <a name="PutTag" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.putTag"></a>

```csharp
private void PutTag(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.putTag.parameter.value"></a>

- *Type:* object

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetBrowsers` <a name="ResetBrowsers" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetBrowsers"></a>

```csharp
private void ResetBrowsers()
```

##### `ResetDevices` <a name="ResetDevices" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetDevices"></a>

```csharp
private void ResetDevices()
```

##### `ResetEnableScreenshotOnFailureAndScript` <a name="ResetEnableScreenshotOnFailureAndScript" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetEnableScreenshotOnFailureAndScript"></a>

```csharp
private void ResetEnableScreenshotOnFailureAndScript()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocationPrivate` <a name="ResetLocationPrivate" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetLocationPrivate"></a>

```csharp
private void ResetLocationPrivate()
```

##### `ResetLocationsPublic` <a name="ResetLocationsPublic" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetLocationsPublic"></a>

```csharp
private void ResetLocationsPublic()
```

##### `ResetRuntimeType` <a name="ResetRuntimeType" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetRuntimeType"></a>

```csharp
private void ResetRuntimeType()
```

##### `ResetRuntimeTypeVersion` <a name="ResetRuntimeTypeVersion" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetRuntimeTypeVersion"></a>

```csharp
private void ResetRuntimeTypeVersion()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetTag"></a>

```csharp
private void ResetTag()
```

##### `ResetUseUnsupportedLegacyRuntime` <a name="ResetUseUnsupportedLegacyRuntime" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetUseUnsupportedLegacyRuntime"></a>

```csharp
private void ResetUseUnsupportedLegacyRuntime()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SyntheticsStepMonitor resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

SyntheticsStepMonitor.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

SyntheticsStepMonitor.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

SyntheticsStepMonitor.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

SyntheticsStepMonitor.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SyntheticsStepMonitor resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SyntheticsStepMonitor to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SyntheticsStepMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/synthetics_step_monitor#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SyntheticsStepMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.guid">Guid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.locationPrivate">LocationPrivate</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList">SyntheticsStepMonitorLocationPrivateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.periodInMinutes">PeriodInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.steps">Steps</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList">SyntheticsStepMonitorStepsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.tag">Tag</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList">SyntheticsStepMonitorTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.accountIdInput">AccountIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.browsersInput">BrowsersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.devicesInput">DevicesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.enableScreenshotOnFailureAndScriptInput">EnableScreenshotOnFailureAndScriptInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.locationPrivateInput">LocationPrivateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.locationsPublicInput">LocationsPublicInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.periodInput">PeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.runtimeTypeInput">RuntimeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.runtimeTypeVersionInput">RuntimeTypeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.stepsInput">StepsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.tagInput">TagInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.useUnsupportedLegacyRuntimeInput">UseUnsupportedLegacyRuntimeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.accountId">AccountId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.browsers">Browsers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.devices">Devices</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.enableScreenshotOnFailureAndScript">EnableScreenshotOnFailureAndScript</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.locationsPublic">LocationsPublic</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.period">Period</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.runtimeType">RuntimeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.runtimeTypeVersion">RuntimeTypeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.useUnsupportedLegacyRuntime">UseUnsupportedLegacyRuntime</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Guid`<sup>Required</sup> <a name="Guid" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.guid"></a>

```csharp
public string Guid { get; }
```

- *Type:* string

---

##### `LocationPrivate`<sup>Required</sup> <a name="LocationPrivate" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.locationPrivate"></a>

```csharp
public SyntheticsStepMonitorLocationPrivateList LocationPrivate { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList">SyntheticsStepMonitorLocationPrivateList</a>

---

##### `PeriodInMinutes`<sup>Required</sup> <a name="PeriodInMinutes" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.periodInMinutes"></a>

```csharp
public double PeriodInMinutes { get; }
```

- *Type:* double

---

##### `Steps`<sup>Required</sup> <a name="Steps" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.steps"></a>

```csharp
public SyntheticsStepMonitorStepsList Steps { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList">SyntheticsStepMonitorStepsList</a>

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.tag"></a>

```csharp
public SyntheticsStepMonitorTagList Tag { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList">SyntheticsStepMonitorTagList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.accountIdInput"></a>

```csharp
public double AccountIdInput { get; }
```

- *Type:* double

---

##### `BrowsersInput`<sup>Optional</sup> <a name="BrowsersInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.browsersInput"></a>

```csharp
public string[] BrowsersInput { get; }
```

- *Type:* string[]

---

##### `DevicesInput`<sup>Optional</sup> <a name="DevicesInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.devicesInput"></a>

```csharp
public string[] DevicesInput { get; }
```

- *Type:* string[]

---

##### `EnableScreenshotOnFailureAndScriptInput`<sup>Optional</sup> <a name="EnableScreenshotOnFailureAndScriptInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.enableScreenshotOnFailureAndScriptInput"></a>

```csharp
public object EnableScreenshotOnFailureAndScriptInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationPrivateInput`<sup>Optional</sup> <a name="LocationPrivateInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.locationPrivateInput"></a>

```csharp
public object LocationPrivateInput { get; }
```

- *Type:* object

---

##### `LocationsPublicInput`<sup>Optional</sup> <a name="LocationsPublicInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.locationsPublicInput"></a>

```csharp
public string[] LocationsPublicInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PeriodInput`<sup>Optional</sup> <a name="PeriodInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.periodInput"></a>

```csharp
public string PeriodInput { get; }
```

- *Type:* string

---

##### `RuntimeTypeInput`<sup>Optional</sup> <a name="RuntimeTypeInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.runtimeTypeInput"></a>

```csharp
public string RuntimeTypeInput { get; }
```

- *Type:* string

---

##### `RuntimeTypeVersionInput`<sup>Optional</sup> <a name="RuntimeTypeVersionInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.runtimeTypeVersionInput"></a>

```csharp
public string RuntimeTypeVersionInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `StepsInput`<sup>Optional</sup> <a name="StepsInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.stepsInput"></a>

```csharp
public object StepsInput { get; }
```

- *Type:* object

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.tagInput"></a>

```csharp
public object TagInput { get; }
```

- *Type:* object

---

##### `UseUnsupportedLegacyRuntimeInput`<sup>Optional</sup> <a name="UseUnsupportedLegacyRuntimeInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.useUnsupportedLegacyRuntimeInput"></a>

```csharp
public object UseUnsupportedLegacyRuntimeInput { get; }
```

- *Type:* object

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.accountId"></a>

```csharp
public double AccountId { get; }
```

- *Type:* double

---

##### `Browsers`<sup>Required</sup> <a name="Browsers" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.browsers"></a>

```csharp
public string[] Browsers { get; }
```

- *Type:* string[]

---

##### `Devices`<sup>Required</sup> <a name="Devices" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.devices"></a>

```csharp
public string[] Devices { get; }
```

- *Type:* string[]

---

##### `EnableScreenshotOnFailureAndScript`<sup>Required</sup> <a name="EnableScreenshotOnFailureAndScript" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.enableScreenshotOnFailureAndScript"></a>

```csharp
public object EnableScreenshotOnFailureAndScript { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LocationsPublic`<sup>Required</sup> <a name="LocationsPublic" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.locationsPublic"></a>

```csharp
public string[] LocationsPublic { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.period"></a>

```csharp
public string Period { get; }
```

- *Type:* string

---

##### `RuntimeType`<sup>Required</sup> <a name="RuntimeType" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.runtimeType"></a>

```csharp
public string RuntimeType { get; }
```

- *Type:* string

---

##### `RuntimeTypeVersion`<sup>Required</sup> <a name="RuntimeTypeVersion" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.runtimeTypeVersion"></a>

```csharp
public string RuntimeTypeVersion { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `UseUnsupportedLegacyRuntime`<sup>Required</sup> <a name="UseUnsupportedLegacyRuntime" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.useUnsupportedLegacyRuntime"></a>

```csharp
public object UseUnsupportedLegacyRuntime { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SyntheticsStepMonitorConfig <a name="SyntheticsStepMonitorConfig" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new SyntheticsStepMonitorConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Period,
    string Status,
    object Steps,
    double AccountId = null,
    string[] Browsers = null,
    string[] Devices = null,
    object EnableScreenshotOnFailureAndScript = null,
    string Id = null,
    object LocationPrivate = null,
    string[] LocationsPublic = null,
    string RuntimeType = null,
    string RuntimeTypeVersion = null,
    object Tag = null,
    object UseUnsupportedLegacyRuntime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.name">Name</a></code> | <code>string</code> | The title of this monitor. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.period">Period</a></code> | <code>string</code> | The interval at which this monitor should run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.status">Status</a></code> | <code>string</code> | The monitor status (ENABLED or DISABLED). |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.steps">Steps</a></code> | <code>object</code> | steps block. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.accountId">AccountId</a></code> | <code>double</code> | ID of the newrelic account. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.browsers">Browsers</a></code> | <code>string[]</code> | The multiple browsers list on which synthetic monitors will run. Valid values are array of CHROME,and FIREFOX. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.devices">Devices</a></code> | <code>string[]</code> | The multiple devices list on which synthetic monitors will run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.enableScreenshotOnFailureAndScript">EnableScreenshotOnFailureAndScript</a></code> | <code>object</code> | Capture a screenshot during job execution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/synthetics_step_monitor#id SyntheticsStepMonitor#id}. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.locationPrivate">LocationPrivate</a></code> | <code>object</code> | location_private block. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.locationsPublic">LocationsPublic</a></code> | <code>string[]</code> | The public location(s) that the monitor will run jobs from. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.runtimeType">RuntimeType</a></code> | <code>string</code> | The runtime type that the monitor will run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.runtimeTypeVersion">RuntimeTypeVersion</a></code> | <code>string</code> | The specific semver version of the runtime type. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.tag">Tag</a></code> | <code>object</code> | tag block. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.useUnsupportedLegacyRuntime">UseUnsupportedLegacyRuntime</a></code> | <code>object</code> | A boolean attribute to be set true by the customer, if they would like to use the unsupported legacy runtime of Synthetic Monitors by means of an exemption given until the October 22, 2024 Legacy Runtime EOL. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The title of this monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/synthetics_step_monitor#name SyntheticsStepMonitor#name}

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.period"></a>

```csharp
public string Period { get; set; }
```

- *Type:* string

The interval at which this monitor should run.

Valid values are EVERY_MINUTE, EVERY_5_MINUTES, EVERY_10_MINUTES, EVERY_15_MINUTES, EVERY_30_MINUTES, EVERY_HOUR, EVERY_6_HOURS, EVERY_12_HOURS, or EVERY_DAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/synthetics_step_monitor#period SyntheticsStepMonitor#period}

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

The monitor status (ENABLED or DISABLED).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/synthetics_step_monitor#status SyntheticsStepMonitor#status}

---

##### `Steps`<sup>Required</sup> <a name="Steps" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.steps"></a>

```csharp
public object Steps { get; set; }
```

- *Type:* object

steps block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/synthetics_step_monitor#steps SyntheticsStepMonitor#steps}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.accountId"></a>

```csharp
public double AccountId { get; set; }
```

- *Type:* double

ID of the newrelic account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/synthetics_step_monitor#account_id SyntheticsStepMonitor#account_id}

---

##### `Browsers`<sup>Optional</sup> <a name="Browsers" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.browsers"></a>

```csharp
public string[] Browsers { get; set; }
```

- *Type:* string[]

The multiple browsers list on which synthetic monitors will run. Valid values are array of CHROME,and FIREFOX.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/synthetics_step_monitor#browsers SyntheticsStepMonitor#browsers}

---

##### `Devices`<sup>Optional</sup> <a name="Devices" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.devices"></a>

```csharp
public string[] Devices { get; set; }
```

- *Type:* string[]

The multiple devices list on which synthetic monitors will run.

Valid values are array of DESKTOP, MOBILE_LANDSCAPE, MOBILE_PORTRAIT, TABLET_LANDSCAPE and TABLET_PORTRAIT

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/synthetics_step_monitor#devices SyntheticsStepMonitor#devices}

---

##### `EnableScreenshotOnFailureAndScript`<sup>Optional</sup> <a name="EnableScreenshotOnFailureAndScript" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.enableScreenshotOnFailureAndScript"></a>

```csharp
public object EnableScreenshotOnFailureAndScript { get; set; }
```

- *Type:* object

Capture a screenshot during job execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/synthetics_step_monitor#enable_screenshot_on_failure_and_script SyntheticsStepMonitor#enable_screenshot_on_failure_and_script}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/synthetics_step_monitor#id SyntheticsStepMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LocationPrivate`<sup>Optional</sup> <a name="LocationPrivate" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.locationPrivate"></a>

```csharp
public object LocationPrivate { get; set; }
```

- *Type:* object

location_private block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/synthetics_step_monitor#location_private SyntheticsStepMonitor#location_private}

---

##### `LocationsPublic`<sup>Optional</sup> <a name="LocationsPublic" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.locationsPublic"></a>

```csharp
public string[] LocationsPublic { get; set; }
```

- *Type:* string[]

The public location(s) that the monitor will run jobs from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/synthetics_step_monitor#locations_public SyntheticsStepMonitor#locations_public}

---

##### `RuntimeType`<sup>Optional</sup> <a name="RuntimeType" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.runtimeType"></a>

```csharp
public string RuntimeType { get; set; }
```

- *Type:* string

The runtime type that the monitor will run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/synthetics_step_monitor#runtime_type SyntheticsStepMonitor#runtime_type}

---

##### `RuntimeTypeVersion`<sup>Optional</sup> <a name="RuntimeTypeVersion" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.runtimeTypeVersion"></a>

```csharp
public string RuntimeTypeVersion { get; set; }
```

- *Type:* string

The specific semver version of the runtime type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/synthetics_step_monitor#runtime_type_version SyntheticsStepMonitor#runtime_type_version}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.tag"></a>

```csharp
public object Tag { get; set; }
```

- *Type:* object

tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/synthetics_step_monitor#tag SyntheticsStepMonitor#tag}

---

##### `UseUnsupportedLegacyRuntime`<sup>Optional</sup> <a name="UseUnsupportedLegacyRuntime" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.useUnsupportedLegacyRuntime"></a>

```csharp
public object UseUnsupportedLegacyRuntime { get; set; }
```

- *Type:* object

A boolean attribute to be set true by the customer, if they would like to use the unsupported legacy runtime of Synthetic Monitors by means of an exemption given until the October 22, 2024 Legacy Runtime EOL.

Setting this attribute to true would allow skipping validation performed by the the New Relic Terraform Provider starting v3.43.0 to disallow using the legacy runtime with new monitors. This would, hence, allow creation of monitors in the legacy runtime until the October 22, 2024 Legacy Runtime EOL, if exempt by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/synthetics_step_monitor#use_unsupported_legacy_runtime SyntheticsStepMonitor#use_unsupported_legacy_runtime}

---

### SyntheticsStepMonitorLocationPrivate <a name="SyntheticsStepMonitorLocationPrivate" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new SyntheticsStepMonitorLocationPrivate {
    string Guid,
    string VsePassword = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivate.property.guid">Guid</a></code> | <code>string</code> | The unique identifier for the Synthetics private location in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivate.property.vsePassword">VsePassword</a></code> | <code>string</code> | The location's Verified Script Execution password (Only necessary if Verified Script Execution is enabled for the location). |

---

##### `Guid`<sup>Required</sup> <a name="Guid" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivate.property.guid"></a>

```csharp
public string Guid { get; set; }
```

- *Type:* string

The unique identifier for the Synthetics private location in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/synthetics_step_monitor#guid SyntheticsStepMonitor#guid}

---

##### `VsePassword`<sup>Optional</sup> <a name="VsePassword" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivate.property.vsePassword"></a>

```csharp
public string VsePassword { get; set; }
```

- *Type:* string

The location's Verified Script Execution password (Only necessary if Verified Script Execution is enabled for the location).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/synthetics_step_monitor#vse_password SyntheticsStepMonitor#vse_password}

---

### SyntheticsStepMonitorSteps <a name="SyntheticsStepMonitorSteps" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorSteps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorSteps.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new SyntheticsStepMonitorSteps {
    double Ordinal,
    string Type,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorSteps.property.ordinal">Ordinal</a></code> | <code>double</code> | The position of the step within the script ranging from 0-100. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorSteps.property.type">Type</a></code> | <code>string</code> | The type of step to be added to the script. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorSteps.property.values">Values</a></code> | <code>string[]</code> | The metadata values related to the check the step performs. |

---

##### `Ordinal`<sup>Required</sup> <a name="Ordinal" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorSteps.property.ordinal"></a>

```csharp
public double Ordinal { get; set; }
```

- *Type:* double

The position of the step within the script ranging from 0-100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/synthetics_step_monitor#ordinal SyntheticsStepMonitor#ordinal}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorSteps.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of step to be added to the script.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/synthetics_step_monitor#type SyntheticsStepMonitor#type}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorSteps.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

The metadata values related to the check the step performs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/synthetics_step_monitor#values SyntheticsStepMonitor#values}

---

### SyntheticsStepMonitorTag <a name="SyntheticsStepMonitorTag" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTag.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new SyntheticsStepMonitorTag {
    string Key,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTag.property.key">Key</a></code> | <code>string</code> | Name of the tag key. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTag.property.values">Values</a></code> | <code>string[]</code> | Values associated with the tag key. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTag.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Name of the tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/synthetics_step_monitor#key SyntheticsStepMonitor#key}

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTag.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Values associated with the tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/synthetics_step_monitor#values SyntheticsStepMonitor#values}

---

## Classes <a name="Classes" id="Classes"></a>

### SyntheticsStepMonitorLocationPrivateList <a name="SyntheticsStepMonitorLocationPrivateList" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new SyntheticsStepMonitorLocationPrivateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.get"></a>

```csharp
private SyntheticsStepMonitorLocationPrivateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SyntheticsStepMonitorLocationPrivateOutputReference <a name="SyntheticsStepMonitorLocationPrivateOutputReference" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new SyntheticsStepMonitorLocationPrivateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.resetVsePassword">ResetVsePassword</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVsePassword` <a name="ResetVsePassword" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.resetVsePassword"></a>

```csharp
private void ResetVsePassword()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.property.guidInput">GuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.property.vsePasswordInput">VsePasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.property.guid">Guid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.property.vsePassword">VsePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GuidInput`<sup>Optional</sup> <a name="GuidInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.property.guidInput"></a>

```csharp
public string GuidInput { get; }
```

- *Type:* string

---

##### `VsePasswordInput`<sup>Optional</sup> <a name="VsePasswordInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.property.vsePasswordInput"></a>

```csharp
public string VsePasswordInput { get; }
```

- *Type:* string

---

##### `Guid`<sup>Required</sup> <a name="Guid" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.property.guid"></a>

```csharp
public string Guid { get; }
```

- *Type:* string

---

##### `VsePassword`<sup>Required</sup> <a name="VsePassword" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.property.vsePassword"></a>

```csharp
public string VsePassword { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SyntheticsStepMonitorStepsList <a name="SyntheticsStepMonitorStepsList" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new SyntheticsStepMonitorStepsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.get"></a>

```csharp
private SyntheticsStepMonitorStepsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SyntheticsStepMonitorStepsOutputReference <a name="SyntheticsStepMonitorStepsOutputReference" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new SyntheticsStepMonitorStepsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.ordinalInput">OrdinalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.ordinal">Ordinal</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OrdinalInput`<sup>Optional</sup> <a name="OrdinalInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.ordinalInput"></a>

```csharp
public double OrdinalInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Ordinal`<sup>Required</sup> <a name="Ordinal" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.ordinal"></a>

```csharp
public double Ordinal { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SyntheticsStepMonitorTagList <a name="SyntheticsStepMonitorTagList" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new SyntheticsStepMonitorTagList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.get"></a>

```csharp
private SyntheticsStepMonitorTagOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SyntheticsStepMonitorTagOutputReference <a name="SyntheticsStepMonitorTagOutputReference" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new SyntheticsStepMonitorTagOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



