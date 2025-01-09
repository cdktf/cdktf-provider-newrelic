# `syntheticsBrokenLinksMonitor` Submodule <a name="`syntheticsBrokenLinksMonitor` Submodule" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SyntheticsBrokenLinksMonitor <a name="SyntheticsBrokenLinksMonitor" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/synthetics_broken_links_monitor newrelic_synthetics_broken_links_monitor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new SyntheticsBrokenLinksMonitor(Construct Scope, string Id, SyntheticsBrokenLinksMonitorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig">SyntheticsBrokenLinksMonitorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig">SyntheticsBrokenLinksMonitorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.putTag">PutTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.resetLocationsPrivate">ResetLocationsPrivate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.resetLocationsPublic">ResetLocationsPublic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.resetRuntimeType">ResetRuntimeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.resetRuntimeTypeVersion">ResetRuntimeTypeVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.resetTag">ResetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.resetUseUnsupportedLegacyRuntime">ResetUseUnsupportedLegacyRuntime</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTag` <a name="PutTag" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.putTag"></a>

```csharp
private void PutTag(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.putTag.parameter.value"></a>

- *Type:* object

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocationsPrivate` <a name="ResetLocationsPrivate" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.resetLocationsPrivate"></a>

```csharp
private void ResetLocationsPrivate()
```

##### `ResetLocationsPublic` <a name="ResetLocationsPublic" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.resetLocationsPublic"></a>

```csharp
private void ResetLocationsPublic()
```

##### `ResetRuntimeType` <a name="ResetRuntimeType" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.resetRuntimeType"></a>

```csharp
private void ResetRuntimeType()
```

##### `ResetRuntimeTypeVersion` <a name="ResetRuntimeTypeVersion" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.resetRuntimeTypeVersion"></a>

```csharp
private void ResetRuntimeTypeVersion()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.resetTag"></a>

```csharp
private void ResetTag()
```

##### `ResetUseUnsupportedLegacyRuntime` <a name="ResetUseUnsupportedLegacyRuntime" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.resetUseUnsupportedLegacyRuntime"></a>

```csharp
private void ResetUseUnsupportedLegacyRuntime()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SyntheticsBrokenLinksMonitor resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

SyntheticsBrokenLinksMonitor.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

SyntheticsBrokenLinksMonitor.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

SyntheticsBrokenLinksMonitor.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

SyntheticsBrokenLinksMonitor.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SyntheticsBrokenLinksMonitor resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SyntheticsBrokenLinksMonitor to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SyntheticsBrokenLinksMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/synthetics_broken_links_monitor#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SyntheticsBrokenLinksMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.guid">Guid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.periodInMinutes">PeriodInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.tag">Tag</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList">SyntheticsBrokenLinksMonitorTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.accountIdInput">AccountIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.locationsPrivateInput">LocationsPrivateInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.locationsPublicInput">LocationsPublicInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.periodInput">PeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.runtimeTypeInput">RuntimeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.runtimeTypeVersionInput">RuntimeTypeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.tagInput">TagInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.useUnsupportedLegacyRuntimeInput">UseUnsupportedLegacyRuntimeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.accountId">AccountId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.locationsPrivate">LocationsPrivate</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.locationsPublic">LocationsPublic</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.period">Period</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.runtimeType">RuntimeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.runtimeTypeVersion">RuntimeTypeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.useUnsupportedLegacyRuntime">UseUnsupportedLegacyRuntime</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Guid`<sup>Required</sup> <a name="Guid" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.guid"></a>

```csharp
public string Guid { get; }
```

- *Type:* string

---

##### `PeriodInMinutes`<sup>Required</sup> <a name="PeriodInMinutes" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.periodInMinutes"></a>

```csharp
public double PeriodInMinutes { get; }
```

- *Type:* double

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.tag"></a>

