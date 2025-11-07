# `dataNewrelicUser` Submodule <a name="`dataNewrelicUser` Submodule" id="@cdktf/provider-newrelic.dataNewrelicUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataNewrelicUser <a name="DataNewrelicUser" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/data-sources/user newrelic_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/datanewrelicuser"

datanewrelicuser.NewDataNewrelicUser(scope Construct, id *string, config DataNewrelicUserConfig) DataNewrelicUser
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUserConfig">DataNewrelicUserConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUserConfig">DataNewrelicUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.resetEmailId">ResetEmailId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.resetName">ResetName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetEmailId` <a name="ResetEmailId" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.resetEmailId"></a>

```go
func ResetEmailId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.resetName"></a>

```go
func ResetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataNewrelicUser resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/datanewrelicuser"

datanewrelicuser.DataNewrelicUser_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/datanewrelicuser"

datanewrelicuser.DataNewrelicUser_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/datanewrelicuser"

datanewrelicuser.DataNewrelicUser_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/datanewrelicuser"

datanewrelicuser.DataNewrelicUser_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataNewrelicUser resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataNewrelicUser to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataNewrelicUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/data-sources/user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataNewrelicUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.property.authenticationDomainIdInput">AuthenticationDomainIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.property.emailIdInput">EmailIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.property.authenticationDomainId">AuthenticationDomainId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.property.emailId">EmailId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `AuthenticationDomainIdInput`<sup>Optional</sup> <a name="AuthenticationDomainIdInput" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.property.authenticationDomainIdInput"></a>

```go
func AuthenticationDomainIdInput() *string
```

- *Type:* *string

---

##### `EmailIdInput`<sup>Optional</sup> <a name="EmailIdInput" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.property.emailIdInput"></a>

```go
func EmailIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `AuthenticationDomainId`<sup>Required</sup> <a name="AuthenticationDomainId" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.property.authenticationDomainId"></a>

```go
func AuthenticationDomainId() *string
```

- *Type:* *string

---

##### `EmailId`<sup>Required</sup> <a name="EmailId" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.property.emailId"></a>

```go
func EmailId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUser.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataNewrelicUserConfig <a name="DataNewrelicUserConfig" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUserConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/datanewrelicuser"

&datanewrelicuser.DataNewrelicUserConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AuthenticationDomainId: *string,
	EmailId: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUserConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUserConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUserConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUserConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUserConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUserConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUserConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUserConfig.property.authenticationDomainId">AuthenticationDomainId</a></code> | <code>*string</code> | The ID of the Authentication Domain the user being queried would belong to. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUserConfig.property.emailId">EmailId</a></code> | <code>*string</code> | The email ID of the user to be queried. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUserConfig.property.name">Name</a></code> | <code>*string</code> | The name of the user to be queried. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUserConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUserConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUserConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUserConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUserConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUserConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUserConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AuthenticationDomainId`<sup>Required</sup> <a name="AuthenticationDomainId" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUserConfig.property.authenticationDomainId"></a>

```go
AuthenticationDomainId *string
```

- *Type:* *string

The ID of the Authentication Domain the user being queried would belong to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/data-sources/user#authentication_domain_id DataNewrelicUser#authentication_domain_id}

---

##### `EmailId`<sup>Optional</sup> <a name="EmailId" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUserConfig.property.emailId"></a>

```go
EmailId *string
```

- *Type:* *string

The email ID of the user to be queried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/data-sources/user#email_id DataNewrelicUser#email_id}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-newrelic.dataNewrelicUser.DataNewrelicUserConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the user to be queried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/data-sources/user#name DataNewrelicUser#name}

---



