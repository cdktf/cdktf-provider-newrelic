# `dataNewrelicCloudAccount` Submodule <a name="`dataNewrelicCloudAccount` Submodule" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataNewrelicCloudAccount <a name="DataNewrelicCloudAccount" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/data-sources/cloud_account newrelic_cloud_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/datanewreliccloudaccount"

datanewreliccloudaccount.NewDataNewrelicCloudAccount(scope Construct, id *string, config DataNewrelicCloudAccountConfig) DataNewrelicCloudAccount
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccountConfig">DataNewrelicCloudAccountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccountConfig">DataNewrelicCloudAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataNewrelicCloudAccount resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/datanewreliccloudaccount"

datanewreliccloudaccount.DataNewrelicCloudAccount_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/datanewreliccloudaccount"

datanewreliccloudaccount.DataNewrelicCloudAccount_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/datanewreliccloudaccount"

datanewreliccloudaccount.DataNewrelicCloudAccount_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/datanewreliccloudaccount"

datanewreliccloudaccount.DataNewrelicCloudAccount_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataNewrelicCloudAccount resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataNewrelicCloudAccount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataNewrelicCloudAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/data-sources/cloud_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataNewrelicCloudAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.property.accountIdInput">AccountIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.property.cloudProviderInput">CloudProviderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.property.accountId">AccountId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.property.cloudProvider">CloudProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.property.accountIdInput"></a>

```go
func AccountIdInput() *f64
```

- *Type:* *f64

---

##### `CloudProviderInput`<sup>Optional</sup> <a name="CloudProviderInput" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.property.cloudProviderInput"></a>

```go
func CloudProviderInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.property.accountId"></a>

```go
func AccountId() *f64
```

- *Type:* *f64

---

##### `CloudProvider`<sup>Required</sup> <a name="CloudProvider" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.property.cloudProvider"></a>

```go
func CloudProvider() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccount.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataNewrelicCloudAccountConfig <a name="DataNewrelicCloudAccountConfig" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccountConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/datanewreliccloudaccount"

&datanewreliccloudaccount.DataNewrelicCloudAccountConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CloudProvider: *string,
	Name: *string,
	AccountId: *f64,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccountConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccountConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccountConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccountConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccountConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccountConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccountConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccountConfig.property.cloudProvider">CloudProvider</a></code> | <code>*string</code> | The cloud provider of the account, e.g. aws, gcp, azure. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccountConfig.property.name">Name</a></code> | <code>*string</code> | The name of the cloud account. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccountConfig.property.accountId">AccountId</a></code> | <code>*f64</code> | The ID of the New Relic account. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccountConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/data-sources/cloud_account#id DataNewrelicCloudAccount#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccountConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccountConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccountConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccountConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccountConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccountConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccountConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CloudProvider`<sup>Required</sup> <a name="CloudProvider" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccountConfig.property.cloudProvider"></a>

```go
CloudProvider *string
```

- *Type:* *string

The cloud provider of the account, e.g. aws, gcp, azure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/data-sources/cloud_account#cloud_provider DataNewrelicCloudAccount#cloud_provider}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccountConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the cloud account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/data-sources/cloud_account#name DataNewrelicCloudAccount#name}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccountConfig.property.accountId"></a>

```go
AccountId *f64
```

- *Type:* *f64

The ID of the New Relic account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/data-sources/cloud_account#account_id DataNewrelicCloudAccount#account_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-newrelic.dataNewrelicCloudAccount.DataNewrelicCloudAccountConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/data-sources/cloud_account#id DataNewrelicCloudAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