```csharp
public SyntheticsBrokenLinksMonitorTagList Tag { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList">SyntheticsBrokenLinksMonitorTagList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.accountIdInput"></a>

```csharp
public double AccountIdInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationsPrivateInput`<sup>Optional</sup> <a name="LocationsPrivateInput" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.locationsPrivateInput"></a>

```csharp
public string[] LocationsPrivateInput { get; }
```

- *Type:* string[]

---

##### `LocationsPublicInput`<sup>Optional</sup> <a name="LocationsPublicInput" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.locationsPublicInput"></a>

```csharp
public string[] LocationsPublicInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PeriodInput`<sup>Optional</sup> <a name="PeriodInput" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.periodInput"></a>

```csharp
public string PeriodInput { get; }
```

- *Type:* string

---

##### `RuntimeTypeInput`<sup>Optional</sup> <a name="RuntimeTypeInput" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.runtimeTypeInput"></a>

```csharp
public string RuntimeTypeInput { get; }
```

- *Type:* string

---

##### `RuntimeTypeVersionInput`<sup>Optional</sup> <a name="RuntimeTypeVersionInput" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.runtimeTypeVersionInput"></a>

```csharp
public string RuntimeTypeVersionInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.tagInput"></a>

```csharp
public object TagInput { get; }
```

- *Type:* object

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `UseUnsupportedLegacyRuntimeInput`<sup>Optional</sup> <a name="UseUnsupportedLegacyRuntimeInput" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.useUnsupportedLegacyRuntimeInput"></a>

```csharp
public object UseUnsupportedLegacyRuntimeInput { get; }
```

- *Type:* object

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.accountId"></a>

```csharp
public double AccountId { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LocationsPrivate`<sup>Required</sup> <a name="LocationsPrivate" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.locationsPrivate"></a>

```csharp
public string[] LocationsPrivate { get; }
```

- *Type:* string[]

---

##### `LocationsPublic`<sup>Required</sup> <a name="LocationsPublic" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.locationsPublic"></a>

