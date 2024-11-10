# `alertChannel` Submodule <a name="`alertChannel` Submodule" id="@cdktf/provider-newrelic.alertChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AlertChannel <a name="AlertChannel" id="@cdktf/provider-newrelic.alertChannel.AlertChannel"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/alert_channel newrelic_alert_channel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new AlertChannel(Construct Scope, string Id, AlertChannelConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfig">AlertChannelConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfig">AlertChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.resetConfig">ResetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.putConfig"></a>

```csharp
private void PutConfig(AlertChannelConfigA Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA">AlertChannelConfigA</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetConfig` <a name="ResetConfig" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.resetConfig"></a>

```csharp
private void ResetConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AlertChannel resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

AlertChannel.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

AlertChannel.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

AlertChannel.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

AlertChannel.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AlertChannel resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AlertChannel to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AlertChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/alert_channel#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AlertChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.config">Config</a></code> | <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference">AlertChannelConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.accountIdInput">AccountIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.configInput">ConfigInput</a></code> | <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA">AlertChannelConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.accountId">AccountId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.config"></a>

```csharp
public AlertChannelConfigAOutputReference Config { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference">AlertChannelConfigAOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.accountIdInput"></a>

```csharp
public double AccountIdInput { get; }
```

- *Type:* double

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.configInput"></a>

```csharp
public AlertChannelConfigA ConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA">AlertChannelConfigA</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.accountId"></a>

```csharp
public double AccountId { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AlertChannelConfig <a name="AlertChannelConfig" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new AlertChannelConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Type,
    double AccountId = null,
    AlertChannelConfigA Config = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.name">Name</a></code> | <code>string</code> | (Required) The name of the channel. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.type">Type</a></code> | <code>string</code> | (Required) The type of channel. One of: (email, opsgenie, pagerduty, slack, user, victorops, webhook). |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.accountId">AccountId</a></code> | <code>double</code> | The New Relic account ID where you want to create alert channels. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.config">Config</a></code> | <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA">AlertChannelConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/alert_channel#id AlertChannel#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

(Required) The name of the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/alert_channel#name AlertChannel#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

(Required) The type of channel. One of: (email, opsgenie, pagerduty, slack, user, victorops, webhook).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/alert_channel#type AlertChannel#type}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.accountId"></a>

```csharp
public double AccountId { get; set; }
```

- *Type:* double

The New Relic account ID where you want to create alert channels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/alert_channel#account_id AlertChannel#account_id}

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.config"></a>

```csharp
public AlertChannelConfigA Config { get; set; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA">AlertChannelConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/alert_channel#config AlertChannel#config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/alert_channel#id AlertChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### AlertChannelConfigA <a name="AlertChannelConfigA" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new AlertChannelConfigA {
    string ApiKey = null,
    string AuthPassword = null,
    string AuthType = null,
    string AuthUsername = null,
    string BaseUrl = null,
    string Channel = null,
    System.Collections.Generic.IDictionary<string, string> Headers = null,
    string HeadersString = null,
    string IncludeJsonAttachment = null,
    string Key = null,
    System.Collections.Generic.IDictionary<string, string> Payload = null,
    string PayloadString = null,
    string PayloadType = null,
    string Recipients = null,
    string Region = null,
    string RouteKey = null,
    string ServiceKey = null,
    string Tags = null,
    string Teams = null,
    string Url = null,
    string UserId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.apiKey">ApiKey</a></code> | <code>string</code> | The API key for integrating with OpsGenie. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.authPassword">AuthPassword</a></code> | <code>string</code> | Specifies an authentication password for use with a channel. Supported by the webhook channel type. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.authType">AuthType</a></code> | <code>string</code> | Specifies an authentication method for use with a channel. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.authUsername">AuthUsername</a></code> | <code>string</code> | Specifies an authentication username for use with a channel. Supported by the webhook channel type. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.baseUrl">BaseUrl</a></code> | <code>string</code> | The base URL of the webhook destination. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.channel">Channel</a></code> | <code>string</code> | The Slack channel to send notifications to. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.headers">Headers</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of key/value pairs that represents extra HTTP headers to be sent along with the webhook payload. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.headersString">HeadersString</a></code> | <code>string</code> | Use instead of headers if the desired payload is more complex than a list of key/value pairs (e.g. a set of headers that makes use of nested objects). The value provided should be a valid JSON string with escaped double quotes. Conflicts with headers. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.includeJsonAttachment">IncludeJsonAttachment</a></code> | <code>string</code> | true or false. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.key">Key</a></code> | <code>string</code> | The key for integrating with VictorOps. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.payload">Payload</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of key/value pairs that represents the webhook payload. Must provide payload_type if setting this argument. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.payloadString">PayloadString</a></code> | <code>string</code> | Use instead of payload if the desired payload is more complex than a list of key/value pairs (e.g. a payload that makes use of nested objects). The value provided should be a valid JSON string with escaped double quotes. Conflicts with payload. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.payloadType">PayloadType</a></code> | <code>string</code> | Can either be application/json or application/x-www-form-urlencoded. The payload_type argument is required if payload is set. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.recipients">Recipients</a></code> | <code>string</code> | A set of recipients for targeting notifications. Multiple values are comma separated. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.region">Region</a></code> | <code>string</code> | The data center region to store your data. Valid values are US and EU. Default is US. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.routeKey">RouteKey</a></code> | <code>string</code> | The route key for integrating with VictorOps. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.serviceKey">ServiceKey</a></code> | <code>string</code> | Specifies the service key for integrating with Pagerduty. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.tags">Tags</a></code> | <code>string</code> | A set of tags for targeting notifications. Multiple values are comma separated. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.teams">Teams</a></code> | <code>string</code> | A set of teams for targeting notifications. Multiple values are comma separated. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.url">Url</a></code> | <code>string</code> | Your organization's Slack URL. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.userId">UserId</a></code> | <code>string</code> | The user ID for use with the user channel type. |

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.apiKey"></a>

```csharp
public string ApiKey { get; set; }
```

- *Type:* string

The API key for integrating with OpsGenie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/alert_channel#api_key AlertChannel#api_key}

---

##### `AuthPassword`<sup>Optional</sup> <a name="AuthPassword" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.authPassword"></a>

```csharp
public string AuthPassword { get; set; }
```

- *Type:* string

Specifies an authentication password for use with a channel. Supported by the webhook channel type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/alert_channel#auth_password AlertChannel#auth_password}

---

##### `AuthType`<sup>Optional</sup> <a name="AuthType" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.authType"></a>

```csharp
public string AuthType { get; set; }
```

- *Type:* string

Specifies an authentication method for use with a channel.

Supported by the webhook channel type. Only HTTP basic authentication is currently supported via the value BASIC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/alert_channel#auth_type AlertChannel#auth_type}

---

##### `AuthUsername`<sup>Optional</sup> <a name="AuthUsername" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.authUsername"></a>

```csharp
public string AuthUsername { get; set; }
```

- *Type:* string

Specifies an authentication username for use with a channel. Supported by the webhook channel type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/alert_channel#auth_username AlertChannel#auth_username}

---

##### `BaseUrl`<sup>Optional</sup> <a name="BaseUrl" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.baseUrl"></a>

```csharp
public string BaseUrl { get; set; }
```

- *Type:* string

The base URL of the webhook destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/alert_channel#base_url AlertChannel#base_url}

---

##### `Channel`<sup>Optional</sup> <a name="Channel" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.channel"></a>

```csharp
public string Channel { get; set; }
```

- *Type:* string

The Slack channel to send notifications to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/alert_channel#channel AlertChannel#channel}

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.headers"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Headers { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of key/value pairs that represents extra HTTP headers to be sent along with the webhook payload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/alert_channel#headers AlertChannel#headers}

---

##### `HeadersString`<sup>Optional</sup> <a name="HeadersString" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.headersString"></a>

```csharp
public string HeadersString { get; set; }
```

- *Type:* string

Use instead of headers if the desired payload is more complex than a list of key/value pairs (e.g. a set of headers that makes use of nested objects). The value provided should be a valid JSON string with escaped double quotes. Conflicts with headers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/alert_channel#headers_string AlertChannel#headers_string}

---

##### `IncludeJsonAttachment`<sup>Optional</sup> <a name="IncludeJsonAttachment" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.includeJsonAttachment"></a>

```csharp
public string IncludeJsonAttachment { get; set; }
```

- *Type:* string

true or false.

Flag for whether or not to attach a JSON document containing information about the associated alert to the email that is sent to recipients.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/alert_channel#include_json_attachment AlertChannel#include_json_attachment}

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key for integrating with VictorOps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/alert_channel#key AlertChannel#key}

---

##### `Payload`<sup>Optional</sup> <a name="Payload" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.payload"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Payload { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of key/value pairs that represents the webhook payload. Must provide payload_type if setting this argument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/alert_channel#payload AlertChannel#payload}

---

##### `PayloadString`<sup>Optional</sup> <a name="PayloadString" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.payloadString"></a>

```csharp
public string PayloadString { get; set; }
```

- *Type:* string

Use instead of payload if the desired payload is more complex than a list of key/value pairs (e.g. a payload that makes use of nested objects). The value provided should be a valid JSON string with escaped double quotes. Conflicts with payload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/alert_channel#payload_string AlertChannel#payload_string}

---

##### `PayloadType`<sup>Optional</sup> <a name="PayloadType" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.payloadType"></a>

```csharp
public string PayloadType { get; set; }
```

- *Type:* string

Can either be application/json or application/x-www-form-urlencoded. The payload_type argument is required if payload is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/alert_channel#payload_type AlertChannel#payload_type}

---

##### `Recipients`<sup>Optional</sup> <a name="Recipients" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.recipients"></a>

```csharp
public string Recipients { get; set; }
```

- *Type:* string

A set of recipients for targeting notifications. Multiple values are comma separated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/alert_channel#recipients AlertChannel#recipients}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The data center region to store your data. Valid values are US and EU. Default is US.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/alert_channel#region AlertChannel#region}

---

##### `RouteKey`<sup>Optional</sup> <a name="RouteKey" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.routeKey"></a>

```csharp
public string RouteKey { get; set; }
```

- *Type:* string

The route key for integrating with VictorOps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/alert_channel#route_key AlertChannel#route_key}

---

##### `ServiceKey`<sup>Optional</sup> <a name="ServiceKey" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.serviceKey"></a>

```csharp
public string ServiceKey { get; set; }
```

- *Type:* string

Specifies the service key for integrating with Pagerduty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/alert_channel#service_key AlertChannel#service_key}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.tags"></a>

```csharp
public string Tags { get; set; }
```

- *Type:* string

A set of tags for targeting notifications. Multiple values are comma separated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/alert_channel#tags AlertChannel#tags}

---

##### `Teams`<sup>Optional</sup> <a name="Teams" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.teams"></a>

```csharp
public string Teams { get; set; }
```

- *Type:* string

A set of teams for targeting notifications. Multiple values are comma separated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/alert_channel#teams AlertChannel#teams}

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Your organization's Slack URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/alert_channel#url AlertChannel#url}

---

##### `UserId`<sup>Optional</sup> <a name="UserId" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.userId"></a>

```csharp
public string UserId { get; set; }
```

- *Type:* string

The user ID for use with the user channel type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/alert_channel#user_id AlertChannel#user_id}

---

## Classes <a name="Classes" id="Classes"></a>

### AlertChannelConfigAOutputReference <a name="AlertChannelConfigAOutputReference" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new AlertChannelConfigAOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetApiKey">ResetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetAuthPassword">ResetAuthPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetAuthType">ResetAuthType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetAuthUsername">ResetAuthUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetBaseUrl">ResetBaseUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetChannel">ResetChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetHeadersString">ResetHeadersString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetIncludeJsonAttachment">ResetIncludeJsonAttachment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetPayload">ResetPayload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetPayloadString">ResetPayloadString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetPayloadType">ResetPayloadType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetRecipients">ResetRecipients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetRouteKey">ResetRouteKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetServiceKey">ResetServiceKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetTeams">ResetTeams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetUserId">ResetUserId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetApiKey"></a>

```csharp
private void ResetApiKey()
```

##### `ResetAuthPassword` <a name="ResetAuthPassword" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetAuthPassword"></a>

```csharp
private void ResetAuthPassword()
```

##### `ResetAuthType` <a name="ResetAuthType" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetAuthType"></a>

```csharp
private void ResetAuthType()
```

##### `ResetAuthUsername` <a name="ResetAuthUsername" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetAuthUsername"></a>

```csharp
private void ResetAuthUsername()
```

##### `ResetBaseUrl` <a name="ResetBaseUrl" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetBaseUrl"></a>

```csharp
private void ResetBaseUrl()
```

##### `ResetChannel` <a name="ResetChannel" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetChannel"></a>

```csharp
private void ResetChannel()
```

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetHeaders"></a>

```csharp
private void ResetHeaders()
```

##### `ResetHeadersString` <a name="ResetHeadersString" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetHeadersString"></a>

```csharp
private void ResetHeadersString()
```

##### `ResetIncludeJsonAttachment` <a name="ResetIncludeJsonAttachment" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetIncludeJsonAttachment"></a>

```csharp
private void ResetIncludeJsonAttachment()
```

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetPayload` <a name="ResetPayload" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetPayload"></a>

```csharp
private void ResetPayload()
```

##### `ResetPayloadString` <a name="ResetPayloadString" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetPayloadString"></a>

```csharp
private void ResetPayloadString()
```

##### `ResetPayloadType` <a name="ResetPayloadType" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetPayloadType"></a>

```csharp
private void ResetPayloadType()
```

##### `ResetRecipients` <a name="ResetRecipients" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetRecipients"></a>

```csharp
private void ResetRecipients()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetRouteKey` <a name="ResetRouteKey" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetRouteKey"></a>

```csharp
private void ResetRouteKey()
```

##### `ResetServiceKey` <a name="ResetServiceKey" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetServiceKey"></a>

```csharp
private void ResetServiceKey()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTeams` <a name="ResetTeams" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetTeams"></a>

```csharp
private void ResetTeams()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetUrl"></a>

```csharp
private void ResetUrl()
```

##### `ResetUserId` <a name="ResetUserId" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetUserId"></a>

```csharp
private void ResetUserId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.authPasswordInput">AuthPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.authTypeInput">AuthTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.authUsernameInput">AuthUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.baseUrlInput">BaseUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.channelInput">ChannelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.headersInput">HeadersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.headersStringInput">HeadersStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.includeJsonAttachmentInput">IncludeJsonAttachmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.payloadInput">PayloadInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.payloadStringInput">PayloadStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.payloadTypeInput">PayloadTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.recipientsInput">RecipientsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.routeKeyInput">RouteKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.serviceKeyInput">ServiceKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.tagsInput">TagsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.teamsInput">TeamsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.userIdInput">UserIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.apiKey">ApiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.authPassword">AuthPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.authType">AuthType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.authUsername">AuthUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.baseUrl">BaseUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.channel">Channel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.headers">Headers</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.headersString">HeadersString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.includeJsonAttachment">IncludeJsonAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.payload">Payload</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.payloadString">PayloadString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.payloadType">PayloadType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.recipients">Recipients</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.routeKey">RouteKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.serviceKey">ServiceKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.tags">Tags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.teams">Teams</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.userId">UserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA">AlertChannelConfigA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.apiKeyInput"></a>

```csharp
public string ApiKeyInput { get; }
```

- *Type:* string

---

##### `AuthPasswordInput`<sup>Optional</sup> <a name="AuthPasswordInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.authPasswordInput"></a>

```csharp
public string AuthPasswordInput { get; }
```

- *Type:* string

---

##### `AuthTypeInput`<sup>Optional</sup> <a name="AuthTypeInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.authTypeInput"></a>

```csharp
public string AuthTypeInput { get; }
```

- *Type:* string

---

##### `AuthUsernameInput`<sup>Optional</sup> <a name="AuthUsernameInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.authUsernameInput"></a>

```csharp
public string AuthUsernameInput { get; }
```

- *Type:* string

---

##### `BaseUrlInput`<sup>Optional</sup> <a name="BaseUrlInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.baseUrlInput"></a>

```csharp
public string BaseUrlInput { get; }
```

- *Type:* string

---

##### `ChannelInput`<sup>Optional</sup> <a name="ChannelInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.channelInput"></a>

```csharp
public string ChannelInput { get; }
```

- *Type:* string

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.headersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> HeadersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `HeadersStringInput`<sup>Optional</sup> <a name="HeadersStringInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.headersStringInput"></a>

```csharp
public string HeadersStringInput { get; }
```

- *Type:* string

---

##### `IncludeJsonAttachmentInput`<sup>Optional</sup> <a name="IncludeJsonAttachmentInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.includeJsonAttachmentInput"></a>

```csharp
public string IncludeJsonAttachmentInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `PayloadInput`<sup>Optional</sup> <a name="PayloadInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.payloadInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PayloadInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PayloadStringInput`<sup>Optional</sup> <a name="PayloadStringInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.payloadStringInput"></a>

```csharp
public string PayloadStringInput { get; }
```

- *Type:* string

---

##### `PayloadTypeInput`<sup>Optional</sup> <a name="PayloadTypeInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.payloadTypeInput"></a>

```csharp
public string PayloadTypeInput { get; }
```

- *Type:* string

---

##### `RecipientsInput`<sup>Optional</sup> <a name="RecipientsInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.recipientsInput"></a>

```csharp
public string RecipientsInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RouteKeyInput`<sup>Optional</sup> <a name="RouteKeyInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.routeKeyInput"></a>

```csharp
public string RouteKeyInput { get; }
```

- *Type:* string

---

##### `ServiceKeyInput`<sup>Optional</sup> <a name="ServiceKeyInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.serviceKeyInput"></a>

```csharp
public string ServiceKeyInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.tagsInput"></a>

```csharp
public string TagsInput { get; }
```

- *Type:* string

---

##### `TeamsInput`<sup>Optional</sup> <a name="TeamsInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.teamsInput"></a>

```csharp
public string TeamsInput { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.userIdInput"></a>

```csharp
public string UserIdInput { get; }
```

- *Type:* string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.apiKey"></a>

```csharp
public string ApiKey { get; }
```

- *Type:* string

---

##### `AuthPassword`<sup>Required</sup> <a name="AuthPassword" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.authPassword"></a>

```csharp
public string AuthPassword { get; }
```

- *Type:* string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.authType"></a>

```csharp
public string AuthType { get; }
```

- *Type:* string

---

##### `AuthUsername`<sup>Required</sup> <a name="AuthUsername" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.authUsername"></a>

```csharp
public string AuthUsername { get; }
```

- *Type:* string

---

##### `BaseUrl`<sup>Required</sup> <a name="BaseUrl" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.baseUrl"></a>

```csharp
public string BaseUrl { get; }
```

- *Type:* string

---

##### `Channel`<sup>Required</sup> <a name="Channel" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.channel"></a>

```csharp
public string Channel { get; }
```

- *Type:* string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.headers"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Headers { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `HeadersString`<sup>Required</sup> <a name="HeadersString" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.headersString"></a>

```csharp
public string HeadersString { get; }
```

- *Type:* string

---

##### `IncludeJsonAttachment`<sup>Required</sup> <a name="IncludeJsonAttachment" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.includeJsonAttachment"></a>

```csharp
public string IncludeJsonAttachment { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Payload`<sup>Required</sup> <a name="Payload" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.payload"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Payload { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PayloadString`<sup>Required</sup> <a name="PayloadString" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.payloadString"></a>

```csharp
public string PayloadString { get; }
```

- *Type:* string

---

##### `PayloadType`<sup>Required</sup> <a name="PayloadType" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.payloadType"></a>

```csharp
public string PayloadType { get; }
```

- *Type:* string

---

##### `Recipients`<sup>Required</sup> <a name="Recipients" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.recipients"></a>

```csharp
public string Recipients { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `RouteKey`<sup>Required</sup> <a name="RouteKey" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.routeKey"></a>

```csharp
public string RouteKey { get; }
```

- *Type:* string

---

##### `ServiceKey`<sup>Required</sup> <a name="ServiceKey" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.serviceKey"></a>

```csharp
public string ServiceKey { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.tags"></a>

```csharp
public string Tags { get; }
```

- *Type:* string

---

##### `Teams`<sup>Required</sup> <a name="Teams" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.teams"></a>

```csharp
public string Teams { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.userId"></a>

```csharp
public string UserId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.internalValue"></a>

```csharp
public AlertChannelConfigA InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA">AlertChannelConfigA</a>

---



