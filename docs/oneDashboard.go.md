# `oneDashboard` Submodule <a name="`oneDashboard` Submodule" id="@cdktf/provider-newrelic.oneDashboard"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OneDashboard <a name="OneDashboard" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard newrelic_one_dashboard}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

onedashboard.NewOneDashboard(scope Construct, id *string, config OneDashboardConfig) OneDashboard
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig">OneDashboardConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.Initializer.parameter.config"></a>

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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutPage` <a name="PutPage" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.putPage"></a>

```go
func PutPage(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.putPage.parameter.value"></a>

- *Type:* interface{}

---

##### `PutVariable` <a name="PutVariable" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.putVariable"></a>

```go
func PutVariable(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.putVariable.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.resetId"></a>

```go
func ResetId()
```

##### `ResetPermissions` <a name="ResetPermissions" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.resetPermissions"></a>

```go
func ResetPermissions()
```

##### `ResetVariable` <a name="ResetVariable" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.resetVariable"></a>

```go
func ResetVariable()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

onedashboard.OneDashboard_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

onedashboard.OneDashboard_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

onedashboard.OneDashboard_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.guid">Guid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.page">Page</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList">OneDashboardPageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.permalink">Permalink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.variable">Variable</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList">OneDashboardVariableList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.accountIdInput">AccountIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.pageInput">PageInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.permissionsInput">PermissionsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.variableInput">VariableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.accountId">AccountId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.permissions">Permissions</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Guid`<sup>Required</sup> <a name="Guid" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.guid"></a>

```go
func Guid() *string
```

- *Type:* *string

---

##### `Page`<sup>Required</sup> <a name="Page" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.page"></a>

```go
func Page() OneDashboardPageList
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList">OneDashboardPageList</a>

---

##### `Permalink`<sup>Required</sup> <a name="Permalink" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.permalink"></a>

```go
func Permalink() *string
```

- *Type:* *string

---

##### `Variable`<sup>Required</sup> <a name="Variable" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.variable"></a>

```go
func Variable() OneDashboardVariableList
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList">OneDashboardVariableList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.accountIdInput"></a>

```go
func AccountIdInput() *f64
```

- *Type:* *f64

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PageInput`<sup>Optional</sup> <a name="PageInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.pageInput"></a>

```go
func PageInput() interface{}
```

- *Type:* interface{}

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.permissionsInput"></a>

```go
func PermissionsInput() *string
```

- *Type:* *string

---

##### `VariableInput`<sup>Optional</sup> <a name="VariableInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.variableInput"></a>

```go
func VariableInput() interface{}
```

- *Type:* interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.accountId"></a>

```go
func AccountId() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.permissions"></a>

```go
func Permissions() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-newrelic.oneDashboard.OneDashboard.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OneDashboardConfig <a name="OneDashboardConfig" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

&onedashboard.OneDashboardConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Page: interface{},
	AccountId: *f64,
	Description: *string,
	Id: *string,
	Permissions: *string,
	Variable: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.name">Name</a></code> | <code>*string</code> | The dashboard's name. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.page">Page</a></code> | <code>interface{}</code> | page block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.accountId">AccountId</a></code> | <code>*f64</code> | The New Relic account ID where you want to create the dashboard. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.description">Description</a></code> | <code>*string</code> | The dashboard's description. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#id OneDashboard#id}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.permissions">Permissions</a></code> | <code>*string</code> | Determines who can see or edit the dashboard. Valid values are private, public_read_only, public_read_write. Defaults to public_read_only. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.variable">Variable</a></code> | <code>interface{}</code> | variable block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The dashboard's name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#name OneDashboard#name}

---

##### `Page`<sup>Required</sup> <a name="Page" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.page"></a>

```go
Page interface{}
```

- *Type:* interface{}

page block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#page OneDashboard#page}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.accountId"></a>

```go
AccountId *f64
```

- *Type:* *f64

The New Relic account ID where you want to create the dashboard.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#account_id OneDashboard#account_id}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The dashboard's description.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#description OneDashboard#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#id OneDashboard#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Permissions`<sup>Optional</sup> <a name="Permissions" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.permissions"></a>

```go
Permissions *string
```

- *Type:* *string

Determines who can see or edit the dashboard. Valid values are private, public_read_only, public_read_write. Defaults to public_read_only.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#permissions OneDashboard#permissions}

---

##### `Variable`<sup>Optional</sup> <a name="Variable" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardConfig.property.variable"></a>

```go
Variable interface{}
```

- *Type:* interface{}

variable block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#variable OneDashboard#variable}

---

### OneDashboardPage <a name="OneDashboardPage" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

&onedashboard.OneDashboardPage {
	Name: *string,
	Description: *string,
	WidgetArea: interface{},
	WidgetBar: interface{},
	WidgetBillboard: interface{},
	WidgetBullet: interface{},
	WidgetFunnel: interface{},
	WidgetHeatmap: interface{},
	WidgetHistogram: interface{},
	WidgetJson: interface{},
	WidgetLine: interface{},
	WidgetLogTable: interface{},
	WidgetMarkdown: interface{},
	WidgetPie: interface{},
	WidgetStackedBar: interface{},
	WidgetTable: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.name">Name</a></code> | <code>*string</code> | The dashboard page's name. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.description">Description</a></code> | <code>*string</code> | The dashboard page's description. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetArea">WidgetArea</a></code> | <code>interface{}</code> | widget_area block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetBar">WidgetBar</a></code> | <code>interface{}</code> | widget_bar block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetBillboard">WidgetBillboard</a></code> | <code>interface{}</code> | widget_billboard block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetBullet">WidgetBullet</a></code> | <code>interface{}</code> | widget_bullet block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetFunnel">WidgetFunnel</a></code> | <code>interface{}</code> | widget_funnel block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetHeatmap">WidgetHeatmap</a></code> | <code>interface{}</code> | widget_heatmap block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetHistogram">WidgetHistogram</a></code> | <code>interface{}</code> | widget_histogram block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetJson">WidgetJson</a></code> | <code>interface{}</code> | widget_json block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetLine">WidgetLine</a></code> | <code>interface{}</code> | widget_line block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetLogTable">WidgetLogTable</a></code> | <code>interface{}</code> | widget_log_table block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetMarkdown">WidgetMarkdown</a></code> | <code>interface{}</code> | widget_markdown block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetPie">WidgetPie</a></code> | <code>interface{}</code> | widget_pie block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetStackedBar">WidgetStackedBar</a></code> | <code>interface{}</code> | widget_stacked_bar block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetTable">WidgetTable</a></code> | <code>interface{}</code> | widget_table block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.name"></a>

```go
Name *string
```

- *Type:* *string

The dashboard page's name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#name OneDashboard#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.description"></a>

```go
Description *string
```

- *Type:* *string

The dashboard page's description.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#description OneDashboard#description}

---

##### `WidgetArea`<sup>Optional</sup> <a name="WidgetArea" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetArea"></a>

```go
WidgetArea interface{}
```

- *Type:* interface{}

widget_area block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#widget_area OneDashboard#widget_area}

---

##### `WidgetBar`<sup>Optional</sup> <a name="WidgetBar" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetBar"></a>

```go
WidgetBar interface{}
```

- *Type:* interface{}

widget_bar block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#widget_bar OneDashboard#widget_bar}

---

##### `WidgetBillboard`<sup>Optional</sup> <a name="WidgetBillboard" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetBillboard"></a>

```go
WidgetBillboard interface{}
```

- *Type:* interface{}

widget_billboard block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#widget_billboard OneDashboard#widget_billboard}

---

##### `WidgetBullet`<sup>Optional</sup> <a name="WidgetBullet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetBullet"></a>

```go
WidgetBullet interface{}
```

- *Type:* interface{}

widget_bullet block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#widget_bullet OneDashboard#widget_bullet}

---

##### `WidgetFunnel`<sup>Optional</sup> <a name="WidgetFunnel" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetFunnel"></a>

```go
WidgetFunnel interface{}
```

- *Type:* interface{}

widget_funnel block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#widget_funnel OneDashboard#widget_funnel}

---

##### `WidgetHeatmap`<sup>Optional</sup> <a name="WidgetHeatmap" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetHeatmap"></a>

```go
WidgetHeatmap interface{}
```

- *Type:* interface{}

widget_heatmap block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#widget_heatmap OneDashboard#widget_heatmap}

---

##### `WidgetHistogram`<sup>Optional</sup> <a name="WidgetHistogram" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetHistogram"></a>

```go
WidgetHistogram interface{}
```

- *Type:* interface{}

widget_histogram block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#widget_histogram OneDashboard#widget_histogram}

---

##### `WidgetJson`<sup>Optional</sup> <a name="WidgetJson" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetJson"></a>

```go
WidgetJson interface{}
```

- *Type:* interface{}

widget_json block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#widget_json OneDashboard#widget_json}

---

##### `WidgetLine`<sup>Optional</sup> <a name="WidgetLine" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetLine"></a>

```go
WidgetLine interface{}
```

- *Type:* interface{}

widget_line block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#widget_line OneDashboard#widget_line}

---

##### `WidgetLogTable`<sup>Optional</sup> <a name="WidgetLogTable" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetLogTable"></a>

```go
WidgetLogTable interface{}
```

- *Type:* interface{}

widget_log_table block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#widget_log_table OneDashboard#widget_log_table}

---

##### `WidgetMarkdown`<sup>Optional</sup> <a name="WidgetMarkdown" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetMarkdown"></a>

```go
WidgetMarkdown interface{}
```

- *Type:* interface{}

widget_markdown block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#widget_markdown OneDashboard#widget_markdown}

---

##### `WidgetPie`<sup>Optional</sup> <a name="WidgetPie" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetPie"></a>

```go
WidgetPie interface{}
```

- *Type:* interface{}

widget_pie block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#widget_pie OneDashboard#widget_pie}

---

##### `WidgetStackedBar`<sup>Optional</sup> <a name="WidgetStackedBar" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetStackedBar"></a>

```go
WidgetStackedBar interface{}
```

- *Type:* interface{}

widget_stacked_bar block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#widget_stacked_bar OneDashboard#widget_stacked_bar}

---

##### `WidgetTable`<sup>Optional</sup> <a name="WidgetTable" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPage.property.widgetTable"></a>

```go
WidgetTable interface{}
```

- *Type:* interface{}

widget_table block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#widget_table OneDashboard#widget_table}

---

### OneDashboardPageWidgetArea <a name="OneDashboardPageWidgetArea" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetArea"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetArea.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

&onedashboard.OneDashboardPageWidgetArea {
	Column: *f64,
	NrqlQuery: interface{},
	Row: *f64,
	Title: *string,
	Height: *f64,
	IgnoreTimeRange: interface{},
	Width: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetArea.property.column">Column</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetArea.property.nrqlQuery">NrqlQuery</a></code> | <code>interface{}</code> | nrql_query block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetArea.property.row">Row</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetArea.property.title">Title</a></code> | <code>*string</code> | A title for the widget. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetArea.property.height">Height</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetArea.property.ignoreTimeRange">IgnoreTimeRange</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetArea.property.width">Width</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}. |

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetArea.property.column"></a>

```go
Column *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}.

---

##### `NrqlQuery`<sup>Required</sup> <a name="NrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetArea.property.nrqlQuery"></a>

```go
NrqlQuery interface{}
```

- *Type:* interface{}

nrql_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#nrql_query OneDashboard#nrql_query}

---

##### `Row`<sup>Required</sup> <a name="Row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetArea.property.row"></a>

```go
Row *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetArea.property.title"></a>

```go
Title *string
```

- *Type:* *string

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#title OneDashboard#title}

---

##### `Height`<sup>Optional</sup> <a name="Height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetArea.property.height"></a>

```go
Height *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}.

---

##### `IgnoreTimeRange`<sup>Optional</sup> <a name="IgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetArea.property.ignoreTimeRange"></a>

```go
IgnoreTimeRange interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}.

---

##### `Width`<sup>Optional</sup> <a name="Width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetArea.property.width"></a>

```go
Width *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}.

---

### OneDashboardPageWidgetAreaNrqlQuery <a name="OneDashboardPageWidgetAreaNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQuery.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

&onedashboard.OneDashboardPageWidgetAreaNrqlQuery {
	Query: *string,
	AccountId: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQuery.property.query">Query</a></code> | <code>*string</code> | The NRQL query. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQuery.property.accountId">AccountId</a></code> | <code>*f64</code> | The account id used for the NRQL query. |

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQuery.property.query"></a>

```go
Query *string
```

- *Type:* *string

The NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#query OneDashboard#query}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQuery.property.accountId"></a>

```go
AccountId *f64
```

- *Type:* *f64

The account id used for the NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#account_id OneDashboard#account_id}

---

### OneDashboardPageWidgetBar <a name="OneDashboardPageWidgetBar" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBar"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBar.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

&onedashboard.OneDashboardPageWidgetBar {
	Column: *f64,
	NrqlQuery: interface{},
	Row: *f64,
	Title: *string,
	FilterCurrentDashboard: interface{},
	Height: *f64,
	IgnoreTimeRange: interface{},
	LinkedEntityGuids: *[]*string,
	Width: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBar.property.column">Column</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBar.property.nrqlQuery">NrqlQuery</a></code> | <code>interface{}</code> | nrql_query block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBar.property.row">Row</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBar.property.title">Title</a></code> | <code>*string</code> | A title for the widget. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBar.property.filterCurrentDashboard">FilterCurrentDashboard</a></code> | <code>interface{}</code> | Use this item to filter the current dashboard. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBar.property.height">Height</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBar.property.ignoreTimeRange">IgnoreTimeRange</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBar.property.linkedEntityGuids">LinkedEntityGuids</a></code> | <code>*[]*string</code> | Related entities. Currently only supports Dashboard entities, but may allow other cases in the future. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBar.property.width">Width</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}. |

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBar.property.column"></a>

```go
Column *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}.

---

##### `NrqlQuery`<sup>Required</sup> <a name="NrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBar.property.nrqlQuery"></a>

```go
NrqlQuery interface{}
```

- *Type:* interface{}

nrql_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#nrql_query OneDashboard#nrql_query}

---

##### `Row`<sup>Required</sup> <a name="Row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBar.property.row"></a>

```go
Row *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBar.property.title"></a>

```go
Title *string
```

- *Type:* *string

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#title OneDashboard#title}

---

##### `FilterCurrentDashboard`<sup>Optional</sup> <a name="FilterCurrentDashboard" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBar.property.filterCurrentDashboard"></a>

```go
FilterCurrentDashboard interface{}
```

- *Type:* interface{}

Use this item to filter the current dashboard.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#filter_current_dashboard OneDashboard#filter_current_dashboard}

---

##### `Height`<sup>Optional</sup> <a name="Height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBar.property.height"></a>

```go
Height *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}.

---

##### `IgnoreTimeRange`<sup>Optional</sup> <a name="IgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBar.property.ignoreTimeRange"></a>

```go
IgnoreTimeRange interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}.

---

##### `LinkedEntityGuids`<sup>Optional</sup> <a name="LinkedEntityGuids" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBar.property.linkedEntityGuids"></a>

```go
LinkedEntityGuids *[]*string
```

- *Type:* *[]*string

Related entities. Currently only supports Dashboard entities, but may allow other cases in the future.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#linked_entity_guids OneDashboard#linked_entity_guids}

---

##### `Width`<sup>Optional</sup> <a name="Width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBar.property.width"></a>

```go
Width *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}.

---

### OneDashboardPageWidgetBarNrqlQuery <a name="OneDashboardPageWidgetBarNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQuery.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

