# `oneDashboard` Submodule <a name="`oneDashboard` Submodule" id="@cdktf/provider-newrelic.oneDashboard"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OneDashboard <a name="OneDashboard" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard newrelic_one_dashboard}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboard(Construct Scope, string Id, OneDashboardConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig">OneDashboardConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig">OneDashboardConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.putPage">PutPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.putVariable">PutVariable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.resetPermissions">ResetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.resetVariable">ResetVariable</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutPage` <a name="PutPage" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.putPage"></a>

```csharp
private void PutPage(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.putPage.parameter.value"></a>

- *Type:* object

---

##### `PutVariable` <a name="PutVariable" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.putVariable"></a>

```csharp
private void PutVariable(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.putVariable.parameter.value"></a>

- *Type:* object

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPermissions` <a name="ResetPermissions" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.resetPermissions"></a>

```csharp
private void ResetPermissions()
```

##### `ResetVariable` <a name="ResetVariable" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.resetVariable"></a>

```csharp
private void ResetVariable()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

OneDashboard.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

OneDashboard.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

OneDashboard.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.guid">Guid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.page">Page</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList">OneDashboardPageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.permalink">Permalink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.variable">Variable</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList">OneDashboardVariableList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.accountIdInput">AccountIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.pageInput">PageInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.permissionsInput">PermissionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.variableInput">VariableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.accountId">AccountId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.permissions">Permissions</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Guid`<sup>Required</sup> <a name="Guid" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.guid"></a>

```csharp
public string Guid { get; }
```

- *Type:* string

---

##### `Page`<sup>Required</sup> <a name="Page" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.page"></a>

```csharp
public OneDashboardPageList Page { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList">OneDashboardPageList</a>

---

##### `Permalink`<sup>Required</sup> <a name="Permalink" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.permalink"></a>

```csharp
public string Permalink { get; }
```

- *Type:* string

---

##### `Variable`<sup>Required</sup> <a name="Variable" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.variable"></a>

```csharp
public OneDashboardVariableList Variable { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList">OneDashboardVariableList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.accountIdInput"></a>

```csharp
public double AccountIdInput { get; }
```

- *Type:* double

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PageInput`<sup>Optional</sup> <a name="PageInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.pageInput"></a>

```csharp
public object PageInput { get; }
```

- *Type:* object

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.permissionsInput"></a>

```csharp
public string PermissionsInput { get; }
```

- *Type:* string

---

##### `VariableInput`<sup>Optional</sup> <a name="VariableInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.variableInput"></a>

```csharp
public object VariableInput { get; }
```

- *Type:* object

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.accountId"></a>

```csharp
public double AccountId { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.permissions"></a>

```csharp
public string Permissions { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OneDashboardConfig <a name="OneDashboardConfig" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    object Page,
    double AccountId = null,
    string Description = null,
    string Id = null,
    string Permissions = null,
    object Variable = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.name">Name</a></code> | <code>string</code> | The dashboard's name. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.page">Page</a></code> | <code>object</code> | page block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.accountId">AccountId</a></code> | <code>double</code> | The New Relic account ID where you want to create the dashboard. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.description">Description</a></code> | <code>string</code> | The dashboard's description. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#id OneDashboard#id}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.permissions">Permissions</a></code> | <code>string</code> | Determines who can see or edit the dashboard. Valid values are private, public_read_only, public_read_write. Defaults to public_read_only. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.variable">Variable</a></code> | <code>object</code> | variable block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The dashboard's name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#name OneDashboard#name}

---

##### `Page`<sup>Required</sup> <a name="Page" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.page"></a>

```csharp
public object Page { get; set; }
```

- *Type:* object

page block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#page OneDashboard#page}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.accountId"></a>

```csharp
public double AccountId { get; set; }
```

- *Type:* double

The New Relic account ID where you want to create the dashboard.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#account_id OneDashboard#account_id}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The dashboard's description.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#description OneDashboard#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#id OneDashboard#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Permissions`<sup>Optional</sup> <a name="Permissions" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.permissions"></a>

```csharp
public string Permissions { get; set; }
```

- *Type:* string

Determines who can see or edit the dashboard. Valid values are private, public_read_only, public_read_write. Defaults to public_read_only.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#permissions OneDashboard#permissions}

---

##### `Variable`<sup>Optional</sup> <a name="Variable" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.variable"></a>

```csharp
public object Variable { get; set; }
```

- *Type:* object

variable block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#variable OneDashboard#variable}

---

### OneDashboardPage <a name="OneDashboardPage" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPage {
    string Name,
    string Description = null,
    object WidgetArea = null,
    object WidgetBar = null,
    object WidgetBillboard = null,
    object WidgetBullet = null,
    object WidgetFunnel = null,
    object WidgetHeatmap = null,
    object WidgetHistogram = null,
    object WidgetJson = null,
    object WidgetLine = null,
    object WidgetLogTable = null,
    object WidgetMarkdown = null,
    object WidgetPie = null,
    object WidgetStackedBar = null,
    object WidgetTable = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.name">Name</a></code> | <code>string</code> | The dashboard page's name. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.description">Description</a></code> | <code>string</code> | The dashboard page's description. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetArea">WidgetArea</a></code> | <code>object</code> | widget_area block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetBar">WidgetBar</a></code> | <code>object</code> | widget_bar block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetBillboard">WidgetBillboard</a></code> | <code>object</code> | widget_billboard block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetBullet">WidgetBullet</a></code> | <code>object</code> | widget_bullet block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetFunnel">WidgetFunnel</a></code> | <code>object</code> | widget_funnel block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetHeatmap">WidgetHeatmap</a></code> | <code>object</code> | widget_heatmap block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetHistogram">WidgetHistogram</a></code> | <code>object</code> | widget_histogram block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetJson">WidgetJson</a></code> | <code>object</code> | widget_json block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetLine">WidgetLine</a></code> | <code>object</code> | widget_line block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetLogTable">WidgetLogTable</a></code> | <code>object</code> | widget_log_table block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetMarkdown">WidgetMarkdown</a></code> | <code>object</code> | widget_markdown block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetPie">WidgetPie</a></code> | <code>object</code> | widget_pie block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetStackedBar">WidgetStackedBar</a></code> | <code>object</code> | widget_stacked_bar block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetTable">WidgetTable</a></code> | <code>object</code> | widget_table block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The dashboard page's name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#name OneDashboard#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The dashboard page's description.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#description OneDashboard#description}

---

##### `WidgetArea`<sup>Optional</sup> <a name="WidgetArea" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetArea"></a>

```csharp
public object WidgetArea { get; set; }
```

- *Type:* object

widget_area block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#widget_area OneDashboard#widget_area}

---

##### `WidgetBar`<sup>Optional</sup> <a name="WidgetBar" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetBar"></a>

```csharp
public object WidgetBar { get; set; }
```

- *Type:* object

widget_bar block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#widget_bar OneDashboard#widget_bar}

---

##### `WidgetBillboard`<sup>Optional</sup> <a name="WidgetBillboard" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetBillboard"></a>

```csharp
public object WidgetBillboard { get; set; }
```

- *Type:* object

widget_billboard block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#widget_billboard OneDashboard#widget_billboard}

---

##### `WidgetBullet`<sup>Optional</sup> <a name="WidgetBullet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetBullet"></a>

```csharp
public object WidgetBullet { get; set; }
```

- *Type:* object

widget_bullet block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#widget_bullet OneDashboard#widget_bullet}

---

##### `WidgetFunnel`<sup>Optional</sup> <a name="WidgetFunnel" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetFunnel"></a>

```csharp
public object WidgetFunnel { get; set; }
```

- *Type:* object

widget_funnel block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#widget_funnel OneDashboard#widget_funnel}

---

##### `WidgetHeatmap`<sup>Optional</sup> <a name="WidgetHeatmap" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetHeatmap"></a>

```csharp
public object WidgetHeatmap { get; set; }
```

- *Type:* object

widget_heatmap block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#widget_heatmap OneDashboard#widget_heatmap}

---

##### `WidgetHistogram`<sup>Optional</sup> <a name="WidgetHistogram" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetHistogram"></a>

```csharp
public object WidgetHistogram { get; set; }
```

- *Type:* object

widget_histogram block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#widget_histogram OneDashboard#widget_histogram}

---

##### `WidgetJson`<sup>Optional</sup> <a name="WidgetJson" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetJson"></a>

```csharp
public object WidgetJson { get; set; }
```

- *Type:* object

widget_json block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#widget_json OneDashboard#widget_json}

---

##### `WidgetLine`<sup>Optional</sup> <a name="WidgetLine" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetLine"></a>

```csharp
public object WidgetLine { get; set; }
```

- *Type:* object

widget_line block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#widget_line OneDashboard#widget_line}

---

##### `WidgetLogTable`<sup>Optional</sup> <a name="WidgetLogTable" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetLogTable"></a>

```csharp
public object WidgetLogTable { get; set; }
```

- *Type:* object

widget_log_table block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#widget_log_table OneDashboard#widget_log_table}

---

##### `WidgetMarkdown`<sup>Optional</sup> <a name="WidgetMarkdown" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetMarkdown"></a>

```csharp
public object WidgetMarkdown { get; set; }
```

- *Type:* object

widget_markdown block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#widget_markdown OneDashboard#widget_markdown}

---

##### `WidgetPie`<sup>Optional</sup> <a name="WidgetPie" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetPie"></a>

```csharp
public object WidgetPie { get; set; }
```

- *Type:* object

widget_pie block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#widget_pie OneDashboard#widget_pie}

---

##### `WidgetStackedBar`<sup>Optional</sup> <a name="WidgetStackedBar" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetStackedBar"></a>

```csharp
public object WidgetStackedBar { get; set; }
```

- *Type:* object

widget_stacked_bar block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#widget_stacked_bar OneDashboard#widget_stacked_bar}

---

##### `WidgetTable`<sup>Optional</sup> <a name="WidgetTable" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetTable"></a>

```csharp
public object WidgetTable { get; set; }
```

- *Type:* object

widget_table block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#widget_table OneDashboard#widget_table}

---

### OneDashboardPageWidgetArea <a name="OneDashboardPageWidgetArea" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetArea"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetArea.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetArea {
    double Column,
    object NrqlQuery,
    double Row,
    string Title,
    double Height = null,
    object IgnoreTimeRange = null,
    double Width = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetArea.property.column">Column</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetArea.property.nrqlQuery">NrqlQuery</a></code> | <code>object</code> | nrql_query block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetArea.property.row">Row</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetArea.property.title">Title</a></code> | <code>string</code> | A title for the widget. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetArea.property.height">Height</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetArea.property.ignoreTimeRange">IgnoreTimeRange</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetArea.property.width">Width</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}. |

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetArea.property.column"></a>

```csharp
public double Column { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}.

---

##### `NrqlQuery`<sup>Required</sup> <a name="NrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetArea.property.nrqlQuery"></a>

```csharp
public object NrqlQuery { get; set; }
```

- *Type:* object

nrql_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#nrql_query OneDashboard#nrql_query}

---

##### `Row`<sup>Required</sup> <a name="Row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetArea.property.row"></a>

```csharp
public double Row { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetArea.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#title OneDashboard#title}

---

##### `Height`<sup>Optional</sup> <a name="Height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetArea.property.height"></a>

```csharp
public double Height { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}.

---

##### `IgnoreTimeRange`<sup>Optional</sup> <a name="IgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetArea.property.ignoreTimeRange"></a>

```csharp
public object IgnoreTimeRange { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}.

---

##### `Width`<sup>Optional</sup> <a name="Width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetArea.property.width"></a>

```csharp
public double Width { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}.

---

### OneDashboardPageWidgetAreaNrqlQuery <a name="OneDashboardPageWidgetAreaNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQuery.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetAreaNrqlQuery {
    string Query,
    double AccountId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQuery.property.query">Query</a></code> | <code>string</code> | The NRQL query. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQuery.property.accountId">AccountId</a></code> | <code>double</code> | The account id used for the NRQL query. |

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQuery.property.query"></a>

```csharp
public string Query { get; set; }
```

- *Type:* string

The NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#query OneDashboard#query}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQuery.property.accountId"></a>

```csharp
public double AccountId { get; set; }
```

- *Type:* double

The account id used for the NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#account_id OneDashboard#account_id}

---

### OneDashboardPageWidgetBar <a name="OneDashboardPageWidgetBar" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBar"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBar.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetBar {
    double Column,
    object NrqlQuery,
    double Row,
    string Title,
    object FilterCurrentDashboard = null,
    double Height = null,
    object IgnoreTimeRange = null,
    string[] LinkedEntityGuids = null,
    double Width = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBar.property.column">Column</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBar.property.nrqlQuery">NrqlQuery</a></code> | <code>object</code> | nrql_query block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBar.property.row">Row</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBar.property.title">Title</a></code> | <code>string</code> | A title for the widget. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBar.property.filterCurrentDashboard">FilterCurrentDashboard</a></code> | <code>object</code> | Use this item to filter the current dashboard. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBar.property.height">Height</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBar.property.ignoreTimeRange">IgnoreTimeRange</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBar.property.linkedEntityGuids">LinkedEntityGuids</a></code> | <code>string[]</code> | Related entities. Currently only supports Dashboard entities, but may allow other cases in the future. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBar.property.width">Width</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}. |

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBar.property.column"></a>

```csharp
public double Column { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}.

---

##### `NrqlQuery`<sup>Required</sup> <a name="NrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBar.property.nrqlQuery"></a>

```csharp
public object NrqlQuery { get; set; }
```

- *Type:* object

nrql_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#nrql_query OneDashboard#nrql_query}

---

##### `Row`<sup>Required</sup> <a name="Row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBar.property.row"></a>

```csharp
public double Row { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBar.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#title OneDashboard#title}

---

##### `FilterCurrentDashboard`<sup>Optional</sup> <a name="FilterCurrentDashboard" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBar.property.filterCurrentDashboard"></a>

```csharp
public object FilterCurrentDashboard { get; set; }
```

- *Type:* object

Use this item to filter the current dashboard.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#filter_current_dashboard OneDashboard#filter_current_dashboard}

---

##### `Height`<sup>Optional</sup> <a name="Height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBar.property.height"></a>

```csharp
public double Height { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}.

---

##### `IgnoreTimeRange`<sup>Optional</sup> <a name="IgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBar.property.ignoreTimeRange"></a>

```csharp
public object IgnoreTimeRange { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}.

---

##### `LinkedEntityGuids`<sup>Optional</sup> <a name="LinkedEntityGuids" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBar.property.linkedEntityGuids"></a>

```csharp
public string[] LinkedEntityGuids { get; set; }
```

- *Type:* string[]

Related entities. Currently only supports Dashboard entities, but may allow other cases in the future.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#linked_entity_guids OneDashboard#linked_entity_guids}

---

##### `Width`<sup>Optional</sup> <a name="Width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBar.property.width"></a>

```csharp
public double Width { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}.

---

### OneDashboardPageWidgetBarNrqlQuery <a name="OneDashboardPageWidgetBarNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQuery.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetBarNrqlQuery {
    string Query,
    double AccountId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQuery.property.query">Query</a></code> | <code>string</code> | The NRQL query. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQuery.property.accountId">AccountId</a></code> | <code>double</code> | The account id used for the NRQL query. |

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQuery.property.query"></a>

```csharp
public string Query { get; set; }
```

- *Type:* string

The NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#query OneDashboard#query}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQuery.property.accountId"></a>

```csharp
public double AccountId { get; set; }
```

- *Type:* double

The account id used for the NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#account_id OneDashboard#account_id}

---

### OneDashboardPageWidgetBillboard <a name="OneDashboardPageWidgetBillboard" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboard"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboard.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetBillboard {
    double Column,
    object NrqlQuery,
    double Row,
    string Title,
    string Critical = null,
    double Height = null,
    object IgnoreTimeRange = null,
    string Warning = null,
    double Width = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboard.property.column">Column</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboard.property.nrqlQuery">NrqlQuery</a></code> | <code>object</code> | nrql_query block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboard.property.row">Row</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboard.property.title">Title</a></code> | <code>string</code> | A title for the widget. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboard.property.critical">Critical</a></code> | <code>string</code> | The critical threshold value. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboard.property.height">Height</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboard.property.ignoreTimeRange">IgnoreTimeRange</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboard.property.warning">Warning</a></code> | <code>string</code> | The warning threshold value. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboard.property.width">Width</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}. |

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboard.property.column"></a>

```csharp
public double Column { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}.

---

##### `NrqlQuery`<sup>Required</sup> <a name="NrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboard.property.nrqlQuery"></a>

```csharp
public object NrqlQuery { get; set; }
```

- *Type:* object

nrql_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#nrql_query OneDashboard#nrql_query}

---

##### `Row`<sup>Required</sup> <a name="Row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboard.property.row"></a>

```csharp
public double Row { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboard.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#title OneDashboard#title}

---

##### `Critical`<sup>Optional</sup> <a name="Critical" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboard.property.critical"></a>

```csharp
public string Critical { get; set; }
```

- *Type:* string

The critical threshold value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#critical OneDashboard#critical}

---

##### `Height`<sup>Optional</sup> <a name="Height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboard.property.height"></a>

```csharp
public double Height { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}.

---

##### `IgnoreTimeRange`<sup>Optional</sup> <a name="IgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboard.property.ignoreTimeRange"></a>

```csharp
public object IgnoreTimeRange { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}.

---

##### `Warning`<sup>Optional</sup> <a name="Warning" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboard.property.warning"></a>

```csharp
public string Warning { get; set; }
```

- *Type:* string

The warning threshold value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#warning OneDashboard#warning}

---

##### `Width`<sup>Optional</sup> <a name="Width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboard.property.width"></a>

```csharp
public double Width { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}.

---

### OneDashboardPageWidgetBillboardNrqlQuery <a name="OneDashboardPageWidgetBillboardNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQuery.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetBillboardNrqlQuery {
    string Query,
    double AccountId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQuery.property.query">Query</a></code> | <code>string</code> | The NRQL query. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQuery.property.accountId">AccountId</a></code> | <code>double</code> | The account id used for the NRQL query. |

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQuery.property.query"></a>

```csharp
public string Query { get; set; }
```

- *Type:* string

The NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#query OneDashboard#query}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQuery.property.accountId"></a>

```csharp
public double AccountId { get; set; }
```

- *Type:* double

The account id used for the NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#account_id OneDashboard#account_id}

---

### OneDashboardPageWidgetBullet <a name="OneDashboardPageWidgetBullet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBullet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBullet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetBullet {
    double Column,
    double Limit,
    object NrqlQuery,
    double Row,
    string Title,
    double Height = null,
    object IgnoreTimeRange = null,
    double Width = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBullet.property.column">Column</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBullet.property.limit">Limit</a></code> | <code>double</code> | The maximum value for the visualization. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBullet.property.nrqlQuery">NrqlQuery</a></code> | <code>object</code> | nrql_query block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBullet.property.row">Row</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBullet.property.title">Title</a></code> | <code>string</code> | A title for the widget. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBullet.property.height">Height</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBullet.property.ignoreTimeRange">IgnoreTimeRange</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBullet.property.width">Width</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}. |

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBullet.property.column"></a>

```csharp
public double Column { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}.

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBullet.property.limit"></a>

```csharp
public double Limit { get; set; }
```

- *Type:* double

The maximum value for the visualization.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#limit OneDashboard#limit}

---

##### `NrqlQuery`<sup>Required</sup> <a name="NrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBullet.property.nrqlQuery"></a>

```csharp
public object NrqlQuery { get; set; }
```

- *Type:* object

nrql_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#nrql_query OneDashboard#nrql_query}

---

##### `Row`<sup>Required</sup> <a name="Row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBullet.property.row"></a>

```csharp
public double Row { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBullet.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#title OneDashboard#title}

---

##### `Height`<sup>Optional</sup> <a name="Height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBullet.property.height"></a>

```csharp
public double Height { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}.

---

##### `IgnoreTimeRange`<sup>Optional</sup> <a name="IgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBullet.property.ignoreTimeRange"></a>

```csharp
public object IgnoreTimeRange { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}.

---

##### `Width`<sup>Optional</sup> <a name="Width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBullet.property.width"></a>

```csharp
public double Width { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}.

---

### OneDashboardPageWidgetBulletNrqlQuery <a name="OneDashboardPageWidgetBulletNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQuery.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetBulletNrqlQuery {
    string Query,
    double AccountId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQuery.property.query">Query</a></code> | <code>string</code> | The NRQL query. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQuery.property.accountId">AccountId</a></code> | <code>double</code> | The account id used for the NRQL query. |

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQuery.property.query"></a>

```csharp
public string Query { get; set; }
```

- *Type:* string

The NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#query OneDashboard#query}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQuery.property.accountId"></a>

```csharp
public double AccountId { get; set; }
```

- *Type:* double

The account id used for the NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#account_id OneDashboard#account_id}

---

### OneDashboardPageWidgetFunnel <a name="OneDashboardPageWidgetFunnel" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnel.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetFunnel {
    double Column,
    object NrqlQuery,
    double Row,
    string Title,
    double Height = null,
    object IgnoreTimeRange = null,
    double Width = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnel.property.column">Column</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnel.property.nrqlQuery">NrqlQuery</a></code> | <code>object</code> | nrql_query block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnel.property.row">Row</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnel.property.title">Title</a></code> | <code>string</code> | A title for the widget. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnel.property.height">Height</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnel.property.ignoreTimeRange">IgnoreTimeRange</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnel.property.width">Width</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}. |

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnel.property.column"></a>

```csharp
public double Column { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}.

---

##### `NrqlQuery`<sup>Required</sup> <a name="NrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnel.property.nrqlQuery"></a>

```csharp
public object NrqlQuery { get; set; }
```

- *Type:* object

nrql_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#nrql_query OneDashboard#nrql_query}

---

##### `Row`<sup>Required</sup> <a name="Row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnel.property.row"></a>

```csharp
public double Row { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnel.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#title OneDashboard#title}

---

##### `Height`<sup>Optional</sup> <a name="Height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnel.property.height"></a>

```csharp
public double Height { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}.

---

##### `IgnoreTimeRange`<sup>Optional</sup> <a name="IgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnel.property.ignoreTimeRange"></a>

```csharp
public object IgnoreTimeRange { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}.

---

##### `Width`<sup>Optional</sup> <a name="Width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnel.property.width"></a>

```csharp
public double Width { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}.

---

### OneDashboardPageWidgetFunnelNrqlQuery <a name="OneDashboardPageWidgetFunnelNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQuery.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetFunnelNrqlQuery {
    string Query,
    double AccountId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQuery.property.query">Query</a></code> | <code>string</code> | The NRQL query. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQuery.property.accountId">AccountId</a></code> | <code>double</code> | The account id used for the NRQL query. |

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQuery.property.query"></a>

```csharp
public string Query { get; set; }
```

- *Type:* string

The NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#query OneDashboard#query}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQuery.property.accountId"></a>

```csharp
public double AccountId { get; set; }
```

- *Type:* double

The account id used for the NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#account_id OneDashboard#account_id}

---

### OneDashboardPageWidgetHeatmap <a name="OneDashboardPageWidgetHeatmap" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmap.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetHeatmap {
    double Column,
    object NrqlQuery,
    double Row,
    string Title,
    object FilterCurrentDashboard = null,
    double Height = null,
    object IgnoreTimeRange = null,
    string[] LinkedEntityGuids = null,
    double Width = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmap.property.column">Column</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmap.property.nrqlQuery">NrqlQuery</a></code> | <code>object</code> | nrql_query block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmap.property.row">Row</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmap.property.title">Title</a></code> | <code>string</code> | A title for the widget. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmap.property.filterCurrentDashboard">FilterCurrentDashboard</a></code> | <code>object</code> | Use this item to filter the current dashboard. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmap.property.height">Height</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmap.property.ignoreTimeRange">IgnoreTimeRange</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmap.property.linkedEntityGuids">LinkedEntityGuids</a></code> | <code>string[]</code> | Related entities. Currently only supports Dashboard entities, but may allow other cases in the future. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmap.property.width">Width</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}. |

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmap.property.column"></a>

```csharp
public double Column { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}.

---

##### `NrqlQuery`<sup>Required</sup> <a name="NrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmap.property.nrqlQuery"></a>

```csharp
public object NrqlQuery { get; set; }
```

- *Type:* object

nrql_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#nrql_query OneDashboard#nrql_query}

---

##### `Row`<sup>Required</sup> <a name="Row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmap.property.row"></a>

```csharp
public double Row { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmap.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#title OneDashboard#title}

---

##### `FilterCurrentDashboard`<sup>Optional</sup> <a name="FilterCurrentDashboard" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmap.property.filterCurrentDashboard"></a>

```csharp
public object FilterCurrentDashboard { get; set; }
```

- *Type:* object

Use this item to filter the current dashboard.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#filter_current_dashboard OneDashboard#filter_current_dashboard}

---

##### `Height`<sup>Optional</sup> <a name="Height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmap.property.height"></a>

```csharp
public double Height { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}.

---

##### `IgnoreTimeRange`<sup>Optional</sup> <a name="IgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmap.property.ignoreTimeRange"></a>

```csharp
public object IgnoreTimeRange { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}.

---

##### `LinkedEntityGuids`<sup>Optional</sup> <a name="LinkedEntityGuids" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmap.property.linkedEntityGuids"></a>

```csharp
public string[] LinkedEntityGuids { get; set; }
```

- *Type:* string[]

Related entities. Currently only supports Dashboard entities, but may allow other cases in the future.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#linked_entity_guids OneDashboard#linked_entity_guids}

---

##### `Width`<sup>Optional</sup> <a name="Width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmap.property.width"></a>

```csharp
public double Width { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}.

---

### OneDashboardPageWidgetHeatmapNrqlQuery <a name="OneDashboardPageWidgetHeatmapNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQuery.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetHeatmapNrqlQuery {
    string Query,
    double AccountId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQuery.property.query">Query</a></code> | <code>string</code> | The NRQL query. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQuery.property.accountId">AccountId</a></code> | <code>double</code> | The account id used for the NRQL query. |

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQuery.property.query"></a>

```csharp
public string Query { get; set; }
```

- *Type:* string

The NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#query OneDashboard#query}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQuery.property.accountId"></a>

```csharp
public double AccountId { get; set; }
```

- *Type:* double

The account id used for the NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#account_id OneDashboard#account_id}

---

### OneDashboardPageWidgetHistogram <a name="OneDashboardPageWidgetHistogram" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogram"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogram.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetHistogram {
    double Column,
    object NrqlQuery,
    double Row,
    string Title,
    double Height = null,
    object IgnoreTimeRange = null,
    double Width = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogram.property.column">Column</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogram.property.nrqlQuery">NrqlQuery</a></code> | <code>object</code> | nrql_query block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogram.property.row">Row</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogram.property.title">Title</a></code> | <code>string</code> | A title for the widget. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogram.property.height">Height</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogram.property.ignoreTimeRange">IgnoreTimeRange</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogram.property.width">Width</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}. |

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogram.property.column"></a>

```csharp
public double Column { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}.

---

##### `NrqlQuery`<sup>Required</sup> <a name="NrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogram.property.nrqlQuery"></a>

```csharp
public object NrqlQuery { get; set; }
```

- *Type:* object

nrql_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#nrql_query OneDashboard#nrql_query}

---

##### `Row`<sup>Required</sup> <a name="Row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogram.property.row"></a>

```csharp
public double Row { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogram.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#title OneDashboard#title}

---

##### `Height`<sup>Optional</sup> <a name="Height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogram.property.height"></a>

```csharp
public double Height { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}.

---

##### `IgnoreTimeRange`<sup>Optional</sup> <a name="IgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogram.property.ignoreTimeRange"></a>

```csharp
public object IgnoreTimeRange { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}.

---

##### `Width`<sup>Optional</sup> <a name="Width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogram.property.width"></a>

```csharp
public double Width { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}.

---

### OneDashboardPageWidgetHistogramNrqlQuery <a name="OneDashboardPageWidgetHistogramNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQuery.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetHistogramNrqlQuery {
    string Query,
    double AccountId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQuery.property.query">Query</a></code> | <code>string</code> | The NRQL query. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQuery.property.accountId">AccountId</a></code> | <code>double</code> | The account id used for the NRQL query. |

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQuery.property.query"></a>

```csharp
public string Query { get; set; }
```

- *Type:* string

The NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#query OneDashboard#query}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQuery.property.accountId"></a>

```csharp
public double AccountId { get; set; }
```

- *Type:* double

The account id used for the NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#account_id OneDashboard#account_id}

---

### OneDashboardPageWidgetJson <a name="OneDashboardPageWidgetJson" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJson"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJson.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetJson {
    double Column,
    object NrqlQuery,
    double Row,
    string Title,
    double Height = null,
    object IgnoreTimeRange = null,
    double Width = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJson.property.column">Column</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJson.property.nrqlQuery">NrqlQuery</a></code> | <code>object</code> | nrql_query block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJson.property.row">Row</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJson.property.title">Title</a></code> | <code>string</code> | A title for the widget. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJson.property.height">Height</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJson.property.ignoreTimeRange">IgnoreTimeRange</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJson.property.width">Width</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}. |

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJson.property.column"></a>

```csharp
public double Column { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}.

---

##### `NrqlQuery`<sup>Required</sup> <a name="NrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJson.property.nrqlQuery"></a>

```csharp
public object NrqlQuery { get; set; }
```

- *Type:* object

nrql_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#nrql_query OneDashboard#nrql_query}

---

##### `Row`<sup>Required</sup> <a name="Row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJson.property.row"></a>

```csharp
public double Row { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJson.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#title OneDashboard#title}

---

##### `Height`<sup>Optional</sup> <a name="Height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJson.property.height"></a>

```csharp
public double Height { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}.

---

##### `IgnoreTimeRange`<sup>Optional</sup> <a name="IgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJson.property.ignoreTimeRange"></a>

```csharp
public object IgnoreTimeRange { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}.

---

##### `Width`<sup>Optional</sup> <a name="Width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJson.property.width"></a>

```csharp
public double Width { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}.

---

### OneDashboardPageWidgetJsonNrqlQuery <a name="OneDashboardPageWidgetJsonNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQuery.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetJsonNrqlQuery {
    string Query,
    double AccountId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQuery.property.query">Query</a></code> | <code>string</code> | The NRQL query. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQuery.property.accountId">AccountId</a></code> | <code>double</code> | The account id used for the NRQL query. |

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQuery.property.query"></a>

```csharp
public string Query { get; set; }
```

- *Type:* string

The NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#query OneDashboard#query}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQuery.property.accountId"></a>

```csharp
public double AccountId { get; set; }
```

- *Type:* double

The account id used for the NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#account_id OneDashboard#account_id}

---

### OneDashboardPageWidgetLine <a name="OneDashboardPageWidgetLine" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLine"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLine.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetLine {
    double Column,
    object NrqlQuery,
    double Row,
    string Title,
    double Height = null,
    object IgnoreTimeRange = null,
    double Width = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLine.property.column">Column</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLine.property.nrqlQuery">NrqlQuery</a></code> | <code>object</code> | nrql_query block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLine.property.row">Row</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLine.property.title">Title</a></code> | <code>string</code> | A title for the widget. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLine.property.height">Height</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLine.property.ignoreTimeRange">IgnoreTimeRange</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLine.property.width">Width</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}. |

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLine.property.column"></a>

```csharp
public double Column { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}.

---

##### `NrqlQuery`<sup>Required</sup> <a name="NrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLine.property.nrqlQuery"></a>

```csharp
public object NrqlQuery { get; set; }
```

- *Type:* object

nrql_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#nrql_query OneDashboard#nrql_query}

---

##### `Row`<sup>Required</sup> <a name="Row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLine.property.row"></a>

```csharp
public double Row { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLine.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#title OneDashboard#title}

---

##### `Height`<sup>Optional</sup> <a name="Height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLine.property.height"></a>

```csharp
public double Height { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}.

---

##### `IgnoreTimeRange`<sup>Optional</sup> <a name="IgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLine.property.ignoreTimeRange"></a>

```csharp
public object IgnoreTimeRange { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}.

---

##### `Width`<sup>Optional</sup> <a name="Width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLine.property.width"></a>

```csharp
public double Width { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}.

---

### OneDashboardPageWidgetLineNrqlQuery <a name="OneDashboardPageWidgetLineNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQuery.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetLineNrqlQuery {
    string Query,
    double AccountId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQuery.property.query">Query</a></code> | <code>string</code> | The NRQL query. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQuery.property.accountId">AccountId</a></code> | <code>double</code> | The account id used for the NRQL query. |

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQuery.property.query"></a>

```csharp
public string Query { get; set; }
```

- *Type:* string

The NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#query OneDashboard#query}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQuery.property.accountId"></a>

```csharp
public double AccountId { get; set; }
```

- *Type:* double

The account id used for the NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#account_id OneDashboard#account_id}

---

### OneDashboardPageWidgetLogTable <a name="OneDashboardPageWidgetLogTable" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTable.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetLogTable {
    double Column,
    object NrqlQuery,
    double Row,
    string Title,
    double Height = null,
    object IgnoreTimeRange = null,
    double Width = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTable.property.column">Column</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTable.property.nrqlQuery">NrqlQuery</a></code> | <code>object</code> | nrql_query block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTable.property.row">Row</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTable.property.title">Title</a></code> | <code>string</code> | A title for the widget. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTable.property.height">Height</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTable.property.ignoreTimeRange">IgnoreTimeRange</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTable.property.width">Width</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}. |

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTable.property.column"></a>

```csharp
public double Column { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}.

---

##### `NrqlQuery`<sup>Required</sup> <a name="NrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTable.property.nrqlQuery"></a>

```csharp
public object NrqlQuery { get; set; }
```

- *Type:* object

nrql_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#nrql_query OneDashboard#nrql_query}

---

##### `Row`<sup>Required</sup> <a name="Row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTable.property.row"></a>

```csharp
public double Row { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTable.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#title OneDashboard#title}

---

##### `Height`<sup>Optional</sup> <a name="Height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTable.property.height"></a>

```csharp
public double Height { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}.

---

##### `IgnoreTimeRange`<sup>Optional</sup> <a name="IgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTable.property.ignoreTimeRange"></a>

```csharp
public object IgnoreTimeRange { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}.

---

##### `Width`<sup>Optional</sup> <a name="Width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTable.property.width"></a>

```csharp
public double Width { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}.

---

### OneDashboardPageWidgetLogTableNrqlQuery <a name="OneDashboardPageWidgetLogTableNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQuery.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetLogTableNrqlQuery {
    string Query,
    double AccountId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQuery.property.query">Query</a></code> | <code>string</code> | The NRQL query. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQuery.property.accountId">AccountId</a></code> | <code>double</code> | The account id used for the NRQL query. |

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQuery.property.query"></a>

```csharp
public string Query { get; set; }
```

- *Type:* string

The NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#query OneDashboard#query}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQuery.property.accountId"></a>

```csharp
public double AccountId { get; set; }
```

- *Type:* double

The account id used for the NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#account_id OneDashboard#account_id}

---

### OneDashboardPageWidgetMarkdown <a name="OneDashboardPageWidgetMarkdown" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdown"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdown.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetMarkdown {
    double Column,
    double Row,
    string Title,
    double Height = null,
    object IgnoreTimeRange = null,
    string Text = null,
    double Width = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdown.property.column">Column</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdown.property.row">Row</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdown.property.title">Title</a></code> | <code>string</code> | A title for the widget. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdown.property.height">Height</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdown.property.ignoreTimeRange">IgnoreTimeRange</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdown.property.text">Text</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#text OneDashboard#text}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdown.property.width">Width</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}. |

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdown.property.column"></a>

```csharp
public double Column { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}.

---

##### `Row`<sup>Required</sup> <a name="Row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdown.property.row"></a>

```csharp
public double Row { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdown.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#title OneDashboard#title}

---

##### `Height`<sup>Optional</sup> <a name="Height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdown.property.height"></a>

```csharp
public double Height { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}.

---

##### `IgnoreTimeRange`<sup>Optional</sup> <a name="IgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdown.property.ignoreTimeRange"></a>

```csharp
public object IgnoreTimeRange { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}.

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdown.property.text"></a>

```csharp
public string Text { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#text OneDashboard#text}.

---

##### `Width`<sup>Optional</sup> <a name="Width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdown.property.width"></a>

```csharp
public double Width { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}.

---

### OneDashboardPageWidgetPie <a name="OneDashboardPageWidgetPie" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPie"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPie.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetPie {
    double Column,
    object NrqlQuery,
    double Row,
    string Title,
    object FilterCurrentDashboard = null,
    double Height = null,
    object IgnoreTimeRange = null,
    string[] LinkedEntityGuids = null,
    double Width = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPie.property.column">Column</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPie.property.nrqlQuery">NrqlQuery</a></code> | <code>object</code> | nrql_query block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPie.property.row">Row</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPie.property.title">Title</a></code> | <code>string</code> | A title for the widget. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPie.property.filterCurrentDashboard">FilterCurrentDashboard</a></code> | <code>object</code> | Use this item to filter the current dashboard. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPie.property.height">Height</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPie.property.ignoreTimeRange">IgnoreTimeRange</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPie.property.linkedEntityGuids">LinkedEntityGuids</a></code> | <code>string[]</code> | Related entities. Currently only supports Dashboard entities, but may allow other cases in the future. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPie.property.width">Width</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}. |

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPie.property.column"></a>

```csharp
public double Column { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}.

---

##### `NrqlQuery`<sup>Required</sup> <a name="NrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPie.property.nrqlQuery"></a>

```csharp
public object NrqlQuery { get; set; }
```

- *Type:* object

nrql_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#nrql_query OneDashboard#nrql_query}

---

##### `Row`<sup>Required</sup> <a name="Row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPie.property.row"></a>

```csharp
public double Row { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPie.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#title OneDashboard#title}

---

##### `FilterCurrentDashboard`<sup>Optional</sup> <a name="FilterCurrentDashboard" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPie.property.filterCurrentDashboard"></a>

```csharp
public object FilterCurrentDashboard { get; set; }
```

- *Type:* object

Use this item to filter the current dashboard.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#filter_current_dashboard OneDashboard#filter_current_dashboard}

---

##### `Height`<sup>Optional</sup> <a name="Height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPie.property.height"></a>

```csharp
public double Height { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}.

---

##### `IgnoreTimeRange`<sup>Optional</sup> <a name="IgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPie.property.ignoreTimeRange"></a>

```csharp
public object IgnoreTimeRange { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}.

---

##### `LinkedEntityGuids`<sup>Optional</sup> <a name="LinkedEntityGuids" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPie.property.linkedEntityGuids"></a>

```csharp
public string[] LinkedEntityGuids { get; set; }
```

- *Type:* string[]

Related entities. Currently only supports Dashboard entities, but may allow other cases in the future.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#linked_entity_guids OneDashboard#linked_entity_guids}

---

##### `Width`<sup>Optional</sup> <a name="Width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPie.property.width"></a>

```csharp
public double Width { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}.

---

### OneDashboardPageWidgetPieNrqlQuery <a name="OneDashboardPageWidgetPieNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQuery.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetPieNrqlQuery {
    string Query,
    double AccountId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQuery.property.query">Query</a></code> | <code>string</code> | The NRQL query. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQuery.property.accountId">AccountId</a></code> | <code>double</code> | The account id used for the NRQL query. |

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQuery.property.query"></a>

```csharp
public string Query { get; set; }
```

- *Type:* string

The NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#query OneDashboard#query}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQuery.property.accountId"></a>

```csharp
public double AccountId { get; set; }
```

- *Type:* double

The account id used for the NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#account_id OneDashboard#account_id}

---

### OneDashboardPageWidgetStackedBar <a name="OneDashboardPageWidgetStackedBar" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBar"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBar.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetStackedBar {
    double Column,
    object NrqlQuery,
    double Row,
    string Title,
    double Height = null,
    object IgnoreTimeRange = null,
    double Width = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBar.property.column">Column</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBar.property.nrqlQuery">NrqlQuery</a></code> | <code>object</code> | nrql_query block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBar.property.row">Row</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBar.property.title">Title</a></code> | <code>string</code> | A title for the widget. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBar.property.height">Height</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBar.property.ignoreTimeRange">IgnoreTimeRange</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBar.property.width">Width</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}. |

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBar.property.column"></a>

```csharp
public double Column { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}.

---

##### `NrqlQuery`<sup>Required</sup> <a name="NrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBar.property.nrqlQuery"></a>

```csharp
public object NrqlQuery { get; set; }
```

- *Type:* object

nrql_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#nrql_query OneDashboard#nrql_query}

---

##### `Row`<sup>Required</sup> <a name="Row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBar.property.row"></a>

```csharp
public double Row { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBar.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#title OneDashboard#title}

---

##### `Height`<sup>Optional</sup> <a name="Height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBar.property.height"></a>

```csharp
public double Height { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}.

---

##### `IgnoreTimeRange`<sup>Optional</sup> <a name="IgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBar.property.ignoreTimeRange"></a>

```csharp
public object IgnoreTimeRange { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}.

---

##### `Width`<sup>Optional</sup> <a name="Width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBar.property.width"></a>

```csharp
public double Width { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}.

---

### OneDashboardPageWidgetStackedBarNrqlQuery <a name="OneDashboardPageWidgetStackedBarNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQuery.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetStackedBarNrqlQuery {
    string Query,
    double AccountId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQuery.property.query">Query</a></code> | <code>string</code> | The NRQL query. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQuery.property.accountId">AccountId</a></code> | <code>double</code> | The account id used for the NRQL query. |

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQuery.property.query"></a>

```csharp
public string Query { get; set; }
```

- *Type:* string

The NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#query OneDashboard#query}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQuery.property.accountId"></a>

```csharp
public double AccountId { get; set; }
```

- *Type:* double

The account id used for the NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#account_id OneDashboard#account_id}

---

### OneDashboardPageWidgetTable <a name="OneDashboardPageWidgetTable" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTable.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetTable {
    double Column,
    object NrqlQuery,
    double Row,
    string Title,
    object FilterCurrentDashboard = null,
    double Height = null,
    object IgnoreTimeRange = null,
    string[] LinkedEntityGuids = null,
    double Width = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTable.property.column">Column</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTable.property.nrqlQuery">NrqlQuery</a></code> | <code>object</code> | nrql_query block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTable.property.row">Row</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTable.property.title">Title</a></code> | <code>string</code> | A title for the widget. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTable.property.filterCurrentDashboard">FilterCurrentDashboard</a></code> | <code>object</code> | Use this item to filter the current dashboard. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTable.property.height">Height</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTable.property.ignoreTimeRange">IgnoreTimeRange</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTable.property.linkedEntityGuids">LinkedEntityGuids</a></code> | <code>string[]</code> | Related entities. Currently only supports Dashboard entities, but may allow other cases in the future. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTable.property.width">Width</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}. |

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTable.property.column"></a>

```csharp
public double Column { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}.

---

##### `NrqlQuery`<sup>Required</sup> <a name="NrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTable.property.nrqlQuery"></a>

```csharp
public object NrqlQuery { get; set; }
```

- *Type:* object

nrql_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#nrql_query OneDashboard#nrql_query}

---

##### `Row`<sup>Required</sup> <a name="Row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTable.property.row"></a>

```csharp
public double Row { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTable.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#title OneDashboard#title}

---

##### `FilterCurrentDashboard`<sup>Optional</sup> <a name="FilterCurrentDashboard" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTable.property.filterCurrentDashboard"></a>

```csharp
public object FilterCurrentDashboard { get; set; }
```

- *Type:* object

Use this item to filter the current dashboard.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#filter_current_dashboard OneDashboard#filter_current_dashboard}

---

##### `Height`<sup>Optional</sup> <a name="Height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTable.property.height"></a>

```csharp
public double Height { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}.

---

##### `IgnoreTimeRange`<sup>Optional</sup> <a name="IgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTable.property.ignoreTimeRange"></a>

```csharp
public object IgnoreTimeRange { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}.

---

##### `LinkedEntityGuids`<sup>Optional</sup> <a name="LinkedEntityGuids" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTable.property.linkedEntityGuids"></a>

```csharp
public string[] LinkedEntityGuids { get; set; }
```

- *Type:* string[]

Related entities. Currently only supports Dashboard entities, but may allow other cases in the future.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#linked_entity_guids OneDashboard#linked_entity_guids}

---

##### `Width`<sup>Optional</sup> <a name="Width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTable.property.width"></a>

```csharp
public double Width { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}.

---

### OneDashboardPageWidgetTableNrqlQuery <a name="OneDashboardPageWidgetTableNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQuery.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetTableNrqlQuery {
    string Query,
    double AccountId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQuery.property.query">Query</a></code> | <code>string</code> | The NRQL query. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQuery.property.accountId">AccountId</a></code> | <code>double</code> | The account id used for the NRQL query. |

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQuery.property.query"></a>

```csharp
public string Query { get; set; }
```

- *Type:* string

The NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#query OneDashboard#query}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQuery.property.accountId"></a>

```csharp
public double AccountId { get; set; }
```

- *Type:* double

The account id used for the NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#account_id OneDashboard#account_id}

---

### OneDashboardVariable <a name="OneDashboardVariable" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariable.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardVariable {
    string Name,
    string ReplacementStrategy,
    string Title,
    string Type,
    string[] DefaultValues = null,
    object IsMultiSelection = null,
    object Item = null,
    OneDashboardVariableNrqlQuery NrqlQuery = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariable.property.name">Name</a></code> | <code>string</code> | The variable identifier. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariable.property.replacementStrategy">ReplacementStrategy</a></code> | <code>string</code> | Indicates the strategy to apply when replacing a variable in a NRQL query. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariable.property.title">Title</a></code> | <code>string</code> | Human-friendly display string for this variable. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariable.property.type">Type</a></code> | <code>string</code> | Specifies the data type of the variable and where its possible values may come from. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariable.property.defaultValues">DefaultValues</a></code> | <code>string[]</code> | Default values for this variable. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariable.property.isMultiSelection">IsMultiSelection</a></code> | <code>object</code> | Indicates whether this variable supports multiple selection or not. Only applies to variables of type NRQL or ENUM. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariable.property.item">Item</a></code> | <code>object</code> | item block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariable.property.nrqlQuery">NrqlQuery</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQuery">OneDashboardVariableNrqlQuery</a></code> | nrql_query block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariable.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The variable identifier.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#name OneDashboard#name}

---

##### `ReplacementStrategy`<sup>Required</sup> <a name="ReplacementStrategy" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariable.property.replacementStrategy"></a>

```csharp
public string ReplacementStrategy { get; set; }
```

- *Type:* string

Indicates the strategy to apply when replacing a variable in a NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#replacement_strategy OneDashboard#replacement_strategy}

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariable.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Human-friendly display string for this variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#title OneDashboard#title}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariable.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Specifies the data type of the variable and where its possible values may come from.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#type OneDashboard#type}

---

##### `DefaultValues`<sup>Optional</sup> <a name="DefaultValues" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariable.property.defaultValues"></a>

```csharp
public string[] DefaultValues { get; set; }
```

- *Type:* string[]

Default values for this variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#default_values OneDashboard#default_values}

---

##### `IsMultiSelection`<sup>Optional</sup> <a name="IsMultiSelection" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariable.property.isMultiSelection"></a>

```csharp
public object IsMultiSelection { get; set; }
```

- *Type:* object

Indicates whether this variable supports multiple selection or not. Only applies to variables of type NRQL or ENUM.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#is_multi_selection OneDashboard#is_multi_selection}

---

##### `Item`<sup>Optional</sup> <a name="Item" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariable.property.item"></a>

```csharp
public object Item { get; set; }
```

- *Type:* object

item block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#item OneDashboard#item}

---

##### `NrqlQuery`<sup>Optional</sup> <a name="NrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariable.property.nrqlQuery"></a>

```csharp
public OneDashboardVariableNrqlQuery NrqlQuery { get; set; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQuery">OneDashboardVariableNrqlQuery</a>

nrql_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#nrql_query OneDashboard#nrql_query}

---

### OneDashboardVariableItem <a name="OneDashboardVariableItem" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItem"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItem.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardVariableItem {
    string Value,
    string Title = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItem.property.value">Value</a></code> | <code>string</code> | A possible variable value. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItem.property.title">Title</a></code> | <code>string</code> | A human-friendly display string for this value. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItem.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

A possible variable value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#value OneDashboard#value}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItem.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

A human-friendly display string for this value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#title OneDashboard#title}

---

### OneDashboardVariableNrqlQuery <a name="OneDashboardVariableNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQuery.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardVariableNrqlQuery {
    string Query,
    double[] AccountIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQuery.property.query">Query</a></code> | <code>string</code> | NRQL formatted query. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQuery.property.accountIds">AccountIds</a></code> | <code>double[]</code> | New Relic account ID(s) to issue the query against. |

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQuery.property.query"></a>

```csharp
public string Query { get; set; }
```

- *Type:* string

NRQL formatted query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#query OneDashboard#query}

---

##### `AccountIds`<sup>Optional</sup> <a name="AccountIds" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQuery.property.accountIds"></a>

```csharp
public double[] AccountIds { get; set; }
```

- *Type:* double[]

New Relic account ID(s) to issue the query against.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#account_ids OneDashboard#account_ids}

---

## Classes <a name="Classes" id="Classes"></a>

### OneDashboardPageList <a name="OneDashboardPageList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList.get"></a>

```csharp
private OneDashboardPageOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OneDashboardPageOutputReference <a name="OneDashboardPageOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetArea">PutWidgetArea</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetBar">PutWidgetBar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetBillboard">PutWidgetBillboard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetBullet">PutWidgetBullet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetFunnel">PutWidgetFunnel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetHeatmap">PutWidgetHeatmap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetHistogram">PutWidgetHistogram</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetJson">PutWidgetJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetLine">PutWidgetLine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetLogTable">PutWidgetLogTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetMarkdown">PutWidgetMarkdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetPie">PutWidgetPie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetStackedBar">PutWidgetStackedBar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetTable">PutWidgetTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetArea">ResetWidgetArea</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetBar">ResetWidgetBar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetBillboard">ResetWidgetBillboard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetBullet">ResetWidgetBullet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetFunnel">ResetWidgetFunnel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetHeatmap">ResetWidgetHeatmap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetHistogram">ResetWidgetHistogram</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetJson">ResetWidgetJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetLine">ResetWidgetLine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetLogTable">ResetWidgetLogTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetMarkdown">ResetWidgetMarkdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetPie">ResetWidgetPie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetStackedBar">ResetWidgetStackedBar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetTable">ResetWidgetTable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutWidgetArea` <a name="PutWidgetArea" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetArea"></a>

```csharp
private void PutWidgetArea(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetArea.parameter.value"></a>

- *Type:* object

---

##### `PutWidgetBar` <a name="PutWidgetBar" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetBar"></a>

```csharp
private void PutWidgetBar(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetBar.parameter.value"></a>

- *Type:* object

---

##### `PutWidgetBillboard` <a name="PutWidgetBillboard" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetBillboard"></a>

```csharp
private void PutWidgetBillboard(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetBillboard.parameter.value"></a>

- *Type:* object

---

##### `PutWidgetBullet` <a name="PutWidgetBullet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetBullet"></a>

```csharp
private void PutWidgetBullet(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetBullet.parameter.value"></a>

- *Type:* object

---

##### `PutWidgetFunnel` <a name="PutWidgetFunnel" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetFunnel"></a>

```csharp
private void PutWidgetFunnel(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetFunnel.parameter.value"></a>

- *Type:* object

---

##### `PutWidgetHeatmap` <a name="PutWidgetHeatmap" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetHeatmap"></a>

```csharp
private void PutWidgetHeatmap(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetHeatmap.parameter.value"></a>

- *Type:* object

---

##### `PutWidgetHistogram` <a name="PutWidgetHistogram" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetHistogram"></a>

```csharp
private void PutWidgetHistogram(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetHistogram.parameter.value"></a>

- *Type:* object

---

##### `PutWidgetJson` <a name="PutWidgetJson" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetJson"></a>

```csharp
private void PutWidgetJson(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetJson.parameter.value"></a>

- *Type:* object

---

##### `PutWidgetLine` <a name="PutWidgetLine" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetLine"></a>

```csharp
private void PutWidgetLine(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetLine.parameter.value"></a>

- *Type:* object

---

##### `PutWidgetLogTable` <a name="PutWidgetLogTable" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetLogTable"></a>

```csharp
private void PutWidgetLogTable(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetLogTable.parameter.value"></a>

- *Type:* object

---

##### `PutWidgetMarkdown` <a name="PutWidgetMarkdown" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetMarkdown"></a>

```csharp
private void PutWidgetMarkdown(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetMarkdown.parameter.value"></a>

- *Type:* object

---

##### `PutWidgetPie` <a name="PutWidgetPie" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetPie"></a>

```csharp
private void PutWidgetPie(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetPie.parameter.value"></a>

- *Type:* object

---

##### `PutWidgetStackedBar` <a name="PutWidgetStackedBar" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetStackedBar"></a>

```csharp
private void PutWidgetStackedBar(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetStackedBar.parameter.value"></a>

- *Type:* object

---

##### `PutWidgetTable` <a name="PutWidgetTable" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetTable"></a>

```csharp
private void PutWidgetTable(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetTable.parameter.value"></a>

- *Type:* object

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetWidgetArea` <a name="ResetWidgetArea" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetArea"></a>

```csharp
private void ResetWidgetArea()
```

##### `ResetWidgetBar` <a name="ResetWidgetBar" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetBar"></a>

```csharp
private void ResetWidgetBar()
```

##### `ResetWidgetBillboard` <a name="ResetWidgetBillboard" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetBillboard"></a>

```csharp
private void ResetWidgetBillboard()
```

##### `ResetWidgetBullet` <a name="ResetWidgetBullet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetBullet"></a>

```csharp
private void ResetWidgetBullet()
```

##### `ResetWidgetFunnel` <a name="ResetWidgetFunnel" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetFunnel"></a>

```csharp
private void ResetWidgetFunnel()
```

##### `ResetWidgetHeatmap` <a name="ResetWidgetHeatmap" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetHeatmap"></a>

```csharp
private void ResetWidgetHeatmap()
```

##### `ResetWidgetHistogram` <a name="ResetWidgetHistogram" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetHistogram"></a>

```csharp
private void ResetWidgetHistogram()
```

##### `ResetWidgetJson` <a name="ResetWidgetJson" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetJson"></a>

```csharp
private void ResetWidgetJson()
```

##### `ResetWidgetLine` <a name="ResetWidgetLine" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetLine"></a>

```csharp
private void ResetWidgetLine()
```

##### `ResetWidgetLogTable` <a name="ResetWidgetLogTable" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetLogTable"></a>

```csharp
private void ResetWidgetLogTable()
```

##### `ResetWidgetMarkdown` <a name="ResetWidgetMarkdown" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetMarkdown"></a>

```csharp
private void ResetWidgetMarkdown()
```

##### `ResetWidgetPie` <a name="ResetWidgetPie" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetPie"></a>

```csharp
private void ResetWidgetPie()
```

##### `ResetWidgetStackedBar` <a name="ResetWidgetStackedBar" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetStackedBar"></a>

```csharp
private void ResetWidgetStackedBar()
```

##### `ResetWidgetTable` <a name="ResetWidgetTable" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetTable"></a>

```csharp
private void ResetWidgetTable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.guid">Guid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetArea">WidgetArea</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList">OneDashboardPageWidgetAreaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetBar">WidgetBar</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList">OneDashboardPageWidgetBarList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetBillboard">WidgetBillboard</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList">OneDashboardPageWidgetBillboardList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetBullet">WidgetBullet</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList">OneDashboardPageWidgetBulletList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetFunnel">WidgetFunnel</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList">OneDashboardPageWidgetFunnelList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetHeatmap">WidgetHeatmap</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList">OneDashboardPageWidgetHeatmapList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetHistogram">WidgetHistogram</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList">OneDashboardPageWidgetHistogramList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetJson">WidgetJson</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList">OneDashboardPageWidgetJsonList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetLine">WidgetLine</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList">OneDashboardPageWidgetLineList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetLogTable">WidgetLogTable</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList">OneDashboardPageWidgetLogTableList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetMarkdown">WidgetMarkdown</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList">OneDashboardPageWidgetMarkdownList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetPie">WidgetPie</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList">OneDashboardPageWidgetPieList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetStackedBar">WidgetStackedBar</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList">OneDashboardPageWidgetStackedBarList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetTable">WidgetTable</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList">OneDashboardPageWidgetTableList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetAreaInput">WidgetAreaInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetBarInput">WidgetBarInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetBillboardInput">WidgetBillboardInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetBulletInput">WidgetBulletInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetFunnelInput">WidgetFunnelInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetHeatmapInput">WidgetHeatmapInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetHistogramInput">WidgetHistogramInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetJsonInput">WidgetJsonInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetLineInput">WidgetLineInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetLogTableInput">WidgetLogTableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetMarkdownInput">WidgetMarkdownInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetPieInput">WidgetPieInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetStackedBarInput">WidgetStackedBarInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetTableInput">WidgetTableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Guid`<sup>Required</sup> <a name="Guid" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.guid"></a>

```csharp
public string Guid { get; }
```

- *Type:* string

---

##### `WidgetArea`<sup>Required</sup> <a name="WidgetArea" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetArea"></a>

```csharp
public OneDashboardPageWidgetAreaList WidgetArea { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList">OneDashboardPageWidgetAreaList</a>

---

##### `WidgetBar`<sup>Required</sup> <a name="WidgetBar" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetBar"></a>

```csharp
public OneDashboardPageWidgetBarList WidgetBar { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList">OneDashboardPageWidgetBarList</a>

---

##### `WidgetBillboard`<sup>Required</sup> <a name="WidgetBillboard" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetBillboard"></a>

```csharp
public OneDashboardPageWidgetBillboardList WidgetBillboard { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList">OneDashboardPageWidgetBillboardList</a>

---

##### `WidgetBullet`<sup>Required</sup> <a name="WidgetBullet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetBullet"></a>

```csharp
public OneDashboardPageWidgetBulletList WidgetBullet { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList">OneDashboardPageWidgetBulletList</a>

---

##### `WidgetFunnel`<sup>Required</sup> <a name="WidgetFunnel" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetFunnel"></a>

```csharp
public OneDashboardPageWidgetFunnelList WidgetFunnel { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList">OneDashboardPageWidgetFunnelList</a>

---

##### `WidgetHeatmap`<sup>Required</sup> <a name="WidgetHeatmap" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetHeatmap"></a>

```csharp
public OneDashboardPageWidgetHeatmapList WidgetHeatmap { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList">OneDashboardPageWidgetHeatmapList</a>

---

##### `WidgetHistogram`<sup>Required</sup> <a name="WidgetHistogram" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetHistogram"></a>

```csharp
public OneDashboardPageWidgetHistogramList WidgetHistogram { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList">OneDashboardPageWidgetHistogramList</a>

---

##### `WidgetJson`<sup>Required</sup> <a name="WidgetJson" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetJson"></a>

```csharp
public OneDashboardPageWidgetJsonList WidgetJson { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList">OneDashboardPageWidgetJsonList</a>

---

##### `WidgetLine`<sup>Required</sup> <a name="WidgetLine" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetLine"></a>

```csharp
public OneDashboardPageWidgetLineList WidgetLine { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList">OneDashboardPageWidgetLineList</a>

---

##### `WidgetLogTable`<sup>Required</sup> <a name="WidgetLogTable" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetLogTable"></a>

```csharp
public OneDashboardPageWidgetLogTableList WidgetLogTable { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList">OneDashboardPageWidgetLogTableList</a>

---

##### `WidgetMarkdown`<sup>Required</sup> <a name="WidgetMarkdown" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetMarkdown"></a>

```csharp
public OneDashboardPageWidgetMarkdownList WidgetMarkdown { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList">OneDashboardPageWidgetMarkdownList</a>

---

##### `WidgetPie`<sup>Required</sup> <a name="WidgetPie" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetPie"></a>

```csharp
public OneDashboardPageWidgetPieList WidgetPie { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList">OneDashboardPageWidgetPieList</a>

---

##### `WidgetStackedBar`<sup>Required</sup> <a name="WidgetStackedBar" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetStackedBar"></a>

```csharp
public OneDashboardPageWidgetStackedBarList WidgetStackedBar { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList">OneDashboardPageWidgetStackedBarList</a>

---

##### `WidgetTable`<sup>Required</sup> <a name="WidgetTable" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetTable"></a>

```csharp
public OneDashboardPageWidgetTableList WidgetTable { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList">OneDashboardPageWidgetTableList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `WidgetAreaInput`<sup>Optional</sup> <a name="WidgetAreaInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetAreaInput"></a>

```csharp
public object WidgetAreaInput { get; }
```

- *Type:* object

---

##### `WidgetBarInput`<sup>Optional</sup> <a name="WidgetBarInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetBarInput"></a>

```csharp
public object WidgetBarInput { get; }
```

- *Type:* object

---

##### `WidgetBillboardInput`<sup>Optional</sup> <a name="WidgetBillboardInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetBillboardInput"></a>

```csharp
public object WidgetBillboardInput { get; }
```

- *Type:* object

---

##### `WidgetBulletInput`<sup>Optional</sup> <a name="WidgetBulletInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetBulletInput"></a>

```csharp
public object WidgetBulletInput { get; }
```

- *Type:* object

---

##### `WidgetFunnelInput`<sup>Optional</sup> <a name="WidgetFunnelInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetFunnelInput"></a>

```csharp
public object WidgetFunnelInput { get; }
```

- *Type:* object

---

##### `WidgetHeatmapInput`<sup>Optional</sup> <a name="WidgetHeatmapInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetHeatmapInput"></a>

```csharp
public object WidgetHeatmapInput { get; }
```

- *Type:* object

---

##### `WidgetHistogramInput`<sup>Optional</sup> <a name="WidgetHistogramInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetHistogramInput"></a>

```csharp
public object WidgetHistogramInput { get; }
```

- *Type:* object

---

##### `WidgetJsonInput`<sup>Optional</sup> <a name="WidgetJsonInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetJsonInput"></a>

```csharp
public object WidgetJsonInput { get; }
```

- *Type:* object

---

##### `WidgetLineInput`<sup>Optional</sup> <a name="WidgetLineInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetLineInput"></a>

```csharp
public object WidgetLineInput { get; }
```

- *Type:* object

---

##### `WidgetLogTableInput`<sup>Optional</sup> <a name="WidgetLogTableInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetLogTableInput"></a>

```csharp
public object WidgetLogTableInput { get; }
```

- *Type:* object

---

##### `WidgetMarkdownInput`<sup>Optional</sup> <a name="WidgetMarkdownInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetMarkdownInput"></a>

```csharp
public object WidgetMarkdownInput { get; }
```

- *Type:* object

---

##### `WidgetPieInput`<sup>Optional</sup> <a name="WidgetPieInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetPieInput"></a>

```csharp
public object WidgetPieInput { get; }
```

- *Type:* object

---

##### `WidgetStackedBarInput`<sup>Optional</sup> <a name="WidgetStackedBarInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetStackedBarInput"></a>

```csharp
public object WidgetStackedBarInput { get; }
```

- *Type:* object

---

##### `WidgetTableInput`<sup>Optional</sup> <a name="WidgetTableInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetTableInput"></a>

```csharp
public object WidgetTableInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OneDashboardPageWidgetAreaList <a name="OneDashboardPageWidgetAreaList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetAreaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList.get"></a>

```csharp
private OneDashboardPageWidgetAreaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OneDashboardPageWidgetAreaNrqlQueryList <a name="OneDashboardPageWidgetAreaNrqlQueryList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetAreaNrqlQueryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList.get"></a>

```csharp
private OneDashboardPageWidgetAreaNrqlQueryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OneDashboardPageWidgetAreaNrqlQueryOutputReference <a name="OneDashboardPageWidgetAreaNrqlQueryOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetAreaNrqlQueryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.resetAccountId">ResetAccountId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.resetAccountId"></a>

```csharp
private void ResetAccountId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.property.queryInput">QueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.property.accountId">AccountId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.property.accountIdInput"></a>

```csharp
public double AccountIdInput { get; }
```

- *Type:* double

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.property.queryInput"></a>

```csharp
public string QueryInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.property.accountId"></a>

```csharp
public double AccountId { get; }
```

- *Type:* double

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OneDashboardPageWidgetAreaOutputReference <a name="OneDashboardPageWidgetAreaOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetAreaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.putNrqlQuery">PutNrqlQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.resetHeight">ResetHeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.resetIgnoreTimeRange">ResetIgnoreTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.resetWidth">ResetWidth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNrqlQuery` <a name="PutNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.putNrqlQuery"></a>

```csharp
private void PutNrqlQuery(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.putNrqlQuery.parameter.value"></a>

- *Type:* object

---

##### `ResetHeight` <a name="ResetHeight" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.resetHeight"></a>

```csharp
private void ResetHeight()
```

##### `ResetIgnoreTimeRange` <a name="ResetIgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.resetIgnoreTimeRange"></a>

```csharp
private void ResetIgnoreTimeRange()
```

##### `ResetWidth` <a name="ResetWidth" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.resetWidth"></a>

```csharp
private void ResetWidth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.nrqlQuery">NrqlQuery</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList">OneDashboardPageWidgetAreaNrqlQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.columnInput">ColumnInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.heightInput">HeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.ignoreTimeRangeInput">IgnoreTimeRangeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.nrqlQueryInput">NrqlQueryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.rowInput">RowInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.widthInput">WidthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.column">Column</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.height">Height</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.ignoreTimeRange">IgnoreTimeRange</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.row">Row</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.width">Width</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NrqlQuery`<sup>Required</sup> <a name="NrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.nrqlQuery"></a>

```csharp
public OneDashboardPageWidgetAreaNrqlQueryList NrqlQuery { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList">OneDashboardPageWidgetAreaNrqlQueryList</a>

---

##### `ColumnInput`<sup>Optional</sup> <a name="ColumnInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.columnInput"></a>

```csharp
public double ColumnInput { get; }
```

- *Type:* double

---

##### `HeightInput`<sup>Optional</sup> <a name="HeightInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.heightInput"></a>

```csharp
public double HeightInput { get; }
```

- *Type:* double

---

##### `IgnoreTimeRangeInput`<sup>Optional</sup> <a name="IgnoreTimeRangeInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.ignoreTimeRangeInput"></a>

```csharp
public object IgnoreTimeRangeInput { get; }
```

- *Type:* object

---

##### `NrqlQueryInput`<sup>Optional</sup> <a name="NrqlQueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.nrqlQueryInput"></a>

```csharp
public object NrqlQueryInput { get; }
```

- *Type:* object

---

##### `RowInput`<sup>Optional</sup> <a name="RowInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.rowInput"></a>

```csharp
public double RowInput { get; }
```

- *Type:* double

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `WidthInput`<sup>Optional</sup> <a name="WidthInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.widthInput"></a>

```csharp
public double WidthInput { get; }
```

- *Type:* double

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.column"></a>

```csharp
public double Column { get; }
```

- *Type:* double

---

##### `Height`<sup>Required</sup> <a name="Height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.height"></a>

```csharp
public double Height { get; }
```

- *Type:* double

---

##### `IgnoreTimeRange`<sup>Required</sup> <a name="IgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.ignoreTimeRange"></a>

```csharp
public object IgnoreTimeRange { get; }
```

- *Type:* object

---

##### `Row`<sup>Required</sup> <a name="Row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.row"></a>

```csharp
public double Row { get; }
```

- *Type:* double

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `Width`<sup>Required</sup> <a name="Width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.width"></a>

```csharp
public double Width { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OneDashboardPageWidgetBarList <a name="OneDashboardPageWidgetBarList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetBarList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList.get"></a>

```csharp
private OneDashboardPageWidgetBarOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OneDashboardPageWidgetBarNrqlQueryList <a name="OneDashboardPageWidgetBarNrqlQueryList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetBarNrqlQueryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList.get"></a>

```csharp
private OneDashboardPageWidgetBarNrqlQueryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OneDashboardPageWidgetBarNrqlQueryOutputReference <a name="OneDashboardPageWidgetBarNrqlQueryOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetBarNrqlQueryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.resetAccountId">ResetAccountId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.resetAccountId"></a>

```csharp
private void ResetAccountId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.property.queryInput">QueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.property.accountId">AccountId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.property.accountIdInput"></a>

```csharp
public double AccountIdInput { get; }
```

- *Type:* double

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.property.queryInput"></a>

```csharp
public string QueryInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.property.accountId"></a>

```csharp
public double AccountId { get; }
```

- *Type:* double

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OneDashboardPageWidgetBarOutputReference <a name="OneDashboardPageWidgetBarOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetBarOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.putNrqlQuery">PutNrqlQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.resetFilterCurrentDashboard">ResetFilterCurrentDashboard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.resetHeight">ResetHeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.resetIgnoreTimeRange">ResetIgnoreTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.resetLinkedEntityGuids">ResetLinkedEntityGuids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.resetWidth">ResetWidth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNrqlQuery` <a name="PutNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.putNrqlQuery"></a>

```csharp
private void PutNrqlQuery(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.putNrqlQuery.parameter.value"></a>

- *Type:* object

---

##### `ResetFilterCurrentDashboard` <a name="ResetFilterCurrentDashboard" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.resetFilterCurrentDashboard"></a>

```csharp
private void ResetFilterCurrentDashboard()
```

##### `ResetHeight` <a name="ResetHeight" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.resetHeight"></a>

```csharp
private void ResetHeight()
```

##### `ResetIgnoreTimeRange` <a name="ResetIgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.resetIgnoreTimeRange"></a>

```csharp
private void ResetIgnoreTimeRange()
```

##### `ResetLinkedEntityGuids` <a name="ResetLinkedEntityGuids" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.resetLinkedEntityGuids"></a>

```csharp
private void ResetLinkedEntityGuids()
```

##### `ResetWidth` <a name="ResetWidth" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.resetWidth"></a>

```csharp
private void ResetWidth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.nrqlQuery">NrqlQuery</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList">OneDashboardPageWidgetBarNrqlQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.columnInput">ColumnInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.filterCurrentDashboardInput">FilterCurrentDashboardInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.heightInput">HeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.ignoreTimeRangeInput">IgnoreTimeRangeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.linkedEntityGuidsInput">LinkedEntityGuidsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.nrqlQueryInput">NrqlQueryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.rowInput">RowInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.widthInput">WidthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.column">Column</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.filterCurrentDashboard">FilterCurrentDashboard</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.height">Height</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.ignoreTimeRange">IgnoreTimeRange</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.linkedEntityGuids">LinkedEntityGuids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.row">Row</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.width">Width</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NrqlQuery`<sup>Required</sup> <a name="NrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.nrqlQuery"></a>

```csharp
public OneDashboardPageWidgetBarNrqlQueryList NrqlQuery { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList">OneDashboardPageWidgetBarNrqlQueryList</a>

---

##### `ColumnInput`<sup>Optional</sup> <a name="ColumnInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.columnInput"></a>

```csharp
public double ColumnInput { get; }
```

- *Type:* double

---

##### `FilterCurrentDashboardInput`<sup>Optional</sup> <a name="FilterCurrentDashboardInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.filterCurrentDashboardInput"></a>

```csharp
public object FilterCurrentDashboardInput { get; }
```

- *Type:* object

---

##### `HeightInput`<sup>Optional</sup> <a name="HeightInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.heightInput"></a>

```csharp
public double HeightInput { get; }
```

- *Type:* double

---

##### `IgnoreTimeRangeInput`<sup>Optional</sup> <a name="IgnoreTimeRangeInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.ignoreTimeRangeInput"></a>

```csharp
public object IgnoreTimeRangeInput { get; }
```

- *Type:* object

---

##### `LinkedEntityGuidsInput`<sup>Optional</sup> <a name="LinkedEntityGuidsInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.linkedEntityGuidsInput"></a>

```csharp
public string[] LinkedEntityGuidsInput { get; }
```

- *Type:* string[]

---

##### `NrqlQueryInput`<sup>Optional</sup> <a name="NrqlQueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.nrqlQueryInput"></a>

```csharp
public object NrqlQueryInput { get; }
```

- *Type:* object

---

##### `RowInput`<sup>Optional</sup> <a name="RowInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.rowInput"></a>

```csharp
public double RowInput { get; }
```

- *Type:* double

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `WidthInput`<sup>Optional</sup> <a name="WidthInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.widthInput"></a>

```csharp
public double WidthInput { get; }
```

- *Type:* double

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.column"></a>

```csharp
public double Column { get; }
```

- *Type:* double

---

##### `FilterCurrentDashboard`<sup>Required</sup> <a name="FilterCurrentDashboard" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.filterCurrentDashboard"></a>

```csharp
public object FilterCurrentDashboard { get; }
```

- *Type:* object

---

##### `Height`<sup>Required</sup> <a name="Height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.height"></a>

```csharp
public double Height { get; }
```

- *Type:* double

---

##### `IgnoreTimeRange`<sup>Required</sup> <a name="IgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.ignoreTimeRange"></a>

```csharp
public object IgnoreTimeRange { get; }
```

- *Type:* object

---

##### `LinkedEntityGuids`<sup>Required</sup> <a name="LinkedEntityGuids" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.linkedEntityGuids"></a>

```csharp
public string[] LinkedEntityGuids { get; }
```

- *Type:* string[]

---

##### `Row`<sup>Required</sup> <a name="Row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.row"></a>

```csharp
public double Row { get; }
```

- *Type:* double

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `Width`<sup>Required</sup> <a name="Width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.width"></a>

```csharp
public double Width { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OneDashboardPageWidgetBillboardList <a name="OneDashboardPageWidgetBillboardList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetBillboardList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList.get"></a>

```csharp
private OneDashboardPageWidgetBillboardOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OneDashboardPageWidgetBillboardNrqlQueryList <a name="OneDashboardPageWidgetBillboardNrqlQueryList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetBillboardNrqlQueryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList.get"></a>

```csharp
private OneDashboardPageWidgetBillboardNrqlQueryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OneDashboardPageWidgetBillboardNrqlQueryOutputReference <a name="OneDashboardPageWidgetBillboardNrqlQueryOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetBillboardNrqlQueryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.resetAccountId">ResetAccountId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.resetAccountId"></a>

```csharp
private void ResetAccountId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.property.queryInput">QueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.property.accountId">AccountId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.property.accountIdInput"></a>

```csharp
public double AccountIdInput { get; }
```

- *Type:* double

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.property.queryInput"></a>

```csharp
public string QueryInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.property.accountId"></a>

```csharp
public double AccountId { get; }
```

- *Type:* double

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OneDashboardPageWidgetBillboardOutputReference <a name="OneDashboardPageWidgetBillboardOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetBillboardOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.putNrqlQuery">PutNrqlQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.resetCritical">ResetCritical</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.resetHeight">ResetHeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.resetIgnoreTimeRange">ResetIgnoreTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.resetWarning">ResetWarning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.resetWidth">ResetWidth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNrqlQuery` <a name="PutNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.putNrqlQuery"></a>

```csharp
private void PutNrqlQuery(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.putNrqlQuery.parameter.value"></a>

- *Type:* object

---

##### `ResetCritical` <a name="ResetCritical" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.resetCritical"></a>

```csharp
private void ResetCritical()
```

##### `ResetHeight` <a name="ResetHeight" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.resetHeight"></a>

```csharp
private void ResetHeight()
```

##### `ResetIgnoreTimeRange` <a name="ResetIgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.resetIgnoreTimeRange"></a>

```csharp
private void ResetIgnoreTimeRange()
```

##### `ResetWarning` <a name="ResetWarning" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.resetWarning"></a>

```csharp
private void ResetWarning()
```

##### `ResetWidth` <a name="ResetWidth" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.resetWidth"></a>

```csharp
private void ResetWidth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.nrqlQuery">NrqlQuery</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList">OneDashboardPageWidgetBillboardNrqlQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.columnInput">ColumnInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.criticalInput">CriticalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.heightInput">HeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.ignoreTimeRangeInput">IgnoreTimeRangeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.nrqlQueryInput">NrqlQueryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.rowInput">RowInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.warningInput">WarningInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.widthInput">WidthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.column">Column</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.critical">Critical</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.height">Height</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.ignoreTimeRange">IgnoreTimeRange</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.row">Row</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.warning">Warning</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.width">Width</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NrqlQuery`<sup>Required</sup> <a name="NrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.nrqlQuery"></a>

```csharp
public OneDashboardPageWidgetBillboardNrqlQueryList NrqlQuery { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList">OneDashboardPageWidgetBillboardNrqlQueryList</a>

---

##### `ColumnInput`<sup>Optional</sup> <a name="ColumnInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.columnInput"></a>

```csharp
public double ColumnInput { get; }
```

- *Type:* double

---

##### `CriticalInput`<sup>Optional</sup> <a name="CriticalInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.criticalInput"></a>

```csharp
public string CriticalInput { get; }
```

- *Type:* string

---

##### `HeightInput`<sup>Optional</sup> <a name="HeightInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.heightInput"></a>

```csharp
public double HeightInput { get; }
```

- *Type:* double

---

##### `IgnoreTimeRangeInput`<sup>Optional</sup> <a name="IgnoreTimeRangeInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.ignoreTimeRangeInput"></a>

```csharp
public object IgnoreTimeRangeInput { get; }
```

- *Type:* object

---

##### `NrqlQueryInput`<sup>Optional</sup> <a name="NrqlQueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.nrqlQueryInput"></a>

```csharp
public object NrqlQueryInput { get; }
```

- *Type:* object

---

##### `RowInput`<sup>Optional</sup> <a name="RowInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.rowInput"></a>

```csharp
public double RowInput { get; }
```

- *Type:* double

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `WarningInput`<sup>Optional</sup> <a name="WarningInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.warningInput"></a>

```csharp
public string WarningInput { get; }
```

- *Type:* string

---

##### `WidthInput`<sup>Optional</sup> <a name="WidthInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.widthInput"></a>

```csharp
public double WidthInput { get; }
```

- *Type:* double

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.column"></a>

```csharp
public double Column { get; }
```

- *Type:* double

---

##### `Critical`<sup>Required</sup> <a name="Critical" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.critical"></a>

```csharp
public string Critical { get; }
```

- *Type:* string

---

##### `Height`<sup>Required</sup> <a name="Height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.height"></a>

```csharp
public double Height { get; }
```

- *Type:* double

---

##### `IgnoreTimeRange`<sup>Required</sup> <a name="IgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.ignoreTimeRange"></a>

```csharp
public object IgnoreTimeRange { get; }
```

- *Type:* object

---

##### `Row`<sup>Required</sup> <a name="Row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.row"></a>

```csharp
public double Row { get; }
```

- *Type:* double

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `Warning`<sup>Required</sup> <a name="Warning" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.warning"></a>

```csharp
public string Warning { get; }
```

- *Type:* string

---

##### `Width`<sup>Required</sup> <a name="Width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.width"></a>

```csharp
public double Width { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OneDashboardPageWidgetBulletList <a name="OneDashboardPageWidgetBulletList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetBulletList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList.get"></a>

```csharp
private OneDashboardPageWidgetBulletOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OneDashboardPageWidgetBulletNrqlQueryList <a name="OneDashboardPageWidgetBulletNrqlQueryList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetBulletNrqlQueryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList.get"></a>

```csharp
private OneDashboardPageWidgetBulletNrqlQueryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OneDashboardPageWidgetBulletNrqlQueryOutputReference <a name="OneDashboardPageWidgetBulletNrqlQueryOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetBulletNrqlQueryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.resetAccountId">ResetAccountId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.resetAccountId"></a>

```csharp
private void ResetAccountId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.property.queryInput">QueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.property.accountId">AccountId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.property.accountIdInput"></a>

```csharp
public double AccountIdInput { get; }
```

- *Type:* double

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.property.queryInput"></a>

```csharp
public string QueryInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.property.accountId"></a>

```csharp
public double AccountId { get; }
```

- *Type:* double

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OneDashboardPageWidgetBulletOutputReference <a name="OneDashboardPageWidgetBulletOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetBulletOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.putNrqlQuery">PutNrqlQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.resetHeight">ResetHeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.resetIgnoreTimeRange">ResetIgnoreTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.resetWidth">ResetWidth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNrqlQuery` <a name="PutNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.putNrqlQuery"></a>

```csharp
private void PutNrqlQuery(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.putNrqlQuery.parameter.value"></a>

- *Type:* object

---

##### `ResetHeight` <a name="ResetHeight" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.resetHeight"></a>

```csharp
private void ResetHeight()
```

##### `ResetIgnoreTimeRange` <a name="ResetIgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.resetIgnoreTimeRange"></a>

```csharp
private void ResetIgnoreTimeRange()
```

##### `ResetWidth` <a name="ResetWidth" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.resetWidth"></a>

```csharp
private void ResetWidth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.nrqlQuery">NrqlQuery</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList">OneDashboardPageWidgetBulletNrqlQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.columnInput">ColumnInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.heightInput">HeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.ignoreTimeRangeInput">IgnoreTimeRangeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.limitInput">LimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.nrqlQueryInput">NrqlQueryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.rowInput">RowInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.widthInput">WidthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.column">Column</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.height">Height</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.ignoreTimeRange">IgnoreTimeRange</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.limit">Limit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.row">Row</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.width">Width</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NrqlQuery`<sup>Required</sup> <a name="NrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.nrqlQuery"></a>

```csharp
public OneDashboardPageWidgetBulletNrqlQueryList NrqlQuery { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList">OneDashboardPageWidgetBulletNrqlQueryList</a>

---

##### `ColumnInput`<sup>Optional</sup> <a name="ColumnInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.columnInput"></a>

```csharp
public double ColumnInput { get; }
```

- *Type:* double

---

##### `HeightInput`<sup>Optional</sup> <a name="HeightInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.heightInput"></a>

```csharp
public double HeightInput { get; }
```

- *Type:* double

---

##### `IgnoreTimeRangeInput`<sup>Optional</sup> <a name="IgnoreTimeRangeInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.ignoreTimeRangeInput"></a>

```csharp
public object IgnoreTimeRangeInput { get; }
```

- *Type:* object

---

##### `LimitInput`<sup>Optional</sup> <a name="LimitInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.limitInput"></a>

```csharp
public double LimitInput { get; }
```

- *Type:* double

---

##### `NrqlQueryInput`<sup>Optional</sup> <a name="NrqlQueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.nrqlQueryInput"></a>

```csharp
public object NrqlQueryInput { get; }
```

- *Type:* object

---

##### `RowInput`<sup>Optional</sup> <a name="RowInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.rowInput"></a>

```csharp
public double RowInput { get; }
```

- *Type:* double

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `WidthInput`<sup>Optional</sup> <a name="WidthInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.widthInput"></a>

```csharp
public double WidthInput { get; }
```

- *Type:* double

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.column"></a>

```csharp
public double Column { get; }
```

- *Type:* double

---

##### `Height`<sup>Required</sup> <a name="Height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.height"></a>

```csharp
public double Height { get; }
```

- *Type:* double

---

##### `IgnoreTimeRange`<sup>Required</sup> <a name="IgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.ignoreTimeRange"></a>

```csharp
public object IgnoreTimeRange { get; }
```

- *Type:* object

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.limit"></a>

```csharp
public double Limit { get; }
```

- *Type:* double

---

##### `Row`<sup>Required</sup> <a name="Row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.row"></a>

```csharp
public double Row { get; }
```

- *Type:* double

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `Width`<sup>Required</sup> <a name="Width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.width"></a>

```csharp
public double Width { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OneDashboardPageWidgetFunnelList <a name="OneDashboardPageWidgetFunnelList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetFunnelList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList.get"></a>

```csharp
private OneDashboardPageWidgetFunnelOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OneDashboardPageWidgetFunnelNrqlQueryList <a name="OneDashboardPageWidgetFunnelNrqlQueryList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetFunnelNrqlQueryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList.get"></a>

```csharp
private OneDashboardPageWidgetFunnelNrqlQueryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OneDashboardPageWidgetFunnelNrqlQueryOutputReference <a name="OneDashboardPageWidgetFunnelNrqlQueryOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetFunnelNrqlQueryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.resetAccountId">ResetAccountId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.resetAccountId"></a>

```csharp
private void ResetAccountId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.property.queryInput">QueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.property.accountId">AccountId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.property.accountIdInput"></a>

```csharp
public double AccountIdInput { get; }
```

- *Type:* double

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.property.queryInput"></a>

```csharp
public string QueryInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.property.accountId"></a>

```csharp
public double AccountId { get; }
```

- *Type:* double

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OneDashboardPageWidgetFunnelOutputReference <a name="OneDashboardPageWidgetFunnelOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetFunnelOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.putNrqlQuery">PutNrqlQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.resetHeight">ResetHeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.resetIgnoreTimeRange">ResetIgnoreTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.resetWidth">ResetWidth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNrqlQuery` <a name="PutNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.putNrqlQuery"></a>

```csharp
private void PutNrqlQuery(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.putNrqlQuery.parameter.value"></a>

- *Type:* object

---

##### `ResetHeight` <a name="ResetHeight" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.resetHeight"></a>

```csharp
private void ResetHeight()
```

##### `ResetIgnoreTimeRange` <a name="ResetIgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.resetIgnoreTimeRange"></a>

```csharp
private void ResetIgnoreTimeRange()
```

##### `ResetWidth` <a name="ResetWidth" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.resetWidth"></a>

```csharp
private void ResetWidth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.nrqlQuery">NrqlQuery</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList">OneDashboardPageWidgetFunnelNrqlQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.columnInput">ColumnInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.heightInput">HeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.ignoreTimeRangeInput">IgnoreTimeRangeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.nrqlQueryInput">NrqlQueryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.rowInput">RowInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.widthInput">WidthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.column">Column</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.height">Height</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.ignoreTimeRange">IgnoreTimeRange</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.row">Row</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.width">Width</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NrqlQuery`<sup>Required</sup> <a name="NrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.nrqlQuery"></a>

```csharp
public OneDashboardPageWidgetFunnelNrqlQueryList NrqlQuery { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList">OneDashboardPageWidgetFunnelNrqlQueryList</a>

---

##### `ColumnInput`<sup>Optional</sup> <a name="ColumnInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.columnInput"></a>

```csharp
public double ColumnInput { get; }
```

- *Type:* double

---

##### `HeightInput`<sup>Optional</sup> <a name="HeightInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.heightInput"></a>

```csharp
public double HeightInput { get; }
```

- *Type:* double

---

##### `IgnoreTimeRangeInput`<sup>Optional</sup> <a name="IgnoreTimeRangeInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.ignoreTimeRangeInput"></a>

```csharp
public object IgnoreTimeRangeInput { get; }
```

- *Type:* object

---

##### `NrqlQueryInput`<sup>Optional</sup> <a name="NrqlQueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.nrqlQueryInput"></a>

```csharp
public object NrqlQueryInput { get; }
```

- *Type:* object

---

##### `RowInput`<sup>Optional</sup> <a name="RowInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.rowInput"></a>

```csharp
public double RowInput { get; }
```

- *Type:* double

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `WidthInput`<sup>Optional</sup> <a name="WidthInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.widthInput"></a>

```csharp
public double WidthInput { get; }
```

- *Type:* double

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.column"></a>

```csharp
public double Column { get; }
```

- *Type:* double

---

##### `Height`<sup>Required</sup> <a name="Height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.height"></a>

```csharp
public double Height { get; }
```

- *Type:* double

---

##### `IgnoreTimeRange`<sup>Required</sup> <a name="IgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.ignoreTimeRange"></a>

```csharp
public object IgnoreTimeRange { get; }
```

- *Type:* object

---

##### `Row`<sup>Required</sup> <a name="Row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.row"></a>

```csharp
public double Row { get; }
```

- *Type:* double

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `Width`<sup>Required</sup> <a name="Width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.width"></a>

```csharp
public double Width { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OneDashboardPageWidgetHeatmapList <a name="OneDashboardPageWidgetHeatmapList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetHeatmapList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList.get"></a>

```csharp
private OneDashboardPageWidgetHeatmapOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OneDashboardPageWidgetHeatmapNrqlQueryList <a name="OneDashboardPageWidgetHeatmapNrqlQueryList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetHeatmapNrqlQueryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList.get"></a>

```csharp
private OneDashboardPageWidgetHeatmapNrqlQueryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OneDashboardPageWidgetHeatmapNrqlQueryOutputReference <a name="OneDashboardPageWidgetHeatmapNrqlQueryOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetHeatmapNrqlQueryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.resetAccountId">ResetAccountId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.resetAccountId"></a>

```csharp
private void ResetAccountId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.property.queryInput">QueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.property.accountId">AccountId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.property.accountIdInput"></a>

```csharp
public double AccountIdInput { get; }
```

- *Type:* double

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.property.queryInput"></a>

```csharp
public string QueryInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.property.accountId"></a>

```csharp
public double AccountId { get; }
```

- *Type:* double

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OneDashboardPageWidgetHeatmapOutputReference <a name="OneDashboardPageWidgetHeatmapOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetHeatmapOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.putNrqlQuery">PutNrqlQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.resetFilterCurrentDashboard">ResetFilterCurrentDashboard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.resetHeight">ResetHeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.resetIgnoreTimeRange">ResetIgnoreTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.resetLinkedEntityGuids">ResetLinkedEntityGuids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.resetWidth">ResetWidth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNrqlQuery` <a name="PutNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.putNrqlQuery"></a>

```csharp
private void PutNrqlQuery(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.putNrqlQuery.parameter.value"></a>

- *Type:* object

---

##### `ResetFilterCurrentDashboard` <a name="ResetFilterCurrentDashboard" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.resetFilterCurrentDashboard"></a>

```csharp
private void ResetFilterCurrentDashboard()
```

##### `ResetHeight` <a name="ResetHeight" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.resetHeight"></a>

```csharp
private void ResetHeight()
```

##### `ResetIgnoreTimeRange` <a name="ResetIgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.resetIgnoreTimeRange"></a>

```csharp
private void ResetIgnoreTimeRange()
```

##### `ResetLinkedEntityGuids` <a name="ResetLinkedEntityGuids" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.resetLinkedEntityGuids"></a>

```csharp
private void ResetLinkedEntityGuids()
```

##### `ResetWidth` <a name="ResetWidth" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.resetWidth"></a>

```csharp
private void ResetWidth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.nrqlQuery">NrqlQuery</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList">OneDashboardPageWidgetHeatmapNrqlQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.columnInput">ColumnInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.filterCurrentDashboardInput">FilterCurrentDashboardInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.heightInput">HeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.ignoreTimeRangeInput">IgnoreTimeRangeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.linkedEntityGuidsInput">LinkedEntityGuidsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.nrqlQueryInput">NrqlQueryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.rowInput">RowInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.widthInput">WidthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.column">Column</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.filterCurrentDashboard">FilterCurrentDashboard</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.height">Height</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.ignoreTimeRange">IgnoreTimeRange</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.linkedEntityGuids">LinkedEntityGuids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.row">Row</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.width">Width</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NrqlQuery`<sup>Required</sup> <a name="NrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.nrqlQuery"></a>

```csharp
public OneDashboardPageWidgetHeatmapNrqlQueryList NrqlQuery { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList">OneDashboardPageWidgetHeatmapNrqlQueryList</a>

---

##### `ColumnInput`<sup>Optional</sup> <a name="ColumnInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.columnInput"></a>

```csharp
public double ColumnInput { get; }
```

- *Type:* double

---

##### `FilterCurrentDashboardInput`<sup>Optional</sup> <a name="FilterCurrentDashboardInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.filterCurrentDashboardInput"></a>

```csharp
public object FilterCurrentDashboardInput { get; }
```

- *Type:* object

---

##### `HeightInput`<sup>Optional</sup> <a name="HeightInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.heightInput"></a>

```csharp
public double HeightInput { get; }
```

- *Type:* double

---

##### `IgnoreTimeRangeInput`<sup>Optional</sup> <a name="IgnoreTimeRangeInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.ignoreTimeRangeInput"></a>

```csharp
public object IgnoreTimeRangeInput { get; }
```

- *Type:* object

---

##### `LinkedEntityGuidsInput`<sup>Optional</sup> <a name="LinkedEntityGuidsInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.linkedEntityGuidsInput"></a>

```csharp
public string[] LinkedEntityGuidsInput { get; }
```

- *Type:* string[]

---

##### `NrqlQueryInput`<sup>Optional</sup> <a name="NrqlQueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.nrqlQueryInput"></a>

```csharp
public object NrqlQueryInput { get; }
```

- *Type:* object

---

##### `RowInput`<sup>Optional</sup> <a name="RowInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.rowInput"></a>

```csharp
public double RowInput { get; }
```

- *Type:* double

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `WidthInput`<sup>Optional</sup> <a name="WidthInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.widthInput"></a>

```csharp
public double WidthInput { get; }
```

- *Type:* double

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.column"></a>

```csharp
public double Column { get; }
```

- *Type:* double

---

##### `FilterCurrentDashboard`<sup>Required</sup> <a name="FilterCurrentDashboard" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.filterCurrentDashboard"></a>

```csharp
public object FilterCurrentDashboard { get; }
```

- *Type:* object

---

##### `Height`<sup>Required</sup> <a name="Height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.height"></a>

```csharp
public double Height { get; }
```

- *Type:* double

---

##### `IgnoreTimeRange`<sup>Required</sup> <a name="IgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.ignoreTimeRange"></a>

```csharp
public object IgnoreTimeRange { get; }
```

- *Type:* object

---

##### `LinkedEntityGuids`<sup>Required</sup> <a name="LinkedEntityGuids" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.linkedEntityGuids"></a>

```csharp
public string[] LinkedEntityGuids { get; }
```

- *Type:* string[]

---

##### `Row`<sup>Required</sup> <a name="Row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.row"></a>

```csharp
public double Row { get; }
```

- *Type:* double

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `Width`<sup>Required</sup> <a name="Width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.width"></a>

```csharp
public double Width { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OneDashboardPageWidgetHistogramList <a name="OneDashboardPageWidgetHistogramList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetHistogramList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList.get"></a>

```csharp
private OneDashboardPageWidgetHistogramOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OneDashboardPageWidgetHistogramNrqlQueryList <a name="OneDashboardPageWidgetHistogramNrqlQueryList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetHistogramNrqlQueryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList.get"></a>

```csharp
private OneDashboardPageWidgetHistogramNrqlQueryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OneDashboardPageWidgetHistogramNrqlQueryOutputReference <a name="OneDashboardPageWidgetHistogramNrqlQueryOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetHistogramNrqlQueryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.resetAccountId">ResetAccountId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.resetAccountId"></a>

```csharp
private void ResetAccountId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.property.queryInput">QueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.property.accountId">AccountId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.property.accountIdInput"></a>

```csharp
public double AccountIdInput { get; }
```

- *Type:* double

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.property.queryInput"></a>

```csharp
public string QueryInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.property.accountId"></a>

```csharp
public double AccountId { get; }
```

- *Type:* double

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OneDashboardPageWidgetHistogramOutputReference <a name="OneDashboardPageWidgetHistogramOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetHistogramOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.putNrqlQuery">PutNrqlQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.resetHeight">ResetHeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.resetIgnoreTimeRange">ResetIgnoreTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.resetWidth">ResetWidth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNrqlQuery` <a name="PutNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.putNrqlQuery"></a>

```csharp
private void PutNrqlQuery(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.putNrqlQuery.parameter.value"></a>

- *Type:* object

---

##### `ResetHeight` <a name="ResetHeight" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.resetHeight"></a>

```csharp
private void ResetHeight()
```

##### `ResetIgnoreTimeRange` <a name="ResetIgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.resetIgnoreTimeRange"></a>

```csharp
private void ResetIgnoreTimeRange()
```

##### `ResetWidth` <a name="ResetWidth" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.resetWidth"></a>

```csharp
private void ResetWidth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.nrqlQuery">NrqlQuery</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList">OneDashboardPageWidgetHistogramNrqlQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.columnInput">ColumnInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.heightInput">HeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.ignoreTimeRangeInput">IgnoreTimeRangeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.nrqlQueryInput">NrqlQueryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.rowInput">RowInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.widthInput">WidthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.column">Column</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.height">Height</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.ignoreTimeRange">IgnoreTimeRange</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.row">Row</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.width">Width</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NrqlQuery`<sup>Required</sup> <a name="NrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.nrqlQuery"></a>

```csharp
public OneDashboardPageWidgetHistogramNrqlQueryList NrqlQuery { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList">OneDashboardPageWidgetHistogramNrqlQueryList</a>

---

##### `ColumnInput`<sup>Optional</sup> <a name="ColumnInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.columnInput"></a>

```csharp
public double ColumnInput { get; }
```

- *Type:* double

---

##### `HeightInput`<sup>Optional</sup> <a name="HeightInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.heightInput"></a>

```csharp
public double HeightInput { get; }
```

- *Type:* double

---

##### `IgnoreTimeRangeInput`<sup>Optional</sup> <a name="IgnoreTimeRangeInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.ignoreTimeRangeInput"></a>

```csharp
public object IgnoreTimeRangeInput { get; }
```

- *Type:* object

---

##### `NrqlQueryInput`<sup>Optional</sup> <a name="NrqlQueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.nrqlQueryInput"></a>

```csharp
public object NrqlQueryInput { get; }
```

- *Type:* object

---

##### `RowInput`<sup>Optional</sup> <a name="RowInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.rowInput"></a>

```csharp
public double RowInput { get; }
```

- *Type:* double

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `WidthInput`<sup>Optional</sup> <a name="WidthInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.widthInput"></a>

```csharp
public double WidthInput { get; }
```

- *Type:* double

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.column"></a>

```csharp
public double Column { get; }
```

- *Type:* double

---

##### `Height`<sup>Required</sup> <a name="Height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.height"></a>

```csharp
public double Height { get; }
```

- *Type:* double

---

##### `IgnoreTimeRange`<sup>Required</sup> <a name="IgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.ignoreTimeRange"></a>

```csharp
public object IgnoreTimeRange { get; }
```

- *Type:* object

---

##### `Row`<sup>Required</sup> <a name="Row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.row"></a>

```csharp
public double Row { get; }
```

- *Type:* double

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `Width`<sup>Required</sup> <a name="Width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.width"></a>

```csharp
public double Width { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OneDashboardPageWidgetJsonList <a name="OneDashboardPageWidgetJsonList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetJsonList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList.get"></a>

```csharp
private OneDashboardPageWidgetJsonOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OneDashboardPageWidgetJsonNrqlQueryList <a name="OneDashboardPageWidgetJsonNrqlQueryList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetJsonNrqlQueryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList.get"></a>

```csharp
private OneDashboardPageWidgetJsonNrqlQueryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OneDashboardPageWidgetJsonNrqlQueryOutputReference <a name="OneDashboardPageWidgetJsonNrqlQueryOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetJsonNrqlQueryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.resetAccountId">ResetAccountId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.resetAccountId"></a>

```csharp
private void ResetAccountId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.property.queryInput">QueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.property.accountId">AccountId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.property.accountIdInput"></a>

```csharp
public double AccountIdInput { get; }
```

- *Type:* double

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.property.queryInput"></a>

```csharp
public string QueryInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.property.accountId"></a>

```csharp
public double AccountId { get; }
```

- *Type:* double

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OneDashboardPageWidgetJsonOutputReference <a name="OneDashboardPageWidgetJsonOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetJsonOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.putNrqlQuery">PutNrqlQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.resetHeight">ResetHeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.resetIgnoreTimeRange">ResetIgnoreTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.resetWidth">ResetWidth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNrqlQuery` <a name="PutNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.putNrqlQuery"></a>

```csharp
private void PutNrqlQuery(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.putNrqlQuery.parameter.value"></a>

- *Type:* object

---

##### `ResetHeight` <a name="ResetHeight" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.resetHeight"></a>

```csharp
private void ResetHeight()
```

##### `ResetIgnoreTimeRange` <a name="ResetIgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.resetIgnoreTimeRange"></a>

```csharp
private void ResetIgnoreTimeRange()
```

##### `ResetWidth` <a name="ResetWidth" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.resetWidth"></a>

```csharp
private void ResetWidth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.nrqlQuery">NrqlQuery</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList">OneDashboardPageWidgetJsonNrqlQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.columnInput">ColumnInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.heightInput">HeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.ignoreTimeRangeInput">IgnoreTimeRangeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.nrqlQueryInput">NrqlQueryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.rowInput">RowInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.widthInput">WidthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.column">Column</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.height">Height</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.ignoreTimeRange">IgnoreTimeRange</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.row">Row</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.width">Width</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NrqlQuery`<sup>Required</sup> <a name="NrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.nrqlQuery"></a>

```csharp
public OneDashboardPageWidgetJsonNrqlQueryList NrqlQuery { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList">OneDashboardPageWidgetJsonNrqlQueryList</a>

---

##### `ColumnInput`<sup>Optional</sup> <a name="ColumnInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.columnInput"></a>

```csharp
public double ColumnInput { get; }
```

- *Type:* double

---

##### `HeightInput`<sup>Optional</sup> <a name="HeightInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.heightInput"></a>

```csharp
public double HeightInput { get; }
```

- *Type:* double

---

##### `IgnoreTimeRangeInput`<sup>Optional</sup> <a name="IgnoreTimeRangeInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.ignoreTimeRangeInput"></a>

```csharp
public object IgnoreTimeRangeInput { get; }
```

- *Type:* object

---

##### `NrqlQueryInput`<sup>Optional</sup> <a name="NrqlQueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.nrqlQueryInput"></a>

```csharp
public object NrqlQueryInput { get; }
```

- *Type:* object

---

##### `RowInput`<sup>Optional</sup> <a name="RowInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.rowInput"></a>

```csharp
public double RowInput { get; }
```

- *Type:* double

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `WidthInput`<sup>Optional</sup> <a name="WidthInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.widthInput"></a>

```csharp
public double WidthInput { get; }
```

- *Type:* double

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.column"></a>

```csharp
public double Column { get; }
```

- *Type:* double

---

##### `Height`<sup>Required</sup> <a name="Height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.height"></a>

```csharp
public double Height { get; }
```

- *Type:* double

---

##### `IgnoreTimeRange`<sup>Required</sup> <a name="IgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.ignoreTimeRange"></a>

```csharp
public object IgnoreTimeRange { get; }
```

- *Type:* object

---

##### `Row`<sup>Required</sup> <a name="Row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.row"></a>

```csharp
public double Row { get; }
```

- *Type:* double

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `Width`<sup>Required</sup> <a name="Width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.width"></a>

```csharp
public double Width { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OneDashboardPageWidgetLineList <a name="OneDashboardPageWidgetLineList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetLineList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList.get"></a>

```csharp
private OneDashboardPageWidgetLineOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OneDashboardPageWidgetLineNrqlQueryList <a name="OneDashboardPageWidgetLineNrqlQueryList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetLineNrqlQueryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList.get"></a>

```csharp
private OneDashboardPageWidgetLineNrqlQueryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OneDashboardPageWidgetLineNrqlQueryOutputReference <a name="OneDashboardPageWidgetLineNrqlQueryOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetLineNrqlQueryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.resetAccountId">ResetAccountId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.resetAccountId"></a>

```csharp
private void ResetAccountId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.property.queryInput">QueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.property.accountId">AccountId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.property.accountIdInput"></a>

```csharp
public double AccountIdInput { get; }
```

- *Type:* double

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.property.queryInput"></a>

```csharp
public string QueryInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.property.accountId"></a>

```csharp
public double AccountId { get; }
```

- *Type:* double

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OneDashboardPageWidgetLineOutputReference <a name="OneDashboardPageWidgetLineOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetLineOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.putNrqlQuery">PutNrqlQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.resetHeight">ResetHeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.resetIgnoreTimeRange">ResetIgnoreTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.resetWidth">ResetWidth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNrqlQuery` <a name="PutNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.putNrqlQuery"></a>

```csharp
private void PutNrqlQuery(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.putNrqlQuery.parameter.value"></a>

- *Type:* object

---

##### `ResetHeight` <a name="ResetHeight" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.resetHeight"></a>

```csharp
private void ResetHeight()
```

##### `ResetIgnoreTimeRange` <a name="ResetIgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.resetIgnoreTimeRange"></a>

```csharp
private void ResetIgnoreTimeRange()
```

##### `ResetWidth` <a name="ResetWidth" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.resetWidth"></a>

```csharp
private void ResetWidth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.nrqlQuery">NrqlQuery</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList">OneDashboardPageWidgetLineNrqlQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.columnInput">ColumnInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.heightInput">HeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.ignoreTimeRangeInput">IgnoreTimeRangeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.nrqlQueryInput">NrqlQueryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.rowInput">RowInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.widthInput">WidthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.column">Column</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.height">Height</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.ignoreTimeRange">IgnoreTimeRange</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.row">Row</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.width">Width</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NrqlQuery`<sup>Required</sup> <a name="NrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.nrqlQuery"></a>

```csharp
public OneDashboardPageWidgetLineNrqlQueryList NrqlQuery { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList">OneDashboardPageWidgetLineNrqlQueryList</a>

---

##### `ColumnInput`<sup>Optional</sup> <a name="ColumnInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.columnInput"></a>

```csharp
public double ColumnInput { get; }
```

- *Type:* double

---

##### `HeightInput`<sup>Optional</sup> <a name="HeightInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.heightInput"></a>

```csharp
public double HeightInput { get; }
```

- *Type:* double

---

##### `IgnoreTimeRangeInput`<sup>Optional</sup> <a name="IgnoreTimeRangeInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.ignoreTimeRangeInput"></a>

```csharp
public object IgnoreTimeRangeInput { get; }
```

- *Type:* object

---

##### `NrqlQueryInput`<sup>Optional</sup> <a name="NrqlQueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.nrqlQueryInput"></a>

```csharp
public object NrqlQueryInput { get; }
```

- *Type:* object

---

##### `RowInput`<sup>Optional</sup> <a name="RowInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.rowInput"></a>

```csharp
public double RowInput { get; }
```

- *Type:* double

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `WidthInput`<sup>Optional</sup> <a name="WidthInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.widthInput"></a>

```csharp
public double WidthInput { get; }
```

- *Type:* double

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.column"></a>

```csharp
public double Column { get; }
```

- *Type:* double

---

##### `Height`<sup>Required</sup> <a name="Height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.height"></a>

```csharp
public double Height { get; }
```

- *Type:* double

---

##### `IgnoreTimeRange`<sup>Required</sup> <a name="IgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.ignoreTimeRange"></a>

```csharp
public object IgnoreTimeRange { get; }
```

- *Type:* object

---

##### `Row`<sup>Required</sup> <a name="Row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.row"></a>

```csharp
public double Row { get; }
```

- *Type:* double

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `Width`<sup>Required</sup> <a name="Width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.width"></a>

```csharp
public double Width { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OneDashboardPageWidgetLogTableList <a name="OneDashboardPageWidgetLogTableList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetLogTableList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList.get"></a>

```csharp
private OneDashboardPageWidgetLogTableOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OneDashboardPageWidgetLogTableNrqlQueryList <a name="OneDashboardPageWidgetLogTableNrqlQueryList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetLogTableNrqlQueryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList.get"></a>

```csharp
private OneDashboardPageWidgetLogTableNrqlQueryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OneDashboardPageWidgetLogTableNrqlQueryOutputReference <a name="OneDashboardPageWidgetLogTableNrqlQueryOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetLogTableNrqlQueryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.resetAccountId">ResetAccountId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.resetAccountId"></a>

```csharp
private void ResetAccountId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.property.queryInput">QueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.property.accountId">AccountId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.property.accountIdInput"></a>

```csharp
public double AccountIdInput { get; }
```

- *Type:* double

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.property.queryInput"></a>

```csharp
public string QueryInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.property.accountId"></a>

```csharp
public double AccountId { get; }
```

- *Type:* double

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OneDashboardPageWidgetLogTableOutputReference <a name="OneDashboardPageWidgetLogTableOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetLogTableOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.putNrqlQuery">PutNrqlQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.resetHeight">ResetHeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.resetIgnoreTimeRange">ResetIgnoreTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.resetWidth">ResetWidth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNrqlQuery` <a name="PutNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.putNrqlQuery"></a>

```csharp
private void PutNrqlQuery(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.putNrqlQuery.parameter.value"></a>

- *Type:* object

---

##### `ResetHeight` <a name="ResetHeight" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.resetHeight"></a>

```csharp
private void ResetHeight()
```

##### `ResetIgnoreTimeRange` <a name="ResetIgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.resetIgnoreTimeRange"></a>

```csharp
private void ResetIgnoreTimeRange()
```

##### `ResetWidth` <a name="ResetWidth" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.resetWidth"></a>

```csharp
private void ResetWidth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.nrqlQuery">NrqlQuery</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList">OneDashboardPageWidgetLogTableNrqlQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.columnInput">ColumnInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.heightInput">HeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.ignoreTimeRangeInput">IgnoreTimeRangeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.nrqlQueryInput">NrqlQueryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.rowInput">RowInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.widthInput">WidthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.column">Column</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.height">Height</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.ignoreTimeRange">IgnoreTimeRange</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.row">Row</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.width">Width</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NrqlQuery`<sup>Required</sup> <a name="NrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.nrqlQuery"></a>

```csharp
public OneDashboardPageWidgetLogTableNrqlQueryList NrqlQuery { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList">OneDashboardPageWidgetLogTableNrqlQueryList</a>

---

##### `ColumnInput`<sup>Optional</sup> <a name="ColumnInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.columnInput"></a>

```csharp
public double ColumnInput { get; }
```

- *Type:* double

---

##### `HeightInput`<sup>Optional</sup> <a name="HeightInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.heightInput"></a>

```csharp
public double HeightInput { get; }
```

- *Type:* double

---

##### `IgnoreTimeRangeInput`<sup>Optional</sup> <a name="IgnoreTimeRangeInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.ignoreTimeRangeInput"></a>

```csharp
public object IgnoreTimeRangeInput { get; }
```

- *Type:* object

---

##### `NrqlQueryInput`<sup>Optional</sup> <a name="NrqlQueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.nrqlQueryInput"></a>

```csharp
public object NrqlQueryInput { get; }
```

- *Type:* object

---

##### `RowInput`<sup>Optional</sup> <a name="RowInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.rowInput"></a>

```csharp
public double RowInput { get; }
```

- *Type:* double

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `WidthInput`<sup>Optional</sup> <a name="WidthInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.widthInput"></a>

```csharp
public double WidthInput { get; }
```

- *Type:* double

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.column"></a>

```csharp
public double Column { get; }
```

- *Type:* double

---

##### `Height`<sup>Required</sup> <a name="Height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.height"></a>

```csharp
public double Height { get; }
```

- *Type:* double

---

##### `IgnoreTimeRange`<sup>Required</sup> <a name="IgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.ignoreTimeRange"></a>

```csharp
public object IgnoreTimeRange { get; }
```

- *Type:* object

---

##### `Row`<sup>Required</sup> <a name="Row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.row"></a>

```csharp
public double Row { get; }
```

- *Type:* double

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `Width`<sup>Required</sup> <a name="Width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.width"></a>

```csharp
public double Width { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OneDashboardPageWidgetMarkdownList <a name="OneDashboardPageWidgetMarkdownList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetMarkdownList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList.get"></a>

```csharp
private OneDashboardPageWidgetMarkdownOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OneDashboardPageWidgetMarkdownOutputReference <a name="OneDashboardPageWidgetMarkdownOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetMarkdownOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.resetHeight">ResetHeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.resetIgnoreTimeRange">ResetIgnoreTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.resetText">ResetText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.resetWidth">ResetWidth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHeight` <a name="ResetHeight" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.resetHeight"></a>

```csharp
private void ResetHeight()
```

##### `ResetIgnoreTimeRange` <a name="ResetIgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.resetIgnoreTimeRange"></a>

```csharp
private void ResetIgnoreTimeRange()
```

##### `ResetText` <a name="ResetText" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.resetText"></a>

```csharp
private void ResetText()
```

##### `ResetWidth` <a name="ResetWidth" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.resetWidth"></a>

```csharp
private void ResetWidth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.columnInput">ColumnInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.heightInput">HeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.ignoreTimeRangeInput">IgnoreTimeRangeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.rowInput">RowInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.textInput">TextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.widthInput">WidthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.column">Column</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.height">Height</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.ignoreTimeRange">IgnoreTimeRange</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.row">Row</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.text">Text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.width">Width</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ColumnInput`<sup>Optional</sup> <a name="ColumnInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.columnInput"></a>

```csharp
public double ColumnInput { get; }
```

- *Type:* double

---

##### `HeightInput`<sup>Optional</sup> <a name="HeightInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.heightInput"></a>

```csharp
public double HeightInput { get; }
```

- *Type:* double

---

##### `IgnoreTimeRangeInput`<sup>Optional</sup> <a name="IgnoreTimeRangeInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.ignoreTimeRangeInput"></a>

```csharp
public object IgnoreTimeRangeInput { get; }
```

- *Type:* object

---

##### `RowInput`<sup>Optional</sup> <a name="RowInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.rowInput"></a>

```csharp
public double RowInput { get; }
```

- *Type:* double

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.textInput"></a>

```csharp
public string TextInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `WidthInput`<sup>Optional</sup> <a name="WidthInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.widthInput"></a>

```csharp
public double WidthInput { get; }
```

- *Type:* double

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.column"></a>

```csharp
public double Column { get; }
```

- *Type:* double

---

##### `Height`<sup>Required</sup> <a name="Height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.height"></a>

```csharp
public double Height { get; }
```

- *Type:* double

---

##### `IgnoreTimeRange`<sup>Required</sup> <a name="IgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.ignoreTimeRange"></a>

```csharp
public object IgnoreTimeRange { get; }
```

- *Type:* object

---

##### `Row`<sup>Required</sup> <a name="Row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.row"></a>

```csharp
public double Row { get; }
```

- *Type:* double

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.text"></a>

```csharp
public string Text { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `Width`<sup>Required</sup> <a name="Width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.width"></a>

```csharp
public double Width { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OneDashboardPageWidgetPieList <a name="OneDashboardPageWidgetPieList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetPieList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList.get"></a>

```csharp
private OneDashboardPageWidgetPieOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OneDashboardPageWidgetPieNrqlQueryList <a name="OneDashboardPageWidgetPieNrqlQueryList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetPieNrqlQueryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList.get"></a>

```csharp
private OneDashboardPageWidgetPieNrqlQueryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OneDashboardPageWidgetPieNrqlQueryOutputReference <a name="OneDashboardPageWidgetPieNrqlQueryOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetPieNrqlQueryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.resetAccountId">ResetAccountId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.resetAccountId"></a>

```csharp
private void ResetAccountId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.property.queryInput">QueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.property.accountId">AccountId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.property.accountIdInput"></a>

```csharp
public double AccountIdInput { get; }
```

- *Type:* double

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.property.queryInput"></a>

```csharp
public string QueryInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.property.accountId"></a>

```csharp
public double AccountId { get; }
```

- *Type:* double

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OneDashboardPageWidgetPieOutputReference <a name="OneDashboardPageWidgetPieOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetPieOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.putNrqlQuery">PutNrqlQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.resetFilterCurrentDashboard">ResetFilterCurrentDashboard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.resetHeight">ResetHeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.resetIgnoreTimeRange">ResetIgnoreTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.resetLinkedEntityGuids">ResetLinkedEntityGuids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.resetWidth">ResetWidth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNrqlQuery` <a name="PutNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.putNrqlQuery"></a>

```csharp
private void PutNrqlQuery(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.putNrqlQuery.parameter.value"></a>

- *Type:* object

---

##### `ResetFilterCurrentDashboard` <a name="ResetFilterCurrentDashboard" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.resetFilterCurrentDashboard"></a>

```csharp
private void ResetFilterCurrentDashboard()
```

##### `ResetHeight` <a name="ResetHeight" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.resetHeight"></a>

```csharp
private void ResetHeight()
```

##### `ResetIgnoreTimeRange` <a name="ResetIgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.resetIgnoreTimeRange"></a>

```csharp
private void ResetIgnoreTimeRange()
```

##### `ResetLinkedEntityGuids` <a name="ResetLinkedEntityGuids" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.resetLinkedEntityGuids"></a>

```csharp
private void ResetLinkedEntityGuids()
```

##### `ResetWidth` <a name="ResetWidth" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.resetWidth"></a>

```csharp
private void ResetWidth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.nrqlQuery">NrqlQuery</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList">OneDashboardPageWidgetPieNrqlQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.columnInput">ColumnInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.filterCurrentDashboardInput">FilterCurrentDashboardInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.heightInput">HeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.ignoreTimeRangeInput">IgnoreTimeRangeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.linkedEntityGuidsInput">LinkedEntityGuidsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.nrqlQueryInput">NrqlQueryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.rowInput">RowInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.widthInput">WidthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.column">Column</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.filterCurrentDashboard">FilterCurrentDashboard</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.height">Height</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.ignoreTimeRange">IgnoreTimeRange</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.linkedEntityGuids">LinkedEntityGuids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.row">Row</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.width">Width</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NrqlQuery`<sup>Required</sup> <a name="NrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.nrqlQuery"></a>

```csharp
public OneDashboardPageWidgetPieNrqlQueryList NrqlQuery { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList">OneDashboardPageWidgetPieNrqlQueryList</a>

---

##### `ColumnInput`<sup>Optional</sup> <a name="ColumnInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.columnInput"></a>

```csharp
public double ColumnInput { get; }
```

- *Type:* double

---

##### `FilterCurrentDashboardInput`<sup>Optional</sup> <a name="FilterCurrentDashboardInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.filterCurrentDashboardInput"></a>

```csharp
public object FilterCurrentDashboardInput { get; }
```

- *Type:* object

---

##### `HeightInput`<sup>Optional</sup> <a name="HeightInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.heightInput"></a>

```csharp
public double HeightInput { get; }
```

- *Type:* double

---

##### `IgnoreTimeRangeInput`<sup>Optional</sup> <a name="IgnoreTimeRangeInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.ignoreTimeRangeInput"></a>

```csharp
public object IgnoreTimeRangeInput { get; }
```

- *Type:* object

---

##### `LinkedEntityGuidsInput`<sup>Optional</sup> <a name="LinkedEntityGuidsInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.linkedEntityGuidsInput"></a>

```csharp
public string[] LinkedEntityGuidsInput { get; }
```

- *Type:* string[]

---

##### `NrqlQueryInput`<sup>Optional</sup> <a name="NrqlQueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.nrqlQueryInput"></a>

```csharp
public object NrqlQueryInput { get; }
```

- *Type:* object

---

##### `RowInput`<sup>Optional</sup> <a name="RowInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.rowInput"></a>

```csharp
public double RowInput { get; }
```

- *Type:* double

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `WidthInput`<sup>Optional</sup> <a name="WidthInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.widthInput"></a>

```csharp
public double WidthInput { get; }
```

- *Type:* double

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.column"></a>

```csharp
public double Column { get; }
```

- *Type:* double

---

##### `FilterCurrentDashboard`<sup>Required</sup> <a name="FilterCurrentDashboard" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.filterCurrentDashboard"></a>

```csharp
public object FilterCurrentDashboard { get; }
```

- *Type:* object

---

##### `Height`<sup>Required</sup> <a name="Height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.height"></a>

```csharp
public double Height { get; }
```

- *Type:* double

---

##### `IgnoreTimeRange`<sup>Required</sup> <a name="IgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.ignoreTimeRange"></a>

```csharp
public object IgnoreTimeRange { get; }
```

- *Type:* object

---

##### `LinkedEntityGuids`<sup>Required</sup> <a name="LinkedEntityGuids" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.linkedEntityGuids"></a>

```csharp
public string[] LinkedEntityGuids { get; }
```

- *Type:* string[]

---

##### `Row`<sup>Required</sup> <a name="Row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.row"></a>

```csharp
public double Row { get; }
```

- *Type:* double

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `Width`<sup>Required</sup> <a name="Width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.width"></a>

```csharp
public double Width { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OneDashboardPageWidgetStackedBarList <a name="OneDashboardPageWidgetStackedBarList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetStackedBarList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList.get"></a>

```csharp
private OneDashboardPageWidgetStackedBarOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OneDashboardPageWidgetStackedBarNrqlQueryList <a name="OneDashboardPageWidgetStackedBarNrqlQueryList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetStackedBarNrqlQueryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList.get"></a>

```csharp
private OneDashboardPageWidgetStackedBarNrqlQueryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OneDashboardPageWidgetStackedBarNrqlQueryOutputReference <a name="OneDashboardPageWidgetStackedBarNrqlQueryOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetStackedBarNrqlQueryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.resetAccountId">ResetAccountId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.resetAccountId"></a>

```csharp
private void ResetAccountId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.property.queryInput">QueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.property.accountId">AccountId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.property.accountIdInput"></a>

```csharp
public double AccountIdInput { get; }
```

- *Type:* double

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.property.queryInput"></a>

```csharp
public string QueryInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.property.accountId"></a>

```csharp
public double AccountId { get; }
```

- *Type:* double

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OneDashboardPageWidgetStackedBarOutputReference <a name="OneDashboardPageWidgetStackedBarOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetStackedBarOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.putNrqlQuery">PutNrqlQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.resetHeight">ResetHeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.resetIgnoreTimeRange">ResetIgnoreTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.resetWidth">ResetWidth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNrqlQuery` <a name="PutNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.putNrqlQuery"></a>

```csharp
private void PutNrqlQuery(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.putNrqlQuery.parameter.value"></a>

- *Type:* object

---

##### `ResetHeight` <a name="ResetHeight" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.resetHeight"></a>

```csharp
private void ResetHeight()
```

##### `ResetIgnoreTimeRange` <a name="ResetIgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.resetIgnoreTimeRange"></a>

```csharp
private void ResetIgnoreTimeRange()
```

##### `ResetWidth` <a name="ResetWidth" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.resetWidth"></a>

```csharp
private void ResetWidth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.nrqlQuery">NrqlQuery</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList">OneDashboardPageWidgetStackedBarNrqlQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.columnInput">ColumnInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.heightInput">HeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.ignoreTimeRangeInput">IgnoreTimeRangeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.nrqlQueryInput">NrqlQueryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.rowInput">RowInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.widthInput">WidthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.column">Column</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.height">Height</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.ignoreTimeRange">IgnoreTimeRange</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.row">Row</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.width">Width</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NrqlQuery`<sup>Required</sup> <a name="NrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.nrqlQuery"></a>

```csharp
public OneDashboardPageWidgetStackedBarNrqlQueryList NrqlQuery { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList">OneDashboardPageWidgetStackedBarNrqlQueryList</a>

---

##### `ColumnInput`<sup>Optional</sup> <a name="ColumnInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.columnInput"></a>

```csharp
public double ColumnInput { get; }
```

- *Type:* double

---

##### `HeightInput`<sup>Optional</sup> <a name="HeightInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.heightInput"></a>

```csharp
public double HeightInput { get; }
```

- *Type:* double

---

##### `IgnoreTimeRangeInput`<sup>Optional</sup> <a name="IgnoreTimeRangeInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.ignoreTimeRangeInput"></a>

```csharp
public object IgnoreTimeRangeInput { get; }
```

- *Type:* object

---

##### `NrqlQueryInput`<sup>Optional</sup> <a name="NrqlQueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.nrqlQueryInput"></a>

```csharp
public object NrqlQueryInput { get; }
```

- *Type:* object

---

##### `RowInput`<sup>Optional</sup> <a name="RowInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.rowInput"></a>

```csharp
public double RowInput { get; }
```

- *Type:* double

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `WidthInput`<sup>Optional</sup> <a name="WidthInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.widthInput"></a>

```csharp
public double WidthInput { get; }
```

- *Type:* double

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.column"></a>

```csharp
public double Column { get; }
```

- *Type:* double

---

##### `Height`<sup>Required</sup> <a name="Height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.height"></a>

```csharp
public double Height { get; }
```

- *Type:* double

---

##### `IgnoreTimeRange`<sup>Required</sup> <a name="IgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.ignoreTimeRange"></a>

```csharp
public object IgnoreTimeRange { get; }
```

- *Type:* object

---

##### `Row`<sup>Required</sup> <a name="Row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.row"></a>

```csharp
public double Row { get; }
```

- *Type:* double

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `Width`<sup>Required</sup> <a name="Width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.width"></a>

```csharp
public double Width { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OneDashboardPageWidgetTableList <a name="OneDashboardPageWidgetTableList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetTableList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList.get"></a>

```csharp
private OneDashboardPageWidgetTableOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OneDashboardPageWidgetTableNrqlQueryList <a name="OneDashboardPageWidgetTableNrqlQueryList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetTableNrqlQueryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList.get"></a>

```csharp
private OneDashboardPageWidgetTableNrqlQueryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OneDashboardPageWidgetTableNrqlQueryOutputReference <a name="OneDashboardPageWidgetTableNrqlQueryOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetTableNrqlQueryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.resetAccountId">ResetAccountId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.resetAccountId"></a>

```csharp
private void ResetAccountId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.property.queryInput">QueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.property.accountId">AccountId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.property.accountIdInput"></a>

```csharp
public double AccountIdInput { get; }
```

- *Type:* double

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.property.queryInput"></a>

```csharp
public string QueryInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.property.accountId"></a>

```csharp
public double AccountId { get; }
```

- *Type:* double

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OneDashboardPageWidgetTableOutputReference <a name="OneDashboardPageWidgetTableOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardPageWidgetTableOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.putNrqlQuery">PutNrqlQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.resetFilterCurrentDashboard">ResetFilterCurrentDashboard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.resetHeight">ResetHeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.resetIgnoreTimeRange">ResetIgnoreTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.resetLinkedEntityGuids">ResetLinkedEntityGuids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.resetWidth">ResetWidth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNrqlQuery` <a name="PutNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.putNrqlQuery"></a>

```csharp
private void PutNrqlQuery(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.putNrqlQuery.parameter.value"></a>

- *Type:* object

---

##### `ResetFilterCurrentDashboard` <a name="ResetFilterCurrentDashboard" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.resetFilterCurrentDashboard"></a>

```csharp
private void ResetFilterCurrentDashboard()
```

##### `ResetHeight` <a name="ResetHeight" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.resetHeight"></a>

```csharp
private void ResetHeight()
```

##### `ResetIgnoreTimeRange` <a name="ResetIgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.resetIgnoreTimeRange"></a>

```csharp
private void ResetIgnoreTimeRange()
```

##### `ResetLinkedEntityGuids` <a name="ResetLinkedEntityGuids" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.resetLinkedEntityGuids"></a>

```csharp
private void ResetLinkedEntityGuids()
```

##### `ResetWidth` <a name="ResetWidth" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.resetWidth"></a>

```csharp
private void ResetWidth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.nrqlQuery">NrqlQuery</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList">OneDashboardPageWidgetTableNrqlQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.columnInput">ColumnInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.filterCurrentDashboardInput">FilterCurrentDashboardInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.heightInput">HeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.ignoreTimeRangeInput">IgnoreTimeRangeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.linkedEntityGuidsInput">LinkedEntityGuidsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.nrqlQueryInput">NrqlQueryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.rowInput">RowInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.widthInput">WidthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.column">Column</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.filterCurrentDashboard">FilterCurrentDashboard</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.height">Height</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.ignoreTimeRange">IgnoreTimeRange</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.linkedEntityGuids">LinkedEntityGuids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.row">Row</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.width">Width</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NrqlQuery`<sup>Required</sup> <a name="NrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.nrqlQuery"></a>

```csharp
public OneDashboardPageWidgetTableNrqlQueryList NrqlQuery { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList">OneDashboardPageWidgetTableNrqlQueryList</a>

---

##### `ColumnInput`<sup>Optional</sup> <a name="ColumnInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.columnInput"></a>

```csharp
public double ColumnInput { get; }
```

- *Type:* double

---

##### `FilterCurrentDashboardInput`<sup>Optional</sup> <a name="FilterCurrentDashboardInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.filterCurrentDashboardInput"></a>

```csharp
public object FilterCurrentDashboardInput { get; }
```

- *Type:* object

---

##### `HeightInput`<sup>Optional</sup> <a name="HeightInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.heightInput"></a>

```csharp
public double HeightInput { get; }
```

- *Type:* double

---

##### `IgnoreTimeRangeInput`<sup>Optional</sup> <a name="IgnoreTimeRangeInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.ignoreTimeRangeInput"></a>

```csharp
public object IgnoreTimeRangeInput { get; }
```

- *Type:* object

---

##### `LinkedEntityGuidsInput`<sup>Optional</sup> <a name="LinkedEntityGuidsInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.linkedEntityGuidsInput"></a>

```csharp
public string[] LinkedEntityGuidsInput { get; }
```

- *Type:* string[]

---

##### `NrqlQueryInput`<sup>Optional</sup> <a name="NrqlQueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.nrqlQueryInput"></a>

```csharp
public object NrqlQueryInput { get; }
```

- *Type:* object

---

##### `RowInput`<sup>Optional</sup> <a name="RowInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.rowInput"></a>

```csharp
public double RowInput { get; }
```

- *Type:* double

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `WidthInput`<sup>Optional</sup> <a name="WidthInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.widthInput"></a>

```csharp
public double WidthInput { get; }
```

- *Type:* double

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.column"></a>

```csharp
public double Column { get; }
```

- *Type:* double

---

##### `FilterCurrentDashboard`<sup>Required</sup> <a name="FilterCurrentDashboard" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.filterCurrentDashboard"></a>

```csharp
public object FilterCurrentDashboard { get; }
```

- *Type:* object

---

##### `Height`<sup>Required</sup> <a name="Height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.height"></a>

```csharp
public double Height { get; }
```

- *Type:* double

---

##### `IgnoreTimeRange`<sup>Required</sup> <a name="IgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.ignoreTimeRange"></a>

```csharp
public object IgnoreTimeRange { get; }
```

- *Type:* object

---

##### `LinkedEntityGuids`<sup>Required</sup> <a name="LinkedEntityGuids" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.linkedEntityGuids"></a>

```csharp
public string[] LinkedEntityGuids { get; }
```

- *Type:* string[]

---

##### `Row`<sup>Required</sup> <a name="Row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.row"></a>

```csharp
public double Row { get; }
```

- *Type:* double

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `Width`<sup>Required</sup> <a name="Width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.width"></a>

```csharp
public double Width { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OneDashboardVariableItemList <a name="OneDashboardVariableItemList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardVariableItemList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList.get"></a>

```csharp
private OneDashboardVariableItemOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OneDashboardVariableItemOutputReference <a name="OneDashboardVariableItemOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardVariableItemOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.resetTitle"></a>

```csharp
private void ResetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OneDashboardVariableList <a name="OneDashboardVariableList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardVariableList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList.get"></a>

```csharp
private OneDashboardVariableOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OneDashboardVariableNrqlQueryOutputReference <a name="OneDashboardVariableNrqlQueryOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardVariableNrqlQueryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.resetAccountIds">ResetAccountIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccountIds` <a name="ResetAccountIds" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.resetAccountIds"></a>

```csharp
private void ResetAccountIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.property.accountIdsInput">AccountIdsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.property.queryInput">QueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.property.accountIds">AccountIds</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQuery">OneDashboardVariableNrqlQuery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountIdsInput`<sup>Optional</sup> <a name="AccountIdsInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.property.accountIdsInput"></a>

```csharp
public double[] AccountIdsInput { get; }
```

- *Type:* double[]

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.property.queryInput"></a>

```csharp
public string QueryInput { get; }
```

- *Type:* string

---

##### `AccountIds`<sup>Required</sup> <a name="AccountIds" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.property.accountIds"></a>

```csharp
public double[] AccountIds { get; }
```

- *Type:* double[]

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.property.internalValue"></a>

```csharp
public OneDashboardVariableNrqlQuery InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQuery">OneDashboardVariableNrqlQuery</a>

---


### OneDashboardVariableOutputReference <a name="OneDashboardVariableOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Newrelic;

new OneDashboardVariableOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.putItem">PutItem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.putNrqlQuery">PutNrqlQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.resetDefaultValues">ResetDefaultValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.resetIsMultiSelection">ResetIsMultiSelection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.resetItem">ResetItem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.resetNrqlQuery">ResetNrqlQuery</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutItem` <a name="PutItem" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.putItem"></a>

```csharp
private void PutItem(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.putItem.parameter.value"></a>

- *Type:* object

---

##### `PutNrqlQuery` <a name="PutNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.putNrqlQuery"></a>

```csharp
private void PutNrqlQuery(OneDashboardVariableNrqlQuery Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.putNrqlQuery.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQuery">OneDashboardVariableNrqlQuery</a>

---

##### `ResetDefaultValues` <a name="ResetDefaultValues" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.resetDefaultValues"></a>

```csharp
private void ResetDefaultValues()
```

##### `ResetIsMultiSelection` <a name="ResetIsMultiSelection" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.resetIsMultiSelection"></a>

```csharp
private void ResetIsMultiSelection()
```

##### `ResetItem` <a name="ResetItem" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.resetItem"></a>

```csharp
private void ResetItem()
```

##### `ResetNrqlQuery` <a name="ResetNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.resetNrqlQuery"></a>

```csharp
private void ResetNrqlQuery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.item">Item</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList">OneDashboardVariableItemList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.nrqlQuery">NrqlQuery</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference">OneDashboardVariableNrqlQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.defaultValuesInput">DefaultValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.isMultiSelectionInput">IsMultiSelectionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.itemInput">ItemInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.nrqlQueryInput">NrqlQueryInput</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQuery">OneDashboardVariableNrqlQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.replacementStrategyInput">ReplacementStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.defaultValues">DefaultValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.isMultiSelection">IsMultiSelection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.replacementStrategy">ReplacementStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Item`<sup>Required</sup> <a name="Item" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.item"></a>

```csharp
public OneDashboardVariableItemList Item { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList">OneDashboardVariableItemList</a>

---

##### `NrqlQuery`<sup>Required</sup> <a name="NrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.nrqlQuery"></a>

```csharp
public OneDashboardVariableNrqlQueryOutputReference NrqlQuery { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference">OneDashboardVariableNrqlQueryOutputReference</a>

---

##### `DefaultValuesInput`<sup>Optional</sup> <a name="DefaultValuesInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.defaultValuesInput"></a>

```csharp
public string[] DefaultValuesInput { get; }
```

- *Type:* string[]

---

##### `IsMultiSelectionInput`<sup>Optional</sup> <a name="IsMultiSelectionInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.isMultiSelectionInput"></a>

```csharp
public object IsMultiSelectionInput { get; }
```

- *Type:* object

---

##### `ItemInput`<sup>Optional</sup> <a name="ItemInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.itemInput"></a>

```csharp
public object ItemInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NrqlQueryInput`<sup>Optional</sup> <a name="NrqlQueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.nrqlQueryInput"></a>

```csharp
public OneDashboardVariableNrqlQuery NrqlQueryInput { get; }
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQuery">OneDashboardVariableNrqlQuery</a>

---

##### `ReplacementStrategyInput`<sup>Optional</sup> <a name="ReplacementStrategyInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.replacementStrategyInput"></a>

```csharp
public string ReplacementStrategyInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `DefaultValues`<sup>Required</sup> <a name="DefaultValues" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.defaultValues"></a>

```csharp
public string[] DefaultValues { get; }
```

- *Type:* string[]

---

##### `IsMultiSelection`<sup>Required</sup> <a name="IsMultiSelection" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.isMultiSelection"></a>

```csharp
public object IsMultiSelection { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ReplacementStrategy`<sup>Required</sup> <a name="ReplacementStrategy" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.replacementStrategy"></a>

```csharp
public string ReplacementStrategy { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



