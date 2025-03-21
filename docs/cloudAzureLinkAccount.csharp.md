# `cloudAzureLinkAccount` Submodule <a name="`cloudAzureLinkAccount` Submodule" id="@cdktf/provider-newrelic.cloudAzureLinkAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudAzureLinkAccount <a name="CloudAzureLinkAccount" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/cloud_azure_link_account newrelic_cloud_azure_link_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureLinkAccount(Construct Scope, string Id, CloudAzureLinkAccountConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig">CloudAzureLinkAccountConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig">CloudAzureLinkAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CloudAzureLinkAccount resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

CloudAzureLinkAccount.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

CloudAzureLinkAccount.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

CloudAzureLinkAccount.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

CloudAzureLinkAccount.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CloudAzureLinkAccount resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudAzureLinkAccount to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudAzureLinkAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/cloud_azure_link_account#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CloudAzureLinkAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.accountIdInput">AccountIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.applicationIdInput">ApplicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.subscriptionIdInput">SubscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.tenantIdInput">TenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.accountId">AccountId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.applicationId">ApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.accountIdInput"></a>

```csharp
public double AccountIdInput { get; }
```

- *Type:* double

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.applicationIdInput"></a>

```csharp
public string ApplicationIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SubscriptionIdInput`<sup>Optional</sup> <a name="SubscriptionIdInput" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.subscriptionIdInput"></a>

```csharp
public string SubscriptionIdInput { get; }
```

- *Type:* string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.tenantIdInput"></a>

```csharp
public string TenantIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.accountId"></a>

```csharp
public double AccountId { get; }
```

- *Type:* double

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.applicationId"></a>

```csharp
public string ApplicationId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudAzureLinkAccountConfig <a name="CloudAzureLinkAccountConfig" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAzureLinkAccountConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ApplicationId,
    string ClientSecret,
    string Name,
    string SubscriptionId,
    string TenantId,
    double AccountId = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.applicationId">ApplicationId</a></code> | <code>string</code> | Application ID for Azure account. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.clientSecret">ClientSecret</a></code> | <code>string</code> | Value of the client secret from Azure. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.name">Name</a></code> | <code>string</code> | Name of the linked account. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | Subscription ID for the Azure account. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.tenantId">TenantId</a></code> | <code>string</code> | Tenant ID for the Azure account. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.accountId">AccountId</a></code> | <code>double</code> | The New Relic account ID where you want to link the Azure account. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/cloud_azure_link_account#id CloudAzureLinkAccount#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.applicationId"></a>

```csharp
public string ApplicationId { get; set; }
```

- *Type:* string

Application ID for Azure account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/cloud_azure_link_account#application_id CloudAzureLinkAccount#application_id}

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

Value of the client secret from Azure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/cloud_azure_link_account#client_secret CloudAzureLinkAccount#client_secret}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the linked account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/cloud_azure_link_account#name CloudAzureLinkAccount#name}

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; set; }
```

- *Type:* string

Subscription ID for the Azure account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/cloud_azure_link_account#subscription_id CloudAzureLinkAccount#subscription_id}

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

Tenant ID for the Azure account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/cloud_azure_link_account#tenant_id CloudAzureLinkAccount#tenant_id}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.accountId"></a>

```csharp
public double AccountId { get; set; }
```

- *Type:* double

The New Relic account ID where you want to link the Azure account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/cloud_azure_link_account#account_id CloudAzureLinkAccount#account_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/cloud_azure_link_account#id CloudAzureLinkAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



