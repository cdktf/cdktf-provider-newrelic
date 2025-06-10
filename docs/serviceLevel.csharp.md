# `serviceLevel` Submodule <a name="`serviceLevel` Submodule" id="@cdktf/provider-newrelic.serviceLevel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceLevel <a name="ServiceLevel" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/service_level newrelic_service_level}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new ServiceLevel(Construct Scope, string Id, ServiceLevelConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig">ServiceLevelConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig">ServiceLevelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.putEvents">PutEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.putObjective">PutObjective</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEvents` <a name="PutEvents" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.putEvents"></a>

```csharp
private void PutEvents(ServiceLevelEvents Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.putEvents.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents">ServiceLevelEvents</a>

---

##### `PutObjective` <a name="PutObjective" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.putObjective"></a>

```csharp
private void PutObjective(ServiceLevelObjective Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.putObjective.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective">ServiceLevelObjective</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ServiceLevel resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

ServiceLevel.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

ServiceLevel.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

ServiceLevel.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

ServiceLevel.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ServiceLevel resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServiceLevel to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServiceLevel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/service_level#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ServiceLevel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.events">Events</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference">ServiceLevelEventsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.objective">Objective</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference">ServiceLevelObjectiveOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.sliGuid">SliGuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.sliId">SliId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.eventsInput">EventsInput</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents">ServiceLevelEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.guidInput">GuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.objectiveInput">ObjectiveInput</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective">ServiceLevelObjective</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.guid">Guid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Events`<sup>Required</sup> <a name="Events" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.events"></a>

```csharp
public ServiceLevelEventsOutputReference Events { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference">ServiceLevelEventsOutputReference</a>

---

##### `Objective`<sup>Required</sup> <a name="Objective" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.objective"></a>

```csharp
public ServiceLevelObjectiveOutputReference Objective { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference">ServiceLevelObjectiveOutputReference</a>

---

##### `SliGuid`<sup>Required</sup> <a name="SliGuid" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.sliGuid"></a>

```csharp
public string SliGuid { get; }
```

- *Type:* string

---

##### `SliId`<sup>Required</sup> <a name="SliId" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.sliId"></a>

```csharp
public string SliId { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EventsInput`<sup>Optional</sup> <a name="EventsInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.eventsInput"></a>

```csharp
public ServiceLevelEvents EventsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents">ServiceLevelEvents</a>

---

##### `GuidInput`<sup>Optional</sup> <a name="GuidInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.guidInput"></a>

```csharp
public string GuidInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ObjectiveInput`<sup>Optional</sup> <a name="ObjectiveInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.objectiveInput"></a>

```csharp
public ServiceLevelObjective ObjectiveInput { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective">ServiceLevelObjective</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Guid`<sup>Required</sup> <a name="Guid" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.guid"></a>

```csharp
public string Guid { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceLevelConfig <a name="ServiceLevelConfig" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new ServiceLevelConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    ServiceLevelEvents Events,
    string Guid,
    string Name,
    ServiceLevelObjective Objective,
    string Description = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.events">Events</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents">ServiceLevelEvents</a></code> | events block. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.guid">Guid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/service_level#guid ServiceLevel#guid}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/service_level#name ServiceLevel#name}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.objective">Objective</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective">ServiceLevelObjective</a></code> | objective block. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/service_level#description ServiceLevel#description}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/service_level#id ServiceLevel#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Events`<sup>Required</sup> <a name="Events" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.events"></a>

```csharp
public ServiceLevelEvents Events { get; set; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents">ServiceLevelEvents</a>

events block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/service_level#events ServiceLevel#events}

---

##### `Guid`<sup>Required</sup> <a name="Guid" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.guid"></a>

```csharp
public string Guid { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/service_level#guid ServiceLevel#guid}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/service_level#name ServiceLevel#name}.

---

##### `Objective`<sup>Required</sup> <a name="Objective" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.objective"></a>

```csharp
public ServiceLevelObjective Objective { get; set; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective">ServiceLevelObjective</a>

objective block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/service_level#objective ServiceLevel#objective}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/service_level#description ServiceLevel#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/service_level#id ServiceLevel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ServiceLevelEvents <a name="ServiceLevelEvents" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new ServiceLevelEvents {
    double AccountId,
    ServiceLevelEventsValidEvents ValidEvents,
    ServiceLevelEventsBadEvents BadEvents = null,
    ServiceLevelEventsGoodEvents GoodEvents = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents.property.accountId">AccountId</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/service_level#account_id ServiceLevel#account_id}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents.property.validEvents">ValidEvents</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents">ServiceLevelEventsValidEvents</a></code> | valid_events block. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents.property.badEvents">BadEvents</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents">ServiceLevelEventsBadEvents</a></code> | bad_events block. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents.property.goodEvents">GoodEvents</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents">ServiceLevelEventsGoodEvents</a></code> | good_events block. |

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents.property.accountId"></a>

```csharp
public double AccountId { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/service_level#account_id ServiceLevel#account_id}.

---

##### `ValidEvents`<sup>Required</sup> <a name="ValidEvents" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents.property.validEvents"></a>

```csharp
public ServiceLevelEventsValidEvents ValidEvents { get; set; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents">ServiceLevelEventsValidEvents</a>

valid_events block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/service_level#valid_events ServiceLevel#valid_events}

---

##### `BadEvents`<sup>Optional</sup> <a name="BadEvents" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents.property.badEvents"></a>

```csharp
public ServiceLevelEventsBadEvents BadEvents { get; set; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents">ServiceLevelEventsBadEvents</a>

bad_events block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/service_level#bad_events ServiceLevel#bad_events}

---

##### `GoodEvents`<sup>Optional</sup> <a name="GoodEvents" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents.property.goodEvents"></a>

```csharp
public ServiceLevelEventsGoodEvents GoodEvents { get; set; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents">ServiceLevelEventsGoodEvents</a>

good_events block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/service_level#good_events ServiceLevel#good_events}

---

### ServiceLevelEventsBadEvents <a name="ServiceLevelEventsBadEvents" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new ServiceLevelEventsBadEvents {
    string From,
    ServiceLevelEventsBadEventsSelect Select = null,
    string Where = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents.property.from">From</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/service_level#from ServiceLevel#from}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents.property.select">Select</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect">ServiceLevelEventsBadEventsSelect</a></code> | select block. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents.property.where">Where</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/service_level#where ServiceLevel#where}. |

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents.property.from"></a>

```csharp
public string From { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/service_level#from ServiceLevel#from}.

---

##### `Select`<sup>Optional</sup> <a name="Select" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents.property.select"></a>

```csharp
public ServiceLevelEventsBadEventsSelect Select { get; set; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect">ServiceLevelEventsBadEventsSelect</a>

select block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/service_level#select ServiceLevel#select}

---

##### `Where`<sup>Optional</sup> <a name="Where" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents.property.where"></a>

```csharp
public string Where { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/service_level#where ServiceLevel#where}.

---

### ServiceLevelEventsBadEventsSelect <a name="ServiceLevelEventsBadEventsSelect" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new ServiceLevelEventsBadEventsSelect {
    string Function,
    string Attribute = null,
    double Threshold = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect.property.function">Function</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/service_level#function ServiceLevel#function}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect.property.attribute">Attribute</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/service_level#attribute ServiceLevel#attribute}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect.property.threshold">Threshold</a></code> | <code>double</code> | The event threshold to use in the SELECT clause. |

---

##### `Function`<sup>Required</sup> <a name="Function" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect.property.function"></a>

```csharp
public string Function { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/service_level#function ServiceLevel#function}.

---

##### `Attribute`<sup>Optional</sup> <a name="Attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect.property.attribute"></a>

```csharp
public string Attribute { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/service_level#attribute ServiceLevel#attribute}.

---

##### `Threshold`<sup>Optional</sup> <a name="Threshold" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect.property.threshold"></a>

```csharp
public double Threshold { get; set; }
```

- *Type:* double

The event threshold to use in the SELECT clause.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/service_level#threshold ServiceLevel#threshold}

---

### ServiceLevelEventsGoodEvents <a name="ServiceLevelEventsGoodEvents" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new ServiceLevelEventsGoodEvents {
    string From,
    ServiceLevelEventsGoodEventsSelect Select = null,
    string Where = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents.property.from">From</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/service_level#from ServiceLevel#from}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents.property.select">Select</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect">ServiceLevelEventsGoodEventsSelect</a></code> | select block. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents.property.where">Where</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/service_level#where ServiceLevel#where}. |

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents.property.from"></a>

```csharp
public string From { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/service_level#from ServiceLevel#from}.

---

##### `Select`<sup>Optional</sup> <a name="Select" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents.property.select"></a>

```csharp
public ServiceLevelEventsGoodEventsSelect Select { get; set; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect">ServiceLevelEventsGoodEventsSelect</a>

select block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/service_level#select ServiceLevel#select}

---

##### `Where`<sup>Optional</sup> <a name="Where" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents.property.where"></a>

```csharp
public string Where { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/service_level#where ServiceLevel#where}.

---

### ServiceLevelEventsGoodEventsSelect <a name="ServiceLevelEventsGoodEventsSelect" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new ServiceLevelEventsGoodEventsSelect {
    string Function,
    string Attribute = null,
    double Threshold = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect.property.function">Function</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/service_level#function ServiceLevel#function}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect.property.attribute">Attribute</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/service_level#attribute ServiceLevel#attribute}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect.property.threshold">Threshold</a></code> | <code>double</code> | The event threshold to use in the SELECT clause. |

---

##### `Function`<sup>Required</sup> <a name="Function" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect.property.function"></a>

```csharp
public string Function { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/service_level#function ServiceLevel#function}.

---

##### `Attribute`<sup>Optional</sup> <a name="Attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect.property.attribute"></a>

```csharp
public string Attribute { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/service_level#attribute ServiceLevel#attribute}.

---

##### `Threshold`<sup>Optional</sup> <a name="Threshold" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect.property.threshold"></a>

```csharp
public double Threshold { get; set; }
```

- *Type:* double

The event threshold to use in the SELECT clause.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/service_level#threshold ServiceLevel#threshold}

---

### ServiceLevelEventsValidEvents <a name="ServiceLevelEventsValidEvents" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new ServiceLevelEventsValidEvents {
    string From,
    ServiceLevelEventsValidEventsSelect Select = null,
    string Where = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents.property.from">From</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/service_level#from ServiceLevel#from}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents.property.select">Select</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect">ServiceLevelEventsValidEventsSelect</a></code> | select block. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents.property.where">Where</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/service_level#where ServiceLevel#where}. |

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents.property.from"></a>

```csharp
public string From { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/service_level#from ServiceLevel#from}.

---

##### `Select`<sup>Optional</sup> <a name="Select" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents.property.select"></a>

```csharp
public ServiceLevelEventsValidEventsSelect Select { get; set; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect">ServiceLevelEventsValidEventsSelect</a>

select block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/service_level#select ServiceLevel#select}

---

##### `Where`<sup>Optional</sup> <a name="Where" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents.property.where"></a>

```csharp
public string Where { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/service_level#where ServiceLevel#where}.

---

### ServiceLevelEventsValidEventsSelect <a name="ServiceLevelEventsValidEventsSelect" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new ServiceLevelEventsValidEventsSelect {
    string Function,
    string Attribute = null,
    double Threshold = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect.property.function">Function</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/service_level#function ServiceLevel#function}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect.property.attribute">Attribute</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/service_level#attribute ServiceLevel#attribute}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect.property.threshold">Threshold</a></code> | <code>double</code> | The event threshold to use in the SELECT clause. |

---

##### `Function`<sup>Required</sup> <a name="Function" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect.property.function"></a>

```csharp
public string Function { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/service_level#function ServiceLevel#function}.

---

##### `Attribute`<sup>Optional</sup> <a name="Attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect.property.attribute"></a>

```csharp
public string Attribute { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/service_level#attribute ServiceLevel#attribute}.

---

##### `Threshold`<sup>Optional</sup> <a name="Threshold" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect.property.threshold"></a>

```csharp
public double Threshold { get; set; }
```

- *Type:* double

The event threshold to use in the SELECT clause.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/service_level#threshold ServiceLevel#threshold}

---

### ServiceLevelObjective <a name="ServiceLevelObjective" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new ServiceLevelObjective {
    double Target,
    ServiceLevelObjectiveTimeWindow TimeWindow,
    string Description = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective.property.target">Target</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/service_level#target ServiceLevel#target}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective.property.timeWindow">TimeWindow</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindow">ServiceLevelObjectiveTimeWindow</a></code> | time_window block. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/service_level#description ServiceLevel#description}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/service_level#name ServiceLevel#name}. |

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective.property.target"></a>

```csharp
public double Target { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/service_level#target ServiceLevel#target}.

---

##### `TimeWindow`<sup>Required</sup> <a name="TimeWindow" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective.property.timeWindow"></a>

```csharp
public ServiceLevelObjectiveTimeWindow TimeWindow { get; set; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindow">ServiceLevelObjectiveTimeWindow</a>

time_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/service_level#time_window ServiceLevel#time_window}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/service_level#description ServiceLevel#description}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/service_level#name ServiceLevel#name}.

---

### ServiceLevelObjectiveTimeWindow <a name="ServiceLevelObjectiveTimeWindow" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new ServiceLevelObjectiveTimeWindow {
    ServiceLevelObjectiveTimeWindowRolling Rolling
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindow.property.rolling">Rolling</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRolling">ServiceLevelObjectiveTimeWindowRolling</a></code> | rolling block. |

---

##### `Rolling`<sup>Required</sup> <a name="Rolling" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindow.property.rolling"></a>

```csharp
public ServiceLevelObjectiveTimeWindowRolling Rolling { get; set; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRolling">ServiceLevelObjectiveTimeWindowRolling</a>

rolling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/service_level#rolling ServiceLevel#rolling}

---

### ServiceLevelObjectiveTimeWindowRolling <a name="ServiceLevelObjectiveTimeWindowRolling" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRolling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRolling.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new ServiceLevelObjectiveTimeWindowRolling {
    double Count,
    string Unit
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRolling.property.count">Count</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/service_level#count ServiceLevel#count}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRolling.property.unit">Unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/service_level#unit ServiceLevel#unit}. |

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRolling.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/service_level#count ServiceLevel#count}.

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRolling.property.unit"></a>

```csharp
public string Unit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/service_level#unit ServiceLevel#unit}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceLevelEventsBadEventsOutputReference <a name="ServiceLevelEventsBadEventsOutputReference" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new ServiceLevelEventsBadEventsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.putSelect">PutSelect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.resetSelect">ResetSelect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.resetWhere">ResetWhere</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSelect` <a name="PutSelect" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.putSelect"></a>

```csharp
private void PutSelect(ServiceLevelEventsBadEventsSelect Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.putSelect.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect">ServiceLevelEventsBadEventsSelect</a>

---

##### `ResetSelect` <a name="ResetSelect" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.resetSelect"></a>

```csharp
private void ResetSelect()
```

##### `ResetWhere` <a name="ResetWhere" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.resetWhere"></a>

```csharp
private void ResetWhere()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.select">Select</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference">ServiceLevelEventsBadEventsSelectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.fromInput">FromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.selectInput">SelectInput</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect">ServiceLevelEventsBadEventsSelect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.whereInput">WhereInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.from">From</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.where">Where</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents">ServiceLevelEventsBadEvents</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Select`<sup>Required</sup> <a name="Select" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.select"></a>

```csharp
public ServiceLevelEventsBadEventsSelectOutputReference Select { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference">ServiceLevelEventsBadEventsSelectOutputReference</a>

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.fromInput"></a>

```csharp
public string FromInput { get; }
```

- *Type:* string

---

##### `SelectInput`<sup>Optional</sup> <a name="SelectInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.selectInput"></a>

```csharp
public ServiceLevelEventsBadEventsSelect SelectInput { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect">ServiceLevelEventsBadEventsSelect</a>

---

##### `WhereInput`<sup>Optional</sup> <a name="WhereInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.whereInput"></a>

```csharp
public string WhereInput { get; }
```

- *Type:* string

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.from"></a>

```csharp
public string From { get; }
```

- *Type:* string

---

##### `Where`<sup>Required</sup> <a name="Where" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.where"></a>

```csharp
public string Where { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.internalValue"></a>

```csharp
public ServiceLevelEventsBadEvents InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents">ServiceLevelEventsBadEvents</a>

---


### ServiceLevelEventsBadEventsSelectOutputReference <a name="ServiceLevelEventsBadEventsSelectOutputReference" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new ServiceLevelEventsBadEventsSelectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.resetAttribute">ResetAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.resetThreshold">ResetThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAttribute` <a name="ResetAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.resetAttribute"></a>

```csharp
private void ResetAttribute()
```

##### `ResetThreshold` <a name="ResetThreshold" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.resetThreshold"></a>

```csharp
private void ResetThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.attributeInput">AttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.functionInput">FunctionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.attribute">Attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.function">Function</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.threshold">Threshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect">ServiceLevelEventsBadEventsSelect</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttributeInput`<sup>Optional</sup> <a name="AttributeInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.attributeInput"></a>

```csharp
public string AttributeInput { get; }
```

- *Type:* string

---

##### `FunctionInput`<sup>Optional</sup> <a name="FunctionInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.functionInput"></a>

```csharp
public string FunctionInput { get; }
```

- *Type:* string

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.thresholdInput"></a>

```csharp
public double ThresholdInput { get; }
```

- *Type:* double

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.attribute"></a>

```csharp
public string Attribute { get; }
```

- *Type:* string

---

##### `Function`<sup>Required</sup> <a name="Function" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.function"></a>

```csharp
public string Function { get; }
```

- *Type:* string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.threshold"></a>

```csharp
public double Threshold { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.internalValue"></a>

```csharp
public ServiceLevelEventsBadEventsSelect InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect">ServiceLevelEventsBadEventsSelect</a>

---


### ServiceLevelEventsGoodEventsOutputReference <a name="ServiceLevelEventsGoodEventsOutputReference" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new ServiceLevelEventsGoodEventsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.putSelect">PutSelect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.resetSelect">ResetSelect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.resetWhere">ResetWhere</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSelect` <a name="PutSelect" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.putSelect"></a>

```csharp
private void PutSelect(ServiceLevelEventsGoodEventsSelect Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.putSelect.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect">ServiceLevelEventsGoodEventsSelect</a>

---

##### `ResetSelect` <a name="ResetSelect" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.resetSelect"></a>

```csharp
private void ResetSelect()
```

##### `ResetWhere` <a name="ResetWhere" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.resetWhere"></a>

```csharp
private void ResetWhere()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.select">Select</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference">ServiceLevelEventsGoodEventsSelectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.fromInput">FromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.selectInput">SelectInput</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect">ServiceLevelEventsGoodEventsSelect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.whereInput">WhereInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.from">From</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.where">Where</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents">ServiceLevelEventsGoodEvents</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Select`<sup>Required</sup> <a name="Select" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.select"></a>

```csharp
public ServiceLevelEventsGoodEventsSelectOutputReference Select { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference">ServiceLevelEventsGoodEventsSelectOutputReference</a>

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.fromInput"></a>

```csharp
public string FromInput { get; }
```

- *Type:* string

---

##### `SelectInput`<sup>Optional</sup> <a name="SelectInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.selectInput"></a>

```csharp
public ServiceLevelEventsGoodEventsSelect SelectInput { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect">ServiceLevelEventsGoodEventsSelect</a>

---

##### `WhereInput`<sup>Optional</sup> <a name="WhereInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.whereInput"></a>

```csharp
public string WhereInput { get; }
```

- *Type:* string

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.from"></a>

```csharp
public string From { get; }
```

- *Type:* string

---

##### `Where`<sup>Required</sup> <a name="Where" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.where"></a>

```csharp
public string Where { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.internalValue"></a>

```csharp
public ServiceLevelEventsGoodEvents InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents">ServiceLevelEventsGoodEvents</a>

---


### ServiceLevelEventsGoodEventsSelectOutputReference <a name="ServiceLevelEventsGoodEventsSelectOutputReference" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new ServiceLevelEventsGoodEventsSelectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.resetAttribute">ResetAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.resetThreshold">ResetThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAttribute` <a name="ResetAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.resetAttribute"></a>

```csharp
private void ResetAttribute()
```

##### `ResetThreshold` <a name="ResetThreshold" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.resetThreshold"></a>

```csharp
private void ResetThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.attributeInput">AttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.functionInput">FunctionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.attribute">Attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.function">Function</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.threshold">Threshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect">ServiceLevelEventsGoodEventsSelect</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttributeInput`<sup>Optional</sup> <a name="AttributeInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.attributeInput"></a>

```csharp
public string AttributeInput { get; }
```

- *Type:* string

---

##### `FunctionInput`<sup>Optional</sup> <a name="FunctionInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.functionInput"></a>

```csharp
public string FunctionInput { get; }
```

- *Type:* string

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.thresholdInput"></a>

```csharp
public double ThresholdInput { get; }
```

- *Type:* double

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.attribute"></a>

```csharp
public string Attribute { get; }
```

- *Type:* string

---

##### `Function`<sup>Required</sup> <a name="Function" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.function"></a>

```csharp
public string Function { get; }
```

- *Type:* string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.threshold"></a>

```csharp
public double Threshold { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.internalValue"></a>

```csharp
public ServiceLevelEventsGoodEventsSelect InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect">ServiceLevelEventsGoodEventsSelect</a>

---


### ServiceLevelEventsOutputReference <a name="ServiceLevelEventsOutputReference" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new ServiceLevelEventsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.putBadEvents">PutBadEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.putGoodEvents">PutGoodEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.putValidEvents">PutValidEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.resetBadEvents">ResetBadEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.resetGoodEvents">ResetGoodEvents</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBadEvents` <a name="PutBadEvents" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.putBadEvents"></a>

```csharp
private void PutBadEvents(ServiceLevelEventsBadEvents Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.putBadEvents.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents">ServiceLevelEventsBadEvents</a>

---

##### `PutGoodEvents` <a name="PutGoodEvents" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.putGoodEvents"></a>

```csharp
private void PutGoodEvents(ServiceLevelEventsGoodEvents Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.putGoodEvents.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents">ServiceLevelEventsGoodEvents</a>

---

##### `PutValidEvents` <a name="PutValidEvents" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.putValidEvents"></a>

```csharp
private void PutValidEvents(ServiceLevelEventsValidEvents Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.putValidEvents.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents">ServiceLevelEventsValidEvents</a>

---

##### `ResetBadEvents` <a name="ResetBadEvents" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.resetBadEvents"></a>

```csharp
private void ResetBadEvents()
```

##### `ResetGoodEvents` <a name="ResetGoodEvents" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.resetGoodEvents"></a>

```csharp
private void ResetGoodEvents()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.badEvents">BadEvents</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference">ServiceLevelEventsBadEventsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.goodEvents">GoodEvents</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference">ServiceLevelEventsGoodEventsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.validEvents">ValidEvents</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference">ServiceLevelEventsValidEventsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.badEventsInput">BadEventsInput</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents">ServiceLevelEventsBadEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.goodEventsInput">GoodEventsInput</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents">ServiceLevelEventsGoodEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.validEventsInput">ValidEventsInput</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents">ServiceLevelEventsValidEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.accountId">AccountId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents">ServiceLevelEvents</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BadEvents`<sup>Required</sup> <a name="BadEvents" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.badEvents"></a>

```csharp
public ServiceLevelEventsBadEventsOutputReference BadEvents { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference">ServiceLevelEventsBadEventsOutputReference</a>

---

##### `GoodEvents`<sup>Required</sup> <a name="GoodEvents" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.goodEvents"></a>

```csharp
public ServiceLevelEventsGoodEventsOutputReference GoodEvents { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference">ServiceLevelEventsGoodEventsOutputReference</a>

---

##### `ValidEvents`<sup>Required</sup> <a name="ValidEvents" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.validEvents"></a>

```csharp
public ServiceLevelEventsValidEventsOutputReference ValidEvents { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference">ServiceLevelEventsValidEventsOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.accountIdInput"></a>

```csharp
public double AccountIdInput { get; }
```

- *Type:* double

---

##### `BadEventsInput`<sup>Optional</sup> <a name="BadEventsInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.badEventsInput"></a>

```csharp
public ServiceLevelEventsBadEvents BadEventsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents">ServiceLevelEventsBadEvents</a>

---

##### `GoodEventsInput`<sup>Optional</sup> <a name="GoodEventsInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.goodEventsInput"></a>

```csharp
public ServiceLevelEventsGoodEvents GoodEventsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents">ServiceLevelEventsGoodEvents</a>

---

##### `ValidEventsInput`<sup>Optional</sup> <a name="ValidEventsInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.validEventsInput"></a>

```csharp
public ServiceLevelEventsValidEvents ValidEventsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents">ServiceLevelEventsValidEvents</a>

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.accountId"></a>

```csharp
public double AccountId { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.internalValue"></a>

```csharp
public ServiceLevelEvents InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents">ServiceLevelEvents</a>

---


### ServiceLevelEventsValidEventsOutputReference <a name="ServiceLevelEventsValidEventsOutputReference" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new ServiceLevelEventsValidEventsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.putSelect">PutSelect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.resetSelect">ResetSelect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.resetWhere">ResetWhere</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSelect` <a name="PutSelect" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.putSelect"></a>

```csharp
private void PutSelect(ServiceLevelEventsValidEventsSelect Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.putSelect.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect">ServiceLevelEventsValidEventsSelect</a>

---

##### `ResetSelect` <a name="ResetSelect" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.resetSelect"></a>

```csharp
private void ResetSelect()
```

##### `ResetWhere` <a name="ResetWhere" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.resetWhere"></a>

```csharp
private void ResetWhere()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.select">Select</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference">ServiceLevelEventsValidEventsSelectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.fromInput">FromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.selectInput">SelectInput</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect">ServiceLevelEventsValidEventsSelect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.whereInput">WhereInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.from">From</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.where">Where</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents">ServiceLevelEventsValidEvents</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Select`<sup>Required</sup> <a name="Select" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.select"></a>

```csharp
public ServiceLevelEventsValidEventsSelectOutputReference Select { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference">ServiceLevelEventsValidEventsSelectOutputReference</a>

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.fromInput"></a>

```csharp
public string FromInput { get; }
```

- *Type:* string

---

##### `SelectInput`<sup>Optional</sup> <a name="SelectInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.selectInput"></a>

```csharp
public ServiceLevelEventsValidEventsSelect SelectInput { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect">ServiceLevelEventsValidEventsSelect</a>

---

##### `WhereInput`<sup>Optional</sup> <a name="WhereInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.whereInput"></a>

```csharp
public string WhereInput { get; }
```

- *Type:* string

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.from"></a>

```csharp
public string From { get; }
```

- *Type:* string

---

##### `Where`<sup>Required</sup> <a name="Where" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.where"></a>

```csharp
public string Where { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.internalValue"></a>

```csharp
public ServiceLevelEventsValidEvents InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents">ServiceLevelEventsValidEvents</a>

---


### ServiceLevelEventsValidEventsSelectOutputReference <a name="ServiceLevelEventsValidEventsSelectOutputReference" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new ServiceLevelEventsValidEventsSelectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.resetAttribute">ResetAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.resetThreshold">ResetThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAttribute` <a name="ResetAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.resetAttribute"></a>

```csharp
private void ResetAttribute()
```

##### `ResetThreshold` <a name="ResetThreshold" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.resetThreshold"></a>

```csharp
private void ResetThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.attributeInput">AttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.functionInput">FunctionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.attribute">Attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.function">Function</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.threshold">Threshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect">ServiceLevelEventsValidEventsSelect</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttributeInput`<sup>Optional</sup> <a name="AttributeInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.attributeInput"></a>

```csharp
public string AttributeInput { get; }
```

- *Type:* string

---

##### `FunctionInput`<sup>Optional</sup> <a name="FunctionInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.functionInput"></a>

```csharp
public string FunctionInput { get; }
```

- *Type:* string

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.thresholdInput"></a>

```csharp
public double ThresholdInput { get; }
```

- *Type:* double

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.attribute"></a>

```csharp
public string Attribute { get; }
```

- *Type:* string

---

##### `Function`<sup>Required</sup> <a name="Function" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.function"></a>

```csharp
public string Function { get; }
```

- *Type:* string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.threshold"></a>

```csharp
public double Threshold { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.internalValue"></a>

```csharp
public ServiceLevelEventsValidEventsSelect InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect">ServiceLevelEventsValidEventsSelect</a>

---


### ServiceLevelObjectiveOutputReference <a name="ServiceLevelObjectiveOutputReference" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new ServiceLevelObjectiveOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.putTimeWindow">PutTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTimeWindow` <a name="PutTimeWindow" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.putTimeWindow"></a>

```csharp
private void PutTimeWindow(ServiceLevelObjectiveTimeWindow Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.putTimeWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindow">ServiceLevelObjectiveTimeWindow</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.timeWindow">TimeWindow</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference">ServiceLevelObjectiveTimeWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.targetInput">TargetInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.timeWindowInput">TimeWindowInput</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindow">ServiceLevelObjectiveTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.target">Target</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective">ServiceLevelObjective</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TimeWindow`<sup>Required</sup> <a name="TimeWindow" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.timeWindow"></a>

```csharp
public ServiceLevelObjectiveTimeWindowOutputReference TimeWindow { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference">ServiceLevelObjectiveTimeWindowOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.targetInput"></a>

```csharp
public double TargetInput { get; }
```

- *Type:* double

---

##### `TimeWindowInput`<sup>Optional</sup> <a name="TimeWindowInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.timeWindowInput"></a>

```csharp
public ServiceLevelObjectiveTimeWindow TimeWindowInput { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindow">ServiceLevelObjectiveTimeWindow</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.target"></a>

```csharp
public double Target { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.internalValue"></a>

```csharp
public ServiceLevelObjective InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective">ServiceLevelObjective</a>

---


### ServiceLevelObjectiveTimeWindowOutputReference <a name="ServiceLevelObjectiveTimeWindowOutputReference" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new ServiceLevelObjectiveTimeWindowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.putRolling">PutRolling</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRolling` <a name="PutRolling" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.putRolling"></a>

```csharp
private void PutRolling(ServiceLevelObjectiveTimeWindowRolling Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.putRolling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRolling">ServiceLevelObjectiveTimeWindowRolling</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.property.rolling">Rolling</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference">ServiceLevelObjectiveTimeWindowRollingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.property.rollingInput">RollingInput</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRolling">ServiceLevelObjectiveTimeWindowRolling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindow">ServiceLevelObjectiveTimeWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Rolling`<sup>Required</sup> <a name="Rolling" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.property.rolling"></a>

```csharp
public ServiceLevelObjectiveTimeWindowRollingOutputReference Rolling { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference">ServiceLevelObjectiveTimeWindowRollingOutputReference</a>

---

##### `RollingInput`<sup>Optional</sup> <a name="RollingInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.property.rollingInput"></a>

```csharp
public ServiceLevelObjectiveTimeWindowRolling RollingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRolling">ServiceLevelObjectiveTimeWindowRolling</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.property.internalValue"></a>

```csharp
public ServiceLevelObjectiveTimeWindow InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindow">ServiceLevelObjectiveTimeWindow</a>

---


### ServiceLevelObjectiveTimeWindowRollingOutputReference <a name="ServiceLevelObjectiveTimeWindowRollingOutputReference" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new ServiceLevelObjectiveTimeWindowRollingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.countInput">CountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.unitInput">UnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRolling">ServiceLevelObjectiveTimeWindowRolling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.countInput"></a>

```csharp
public double CountInput { get; }
```

- *Type:* double

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.unitInput"></a>

```csharp
public string UnitInput { get; }
```

- *Type:* string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.internalValue"></a>

```csharp
public ServiceLevelObjectiveTimeWindowRolling InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRolling">ServiceLevelObjectiveTimeWindowRolling</a>

---