&onedashboard.OneDashboardPageWidgetBarNrqlQuery {
	Query: *string,
	AccountId: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQuery.property.query">Query</a></code> | <code>*string</code> | The NRQL query. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQuery.property.accountId">AccountId</a></code> | <code>*f64</code> | The account id used for the NRQL query. |

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQuery.property.query"></a>

```go
Query *string
```

- *Type:* *string

The NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#query OneDashboard#query}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQuery.property.accountId"></a>

```go
AccountId *f64
```

- *Type:* *f64

The account id used for the NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#account_id OneDashboard#account_id}

---

### OneDashboardPageWidgetBillboard <a name="OneDashboardPageWidgetBillboard" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboard"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboard.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

&onedashboard.OneDashboardPageWidgetBillboard {
	Column: *f64,
	NrqlQuery: interface{},
	Row: *f64,
	Title: *string,
	Critical: *string,
	Height: *f64,
	IgnoreTimeRange: interface{},
	Warning: *string,
	Width: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboard.property.column">Column</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboard.property.nrqlQuery">NrqlQuery</a></code> | <code>interface{}</code> | nrql_query block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboard.property.row">Row</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboard.property.title">Title</a></code> | <code>*string</code> | A title for the widget. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboard.property.critical">Critical</a></code> | <code>*string</code> | The critical threshold value. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboard.property.height">Height</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboard.property.ignoreTimeRange">IgnoreTimeRange</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboard.property.warning">Warning</a></code> | <code>*string</code> | The warning threshold value. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboard.property.width">Width</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}. |

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboard.property.column"></a>

```go
Column *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}.

---

##### `NrqlQuery`<sup>Required</sup> <a name="NrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboard.property.nrqlQuery"></a>

```go
NrqlQuery interface{}
```

- *Type:* interface{}

nrql_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#nrql_query OneDashboard#nrql_query}

---

##### `Row`<sup>Required</sup> <a name="Row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboard.property.row"></a>

```go
Row *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboard.property.title"></a>

```go
Title *string
```

- *Type:* *string

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#title OneDashboard#title}

---

##### `Critical`<sup>Optional</sup> <a name="Critical" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboard.property.critical"></a>

```go
Critical *string
```

- *Type:* *string

The critical threshold value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#critical OneDashboard#critical}

---

##### `Height`<sup>Optional</sup> <a name="Height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboard.property.height"></a>

```go
Height *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}.

---

##### `IgnoreTimeRange`<sup>Optional</sup> <a name="IgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboard.property.ignoreTimeRange"></a>

```go
IgnoreTimeRange interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}.

---

##### `Warning`<sup>Optional</sup> <a name="Warning" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboard.property.warning"></a>

```go
Warning *string
```

- *Type:* *string

The warning threshold value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#warning OneDashboard#warning}

---

##### `Width`<sup>Optional</sup> <a name="Width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboard.property.width"></a>

```go
Width *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}.

---

### OneDashboardPageWidgetBillboardNrqlQuery <a name="OneDashboardPageWidgetBillboardNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQuery.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

&onedashboard.OneDashboardPageWidgetBillboardNrqlQuery {
	Query: *string,
	AccountId: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQuery.property.query">Query</a></code> | <code>*string</code> | The NRQL query. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQuery.property.accountId">AccountId</a></code> | <code>*f64</code> | The account id used for the NRQL query. |

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQuery.property.query"></a>

```go
Query *string
```

- *Type:* *string

The NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#query OneDashboard#query}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQuery.property.accountId"></a>

```go
AccountId *f64
```

- *Type:* *f64

The account id used for the NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#account_id OneDashboard#account_id}

---

### OneDashboardPageWidgetBullet <a name="OneDashboardPageWidgetBullet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBullet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBullet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

&onedashboard.OneDashboardPageWidgetBullet {
	Column: *f64,
	Limit: *f64,
	NrqlQuery: interface{},
	Row: *f64,
	Title: *string,
	Height: *f64,
	IgnoreTimeRange: interface{},
	Width: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBullet.property.column">Column</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBullet.property.limit">Limit</a></code> | <code>*f64</code> | The maximum value for the visualization. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBullet.property.nrqlQuery">NrqlQuery</a></code> | <code>interface{}</code> | nrql_query block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBullet.property.row">Row</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBullet.property.title">Title</a></code> | <code>*string</code> | A title for the widget. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBullet.property.height">Height</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBullet.property.ignoreTimeRange">IgnoreTimeRange</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBullet.property.width">Width</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}. |

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBullet.property.column"></a>

```go
Column *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}.

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBullet.property.limit"></a>

```go
Limit *f64
```

- *Type:* *f64

The maximum value for the visualization.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#limit OneDashboard#limit}

---

##### `NrqlQuery`<sup>Required</sup> <a name="NrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBullet.property.nrqlQuery"></a>

```go
NrqlQuery interface{}
```

- *Type:* interface{}

nrql_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#nrql_query OneDashboard#nrql_query}

---

##### `Row`<sup>Required</sup> <a name="Row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBullet.property.row"></a>

```go
Row *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBullet.property.title"></a>

```go
Title *string
```

- *Type:* *string

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#title OneDashboard#title}

---

##### `Height`<sup>Optional</sup> <a name="Height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBullet.property.height"></a>

```go
Height *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}.

---

##### `IgnoreTimeRange`<sup>Optional</sup> <a name="IgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBullet.property.ignoreTimeRange"></a>

```go
IgnoreTimeRange interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}.

---

##### `Width`<sup>Optional</sup> <a name="Width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBullet.property.width"></a>

```go
Width *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}.

---

### OneDashboardPageWidgetBulletNrqlQuery <a name="OneDashboardPageWidgetBulletNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQuery.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

&onedashboard.OneDashboardPageWidgetBulletNrqlQuery {
	Query: *string,
	AccountId: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQuery.property.query">Query</a></code> | <code>*string</code> | The NRQL query. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQuery.property.accountId">AccountId</a></code> | <code>*f64</code> | The account id used for the NRQL query. |

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQuery.property.query"></a>

```go
Query *string
```

- *Type:* *string

The NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#query OneDashboard#query}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQuery.property.accountId"></a>

```go
AccountId *f64
```

- *Type:* *f64

The account id used for the NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#account_id OneDashboard#account_id}

---

### OneDashboardPageWidgetFunnel <a name="OneDashboardPageWidgetFunnel" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnel.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

&onedashboard.OneDashboardPageWidgetFunnel {
	Column: *f64,
	NrqlQuery: interface{},
	Row: *f64,
	Title: *string,
	Height: *f64,
	IgnoreTimeRange: interface{},
	Width: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnel.property.column">Column</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnel.property.nrqlQuery">NrqlQuery</a></code> | <code>interface{}</code> | nrql_query block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnel.property.row">Row</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnel.property.title">Title</a></code> | <code>*string</code> | A title for the widget. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnel.property.height">Height</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnel.property.ignoreTimeRange">IgnoreTimeRange</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnel.property.width">Width</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}. |

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnel.property.column"></a>

```go
Column *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}.

---

##### `NrqlQuery`<sup>Required</sup> <a name="NrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnel.property.nrqlQuery"></a>

```go
NrqlQuery interface{}
```

- *Type:* interface{}

nrql_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#nrql_query OneDashboard#nrql_query}

---

##### `Row`<sup>Required</sup> <a name="Row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnel.property.row"></a>

```go
Row *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnel.property.title"></a>

```go
Title *string
```

- *Type:* *string

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#title OneDashboard#title}

---

##### `Height`<sup>Optional</sup> <a name="Height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnel.property.height"></a>

```go
Height *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}.

---

##### `IgnoreTimeRange`<sup>Optional</sup> <a name="IgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnel.property.ignoreTimeRange"></a>

```go
IgnoreTimeRange interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}.

---

##### `Width`<sup>Optional</sup> <a name="Width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnel.property.width"></a>

```go
Width *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}.

---

### OneDashboardPageWidgetFunnelNrqlQuery <a name="OneDashboardPageWidgetFunnelNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQuery.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

&onedashboard.OneDashboardPageWidgetFunnelNrqlQuery {
	Query: *string,
	AccountId: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQuery.property.query">Query</a></code> | <code>*string</code> | The NRQL query. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQuery.property.accountId">AccountId</a></code> | <code>*f64</code> | The account id used for the NRQL query. |

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQuery.property.query"></a>

```go
Query *string
```

- *Type:* *string

The NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#query OneDashboard#query}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQuery.property.accountId"></a>

```go
AccountId *f64
```

- *Type:* *f64

The account id used for the NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#account_id OneDashboard#account_id}

---

### OneDashboardPageWidgetHeatmap <a name="OneDashboardPageWidgetHeatmap" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmap.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

&onedashboard.OneDashboardPageWidgetHeatmap {
	Column: *f64,
	NrqlQuery: interface{},
	Row: *f64,
	Title: *string,
	FilterCurrentDashboard: interface{},
	Height: *f64,
	IgnoreTimeRange: interface{},
	LinkedEntityGuids: *[]*string,
	Width: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmap.property.column">Column</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmap.property.nrqlQuery">NrqlQuery</a></code> | <code>interface{}</code> | nrql_query block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmap.property.row">Row</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmap.property.title">Title</a></code> | <code>*string</code> | A title for the widget. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmap.property.filterCurrentDashboard">FilterCurrentDashboard</a></code> | <code>interface{}</code> | Use this item to filter the current dashboard. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmap.property.height">Height</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmap.property.ignoreTimeRange">IgnoreTimeRange</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmap.property.linkedEntityGuids">LinkedEntityGuids</a></code> | <code>*[]*string</code> | Related entities. Currently only supports Dashboard entities, but may allow other cases in the future. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmap.property.width">Width</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}. |

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmap.property.column"></a>

```go
Column *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}.

---

##### `NrqlQuery`<sup>Required</sup> <a name="NrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmap.property.nrqlQuery"></a>

```go
NrqlQuery interface{}
```

- *Type:* interface{}

nrql_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#nrql_query OneDashboard#nrql_query}

---

##### `Row`<sup>Required</sup> <a name="Row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmap.property.row"></a>

```go
Row *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmap.property.title"></a>

```go
Title *string
```

- *Type:* *string

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#title OneDashboard#title}

---

##### `FilterCurrentDashboard`<sup>Optional</sup> <a name="FilterCurrentDashboard" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmap.property.filterCurrentDashboard"></a>

```go
FilterCurrentDashboard interface{}
```

- *Type:* interface{}

Use this item to filter the current dashboard.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#filter_current_dashboard OneDashboard#filter_current_dashboard}

---

##### `Height`<sup>Optional</sup> <a name="Height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmap.property.height"></a>

```go
Height *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}.

---

##### `IgnoreTimeRange`<sup>Optional</sup> <a name="IgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmap.property.ignoreTimeRange"></a>

```go
IgnoreTimeRange interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}.

---

##### `LinkedEntityGuids`<sup>Optional</sup> <a name="LinkedEntityGuids" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmap.property.linkedEntityGuids"></a>

```go
LinkedEntityGuids *[]*string
```

- *Type:* *[]*string

Related entities. Currently only supports Dashboard entities, but may allow other cases in the future.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#linked_entity_guids OneDashboard#linked_entity_guids}

---

##### `Width`<sup>Optional</sup> <a name="Width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmap.property.width"></a>

```go
Width *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}.

---

### OneDashboardPageWidgetHeatmapNrqlQuery <a name="OneDashboardPageWidgetHeatmapNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQuery.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

&onedashboard.OneDashboardPageWidgetHeatmapNrqlQuery {
	Query: *string,
	AccountId: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQuery.property.query">Query</a></code> | <code>*string</code> | The NRQL query. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQuery.property.accountId">AccountId</a></code> | <code>*f64</code> | The account id used for the NRQL query. |

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQuery.property.query"></a>

```go
Query *string
```

- *Type:* *string

The NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#query OneDashboard#query}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQuery.property.accountId"></a>

```go
AccountId *f64
```

- *Type:* *f64

The account id used for the NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#account_id OneDashboard#account_id}

---

### OneDashboardPageWidgetHistogram <a name="OneDashboardPageWidgetHistogram" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogram"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogram.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

&onedashboard.OneDashboardPageWidgetHistogram {
	Column: *f64,
	NrqlQuery: interface{},
	Row: *f64,
	Title: *string,
	Height: *f64,
	IgnoreTimeRange: interface{},
	Width: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogram.property.column">Column</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogram.property.nrqlQuery">NrqlQuery</a></code> | <code>interface{}</code> | nrql_query block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogram.property.row">Row</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogram.property.title">Title</a></code> | <code>*string</code> | A title for the widget. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogram.property.height">Height</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogram.property.ignoreTimeRange">IgnoreTimeRange</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogram.property.width">Width</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}. |

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogram.property.column"></a>

```go
Column *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}.

---

##### `NrqlQuery`<sup>Required</sup> <a name="NrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogram.property.nrqlQuery"></a>

```go
NrqlQuery interface{}
```

- *Type:* interface{}

nrql_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#nrql_query OneDashboard#nrql_query}

---

##### `Row`<sup>Required</sup> <a name="Row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogram.property.row"></a>

```go
Row *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogram.property.title"></a>

```go
Title *string
```

- *Type:* *string

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#title OneDashboard#title}

---

##### `Height`<sup>Optional</sup> <a name="Height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogram.property.height"></a>

```go
Height *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}.

---

##### `IgnoreTimeRange`<sup>Optional</sup> <a name="IgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogram.property.ignoreTimeRange"></a>

```go
IgnoreTimeRange interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}.

---

##### `Width`<sup>Optional</sup> <a name="Width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogram.property.width"></a>

```go
Width *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}.

---

### OneDashboardPageWidgetHistogramNrqlQuery <a name="OneDashboardPageWidgetHistogramNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQuery.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

&onedashboard.OneDashboardPageWidgetHistogramNrqlQuery {
	Query: *string,
	AccountId: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQuery.property.query">Query</a></code> | <code>*string</code> | The NRQL query. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQuery.property.accountId">AccountId</a></code> | <code>*f64</code> | The account id used for the NRQL query. |

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQuery.property.query"></a>

```go
Query *string
```

- *Type:* *string

The NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#query OneDashboard#query}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQuery.property.accountId"></a>

```go
AccountId *f64
```

- *Type:* *f64

The account id used for the NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#account_id OneDashboard#account_id}

---

### OneDashboardPageWidgetJson <a name="OneDashboardPageWidgetJson" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJson"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJson.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

&onedashboard.OneDashboardPageWidgetJson {
	Column: *f64,
	NrqlQuery: interface{},
	Row: *f64,
	Title: *string,
	Height: *f64,
	IgnoreTimeRange: interface{},
	Width: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJson.property.column">Column</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJson.property.nrqlQuery">NrqlQuery</a></code> | <code>interface{}</code> | nrql_query block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJson.property.row">Row</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJson.property.title">Title</a></code> | <code>*string</code> | A title for the widget. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJson.property.height">Height</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJson.property.ignoreTimeRange">IgnoreTimeRange</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJson.property.width">Width</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}. |

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJson.property.column"></a>

```go
Column *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}.

---

##### `NrqlQuery`<sup>Required</sup> <a name="NrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJson.property.nrqlQuery"></a>

```go
NrqlQuery interface{}
```

- *Type:* interface{}

nrql_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#nrql_query OneDashboard#nrql_query}

---

##### `Row`<sup>Required</sup> <a name="Row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJson.property.row"></a>

```go
Row *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJson.property.title"></a>

```go
Title *string
```

- *Type:* *string

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#title OneDashboard#title}

---

##### `Height`<sup>Optional</sup> <a name="Height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJson.property.height"></a>

```go
Height *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}.

---

##### `IgnoreTimeRange`<sup>Optional</sup> <a name="IgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJson.property.ignoreTimeRange"></a>

```go
IgnoreTimeRange interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}.

---

##### `Width`<sup>Optional</sup> <a name="Width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJson.property.width"></a>

```go
Width *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}.

---

### OneDashboardPageWidgetJsonNrqlQuery <a name="OneDashboardPageWidgetJsonNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQuery.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

&onedashboard.OneDashboardPageWidgetJsonNrqlQuery {
	Query: *string,
	AccountId: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQuery.property.query">Query</a></code> | <code>*string</code> | The NRQL query. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQuery.property.accountId">AccountId</a></code> | <code>*f64</code> | The account id used for the NRQL query. |

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQuery.property.query"></a>

```go
Query *string
```

- *Type:* *string

The NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#query OneDashboard#query}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQuery.property.accountId"></a>

```go
AccountId *f64
```

- *Type:* *f64

The account id used for the NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#account_id OneDashboard#account_id}

---

### OneDashboardPageWidgetLine <a name="OneDashboardPageWidgetLine" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLine"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLine.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

&onedashboard.OneDashboardPageWidgetLine {
	Column: *f64,
	NrqlQuery: interface{},
	Row: *f64,
	Title: *string,
	Height: *f64,
	IgnoreTimeRange: interface{},
	Width: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLine.property.column">Column</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLine.property.nrqlQuery">NrqlQuery</a></code> | <code>interface{}</code> | nrql_query block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLine.property.row">Row</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLine.property.title">Title</a></code> | <code>*string</code> | A title for the widget. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLine.property.height">Height</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLine.property.ignoreTimeRange">IgnoreTimeRange</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLine.property.width">Width</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}. |

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLine.property.column"></a>

```go
Column *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}.

---

##### `NrqlQuery`<sup>Required</sup> <a name="NrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLine.property.nrqlQuery"></a>

```go
NrqlQuery interface{}
```

- *Type:* interface{}

nrql_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#nrql_query OneDashboard#nrql_query}

---

##### `Row`<sup>Required</sup> <a name="Row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLine.property.row"></a>

```go
Row *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLine.property.title"></a>

```go
Title *string
```

- *Type:* *string

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#title OneDashboard#title}

---

##### `Height`<sup>Optional</sup> <a name="Height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLine.property.height"></a>

```go
Height *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}.

---

##### `IgnoreTimeRange`<sup>Optional</sup> <a name="IgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLine.property.ignoreTimeRange"></a>

```go
IgnoreTimeRange interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}.

---

##### `Width`<sup>Optional</sup> <a name="Width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLine.property.width"></a>

```go
Width *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}.

---

### OneDashboardPageWidgetLineNrqlQuery <a name="OneDashboardPageWidgetLineNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQuery.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

&onedashboard.OneDashboardPageWidgetLineNrqlQuery {
	Query: *string,
	AccountId: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQuery.property.query">Query</a></code> | <code>*string</code> | The NRQL query. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQuery.property.accountId">AccountId</a></code> | <code>*f64</code> | The account id used for the NRQL query. |

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQuery.property.query"></a>

```go
Query *string
```

- *Type:* *string

The NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#query OneDashboard#query}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQuery.property.accountId"></a>

```go
AccountId *f64
```

- *Type:* *f64

The account id used for the NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#account_id OneDashboard#account_id}

---

### OneDashboardPageWidgetLogTable <a name="OneDashboardPageWidgetLogTable" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTable.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

&onedashboard.OneDashboardPageWidgetLogTable {
	Column: *f64,
	NrqlQuery: interface{},
	Row: *f64,
	Title: *string,
	Height: *f64,
	IgnoreTimeRange: interface{},
	Width: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTable.property.column">Column</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTable.property.nrqlQuery">NrqlQuery</a></code> | <code>interface{}</code> | nrql_query block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTable.property.row">Row</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTable.property.title">Title</a></code> | <code>*string</code> | A title for the widget. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTable.property.height">Height</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTable.property.ignoreTimeRange">IgnoreTimeRange</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTable.property.width">Width</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}. |

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTable.property.column"></a>

```go
Column *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}.

