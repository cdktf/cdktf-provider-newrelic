# `monitorDowntime` Submodule <a name="`monitorDowntime` Submodule" id="@cdktf/provider-newrelic.monitorDowntime"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitorDowntime <a name="MonitorDowntime" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/monitor_downtime newrelic_monitor_downtime}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new MonitorDowntime(Construct Scope, string Id, MonitorDowntimeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig">MonitorDowntimeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig">MonitorDowntimeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.putEndRepeat">PutEndRepeat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.putFrequency">PutFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetEndRepeat">ResetEndRepeat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetFrequency">ResetFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetMaintenanceDays">ResetMaintenanceDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetMonitorGuids">ResetMonitorGuids</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEndRepeat` <a name="PutEndRepeat" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.putEndRepeat"></a>

```csharp
private void PutEndRepeat(MonitorDowntimeEndRepeat Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.putEndRepeat.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeat">MonitorDowntimeEndRepeat</a>

---

##### `PutFrequency` <a name="PutFrequency" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.putFrequency"></a>

```csharp
private void PutFrequency(MonitorDowntimeFrequency Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.putFrequency.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequency">MonitorDowntimeFrequency</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetEndRepeat` <a name="ResetEndRepeat" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetEndRepeat"></a>

```csharp
private void ResetEndRepeat()
```

##### `ResetFrequency` <a name="ResetFrequency" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetFrequency"></a>

```csharp
private void ResetFrequency()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMaintenanceDays` <a name="ResetMaintenanceDays" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetMaintenanceDays"></a>

```csharp
private void ResetMaintenanceDays()
```

##### `ResetMonitorGuids` <a name="ResetMonitorGuids" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetMonitorGuids"></a>

```csharp
private void ResetMonitorGuids()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MonitorDowntime resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

MonitorDowntime.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

MonitorDowntime.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

MonitorDowntime.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

MonitorDowntime.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a MonitorDowntime resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MonitorDowntime to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MonitorDowntime that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/monitor_downtime#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the MonitorDowntime to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.endRepeat">EndRepeat</a></code> | <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference">MonitorDowntimeEndRepeatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.frequency">Frequency</a></code> | <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference">MonitorDowntimeFrequencyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.accountIdInput">AccountIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.endRepeatInput">EndRepeatInput</a></code> | <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeat">MonitorDowntimeEndRepeat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.endTimeInput">EndTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.frequencyInput">FrequencyInput</a></code> | <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequency">MonitorDowntimeFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.maintenanceDaysInput">MaintenanceDaysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.monitorGuidsInput">MonitorGuidsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.startTimeInput">StartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.timeZoneInput">TimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.accountId">AccountId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.maintenanceDays">MaintenanceDays</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.monitorGuids">MonitorGuids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `EndRepeat`<sup>Required</sup> <a name="EndRepeat" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.endRepeat"></a>

```csharp
public MonitorDowntimeEndRepeatOutputReference EndRepeat { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference">MonitorDowntimeEndRepeatOutputReference</a>

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.frequency"></a>

```csharp
public MonitorDowntimeFrequencyOutputReference Frequency { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference">MonitorDowntimeFrequencyOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.accountIdInput"></a>

```csharp
public double AccountIdInput { get; }
```

- *Type:* double

---

##### `EndRepeatInput`<sup>Optional</sup> <a name="EndRepeatInput" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.endRepeatInput"></a>

```csharp
public MonitorDowntimeEndRepeat EndRepeatInput { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeat">MonitorDowntimeEndRepeat</a>

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.endTimeInput"></a>

```csharp
public string EndTimeInput { get; }
```

- *Type:* string

---

##### `FrequencyInput`<sup>Optional</sup> <a name="FrequencyInput" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.frequencyInput"></a>

```csharp
public MonitorDowntimeFrequency FrequencyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequency">MonitorDowntimeFrequency</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MaintenanceDaysInput`<sup>Optional</sup> <a name="MaintenanceDaysInput" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.maintenanceDaysInput"></a>

```csharp
public string[] MaintenanceDaysInput { get; }
```

- *Type:* string[]

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `MonitorGuidsInput`<sup>Optional</sup> <a name="MonitorGuidsInput" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.monitorGuidsInput"></a>

```csharp
public string[] MonitorGuidsInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.startTimeInput"></a>

```csharp
public string StartTimeInput { get; }
```

- *Type:* string

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.timeZoneInput"></a>

```csharp
public string TimeZoneInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.accountId"></a>

```csharp
public double AccountId { get; }
```

- *Type:* double

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MaintenanceDays`<sup>Required</sup> <a name="MaintenanceDays" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.maintenanceDays"></a>

```csharp
public string[] MaintenanceDays { get; }
```

- *Type:* string[]

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `MonitorGuids`<sup>Required</sup> <a name="MonitorGuids" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.monitorGuids"></a>

```csharp
public string[] MonitorGuids { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MonitorDowntimeConfig <a name="MonitorDowntimeConfig" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new MonitorDowntimeConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string EndTime,
    string Mode,
    string Name,
    string StartTime,
    string TimeZone,
    double AccountId = null,
    MonitorDowntimeEndRepeat EndRepeat = null,
    MonitorDowntimeFrequency Frequency = null,
    string Id = null,
    string[] MaintenanceDays = null,
    string[] MonitorGuids = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.endTime">EndTime</a></code> | <code>string</code> | A datetime stamp signifying the end of the Monitor Downtime. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.mode">Mode</a></code> | <code>string</code> | An identifier of the type of Monitor Downtime to be created. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.name">Name</a></code> | <code>string</code> | A name to identify the Monitor Downtime to be created. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.startTime">StartTime</a></code> | <code>string</code> | A datetime stamp signifying the start of the Monitor Downtime. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.timeZone">TimeZone</a></code> | <code>string</code> | The timezone that applies to the Monitor Downtime schedule. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.accountId">AccountId</a></code> | <code>double</code> | The ID of the New Relic account in which the Monitor Downtime shall be created. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.endRepeat">EndRepeat</a></code> | <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeat">MonitorDowntimeEndRepeat</a></code> | end_repeat block. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.frequency">Frequency</a></code> | <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequency">MonitorDowntimeFrequency</a></code> | frequency block. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/monitor_downtime#id MonitorDowntime#id}. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.maintenanceDays">MaintenanceDays</a></code> | <code>string[]</code> | A list of maintenance days to be included with the created weekly Monitor Downtime. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.monitorGuids">MonitorGuids</a></code> | <code>string[]</code> | A list of GUIDs of monitors, to which the created Monitor Downtime shall be applied. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.endTime"></a>

```csharp
public string EndTime { get; set; }
```

- *Type:* string

A datetime stamp signifying the end of the Monitor Downtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/monitor_downtime#end_time MonitorDowntime#end_time}

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

An identifier of the type of Monitor Downtime to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/monitor_downtime#mode MonitorDowntime#mode}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A name to identify the Monitor Downtime to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/monitor_downtime#name MonitorDowntime#name}

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.startTime"></a>

```csharp
public string StartTime { get; set; }
```

- *Type:* string

A datetime stamp signifying the start of the Monitor Downtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/monitor_downtime#start_time MonitorDowntime#start_time}

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.timeZone"></a>

```csharp
public string TimeZone { get; set; }
```

- *Type:* string

The timezone that applies to the Monitor Downtime schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/monitor_downtime#time_zone MonitorDowntime#time_zone}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.accountId"></a>

```csharp
public double AccountId { get; set; }
```

- *Type:* double

The ID of the New Relic account in which the Monitor Downtime shall be created.

Defaults to the `account_id` in the provider{} configuration if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/monitor_downtime#account_id MonitorDowntime#account_id}

---

##### `EndRepeat`<sup>Optional</sup> <a name="EndRepeat" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.endRepeat"></a>

```csharp
public MonitorDowntimeEndRepeat EndRepeat { get; set; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeat">MonitorDowntimeEndRepeat</a>

end_repeat block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/monitor_downtime#end_repeat MonitorDowntime#end_repeat}

---

##### `Frequency`<sup>Optional</sup> <a name="Frequency" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.frequency"></a>

```csharp
public MonitorDowntimeFrequency Frequency { get; set; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequency">MonitorDowntimeFrequency</a>

frequency block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/monitor_downtime#frequency MonitorDowntime#frequency}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/monitor_downtime#id MonitorDowntime#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaintenanceDays`<sup>Optional</sup> <a name="MaintenanceDays" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.maintenanceDays"></a>

```csharp
public string[] MaintenanceDays { get; set; }
```

- *Type:* string[]

A list of maintenance days to be included with the created weekly Monitor Downtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/monitor_downtime#maintenance_days MonitorDowntime#maintenance_days}

---

##### `MonitorGuids`<sup>Optional</sup> <a name="MonitorGuids" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.monitorGuids"></a>

```csharp
public string[] MonitorGuids { get; set; }
```

- *Type:* string[]

A list of GUIDs of monitors, to which the created Monitor Downtime shall be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/monitor_downtime#monitor_guids MonitorDowntime#monitor_guids}

---

### MonitorDowntimeEndRepeat <a name="MonitorDowntimeEndRepeat" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeat.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new MonitorDowntimeEndRepeat {
    string OnDate = null,
    double OnRepeat = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeat.property.onDate">OnDate</a></code> | <code>string</code> | A date, on which the Monitor Downtime's repeat cycle is expected to end. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeat.property.onRepeat">OnRepeat</a></code> | <code>double</code> | Number of repetitions after which the Monitor Downtime's repeat cycle is expected to end. |

---

##### `OnDate`<sup>Optional</sup> <a name="OnDate" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeat.property.onDate"></a>

```csharp
public string OnDate { get; set; }
```

- *Type:* string

A date, on which the Monitor Downtime's repeat cycle is expected to end.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/monitor_downtime#on_date MonitorDowntime#on_date}

---

##### `OnRepeat`<sup>Optional</sup> <a name="OnRepeat" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeat.property.onRepeat"></a>

```csharp
public double OnRepeat { get; set; }
```

- *Type:* double

Number of repetitions after which the Monitor Downtime's repeat cycle is expected to end.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/monitor_downtime#on_repeat MonitorDowntime#on_repeat}

---

### MonitorDowntimeFrequency <a name="MonitorDowntimeFrequency" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequency"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequency.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new MonitorDowntimeFrequency {
    double[] DaysOfMonth = null,
    MonitorDowntimeFrequencyDaysOfWeek DaysOfWeek = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequency.property.daysOfMonth">DaysOfMonth</a></code> | <code>double[]</code> | A numerical list of days of a month on which the Monitor Downtime is scheduled to run. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequency.property.daysOfWeek">DaysOfWeek</a></code> | <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeek">MonitorDowntimeFrequencyDaysOfWeek</a></code> | days_of_week block. |

---

##### `DaysOfMonth`<sup>Optional</sup> <a name="DaysOfMonth" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequency.property.daysOfMonth"></a>

```csharp
public double[] DaysOfMonth { get; set; }
```

- *Type:* double[]

A numerical list of days of a month on which the Monitor Downtime is scheduled to run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/monitor_downtime#days_of_month MonitorDowntime#days_of_month}

---

##### `DaysOfWeek`<sup>Optional</sup> <a name="DaysOfWeek" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequency.property.daysOfWeek"></a>

```csharp
public MonitorDowntimeFrequencyDaysOfWeek DaysOfWeek { get; set; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeek">MonitorDowntimeFrequencyDaysOfWeek</a>

days_of_week block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/monitor_downtime#days_of_week MonitorDowntime#days_of_week}

---

### MonitorDowntimeFrequencyDaysOfWeek <a name="MonitorDowntimeFrequencyDaysOfWeek" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeek"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeek.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new MonitorDowntimeFrequencyDaysOfWeek {
    string OrdinalDayOfMonth,
    string WeekDay
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeek.property.ordinalDayOfMonth">OrdinalDayOfMonth</a></code> | <code>string</code> | An occurrence of the day selected within the month. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeek.property.weekDay">WeekDay</a></code> | <code>string</code> | The day of the week on which the Monitor Downtime would run. |

---

##### `OrdinalDayOfMonth`<sup>Required</sup> <a name="OrdinalDayOfMonth" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeek.property.ordinalDayOfMonth"></a>

```csharp
public string OrdinalDayOfMonth { get; set; }
```

- *Type:* string

An occurrence of the day selected within the month.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/monitor_downtime#ordinal_day_of_month MonitorDowntime#ordinal_day_of_month}

---

##### `WeekDay`<sup>Required</sup> <a name="WeekDay" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeek.property.weekDay"></a>

```csharp
public string WeekDay { get; set; }
```

- *Type:* string

The day of the week on which the Monitor Downtime would run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/monitor_downtime#week_day MonitorDowntime#week_day}

---

## Classes <a name="Classes" id="Classes"></a>

### MonitorDowntimeEndRepeatOutputReference <a name="MonitorDowntimeEndRepeatOutputReference" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new MonitorDowntimeEndRepeatOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.resetOnDate">ResetOnDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.resetOnRepeat">ResetOnRepeat</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOnDate` <a name="ResetOnDate" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.resetOnDate"></a>

```csharp
private void ResetOnDate()
```

##### `ResetOnRepeat` <a name="ResetOnRepeat" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.resetOnRepeat"></a>

```csharp
private void ResetOnRepeat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.onDateInput">OnDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.onRepeatInput">OnRepeatInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.onDate">OnDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.onRepeat">OnRepeat</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeat">MonitorDowntimeEndRepeat</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OnDateInput`<sup>Optional</sup> <a name="OnDateInput" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.onDateInput"></a>

```csharp
public string OnDateInput { get; }
```

- *Type:* string

---

##### `OnRepeatInput`<sup>Optional</sup> <a name="OnRepeatInput" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.onRepeatInput"></a>

```csharp
public double OnRepeatInput { get; }
```

- *Type:* double

---

##### `OnDate`<sup>Required</sup> <a name="OnDate" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.onDate"></a>

```csharp
public string OnDate { get; }
```

- *Type:* string

---

##### `OnRepeat`<sup>Required</sup> <a name="OnRepeat" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.onRepeat"></a>

```csharp
public double OnRepeat { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.internalValue"></a>

```csharp
public MonitorDowntimeEndRepeat InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeat">MonitorDowntimeEndRepeat</a>

---


### MonitorDowntimeFrequencyDaysOfWeekOutputReference <a name="MonitorDowntimeFrequencyDaysOfWeekOutputReference" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new MonitorDowntimeFrequencyDaysOfWeekOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.ordinalDayOfMonthInput">OrdinalDayOfMonthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.weekDayInput">WeekDayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.ordinalDayOfMonth">OrdinalDayOfMonth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.weekDay">WeekDay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeek">MonitorDowntimeFrequencyDaysOfWeek</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OrdinalDayOfMonthInput`<sup>Optional</sup> <a name="OrdinalDayOfMonthInput" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.ordinalDayOfMonthInput"></a>

```csharp
public string OrdinalDayOfMonthInput { get; }
```

- *Type:* string

---

##### `WeekDayInput`<sup>Optional</sup> <a name="WeekDayInput" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.weekDayInput"></a>

```csharp
public string WeekDayInput { get; }
```

- *Type:* string

---

##### `OrdinalDayOfMonth`<sup>Required</sup> <a name="OrdinalDayOfMonth" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.ordinalDayOfMonth"></a>

```csharp
public string OrdinalDayOfMonth { get; }
```

- *Type:* string

---

##### `WeekDay`<sup>Required</sup> <a name="WeekDay" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.weekDay"></a>

```csharp
public string WeekDay { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.internalValue"></a>

```csharp
public MonitorDowntimeFrequencyDaysOfWeek InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeek">MonitorDowntimeFrequencyDaysOfWeek</a>

---


### MonitorDowntimeFrequencyOutputReference <a name="MonitorDowntimeFrequencyOutputReference" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new MonitorDowntimeFrequencyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.putDaysOfWeek">PutDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.resetDaysOfMonth">ResetDaysOfMonth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.resetDaysOfWeek">ResetDaysOfWeek</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDaysOfWeek` <a name="PutDaysOfWeek" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.putDaysOfWeek"></a>

```csharp
private void PutDaysOfWeek(MonitorDowntimeFrequencyDaysOfWeek Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.putDaysOfWeek.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeek">MonitorDowntimeFrequencyDaysOfWeek</a>

---

##### `ResetDaysOfMonth` <a name="ResetDaysOfMonth" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.resetDaysOfMonth"></a>

```csharp
private void ResetDaysOfMonth()
```

##### `ResetDaysOfWeek` <a name="ResetDaysOfWeek" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.resetDaysOfWeek"></a>

```csharp
private void ResetDaysOfWeek()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.daysOfWeek">DaysOfWeek</a></code> | <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference">MonitorDowntimeFrequencyDaysOfWeekOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.daysOfMonthInput">DaysOfMonthInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.daysOfWeekInput">DaysOfWeekInput</a></code> | <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeek">MonitorDowntimeFrequencyDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.daysOfMonth">DaysOfMonth</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequency">MonitorDowntimeFrequency</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.daysOfWeek"></a>

```csharp
public MonitorDowntimeFrequencyDaysOfWeekOutputReference DaysOfWeek { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference">MonitorDowntimeFrequencyDaysOfWeekOutputReference</a>

---

##### `DaysOfMonthInput`<sup>Optional</sup> <a name="DaysOfMonthInput" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.daysOfMonthInput"></a>

```csharp
public double[] DaysOfMonthInput { get; }
```

- *Type:* double[]

---

##### `DaysOfWeekInput`<sup>Optional</sup> <a name="DaysOfWeekInput" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.daysOfWeekInput"></a>

```csharp
public MonitorDowntimeFrequencyDaysOfWeek DaysOfWeekInput { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeek">MonitorDowntimeFrequencyDaysOfWeek</a>

---

##### `DaysOfMonth`<sup>Required</sup> <a name="DaysOfMonth" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.daysOfMonth"></a>

```csharp
public double[] DaysOfMonth { get; }
```

- *Type:* double[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.internalValue"></a>

```csharp
public MonitorDowntimeFrequency InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequency">MonitorDowntimeFrequency</a>

---



