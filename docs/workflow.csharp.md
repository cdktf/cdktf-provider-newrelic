# `workflow` Submodule <a name="`workflow` Submodule" id="@cdktf/provider-newrelic.workflow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Workflow <a name="Workflow" id="@cdktf/provider-newrelic.workflow.Workflow"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/workflow newrelic_workflow}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workflow.Workflow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new Workflow(Construct Scope, string Id, WorkflowConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowConfig">WorkflowConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.workflow.WorkflowConfig">WorkflowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.putDestination">PutDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.putEnrichments">PutEnrichments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.putIssuesFilter">PutIssuesFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.resetDestinationsEnabled">ResetDestinationsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.resetEnrichments">ResetEnrichments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.resetEnrichmentsEnabled">ResetEnrichmentsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.workflow.Workflow.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-newrelic.workflow.Workflow.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-newrelic.workflow.Workflow.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.workflow.Workflow.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-newrelic.workflow.Workflow.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-newrelic.workflow.Workflow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-newrelic.workflow.Workflow.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-newrelic.workflow.Workflow.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-newrelic.workflow.Workflow.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-newrelic.workflow.Workflow.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-newrelic.workflow.Workflow.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-newrelic.workflow.Workflow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.workflow.Workflow.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.Workflow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.workflow.Workflow.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.Workflow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.workflow.Workflow.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.Workflow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.workflow.Workflow.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.Workflow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.workflow.Workflow.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.Workflow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.workflow.Workflow.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.Workflow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.workflow.Workflow.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.Workflow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.workflow.Workflow.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.Workflow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.workflow.Workflow.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.Workflow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-newrelic.workflow.Workflow.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-newrelic.workflow.Workflow.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.workflow.Workflow.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.workflow.Workflow.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.workflow.Workflow.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.Workflow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-newrelic.workflow.Workflow.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.workflow.Workflow.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-newrelic.workflow.Workflow.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-newrelic.workflow.Workflow.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-newrelic.workflow.Workflow.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-newrelic.workflow.Workflow.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.workflow.Workflow.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDestination` <a name="PutDestination" id="@cdktf/provider-newrelic.workflow.Workflow.putDestination"></a>