---

##### `NrqlQuery`<sup>Required</sup> <a name="NrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTable.property.nrqlQuery"></a>

```go
NrqlQuery interface{}
```

- *Type:* interface{}

nrql_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#nrql_query OneDashboard#nrql_query}

---

##### `Row`<sup>Required</sup> <a name="Row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTable.property.row"></a>

```go
Row *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTable.property.title"></a>

```go
Title *string
```

- *Type:* *string

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#title OneDashboard#title}

---

##### `Height`<sup>Optional</sup> <a name="Height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTable.property.height"></a>

```go
Height *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}.

---

##### `IgnoreTimeRange`<sup>Optional</sup> <a name="IgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTable.property.ignoreTimeRange"></a>

```go
IgnoreTimeRange interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}.

---

##### `Width`<sup>Optional</sup> <a name="Width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTable.property.width"></a>

```go
Width *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}.

---

### OneDashboardPageWidgetLogTableNrqlQuery <a name="OneDashboardPageWidgetLogTableNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQuery.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

&onedashboard.OneDashboardPageWidgetLogTableNrqlQuery {
	Query: *string,
	AccountId: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQuery.property.query">Query</a></code> | <code>*string</code> | The NRQL query. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQuery.property.accountId">AccountId</a></code> | <code>*f64</code> | The account id used for the NRQL query. |

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQuery.property.query"></a>

```go
Query *string
```

- *Type:* *string

The NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#query OneDashboard#query}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQuery.property.accountId"></a>

```go
AccountId *f64
```

- *Type:* *f64

The account id used for the NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#account_id OneDashboard#account_id}

---

### OneDashboardPageWidgetMarkdown <a name="OneDashboardPageWidgetMarkdown" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdown"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdown.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

&onedashboard.OneDashboardPageWidgetMarkdown {
	Column: *f64,
	Row: *f64,
	Title: *string,
	Height: *f64,
	IgnoreTimeRange: interface{},
	Text: *string,
	Width: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdown.property.column">Column</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdown.property.row">Row</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdown.property.title">Title</a></code> | <code>*string</code> | A title for the widget. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdown.property.height">Height</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdown.property.ignoreTimeRange">IgnoreTimeRange</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdown.property.text">Text</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#text OneDashboard#text}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdown.property.width">Width</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}. |

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdown.property.column"></a>

```go
Column *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}.

---

##### `Row`<sup>Required</sup> <a name="Row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdown.property.row"></a>

```go
Row *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdown.property.title"></a>

```go
Title *string
```

- *Type:* *string

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#title OneDashboard#title}

---

##### `Height`<sup>Optional</sup> <a name="Height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdown.property.height"></a>

```go
Height *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}.

---

##### `IgnoreTimeRange`<sup>Optional</sup> <a name="IgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdown.property.ignoreTimeRange"></a>

```go
IgnoreTimeRange interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}.

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdown.property.text"></a>

```go
Text *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#text OneDashboard#text}.

---

##### `Width`<sup>Optional</sup> <a name="Width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdown.property.width"></a>

```go
Width *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}.

---

### OneDashboardPageWidgetPie <a name="OneDashboardPageWidgetPie" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPie"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPie.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

&onedashboard.OneDashboardPageWidgetPie {
	Column: *f64,
	NrqlQuery: interface{},
	Row: *f64,
	Title: *string,
	FilterCurrentDashboard: interface{},
	Height: *f64,
	IgnoreTimeRange: interface{},
	LinkedEntityGuids: *[]*string,
	Width: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPie.property.column">Column</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPie.property.nrqlQuery">NrqlQuery</a></code> | <code>interface{}</code> | nrql_query block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPie.property.row">Row</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPie.property.title">Title</a></code> | <code>*string</code> | A title for the widget. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPie.property.filterCurrentDashboard">FilterCurrentDashboard</a></code> | <code>interface{}</code> | Use this item to filter the current dashboard. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPie.property.height">Height</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPie.property.ignoreTimeRange">IgnoreTimeRange</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPie.property.linkedEntityGuids">LinkedEntityGuids</a></code> | <code>*[]*string</code> | Related entities. Currently only supports Dashboard entities, but may allow other cases in the future. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPie.property.width">Width</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}. |

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPie.property.column"></a>

```go
Column *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}.

---

##### `NrqlQuery`<sup>Required</sup> <a name="NrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPie.property.nrqlQuery"></a>

```go
NrqlQuery interface{}
```

- *Type:* interface{}

nrql_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#nrql_query OneDashboard#nrql_query}

---

##### `Row`<sup>Required</sup> <a name="Row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPie.property.row"></a>

```go
Row *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPie.property.title"></a>

```go
Title *string
```

- *Type:* *string

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#title OneDashboard#title}

---

##### `FilterCurrentDashboard`<sup>Optional</sup> <a name="FilterCurrentDashboard" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPie.property.filterCurrentDashboard"></a>

```go
FilterCurrentDashboard interface{}
```

- *Type:* interface{}

Use this item to filter the current dashboard.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#filter_current_dashboard OneDashboard#filter_current_dashboard}

---

##### `Height`<sup>Optional</sup> <a name="Height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPie.property.height"></a>

```go
Height *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}.

---

##### `IgnoreTimeRange`<sup>Optional</sup> <a name="IgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPie.property.ignoreTimeRange"></a>

```go
IgnoreTimeRange interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}.

---

##### `LinkedEntityGuids`<sup>Optional</sup> <a name="LinkedEntityGuids" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPie.property.linkedEntityGuids"></a>

```go
LinkedEntityGuids *[]*string
```

- *Type:* *[]*string

Related entities. Currently only supports Dashboard entities, but may allow other cases in the future.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#linked_entity_guids OneDashboard#linked_entity_guids}

---

##### `Width`<sup>Optional</sup> <a name="Width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPie.property.width"></a>

```go
Width *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}.

---

### OneDashboardPageWidgetPieNrqlQuery <a name="OneDashboardPageWidgetPieNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQuery.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

&onedashboard.OneDashboardPageWidgetPieNrqlQuery {
	Query: *string,
	AccountId: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQuery.property.query">Query</a></code> | <code>*string</code> | The NRQL query. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQuery.property.accountId">AccountId</a></code> | <code>*f64</code> | The account id used for the NRQL query. |

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQuery.property.query"></a>

```go
Query *string
```

- *Type:* *string

The NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#query OneDashboard#query}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQuery.property.accountId"></a>

```go
AccountId *f64
```

- *Type:* *f64

The account id used for the NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#account_id OneDashboard#account_id}

---

### OneDashboardPageWidgetStackedBar <a name="OneDashboardPageWidgetStackedBar" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBar"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBar.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

&onedashboard.OneDashboardPageWidgetStackedBar {
	Column: *f64,
	NrqlQuery: interface{},
	Row: *f64,
	Title: *string,
	Height: *f64,
	IgnoreTimeRange: interface{},
	Width: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBar.property.column">Column</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBar.property.nrqlQuery">NrqlQuery</a></code> | <code>interface{}</code> | nrql_query block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBar.property.row">Row</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBar.property.title">Title</a></code> | <code>*string</code> | A title for the widget. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBar.property.height">Height</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBar.property.ignoreTimeRange">IgnoreTimeRange</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBar.property.width">Width</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}. |

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBar.property.column"></a>

```go
Column *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}.

---

##### `NrqlQuery`<sup>Required</sup> <a name="NrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBar.property.nrqlQuery"></a>

```go
NrqlQuery interface{}
```

- *Type:* interface{}

nrql_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#nrql_query OneDashboard#nrql_query}

---

##### `Row`<sup>Required</sup> <a name="Row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBar.property.row"></a>

```go
Row *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBar.property.title"></a>

```go
Title *string
```

- *Type:* *string

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#title OneDashboard#title}

---

##### `Height`<sup>Optional</sup> <a name="Height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBar.property.height"></a>

```go
Height *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}.

---

##### `IgnoreTimeRange`<sup>Optional</sup> <a name="IgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBar.property.ignoreTimeRange"></a>

```go
IgnoreTimeRange interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}.

---

##### `Width`<sup>Optional</sup> <a name="Width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBar.property.width"></a>

```go
Width *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}.

---

### OneDashboardPageWidgetStackedBarNrqlQuery <a name="OneDashboardPageWidgetStackedBarNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQuery.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

