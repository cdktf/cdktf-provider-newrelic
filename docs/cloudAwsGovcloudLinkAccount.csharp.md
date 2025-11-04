# `cloudAwsGovcloudLinkAccount` Submodule <a name="`cloudAwsGovcloudLinkAccount` Submodule" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudAwsGovcloudLinkAccount <a name="CloudAwsGovcloudLinkAccount" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/cloud_aws_govcloud_link_account newrelic_cloud_aws_govcloud_link_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAwsGovcloudLinkAccount(Construct Scope, string Id, CloudAwsGovcloudLinkAccountConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig">CloudAwsGovcloudLinkAccountConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig">CloudAwsGovcloudLinkAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.resetMetricCollectionMode">ResetMetricCollectionMode</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMetricCollectionMode` <a name="ResetMetricCollectionMode" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.resetMetricCollectionMode"></a>

```csharp
private void ResetMetricCollectionMode()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CloudAwsGovcloudLinkAccount resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

CloudAwsGovcloudLinkAccount.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

CloudAwsGovcloudLinkAccount.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

CloudAwsGovcloudLinkAccount.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

CloudAwsGovcloudLinkAccount.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CloudAwsGovcloudLinkAccount resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudAwsGovcloudLinkAccount to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudAwsGovcloudLinkAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/cloud_aws_govcloud_link_account#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CloudAwsGovcloudLinkAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.accountIdInput">AccountIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.arnInput">ArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.metricCollectionModeInput">MetricCollectionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.accountId">AccountId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.metricCollectionMode">MetricCollectionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.accountIdInput"></a>

```csharp
public double AccountIdInput { get; }
```

- *Type:* double

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.arnInput"></a>

```csharp
public string ArnInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MetricCollectionModeInput`<sup>Optional</sup> <a name="MetricCollectionModeInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.metricCollectionModeInput"></a>

```csharp
public string MetricCollectionModeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.accountId"></a>

```csharp
public double AccountId { get; }
```

- *Type:* double

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MetricCollectionMode`<sup>Required</sup> <a name="MetricCollectionMode" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.metricCollectionMode"></a>

```csharp
public string MetricCollectionMode { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudAwsGovcloudLinkAccountConfig <a name="CloudAwsGovcloudLinkAccountConfig" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new CloudAwsGovcloudLinkAccountConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Arn,
    string Name,
    double AccountId = null,
    string Id = null,
    string MetricCollectionMode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.arn">Arn</a></code> | <code>string</code> | The ARN of the identifying AWS GovCloud account. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.name">Name</a></code> | <code>string</code> | Name of the AWS GovCloud 'Linked Account' to identify in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.accountId">AccountId</a></code> | <code>double</code> | The ID of the account in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/cloud_aws_govcloud_link_account#id CloudAwsGovcloudLinkAccount#id}. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.metricCollectionMode">MetricCollectionMode</a></code> | <code>string</code> | The mode by which metric data is to be collected from the linked AWS GovCloud account. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.arn"></a>

```csharp
public string Arn { get; set; }
```

- *Type:* string

The ARN of the identifying AWS GovCloud account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/cloud_aws_govcloud_link_account#arn CloudAwsGovcloudLinkAccount#arn}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the AWS GovCloud 'Linked Account' to identify in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/cloud_aws_govcloud_link_account#name CloudAwsGovcloudLinkAccount#name}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.accountId"></a>

```csharp
public double AccountId { get; set; }
```

- *Type:* double

The ID of the account in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/cloud_aws_govcloud_link_account#account_id CloudAwsGovcloudLinkAccount#account_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/cloud_aws_govcloud_link_account#id CloudAwsGovcloudLinkAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MetricCollectionMode`<sup>Optional</sup> <a name="MetricCollectionMode" id="@cdktf/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.metricCollectionMode"></a>

```csharp
public string MetricCollectionMode { get; set; }
```

- *Type:* string

The mode by which metric data is to be collected from the linked AWS GovCloud account.

Use 'PUSH' for Metric Streams and 'PULL' for API Polling based metric collection respectively.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.0/docs/resources/cloud_aws_govcloud_link_account#metric_collection_mode CloudAwsGovcloudLinkAccount#metric_collection_mode}

---