```csharp
public string[] LocationsPublic { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.period"></a>

```csharp
public string Period { get; }
```

- *Type:* string

---

##### `RuntimeType`<sup>Required</sup> <a name="RuntimeType" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.runtimeType"></a>

```csharp
public string RuntimeType { get; }
```

- *Type:* string

---

##### `RuntimeTypeVersion`<sup>Required</sup> <a name="RuntimeTypeVersion" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.runtimeTypeVersion"></a>

```csharp
public string RuntimeTypeVersion { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `UseUnsupportedLegacyRuntime`<sup>Required</sup> <a name="UseUnsupportedLegacyRuntime" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.useUnsupportedLegacyRuntime"></a>

```csharp
public object UseUnsupportedLegacyRuntime { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SyntheticsBrokenLinksMonitorConfig <a name="SyntheticsBrokenLinksMonitorConfig" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new SyntheticsBrokenLinksMonitorConfig {
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
    string Uri,
    double AccountId = null,
    string Id = null,
    string[] LocationsPrivate = null,
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
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.name">Name</a></code> | <code>string</code> | The title of this monitor. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.period">Period</a></code> | <code>string</code> | The interval at which this monitor should run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.status">Status</a></code> | <code>string</code> | The monitor status (ENABLED or DISABLED). |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.uri">Uri</a></code> | <code>string</code> | The URI the monitor runs against. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.accountId">AccountId</a></code> | <code>double</code> | ID of the newrelic account. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/synthetics_broken_links_monitor#id SyntheticsBrokenLinksMonitor#id}. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.locationsPrivate">LocationsPrivate</a></code> | <code>string[]</code> | List private location GUIDs for which the monitor will run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.locationsPublic">LocationsPublic</a></code> | <code>string[]</code> | Publicly available location names in which the monitor will run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.runtimeType">RuntimeType</a></code> | <code>string</code> | The runtime type that the monitor will run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.runtimeTypeVersion">RuntimeTypeVersion</a></code> | <code>string</code> | The specific semver version of the runtime type. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.tag">Tag</a></code> | <code>object</code> | tag block. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.useUnsupportedLegacyRuntime">UseUnsupportedLegacyRuntime</a></code> | <code>object</code> | A boolean attribute to be set true by the customer, if they would like to use the unsupported legacy runtime of Synthetic Monitors by means of an exemption given until the October 22, 2024 Legacy Runtime EOL. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The title of this monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/synthetics_broken_links_monitor#name SyntheticsBrokenLinksMonitor#name}

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.period"></a>

```csharp
public string Period { get; set; }
```

- *Type:* string

The interval at which this monitor should run.

Valid values are EVERY_MINUTE, EVERY_5_MINUTES, EVERY_10_MINUTES, EVERY_15_MINUTES, EVERY_30_MINUTES, EVERY_HOUR, EVERY_6_HOURS, EVERY_12_HOURS, or EVERY_DAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/synthetics_broken_links_monitor#period SyntheticsBrokenLinksMonitor#period}

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

The monitor status (ENABLED or DISABLED).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/synthetics_broken_links_monitor#status SyntheticsBrokenLinksMonitor#status}

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

The URI the monitor runs against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/synthetics_broken_links_monitor#uri SyntheticsBrokenLinksMonitor#uri}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.accountId"></a>

```csharp
public double AccountId { get; set; }
```

- *Type:* double

ID of the newrelic account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/synthetics_broken_links_monitor#account_id SyntheticsBrokenLinksMonitor#account_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/synthetics_broken_links_monitor#id SyntheticsBrokenLinksMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LocationsPrivate`<sup>Optional</sup> <a name="LocationsPrivate" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.locationsPrivate"></a>

```csharp
public string[] LocationsPrivate { get; set; }
```

- *Type:* string[]

List private location GUIDs for which the monitor will run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/synthetics_broken_links_monitor#locations_private SyntheticsBrokenLinksMonitor#locations_private}

---

##### `LocationsPublic`<sup>Optional</sup> <a name="LocationsPublic" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.locationsPublic"></a>

```csharp
public string[] LocationsPublic { get; set; }
```

- *Type:* string[]

Publicly available location names in which the monitor will run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/synthetics_broken_links_monitor#locations_public SyntheticsBrokenLinksMonitor#locations_public}

---

##### `RuntimeType`<sup>Optional</sup> <a name="RuntimeType" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.runtimeType"></a>

```csharp
public string RuntimeType { get; set; }
```

- *Type:* string

The runtime type that the monitor will run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/synthetics_broken_links_monitor#runtime_type SyntheticsBrokenLinksMonitor#runtime_type}

---

##### `RuntimeTypeVersion`<sup>Optional</sup> <a name="RuntimeTypeVersion" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.runtimeTypeVersion"></a>

```csharp
public string RuntimeTypeVersion { get; set; }
```

- *Type:* string

The specific semver version of the runtime type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/synthetics_broken_links_monitor#runtime_type_version SyntheticsBrokenLinksMonitor#runtime_type_version}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.tag"></a>

```csharp
public object Tag { get; set; }
```

- *Type:* object

tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/synthetics_broken_links_monitor#tag SyntheticsBrokenLinksMonitor#tag}

---

##### `UseUnsupportedLegacyRuntime`<sup>Optional</sup> <a name="UseUnsupportedLegacyRuntime" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.useUnsupportedLegacyRuntime"></a>

```csharp
public object UseUnsupportedLegacyRuntime { get; set; }
```

- *Type:* object

A boolean attribute to be set true by the customer, if they would like to use the unsupported legacy runtime of Synthetic Monitors by means of an exemption given until the October 22, 2024 Legacy Runtime EOL.

Setting this attribute to true would allow skipping validation performed by the the New Relic Terraform Provider starting v3.43.0 to disallow using the legacy runtime with new monitors. This would, hence, allow creation of monitors in the legacy runtime until the October 22, 2024 Legacy Runtime EOL, if exempt by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/synthetics_broken_links_monitor#use_unsupported_legacy_runtime SyntheticsBrokenLinksMonitor#use_unsupported_legacy_runtime}

---

### SyntheticsBrokenLinksMonitorTag <a name="SyntheticsBrokenLinksMonitorTag" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTag.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new SyntheticsBrokenLinksMonitorTag {
    string Key,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTag.property.key">Key</a></code> | <code>string</code> | Name of the tag key. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTag.property.values">Values</a></code> | <code>string[]</code> | Values associated with the tag key. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTag.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Name of the tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/synthetics_broken_links_monitor#key SyntheticsBrokenLinksMonitor#key}

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTag.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Values associated with the tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/synthetics_broken_links_monitor#values SyntheticsBrokenLinksMonitor#values}

---

## Classes <a name="Classes" id="Classes"></a>

### SyntheticsBrokenLinksMonitorTagList <a name="SyntheticsBrokenLinksMonitorTagList" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new SyntheticsBrokenLinksMonitorTagList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.get"></a>

```csharp
private SyntheticsBrokenLinksMonitorTagOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SyntheticsBrokenLinksMonitorTagOutputReference <a name="SyntheticsBrokenLinksMonitorTagOutputReference" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new SyntheticsBrokenLinksMonitorTagOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



