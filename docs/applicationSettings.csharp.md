# `applicationSettings` Submodule <a name="`applicationSettings` Submodule" id="@cdktf/provider-newrelic.applicationSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationSettings <a name="ApplicationSettings" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/application_settings newrelic_application_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new ApplicationSettings(Construct Scope, string Id, ApplicationSettingsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig">ApplicationSettingsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig">ApplicationSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.putErrorCollector">PutErrorCollector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.putTransactionTracer">PutTransactionTracer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetAppApdexThreshold">ResetAppApdexThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetEnableRealUserMonitoring">ResetEnableRealUserMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetEnableSlowSql">ResetEnableSlowSql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetEnableThreadProfiler">ResetEnableThreadProfiler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetEndUserApdexThreshold">ResetEndUserApdexThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetErrorCollector">ResetErrorCollector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetGuid">ResetGuid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetTracerType">ResetTracerType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetTransactionTracer">ResetTransactionTracer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetUseServerSideConfig">ResetUseServerSideConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutErrorCollector` <a name="PutErrorCollector" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.putErrorCollector"></a>

```csharp
private void PutErrorCollector(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.putErrorCollector.parameter.value"></a>

- *Type:* object

---

##### `PutTransactionTracer` <a name="PutTransactionTracer" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.putTransactionTracer"></a>

```csharp
private void PutTransactionTracer(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.putTransactionTracer.parameter.value"></a>

- *Type:* object

---

##### `ResetAppApdexThreshold` <a name="ResetAppApdexThreshold" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetAppApdexThreshold"></a>

```csharp
private void ResetAppApdexThreshold()
```

##### `ResetEnableRealUserMonitoring` <a name="ResetEnableRealUserMonitoring" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetEnableRealUserMonitoring"></a>

```csharp
private void ResetEnableRealUserMonitoring()
```

##### `ResetEnableSlowSql` <a name="ResetEnableSlowSql" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetEnableSlowSql"></a>

```csharp
private void ResetEnableSlowSql()
```

##### `ResetEnableThreadProfiler` <a name="ResetEnableThreadProfiler" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetEnableThreadProfiler"></a>

```csharp
private void ResetEnableThreadProfiler()
```

##### `ResetEndUserApdexThreshold` <a name="ResetEndUserApdexThreshold" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetEndUserApdexThreshold"></a>

```csharp
private void ResetEndUserApdexThreshold()
```

##### `ResetErrorCollector` <a name="ResetErrorCollector" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetErrorCollector"></a>

```csharp
private void ResetErrorCollector()
```

##### `ResetGuid` <a name="ResetGuid" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetGuid"></a>

```csharp
private void ResetGuid()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetTracerType` <a name="ResetTracerType" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetTracerType"></a>

```csharp
private void ResetTracerType()
```

##### `ResetTransactionTracer` <a name="ResetTransactionTracer" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetTransactionTracer"></a>

```csharp
private void ResetTransactionTracer()
```

##### `ResetUseServerSideConfig` <a name="ResetUseServerSideConfig" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetUseServerSideConfig"></a>

```csharp
private void ResetUseServerSideConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApplicationSettings resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

ApplicationSettings.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

ApplicationSettings.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

ApplicationSettings.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

ApplicationSettings.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ApplicationSettings resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApplicationSettings to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApplicationSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/application_settings#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ApplicationSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.errorCollector">ErrorCollector</a></code> | <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList">ApplicationSettingsErrorCollectorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.isImported">IsImported</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.transactionTracer">TransactionTracer</a></code> | <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList">ApplicationSettingsTransactionTracerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.appApdexThresholdInput">AppApdexThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.enableRealUserMonitoringInput">EnableRealUserMonitoringInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.enableSlowSqlInput">EnableSlowSqlInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.enableThreadProfilerInput">EnableThreadProfilerInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.endUserApdexThresholdInput">EndUserApdexThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.errorCollectorInput">ErrorCollectorInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.guidInput">GuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.tracerTypeInput">TracerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.transactionTracerInput">TransactionTracerInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.useServerSideConfigInput">UseServerSideConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.appApdexThreshold">AppApdexThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.enableRealUserMonitoring">EnableRealUserMonitoring</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.enableSlowSql">EnableSlowSql</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.enableThreadProfiler">EnableThreadProfiler</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.endUserApdexThreshold">EndUserApdexThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.guid">Guid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.tracerType">TracerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.useServerSideConfig">UseServerSideConfig</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ErrorCollector`<sup>Required</sup> <a name="ErrorCollector" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.errorCollector"></a>

```csharp
public ApplicationSettingsErrorCollectorList ErrorCollector { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList">ApplicationSettingsErrorCollectorList</a>

---

##### `IsImported`<sup>Required</sup> <a name="IsImported" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.isImported"></a>

```csharp
public IResolvable IsImported { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `TransactionTracer`<sup>Required</sup> <a name="TransactionTracer" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.transactionTracer"></a>

```csharp
public ApplicationSettingsTransactionTracerList TransactionTracer { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList">ApplicationSettingsTransactionTracerList</a>

---

##### `AppApdexThresholdInput`<sup>Optional</sup> <a name="AppApdexThresholdInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.appApdexThresholdInput"></a>

```csharp
public double AppApdexThresholdInput { get; }
```

- *Type:* double

---

##### `EnableRealUserMonitoringInput`<sup>Optional</sup> <a name="EnableRealUserMonitoringInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.enableRealUserMonitoringInput"></a>

```csharp
public object EnableRealUserMonitoringInput { get; }
```

- *Type:* object

---

##### `EnableSlowSqlInput`<sup>Optional</sup> <a name="EnableSlowSqlInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.enableSlowSqlInput"></a>

```csharp
public object EnableSlowSqlInput { get; }
```

- *Type:* object

---

##### `EnableThreadProfilerInput`<sup>Optional</sup> <a name="EnableThreadProfilerInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.enableThreadProfilerInput"></a>

```csharp
public object EnableThreadProfilerInput { get; }
```

- *Type:* object

---

##### `EndUserApdexThresholdInput`<sup>Optional</sup> <a name="EndUserApdexThresholdInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.endUserApdexThresholdInput"></a>

```csharp
public double EndUserApdexThresholdInput { get; }
```

- *Type:* double

---

##### `ErrorCollectorInput`<sup>Optional</sup> <a name="ErrorCollectorInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.errorCollectorInput"></a>

```csharp
public object ErrorCollectorInput { get; }
```

- *Type:* object

---

##### `GuidInput`<sup>Optional</sup> <a name="GuidInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.guidInput"></a>

```csharp
public string GuidInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TracerTypeInput`<sup>Optional</sup> <a name="TracerTypeInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.tracerTypeInput"></a>

```csharp
public string TracerTypeInput { get; }
```

- *Type:* string

---

##### `TransactionTracerInput`<sup>Optional</sup> <a name="TransactionTracerInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.transactionTracerInput"></a>

```csharp
public object TransactionTracerInput { get; }
```

- *Type:* object

---

##### `UseServerSideConfigInput`<sup>Optional</sup> <a name="UseServerSideConfigInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.useServerSideConfigInput"></a>

```csharp
public object UseServerSideConfigInput { get; }
```

- *Type:* object

---

##### `AppApdexThreshold`<sup>Required</sup> <a name="AppApdexThreshold" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.appApdexThreshold"></a>

```csharp
public double AppApdexThreshold { get; }
```

- *Type:* double

---

##### `EnableRealUserMonitoring`<sup>Required</sup> <a name="EnableRealUserMonitoring" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.enableRealUserMonitoring"></a>

```csharp
public object EnableRealUserMonitoring { get; }
```

- *Type:* object

---

##### `EnableSlowSql`<sup>Required</sup> <a name="EnableSlowSql" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.enableSlowSql"></a>

```csharp
public object EnableSlowSql { get; }
```

- *Type:* object

---

##### `EnableThreadProfiler`<sup>Required</sup> <a name="EnableThreadProfiler" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.enableThreadProfiler"></a>

```csharp
public object EnableThreadProfiler { get; }
```

- *Type:* object

---

##### `EndUserApdexThreshold`<sup>Required</sup> <a name="EndUserApdexThreshold" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.endUserApdexThreshold"></a>

```csharp
public double EndUserApdexThreshold { get; }
```

- *Type:* double

---

##### `Guid`<sup>Required</sup> <a name="Guid" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.guid"></a>

```csharp
public string Guid { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TracerType`<sup>Required</sup> <a name="TracerType" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.tracerType"></a>

```csharp
public string TracerType { get; }
```

- *Type:* string

---

##### `UseServerSideConfig`<sup>Required</sup> <a name="UseServerSideConfig" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.useServerSideConfig"></a>

```csharp
public object UseServerSideConfig { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationSettingsConfig <a name="ApplicationSettingsConfig" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new ApplicationSettingsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    double AppApdexThreshold = null,
    object EnableRealUserMonitoring = null,
    object EnableSlowSql = null,
    object EnableThreadProfiler = null,
    double EndUserApdexThreshold = null,
    object ErrorCollector = null,
    string Guid = null,
    string Id = null,
    string Name = null,
    string TracerType = null,
    object TransactionTracer = null,
    object UseServerSideConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.appApdexThreshold">AppApdexThreshold</a></code> | <code>double</code> | The response time threshold value for Apdex score calculation. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.enableRealUserMonitoring">EnableRealUserMonitoring</a></code> | <code>object</code> | Dummy field to support backward compatibility of previous version.should be removed with next major version. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.enableSlowSql">EnableSlowSql</a></code> | <code>object</code> | Samples and reports the slowest database queries in your traces. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.enableThreadProfiler">EnableThreadProfiler</a></code> | <code>object</code> | Enable or disable the thread profiler. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.endUserApdexThreshold">EndUserApdexThreshold</a></code> | <code>double</code> | Dummy field to support backward compatibility of previous version.should be removed with next major version. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.errorCollector">ErrorCollector</a></code> | <code>object</code> | error_collector block. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.guid">Guid</a></code> | <code>string</code> | The GUID of the application in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/application_settings#id ApplicationSettings#id}. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.name">Name</a></code> | <code>string</code> | The name of the application in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.tracerType">TracerType</a></code> | <code>string</code> | The type of tracer to use, either 'CROSS_APPLICATION_TRACER', 'DISTRIBUTED_TRACING', 'NONE', or 'OPT_OUT'. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.transactionTracer">TransactionTracer</a></code> | <code>object</code> | transaction_tracer block. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.useServerSideConfig">UseServerSideConfig</a></code> | <code>object</code> | Enable or disable server side monitoring. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AppApdexThreshold`<sup>Optional</sup> <a name="AppApdexThreshold" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.appApdexThreshold"></a>

```csharp
public double AppApdexThreshold { get; set; }
```

- *Type:* double

The response time threshold value for Apdex score calculation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/application_settings#app_apdex_threshold ApplicationSettings#app_apdex_threshold}

---

##### `EnableRealUserMonitoring`<sup>Optional</sup> <a name="EnableRealUserMonitoring" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.enableRealUserMonitoring"></a>

```csharp
public object EnableRealUserMonitoring { get; set; }
```

- *Type:* object

Dummy field to support backward compatibility of previous version.should be removed with next major version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/application_settings#enable_real_user_monitoring ApplicationSettings#enable_real_user_monitoring}

---

##### `EnableSlowSql`<sup>Optional</sup> <a name="EnableSlowSql" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.enableSlowSql"></a>

```csharp
public object EnableSlowSql { get; set; }
```

- *Type:* object

Samples and reports the slowest database queries in your traces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/application_settings#enable_slow_sql ApplicationSettings#enable_slow_sql}

---

##### `EnableThreadProfiler`<sup>Optional</sup> <a name="EnableThreadProfiler" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.enableThreadProfiler"></a>

```csharp
public object EnableThreadProfiler { get; set; }
```

- *Type:* object

Enable or disable the thread profiler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/application_settings#enable_thread_profiler ApplicationSettings#enable_thread_profiler}

---

##### `EndUserApdexThreshold`<sup>Optional</sup> <a name="EndUserApdexThreshold" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.endUserApdexThreshold"></a>

```csharp
public double EndUserApdexThreshold { get; set; }
```

- *Type:* double

Dummy field to support backward compatibility of previous version.should be removed with next major version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/application_settings#end_user_apdex_threshold ApplicationSettings#end_user_apdex_threshold}

---

##### `ErrorCollector`<sup>Optional</sup> <a name="ErrorCollector" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.errorCollector"></a>

```csharp
public object ErrorCollector { get; set; }
```

- *Type:* object

error_collector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/application_settings#error_collector ApplicationSettings#error_collector}

---

##### `Guid`<sup>Optional</sup> <a name="Guid" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.guid"></a>

```csharp
public string Guid { get; set; }
```

- *Type:* string

The GUID of the application in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/application_settings#guid ApplicationSettings#guid}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/application_settings#id ApplicationSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the application in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/application_settings#name ApplicationSettings#name}

---

##### `TracerType`<sup>Optional</sup> <a name="TracerType" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.tracerType"></a>

```csharp
public string TracerType { get; set; }
```

- *Type:* string

The type of tracer to use, either 'CROSS_APPLICATION_TRACER', 'DISTRIBUTED_TRACING', 'NONE', or 'OPT_OUT'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/application_settings#tracer_type ApplicationSettings#tracer_type}

---

##### `TransactionTracer`<sup>Optional</sup> <a name="TransactionTracer" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.transactionTracer"></a>

```csharp
public object TransactionTracer { get; set; }
```

- *Type:* object

transaction_tracer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/application_settings#transaction_tracer ApplicationSettings#transaction_tracer}

---

##### `UseServerSideConfig`<sup>Optional</sup> <a name="UseServerSideConfig" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.useServerSideConfig"></a>

```csharp
public object UseServerSideConfig { get; set; }
```

- *Type:* object

Enable or disable server side monitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/application_settings#use_server_side_config ApplicationSettings#use_server_side_config}

---

### ApplicationSettingsErrorCollector <a name="ApplicationSettingsErrorCollector" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new ApplicationSettingsErrorCollector {
    string[] ExpectedErrorClasses = null,
    string[] ExpectedErrorCodes = null,
    string[] IgnoredErrorClasses = null,
    string[] IgnoredErrorCodes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector.property.expectedErrorClasses">ExpectedErrorClasses</a></code> | <code>string[]</code> | A list of error classes that are expected and should not trigger alerts. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector.property.expectedErrorCodes">ExpectedErrorCodes</a></code> | <code>string[]</code> | A list of error codes that are expected and should not trigger alerts. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector.property.ignoredErrorClasses">IgnoredErrorClasses</a></code> | <code>string[]</code> | A list of error classes that should be ignored. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector.property.ignoredErrorCodes">IgnoredErrorCodes</a></code> | <code>string[]</code> | A list of error codes that should be ignored. |

---

##### `ExpectedErrorClasses`<sup>Optional</sup> <a name="ExpectedErrorClasses" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector.property.expectedErrorClasses"></a>

```csharp
public string[] ExpectedErrorClasses { get; set; }
```

- *Type:* string[]

A list of error classes that are expected and should not trigger alerts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/application_settings#expected_error_classes ApplicationSettings#expected_error_classes}

---

##### `ExpectedErrorCodes`<sup>Optional</sup> <a name="ExpectedErrorCodes" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector.property.expectedErrorCodes"></a>

```csharp
public string[] ExpectedErrorCodes { get; set; }
```

- *Type:* string[]

A list of error codes that are expected and should not trigger alerts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/application_settings#expected_error_codes ApplicationSettings#expected_error_codes}

---

##### `IgnoredErrorClasses`<sup>Optional</sup> <a name="IgnoredErrorClasses" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector.property.ignoredErrorClasses"></a>

```csharp
public string[] IgnoredErrorClasses { get; set; }
```

- *Type:* string[]

A list of error classes that should be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/application_settings#ignored_error_classes ApplicationSettings#ignored_error_classes}

---

##### `IgnoredErrorCodes`<sup>Optional</sup> <a name="IgnoredErrorCodes" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector.property.ignoredErrorCodes"></a>

```csharp
public string[] IgnoredErrorCodes { get; set; }
```

- *Type:* string[]

A list of error codes that should be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/application_settings#ignored_error_codes ApplicationSettings#ignored_error_codes}

---

### ApplicationSettingsTransactionTracer <a name="ApplicationSettingsTransactionTracer" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new ApplicationSettingsTransactionTracer {
    object ExplainQueryPlans = null,
    ApplicationSettingsTransactionTracerSql Sql = null,
    double StackTraceThresholdValue = null,
    string TransactionThresholdType = null,
    double TransactionThresholdValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer.property.explainQueryPlans">ExplainQueryPlans</a></code> | <code>object</code> | explain_query_plans block. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer.property.sql">Sql</a></code> | <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSql">ApplicationSettingsTransactionTracerSql</a></code> | sql block. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer.property.stackTraceThresholdValue">StackTraceThresholdValue</a></code> | <code>double</code> | The response time threshold value for capturing stack traces of SQL queries. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer.property.transactionThresholdType">TransactionThresholdType</a></code> | <code>string</code> | The type of threshold for transaction tracing, either 'APDEX_F' or 'VALUE'. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer.property.transactionThresholdValue">TransactionThresholdValue</a></code> | <code>double</code> | The threshold value for transaction tracing when 'transaction_threshold_type' is 'VALUE'. |

---

##### `ExplainQueryPlans`<sup>Optional</sup> <a name="ExplainQueryPlans" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer.property.explainQueryPlans"></a>

```csharp
public object ExplainQueryPlans { get; set; }
```

- *Type:* object

explain_query_plans block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/application_settings#explain_query_plans ApplicationSettings#explain_query_plans}

---

##### `Sql`<sup>Optional</sup> <a name="Sql" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer.property.sql"></a>

```csharp
public ApplicationSettingsTransactionTracerSql Sql { get; set; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSql">ApplicationSettingsTransactionTracerSql</a>

sql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/application_settings#sql ApplicationSettings#sql}

---

##### `StackTraceThresholdValue`<sup>Optional</sup> <a name="StackTraceThresholdValue" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer.property.stackTraceThresholdValue"></a>

```csharp
public double StackTraceThresholdValue { get; set; }
```

- *Type:* double

The response time threshold value for capturing stack traces of SQL queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/application_settings#stack_trace_threshold_value ApplicationSettings#stack_trace_threshold_value}

---

##### `TransactionThresholdType`<sup>Optional</sup> <a name="TransactionThresholdType" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer.property.transactionThresholdType"></a>

```csharp
public string TransactionThresholdType { get; set; }
```

- *Type:* string

The type of threshold for transaction tracing, either 'APDEX_F' or 'VALUE'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/application_settings#transaction_threshold_type ApplicationSettings#transaction_threshold_type}

---

##### `TransactionThresholdValue`<sup>Optional</sup> <a name="TransactionThresholdValue" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer.property.transactionThresholdValue"></a>

```csharp
public double TransactionThresholdValue { get; set; }
```

- *Type:* double

The threshold value for transaction tracing when 'transaction_threshold_type' is 'VALUE'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/application_settings#transaction_threshold_value ApplicationSettings#transaction_threshold_value}

---

### ApplicationSettingsTransactionTracerExplainQueryPlans <a name="ApplicationSettingsTransactionTracerExplainQueryPlans" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlans"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlans.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new ApplicationSettingsTransactionTracerExplainQueryPlans {
    string QueryPlanThresholdType = null,
    double QueryPlanThresholdValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlans.property.queryPlanThresholdType">QueryPlanThresholdType</a></code> | <code>string</code> | The type of threshold for explain plans, either 'APDEX_F' or 'VALUE'. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlans.property.queryPlanThresholdValue">QueryPlanThresholdValue</a></code> | <code>double</code> | The threshold value for explain plans when 'query_plan_threshold_type' is 'VALUE'. |

---

##### `QueryPlanThresholdType`<sup>Optional</sup> <a name="QueryPlanThresholdType" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlans.property.queryPlanThresholdType"></a>

```csharp
public string QueryPlanThresholdType { get; set; }
```

- *Type:* string

The type of threshold for explain plans, either 'APDEX_F' or 'VALUE'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/application_settings#query_plan_threshold_type ApplicationSettings#query_plan_threshold_type}

---

##### `QueryPlanThresholdValue`<sup>Optional</sup> <a name="QueryPlanThresholdValue" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlans.property.queryPlanThresholdValue"></a>

```csharp
public double QueryPlanThresholdValue { get; set; }
```

- *Type:* double

The threshold value for explain plans when 'query_plan_threshold_type' is 'VALUE'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/application_settings#query_plan_threshold_value ApplicationSettings#query_plan_threshold_value}

---

### ApplicationSettingsTransactionTracerSql <a name="ApplicationSettingsTransactionTracerSql" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSql.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new ApplicationSettingsTransactionTracerSql {
    string RecordSql
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSql.property.recordSql">RecordSql</a></code> | <code>string</code> | The level of SQL recording, either 'OBFUSCATED', 'OFF', or 'RAW'. |

---

##### `RecordSql`<sup>Required</sup> <a name="RecordSql" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSql.property.recordSql"></a>

```csharp
public string RecordSql { get; set; }
```

- *Type:* string

The level of SQL recording, either 'OBFUSCATED', 'OFF', or 'RAW'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.0/docs/resources/application_settings#record_sql ApplicationSettings#record_sql}

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationSettingsErrorCollectorList <a name="ApplicationSettingsErrorCollectorList" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new ApplicationSettingsErrorCollectorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.get"></a>

```csharp
private ApplicationSettingsErrorCollectorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApplicationSettingsErrorCollectorOutputReference <a name="ApplicationSettingsErrorCollectorOutputReference" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new ApplicationSettingsErrorCollectorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.resetExpectedErrorClasses">ResetExpectedErrorClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.resetExpectedErrorCodes">ResetExpectedErrorCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.resetIgnoredErrorClasses">ResetIgnoredErrorClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.resetIgnoredErrorCodes">ResetIgnoredErrorCodes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExpectedErrorClasses` <a name="ResetExpectedErrorClasses" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.resetExpectedErrorClasses"></a>

```csharp
private void ResetExpectedErrorClasses()
```

##### `ResetExpectedErrorCodes` <a name="ResetExpectedErrorCodes" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.resetExpectedErrorCodes"></a>

```csharp
private void ResetExpectedErrorCodes()
```

##### `ResetIgnoredErrorClasses` <a name="ResetIgnoredErrorClasses" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.resetIgnoredErrorClasses"></a>

```csharp
private void ResetIgnoredErrorClasses()
```

##### `ResetIgnoredErrorCodes` <a name="ResetIgnoredErrorCodes" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.resetIgnoredErrorCodes"></a>

```csharp
private void ResetIgnoredErrorCodes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.expectedErrorClassesInput">ExpectedErrorClassesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.expectedErrorCodesInput">ExpectedErrorCodesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.ignoredErrorClassesInput">IgnoredErrorClassesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.ignoredErrorCodesInput">IgnoredErrorCodesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.expectedErrorClasses">ExpectedErrorClasses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.expectedErrorCodes">ExpectedErrorCodes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.ignoredErrorClasses">IgnoredErrorClasses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.ignoredErrorCodes">IgnoredErrorCodes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExpectedErrorClassesInput`<sup>Optional</sup> <a name="ExpectedErrorClassesInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.expectedErrorClassesInput"></a>

```csharp
public string[] ExpectedErrorClassesInput { get; }
```

- *Type:* string[]

---

##### `ExpectedErrorCodesInput`<sup>Optional</sup> <a name="ExpectedErrorCodesInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.expectedErrorCodesInput"></a>

```csharp
public string[] ExpectedErrorCodesInput { get; }
```

- *Type:* string[]

---

##### `IgnoredErrorClassesInput`<sup>Optional</sup> <a name="IgnoredErrorClassesInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.ignoredErrorClassesInput"></a>

```csharp
public string[] IgnoredErrorClassesInput { get; }
```

- *Type:* string[]

---

##### `IgnoredErrorCodesInput`<sup>Optional</sup> <a name="IgnoredErrorCodesInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.ignoredErrorCodesInput"></a>

```csharp
public string[] IgnoredErrorCodesInput { get; }
```

- *Type:* string[]

---

##### `ExpectedErrorClasses`<sup>Required</sup> <a name="ExpectedErrorClasses" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.expectedErrorClasses"></a>

```csharp
public string[] ExpectedErrorClasses { get; }
```

- *Type:* string[]

---

##### `ExpectedErrorCodes`<sup>Required</sup> <a name="ExpectedErrorCodes" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.expectedErrorCodes"></a>

```csharp
public string[] ExpectedErrorCodes { get; }
```

- *Type:* string[]

---

##### `IgnoredErrorClasses`<sup>Required</sup> <a name="IgnoredErrorClasses" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.ignoredErrorClasses"></a>

```csharp
public string[] IgnoredErrorClasses { get; }
```

- *Type:* string[]

---

##### `IgnoredErrorCodes`<sup>Required</sup> <a name="IgnoredErrorCodes" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.ignoredErrorCodes"></a>

```csharp
public string[] IgnoredErrorCodes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApplicationSettingsTransactionTracerExplainQueryPlansList <a name="ApplicationSettingsTransactionTracerExplainQueryPlansList" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new ApplicationSettingsTransactionTracerExplainQueryPlansList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.get"></a>

```csharp
private ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference <a name="ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.resetQueryPlanThresholdType">ResetQueryPlanThresholdType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.resetQueryPlanThresholdValue">ResetQueryPlanThresholdValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetQueryPlanThresholdType` <a name="ResetQueryPlanThresholdType" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.resetQueryPlanThresholdType"></a>

```csharp
private void ResetQueryPlanThresholdType()
```

##### `ResetQueryPlanThresholdValue` <a name="ResetQueryPlanThresholdValue" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.resetQueryPlanThresholdValue"></a>

```csharp
private void ResetQueryPlanThresholdValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.property.queryPlanThresholdTypeInput">QueryPlanThresholdTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.property.queryPlanThresholdValueInput">QueryPlanThresholdValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.property.queryPlanThresholdType">QueryPlanThresholdType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.property.queryPlanThresholdValue">QueryPlanThresholdValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `QueryPlanThresholdTypeInput`<sup>Optional</sup> <a name="QueryPlanThresholdTypeInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.property.queryPlanThresholdTypeInput"></a>

```csharp
public string QueryPlanThresholdTypeInput { get; }
```

- *Type:* string

---

##### `QueryPlanThresholdValueInput`<sup>Optional</sup> <a name="QueryPlanThresholdValueInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.property.queryPlanThresholdValueInput"></a>

```csharp
public double QueryPlanThresholdValueInput { get; }
```

- *Type:* double

---

##### `QueryPlanThresholdType`<sup>Required</sup> <a name="QueryPlanThresholdType" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.property.queryPlanThresholdType"></a>

```csharp
public string QueryPlanThresholdType { get; }
```

- *Type:* string

---

##### `QueryPlanThresholdValue`<sup>Required</sup> <a name="QueryPlanThresholdValue" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.property.queryPlanThresholdValue"></a>

```csharp
public double QueryPlanThresholdValue { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApplicationSettingsTransactionTracerList <a name="ApplicationSettingsTransactionTracerList" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new ApplicationSettingsTransactionTracerList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.get"></a>

```csharp
private ApplicationSettingsTransactionTracerOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApplicationSettingsTransactionTracerOutputReference <a name="ApplicationSettingsTransactionTracerOutputReference" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new ApplicationSettingsTransactionTracerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.putExplainQueryPlans">PutExplainQueryPlans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.putSql">PutSql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.resetExplainQueryPlans">ResetExplainQueryPlans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.resetSql">ResetSql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.resetStackTraceThresholdValue">ResetStackTraceThresholdValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.resetTransactionThresholdType">ResetTransactionThresholdType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.resetTransactionThresholdValue">ResetTransactionThresholdValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExplainQueryPlans` <a name="PutExplainQueryPlans" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.putExplainQueryPlans"></a>

```csharp
private void PutExplainQueryPlans(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.putExplainQueryPlans.parameter.value"></a>

- *Type:* object

---

##### `PutSql` <a name="PutSql" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.putSql"></a>

```csharp
private void PutSql(ApplicationSettingsTransactionTracerSql Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.putSql.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSql">ApplicationSettingsTransactionTracerSql</a>

---

##### `ResetExplainQueryPlans` <a name="ResetExplainQueryPlans" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.resetExplainQueryPlans"></a>

```csharp
private void ResetExplainQueryPlans()
```

##### `ResetSql` <a name="ResetSql" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.resetSql"></a>

```csharp
private void ResetSql()
```

##### `ResetStackTraceThresholdValue` <a name="ResetStackTraceThresholdValue" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.resetStackTraceThresholdValue"></a>

```csharp
private void ResetStackTraceThresholdValue()
```

##### `ResetTransactionThresholdType` <a name="ResetTransactionThresholdType" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.resetTransactionThresholdType"></a>

```csharp
private void ResetTransactionThresholdType()
```

##### `ResetTransactionThresholdValue` <a name="ResetTransactionThresholdValue" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.resetTransactionThresholdValue"></a>

```csharp
private void ResetTransactionThresholdValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.explainQueryPlans">ExplainQueryPlans</a></code> | <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList">ApplicationSettingsTransactionTracerExplainQueryPlansList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.sql">Sql</a></code> | <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference">ApplicationSettingsTransactionTracerSqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.explainQueryPlansInput">ExplainQueryPlansInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.sqlInput">SqlInput</a></code> | <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSql">ApplicationSettingsTransactionTracerSql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.stackTraceThresholdValueInput">StackTraceThresholdValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.transactionThresholdTypeInput">TransactionThresholdTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.transactionThresholdValueInput">TransactionThresholdValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.stackTraceThresholdValue">StackTraceThresholdValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.transactionThresholdType">TransactionThresholdType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.transactionThresholdValue">TransactionThresholdValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExplainQueryPlans`<sup>Required</sup> <a name="ExplainQueryPlans" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.explainQueryPlans"></a>

```csharp
public ApplicationSettingsTransactionTracerExplainQueryPlansList ExplainQueryPlans { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList">ApplicationSettingsTransactionTracerExplainQueryPlansList</a>

---

##### `Sql`<sup>Required</sup> <a name="Sql" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.sql"></a>

```csharp
public ApplicationSettingsTransactionTracerSqlOutputReference Sql { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference">ApplicationSettingsTransactionTracerSqlOutputReference</a>

---

##### `ExplainQueryPlansInput`<sup>Optional</sup> <a name="ExplainQueryPlansInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.explainQueryPlansInput"></a>

```csharp
public object ExplainQueryPlansInput { get; }
```

- *Type:* object

---

##### `SqlInput`<sup>Optional</sup> <a name="SqlInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.sqlInput"></a>

```csharp
public ApplicationSettingsTransactionTracerSql SqlInput { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSql">ApplicationSettingsTransactionTracerSql</a>

---

##### `StackTraceThresholdValueInput`<sup>Optional</sup> <a name="StackTraceThresholdValueInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.stackTraceThresholdValueInput"></a>

```csharp
public double StackTraceThresholdValueInput { get; }
```

- *Type:* double

---

##### `TransactionThresholdTypeInput`<sup>Optional</sup> <a name="TransactionThresholdTypeInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.transactionThresholdTypeInput"></a>

```csharp
public string TransactionThresholdTypeInput { get; }
```

- *Type:* string

---

##### `TransactionThresholdValueInput`<sup>Optional</sup> <a name="TransactionThresholdValueInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.transactionThresholdValueInput"></a>

```csharp
public double TransactionThresholdValueInput { get; }
```

- *Type:* double

---

##### `StackTraceThresholdValue`<sup>Required</sup> <a name="StackTraceThresholdValue" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.stackTraceThresholdValue"></a>

```csharp
public double StackTraceThresholdValue { get; }
```

- *Type:* double

---

##### `TransactionThresholdType`<sup>Required</sup> <a name="TransactionThresholdType" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.transactionThresholdType"></a>

```csharp
public string TransactionThresholdType { get; }
```

- *Type:* string

---

##### `TransactionThresholdValue`<sup>Required</sup> <a name="TransactionThresholdValue" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.transactionThresholdValue"></a>

```csharp
public double TransactionThresholdValue { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApplicationSettingsTransactionTracerSqlOutputReference <a name="ApplicationSettingsTransactionTracerSqlOutputReference" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new ApplicationSettingsTransactionTracerSqlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.property.recordSqlInput">RecordSqlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.property.recordSql">RecordSql</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSql">ApplicationSettingsTransactionTracerSql</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RecordSqlInput`<sup>Optional</sup> <a name="RecordSqlInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.property.recordSqlInput"></a>

```csharp
public string RecordSqlInput { get; }
```

- *Type:* string

---

##### `RecordSql`<sup>Required</sup> <a name="RecordSql" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.property.recordSql"></a>

```csharp
public string RecordSql { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.property.internalValue"></a>

```csharp
public ApplicationSettingsTransactionTracerSql InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSql">ApplicationSettingsTransactionTracerSql</a>

---



