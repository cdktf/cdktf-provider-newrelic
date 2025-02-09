# `dataNewrelicAlertChannel` Submodule <a name="`dataNewrelicAlertChannel` Submodule" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataNewrelicAlertChannel <a name="DataNewrelicAlertChannel" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs/data-sources/alert_channel newrelic_alert_channel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/datanewrelicalertchannel"

datanewrelicalertchannel.NewDataNewrelicAlertChannel(scope Construct, id *string, config DataNewrelicAlertChannelConfig) DataNewrelicAlertChannel
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfig">DataNewrelicAlertChannelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfig">DataNewrelicAlertChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataNewrelicAlertChannel resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/datanewrelicalertchannel"

datanewrelicalertchannel.DataNewrelicAlertChannel_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/datanewrelicalertchannel"

datanewrelicalertchannel.DataNewrelicAlertChannel_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/datanewrelicalertchannel"

datanewrelicalertchannel.DataNewrelicAlertChannel_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/datanewrelicalertchannel"

datanewrelicalertchannel.DataNewrelicAlertChannel_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataNewrelicAlertChannel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataNewrelicAlertChannel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataNewrelicAlertChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs/data-sources/alert_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataNewrelicAlertChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.config">Config</a></code> | <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAList">DataNewrelicAlertChannelConfigAList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.policyIds">PolicyIds</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.accountIdInput">AccountIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.accountId">AccountId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.config"></a>

```go
func Config() DataNewrelicAlertChannelConfigAList
```

- *Type:* <a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAList">DataNewrelicAlertChannelConfigAList</a>

---

##### `PolicyIds`<sup>Required</sup> <a name="PolicyIds" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.policyIds"></a>

```go
func PolicyIds() *[]*f64
```

- *Type:* *[]*f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.accountIdInput"></a>

```go
func AccountIdInput() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.accountId"></a>

```go
func AccountId() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataNewrelicAlertChannelConfig <a name="DataNewrelicAlertChannelConfig" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/datanewrelicalertchannel"

&datanewrelicalertchannel.DataNewrelicAlertChannelConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	AccountId: *f64,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfig.property.name">Name</a></code> | <code>*string</code> | The name of the alert channel in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfig.property.accountId">AccountId</a></code> | <code>*f64</code> | The New Relic account ID where you want to retrieve the alert channel. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs/data-sources/alert_channel#id DataNewrelicAlertChannel#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the alert channel in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs/data-sources/alert_channel#name DataNewrelicAlertChannel#name}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfig.property.accountId"></a>

```go
AccountId *f64
```

- *Type:* *f64

The New Relic account ID where you want to retrieve the alert channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs/data-sources/alert_channel#account_id DataNewrelicAlertChannel#account_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs/data-sources/alert_channel#id DataNewrelicAlertChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataNewrelicAlertChannelConfigA <a name="DataNewrelicAlertChannelConfigA" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/datanewrelicalertchannel"

&datanewrelicalertchannel.DataNewrelicAlertChannelConfigA {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataNewrelicAlertChannelConfigAList <a name="DataNewrelicAlertChannelConfigAList" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/datanewrelicalertchannel"

datanewrelicalertchannel.NewDataNewrelicAlertChannelConfigAList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataNewrelicAlertChannelConfigAList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAList.get"></a>

```go
func Get(index *f64) DataNewrelicAlertChannelConfigAOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataNewrelicAlertChannelConfigAOutputReference <a name="DataNewrelicAlertChannelConfigAOutputReference" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/datanewrelicalertchannel"

datanewrelicalertchannel.NewDataNewrelicAlertChannelConfigAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataNewrelicAlertChannelConfigAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.apiKey">ApiKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.authPassword">AuthPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.authType">AuthType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.authUsername">AuthUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.baseUrl">BaseUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.channel">Channel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.headers">Headers</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.includeJsonAttachment">IncludeJsonAttachment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.payload">Payload</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.payloadString">PayloadString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.payloadType">PayloadType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.recipients">Recipients</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.routeKey">RouteKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.serviceKey">ServiceKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.tags">Tags</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.teams">Teams</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.userId">UserId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigA">DataNewrelicAlertChannelConfigA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.apiKey"></a>

```go
func ApiKey() *string
```

- *Type:* *string

---

##### `AuthPassword`<sup>Required</sup> <a name="AuthPassword" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.authPassword"></a>

```go
func AuthPassword() *string
```

- *Type:* *string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.authType"></a>

```go
func AuthType() *string
```

- *Type:* *string

---

##### `AuthUsername`<sup>Required</sup> <a name="AuthUsername" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.authUsername"></a>

```go
func AuthUsername() *string
```

- *Type:* *string

---

##### `BaseUrl`<sup>Required</sup> <a name="BaseUrl" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.baseUrl"></a>

```go
func BaseUrl() *string
```

- *Type:* *string

---

##### `Channel`<sup>Required</sup> <a name="Channel" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.channel"></a>

```go
func Channel() *string
```

- *Type:* *string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.headers"></a>

```go
func Headers() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `IncludeJsonAttachment`<sup>Required</sup> <a name="IncludeJsonAttachment" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.includeJsonAttachment"></a>

```go
func IncludeJsonAttachment() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Payload`<sup>Required</sup> <a name="Payload" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.payload"></a>

```go
func Payload() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `PayloadString`<sup>Required</sup> <a name="PayloadString" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.payloadString"></a>

```go
func PayloadString() *string
```

- *Type:* *string

---

##### `PayloadType`<sup>Required</sup> <a name="PayloadType" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.payloadType"></a>

```go
func PayloadType() *string
```

- *Type:* *string

---

##### `Recipients`<sup>Required</sup> <a name="Recipients" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.recipients"></a>

```go
func Recipients() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `RouteKey`<sup>Required</sup> <a name="RouteKey" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.routeKey"></a>

```go
func RouteKey() *string
```

- *Type:* *string

---

##### `ServiceKey`<sup>Required</sup> <a name="ServiceKey" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.serviceKey"></a>

```go
func ServiceKey() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.tags"></a>

```go
func Tags() *string
```

- *Type:* *string

---

##### `Teams`<sup>Required</sup> <a name="Teams" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.teams"></a>

```go
func Teams() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.userId"></a>

```go
func UserId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.internalValue"></a>

```go
func InternalValue() DataNewrelicAlertChannelConfigA
```

- *Type:* <a href="#@cdktf/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigA">DataNewrelicAlertChannelConfigA</a>

---



