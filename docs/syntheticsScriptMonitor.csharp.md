# `syntheticsScriptMonitor` Submodule <a name="`syntheticsScriptMonitor` Submodule" id="@cdktf/provider-newrelic.syntheticsScriptMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SyntheticsScriptMonitor <a name="SyntheticsScriptMonitor" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.3/docs/resources/synthetics_script_monitor newrelic_synthetics_script_monitor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new SyntheticsScriptMonitor(Construct Scope, string Id, SyntheticsScriptMonitorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig">SyntheticsScriptMonitorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig">SyntheticsScriptMonitorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.putLocationPrivate">PutLocationPrivate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.putTag">PutTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetBrowsers">ResetBrowsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetDeviceOrientation">ResetDeviceOrientation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetDevices">ResetDevices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetDeviceType">ResetDeviceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetEnableScreenshotOnFailureAndScript">ResetEnableScreenshotOnFailureAndScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetLocationPrivate">ResetLocationPrivate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetLocationsPublic">ResetLocationsPublic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetRuntimeType">ResetRuntimeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetRuntimeTypeVersion">ResetRuntimeTypeVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetScript">ResetScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetScriptLanguage">ResetScriptLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetTag">ResetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetUseUnsupportedLegacyRuntime">ResetUseUnsupportedLegacyRuntime</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLocationPrivate` <a name="PutLocationPrivate" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.putLocationPrivate"></a>

