# `alertCondition` Submodule <a name="`alertCondition` Submodule" id="@cdktf/provider-newrelic.alertCondition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AlertCondition <a name="AlertCondition" id="@cdktf/provider-newrelic.alertCondition.AlertCondition"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/alert_condition newrelic_alert_condition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new AlertCondition(Construct Scope, string Id, AlertConditionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig">AlertConditionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig">AlertConditionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.putTerm">PutTerm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.resetConditionScope">ResetConditionScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.resetGcMetric">ResetGcMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.resetRunbookUrl">ResetRunbookUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.resetUserDefinedMetric">ResetUserDefinedMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.resetUserDefinedValueFunction">ResetUserDefinedValueFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.resetViolationCloseTimer">ResetViolationCloseTimer</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTerm` <a name="PutTerm" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.putTerm"></a>

```csharp
private void PutTerm(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.putTerm.parameter.value"></a>

- *Type:* object

---

##### `ResetConditionScope` <a name="ResetConditionScope" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.resetConditionScope"></a>

```csharp
private void ResetConditionScope()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetGcMetric` <a name="ResetGcMetric" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.resetGcMetric"></a>

```csharp
private void ResetGcMetric()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRunbookUrl` <a name="ResetRunbookUrl" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.resetRunbookUrl"></a>

```csharp
private void ResetRunbookUrl()
```

##### `ResetUserDefinedMetric` <a name="ResetUserDefinedMetric" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.resetUserDefinedMetric"></a>

```csharp
private void ResetUserDefinedMetric()
```

##### `ResetUserDefinedValueFunction` <a name="ResetUserDefinedValueFunction" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.resetUserDefinedValueFunction"></a>

```csharp
private void ResetUserDefinedValueFunction()
```

##### `ResetViolationCloseTimer` <a name="ResetViolationCloseTimer" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.resetViolationCloseTimer"></a>

```csharp
private void ResetViolationCloseTimer()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AlertCondition resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

AlertCondition.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

AlertCondition.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

AlertCondition.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

AlertCondition.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AlertCondition resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AlertCondition to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AlertCondition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/alert_condition#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AlertCondition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.entityGuid">EntityGuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.term">Term</a></code> | <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermList">AlertConditionTermList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.conditionScopeInput">ConditionScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.entitiesInput">EntitiesInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.gcMetricInput">GcMetricInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.metricInput">MetricInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.policyIdInput">PolicyIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.runbookUrlInput">RunbookUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.termInput">TermInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.userDefinedMetricInput">UserDefinedMetricInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.userDefinedValueFunctionInput">UserDefinedValueFunctionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.violationCloseTimerInput">ViolationCloseTimerInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.conditionScope">ConditionScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.entities">Entities</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.gcMetric">GcMetric</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.metric">Metric</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.policyId">PolicyId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.runbookUrl">RunbookUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.userDefinedMetric">UserDefinedMetric</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.userDefinedValueFunction">UserDefinedValueFunction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.violationCloseTimer">ViolationCloseTimer</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `EntityGuid`<sup>Required</sup> <a name="EntityGuid" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.entityGuid"></a>

```csharp
public string EntityGuid { get; }
```

- *Type:* string

---

##### `Term`<sup>Required</sup> <a name="Term" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.term"></a>

```csharp
public AlertConditionTermList Term { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermList">AlertConditionTermList</a>

---

##### `ConditionScopeInput`<sup>Optional</sup> <a name="ConditionScopeInput" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.conditionScopeInput"></a>

```csharp
public string ConditionScopeInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `EntitiesInput`<sup>Optional</sup> <a name="EntitiesInput" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.entitiesInput"></a>

```csharp
public double[] EntitiesInput { get; }
```

- *Type:* double[]

---

##### `GcMetricInput`<sup>Optional</sup> <a name="GcMetricInput" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.gcMetricInput"></a>

```csharp
public string GcMetricInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MetricInput`<sup>Optional</sup> <a name="MetricInput" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.metricInput"></a>