&onedashboard.OneDashboardPageWidgetStackedBarNrqlQuery {
	Query: *string,
	AccountId: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQuery.property.query">Query</a></code> | <code>*string</code> | The NRQL query. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQuery.property.accountId">AccountId</a></code> | <code>*f64</code> | The account id used for the NRQL query. |

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQuery.property.query"></a>

```go
Query *string
```

- *Type:* *string

The NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#query OneDashboard#query}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQuery.property.accountId"></a>

```go
AccountId *f64
```

- *Type:* *f64

The account id used for the NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#account_id OneDashboard#account_id}

---

### OneDashboardPageWidgetTable <a name="OneDashboardPageWidgetTable" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTable.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

&onedashboard.OneDashboardPageWidgetTable {
	Column: *f64,
	NrqlQuery: interface{},
	Row: *f64,
	Title: *string,
	FilterCurrentDashboard: interface{},
	Height: *f64,
	IgnoreTimeRange: interface{},
	LinkedEntityGuids: *[]*string,
	Width: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTable.property.column">Column</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTable.property.nrqlQuery">NrqlQuery</a></code> | <code>interface{}</code> | nrql_query block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTable.property.row">Row</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTable.property.title">Title</a></code> | <code>*string</code> | A title for the widget. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTable.property.filterCurrentDashboard">FilterCurrentDashboard</a></code> | <code>interface{}</code> | Use this item to filter the current dashboard. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTable.property.height">Height</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTable.property.ignoreTimeRange">IgnoreTimeRange</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTable.property.linkedEntityGuids">LinkedEntityGuids</a></code> | <code>*[]*string</code> | Related entities. Currently only supports Dashboard entities, but may allow other cases in the future. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTable.property.width">Width</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}. |

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTable.property.column"></a>

```go
Column *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#column OneDashboard#column}.

---

##### `NrqlQuery`<sup>Required</sup> <a name="NrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTable.property.nrqlQuery"></a>

```go
NrqlQuery interface{}
```

- *Type:* interface{}

nrql_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#nrql_query OneDashboard#nrql_query}

---

##### `Row`<sup>Required</sup> <a name="Row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTable.property.row"></a>

```go
Row *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#row OneDashboard#row}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTable.property.title"></a>

```go
Title *string
```

- *Type:* *string

A title for the widget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#title OneDashboard#title}

---

##### `FilterCurrentDashboard`<sup>Optional</sup> <a name="FilterCurrentDashboard" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTable.property.filterCurrentDashboard"></a>

```go
FilterCurrentDashboard interface{}
```

- *Type:* interface{}

Use this item to filter the current dashboard.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#filter_current_dashboard OneDashboard#filter_current_dashboard}

---

##### `Height`<sup>Optional</sup> <a name="Height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTable.property.height"></a>

```go
Height *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#height OneDashboard#height}.

---

##### `IgnoreTimeRange`<sup>Optional</sup> <a name="IgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTable.property.ignoreTimeRange"></a>

```go
IgnoreTimeRange interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}.

---

##### `LinkedEntityGuids`<sup>Optional</sup> <a name="LinkedEntityGuids" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTable.property.linkedEntityGuids"></a>

```go
LinkedEntityGuids *[]*string
```

- *Type:* *[]*string

Related entities. Currently only supports Dashboard entities, but may allow other cases in the future.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#linked_entity_guids OneDashboard#linked_entity_guids}

---

##### `Width`<sup>Optional</sup> <a name="Width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTable.property.width"></a>

```go
Width *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#width OneDashboard#width}.

---

### OneDashboardPageWidgetTableNrqlQuery <a name="OneDashboardPageWidgetTableNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQuery.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

&onedashboard.OneDashboardPageWidgetTableNrqlQuery {
	Query: *string,
	AccountId: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQuery.property.query">Query</a></code> | <code>*string</code> | The NRQL query. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQuery.property.accountId">AccountId</a></code> | <code>*f64</code> | The account id used for the NRQL query. |

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQuery.property.query"></a>

```go
Query *string
```

- *Type:* *string

The NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#query OneDashboard#query}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQuery.property.accountId"></a>

```go
AccountId *f64
```

- *Type:* *f64

The account id used for the NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#account_id OneDashboard#account_id}

---

### OneDashboardVariable <a name="OneDashboardVariable" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariable.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

&onedashboard.OneDashboardVariable {
	Name: *string,
	ReplacementStrategy: *string,
	Title: *string,
	Type: *string,
	DefaultValues: *[]*string,
	IsMultiSelection: interface{},
	Item: interface{},
	NrqlQuery: github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6.oneDashboard.OneDashboardVariableNrqlQuery,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariable.property.name">Name</a></code> | <code>*string</code> | The variable identifier. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariable.property.replacementStrategy">ReplacementStrategy</a></code> | <code>*string</code> | Indicates the strategy to apply when replacing a variable in a NRQL query. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariable.property.title">Title</a></code> | <code>*string</code> | Human-friendly display string for this variable. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariable.property.type">Type</a></code> | <code>*string</code> | Specifies the data type of the variable and where its possible values may come from. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariable.property.defaultValues">DefaultValues</a></code> | <code>*[]*string</code> | Default values for this variable. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariable.property.isMultiSelection">IsMultiSelection</a></code> | <code>interface{}</code> | Indicates whether this variable supports multiple selection or not. Only applies to variables of type NRQL or ENUM. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariable.property.item">Item</a></code> | <code>interface{}</code> | item block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariable.property.nrqlQuery">NrqlQuery</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQuery">OneDashboardVariableNrqlQuery</a></code> | nrql_query block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariable.property.name"></a>

```go
Name *string
```

- *Type:* *string

The variable identifier.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#name OneDashboard#name}

---

##### `ReplacementStrategy`<sup>Required</sup> <a name="ReplacementStrategy" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariable.property.replacementStrategy"></a>

```go
ReplacementStrategy *string
```

- *Type:* *string

Indicates the strategy to apply when replacing a variable in a NRQL query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#replacement_strategy OneDashboard#replacement_strategy}

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariable.property.title"></a>

```go
Title *string
```

- *Type:* *string

Human-friendly display string for this variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#title OneDashboard#title}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariable.property.type"></a>

```go
Type *string
```

- *Type:* *string

Specifies the data type of the variable and where its possible values may come from.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#type OneDashboard#type}

---

##### `DefaultValues`<sup>Optional</sup> <a name="DefaultValues" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariable.property.defaultValues"></a>

```go
DefaultValues *[]*string
```

- *Type:* *[]*string

Default values for this variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#default_values OneDashboard#default_values}

---

##### `IsMultiSelection`<sup>Optional</sup> <a name="IsMultiSelection" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariable.property.isMultiSelection"></a>

```go
IsMultiSelection interface{}
```

- *Type:* interface{}

Indicates whether this variable supports multiple selection or not. Only applies to variables of type NRQL or ENUM.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#is_multi_selection OneDashboard#is_multi_selection}

---

##### `Item`<sup>Optional</sup> <a name="Item" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariable.property.item"></a>

```go
Item interface{}
```

- *Type:* interface{}

item block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#item OneDashboard#item}

---

##### `NrqlQuery`<sup>Optional</sup> <a name="NrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariable.property.nrqlQuery"></a>

```go
NrqlQuery OneDashboardVariableNrqlQuery
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQuery">OneDashboardVariableNrqlQuery</a>

nrql_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#nrql_query OneDashboard#nrql_query}

---

### OneDashboardVariableItem <a name="OneDashboardVariableItem" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItem"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItem.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

&onedashboard.OneDashboardVariableItem {
	Value: *string,
	Title: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItem.property.value">Value</a></code> | <code>*string</code> | A possible variable value. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItem.property.title">Title</a></code> | <code>*string</code> | A human-friendly display string for this value. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItem.property.value"></a>

```go
Value *string
```

- *Type:* *string

A possible variable value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#value OneDashboard#value}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItem.property.title"></a>

```go
Title *string
```

- *Type:* *string

A human-friendly display string for this value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#title OneDashboard#title}

---

### OneDashboardVariableNrqlQuery <a name="OneDashboardVariableNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQuery.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

&onedashboard.OneDashboardVariableNrqlQuery {
	Query: *string,
	AccountIds: *[]*f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQuery.property.query">Query</a></code> | <code>*string</code> | NRQL formatted query. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQuery.property.accountIds">AccountIds</a></code> | <code>*[]*f64</code> | New Relic account ID(s) to issue the query against. |

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQuery.property.query"></a>

```go
Query *string
```

- *Type:* *string

NRQL formatted query.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#query OneDashboard#query}

---

##### `AccountIds`<sup>Optional</sup> <a name="AccountIds" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQuery.property.accountIds"></a>

```go
AccountIds *[]*f64
```

- *Type:* *[]*f64

New Relic account ID(s) to issue the query against.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard#account_ids OneDashboard#account_ids}

---

## Classes <a name="Classes" id="Classes"></a>

### OneDashboardPageList <a name="OneDashboardPageList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

onedashboard.NewOneDashboardPageList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OneDashboardPageList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList.get"></a>

```go
func Get(index *f64) OneDashboardPageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OneDashboardPageOutputReference <a name="OneDashboardPageOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

onedashboard.NewOneDashboardPageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OneDashboardPageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutWidgetArea` <a name="PutWidgetArea" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetArea"></a>

```go
func PutWidgetArea(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetArea.parameter.value"></a>

- *Type:* interface{}

---

##### `PutWidgetBar` <a name="PutWidgetBar" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetBar"></a>

```go
func PutWidgetBar(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetBar.parameter.value"></a>

- *Type:* interface{}

---

##### `PutWidgetBillboard` <a name="PutWidgetBillboard" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetBillboard"></a>

```go
func PutWidgetBillboard(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetBillboard.parameter.value"></a>

- *Type:* interface{}

---

##### `PutWidgetBullet` <a name="PutWidgetBullet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetBullet"></a>

```go
func PutWidgetBullet(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetBullet.parameter.value"></a>

- *Type:* interface{}

---

##### `PutWidgetFunnel` <a name="PutWidgetFunnel" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetFunnel"></a>

```go
func PutWidgetFunnel(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetFunnel.parameter.value"></a>

- *Type:* interface{}

---

##### `PutWidgetHeatmap` <a name="PutWidgetHeatmap" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetHeatmap"></a>

```go
func PutWidgetHeatmap(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetHeatmap.parameter.value"></a>

- *Type:* interface{}

---

##### `PutWidgetHistogram` <a name="PutWidgetHistogram" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetHistogram"></a>

```go
func PutWidgetHistogram(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetHistogram.parameter.value"></a>

- *Type:* interface{}

---

##### `PutWidgetJson` <a name="PutWidgetJson" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetJson"></a>

```go
func PutWidgetJson(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetJson.parameter.value"></a>

- *Type:* interface{}

---

##### `PutWidgetLine` <a name="PutWidgetLine" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetLine"></a>

```go
func PutWidgetLine(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetLine.parameter.value"></a>

- *Type:* interface{}

---

##### `PutWidgetLogTable` <a name="PutWidgetLogTable" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetLogTable"></a>

```go
func PutWidgetLogTable(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetLogTable.parameter.value"></a>

- *Type:* interface{}

---

##### `PutWidgetMarkdown` <a name="PutWidgetMarkdown" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetMarkdown"></a>

```go
func PutWidgetMarkdown(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetMarkdown.parameter.value"></a>

- *Type:* interface{}

---

##### `PutWidgetPie` <a name="PutWidgetPie" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetPie"></a>

```go
func PutWidgetPie(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetPie.parameter.value"></a>

- *Type:* interface{}

---

##### `PutWidgetStackedBar` <a name="PutWidgetStackedBar" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetStackedBar"></a>

```go
func PutWidgetStackedBar(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetStackedBar.parameter.value"></a>

- *Type:* interface{}

---

##### `PutWidgetTable` <a name="PutWidgetTable" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetTable"></a>

```go
func PutWidgetTable(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.putWidgetTable.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetWidgetArea` <a name="ResetWidgetArea" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetArea"></a>

```go
func ResetWidgetArea()
```

##### `ResetWidgetBar` <a name="ResetWidgetBar" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetBar"></a>

```go
func ResetWidgetBar()
```

##### `ResetWidgetBillboard` <a name="ResetWidgetBillboard" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetBillboard"></a>

```go
func ResetWidgetBillboard()
```

##### `ResetWidgetBullet` <a name="ResetWidgetBullet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetBullet"></a>

```go
func ResetWidgetBullet()
```

##### `ResetWidgetFunnel` <a name="ResetWidgetFunnel" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetFunnel"></a>

```go
func ResetWidgetFunnel()
```

##### `ResetWidgetHeatmap` <a name="ResetWidgetHeatmap" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetHeatmap"></a>

```go
func ResetWidgetHeatmap()
```

##### `ResetWidgetHistogram` <a name="ResetWidgetHistogram" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetHistogram"></a>

```go
func ResetWidgetHistogram()
```

##### `ResetWidgetJson` <a name="ResetWidgetJson" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetJson"></a>

```go
func ResetWidgetJson()
```

##### `ResetWidgetLine` <a name="ResetWidgetLine" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetLine"></a>

```go
func ResetWidgetLine()
```

##### `ResetWidgetLogTable` <a name="ResetWidgetLogTable" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetLogTable"></a>

```go
func ResetWidgetLogTable()
```

##### `ResetWidgetMarkdown` <a name="ResetWidgetMarkdown" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetMarkdown"></a>

```go
func ResetWidgetMarkdown()
```

##### `ResetWidgetPie` <a name="ResetWidgetPie" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetPie"></a>

```go
func ResetWidgetPie()
```

##### `ResetWidgetStackedBar` <a name="ResetWidgetStackedBar" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetStackedBar"></a>

```go
func ResetWidgetStackedBar()
```

##### `ResetWidgetTable` <a name="ResetWidgetTable" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.resetWidgetTable"></a>

```go
func ResetWidgetTable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.guid">Guid</a></code> | <code>*string</code> | *No description.* |
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
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetAreaInput">WidgetAreaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetBarInput">WidgetBarInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetBillboardInput">WidgetBillboardInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetBulletInput">WidgetBulletInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetFunnelInput">WidgetFunnelInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetHeatmapInput">WidgetHeatmapInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetHistogramInput">WidgetHistogramInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetJsonInput">WidgetJsonInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetLineInput">WidgetLineInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetLogTableInput">WidgetLogTableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetMarkdownInput">WidgetMarkdownInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetPieInput">WidgetPieInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetStackedBarInput">WidgetStackedBarInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetTableInput">WidgetTableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Guid`<sup>Required</sup> <a name="Guid" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.guid"></a>

```go
func Guid() *string
```

- *Type:* *string

---

##### `WidgetArea`<sup>Required</sup> <a name="WidgetArea" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetArea"></a>

```go
func WidgetArea() OneDashboardPageWidgetAreaList
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList">OneDashboardPageWidgetAreaList</a>

---

##### `WidgetBar`<sup>Required</sup> <a name="WidgetBar" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetBar"></a>

```go
func WidgetBar() OneDashboardPageWidgetBarList
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList">OneDashboardPageWidgetBarList</a>

---

##### `WidgetBillboard`<sup>Required</sup> <a name="WidgetBillboard" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetBillboard"></a>

```go
func WidgetBillboard() OneDashboardPageWidgetBillboardList
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList">OneDashboardPageWidgetBillboardList</a>

---

##### `WidgetBullet`<sup>Required</sup> <a name="WidgetBullet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetBullet"></a>

```go
func WidgetBullet() OneDashboardPageWidgetBulletList
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList">OneDashboardPageWidgetBulletList</a>

---

##### `WidgetFunnel`<sup>Required</sup> <a name="WidgetFunnel" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetFunnel"></a>

```go
func WidgetFunnel() OneDashboardPageWidgetFunnelList
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList">OneDashboardPageWidgetFunnelList</a>

---

##### `WidgetHeatmap`<sup>Required</sup> <a name="WidgetHeatmap" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetHeatmap"></a>

```go
func WidgetHeatmap() OneDashboardPageWidgetHeatmapList
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList">OneDashboardPageWidgetHeatmapList</a>

---

##### `WidgetHistogram`<sup>Required</sup> <a name="WidgetHistogram" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetHistogram"></a>

```go
func WidgetHistogram() OneDashboardPageWidgetHistogramList
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList">OneDashboardPageWidgetHistogramList</a>

---

##### `WidgetJson`<sup>Required</sup> <a name="WidgetJson" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetJson"></a>

```go
func WidgetJson() OneDashboardPageWidgetJsonList
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList">OneDashboardPageWidgetJsonList</a>

---

##### `WidgetLine`<sup>Required</sup> <a name="WidgetLine" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetLine"></a>

```go
func WidgetLine() OneDashboardPageWidgetLineList
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList">OneDashboardPageWidgetLineList</a>

---

##### `WidgetLogTable`<sup>Required</sup> <a name="WidgetLogTable" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetLogTable"></a>

```go
func WidgetLogTable() OneDashboardPageWidgetLogTableList
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList">OneDashboardPageWidgetLogTableList</a>

---

##### `WidgetMarkdown`<sup>Required</sup> <a name="WidgetMarkdown" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetMarkdown"></a>

```go
func WidgetMarkdown() OneDashboardPageWidgetMarkdownList
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList">OneDashboardPageWidgetMarkdownList</a>

---

##### `WidgetPie`<sup>Required</sup> <a name="WidgetPie" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetPie"></a>

```go
func WidgetPie() OneDashboardPageWidgetPieList
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList">OneDashboardPageWidgetPieList</a>

---

##### `WidgetStackedBar`<sup>Required</sup> <a name="WidgetStackedBar" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetStackedBar"></a>

```go
func WidgetStackedBar() OneDashboardPageWidgetStackedBarList
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList">OneDashboardPageWidgetStackedBarList</a>

---

##### `WidgetTable`<sup>Required</sup> <a name="WidgetTable" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetTable"></a>

```go
func WidgetTable() OneDashboardPageWidgetTableList
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList">OneDashboardPageWidgetTableList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `WidgetAreaInput`<sup>Optional</sup> <a name="WidgetAreaInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetAreaInput"></a>

```go
func WidgetAreaInput() interface{}
```

- *Type:* interface{}

---

##### `WidgetBarInput`<sup>Optional</sup> <a name="WidgetBarInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetBarInput"></a>

```go
func WidgetBarInput() interface{}
```

- *Type:* interface{}

---

##### `WidgetBillboardInput`<sup>Optional</sup> <a name="WidgetBillboardInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetBillboardInput"></a>

```go
func WidgetBillboardInput() interface{}
```

- *Type:* interface{}

---

##### `WidgetBulletInput`<sup>Optional</sup> <a name="WidgetBulletInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetBulletInput"></a>

```go
func WidgetBulletInput() interface{}
```

- *Type:* interface{}

---

##### `WidgetFunnelInput`<sup>Optional</sup> <a name="WidgetFunnelInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetFunnelInput"></a>

```go
func WidgetFunnelInput() interface{}
```

- *Type:* interface{}

---

##### `WidgetHeatmapInput`<sup>Optional</sup> <a name="WidgetHeatmapInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetHeatmapInput"></a>

```go
func WidgetHeatmapInput() interface{}
```

- *Type:* interface{}

---

##### `WidgetHistogramInput`<sup>Optional</sup> <a name="WidgetHistogramInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetHistogramInput"></a>

```go
func WidgetHistogramInput() interface{}
```

- *Type:* interface{}

---

##### `WidgetJsonInput`<sup>Optional</sup> <a name="WidgetJsonInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetJsonInput"></a>

```go
func WidgetJsonInput() interface{}
```

- *Type:* interface{}

---

##### `WidgetLineInput`<sup>Optional</sup> <a name="WidgetLineInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetLineInput"></a>

```go
func WidgetLineInput() interface{}
```

- *Type:* interface{}

---

##### `WidgetLogTableInput`<sup>Optional</sup> <a name="WidgetLogTableInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetLogTableInput"></a>

```go
func WidgetLogTableInput() interface{}
```

- *Type:* interface{}

---

##### `WidgetMarkdownInput`<sup>Optional</sup> <a name="WidgetMarkdownInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetMarkdownInput"></a>

```go
func WidgetMarkdownInput() interface{}
```

- *Type:* interface{}

---

##### `WidgetPieInput`<sup>Optional</sup> <a name="WidgetPieInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetPieInput"></a>

```go
func WidgetPieInput() interface{}
```

- *Type:* interface{}

---

##### `WidgetStackedBarInput`<sup>Optional</sup> <a name="WidgetStackedBarInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetStackedBarInput"></a>

```go
func WidgetStackedBarInput() interface{}
```

- *Type:* interface{}

---

##### `WidgetTableInput`<sup>Optional</sup> <a name="WidgetTableInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.widgetTableInput"></a>

```go
func WidgetTableInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OneDashboardPageWidgetAreaList <a name="OneDashboardPageWidgetAreaList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

onedashboard.NewOneDashboardPageWidgetAreaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OneDashboardPageWidgetAreaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList.get"></a>

```go
func Get(index *f64) OneDashboardPageWidgetAreaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OneDashboardPageWidgetAreaNrqlQueryList <a name="OneDashboardPageWidgetAreaNrqlQueryList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

onedashboard.NewOneDashboardPageWidgetAreaNrqlQueryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OneDashboardPageWidgetAreaNrqlQueryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList.get"></a>

```go
func Get(index *f64) OneDashboardPageWidgetAreaNrqlQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OneDashboardPageWidgetAreaNrqlQueryOutputReference <a name="OneDashboardPageWidgetAreaNrqlQueryOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

onedashboard.NewOneDashboardPageWidgetAreaNrqlQueryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OneDashboardPageWidgetAreaNrqlQueryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.resetAccountId"></a>

```go
func ResetAccountId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.property.queryInput">QueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.property.accountId">AccountId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.property.accountIdInput"></a>

```go
func AccountIdInput() *f64
```

- *Type:* *f64

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.property.queryInput"></a>

```go
func QueryInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.property.accountId"></a>

```go
func AccountId() *f64
```

- *Type:* *f64

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OneDashboardPageWidgetAreaOutputReference <a name="OneDashboardPageWidgetAreaOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

onedashboard.NewOneDashboardPageWidgetAreaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OneDashboardPageWidgetAreaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNrqlQuery` <a name="PutNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.putNrqlQuery"></a>

```go
func PutNrqlQuery(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.putNrqlQuery.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetHeight` <a name="ResetHeight" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.resetHeight"></a>

```go
func ResetHeight()
```

##### `ResetIgnoreTimeRange` <a name="ResetIgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.resetIgnoreTimeRange"></a>

```go
func ResetIgnoreTimeRange()
```

##### `ResetWidth` <a name="ResetWidth" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.resetWidth"></a>

```go
func ResetWidth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.nrqlQuery">NrqlQuery</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList">OneDashboardPageWidgetAreaNrqlQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.columnInput">ColumnInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.heightInput">HeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.ignoreTimeRangeInput">IgnoreTimeRangeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.nrqlQueryInput">NrqlQueryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.rowInput">RowInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.widthInput">WidthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.column">Column</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.height">Height</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.ignoreTimeRange">IgnoreTimeRange</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.row">Row</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.width">Width</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NrqlQuery`<sup>Required</sup> <a name="NrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.nrqlQuery"></a>

```go
func NrqlQuery() OneDashboardPageWidgetAreaNrqlQueryList
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaNrqlQueryList">OneDashboardPageWidgetAreaNrqlQueryList</a>

---

##### `ColumnInput`<sup>Optional</sup> <a name="ColumnInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.columnInput"></a>

```go
func ColumnInput() *f64
```

- *Type:* *f64

---

##### `HeightInput`<sup>Optional</sup> <a name="HeightInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.heightInput"></a>

```go
func HeightInput() *f64
```

- *Type:* *f64

---

##### `IgnoreTimeRangeInput`<sup>Optional</sup> <a name="IgnoreTimeRangeInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.ignoreTimeRangeInput"></a>

```go
func IgnoreTimeRangeInput() interface{}
```

- *Type:* interface{}

---

##### `NrqlQueryInput`<sup>Optional</sup> <a name="NrqlQueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.nrqlQueryInput"></a>

```go
func NrqlQueryInput() interface{}
```

- *Type:* interface{}

---

##### `RowInput`<sup>Optional</sup> <a name="RowInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.rowInput"></a>

```go
func RowInput() *f64
```

- *Type:* *f64

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `WidthInput`<sup>Optional</sup> <a name="WidthInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.widthInput"></a>

```go
func WidthInput() *f64
```

- *Type:* *f64

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.column"></a>

```go
func Column() *f64
```

- *Type:* *f64

---

##### `Height`<sup>Required</sup> <a name="Height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.height"></a>

```go
func Height() *f64
```

- *Type:* *f64

---

##### `IgnoreTimeRange`<sup>Required</sup> <a name="IgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.ignoreTimeRange"></a>

```go
func IgnoreTimeRange() interface{}
```

- *Type:* interface{}

---

##### `Row`<sup>Required</sup> <a name="Row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.row"></a>

```go
func Row() *f64
```

- *Type:* *f64

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `Width`<sup>Required</sup> <a name="Width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.width"></a>

```go
func Width() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetAreaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OneDashboardPageWidgetBarList <a name="OneDashboardPageWidgetBarList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

onedashboard.NewOneDashboardPageWidgetBarList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OneDashboardPageWidgetBarList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList.get"></a>

```go
func Get(index *f64) OneDashboardPageWidgetBarOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OneDashboardPageWidgetBarNrqlQueryList <a name="OneDashboardPageWidgetBarNrqlQueryList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

onedashboard.NewOneDashboardPageWidgetBarNrqlQueryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OneDashboardPageWidgetBarNrqlQueryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList.get"></a>

```go
func Get(index *f64) OneDashboardPageWidgetBarNrqlQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OneDashboardPageWidgetBarNrqlQueryOutputReference <a name="OneDashboardPageWidgetBarNrqlQueryOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

onedashboard.NewOneDashboardPageWidgetBarNrqlQueryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OneDashboardPageWidgetBarNrqlQueryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.resetAccountId"></a>

```go
func ResetAccountId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.property.queryInput">QueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.property.accountId">AccountId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.property.accountIdInput"></a>

```go
func AccountIdInput() *f64
```

- *Type:* *f64

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.property.queryInput"></a>

```go
func QueryInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.property.accountId"></a>

```go
func AccountId() *f64
```

- *Type:* *f64

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OneDashboardPageWidgetBarOutputReference <a name="OneDashboardPageWidgetBarOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

onedashboard.NewOneDashboardPageWidgetBarOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OneDashboardPageWidgetBarOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNrqlQuery` <a name="PutNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.putNrqlQuery"></a>

```go
func PutNrqlQuery(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.putNrqlQuery.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilterCurrentDashboard` <a name="ResetFilterCurrentDashboard" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.resetFilterCurrentDashboard"></a>

```go
func ResetFilterCurrentDashboard()
```

##### `ResetHeight` <a name="ResetHeight" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.resetHeight"></a>

```go
func ResetHeight()
```

##### `ResetIgnoreTimeRange` <a name="ResetIgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.resetIgnoreTimeRange"></a>

```go
func ResetIgnoreTimeRange()
```

##### `ResetLinkedEntityGuids` <a name="ResetLinkedEntityGuids" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.resetLinkedEntityGuids"></a>

```go
func ResetLinkedEntityGuids()
```

##### `ResetWidth` <a name="ResetWidth" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.resetWidth"></a>

```go
func ResetWidth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.nrqlQuery">NrqlQuery</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList">OneDashboardPageWidgetBarNrqlQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.columnInput">ColumnInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.filterCurrentDashboardInput">FilterCurrentDashboardInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.heightInput">HeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.ignoreTimeRangeInput">IgnoreTimeRangeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.linkedEntityGuidsInput">LinkedEntityGuidsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.nrqlQueryInput">NrqlQueryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.rowInput">RowInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.widthInput">WidthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.column">Column</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.filterCurrentDashboard">FilterCurrentDashboard</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.height">Height</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.ignoreTimeRange">IgnoreTimeRange</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.linkedEntityGuids">LinkedEntityGuids</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.row">Row</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.width">Width</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NrqlQuery`<sup>Required</sup> <a name="NrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.nrqlQuery"></a>

```go
func NrqlQuery() OneDashboardPageWidgetBarNrqlQueryList
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarNrqlQueryList">OneDashboardPageWidgetBarNrqlQueryList</a>

---

##### `ColumnInput`<sup>Optional</sup> <a name="ColumnInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.columnInput"></a>

```go
func ColumnInput() *f64
```

- *Type:* *f64

---

##### `FilterCurrentDashboardInput`<sup>Optional</sup> <a name="FilterCurrentDashboardInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.filterCurrentDashboardInput"></a>

```go
func FilterCurrentDashboardInput() interface{}
```

- *Type:* interface{}

---

##### `HeightInput`<sup>Optional</sup> <a name="HeightInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.heightInput"></a>

```go
func HeightInput() *f64
```

- *Type:* *f64

---

##### `IgnoreTimeRangeInput`<sup>Optional</sup> <a name="IgnoreTimeRangeInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.ignoreTimeRangeInput"></a>

```go
func IgnoreTimeRangeInput() interface{}
```

- *Type:* interface{}

---

##### `LinkedEntityGuidsInput`<sup>Optional</sup> <a name="LinkedEntityGuidsInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.linkedEntityGuidsInput"></a>

```go
func LinkedEntityGuidsInput() *[]*string
```

- *Type:* *[]*string

---

##### `NrqlQueryInput`<sup>Optional</sup> <a name="NrqlQueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.nrqlQueryInput"></a>

```go
func NrqlQueryInput() interface{}
```

- *Type:* interface{}

---

##### `RowInput`<sup>Optional</sup> <a name="RowInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.rowInput"></a>

```go
func RowInput() *f64
```

- *Type:* *f64

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `WidthInput`<sup>Optional</sup> <a name="WidthInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.widthInput"></a>

```go
func WidthInput() *f64
```

- *Type:* *f64

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.column"></a>

```go
func Column() *f64
```

- *Type:* *f64

---

##### `FilterCurrentDashboard`<sup>Required</sup> <a name="FilterCurrentDashboard" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.filterCurrentDashboard"></a>

```go
func FilterCurrentDashboard() interface{}
```

- *Type:* interface{}

---

##### `Height`<sup>Required</sup> <a name="Height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.height"></a>

```go
func Height() *f64
```

- *Type:* *f64

---

##### `IgnoreTimeRange`<sup>Required</sup> <a name="IgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.ignoreTimeRange"></a>

```go
func IgnoreTimeRange() interface{}
```

- *Type:* interface{}

---

##### `LinkedEntityGuids`<sup>Required</sup> <a name="LinkedEntityGuids" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.linkedEntityGuids"></a>

```go
func LinkedEntityGuids() *[]*string
```

- *Type:* *[]*string

---

##### `Row`<sup>Required</sup> <a name="Row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.row"></a>

```go
func Row() *f64
```

- *Type:* *f64

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `Width`<sup>Required</sup> <a name="Width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.width"></a>

```go
func Width() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBarOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OneDashboardPageWidgetBillboardList <a name="OneDashboardPageWidgetBillboardList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

onedashboard.NewOneDashboardPageWidgetBillboardList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OneDashboardPageWidgetBillboardList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList.get"></a>

```go
func Get(index *f64) OneDashboardPageWidgetBillboardOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OneDashboardPageWidgetBillboardNrqlQueryList <a name="OneDashboardPageWidgetBillboardNrqlQueryList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

onedashboard.NewOneDashboardPageWidgetBillboardNrqlQueryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OneDashboardPageWidgetBillboardNrqlQueryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList.get"></a>

```go
func Get(index *f64) OneDashboardPageWidgetBillboardNrqlQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OneDashboardPageWidgetBillboardNrqlQueryOutputReference <a name="OneDashboardPageWidgetBillboardNrqlQueryOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

onedashboard.NewOneDashboardPageWidgetBillboardNrqlQueryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OneDashboardPageWidgetBillboardNrqlQueryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.resetAccountId"></a>

```go
func ResetAccountId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.property.queryInput">QueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.property.accountId">AccountId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.property.accountIdInput"></a>

```go
func AccountIdInput() *f64
```

- *Type:* *f64

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.property.queryInput"></a>

```go
func QueryInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.property.accountId"></a>

```go
func AccountId() *f64
```

- *Type:* *f64

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OneDashboardPageWidgetBillboardOutputReference <a name="OneDashboardPageWidgetBillboardOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

onedashboard.NewOneDashboardPageWidgetBillboardOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OneDashboardPageWidgetBillboardOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNrqlQuery` <a name="PutNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.putNrqlQuery"></a>

```go
func PutNrqlQuery(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.putNrqlQuery.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCritical` <a name="ResetCritical" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.resetCritical"></a>

```go
func ResetCritical()
```

##### `ResetHeight` <a name="ResetHeight" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.resetHeight"></a>

```go
func ResetHeight()
```

##### `ResetIgnoreTimeRange` <a name="ResetIgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.resetIgnoreTimeRange"></a>

```go
func ResetIgnoreTimeRange()
```

##### `ResetWarning` <a name="ResetWarning" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.resetWarning"></a>

```go
func ResetWarning()
```

##### `ResetWidth` <a name="ResetWidth" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.resetWidth"></a>

```go
func ResetWidth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.nrqlQuery">NrqlQuery</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList">OneDashboardPageWidgetBillboardNrqlQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.columnInput">ColumnInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.criticalInput">CriticalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.heightInput">HeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.ignoreTimeRangeInput">IgnoreTimeRangeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.nrqlQueryInput">NrqlQueryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.rowInput">RowInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.warningInput">WarningInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.widthInput">WidthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.column">Column</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.critical">Critical</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.height">Height</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.ignoreTimeRange">IgnoreTimeRange</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.row">Row</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.warning">Warning</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.width">Width</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NrqlQuery`<sup>Required</sup> <a name="NrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.nrqlQuery"></a>

```go
func NrqlQuery() OneDashboardPageWidgetBillboardNrqlQueryList
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardNrqlQueryList">OneDashboardPageWidgetBillboardNrqlQueryList</a>

---

##### `ColumnInput`<sup>Optional</sup> <a name="ColumnInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.columnInput"></a>

```go
func ColumnInput() *f64
```

- *Type:* *f64

---

##### `CriticalInput`<sup>Optional</sup> <a name="CriticalInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.criticalInput"></a>

```go
func CriticalInput() *string
```

- *Type:* *string

---

##### `HeightInput`<sup>Optional</sup> <a name="HeightInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.heightInput"></a>

```go
func HeightInput() *f64
```

- *Type:* *f64

---

##### `IgnoreTimeRangeInput`<sup>Optional</sup> <a name="IgnoreTimeRangeInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.ignoreTimeRangeInput"></a>

```go
func IgnoreTimeRangeInput() interface{}
```

- *Type:* interface{}

---

##### `NrqlQueryInput`<sup>Optional</sup> <a name="NrqlQueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.nrqlQueryInput"></a>

```go
func NrqlQueryInput() interface{}
```

- *Type:* interface{}

---

##### `RowInput`<sup>Optional</sup> <a name="RowInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.rowInput"></a>

```go
func RowInput() *f64
```

- *Type:* *f64

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `WarningInput`<sup>Optional</sup> <a name="WarningInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.warningInput"></a>

```go
func WarningInput() *string
```

- *Type:* *string

---

##### `WidthInput`<sup>Optional</sup> <a name="WidthInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.widthInput"></a>

```go
func WidthInput() *f64
```

- *Type:* *f64

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.column"></a>

```go
func Column() *f64
```

- *Type:* *f64

---

##### `Critical`<sup>Required</sup> <a name="Critical" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.critical"></a>

```go
func Critical() *string
```

- *Type:* *string

---

##### `Height`<sup>Required</sup> <a name="Height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.height"></a>

```go
func Height() *f64
```

- *Type:* *f64

---

##### `IgnoreTimeRange`<sup>Required</sup> <a name="IgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.ignoreTimeRange"></a>

```go
func IgnoreTimeRange() interface{}
```

- *Type:* interface{}

---

##### `Row`<sup>Required</sup> <a name="Row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.row"></a>

```go
func Row() *f64
```

- *Type:* *f64

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `Warning`<sup>Required</sup> <a name="Warning" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.warning"></a>

```go
func Warning() *string
```

- *Type:* *string

---

##### `Width`<sup>Required</sup> <a name="Width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.width"></a>

```go
func Width() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBillboardOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OneDashboardPageWidgetBulletList <a name="OneDashboardPageWidgetBulletList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

onedashboard.NewOneDashboardPageWidgetBulletList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OneDashboardPageWidgetBulletList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList.get"></a>

```go
func Get(index *f64) OneDashboardPageWidgetBulletOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OneDashboardPageWidgetBulletNrqlQueryList <a name="OneDashboardPageWidgetBulletNrqlQueryList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

onedashboard.NewOneDashboardPageWidgetBulletNrqlQueryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OneDashboardPageWidgetBulletNrqlQueryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList.get"></a>

```go
func Get(index *f64) OneDashboardPageWidgetBulletNrqlQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OneDashboardPageWidgetBulletNrqlQueryOutputReference <a name="OneDashboardPageWidgetBulletNrqlQueryOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

onedashboard.NewOneDashboardPageWidgetBulletNrqlQueryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OneDashboardPageWidgetBulletNrqlQueryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.resetAccountId"></a>

```go
func ResetAccountId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.property.queryInput">QueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.property.accountId">AccountId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.property.accountIdInput"></a>

```go
func AccountIdInput() *f64
```

- *Type:* *f64

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.property.queryInput"></a>

```go
func QueryInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.property.accountId"></a>

```go
func AccountId() *f64
```

- *Type:* *f64

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OneDashboardPageWidgetBulletOutputReference <a name="OneDashboardPageWidgetBulletOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

onedashboard.NewOneDashboardPageWidgetBulletOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OneDashboardPageWidgetBulletOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNrqlQuery` <a name="PutNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.putNrqlQuery"></a>

```go
func PutNrqlQuery(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.putNrqlQuery.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetHeight` <a name="ResetHeight" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.resetHeight"></a>

```go
func ResetHeight()
```

##### `ResetIgnoreTimeRange` <a name="ResetIgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.resetIgnoreTimeRange"></a>

```go
func ResetIgnoreTimeRange()
```

##### `ResetWidth` <a name="ResetWidth" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.resetWidth"></a>

```go
func ResetWidth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.nrqlQuery">NrqlQuery</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList">OneDashboardPageWidgetBulletNrqlQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.columnInput">ColumnInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.heightInput">HeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.ignoreTimeRangeInput">IgnoreTimeRangeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.limitInput">LimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.nrqlQueryInput">NrqlQueryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.rowInput">RowInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.widthInput">WidthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.column">Column</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.height">Height</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.ignoreTimeRange">IgnoreTimeRange</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.limit">Limit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.row">Row</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.width">Width</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NrqlQuery`<sup>Required</sup> <a name="NrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.nrqlQuery"></a>

```go
func NrqlQuery() OneDashboardPageWidgetBulletNrqlQueryList
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletNrqlQueryList">OneDashboardPageWidgetBulletNrqlQueryList</a>

---

##### `ColumnInput`<sup>Optional</sup> <a name="ColumnInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.columnInput"></a>

```go
func ColumnInput() *f64
```

- *Type:* *f64

---

##### `HeightInput`<sup>Optional</sup> <a name="HeightInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.heightInput"></a>

```go
func HeightInput() *f64
```

- *Type:* *f64

---

##### `IgnoreTimeRangeInput`<sup>Optional</sup> <a name="IgnoreTimeRangeInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.ignoreTimeRangeInput"></a>

```go
func IgnoreTimeRangeInput() interface{}
```

- *Type:* interface{}

---

##### `LimitInput`<sup>Optional</sup> <a name="LimitInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.limitInput"></a>

```go
func LimitInput() *f64
```

- *Type:* *f64

---

##### `NrqlQueryInput`<sup>Optional</sup> <a name="NrqlQueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.nrqlQueryInput"></a>

```go
func NrqlQueryInput() interface{}
```

- *Type:* interface{}

---

##### `RowInput`<sup>Optional</sup> <a name="RowInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.rowInput"></a>

```go
func RowInput() *f64
```

- *Type:* *f64

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `WidthInput`<sup>Optional</sup> <a name="WidthInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.widthInput"></a>

```go
func WidthInput() *f64
```

- *Type:* *f64

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.column"></a>

```go
func Column() *f64
```

- *Type:* *f64

---

##### `Height`<sup>Required</sup> <a name="Height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.height"></a>

```go
func Height() *f64
```

- *Type:* *f64

---

##### `IgnoreTimeRange`<sup>Required</sup> <a name="IgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.ignoreTimeRange"></a>

```go
func IgnoreTimeRange() interface{}
```

- *Type:* interface{}

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.limit"></a>

```go
func Limit() *f64
```

- *Type:* *f64

---

##### `Row`<sup>Required</sup> <a name="Row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.row"></a>

```go
func Row() *f64
```

- *Type:* *f64

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `Width`<sup>Required</sup> <a name="Width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.width"></a>

```go
func Width() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetBulletOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OneDashboardPageWidgetFunnelList <a name="OneDashboardPageWidgetFunnelList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

onedashboard.NewOneDashboardPageWidgetFunnelList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OneDashboardPageWidgetFunnelList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList.get"></a>

```go
func Get(index *f64) OneDashboardPageWidgetFunnelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OneDashboardPageWidgetFunnelNrqlQueryList <a name="OneDashboardPageWidgetFunnelNrqlQueryList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

onedashboard.NewOneDashboardPageWidgetFunnelNrqlQueryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OneDashboardPageWidgetFunnelNrqlQueryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList.get"></a>

```go
func Get(index *f64) OneDashboardPageWidgetFunnelNrqlQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OneDashboardPageWidgetFunnelNrqlQueryOutputReference <a name="OneDashboardPageWidgetFunnelNrqlQueryOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

onedashboard.NewOneDashboardPageWidgetFunnelNrqlQueryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OneDashboardPageWidgetFunnelNrqlQueryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.resetAccountId"></a>

```go
func ResetAccountId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.property.queryInput">QueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.property.accountId">AccountId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.property.accountIdInput"></a>

```go
func AccountIdInput() *f64
```

- *Type:* *f64

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.property.queryInput"></a>

```go
func QueryInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.property.accountId"></a>

```go
func AccountId() *f64
```

- *Type:* *f64

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OneDashboardPageWidgetFunnelOutputReference <a name="OneDashboardPageWidgetFunnelOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

onedashboard.NewOneDashboardPageWidgetFunnelOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OneDashboardPageWidgetFunnelOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNrqlQuery` <a name="PutNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.putNrqlQuery"></a>

```go
func PutNrqlQuery(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.putNrqlQuery.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetHeight` <a name="ResetHeight" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.resetHeight"></a>

```go
func ResetHeight()
```

##### `ResetIgnoreTimeRange` <a name="ResetIgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.resetIgnoreTimeRange"></a>

```go
func ResetIgnoreTimeRange()
```

##### `ResetWidth` <a name="ResetWidth" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.resetWidth"></a>

```go
func ResetWidth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.nrqlQuery">NrqlQuery</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList">OneDashboardPageWidgetFunnelNrqlQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.columnInput">ColumnInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.heightInput">HeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.ignoreTimeRangeInput">IgnoreTimeRangeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.nrqlQueryInput">NrqlQueryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.rowInput">RowInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.widthInput">WidthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.column">Column</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.height">Height</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.ignoreTimeRange">IgnoreTimeRange</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.row">Row</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.width">Width</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NrqlQuery`<sup>Required</sup> <a name="NrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.nrqlQuery"></a>

```go
func NrqlQuery() OneDashboardPageWidgetFunnelNrqlQueryList
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelNrqlQueryList">OneDashboardPageWidgetFunnelNrqlQueryList</a>

---

##### `ColumnInput`<sup>Optional</sup> <a name="ColumnInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.columnInput"></a>

```go
func ColumnInput() *f64
```

- *Type:* *f64

---

##### `HeightInput`<sup>Optional</sup> <a name="HeightInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.heightInput"></a>

```go
func HeightInput() *f64
```

- *Type:* *f64

---

##### `IgnoreTimeRangeInput`<sup>Optional</sup> <a name="IgnoreTimeRangeInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.ignoreTimeRangeInput"></a>

```go
func IgnoreTimeRangeInput() interface{}
```

- *Type:* interface{}

---

##### `NrqlQueryInput`<sup>Optional</sup> <a name="NrqlQueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.nrqlQueryInput"></a>

```go
func NrqlQueryInput() interface{}
```

- *Type:* interface{}

---

##### `RowInput`<sup>Optional</sup> <a name="RowInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.rowInput"></a>

```go
func RowInput() *f64
```

- *Type:* *f64

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `WidthInput`<sup>Optional</sup> <a name="WidthInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.widthInput"></a>

```go
func WidthInput() *f64
```

- *Type:* *f64

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.column"></a>

```go
func Column() *f64
```

- *Type:* *f64

---

##### `Height`<sup>Required</sup> <a name="Height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.height"></a>

```go
func Height() *f64
```

- *Type:* *f64

---

##### `IgnoreTimeRange`<sup>Required</sup> <a name="IgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.ignoreTimeRange"></a>

```go
func IgnoreTimeRange() interface{}
```

- *Type:* interface{}

---

##### `Row`<sup>Required</sup> <a name="Row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.row"></a>

```go
func Row() *f64
```

- *Type:* *f64

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `Width`<sup>Required</sup> <a name="Width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.width"></a>

```go
func Width() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetFunnelOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OneDashboardPageWidgetHeatmapList <a name="OneDashboardPageWidgetHeatmapList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

onedashboard.NewOneDashboardPageWidgetHeatmapList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OneDashboardPageWidgetHeatmapList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList.get"></a>

```go
func Get(index *f64) OneDashboardPageWidgetHeatmapOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OneDashboardPageWidgetHeatmapNrqlQueryList <a name="OneDashboardPageWidgetHeatmapNrqlQueryList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

onedashboard.NewOneDashboardPageWidgetHeatmapNrqlQueryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OneDashboardPageWidgetHeatmapNrqlQueryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList.get"></a>

```go
func Get(index *f64) OneDashboardPageWidgetHeatmapNrqlQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OneDashboardPageWidgetHeatmapNrqlQueryOutputReference <a name="OneDashboardPageWidgetHeatmapNrqlQueryOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

onedashboard.NewOneDashboardPageWidgetHeatmapNrqlQueryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OneDashboardPageWidgetHeatmapNrqlQueryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.resetAccountId"></a>

```go
func ResetAccountId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.property.queryInput">QueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.property.accountId">AccountId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.property.accountIdInput"></a>

```go
func AccountIdInput() *f64
```

- *Type:* *f64

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.property.queryInput"></a>

```go
func QueryInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.property.accountId"></a>

```go
func AccountId() *f64
```

- *Type:* *f64

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OneDashboardPageWidgetHeatmapOutputReference <a name="OneDashboardPageWidgetHeatmapOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

onedashboard.NewOneDashboardPageWidgetHeatmapOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OneDashboardPageWidgetHeatmapOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNrqlQuery` <a name="PutNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.putNrqlQuery"></a>

```go
func PutNrqlQuery(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.putNrqlQuery.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilterCurrentDashboard` <a name="ResetFilterCurrentDashboard" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.resetFilterCurrentDashboard"></a>

```go
func ResetFilterCurrentDashboard()
```

##### `ResetHeight` <a name="ResetHeight" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.resetHeight"></a>

```go
func ResetHeight()
```

##### `ResetIgnoreTimeRange` <a name="ResetIgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.resetIgnoreTimeRange"></a>

```go
func ResetIgnoreTimeRange()
```

##### `ResetLinkedEntityGuids` <a name="ResetLinkedEntityGuids" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.resetLinkedEntityGuids"></a>

```go
func ResetLinkedEntityGuids()
```

##### `ResetWidth` <a name="ResetWidth" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.resetWidth"></a>

```go
func ResetWidth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.nrqlQuery">NrqlQuery</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList">OneDashboardPageWidgetHeatmapNrqlQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.columnInput">ColumnInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.filterCurrentDashboardInput">FilterCurrentDashboardInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.heightInput">HeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.ignoreTimeRangeInput">IgnoreTimeRangeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.linkedEntityGuidsInput">LinkedEntityGuidsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.nrqlQueryInput">NrqlQueryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.rowInput">RowInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.widthInput">WidthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.column">Column</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.filterCurrentDashboard">FilterCurrentDashboard</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.height">Height</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.ignoreTimeRange">IgnoreTimeRange</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.linkedEntityGuids">LinkedEntityGuids</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.row">Row</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.width">Width</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NrqlQuery`<sup>Required</sup> <a name="NrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.nrqlQuery"></a>

```go
func NrqlQuery() OneDashboardPageWidgetHeatmapNrqlQueryList
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapNrqlQueryList">OneDashboardPageWidgetHeatmapNrqlQueryList</a>

---

##### `ColumnInput`<sup>Optional</sup> <a name="ColumnInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.columnInput"></a>

```go
func ColumnInput() *f64
```

- *Type:* *f64

---

##### `FilterCurrentDashboardInput`<sup>Optional</sup> <a name="FilterCurrentDashboardInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.filterCurrentDashboardInput"></a>

```go
func FilterCurrentDashboardInput() interface{}
```

- *Type:* interface{}

---

##### `HeightInput`<sup>Optional</sup> <a name="HeightInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.heightInput"></a>

```go
func HeightInput() *f64
```

- *Type:* *f64

---

##### `IgnoreTimeRangeInput`<sup>Optional</sup> <a name="IgnoreTimeRangeInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.ignoreTimeRangeInput"></a>

```go
func IgnoreTimeRangeInput() interface{}
```

- *Type:* interface{}

---

##### `LinkedEntityGuidsInput`<sup>Optional</sup> <a name="LinkedEntityGuidsInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.linkedEntityGuidsInput"></a>

```go
func LinkedEntityGuidsInput() *[]*string
```

- *Type:* *[]*string

---

##### `NrqlQueryInput`<sup>Optional</sup> <a name="NrqlQueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.nrqlQueryInput"></a>

```go
func NrqlQueryInput() interface{}
```

- *Type:* interface{}

---

##### `RowInput`<sup>Optional</sup> <a name="RowInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.rowInput"></a>

```go
func RowInput() *f64
```

- *Type:* *f64

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `WidthInput`<sup>Optional</sup> <a name="WidthInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.widthInput"></a>

```go
func WidthInput() *f64
```

- *Type:* *f64

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.column"></a>

```go
func Column() *f64
```

- *Type:* *f64

---

##### `FilterCurrentDashboard`<sup>Required</sup> <a name="FilterCurrentDashboard" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.filterCurrentDashboard"></a>

```go
func FilterCurrentDashboard() interface{}
```

- *Type:* interface{}

---

##### `Height`<sup>Required</sup> <a name="Height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.height"></a>

```go
func Height() *f64
```

- *Type:* *f64

---

##### `IgnoreTimeRange`<sup>Required</sup> <a name="IgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.ignoreTimeRange"></a>

```go
func IgnoreTimeRange() interface{}
```

- *Type:* interface{}

---

##### `LinkedEntityGuids`<sup>Required</sup> <a name="LinkedEntityGuids" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.linkedEntityGuids"></a>

```go
func LinkedEntityGuids() *[]*string
```

- *Type:* *[]*string

---

##### `Row`<sup>Required</sup> <a name="Row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.row"></a>

```go
func Row() *f64
```

- *Type:* *f64

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `Width`<sup>Required</sup> <a name="Width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.width"></a>

```go
func Width() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHeatmapOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OneDashboardPageWidgetHistogramList <a name="OneDashboardPageWidgetHistogramList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

onedashboard.NewOneDashboardPageWidgetHistogramList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OneDashboardPageWidgetHistogramList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList.get"></a>

```go
func Get(index *f64) OneDashboardPageWidgetHistogramOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OneDashboardPageWidgetHistogramNrqlQueryList <a name="OneDashboardPageWidgetHistogramNrqlQueryList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

onedashboard.NewOneDashboardPageWidgetHistogramNrqlQueryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OneDashboardPageWidgetHistogramNrqlQueryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList.get"></a>

```go
func Get(index *f64) OneDashboardPageWidgetHistogramNrqlQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OneDashboardPageWidgetHistogramNrqlQueryOutputReference <a name="OneDashboardPageWidgetHistogramNrqlQueryOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

onedashboard.NewOneDashboardPageWidgetHistogramNrqlQueryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OneDashboardPageWidgetHistogramNrqlQueryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.resetAccountId"></a>

```go
func ResetAccountId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.property.queryInput">QueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.property.accountId">AccountId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.property.accountIdInput"></a>

```go
func AccountIdInput() *f64
```

- *Type:* *f64

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.property.queryInput"></a>

```go
func QueryInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.property.accountId"></a>

```go
func AccountId() *f64
```

- *Type:* *f64

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OneDashboardPageWidgetHistogramOutputReference <a name="OneDashboardPageWidgetHistogramOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

onedashboard.NewOneDashboardPageWidgetHistogramOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OneDashboardPageWidgetHistogramOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNrqlQuery` <a name="PutNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.putNrqlQuery"></a>

```go
func PutNrqlQuery(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.putNrqlQuery.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetHeight` <a name="ResetHeight" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.resetHeight"></a>

```go
func ResetHeight()
```

##### `ResetIgnoreTimeRange` <a name="ResetIgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.resetIgnoreTimeRange"></a>

```go
func ResetIgnoreTimeRange()
```

##### `ResetWidth` <a name="ResetWidth" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.resetWidth"></a>

```go
func ResetWidth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.nrqlQuery">NrqlQuery</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList">OneDashboardPageWidgetHistogramNrqlQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.columnInput">ColumnInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.heightInput">HeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.ignoreTimeRangeInput">IgnoreTimeRangeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.nrqlQueryInput">NrqlQueryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.rowInput">RowInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.widthInput">WidthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.column">Column</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.height">Height</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.ignoreTimeRange">IgnoreTimeRange</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.row">Row</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.width">Width</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NrqlQuery`<sup>Required</sup> <a name="NrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.nrqlQuery"></a>

```go
func NrqlQuery() OneDashboardPageWidgetHistogramNrqlQueryList
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramNrqlQueryList">OneDashboardPageWidgetHistogramNrqlQueryList</a>

---

##### `ColumnInput`<sup>Optional</sup> <a name="ColumnInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.columnInput"></a>

```go
func ColumnInput() *f64
```

- *Type:* *f64

---

##### `HeightInput`<sup>Optional</sup> <a name="HeightInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.heightInput"></a>

```go
func HeightInput() *f64
```

- *Type:* *f64

---

##### `IgnoreTimeRangeInput`<sup>Optional</sup> <a name="IgnoreTimeRangeInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.ignoreTimeRangeInput"></a>

```go
func IgnoreTimeRangeInput() interface{}
```

- *Type:* interface{}

---

##### `NrqlQueryInput`<sup>Optional</sup> <a name="NrqlQueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.nrqlQueryInput"></a>

```go
func NrqlQueryInput() interface{}
```

- *Type:* interface{}

---

##### `RowInput`<sup>Optional</sup> <a name="RowInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.rowInput"></a>

```go
func RowInput() *f64
```

- *Type:* *f64

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `WidthInput`<sup>Optional</sup> <a name="WidthInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.widthInput"></a>

```go
func WidthInput() *f64
```

- *Type:* *f64

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.column"></a>

```go
func Column() *f64
```

- *Type:* *f64

---

##### `Height`<sup>Required</sup> <a name="Height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.height"></a>

```go
func Height() *f64
```

- *Type:* *f64

---

##### `IgnoreTimeRange`<sup>Required</sup> <a name="IgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.ignoreTimeRange"></a>

```go
func IgnoreTimeRange() interface{}
```

- *Type:* interface{}

---

##### `Row`<sup>Required</sup> <a name="Row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.row"></a>

```go
func Row() *f64
```

- *Type:* *f64

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `Width`<sup>Required</sup> <a name="Width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.width"></a>

```go
func Width() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetHistogramOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OneDashboardPageWidgetJsonList <a name="OneDashboardPageWidgetJsonList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

onedashboard.NewOneDashboardPageWidgetJsonList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OneDashboardPageWidgetJsonList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList.get"></a>

```go
func Get(index *f64) OneDashboardPageWidgetJsonOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OneDashboardPageWidgetJsonNrqlQueryList <a name="OneDashboardPageWidgetJsonNrqlQueryList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

onedashboard.NewOneDashboardPageWidgetJsonNrqlQueryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OneDashboardPageWidgetJsonNrqlQueryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList.get"></a>

```go
func Get(index *f64) OneDashboardPageWidgetJsonNrqlQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OneDashboardPageWidgetJsonNrqlQueryOutputReference <a name="OneDashboardPageWidgetJsonNrqlQueryOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

onedashboard.NewOneDashboardPageWidgetJsonNrqlQueryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OneDashboardPageWidgetJsonNrqlQueryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.resetAccountId"></a>

```go
func ResetAccountId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.property.queryInput">QueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.property.accountId">AccountId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.property.accountIdInput"></a>

```go
func AccountIdInput() *f64
```

- *Type:* *f64

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.property.queryInput"></a>

```go
func QueryInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.property.accountId"></a>

```go
func AccountId() *f64
```

- *Type:* *f64

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OneDashboardPageWidgetJsonOutputReference <a name="OneDashboardPageWidgetJsonOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

onedashboard.NewOneDashboardPageWidgetJsonOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OneDashboardPageWidgetJsonOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNrqlQuery` <a name="PutNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.putNrqlQuery"></a>

```go
func PutNrqlQuery(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.putNrqlQuery.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetHeight` <a name="ResetHeight" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.resetHeight"></a>

```go
func ResetHeight()
```

##### `ResetIgnoreTimeRange` <a name="ResetIgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.resetIgnoreTimeRange"></a>

```go
func ResetIgnoreTimeRange()
```

##### `ResetWidth` <a name="ResetWidth" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.resetWidth"></a>

```go
func ResetWidth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.nrqlQuery">NrqlQuery</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList">OneDashboardPageWidgetJsonNrqlQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.columnInput">ColumnInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.heightInput">HeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.ignoreTimeRangeInput">IgnoreTimeRangeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.nrqlQueryInput">NrqlQueryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.rowInput">RowInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.widthInput">WidthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.column">Column</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.height">Height</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.ignoreTimeRange">IgnoreTimeRange</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.row">Row</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.width">Width</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NrqlQuery`<sup>Required</sup> <a name="NrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.nrqlQuery"></a>

```go
func NrqlQuery() OneDashboardPageWidgetJsonNrqlQueryList
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonNrqlQueryList">OneDashboardPageWidgetJsonNrqlQueryList</a>

---

##### `ColumnInput`<sup>Optional</sup> <a name="ColumnInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.columnInput"></a>

```go
func ColumnInput() *f64
```

- *Type:* *f64

---

##### `HeightInput`<sup>Optional</sup> <a name="HeightInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.heightInput"></a>

```go
func HeightInput() *f64
```

- *Type:* *f64

---

##### `IgnoreTimeRangeInput`<sup>Optional</sup> <a name="IgnoreTimeRangeInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.ignoreTimeRangeInput"></a>

```go
func IgnoreTimeRangeInput() interface{}
```

- *Type:* interface{}

---

##### `NrqlQueryInput`<sup>Optional</sup> <a name="NrqlQueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.nrqlQueryInput"></a>

```go
func NrqlQueryInput() interface{}
```

- *Type:* interface{}

---

##### `RowInput`<sup>Optional</sup> <a name="RowInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.rowInput"></a>

```go
func RowInput() *f64
```

- *Type:* *f64

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `WidthInput`<sup>Optional</sup> <a name="WidthInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.widthInput"></a>

```go
func WidthInput() *f64
```

- *Type:* *f64

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.column"></a>

```go
func Column() *f64
```

- *Type:* *f64

---

##### `Height`<sup>Required</sup> <a name="Height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.height"></a>

```go
func Height() *f64
```

- *Type:* *f64

---

##### `IgnoreTimeRange`<sup>Required</sup> <a name="IgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.ignoreTimeRange"></a>

```go
func IgnoreTimeRange() interface{}
```

- *Type:* interface{}

---

##### `Row`<sup>Required</sup> <a name="Row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.row"></a>

```go
func Row() *f64
```

- *Type:* *f64

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `Width`<sup>Required</sup> <a name="Width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.width"></a>

```go
func Width() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetJsonOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OneDashboardPageWidgetLineList <a name="OneDashboardPageWidgetLineList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

onedashboard.NewOneDashboardPageWidgetLineList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OneDashboardPageWidgetLineList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList.get"></a>

```go
func Get(index *f64) OneDashboardPageWidgetLineOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OneDashboardPageWidgetLineNrqlQueryList <a name="OneDashboardPageWidgetLineNrqlQueryList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

onedashboard.NewOneDashboardPageWidgetLineNrqlQueryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OneDashboardPageWidgetLineNrqlQueryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList.get"></a>

```go
func Get(index *f64) OneDashboardPageWidgetLineNrqlQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OneDashboardPageWidgetLineNrqlQueryOutputReference <a name="OneDashboardPageWidgetLineNrqlQueryOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

onedashboard.NewOneDashboardPageWidgetLineNrqlQueryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OneDashboardPageWidgetLineNrqlQueryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.resetAccountId"></a>

```go
func ResetAccountId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.property.queryInput">QueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.property.accountId">AccountId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.property.accountIdInput"></a>

```go
func AccountIdInput() *f64
```

- *Type:* *f64

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.property.queryInput"></a>

```go
func QueryInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.property.accountId"></a>

```go
func AccountId() *f64
```

- *Type:* *f64

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OneDashboardPageWidgetLineOutputReference <a name="OneDashboardPageWidgetLineOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

onedashboard.NewOneDashboardPageWidgetLineOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OneDashboardPageWidgetLineOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNrqlQuery` <a name="PutNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.putNrqlQuery"></a>

```go
func PutNrqlQuery(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.putNrqlQuery.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetHeight` <a name="ResetHeight" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.resetHeight"></a>

```go
func ResetHeight()
```

##### `ResetIgnoreTimeRange` <a name="ResetIgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.resetIgnoreTimeRange"></a>

```go
func ResetIgnoreTimeRange()
```

##### `ResetWidth` <a name="ResetWidth" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.resetWidth"></a>

```go
func ResetWidth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.nrqlQuery">NrqlQuery</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList">OneDashboardPageWidgetLineNrqlQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.columnInput">ColumnInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.heightInput">HeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.ignoreTimeRangeInput">IgnoreTimeRangeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.nrqlQueryInput">NrqlQueryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.rowInput">RowInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.widthInput">WidthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.column">Column</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.height">Height</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.ignoreTimeRange">IgnoreTimeRange</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.row">Row</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.width">Width</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NrqlQuery`<sup>Required</sup> <a name="NrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.nrqlQuery"></a>

```go
func NrqlQuery() OneDashboardPageWidgetLineNrqlQueryList
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineNrqlQueryList">OneDashboardPageWidgetLineNrqlQueryList</a>

---

##### `ColumnInput`<sup>Optional</sup> <a name="ColumnInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.columnInput"></a>

```go
func ColumnInput() *f64
```

- *Type:* *f64

---

##### `HeightInput`<sup>Optional</sup> <a name="HeightInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.heightInput"></a>

```go
func HeightInput() *f64
```

- *Type:* *f64

---

##### `IgnoreTimeRangeInput`<sup>Optional</sup> <a name="IgnoreTimeRangeInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.ignoreTimeRangeInput"></a>

```go
func IgnoreTimeRangeInput() interface{}
```

- *Type:* interface{}

---

##### `NrqlQueryInput`<sup>Optional</sup> <a name="NrqlQueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.nrqlQueryInput"></a>

```go
func NrqlQueryInput() interface{}
```

- *Type:* interface{}

---

##### `RowInput`<sup>Optional</sup> <a name="RowInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.rowInput"></a>

```go
func RowInput() *f64
```

- *Type:* *f64

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `WidthInput`<sup>Optional</sup> <a name="WidthInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.widthInput"></a>

```go
func WidthInput() *f64
```

- *Type:* *f64

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.column"></a>

```go
func Column() *f64
```

- *Type:* *f64

---

##### `Height`<sup>Required</sup> <a name="Height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.height"></a>

```go
func Height() *f64
```

- *Type:* *f64

---

##### `IgnoreTimeRange`<sup>Required</sup> <a name="IgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.ignoreTimeRange"></a>

```go
func IgnoreTimeRange() interface{}
```

- *Type:* interface{}

---

##### `Row`<sup>Required</sup> <a name="Row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.row"></a>

```go
func Row() *f64
```

- *Type:* *f64

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `Width`<sup>Required</sup> <a name="Width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.width"></a>

```go
func Width() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLineOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OneDashboardPageWidgetLogTableList <a name="OneDashboardPageWidgetLogTableList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

onedashboard.NewOneDashboardPageWidgetLogTableList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OneDashboardPageWidgetLogTableList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList.get"></a>

```go
func Get(index *f64) OneDashboardPageWidgetLogTableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OneDashboardPageWidgetLogTableNrqlQueryList <a name="OneDashboardPageWidgetLogTableNrqlQueryList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

onedashboard.NewOneDashboardPageWidgetLogTableNrqlQueryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OneDashboardPageWidgetLogTableNrqlQueryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList.get"></a>

```go
func Get(index *f64) OneDashboardPageWidgetLogTableNrqlQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OneDashboardPageWidgetLogTableNrqlQueryOutputReference <a name="OneDashboardPageWidgetLogTableNrqlQueryOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

onedashboard.NewOneDashboardPageWidgetLogTableNrqlQueryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OneDashboardPageWidgetLogTableNrqlQueryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.resetAccountId"></a>

```go
func ResetAccountId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.property.queryInput">QueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.property.accountId">AccountId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.property.accountIdInput"></a>

```go
func AccountIdInput() *f64
```

- *Type:* *f64

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.property.queryInput"></a>

```go
func QueryInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.property.accountId"></a>

```go
func AccountId() *f64
```

- *Type:* *f64

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OneDashboardPageWidgetLogTableOutputReference <a name="OneDashboardPageWidgetLogTableOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

onedashboard.NewOneDashboardPageWidgetLogTableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OneDashboardPageWidgetLogTableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNrqlQuery` <a name="PutNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.putNrqlQuery"></a>

```go
func PutNrqlQuery(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.putNrqlQuery.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetHeight` <a name="ResetHeight" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.resetHeight"></a>

```go
func ResetHeight()
```

##### `ResetIgnoreTimeRange` <a name="ResetIgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.resetIgnoreTimeRange"></a>

```go
func ResetIgnoreTimeRange()
```

##### `ResetWidth` <a name="ResetWidth" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.resetWidth"></a>

```go
func ResetWidth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.nrqlQuery">NrqlQuery</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList">OneDashboardPageWidgetLogTableNrqlQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.columnInput">ColumnInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.heightInput">HeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.ignoreTimeRangeInput">IgnoreTimeRangeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.nrqlQueryInput">NrqlQueryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.rowInput">RowInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.widthInput">WidthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.column">Column</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.height">Height</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.ignoreTimeRange">IgnoreTimeRange</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.row">Row</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.width">Width</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NrqlQuery`<sup>Required</sup> <a name="NrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.nrqlQuery"></a>

```go
func NrqlQuery() OneDashboardPageWidgetLogTableNrqlQueryList
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableNrqlQueryList">OneDashboardPageWidgetLogTableNrqlQueryList</a>

---

##### `ColumnInput`<sup>Optional</sup> <a name="ColumnInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.columnInput"></a>

```go
func ColumnInput() *f64
```

- *Type:* *f64

---

##### `HeightInput`<sup>Optional</sup> <a name="HeightInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.heightInput"></a>

```go
func HeightInput() *f64
```

- *Type:* *f64

---

##### `IgnoreTimeRangeInput`<sup>Optional</sup> <a name="IgnoreTimeRangeInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.ignoreTimeRangeInput"></a>

```go
func IgnoreTimeRangeInput() interface{}
```

- *Type:* interface{}

---

##### `NrqlQueryInput`<sup>Optional</sup> <a name="NrqlQueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.nrqlQueryInput"></a>

```go
func NrqlQueryInput() interface{}
```

- *Type:* interface{}

---

##### `RowInput`<sup>Optional</sup> <a name="RowInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.rowInput"></a>

```go
func RowInput() *f64
```

- *Type:* *f64

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `WidthInput`<sup>Optional</sup> <a name="WidthInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.widthInput"></a>

```go
func WidthInput() *f64
```

- *Type:* *f64

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.column"></a>

```go
func Column() *f64
```

- *Type:* *f64

---

##### `Height`<sup>Required</sup> <a name="Height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.height"></a>

```go
func Height() *f64
```

- *Type:* *f64

---

##### `IgnoreTimeRange`<sup>Required</sup> <a name="IgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.ignoreTimeRange"></a>

```go
func IgnoreTimeRange() interface{}
```

- *Type:* interface{}

---

##### `Row`<sup>Required</sup> <a name="Row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.row"></a>

```go
func Row() *f64
```

- *Type:* *f64

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `Width`<sup>Required</sup> <a name="Width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.width"></a>

```go
func Width() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetLogTableOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OneDashboardPageWidgetMarkdownList <a name="OneDashboardPageWidgetMarkdownList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

onedashboard.NewOneDashboardPageWidgetMarkdownList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OneDashboardPageWidgetMarkdownList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList.get"></a>

```go
func Get(index *f64) OneDashboardPageWidgetMarkdownOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OneDashboardPageWidgetMarkdownOutputReference <a name="OneDashboardPageWidgetMarkdownOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

onedashboard.NewOneDashboardPageWidgetMarkdownOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OneDashboardPageWidgetMarkdownOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHeight` <a name="ResetHeight" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.resetHeight"></a>

```go
func ResetHeight()
```

##### `ResetIgnoreTimeRange` <a name="ResetIgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.resetIgnoreTimeRange"></a>

```go
func ResetIgnoreTimeRange()
```

##### `ResetText` <a name="ResetText" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.resetText"></a>

```go
func ResetText()
```

##### `ResetWidth` <a name="ResetWidth" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.resetWidth"></a>

```go
func ResetWidth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.columnInput">ColumnInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.heightInput">HeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.ignoreTimeRangeInput">IgnoreTimeRangeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.rowInput">RowInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.textInput">TextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.widthInput">WidthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.column">Column</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.height">Height</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.ignoreTimeRange">IgnoreTimeRange</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.row">Row</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.text">Text</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.width">Width</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ColumnInput`<sup>Optional</sup> <a name="ColumnInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.columnInput"></a>

```go
func ColumnInput() *f64
```

- *Type:* *f64

---

##### `HeightInput`<sup>Optional</sup> <a name="HeightInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.heightInput"></a>

```go
func HeightInput() *f64
```

- *Type:* *f64

---

##### `IgnoreTimeRangeInput`<sup>Optional</sup> <a name="IgnoreTimeRangeInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.ignoreTimeRangeInput"></a>

```go
func IgnoreTimeRangeInput() interface{}
```

- *Type:* interface{}

---

##### `RowInput`<sup>Optional</sup> <a name="RowInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.rowInput"></a>

```go
func RowInput() *f64
```

- *Type:* *f64

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.textInput"></a>

```go
func TextInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `WidthInput`<sup>Optional</sup> <a name="WidthInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.widthInput"></a>

```go
func WidthInput() *f64
```

- *Type:* *f64

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.column"></a>

```go
func Column() *f64
```

- *Type:* *f64

---

##### `Height`<sup>Required</sup> <a name="Height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.height"></a>

```go
func Height() *f64
```

- *Type:* *f64

---

##### `IgnoreTimeRange`<sup>Required</sup> <a name="IgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.ignoreTimeRange"></a>

```go
func IgnoreTimeRange() interface{}
```

- *Type:* interface{}

---

##### `Row`<sup>Required</sup> <a name="Row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.row"></a>

```go
func Row() *f64
```

- *Type:* *f64

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.text"></a>

```go
func Text() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `Width`<sup>Required</sup> <a name="Width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.width"></a>

```go
func Width() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetMarkdownOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OneDashboardPageWidgetPieList <a name="OneDashboardPageWidgetPieList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

onedashboard.NewOneDashboardPageWidgetPieList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OneDashboardPageWidgetPieList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList.get"></a>

```go
func Get(index *f64) OneDashboardPageWidgetPieOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OneDashboardPageWidgetPieNrqlQueryList <a name="OneDashboardPageWidgetPieNrqlQueryList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

onedashboard.NewOneDashboardPageWidgetPieNrqlQueryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OneDashboardPageWidgetPieNrqlQueryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList.get"></a>

```go
func Get(index *f64) OneDashboardPageWidgetPieNrqlQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OneDashboardPageWidgetPieNrqlQueryOutputReference <a name="OneDashboardPageWidgetPieNrqlQueryOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

onedashboard.NewOneDashboardPageWidgetPieNrqlQueryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OneDashboardPageWidgetPieNrqlQueryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.resetAccountId"></a>

```go
func ResetAccountId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.property.queryInput">QueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.property.accountId">AccountId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.property.accountIdInput"></a>

```go
func AccountIdInput() *f64
```

- *Type:* *f64

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.property.queryInput"></a>

```go
func QueryInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.property.accountId"></a>

```go
func AccountId() *f64
```

- *Type:* *f64

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OneDashboardPageWidgetPieOutputReference <a name="OneDashboardPageWidgetPieOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

onedashboard.NewOneDashboardPageWidgetPieOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OneDashboardPageWidgetPieOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNrqlQuery` <a name="PutNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.putNrqlQuery"></a>

```go
func PutNrqlQuery(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.putNrqlQuery.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilterCurrentDashboard` <a name="ResetFilterCurrentDashboard" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.resetFilterCurrentDashboard"></a>

```go
func ResetFilterCurrentDashboard()
```

##### `ResetHeight` <a name="ResetHeight" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.resetHeight"></a>

```go
func ResetHeight()
```

##### `ResetIgnoreTimeRange` <a name="ResetIgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.resetIgnoreTimeRange"></a>

```go
func ResetIgnoreTimeRange()
```

##### `ResetLinkedEntityGuids` <a name="ResetLinkedEntityGuids" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.resetLinkedEntityGuids"></a>

```go
func ResetLinkedEntityGuids()
```

##### `ResetWidth` <a name="ResetWidth" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.resetWidth"></a>

```go
func ResetWidth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.nrqlQuery">NrqlQuery</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList">OneDashboardPageWidgetPieNrqlQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.columnInput">ColumnInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.filterCurrentDashboardInput">FilterCurrentDashboardInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.heightInput">HeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.ignoreTimeRangeInput">IgnoreTimeRangeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.linkedEntityGuidsInput">LinkedEntityGuidsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.nrqlQueryInput">NrqlQueryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.rowInput">RowInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.widthInput">WidthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.column">Column</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.filterCurrentDashboard">FilterCurrentDashboard</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.height">Height</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.ignoreTimeRange">IgnoreTimeRange</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.linkedEntityGuids">LinkedEntityGuids</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.row">Row</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.width">Width</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NrqlQuery`<sup>Required</sup> <a name="NrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.nrqlQuery"></a>

```go
func NrqlQuery() OneDashboardPageWidgetPieNrqlQueryList
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieNrqlQueryList">OneDashboardPageWidgetPieNrqlQueryList</a>

---

##### `ColumnInput`<sup>Optional</sup> <a name="ColumnInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.columnInput"></a>

```go
func ColumnInput() *f64
```

- *Type:* *f64

---

##### `FilterCurrentDashboardInput`<sup>Optional</sup> <a name="FilterCurrentDashboardInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.filterCurrentDashboardInput"></a>

```go
func FilterCurrentDashboardInput() interface{}
```

- *Type:* interface{}

---

##### `HeightInput`<sup>Optional</sup> <a name="HeightInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.heightInput"></a>

```go
func HeightInput() *f64
```

- *Type:* *f64

---

##### `IgnoreTimeRangeInput`<sup>Optional</sup> <a name="IgnoreTimeRangeInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.ignoreTimeRangeInput"></a>

```go
func IgnoreTimeRangeInput() interface{}
```

- *Type:* interface{}

---

##### `LinkedEntityGuidsInput`<sup>Optional</sup> <a name="LinkedEntityGuidsInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.linkedEntityGuidsInput"></a>

```go
func LinkedEntityGuidsInput() *[]*string
```

- *Type:* *[]*string

---

##### `NrqlQueryInput`<sup>Optional</sup> <a name="NrqlQueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.nrqlQueryInput"></a>

```go
func NrqlQueryInput() interface{}
```

- *Type:* interface{}

---

##### `RowInput`<sup>Optional</sup> <a name="RowInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.rowInput"></a>

```go
func RowInput() *f64
```

- *Type:* *f64

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `WidthInput`<sup>Optional</sup> <a name="WidthInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.widthInput"></a>

```go
func WidthInput() *f64
```

- *Type:* *f64

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.column"></a>

```go
func Column() *f64
```

- *Type:* *f64

---

##### `FilterCurrentDashboard`<sup>Required</sup> <a name="FilterCurrentDashboard" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.filterCurrentDashboard"></a>

```go
func FilterCurrentDashboard() interface{}
```

- *Type:* interface{}

---

##### `Height`<sup>Required</sup> <a name="Height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.height"></a>

```go
func Height() *f64
```

- *Type:* *f64

---

##### `IgnoreTimeRange`<sup>Required</sup> <a name="IgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.ignoreTimeRange"></a>

```go
func IgnoreTimeRange() interface{}
```

- *Type:* interface{}

---

##### `LinkedEntityGuids`<sup>Required</sup> <a name="LinkedEntityGuids" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.linkedEntityGuids"></a>

```go
func LinkedEntityGuids() *[]*string
```

- *Type:* *[]*string

---

##### `Row`<sup>Required</sup> <a name="Row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.row"></a>

```go
func Row() *f64
```

- *Type:* *f64

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `Width`<sup>Required</sup> <a name="Width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.width"></a>

```go
func Width() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetPieOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OneDashboardPageWidgetStackedBarList <a name="OneDashboardPageWidgetStackedBarList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

onedashboard.NewOneDashboardPageWidgetStackedBarList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OneDashboardPageWidgetStackedBarList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList.get"></a>

```go
func Get(index *f64) OneDashboardPageWidgetStackedBarOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OneDashboardPageWidgetStackedBarNrqlQueryList <a name="OneDashboardPageWidgetStackedBarNrqlQueryList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

onedashboard.NewOneDashboardPageWidgetStackedBarNrqlQueryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OneDashboardPageWidgetStackedBarNrqlQueryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList.get"></a>

```go
func Get(index *f64) OneDashboardPageWidgetStackedBarNrqlQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OneDashboardPageWidgetStackedBarNrqlQueryOutputReference <a name="OneDashboardPageWidgetStackedBarNrqlQueryOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

onedashboard.NewOneDashboardPageWidgetStackedBarNrqlQueryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OneDashboardPageWidgetStackedBarNrqlQueryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.resetAccountId"></a>

```go
func ResetAccountId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.property.queryInput">QueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.property.accountId">AccountId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.property.accountIdInput"></a>

```go
func AccountIdInput() *f64
```

- *Type:* *f64

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.property.queryInput"></a>

```go
func QueryInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.property.accountId"></a>

```go
func AccountId() *f64
```

- *Type:* *f64

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OneDashboardPageWidgetStackedBarOutputReference <a name="OneDashboardPageWidgetStackedBarOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

onedashboard.NewOneDashboardPageWidgetStackedBarOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OneDashboardPageWidgetStackedBarOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNrqlQuery` <a name="PutNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.putNrqlQuery"></a>

```go
func PutNrqlQuery(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.putNrqlQuery.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetHeight` <a name="ResetHeight" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.resetHeight"></a>

```go
func ResetHeight()
```

##### `ResetIgnoreTimeRange` <a name="ResetIgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.resetIgnoreTimeRange"></a>

```go
func ResetIgnoreTimeRange()
```

##### `ResetWidth` <a name="ResetWidth" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.resetWidth"></a>

```go
func ResetWidth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.nrqlQuery">NrqlQuery</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList">OneDashboardPageWidgetStackedBarNrqlQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.columnInput">ColumnInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.heightInput">HeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.ignoreTimeRangeInput">IgnoreTimeRangeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.nrqlQueryInput">NrqlQueryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.rowInput">RowInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.widthInput">WidthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.column">Column</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.height">Height</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.ignoreTimeRange">IgnoreTimeRange</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.row">Row</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.width">Width</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NrqlQuery`<sup>Required</sup> <a name="NrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.nrqlQuery"></a>

```go
func NrqlQuery() OneDashboardPageWidgetStackedBarNrqlQueryList
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarNrqlQueryList">OneDashboardPageWidgetStackedBarNrqlQueryList</a>

---

##### `ColumnInput`<sup>Optional</sup> <a name="ColumnInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.columnInput"></a>

```go
func ColumnInput() *f64
```

- *Type:* *f64

---

##### `HeightInput`<sup>Optional</sup> <a name="HeightInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.heightInput"></a>

```go
func HeightInput() *f64
```

- *Type:* *f64

---

##### `IgnoreTimeRangeInput`<sup>Optional</sup> <a name="IgnoreTimeRangeInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.ignoreTimeRangeInput"></a>

```go
func IgnoreTimeRangeInput() interface{}
```

- *Type:* interface{}

---

##### `NrqlQueryInput`<sup>Optional</sup> <a name="NrqlQueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.nrqlQueryInput"></a>

```go
func NrqlQueryInput() interface{}
```

- *Type:* interface{}

---

##### `RowInput`<sup>Optional</sup> <a name="RowInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.rowInput"></a>

```go
func RowInput() *f64
```

- *Type:* *f64

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `WidthInput`<sup>Optional</sup> <a name="WidthInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.widthInput"></a>

```go
func WidthInput() *f64
```

- *Type:* *f64

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.column"></a>

```go
func Column() *f64
```

- *Type:* *f64

---

##### `Height`<sup>Required</sup> <a name="Height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.height"></a>

```go
func Height() *f64
```

- *Type:* *f64

---

##### `IgnoreTimeRange`<sup>Required</sup> <a name="IgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.ignoreTimeRange"></a>

```go
func IgnoreTimeRange() interface{}
```

- *Type:* interface{}

---

##### `Row`<sup>Required</sup> <a name="Row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.row"></a>

```go
func Row() *f64
```

- *Type:* *f64

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `Width`<sup>Required</sup> <a name="Width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.width"></a>

```go
func Width() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetStackedBarOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OneDashboardPageWidgetTableList <a name="OneDashboardPageWidgetTableList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

onedashboard.NewOneDashboardPageWidgetTableList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OneDashboardPageWidgetTableList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList.get"></a>

```go
func Get(index *f64) OneDashboardPageWidgetTableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OneDashboardPageWidgetTableNrqlQueryList <a name="OneDashboardPageWidgetTableNrqlQueryList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

onedashboard.NewOneDashboardPageWidgetTableNrqlQueryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OneDashboardPageWidgetTableNrqlQueryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList.get"></a>

```go
func Get(index *f64) OneDashboardPageWidgetTableNrqlQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OneDashboardPageWidgetTableNrqlQueryOutputReference <a name="OneDashboardPageWidgetTableNrqlQueryOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

onedashboard.NewOneDashboardPageWidgetTableNrqlQueryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OneDashboardPageWidgetTableNrqlQueryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.resetAccountId"></a>

```go
func ResetAccountId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.property.queryInput">QueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.property.accountId">AccountId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.property.accountIdInput"></a>

```go
func AccountIdInput() *f64
```

- *Type:* *f64

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.property.queryInput"></a>

```go
func QueryInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.property.accountId"></a>

```go
func AccountId() *f64
```

- *Type:* *f64

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OneDashboardPageWidgetTableOutputReference <a name="OneDashboardPageWidgetTableOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

onedashboard.NewOneDashboardPageWidgetTableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OneDashboardPageWidgetTableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNrqlQuery` <a name="PutNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.putNrqlQuery"></a>

```go
func PutNrqlQuery(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.putNrqlQuery.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilterCurrentDashboard` <a name="ResetFilterCurrentDashboard" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.resetFilterCurrentDashboard"></a>

```go
func ResetFilterCurrentDashboard()
```

##### `ResetHeight` <a name="ResetHeight" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.resetHeight"></a>

```go
func ResetHeight()
```

##### `ResetIgnoreTimeRange` <a name="ResetIgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.resetIgnoreTimeRange"></a>

```go
func ResetIgnoreTimeRange()
```

##### `ResetLinkedEntityGuids` <a name="ResetLinkedEntityGuids" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.resetLinkedEntityGuids"></a>

```go
func ResetLinkedEntityGuids()
```

##### `ResetWidth` <a name="ResetWidth" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.resetWidth"></a>

```go
func ResetWidth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.nrqlQuery">NrqlQuery</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList">OneDashboardPageWidgetTableNrqlQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.columnInput">ColumnInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.filterCurrentDashboardInput">FilterCurrentDashboardInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.heightInput">HeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.ignoreTimeRangeInput">IgnoreTimeRangeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.linkedEntityGuidsInput">LinkedEntityGuidsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.nrqlQueryInput">NrqlQueryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.rowInput">RowInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.widthInput">WidthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.column">Column</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.filterCurrentDashboard">FilterCurrentDashboard</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.height">Height</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.ignoreTimeRange">IgnoreTimeRange</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.linkedEntityGuids">LinkedEntityGuids</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.row">Row</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.width">Width</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NrqlQuery`<sup>Required</sup> <a name="NrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.nrqlQuery"></a>

```go
func NrqlQuery() OneDashboardPageWidgetTableNrqlQueryList
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableNrqlQueryList">OneDashboardPageWidgetTableNrqlQueryList</a>

---

##### `ColumnInput`<sup>Optional</sup> <a name="ColumnInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.columnInput"></a>

```go
func ColumnInput() *f64
```

- *Type:* *f64

---

##### `FilterCurrentDashboardInput`<sup>Optional</sup> <a name="FilterCurrentDashboardInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.filterCurrentDashboardInput"></a>

```go
func FilterCurrentDashboardInput() interface{}
```

- *Type:* interface{}

---

##### `HeightInput`<sup>Optional</sup> <a name="HeightInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.heightInput"></a>

```go
func HeightInput() *f64
```

- *Type:* *f64

---

##### `IgnoreTimeRangeInput`<sup>Optional</sup> <a name="IgnoreTimeRangeInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.ignoreTimeRangeInput"></a>

```go
func IgnoreTimeRangeInput() interface{}
```

- *Type:* interface{}

---

##### `LinkedEntityGuidsInput`<sup>Optional</sup> <a name="LinkedEntityGuidsInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.linkedEntityGuidsInput"></a>

```go
func LinkedEntityGuidsInput() *[]*string
```

- *Type:* *[]*string

---

##### `NrqlQueryInput`<sup>Optional</sup> <a name="NrqlQueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.nrqlQueryInput"></a>

```go
func NrqlQueryInput() interface{}
```

- *Type:* interface{}

---

##### `RowInput`<sup>Optional</sup> <a name="RowInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.rowInput"></a>

```go
func RowInput() *f64
```

- *Type:* *f64

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `WidthInput`<sup>Optional</sup> <a name="WidthInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.widthInput"></a>

```go
func WidthInput() *f64
```

- *Type:* *f64

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.column"></a>

```go
func Column() *f64
```

- *Type:* *f64

---

##### `FilterCurrentDashboard`<sup>Required</sup> <a name="FilterCurrentDashboard" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.filterCurrentDashboard"></a>

```go
func FilterCurrentDashboard() interface{}
```

- *Type:* interface{}

---

##### `Height`<sup>Required</sup> <a name="Height" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.height"></a>

```go
func Height() *f64
```

- *Type:* *f64

---

##### `IgnoreTimeRange`<sup>Required</sup> <a name="IgnoreTimeRange" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.ignoreTimeRange"></a>

```go
func IgnoreTimeRange() interface{}
```

- *Type:* interface{}

---

##### `LinkedEntityGuids`<sup>Required</sup> <a name="LinkedEntityGuids" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.linkedEntityGuids"></a>

```go
func LinkedEntityGuids() *[]*string
```

- *Type:* *[]*string

---

##### `Row`<sup>Required</sup> <a name="Row" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.row"></a>

```go
func Row() *f64
```

- *Type:* *f64

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `Width`<sup>Required</sup> <a name="Width" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.width"></a>

```go
func Width() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardPageWidgetTableOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OneDashboardVariableItemList <a name="OneDashboardVariableItemList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

onedashboard.NewOneDashboardVariableItemList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OneDashboardVariableItemList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList.get"></a>

```go
func Get(index *f64) OneDashboardVariableItemOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OneDashboardVariableItemOutputReference <a name="OneDashboardVariableItemOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

onedashboard.NewOneDashboardVariableItemOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OneDashboardVariableItemOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.resetTitle"></a>

```go
func ResetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OneDashboardVariableList <a name="OneDashboardVariableList" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

onedashboard.NewOneDashboardVariableList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OneDashboardVariableList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList.get"></a>

```go
func Get(index *f64) OneDashboardVariableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OneDashboardVariableNrqlQueryOutputReference <a name="OneDashboardVariableNrqlQueryOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

onedashboard.NewOneDashboardVariableNrqlQueryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OneDashboardVariableNrqlQueryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccountIds` <a name="ResetAccountIds" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.resetAccountIds"></a>

```go
func ResetAccountIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.property.accountIdsInput">AccountIdsInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.property.queryInput">QueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.property.accountIds">AccountIds</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQuery">OneDashboardVariableNrqlQuery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountIdsInput`<sup>Optional</sup> <a name="AccountIdsInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.property.accountIdsInput"></a>

```go
func AccountIdsInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.property.queryInput"></a>

```go
func QueryInput() *string
```

- *Type:* *string

---

##### `AccountIds`<sup>Required</sup> <a name="AccountIds" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.property.accountIds"></a>

```go
func AccountIds() *[]*f64
```

- *Type:* *[]*f64

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference.property.internalValue"></a>

```go
func InternalValue() OneDashboardVariableNrqlQuery
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQuery">OneDashboardVariableNrqlQuery</a>

---


### OneDashboardVariableOutputReference <a name="OneDashboardVariableOutputReference" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v6/onedashboard"

onedashboard.NewOneDashboardVariableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OneDashboardVariableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutItem` <a name="PutItem" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.putItem"></a>

```go
func PutItem(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.putItem.parameter.value"></a>

- *Type:* interface{}

---

##### `PutNrqlQuery` <a name="PutNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.putNrqlQuery"></a>

```go
func PutNrqlQuery(value OneDashboardVariableNrqlQuery)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.putNrqlQuery.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQuery">OneDashboardVariableNrqlQuery</a>

---

##### `ResetDefaultValues` <a name="ResetDefaultValues" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.resetDefaultValues"></a>

```go
func ResetDefaultValues()
```

##### `ResetIsMultiSelection` <a name="ResetIsMultiSelection" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.resetIsMultiSelection"></a>

```go
func ResetIsMultiSelection()
```

##### `ResetItem` <a name="ResetItem" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.resetItem"></a>

```go
func ResetItem()
```

##### `ResetNrqlQuery` <a name="ResetNrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.resetNrqlQuery"></a>

```go
func ResetNrqlQuery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.item">Item</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList">OneDashboardVariableItemList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.nrqlQuery">NrqlQuery</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference">OneDashboardVariableNrqlQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.defaultValuesInput">DefaultValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.isMultiSelectionInput">IsMultiSelectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.itemInput">ItemInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.nrqlQueryInput">NrqlQueryInput</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQuery">OneDashboardVariableNrqlQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.replacementStrategyInput">ReplacementStrategyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.defaultValues">DefaultValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.isMultiSelection">IsMultiSelection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.replacementStrategy">ReplacementStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Item`<sup>Required</sup> <a name="Item" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.item"></a>

```go
func Item() OneDashboardVariableItemList
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableItemList">OneDashboardVariableItemList</a>

---

##### `NrqlQuery`<sup>Required</sup> <a name="NrqlQuery" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.nrqlQuery"></a>

```go
func NrqlQuery() OneDashboardVariableNrqlQueryOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQueryOutputReference">OneDashboardVariableNrqlQueryOutputReference</a>

---

##### `DefaultValuesInput`<sup>Optional</sup> <a name="DefaultValuesInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.defaultValuesInput"></a>

```go
func DefaultValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IsMultiSelectionInput`<sup>Optional</sup> <a name="IsMultiSelectionInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.isMultiSelectionInput"></a>

```go
func IsMultiSelectionInput() interface{}
```

- *Type:* interface{}

---

##### `ItemInput`<sup>Optional</sup> <a name="ItemInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.itemInput"></a>

```go
func ItemInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NrqlQueryInput`<sup>Optional</sup> <a name="NrqlQueryInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.nrqlQueryInput"></a>

```go
func NrqlQueryInput() OneDashboardVariableNrqlQuery
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableNrqlQuery">OneDashboardVariableNrqlQuery</a>

---

##### `ReplacementStrategyInput`<sup>Optional</sup> <a name="ReplacementStrategyInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.replacementStrategyInput"></a>

```go
func ReplacementStrategyInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `DefaultValues`<sup>Required</sup> <a name="DefaultValues" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.defaultValues"></a>

```go
func DefaultValues() *[]*string
```

- *Type:* *[]*string

---

##### `IsMultiSelection`<sup>Required</sup> <a name="IsMultiSelection" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.isMultiSelection"></a>

```go
func IsMultiSelection() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ReplacementStrategy`<sup>Required</sup> <a name="ReplacementStrategy" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.replacementStrategy"></a>

```go
func ReplacementStrategy() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboard.OneDashboardVariableOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