```csharp
private void PutLocationPrivate(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.putLocationPrivate.parameter.value"></a>

- *Type:* object

---

##### `PutTag` <a name="PutTag" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.putTag"></a>

```csharp
private void PutTag(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.putTag.parameter.value"></a>

- *Type:* object

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetBrowsers` <a name="ResetBrowsers" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetBrowsers"></a>

```csharp
private void ResetBrowsers()
```

##### `ResetDeviceOrientation` <a name="ResetDeviceOrientation" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetDeviceOrientation"></a>

```csharp
private void ResetDeviceOrientation()
```

##### `ResetDevices` <a name="ResetDevices" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetDevices"></a>

```csharp
private void ResetDevices()
```

##### `ResetDeviceType` <a name="ResetDeviceType" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetDeviceType"></a>

```csharp
private void ResetDeviceType()
```

##### `ResetEnableScreenshotOnFailureAndScript` <a name="ResetEnableScreenshotOnFailureAndScript" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetEnableScreenshotOnFailureAndScript"></a>

```csharp
private void ResetEnableScreenshotOnFailureAndScript()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocationPrivate` <a name="ResetLocationPrivate" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetLocationPrivate"></a>

```csharp
private void ResetLocationPrivate()
```

##### `ResetLocationsPublic` <a name="ResetLocationsPublic" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetLocationsPublic"></a>

```csharp
private void ResetLocationsPublic()
```

##### `ResetRuntimeType` <a name="ResetRuntimeType" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetRuntimeType"></a>

```csharp
private void ResetRuntimeType()
```

##### `ResetRuntimeTypeVersion` <a name="ResetRuntimeTypeVersion" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetRuntimeTypeVersion"></a>

```csharp
private void ResetRuntimeTypeVersion()
```

##### `ResetScript` <a name="ResetScript" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetScript"></a>

```csharp
private void ResetScript()
```

##### `ResetScriptLanguage` <a name="ResetScriptLanguage" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetScriptLanguage"></a>

```csharp
private void ResetScriptLanguage()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetTag"></a>

```csharp
private void ResetTag()
```

##### `ResetUseUnsupportedLegacyRuntime` <a name="ResetUseUnsupportedLegacyRuntime" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetUseUnsupportedLegacyRuntime"></a>

```csharp
private void ResetUseUnsupportedLegacyRuntime()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SyntheticsScriptMonitor resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

SyntheticsScriptMonitor.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

SyntheticsScriptMonitor.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

SyntheticsScriptMonitor.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

SyntheticsScriptMonitor.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SyntheticsScriptMonitor resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SyntheticsScriptMonitor to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SyntheticsScriptMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.3/docs/resources/synthetics_script_monitor#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SyntheticsScriptMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.guid">Guid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.locationPrivate">LocationPrivate</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList">SyntheticsScriptMonitorLocationPrivateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.monitorId">MonitorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.periodInMinutes">PeriodInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.tag">Tag</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList">SyntheticsScriptMonitorTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.accountIdInput">AccountIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.browsersInput">BrowsersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.deviceOrientationInput">DeviceOrientationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.devicesInput">DevicesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.deviceTypeInput">DeviceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.enableScreenshotOnFailureAndScriptInput">EnableScreenshotOnFailureAndScriptInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.locationPrivateInput">LocationPrivateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.locationsPublicInput">LocationsPublicInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.periodInput">PeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.runtimeTypeInput">RuntimeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.runtimeTypeVersionInput">RuntimeTypeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.scriptInput">ScriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.scriptLanguageInput">ScriptLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.tagInput">TagInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.useUnsupportedLegacyRuntimeInput">UseUnsupportedLegacyRuntimeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.accountId">AccountId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.browsers">Browsers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.deviceOrientation">DeviceOrientation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.devices">Devices</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.deviceType">DeviceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.enableScreenshotOnFailureAndScript">EnableScreenshotOnFailureAndScript</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.locationsPublic">LocationsPublic</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.period">Period</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.runtimeType">RuntimeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.runtimeTypeVersion">RuntimeTypeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.script">Script</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.scriptLanguage">ScriptLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.useUnsupportedLegacyRuntime">UseUnsupportedLegacyRuntime</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Guid`<sup>Required</sup> <a name="Guid" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.guid"></a>

```csharp
public string Guid { get; }
```

- *Type:* string

---

##### `LocationPrivate`<sup>Required</sup> <a name="LocationPrivate" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.locationPrivate"></a>

```csharp
public SyntheticsScriptMonitorLocationPrivateList LocationPrivate { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList">SyntheticsScriptMonitorLocationPrivateList</a>

---

##### `MonitorId`<sup>Required</sup> <a name="MonitorId" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.monitorId"></a>

```csharp
public string MonitorId { get; }
```

- *Type:* string

---

##### `PeriodInMinutes`<sup>Required</sup> <a name="PeriodInMinutes" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.periodInMinutes"></a>

```csharp
public double PeriodInMinutes { get; }
```

- *Type:* double

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.tag"></a>

```csharp
public SyntheticsScriptMonitorTagList Tag { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList">SyntheticsScriptMonitorTagList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.accountIdInput"></a>

```csharp
public double AccountIdInput { get; }
```

- *Type:* double

---

##### `BrowsersInput`<sup>Optional</sup> <a name="BrowsersInput" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.browsersInput"></a>

```csharp
public string[] BrowsersInput { get; }
```

- *Type:* string[]

---

##### `DeviceOrientationInput`<sup>Optional</sup> <a name="DeviceOrientationInput" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.deviceOrientationInput"></a>

```csharp
public string DeviceOrientationInput { get; }
```

- *Type:* string

---

##### `DevicesInput`<sup>Optional</sup> <a name="DevicesInput" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.devicesInput"></a>

```csharp
public string[] DevicesInput { get; }
```

- *Type:* string[]

---

##### `DeviceTypeInput`<sup>Optional</sup> <a name="DeviceTypeInput" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.deviceTypeInput"></a>

```csharp
public string DeviceTypeInput { get; }
```

- *Type:* string

---

##### `EnableScreenshotOnFailureAndScriptInput`<sup>Optional</sup> <a name="EnableScreenshotOnFailureAndScriptInput" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.enableScreenshotOnFailureAndScriptInput"></a>

```csharp
public object EnableScreenshotOnFailureAndScriptInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationPrivateInput`<sup>Optional</sup> <a name="LocationPrivateInput" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.locationPrivateInput"></a>

```csharp
public object LocationPrivateInput { get; }
```

- *Type:* object

---

##### `LocationsPublicInput`<sup>Optional</sup> <a name="LocationsPublicInput" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.locationsPublicInput"></a>

```csharp
public string[] LocationsPublicInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PeriodInput`<sup>Optional</sup> <a name="PeriodInput" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.periodInput"></a>

```csharp
public string PeriodInput { get; }
```

- *Type:* string

---

##### `RuntimeTypeInput`<sup>Optional</sup> <a name="RuntimeTypeInput" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.runtimeTypeInput"></a>

```csharp
public string RuntimeTypeInput { get; }
```

- *Type:* string

---

##### `RuntimeTypeVersionInput`<sup>Optional</sup> <a name="RuntimeTypeVersionInput" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.runtimeTypeVersionInput"></a>

```csharp
public string RuntimeTypeVersionInput { get; }
```

- *Type:* string

---

##### `ScriptInput`<sup>Optional</sup> <a name="ScriptInput" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.scriptInput"></a>

```csharp
public string ScriptInput { get; }
```

- *Type:* string

---

##### `ScriptLanguageInput`<sup>Optional</sup> <a name="ScriptLanguageInput" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.scriptLanguageInput"></a>

```csharp
public string ScriptLanguageInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.tagInput"></a>

```csharp
public object TagInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UseUnsupportedLegacyRuntimeInput`<sup>Optional</sup> <a name="UseUnsupportedLegacyRuntimeInput" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.useUnsupportedLegacyRuntimeInput"></a>

```csharp
public object UseUnsupportedLegacyRuntimeInput { get; }
```

- *Type:* object

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.accountId"></a>

```csharp
public double AccountId { get; }
```

- *Type:* double

---

##### `Browsers`<sup>Required</sup> <a name="Browsers" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.browsers"></a>

```csharp
public string[] Browsers { get; }
```

- *Type:* string[]

---

##### `DeviceOrientation`<sup>Required</sup> <a name="DeviceOrientation" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.deviceOrientation"></a>

```csharp
public string DeviceOrientation { get; }
```

- *Type:* string

---

##### `Devices`<sup>Required</sup> <a name="Devices" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.devices"></a>

```csharp
public string[] Devices { get; }
```

- *Type:* string[]

---

##### `DeviceType`<sup>Required</sup> <a name="DeviceType" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.deviceType"></a>

```csharp
public string DeviceType { get; }
```

- *Type:* string

---

##### `EnableScreenshotOnFailureAndScript`<sup>Required</sup> <a name="EnableScreenshotOnFailureAndScript" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.enableScreenshotOnFailureAndScript"></a>

```csharp
public object EnableScreenshotOnFailureAndScript { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LocationsPublic`<sup>Required</sup> <a name="LocationsPublic" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.locationsPublic"></a>

```csharp
public string[] LocationsPublic { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.period"></a>

```csharp
public string Period { get; }
```

- *Type:* string

---

##### `RuntimeType`<sup>Required</sup> <a name="RuntimeType" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.runtimeType"></a>

```csharp
public string RuntimeType { get; }
```

- *Type:* string

---

##### `RuntimeTypeVersion`<sup>Required</sup> <a name="RuntimeTypeVersion" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.runtimeTypeVersion"></a>

```csharp
public string RuntimeTypeVersion { get; }
```

- *Type:* string

---

##### `Script`<sup>Required</sup> <a name="Script" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.script"></a>

```csharp
public string Script { get; }
```

- *Type:* string

---

##### `ScriptLanguage`<sup>Required</sup> <a name="ScriptLanguage" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.scriptLanguage"></a>

```csharp
public string ScriptLanguage { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UseUnsupportedLegacyRuntime`<sup>Required</sup> <a name="UseUnsupportedLegacyRuntime" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.useUnsupportedLegacyRuntime"></a>

```csharp
public object UseUnsupportedLegacyRuntime { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SyntheticsScriptMonitorConfig <a name="SyntheticsScriptMonitorConfig" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new SyntheticsScriptMonitorConfig {
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
    string Type,
    double AccountId = null,
    string[] Browsers = null,
    string DeviceOrientation = null,
    string[] Devices = null,
    string DeviceType = null,
    object EnableScreenshotOnFailureAndScript = null,
    string Id = null,
    object LocationPrivate = null,
    string[] LocationsPublic = null,
    string RuntimeType = null,
    string RuntimeTypeVersion = null,
    string Script = null,
    string ScriptLanguage = null,
    object Tag = null,
    object UseUnsupportedLegacyRuntime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.name">Name</a></code> | <code>string</code> | The title of this monitor. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.period">Period</a></code> | <code>string</code> | The interval at which this monitor should run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.status">Status</a></code> | <code>string</code> | The monitor status (ENABLED or DISABLED). |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.type">Type</a></code> | <code>string</code> | The monitor type. Valid values are SCRIPT_BROWSER, and SCRIPT_API. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.accountId">AccountId</a></code> | <code>double</code> | ID of the newrelic account. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.browsers">Browsers</a></code> | <code>string[]</code> | The multiple browsers list on which synthetic monitors will run. Valid values are array of CHROME,and FIREFOX. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.deviceOrientation">DeviceOrientation</a></code> | <code>string</code> | The device orientation the user would like to represent. Valid values are LANDSCAPE, PORTRAIT, or NONE. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.devices">Devices</a></code> | <code>string[]</code> | The multiple devices list on which synthetic monitors will run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.deviceType">DeviceType</a></code> | <code>string</code> | The device type that a user can select. Valid values are MOBILE, TABLET, or NONE. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.enableScreenshotOnFailureAndScript">EnableScreenshotOnFailureAndScript</a></code> | <code>object</code> | Capture a screenshot during job execution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.3/docs/resources/synthetics_script_monitor#id SyntheticsScriptMonitor#id}. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.locationPrivate">LocationPrivate</a></code> | <code>object</code> | location_private block. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.locationsPublic">LocationsPublic</a></code> | <code>string[]</code> | The public location(s) that the monitor will run jobs from. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.runtimeType">RuntimeType</a></code> | <code>string</code> | The runtime type that the monitor will run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.runtimeTypeVersion">RuntimeTypeVersion</a></code> | <code>string</code> | The specific semver version of the runtime type. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.script">Script</a></code> | <code>string</code> | The script that the monitor runs. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.scriptLanguage">ScriptLanguage</a></code> | <code>string</code> | The programing language that should execute the script. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.tag">Tag</a></code> | <code>object</code> | tag block. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.useUnsupportedLegacyRuntime">UseUnsupportedLegacyRuntime</a></code> | <code>object</code> | A boolean attribute to be set true by the customer, if they would like to use the unsupported legacy runtime of Synthetic Monitors by means of an exemption given until the October 22, 2024 Legacy Runtime EOL. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The title of this monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.3/docs/resources/synthetics_script_monitor#name SyntheticsScriptMonitor#name}

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.period"></a>

```csharp
public string Period { get; set; }
```

- *Type:* string

The interval at which this monitor should run.

Valid values are EVERY_MINUTE, EVERY_5_MINUTES, EVERY_10_MINUTES, EVERY_15_MINUTES, EVERY_30_MINUTES, EVERY_HOUR, EVERY_6_HOURS, EVERY_12_HOURS, or EVERY_DAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.3/docs/resources/synthetics_script_monitor#period SyntheticsScriptMonitor#period}

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

The monitor status (ENABLED or DISABLED).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.3/docs/resources/synthetics_script_monitor#status SyntheticsScriptMonitor#status}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The monitor type. Valid values are SCRIPT_BROWSER, and SCRIPT_API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.3/docs/resources/synthetics_script_monitor#type SyntheticsScriptMonitor#type}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.accountId"></a>

```csharp
public double AccountId { get; set; }
```

- *Type:* double

ID of the newrelic account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.3/docs/resources/synthetics_script_monitor#account_id SyntheticsScriptMonitor#account_id}

---

##### `Browsers`<sup>Optional</sup> <a name="Browsers" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.browsers"></a>

```csharp
public string[] Browsers { get; set; }
```

- *Type:* string[]

The multiple browsers list on which synthetic monitors will run. Valid values are array of CHROME,and FIREFOX.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.3/docs/resources/synthetics_script_monitor#browsers SyntheticsScriptMonitor#browsers}

---

##### `DeviceOrientation`<sup>Optional</sup> <a name="DeviceOrientation" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.deviceOrientation"></a>

```csharp
public string DeviceOrientation { get; set; }
```

- *Type:* string

The device orientation the user would like to represent. Valid values are LANDSCAPE, PORTRAIT, or NONE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.3/docs/resources/synthetics_script_monitor#device_orientation SyntheticsScriptMonitor#device_orientation}

---

##### `Devices`<sup>Optional</sup> <a name="Devices" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.devices"></a>

```csharp
public string[] Devices { get; set; }
```

- *Type:* string[]

The multiple devices list on which synthetic monitors will run.

Valid values are array of DESKTOP, MOBILE_LANDSCAPE, MOBILE_PORTRAIT, TABLET_LANDSCAPE and TABLET_PORTRAIT

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.3/docs/resources/synthetics_script_monitor#devices SyntheticsScriptMonitor#devices}

---

##### `DeviceType`<sup>Optional</sup> <a name="DeviceType" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.deviceType"></a>

```csharp
public string DeviceType { get; set; }
```

- *Type:* string

The device type that a user can select. Valid values are MOBILE, TABLET, or NONE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.3/docs/resources/synthetics_script_monitor#device_type SyntheticsScriptMonitor#device_type}

---

##### `EnableScreenshotOnFailureAndScript`<sup>Optional</sup> <a name="EnableScreenshotOnFailureAndScript" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.enableScreenshotOnFailureAndScript"></a>

```csharp
public object EnableScreenshotOnFailureAndScript { get; set; }
```

- *Type:* object

Capture a screenshot during job execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.3/docs/resources/synthetics_script_monitor#enable_screenshot_on_failure_and_script SyntheticsScriptMonitor#enable_screenshot_on_failure_and_script}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.3/docs/resources/synthetics_script_monitor#id SyntheticsScriptMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LocationPrivate`<sup>Optional</sup> <a name="LocationPrivate" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.locationPrivate"></a>

```csharp
public object LocationPrivate { get; set; }
```

- *Type:* object

location_private block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.3/docs/resources/synthetics_script_monitor#location_private SyntheticsScriptMonitor#location_private}

---

##### `LocationsPublic`<sup>Optional</sup> <a name="LocationsPublic" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.locationsPublic"></a>

```csharp
public string[] LocationsPublic { get; set; }
```

- *Type:* string[]

The public location(s) that the monitor will run jobs from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.3/docs/resources/synthetics_script_monitor#locations_public SyntheticsScriptMonitor#locations_public}

---

##### `RuntimeType`<sup>Optional</sup> <a name="RuntimeType" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.runtimeType"></a>

```csharp
public string RuntimeType { get; set; }
```

- *Type:* string

The runtime type that the monitor will run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.3/docs/resources/synthetics_script_monitor#runtime_type SyntheticsScriptMonitor#runtime_type}

---

##### `RuntimeTypeVersion`<sup>Optional</sup> <a name="RuntimeTypeVersion" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.runtimeTypeVersion"></a>

```csharp
public string RuntimeTypeVersion { get; set; }
```

- *Type:* string

The specific semver version of the runtime type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.3/docs/resources/synthetics_script_monitor#runtime_type_version SyntheticsScriptMonitor#runtime_type_version}

---

##### `Script`<sup>Optional</sup> <a name="Script" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.script"></a>

```csharp
public string Script { get; set; }
```

- *Type:* string

The script that the monitor runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.3/docs/resources/synthetics_script_monitor#script SyntheticsScriptMonitor#script}

---

##### `ScriptLanguage`<sup>Optional</sup> <a name="ScriptLanguage" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.scriptLanguage"></a>

```csharp
public string ScriptLanguage { get; set; }
```

- *Type:* string

The programing language that should execute the script.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.3/docs/resources/synthetics_script_monitor#script_language SyntheticsScriptMonitor#script_language}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.tag"></a>

```csharp
public object Tag { get; set; }
```

- *Type:* object

tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.3/docs/resources/synthetics_script_monitor#tag SyntheticsScriptMonitor#tag}

---

##### `UseUnsupportedLegacyRuntime`<sup>Optional</sup> <a name="UseUnsupportedLegacyRuntime" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.useUnsupportedLegacyRuntime"></a>

```csharp
public object UseUnsupportedLegacyRuntime { get; set; }
```

- *Type:* object

A boolean attribute to be set true by the customer, if they would like to use the unsupported legacy runtime of Synthetic Monitors by means of an exemption given until the October 22, 2024 Legacy Runtime EOL.

Setting this attribute to true would allow skipping validation performed by the the New Relic Terraform Provider starting v3.43.0 to disallow using the legacy runtime with new monitors. This would, hence, allow creation of monitors in the legacy runtime until the October 22, 2024 Legacy Runtime EOL, if exempt by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.3/docs/resources/synthetics_script_monitor#use_unsupported_legacy_runtime SyntheticsScriptMonitor#use_unsupported_legacy_runtime}

---

### SyntheticsScriptMonitorLocationPrivate <a name="SyntheticsScriptMonitorLocationPrivate" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new SyntheticsScriptMonitorLocationPrivate {
    string Guid,
    string VsePassword = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivate.property.guid">Guid</a></code> | <code>string</code> | The unique identifier for the Synthetics private location in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivate.property.vsePassword">VsePassword</a></code> | <code>string</code> | The location's Verified Script Execution password (Only necessary if Verified Script Execution is enabled for the location). |

---

##### `Guid`<sup>Required</sup> <a name="Guid" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivate.property.guid"></a>

```csharp
public string Guid { get; set; }
```

- *Type:* string

The unique identifier for the Synthetics private location in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.3/docs/resources/synthetics_script_monitor#guid SyntheticsScriptMonitor#guid}

---

##### `VsePassword`<sup>Optional</sup> <a name="VsePassword" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivate.property.vsePassword"></a>

```csharp
public string VsePassword { get; set; }
```

- *Type:* string

The location's Verified Script Execution password (Only necessary if Verified Script Execution is enabled for the location).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.3/docs/resources/synthetics_script_monitor#vse_password SyntheticsScriptMonitor#vse_password}

---

### SyntheticsScriptMonitorTag <a name="SyntheticsScriptMonitorTag" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTag.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new SyntheticsScriptMonitorTag {
    string Key,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTag.property.key">Key</a></code> | <code>string</code> | Name of the tag key. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTag.property.values">Values</a></code> | <code>string[]</code> | Values associated with the tag key. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTag.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Name of the tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.3/docs/resources/synthetics_script_monitor#key SyntheticsScriptMonitor#key}

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTag.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Values associated with the tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.3/docs/resources/synthetics_script_monitor#values SyntheticsScriptMonitor#values}

---

## Classes <a name="Classes" id="Classes"></a>

### SyntheticsScriptMonitorLocationPrivateList <a name="SyntheticsScriptMonitorLocationPrivateList" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new SyntheticsScriptMonitorLocationPrivateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.get"></a>

```csharp
private SyntheticsScriptMonitorLocationPrivateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SyntheticsScriptMonitorLocationPrivateOutputReference <a name="SyntheticsScriptMonitorLocationPrivateOutputReference" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new SyntheticsScriptMonitorLocationPrivateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.resetVsePassword">ResetVsePassword</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVsePassword` <a name="ResetVsePassword" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.resetVsePassword"></a>

```csharp
private void ResetVsePassword()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.property.guidInput">GuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.property.vsePasswordInput">VsePasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.property.guid">Guid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.property.vsePassword">VsePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GuidInput`<sup>Optional</sup> <a name="GuidInput" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.property.guidInput"></a>

```csharp
public string GuidInput { get; }
```

- *Type:* string

---

##### `VsePasswordInput`<sup>Optional</sup> <a name="VsePasswordInput" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.property.vsePasswordInput"></a>

```csharp
public string VsePasswordInput { get; }
```

- *Type:* string

---

##### `Guid`<sup>Required</sup> <a name="Guid" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.property.guid"></a>

```csharp
public string Guid { get; }
```

- *Type:* string

---

##### `VsePassword`<sup>Required</sup> <a name="VsePassword" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.property.vsePassword"></a>

```csharp
public string VsePassword { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SyntheticsScriptMonitorTagList <a name="SyntheticsScriptMonitorTagList" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new SyntheticsScriptMonitorTagList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.get"></a>

```csharp
private SyntheticsScriptMonitorTagOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SyntheticsScriptMonitorTagOutputReference <a name="SyntheticsScriptMonitorTagOutputReference" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new SyntheticsScriptMonitorTagOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



