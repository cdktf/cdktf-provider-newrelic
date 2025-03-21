# `browserApplication` Submodule <a name="`browserApplication` Submodule" id="@cdktf/provider-newrelic.browserApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BrowserApplication <a name="BrowserApplication" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/browser_application newrelic_browser_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new BrowserApplication(Construct Scope, string Id, BrowserApplicationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplicationConfig">BrowserApplicationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplicationConfig">BrowserApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.resetCookiesEnabled">ResetCookiesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.resetDistributedTracingEnabled">ResetDistributedTracingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.resetLoaderType">ResetLoaderType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetCookiesEnabled` <a name="ResetCookiesEnabled" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.resetCookiesEnabled"></a>

```csharp
private void ResetCookiesEnabled()
```

##### `ResetDistributedTracingEnabled` <a name="ResetDistributedTracingEnabled" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.resetDistributedTracingEnabled"></a>

```csharp
private void ResetDistributedTracingEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLoaderType` <a name="ResetLoaderType" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.resetLoaderType"></a>

```csharp
private void ResetLoaderType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BrowserApplication resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

BrowserApplication.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

BrowserApplication.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

BrowserApplication.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

BrowserApplication.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a BrowserApplication resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BrowserApplication to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BrowserApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/browser_application#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the BrowserApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.applicationId">ApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.guid">Guid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.jsConfig">JsConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.accountIdInput">AccountIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.cookiesEnabledInput">CookiesEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.distributedTracingEnabledInput">DistributedTracingEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.loaderTypeInput">LoaderTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.accountId">AccountId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.cookiesEnabled">CookiesEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.distributedTracingEnabled">DistributedTracingEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.loaderType">LoaderType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.applicationId"></a>

```csharp
public string ApplicationId { get; }
```

- *Type:* string

---

##### `Guid`<sup>Required</sup> <a name="Guid" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.guid"></a>

```csharp
public string Guid { get; }
```

- *Type:* string

---

##### `JsConfig`<sup>Required</sup> <a name="JsConfig" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.jsConfig"></a>

```csharp
public string JsConfig { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.accountIdInput"></a>

```csharp
public double AccountIdInput { get; }
```

- *Type:* double

---

##### `CookiesEnabledInput`<sup>Optional</sup> <a name="CookiesEnabledInput" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.cookiesEnabledInput"></a>

```csharp
public object CookiesEnabledInput { get; }
```

- *Type:* object

---

##### `DistributedTracingEnabledInput`<sup>Optional</sup> <a name="DistributedTracingEnabledInput" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.distributedTracingEnabledInput"></a>

```csharp
public object DistributedTracingEnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LoaderTypeInput`<sup>Optional</sup> <a name="LoaderTypeInput" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.loaderTypeInput"></a>

```csharp
public string LoaderTypeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.accountId"></a>

```csharp
public double AccountId { get; }
```

- *Type:* double

---

##### `CookiesEnabled`<sup>Required</sup> <a name="CookiesEnabled" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.cookiesEnabled"></a>

```csharp
public object CookiesEnabled { get; }
```

- *Type:* object

---

##### `DistributedTracingEnabled`<sup>Required</sup> <a name="DistributedTracingEnabled" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.distributedTracingEnabled"></a>

```csharp
public object DistributedTracingEnabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LoaderType`<sup>Required</sup> <a name="LoaderType" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.loaderType"></a>

```csharp
public string LoaderType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-newrelic.browserApplication.BrowserApplication.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BrowserApplicationConfig <a name="BrowserApplicationConfig" id="@cdktf/provider-newrelic.browserApplication.BrowserApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.browserApplication.BrowserApplicationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new BrowserApplicationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    double AccountId = null,
    object CookiesEnabled = null,
    object DistributedTracingEnabled = null,
    string Id = null,
    string LoaderType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplicationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplicationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplicationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplicationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplicationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplicationConfig.property.name">Name</a></code> | <code>string</code> | The name of the application to monitor. |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplicationConfig.property.accountId">AccountId</a></code> | <code>double</code> | The account ID. |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplicationConfig.property.cookiesEnabled">CookiesEnabled</a></code> | <code>object</code> | Configure cookies. The default is enabled: true. |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplicationConfig.property.distributedTracingEnabled">DistributedTracingEnabled</a></code> | <code>object</code> | Configure distributed tracing in browser apps. The default is enabled: true. |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplicationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/browser_application#id BrowserApplication#id}. |
| <code><a href="#@cdktf/provider-newrelic.browserApplication.BrowserApplicationConfig.property.loaderType">LoaderType</a></code> | <code>string</code> | Determines which browser loader is configured. The default is "SPA". |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.browserApplication.BrowserApplicationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.browserApplication.BrowserApplicationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.browserApplication.BrowserApplicationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.browserApplication.BrowserApplicationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.browserApplication.BrowserApplicationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.browserApplication.BrowserApplicationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.browserApplication.BrowserApplicationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.browserApplication.BrowserApplicationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the application to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/browser_application#name BrowserApplication#name}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-newrelic.browserApplication.BrowserApplicationConfig.property.accountId"></a>

```csharp
public double AccountId { get; set; }
```

- *Type:* double

The account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/browser_application#account_id BrowserApplication#account_id}

---

##### `CookiesEnabled`<sup>Optional</sup> <a name="CookiesEnabled" id="@cdktf/provider-newrelic.browserApplication.BrowserApplicationConfig.property.cookiesEnabled"></a>

```csharp
public object CookiesEnabled { get; set; }
```

- *Type:* object

Configure cookies. The default is enabled: true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/browser_application#cookies_enabled BrowserApplication#cookies_enabled}

---

##### `DistributedTracingEnabled`<sup>Optional</sup> <a name="DistributedTracingEnabled" id="@cdktf/provider-newrelic.browserApplication.BrowserApplicationConfig.property.distributedTracingEnabled"></a>

```csharp
public object DistributedTracingEnabled { get; set; }
```

- *Type:* object

Configure distributed tracing in browser apps. The default is enabled: true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/browser_application#distributed_tracing_enabled BrowserApplication#distributed_tracing_enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-newrelic.browserApplication.BrowserApplicationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/browser_application#id BrowserApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LoaderType`<sup>Optional</sup> <a name="LoaderType" id="@cdktf/provider-newrelic.browserApplication.BrowserApplicationConfig.property.loaderType"></a>

```csharp
public string LoaderType { get; set; }
```

- *Type:* string

Determines which browser loader is configured. The default is "SPA".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/browser_application#loader_type BrowserApplication#loader_type}

---