```csharp
private void PutDestination(IResolvable|WorkflowDestination[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.workflow.Workflow.putDestination.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-newrelic.workflow.WorkflowDestination">WorkflowDestination</a>[]

---

##### `PutEnrichments` <a name="PutEnrichments" id="@cdktf/provider-newrelic.workflow.Workflow.putEnrichments"></a>

```csharp
private void PutEnrichments(WorkflowEnrichments Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.workflow.Workflow.putEnrichments.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichments">WorkflowEnrichments</a>

---

##### `PutIssuesFilter` <a name="PutIssuesFilter" id="@cdktf/provider-newrelic.workflow.Workflow.putIssuesFilter"></a>

```csharp
private void PutIssuesFilter(WorkflowIssuesFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.workflow.Workflow.putIssuesFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilter">WorkflowIssuesFilter</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-newrelic.workflow.Workflow.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetDestinationsEnabled` <a name="ResetDestinationsEnabled" id="@cdktf/provider-newrelic.workflow.Workflow.resetDestinationsEnabled"></a>

```csharp
private void ResetDestinationsEnabled()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-newrelic.workflow.Workflow.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetEnrichments` <a name="ResetEnrichments" id="@cdktf/provider-newrelic.workflow.Workflow.resetEnrichments"></a>

```csharp
private void ResetEnrichments()
```

##### `ResetEnrichmentsEnabled` <a name="ResetEnrichmentsEnabled" id="@cdktf/provider-newrelic.workflow.Workflow.resetEnrichmentsEnabled"></a>

```csharp
private void ResetEnrichmentsEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-newrelic.workflow.Workflow.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Workflow resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-newrelic.workflow.Workflow.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

Workflow.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.workflow.Workflow.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-newrelic.workflow.Workflow.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

Workflow.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.workflow.Workflow.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-newrelic.workflow.Workflow.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

Workflow.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.workflow.Workflow.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-newrelic.workflow.Workflow.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

Workflow.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a Workflow resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-newrelic.workflow.Workflow.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-newrelic.workflow.Workflow.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Workflow to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-newrelic.workflow.Workflow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Workflow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/workflow#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.workflow.Workflow.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the Workflow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.destination">Destination</a></code> | <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationList">WorkflowDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.enrichments">Enrichments</a></code> | <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference">WorkflowEnrichmentsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.guid">Guid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.issuesFilter">IssuesFilter</a></code> | <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference">WorkflowIssuesFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.lastRun">LastRun</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.workflowId">WorkflowId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.accountIdInput">AccountIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.destinationInput">DestinationInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-newrelic.workflow.WorkflowDestination">WorkflowDestination</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.destinationsEnabledInput">DestinationsEnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.enabledInput">EnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.enrichmentsEnabledInput">EnrichmentsEnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.enrichmentsInput">EnrichmentsInput</a></code> | <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichments">WorkflowEnrichments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.issuesFilterInput">IssuesFilterInput</a></code> | <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilter">WorkflowIssuesFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.mutingRulesHandlingInput">MutingRulesHandlingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.accountId">AccountId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.destinationsEnabled">DestinationsEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.enabled">Enabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.enrichmentsEnabled">EnrichmentsEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.mutingRulesHandling">MutingRulesHandling</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-newrelic.workflow.Workflow.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-newrelic.workflow.Workflow.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.workflow.Workflow.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-newrelic.workflow.Workflow.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-newrelic.workflow.Workflow.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-newrelic.workflow.Workflow.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-newrelic.workflow.Workflow.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.workflow.Workflow.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.workflow.Workflow.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.workflow.Workflow.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.workflow.Workflow.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.workflow.Workflow.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.workflow.Workflow.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.workflow.Workflow.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-newrelic.workflow.Workflow.property.destination"></a>

```csharp
public WorkflowDestinationList Destination { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationList">WorkflowDestinationList</a>

---

##### `Enrichments`<sup>Required</sup> <a name="Enrichments" id="@cdktf/provider-newrelic.workflow.Workflow.property.enrichments"></a>

```csharp
public WorkflowEnrichmentsOutputReference Enrichments { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference">WorkflowEnrichmentsOutputReference</a>

---

##### `Guid`<sup>Required</sup> <a name="Guid" id="@cdktf/provider-newrelic.workflow.Workflow.property.guid"></a>

```csharp
public string Guid { get; }
```

- *Type:* string

---

##### `IssuesFilter`<sup>Required</sup> <a name="IssuesFilter" id="@cdktf/provider-newrelic.workflow.Workflow.property.issuesFilter"></a>

```csharp
public WorkflowIssuesFilterOutputReference IssuesFilter { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference">WorkflowIssuesFilterOutputReference</a>

---

##### `LastRun`<sup>Required</sup> <a name="LastRun" id="@cdktf/provider-newrelic.workflow.Workflow.property.lastRun"></a>

```csharp
public string LastRun { get; }
```

- *Type:* string

---

##### `WorkflowId`<sup>Required</sup> <a name="WorkflowId" id="@cdktf/provider-newrelic.workflow.Workflow.property.workflowId"></a>

```csharp
public string WorkflowId { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-newrelic.workflow.Workflow.property.accountIdInput"></a>

```csharp
public double AccountIdInput { get; }
```

- *Type:* double

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-newrelic.workflow.Workflow.property.destinationInput"></a>

```csharp
public IResolvable|WorkflowDestination[] DestinationInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-newrelic.workflow.WorkflowDestination">WorkflowDestination</a>[]

---

##### `DestinationsEnabledInput`<sup>Optional</sup> <a name="DestinationsEnabledInput" id="@cdktf/provider-newrelic.workflow.Workflow.property.destinationsEnabledInput"></a>

```csharp
public bool|IResolvable DestinationsEnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-newrelic.workflow.Workflow.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `EnrichmentsEnabledInput`<sup>Optional</sup> <a name="EnrichmentsEnabledInput" id="@cdktf/provider-newrelic.workflow.Workflow.property.enrichmentsEnabledInput"></a>

```csharp
public bool|IResolvable EnrichmentsEnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `EnrichmentsInput`<sup>Optional</sup> <a name="EnrichmentsInput" id="@cdktf/provider-newrelic.workflow.Workflow.property.enrichmentsInput"></a>

```csharp
public WorkflowEnrichments EnrichmentsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichments">WorkflowEnrichments</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-newrelic.workflow.Workflow.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IssuesFilterInput`<sup>Optional</sup> <a name="IssuesFilterInput" id="@cdktf/provider-newrelic.workflow.Workflow.property.issuesFilterInput"></a>

```csharp
public WorkflowIssuesFilter IssuesFilterInput { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilter">WorkflowIssuesFilter</a>

---

##### `MutingRulesHandlingInput`<sup>Optional</sup> <a name="MutingRulesHandlingInput" id="@cdktf/provider-newrelic.workflow.Workflow.property.mutingRulesHandlingInput"></a>

```csharp
public string MutingRulesHandlingInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-newrelic.workflow.Workflow.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-newrelic.workflow.Workflow.property.accountId"></a>

```csharp
public double AccountId { get; }
```

- *Type:* double

---

##### `DestinationsEnabled`<sup>Required</sup> <a name="DestinationsEnabled" id="@cdktf/provider-newrelic.workflow.Workflow.property.destinationsEnabled"></a>

```csharp
public bool|IResolvable DestinationsEnabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-newrelic.workflow.Workflow.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `EnrichmentsEnabled`<sup>Required</sup> <a name="EnrichmentsEnabled" id="@cdktf/provider-newrelic.workflow.Workflow.property.enrichmentsEnabled"></a>

```csharp
public bool|IResolvable EnrichmentsEnabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.workflow.Workflow.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MutingRulesHandling`<sup>Required</sup> <a name="MutingRulesHandling" id="@cdktf/provider-newrelic.workflow.Workflow.property.mutingRulesHandling"></a>

```csharp
public string MutingRulesHandling { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.workflow.Workflow.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-newrelic.workflow.Workflow.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkflowConfig <a name="WorkflowConfig" id="@cdktf/provider-newrelic.workflow.WorkflowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.workflow.WorkflowConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new WorkflowConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|WorkflowDestination[] Destination,
    WorkflowIssuesFilter IssuesFilter,
    string MutingRulesHandling,
    string Name,
    double AccountId = null,
    bool|IResolvable DestinationsEnabled = null,
    bool|IResolvable Enabled = null,
    WorkflowEnrichments Enrichments = null,
    bool|IResolvable EnrichmentsEnabled = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowConfig.property.destination">Destination</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-newrelic.workflow.WorkflowDestination">WorkflowDestination</a>[]</code> | destination block. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowConfig.property.issuesFilter">IssuesFilter</a></code> | <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilter">WorkflowIssuesFilter</a></code> | issues_filter block. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowConfig.property.mutingRulesHandling">MutingRulesHandling</a></code> | <code>string</code> | The type of the muting rule handling. One of: (NOTIFY_ALL_ISSUES, DONT_NOTIFY_FULLY_MUTED_ISSUES, DONT_NOTIFY_FULLY_OR_PARTIALLY_MUTED_ISSUES). |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowConfig.property.name">Name</a></code> | <code>string</code> | (Required) The name of the workflow. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowConfig.property.accountId">AccountId</a></code> | <code>double</code> | The account id of the workflow. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowConfig.property.destinationsEnabled">DestinationsEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Indicates whether the destinations are enabled. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowConfig.property.enabled">Enabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Indicates whether the workflow is enabled. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowConfig.property.enrichments">Enrichments</a></code> | <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichments">WorkflowEnrichments</a></code> | enrichments block. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowConfig.property.enrichmentsEnabled">EnrichmentsEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Indicates whether the enrichments are enabled. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/workflow#id Workflow#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.workflow.WorkflowConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.workflow.WorkflowConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.workflow.WorkflowConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.workflow.WorkflowConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.workflow.WorkflowConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.workflow.WorkflowConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.workflow.WorkflowConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-newrelic.workflow.WorkflowConfig.property.destination"></a>

```csharp
public IResolvable|WorkflowDestination[] Destination { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-newrelic.workflow.WorkflowDestination">WorkflowDestination</a>[]

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/workflow#destination Workflow#destination}

---

##### `IssuesFilter`<sup>Required</sup> <a name="IssuesFilter" id="@cdktf/provider-newrelic.workflow.WorkflowConfig.property.issuesFilter"></a>

```csharp
public WorkflowIssuesFilter IssuesFilter { get; set; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilter">WorkflowIssuesFilter</a>

issues_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/workflow#issues_filter Workflow#issues_filter}

---

##### `MutingRulesHandling`<sup>Required</sup> <a name="MutingRulesHandling" id="@cdktf/provider-newrelic.workflow.WorkflowConfig.property.mutingRulesHandling"></a>

```csharp
public string MutingRulesHandling { get; set; }
```

- *Type:* string

The type of the muting rule handling. One of: (NOTIFY_ALL_ISSUES, DONT_NOTIFY_FULLY_MUTED_ISSUES, DONT_NOTIFY_FULLY_OR_PARTIALLY_MUTED_ISSUES).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/workflow#muting_rules_handling Workflow#muting_rules_handling}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.workflow.WorkflowConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

(Required) The name of the workflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/workflow#name Workflow#name}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-newrelic.workflow.WorkflowConfig.property.accountId"></a>

```csharp
public double AccountId { get; set; }
```

- *Type:* double

The account id of the workflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/workflow#account_id Workflow#account_id}

---

##### `DestinationsEnabled`<sup>Optional</sup> <a name="DestinationsEnabled" id="@cdktf/provider-newrelic.workflow.WorkflowConfig.property.destinationsEnabled"></a>

```csharp
public bool|IResolvable DestinationsEnabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Indicates whether the destinations are enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/workflow#destinations_enabled Workflow#destinations_enabled}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-newrelic.workflow.WorkflowConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Indicates whether the workflow is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/workflow#enabled Workflow#enabled}

---

##### `Enrichments`<sup>Optional</sup> <a name="Enrichments" id="@cdktf/provider-newrelic.workflow.WorkflowConfig.property.enrichments"></a>

```csharp
public WorkflowEnrichments Enrichments { get; set; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichments">WorkflowEnrichments</a>

enrichments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/workflow#enrichments Workflow#enrichments}

---

##### `EnrichmentsEnabled`<sup>Optional</sup> <a name="EnrichmentsEnabled" id="@cdktf/provider-newrelic.workflow.WorkflowConfig.property.enrichmentsEnabled"></a>

```csharp
public bool|IResolvable EnrichmentsEnabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Indicates whether the enrichments are enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/workflow#enrichments_enabled Workflow#enrichments_enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-newrelic.workflow.WorkflowConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/workflow#id Workflow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### WorkflowDestination <a name="WorkflowDestination" id="@cdktf/provider-newrelic.workflow.WorkflowDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.workflow.WorkflowDestination.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new WorkflowDestination {
    string ChannelId,
    string[] NotificationTriggers = null,
    bool|IResolvable UpdateOriginalMessage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestination.property.channelId">ChannelId</a></code> | <code>string</code> | (Required) Destination's channel id. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestination.property.notificationTriggers">NotificationTriggers</a></code> | <code>string[]</code> | List of triggers to notify about in this destination configuration. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestination.property.updateOriginalMessage">UpdateOriginalMessage</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Update original notification message (Slack channels only). |

---

##### `ChannelId`<sup>Required</sup> <a name="ChannelId" id="@cdktf/provider-newrelic.workflow.WorkflowDestination.property.channelId"></a>

```csharp
public string ChannelId { get; set; }
```

- *Type:* string

(Required) Destination's channel id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/workflow#channel_id Workflow#channel_id}

---

##### `NotificationTriggers`<sup>Optional</sup> <a name="NotificationTriggers" id="@cdktf/provider-newrelic.workflow.WorkflowDestination.property.notificationTriggers"></a>

```csharp
public string[] NotificationTriggers { get; set; }
```

- *Type:* string[]

List of triggers to notify about in this destination configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/workflow#notification_triggers Workflow#notification_triggers}

---

##### `UpdateOriginalMessage`<sup>Optional</sup> <a name="UpdateOriginalMessage" id="@cdktf/provider-newrelic.workflow.WorkflowDestination.property.updateOriginalMessage"></a>

```csharp
public bool|IResolvable UpdateOriginalMessage { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Update original notification message (Slack channels only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/workflow#update_original_message Workflow#update_original_message}

---

### WorkflowEnrichments <a name="WorkflowEnrichments" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichments.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new WorkflowEnrichments {
    IResolvable|WorkflowEnrichmentsNrql[] Nrql
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichments.property.nrql">Nrql</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrql">WorkflowEnrichmentsNrql</a>[]</code> | nrql block. |

---

##### `Nrql`<sup>Required</sup> <a name="Nrql" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichments.property.nrql"></a>

```csharp
public IResolvable|WorkflowEnrichmentsNrql[] Nrql { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrql">WorkflowEnrichmentsNrql</a>[]

nrql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/workflow#nrql Workflow#nrql}

---

### WorkflowEnrichmentsNrql <a name="WorkflowEnrichmentsNrql" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrql.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new WorkflowEnrichmentsNrql {
    IResolvable|WorkflowEnrichmentsNrqlConfiguration[] Configuration,
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrql.property.configuration">Configuration</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfiguration">WorkflowEnrichmentsNrqlConfiguration</a>[]</code> | configuration block. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrql.property.name">Name</a></code> | <code>string</code> | (Required) Enrichment's name. |

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrql.property.configuration"></a>

```csharp
public IResolvable|WorkflowEnrichmentsNrqlConfiguration[] Configuration { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfiguration">WorkflowEnrichmentsNrqlConfiguration</a>[]

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/workflow#configuration Workflow#configuration}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrql.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

(Required) Enrichment's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/workflow#name Workflow#name}

---

### WorkflowEnrichmentsNrqlConfiguration <a name="WorkflowEnrichmentsNrqlConfiguration" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new WorkflowEnrichmentsNrqlConfiguration {
    string Query
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfiguration.property.query">Query</a></code> | <code>string</code> | enrichment's NRQL query. |

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfiguration.property.query"></a>

```csharp
public string Query { get; set; }
```

- *Type:* string

enrichment's NRQL query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/workflow#query Workflow#query}

---

### WorkflowIssuesFilter <a name="WorkflowIssuesFilter" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new WorkflowIssuesFilter {
    string Name,
    string Type,
    IResolvable|WorkflowIssuesFilterPredicate[] Predicate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilter.property.name">Name</a></code> | <code>string</code> | (Required) Filter's name. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilter.property.type">Type</a></code> | <code>string</code> | (Required) The type of the filter. One of: (FILTER, VIEW). |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilter.property.predicate">Predicate</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicate">WorkflowIssuesFilterPredicate</a>[]</code> | predicate block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

(Required) Filter's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/workflow#name Workflow#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilter.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

(Required) The type of the filter. One of: (FILTER, VIEW).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/workflow#type Workflow#type}

---

##### `Predicate`<sup>Optional</sup> <a name="Predicate" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilter.property.predicate"></a>

```csharp
public IResolvable|WorkflowIssuesFilterPredicate[] Predicate { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicate">WorkflowIssuesFilterPredicate</a>[]

predicate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/workflow#predicate Workflow#predicate}

---

### WorkflowIssuesFilterPredicate <a name="WorkflowIssuesFilterPredicate" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new WorkflowIssuesFilterPredicate {
    string Attribute,
    string Operator,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicate.property.attribute">Attribute</a></code> | <code>string</code> | (Required) predicate's attribute. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicate.property.operator">Operator</a></code> | <code>string</code> | The type of the operator. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicate.property.values">Values</a></code> | <code>string[]</code> | List of predicate values. |

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicate.property.attribute"></a>

```csharp
public string Attribute { get; set; }
```

- *Type:* string

(Required) predicate's attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/workflow#attribute Workflow#attribute}

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicate.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

The type of the operator.

One of: (CONTAINS, DOES_NOT_CONTAIN, DOES_NOT_EQUAL, DOES_NOT_EXACTLY_MATCH, ENDS_WITH, EQUAL, EXACTLY_MATCHES, GREATER_OR_EQUAL, GREATER_THAN, IS, IS_NOT, LESS_OR_EQUAL, LESS_THAN, STARTS_WITH).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/workflow#operator Workflow#operator}

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicate.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

List of predicate values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/workflow#values Workflow#values}

---

## Classes <a name="Classes" id="Classes"></a>

### WorkflowDestinationList <a name="WorkflowDestinationList" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new WorkflowDestinationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationList.get"></a>

```csharp
private WorkflowDestinationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-newrelic.workflow.WorkflowDestination">WorkflowDestination</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationList.property.internalValue"></a>

```csharp
public IResolvable|WorkflowDestination[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-newrelic.workflow.WorkflowDestination">WorkflowDestination</a>[]

---


### WorkflowDestinationOutputReference <a name="WorkflowDestinationOutputReference" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new WorkflowDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.resetNotificationTriggers">ResetNotificationTriggers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.resetUpdateOriginalMessage">ResetUpdateOriginalMessage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNotificationTriggers` <a name="ResetNotificationTriggers" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.resetNotificationTriggers"></a>

```csharp
private void ResetNotificationTriggers()
```

##### `ResetUpdateOriginalMessage` <a name="ResetUpdateOriginalMessage" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.resetUpdateOriginalMessage"></a>

```csharp
private void ResetUpdateOriginalMessage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.property.channelIdInput">ChannelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.property.notificationTriggersInput">NotificationTriggersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.property.updateOriginalMessageInput">UpdateOriginalMessageInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.property.channelId">ChannelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.property.notificationTriggers">NotificationTriggers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.property.updateOriginalMessage">UpdateOriginalMessage</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-newrelic.workflow.WorkflowDestination">WorkflowDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `ChannelIdInput`<sup>Optional</sup> <a name="ChannelIdInput" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.property.channelIdInput"></a>

```csharp
public string ChannelIdInput { get; }
```

- *Type:* string

---

##### `NotificationTriggersInput`<sup>Optional</sup> <a name="NotificationTriggersInput" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.property.notificationTriggersInput"></a>

```csharp
public string[] NotificationTriggersInput { get; }
```

- *Type:* string[]

---

##### `UpdateOriginalMessageInput`<sup>Optional</sup> <a name="UpdateOriginalMessageInput" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.property.updateOriginalMessageInput"></a>

```csharp
public bool|IResolvable UpdateOriginalMessageInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `ChannelId`<sup>Required</sup> <a name="ChannelId" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.property.channelId"></a>

```csharp
public string ChannelId { get; }
```

- *Type:* string

---

##### `NotificationTriggers`<sup>Required</sup> <a name="NotificationTriggers" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.property.notificationTriggers"></a>

```csharp
public string[] NotificationTriggers { get; }
```

- *Type:* string[]

---

##### `UpdateOriginalMessage`<sup>Required</sup> <a name="UpdateOriginalMessage" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.property.updateOriginalMessage"></a>

```csharp
public bool|IResolvable UpdateOriginalMessage { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkflowDestination InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-newrelic.workflow.WorkflowDestination">WorkflowDestination</a>

---


### WorkflowEnrichmentsNrqlConfigurationList <a name="WorkflowEnrichmentsNrqlConfigurationList" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new WorkflowEnrichmentsNrqlConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.get"></a>

```csharp
private WorkflowEnrichmentsNrqlConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfiguration">WorkflowEnrichmentsNrqlConfiguration</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.property.internalValue"></a>

```csharp
public IResolvable|WorkflowEnrichmentsNrqlConfiguration[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfiguration">WorkflowEnrichmentsNrqlConfiguration</a>[]

---


### WorkflowEnrichmentsNrqlConfigurationOutputReference <a name="WorkflowEnrichmentsNrqlConfigurationOutputReference" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new WorkflowEnrichmentsNrqlConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.property.queryInput">QueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfiguration">WorkflowEnrichmentsNrqlConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.property.queryInput"></a>

```csharp
public string QueryInput { get; }
```

- *Type:* string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkflowEnrichmentsNrqlConfiguration InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfiguration">WorkflowEnrichmentsNrqlConfiguration</a>

---


### WorkflowEnrichmentsNrqlList <a name="WorkflowEnrichmentsNrqlList" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new WorkflowEnrichmentsNrqlList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.get"></a>

```csharp
private WorkflowEnrichmentsNrqlOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrql">WorkflowEnrichmentsNrql</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.property.internalValue"></a>

```csharp
public IResolvable|WorkflowEnrichmentsNrql[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrql">WorkflowEnrichmentsNrql</a>[]

---


### WorkflowEnrichmentsNrqlOutputReference <a name="WorkflowEnrichmentsNrqlOutputReference" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new WorkflowEnrichmentsNrqlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.putConfiguration">PutConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConfiguration` <a name="PutConfiguration" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.putConfiguration"></a>

```csharp
private void PutConfiguration(IResolvable|WorkflowEnrichmentsNrqlConfiguration[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.putConfiguration.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfiguration">WorkflowEnrichmentsNrqlConfiguration</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.property.accountId">AccountId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.property.configuration">Configuration</a></code> | <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList">WorkflowEnrichmentsNrqlConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.property.enrichmentId">EnrichmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.property.configurationInput">ConfigurationInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfiguration">WorkflowEnrichmentsNrqlConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrql">WorkflowEnrichmentsNrql</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.property.accountId"></a>

```csharp
public double AccountId { get; }
```

- *Type:* double

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.property.configuration"></a>

```csharp
public WorkflowEnrichmentsNrqlConfigurationList Configuration { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList">WorkflowEnrichmentsNrqlConfigurationList</a>

---

##### `EnrichmentId`<sup>Required</sup> <a name="EnrichmentId" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.property.enrichmentId"></a>

```csharp
public string EnrichmentId { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.property.configurationInput"></a>

```csharp
public IResolvable|WorkflowEnrichmentsNrqlConfiguration[] ConfigurationInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfiguration">WorkflowEnrichmentsNrqlConfiguration</a>[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkflowEnrichmentsNrql InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrql">WorkflowEnrichmentsNrql</a>

---


### WorkflowEnrichmentsOutputReference <a name="WorkflowEnrichmentsOutputReference" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new WorkflowEnrichmentsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.putNrql">PutNrql</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNrql` <a name="PutNrql" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.putNrql"></a>

```csharp
private void PutNrql(IResolvable|WorkflowEnrichmentsNrql[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.putNrql.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrql">WorkflowEnrichmentsNrql</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.property.nrql">Nrql</a></code> | <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList">WorkflowEnrichmentsNrqlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.property.nrqlInput">NrqlInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrql">WorkflowEnrichmentsNrql</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichments">WorkflowEnrichments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Nrql`<sup>Required</sup> <a name="Nrql" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.property.nrql"></a>

```csharp
public WorkflowEnrichmentsNrqlList Nrql { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList">WorkflowEnrichmentsNrqlList</a>

---

##### `NrqlInput`<sup>Optional</sup> <a name="NrqlInput" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.property.nrqlInput"></a>

```csharp
public IResolvable|WorkflowEnrichmentsNrql[] NrqlInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrql">WorkflowEnrichmentsNrql</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.property.internalValue"></a>

```csharp
public WorkflowEnrichments InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichments">WorkflowEnrichments</a>

---


### WorkflowIssuesFilterOutputReference <a name="WorkflowIssuesFilterOutputReference" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new WorkflowIssuesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.putPredicate">PutPredicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.resetPredicate">ResetPredicate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPredicate` <a name="PutPredicate" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.putPredicate"></a>

```csharp
private void PutPredicate(IResolvable|WorkflowIssuesFilterPredicate[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.putPredicate.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicate">WorkflowIssuesFilterPredicate</a>[]

---

##### `ResetPredicate` <a name="ResetPredicate" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.resetPredicate"></a>

```csharp
private void ResetPredicate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.property.filterId">FilterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.property.predicate">Predicate</a></code> | <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList">WorkflowIssuesFilterPredicateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.property.predicateInput">PredicateInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicate">WorkflowIssuesFilterPredicate</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilter">WorkflowIssuesFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FilterId`<sup>Required</sup> <a name="FilterId" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.property.filterId"></a>

```csharp
public string FilterId { get; }
```

- *Type:* string

---

##### `Predicate`<sup>Required</sup> <a name="Predicate" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.property.predicate"></a>

```csharp
public WorkflowIssuesFilterPredicateList Predicate { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList">WorkflowIssuesFilterPredicateList</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PredicateInput`<sup>Optional</sup> <a name="PredicateInput" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.property.predicateInput"></a>

```csharp
public IResolvable|WorkflowIssuesFilterPredicate[] PredicateInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicate">WorkflowIssuesFilterPredicate</a>[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.property.internalValue"></a>

```csharp
public WorkflowIssuesFilter InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilter">WorkflowIssuesFilter</a>

---


### WorkflowIssuesFilterPredicateList <a name="WorkflowIssuesFilterPredicateList" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new WorkflowIssuesFilterPredicateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.get"></a>

```csharp
private WorkflowIssuesFilterPredicateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicate">WorkflowIssuesFilterPredicate</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.property.internalValue"></a>

```csharp
public IResolvable|WorkflowIssuesFilterPredicate[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicate">WorkflowIssuesFilterPredicate</a>[]

---


### WorkflowIssuesFilterPredicateOutputReference <a name="WorkflowIssuesFilterPredicateOutputReference" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new WorkflowIssuesFilterPredicateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.property.attributeInput">AttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.property.attribute">Attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicate">WorkflowIssuesFilterPredicate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttributeInput`<sup>Optional</sup> <a name="AttributeInput" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.property.attributeInput"></a>

```csharp
public string AttributeInput { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.property.attribute"></a>

```csharp
public string Attribute { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkflowIssuesFilterPredicate InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicate">WorkflowIssuesFilterPredicate</a>

---