```csharp
public string MetricInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.policyIdInput"></a>

```csharp
public double PolicyIdInput { get; }
```

- *Type:* double

---

##### `RunbookUrlInput`<sup>Optional</sup> <a name="RunbookUrlInput" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.runbookUrlInput"></a>

```csharp
public string RunbookUrlInput { get; }
```

- *Type:* string

---

##### `TermInput`<sup>Optional</sup> <a name="TermInput" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.termInput"></a>

```csharp
public object TermInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UserDefinedMetricInput`<sup>Optional</sup> <a name="UserDefinedMetricInput" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.userDefinedMetricInput"></a>

```csharp
public string UserDefinedMetricInput { get; }
```

- *Type:* string

---

##### `UserDefinedValueFunctionInput`<sup>Optional</sup> <a name="UserDefinedValueFunctionInput" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.userDefinedValueFunctionInput"></a>

```csharp
public string UserDefinedValueFunctionInput { get; }
```

- *Type:* string

---

##### `ViolationCloseTimerInput`<sup>Optional</sup> <a name="ViolationCloseTimerInput" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.violationCloseTimerInput"></a>

```csharp
public double ViolationCloseTimerInput { get; }
```

- *Type:* double

---

##### `ConditionScope`<sup>Required</sup> <a name="ConditionScope" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.conditionScope"></a>

```csharp
public string ConditionScope { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Entities`<sup>Required</sup> <a name="Entities" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.entities"></a>

```csharp
public double[] Entities { get; }
```

- *Type:* double[]

---

##### `GcMetric`<sup>Required</sup> <a name="GcMetric" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.gcMetric"></a>

```csharp
public string GcMetric { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.metric"></a>

```csharp
public string Metric { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.policyId"></a>

```csharp
public double PolicyId { get; }
```

- *Type:* double

---

##### `RunbookUrl`<sup>Required</sup> <a name="RunbookUrl" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.runbookUrl"></a>

```csharp
public string RunbookUrl { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UserDefinedMetric`<sup>Required</sup> <a name="UserDefinedMetric" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.userDefinedMetric"></a>

```csharp
public string UserDefinedMetric { get; }
```

- *Type:* string

---

##### `UserDefinedValueFunction`<sup>Required</sup> <a name="UserDefinedValueFunction" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.userDefinedValueFunction"></a>

```csharp
public string UserDefinedValueFunction { get; }
```

- *Type:* string

---

##### `ViolationCloseTimer`<sup>Required</sup> <a name="ViolationCloseTimer" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.violationCloseTimer"></a>

```csharp
public double ViolationCloseTimer { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AlertConditionConfig <a name="AlertConditionConfig" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new AlertConditionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    double[] Entities,
    string Metric,
    string Name,
    double PolicyId,
    object Term,
    string Type,
    string ConditionScope = null,
    object Enabled = null,
    string GcMetric = null,
    string Id = null,
    string RunbookUrl = null,
    string UserDefinedMetric = null,
    string UserDefinedValueFunction = null,
    double ViolationCloseTimer = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.entities">Entities</a></code> | <code>double[]</code> | The instance IDs associated with this condition. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.metric">Metric</a></code> | <code>string</code> | The metric field accepts parameters based on the type set. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.name">Name</a></code> | <code>string</code> | The title of the condition. Must be between 1 and 128 characters, inclusive. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.policyId">PolicyId</a></code> | <code>double</code> | The ID of the policy where this condition should be used. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.term">Term</a></code> | <code>object</code> | term block. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.type">Type</a></code> | <code>string</code> | The type of condition. One of: (apm_app_metric, apm_jvm_metric, apm_kt_metric, browser_metric, mobile_metric, servers_metric). |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.conditionScope">ConditionScope</a></code> | <code>string</code> | One of (application, instance). |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.enabled">Enabled</a></code> | <code>object</code> | Whether the condition is enabled. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.gcMetric">GcMetric</a></code> | <code>string</code> | A valid Garbage Collection metric e.g. GC/G1 Young Generation. This is required if you are using apm_jvm_metric with gc_cpu_time condition type. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/alert_condition#id AlertCondition#id}. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.runbookUrl">RunbookUrl</a></code> | <code>string</code> | Runbook URL to display in notifications. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.userDefinedMetric">UserDefinedMetric</a></code> | <code>string</code> | A custom metric to be evaluated. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.userDefinedValueFunction">UserDefinedValueFunction</a></code> | <code>string</code> | One of: (average, min, max, total, sample_size, percent, rate). |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.violationCloseTimer">ViolationCloseTimer</a></code> | <code>double</code> | Automatically close instance-based incidents, including JVM health metric incidents, after the number of hours specified. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Entities`<sup>Required</sup> <a name="Entities" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.entities"></a>

```csharp
public double[] Entities { get; set; }
```

- *Type:* double[]

The instance IDs associated with this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/alert_condition#entities AlertCondition#entities}

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.metric"></a>

```csharp
public string Metric { get; set; }
```

- *Type:* string

The metric field accepts parameters based on the type set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/alert_condition#metric AlertCondition#metric}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The title of the condition. Must be between 1 and 128 characters, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/alert_condition#name AlertCondition#name}

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.policyId"></a>

```csharp
public double PolicyId { get; set; }
```

- *Type:* double

The ID of the policy where this condition should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/alert_condition#policy_id AlertCondition#policy_id}

---

##### `Term`<sup>Required</sup> <a name="Term" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.term"></a>

```csharp
public object Term { get; set; }
```

- *Type:* object

term block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/alert_condition#term AlertCondition#term}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of condition. One of: (apm_app_metric, apm_jvm_metric, apm_kt_metric, browser_metric, mobile_metric, servers_metric).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/alert_condition#type AlertCondition#type}

---

##### `ConditionScope`<sup>Optional</sup> <a name="ConditionScope" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.conditionScope"></a>

```csharp
public string ConditionScope { get; set; }
```

- *Type:* string

One of (application, instance).

Choose application for most scenarios. If you are using the JVM plugin in New Relic, the instance setting allows your condition to trigger for specific app instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/alert_condition#condition_scope AlertCondition#condition_scope}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Whether the condition is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/alert_condition#enabled AlertCondition#enabled}

---

##### `GcMetric`<sup>Optional</sup> <a name="GcMetric" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.gcMetric"></a>

```csharp
public string GcMetric { get; set; }
```

- *Type:* string

A valid Garbage Collection metric e.g. GC/G1 Young Generation. This is required if you are using apm_jvm_metric with gc_cpu_time condition type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/alert_condition#gc_metric AlertCondition#gc_metric}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/alert_condition#id AlertCondition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RunbookUrl`<sup>Optional</sup> <a name="RunbookUrl" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.runbookUrl"></a>

```csharp
public string RunbookUrl { get; set; }
```

- *Type:* string

Runbook URL to display in notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/alert_condition#runbook_url AlertCondition#runbook_url}

---

##### `UserDefinedMetric`<sup>Optional</sup> <a name="UserDefinedMetric" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.userDefinedMetric"></a>

```csharp
public string UserDefinedMetric { get; set; }
```

- *Type:* string

A custom metric to be evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/alert_condition#user_defined_metric AlertCondition#user_defined_metric}

---

##### `UserDefinedValueFunction`<sup>Optional</sup> <a name="UserDefinedValueFunction" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.userDefinedValueFunction"></a>

```csharp
public string UserDefinedValueFunction { get; set; }
```

- *Type:* string

One of: (average, min, max, total, sample_size, percent, rate).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/alert_condition#user_defined_value_function AlertCondition#user_defined_value_function}

---

##### `ViolationCloseTimer`<sup>Optional</sup> <a name="ViolationCloseTimer" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.violationCloseTimer"></a>

```csharp
public double ViolationCloseTimer { get; set; }
```

- *Type:* double

Automatically close instance-based incidents, including JVM health metric incidents, after the number of hours specified.

Must be between 1 and 720 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/alert_condition#violation_close_timer AlertCondition#violation_close_timer}

---

### AlertConditionTerm <a name="AlertConditionTerm" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTerm"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTerm.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new AlertConditionTerm {
    double Duration,
    double Threshold,
    string TimeFunction,
    string Operator = null,
    string Priority = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTerm.property.duration">Duration</a></code> | <code>double</code> | In minutes, must be in the range of 5 to 120, inclusive. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTerm.property.threshold">Threshold</a></code> | <code>double</code> | Must be 0 or greater. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTerm.property.timeFunction">TimeFunction</a></code> | <code>string</code> | One of (all, any). |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTerm.property.operator">Operator</a></code> | <code>string</code> | One of (above, below, equal). Defaults to equal. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTerm.property.priority">Priority</a></code> | <code>string</code> | One of (critical, warning). Defaults to critical. |

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTerm.property.duration"></a>

```csharp
public double Duration { get; set; }
```

- *Type:* double

In minutes, must be in the range of 5 to 120, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/alert_condition#duration AlertCondition#duration}

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTerm.property.threshold"></a>

```csharp
public double Threshold { get; set; }
```

- *Type:* double

Must be 0 or greater.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/alert_condition#threshold AlertCondition#threshold}

---

##### `TimeFunction`<sup>Required</sup> <a name="TimeFunction" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTerm.property.timeFunction"></a>

```csharp
public string TimeFunction { get; set; }
```

- *Type:* string

One of (all, any).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/alert_condition#time_function AlertCondition#time_function}

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTerm.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

One of (above, below, equal). Defaults to equal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/alert_condition#operator AlertCondition#operator}

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTerm.property.priority"></a>

```csharp
public string Priority { get; set; }
```

- *Type:* string

One of (critical, warning). Defaults to critical.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/alert_condition#priority AlertCondition#priority}

---

## Classes <a name="Classes" id="Classes"></a>

### AlertConditionTermList <a name="AlertConditionTermList" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new AlertConditionTermList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.get"></a>

```csharp
private AlertConditionTermOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AlertConditionTermOutputReference <a name="AlertConditionTermOutputReference" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new AlertConditionTermOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.resetPriority">ResetPriority</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.resetOperator"></a>

```csharp
private void ResetOperator()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.resetPriority"></a>

```csharp
private void ResetPriority()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.durationInput">DurationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.priorityInput">PriorityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.timeFunctionInput">TimeFunctionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.duration">Duration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.priority">Priority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.threshold">Threshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.timeFunction">TimeFunction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.durationInput"></a>

```csharp
public double DurationInput { get; }
```

- *Type:* double

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.priorityInput"></a>

```csharp
public string PriorityInput { get; }
```

- *Type:* string

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.thresholdInput"></a>

```csharp
public double ThresholdInput { get; }
```

- *Type:* double

---

##### `TimeFunctionInput`<sup>Optional</sup> <a name="TimeFunctionInput" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.timeFunctionInput"></a>

```csharp
public string TimeFunctionInput { get; }
```

- *Type:* string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.duration"></a>

```csharp
public double Duration { get; }
```

- *Type:* double

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.priority"></a>

```csharp
public string Priority { get; }
```

- *Type:* string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.threshold"></a>

```csharp
public double Threshold { get; }
```

- *Type:* double

---

##### `TimeFunction`<sup>Required</sup> <a name="TimeFunction" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.timeFunction"></a>

```csharp
public string TimeFunction { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



