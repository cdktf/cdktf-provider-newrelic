# `alertChannel` Submodule <a name="`alertChannel` Submodule" id="@cdktf/provider-newrelic.alertChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AlertChannel <a name="AlertChannel" id="@cdktf/provider-newrelic.alertChannel.AlertChannel"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/alert_channel newrelic_alert_channel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/alertchannel"

alertchannel.NewAlertChannel(scope Construct, id *string, config AlertChannelConfig) AlertChannel
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfig">AlertChannelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfig">AlertChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.resetConfig">ResetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.putConfig"></a>

```go
func PutConfig(value AlertChannelConfigA)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA">AlertChannelConfigA</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetConfig` <a name="ResetConfig" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.resetConfig"></a>

```go
func ResetConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AlertChannel resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/alertchannel"

alertchannel.AlertChannel_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/alertchannel"

alertchannel.AlertChannel_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/alertchannel"

alertchannel.AlertChannel_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/alertchannel"

alertchannel.AlertChannel_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AlertChannel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AlertChannel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AlertChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/alert_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AlertChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.config">Config</a></code> | <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference">AlertChannelConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.accountIdInput">AccountIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.configInput">ConfigInput</a></code> | <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA">AlertChannelConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.accountId">AccountId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.config"></a>

```go
func Config() AlertChannelConfigAOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference">AlertChannelConfigAOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.accountIdInput"></a>

```go
func AccountIdInput() *f64
```

- *Type:* *f64

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.configInput"></a>

```go
func ConfigInput() AlertChannelConfigA
```

- *Type:* <a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA">AlertChannelConfigA</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.accountId"></a>

```go
func AccountId() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AlertChannelConfig <a name="AlertChannelConfig" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/alertchannel"

&alertchannel.AlertChannelConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Type: *string,
	AccountId: *f64,
	Config: github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13.alertChannel.AlertChannelConfigA,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.name">Name</a></code> | <code>*string</code> | (Required) The name of the channel. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.type">Type</a></code> | <code>*string</code> | (Required) The type of channel. One of: (pagerduty, slack, user, victorops, webhook, email, opsgenie). |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.accountId">AccountId</a></code> | <code>*f64</code> | The New Relic account ID where you want to create alert channels. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.config">Config</a></code> | <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA">AlertChannelConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/alert_channel#id AlertChannel#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

(Required) The name of the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/alert_channel#name AlertChannel#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

(Required) The type of channel. One of: (pagerduty, slack, user, victorops, webhook, email, opsgenie).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/alert_channel#type AlertChannel#type}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.accountId"></a>

```go
AccountId *f64
```

- *Type:* *f64

The New Relic account ID where you want to create alert channels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/alert_channel#account_id AlertChannel#account_id}

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.config"></a>

```go
Config AlertChannelConfigA
```

- *Type:* <a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA">AlertChannelConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/alert_channel#config AlertChannel#config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/alert_channel#id AlertChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### AlertChannelConfigA <a name="AlertChannelConfigA" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/alertchannel"

&alertchannel.AlertChannelConfigA {
	ApiKey: *string,
	AuthPassword: *string,
	AuthType: *string,
	AuthUsername: *string,
	BaseUrl: *string,
	Channel: *string,
	Headers: *map[string]*string,
	HeadersString: *string,
	IncludeJsonAttachment: *string,
	Key: *string,
	Payload: *map[string]*string,
	PayloadString: *string,
	PayloadType: *string,
	Recipients: *string,
	Region: *string,
	RouteKey: *string,
	ServiceKey: *string,
	Tags: *string,
	Teams: *string,
	Url: *string,
	UserId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.apiKey">ApiKey</a></code> | <code>*string</code> | The API key for integrating with OpsGenie. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.authPassword">AuthPassword</a></code> | <code>*string</code> | Specifies an authentication password for use with a channel. Supported by the webhook channel type. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.authType">AuthType</a></code> | <code>*string</code> | Specifies an authentication method for use with a channel. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.authUsername">AuthUsername</a></code> | <code>*string</code> | Specifies an authentication username for use with a channel. Supported by the webhook channel type. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.baseUrl">BaseUrl</a></code> | <code>*string</code> | The base URL of the webhook destination. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.channel">Channel</a></code> | <code>*string</code> | The Slack channel to send notifications to. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.headers">Headers</a></code> | <code>*map[string]*string</code> | A map of key/value pairs that represents extra HTTP headers to be sent along with the webhook payload. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.headersString">HeadersString</a></code> | <code>*string</code> | Use instead of headers if the desired payload is more complex than a list of key/value pairs (e.g. a set of headers that makes use of nested objects). The value provided should be a valid JSON string with escaped double quotes. Conflicts with headers. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.includeJsonAttachment">IncludeJsonAttachment</a></code> | <code>*string</code> | true or false. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.key">Key</a></code> | <code>*string</code> | The key for integrating with VictorOps. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.payload">Payload</a></code> | <code>*map[string]*string</code> | A map of key/value pairs that represents the webhook payload. Must provide payload_type if setting this argument. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.payloadString">PayloadString</a></code> | <code>*string</code> | Use instead of payload if the desired payload is more complex than a list of key/value pairs (e.g. a payload that makes use of nested objects). The value provided should be a valid JSON string with escaped double quotes. Conflicts with payload. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.payloadType">PayloadType</a></code> | <code>*string</code> | Can either be application/json or application/x-www-form-urlencoded. The payload_type argument is required if payload is set. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.recipients">Recipients</a></code> | <code>*string</code> | A set of recipients for targeting notifications. Multiple values are comma separated. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.region">Region</a></code> | <code>*string</code> | The data center region to store your data. Valid values are US and EU. Default is US. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.routeKey">RouteKey</a></code> | <code>*string</code> | The route key for integrating with VictorOps. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.serviceKey">ServiceKey</a></code> | <code>*string</code> | Specifies the service key for integrating with Pagerduty. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.tags">Tags</a></code> | <code>*string</code> | A set of tags for targeting notifications. Multiple values are comma separated. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.teams">Teams</a></code> | <code>*string</code> | A set of teams for targeting notifications. Multiple values are comma separated. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.url">Url</a></code> | <code>*string</code> | Your organization's Slack URL. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.userId">UserId</a></code> | <code>*string</code> | The user ID for use with the user channel type. |

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.apiKey"></a>

```go
ApiKey *string
```

- *Type:* *string

The API key for integrating with OpsGenie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/alert_channel#api_key AlertChannel#api_key}

---

##### `AuthPassword`<sup>Optional</sup> <a name="AuthPassword" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.authPassword"></a>

```go
AuthPassword *string
```

- *Type:* *string

Specifies an authentication password for use with a channel. Supported by the webhook channel type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/alert_channel#auth_password AlertChannel#auth_password}

---

##### `AuthType`<sup>Optional</sup> <a name="AuthType" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.authType"></a>

```go
AuthType *string
```

- *Type:* *string

Specifies an authentication method for use with a channel.

Supported by the webhook channel type. Only HTTP basic authentication is currently supported via the value BASIC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/alert_channel#auth_type AlertChannel#auth_type}

---

##### `AuthUsername`<sup>Optional</sup> <a name="AuthUsername" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.authUsername"></a>

```go
AuthUsername *string
```

- *Type:* *string

Specifies an authentication username for use with a channel. Supported by the webhook channel type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/alert_channel#auth_username AlertChannel#auth_username}

---

##### `BaseUrl`<sup>Optional</sup> <a name="BaseUrl" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.baseUrl"></a>

```go
BaseUrl *string
```

- *Type:* *string

The base URL of the webhook destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/alert_channel#base_url AlertChannel#base_url}

---

##### `Channel`<sup>Optional</sup> <a name="Channel" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.channel"></a>

```go
Channel *string
```

- *Type:* *string

The Slack channel to send notifications to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/alert_channel#channel AlertChannel#channel}

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.headers"></a>

```go
Headers *map[string]*string
```

- *Type:* *map[string]*string

A map of key/value pairs that represents extra HTTP headers to be sent along with the webhook payload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/alert_channel#headers AlertChannel#headers}

---

##### `HeadersString`<sup>Optional</sup> <a name="HeadersString" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.headersString"></a>

```go
HeadersString *string
```

- *Type:* *string

Use instead of headers if the desired payload is more complex than a list of key/value pairs (e.g. a set of headers that makes use of nested objects). The value provided should be a valid JSON string with escaped double quotes. Conflicts with headers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/alert_channel#headers_string AlertChannel#headers_string}

---

##### `IncludeJsonAttachment`<sup>Optional</sup> <a name="IncludeJsonAttachment" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.includeJsonAttachment"></a>

```go
IncludeJsonAttachment *string
```

- *Type:* *string

true or false.

Flag for whether or not to attach a JSON document containing information about the associated alert to the email that is sent to recipients.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/alert_channel#include_json_attachment AlertChannel#include_json_attachment}

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key for integrating with VictorOps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/alert_channel#key AlertChannel#key}

---

##### `Payload`<sup>Optional</sup> <a name="Payload" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.payload"></a>

```go
Payload *map[string]*string
```

- *Type:* *map[string]*string

A map of key/value pairs that represents the webhook payload. Must provide payload_type if setting this argument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/alert_channel#payload AlertChannel#payload}

---

##### `PayloadString`<sup>Optional</sup> <a name="PayloadString" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.payloadString"></a>

```go
PayloadString *string
```

- *Type:* *string

Use instead of payload if the desired payload is more complex than a list of key/value pairs (e.g. a payload that makes use of nested objects). The value provided should be a valid JSON string with escaped double quotes. Conflicts with payload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/alert_channel#payload_string AlertChannel#payload_string}

---

##### `PayloadType`<sup>Optional</sup> <a name="PayloadType" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.payloadType"></a>

```go
PayloadType *string
```

- *Type:* *string

Can either be application/json or application/x-www-form-urlencoded. The payload_type argument is required if payload is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/alert_channel#payload_type AlertChannel#payload_type}

---

##### `Recipients`<sup>Optional</sup> <a name="Recipients" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.recipients"></a>

```go
Recipients *string
```

- *Type:* *string

A set of recipients for targeting notifications. Multiple values are comma separated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/alert_channel#recipients AlertChannel#recipients}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.region"></a>

```go
Region *string
```

- *Type:* *string

The data center region to store your data. Valid values are US and EU. Default is US.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/alert_channel#region AlertChannel#region}

---

##### `RouteKey`<sup>Optional</sup> <a name="RouteKey" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.routeKey"></a>

```go
RouteKey *string
```

- *Type:* *string

The route key for integrating with VictorOps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/alert_channel#route_key AlertChannel#route_key}

---

##### `ServiceKey`<sup>Optional</sup> <a name="ServiceKey" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.serviceKey"></a>

```go
ServiceKey *string
```

- *Type:* *string

Specifies the service key for integrating with Pagerduty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/alert_channel#service_key AlertChannel#service_key}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.tags"></a>

```go
Tags *string
```

- *Type:* *string

A set of tags for targeting notifications. Multiple values are comma separated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/alert_channel#tags AlertChannel#tags}

---

##### `Teams`<sup>Optional</sup> <a name="Teams" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.teams"></a>

```go
Teams *string
```

- *Type:* *string

A set of teams for targeting notifications. Multiple values are comma separated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/alert_channel#teams AlertChannel#teams}

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.url"></a>

```go
Url *string
```

- *Type:* *string

Your organization's Slack URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/alert_channel#url AlertChannel#url}

---

##### `UserId`<sup>Optional</sup> <a name="UserId" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.userId"></a>

```go
UserId *string
```

- *Type:* *string

The user ID for use with the user channel type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/alert_channel#user_id AlertChannel#user_id}

---

## Classes <a name="Classes" id="Classes"></a>

### AlertChannelConfigAOutputReference <a name="AlertChannelConfigAOutputReference" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/alertchannel"

alertchannel.NewAlertChannelConfigAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AlertChannelConfigAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetApiKey">ResetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetAuthPassword">ResetAuthPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetAuthType">ResetAuthType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetAuthUsername">ResetAuthUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetBaseUrl">ResetBaseUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetChannel">ResetChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetHeadersString">ResetHeadersString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetIncludeJsonAttachment">ResetIncludeJsonAttachment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetPayload">ResetPayload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetPayloadString">ResetPayloadString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetPayloadType">ResetPayloadType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetRecipients">ResetRecipients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetRouteKey">ResetRouteKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetServiceKey">ResetServiceKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetTeams">ResetTeams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetUserId">ResetUserId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetApiKey"></a>

```go
func ResetApiKey()
```

##### `ResetAuthPassword` <a name="ResetAuthPassword" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetAuthPassword"></a>

```go
func ResetAuthPassword()
```

##### `ResetAuthType` <a name="ResetAuthType" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetAuthType"></a>

```go
func ResetAuthType()
```

##### `ResetAuthUsername` <a name="ResetAuthUsername" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetAuthUsername"></a>

```go
func ResetAuthUsername()
```

##### `ResetBaseUrl` <a name="ResetBaseUrl" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetBaseUrl"></a>

```go
func ResetBaseUrl()
```

##### `ResetChannel` <a name="ResetChannel" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetChannel"></a>

```go
func ResetChannel()
```

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetHeaders"></a>

```go
func ResetHeaders()
```

##### `ResetHeadersString` <a name="ResetHeadersString" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetHeadersString"></a>

```go
func ResetHeadersString()
```

##### `ResetIncludeJsonAttachment` <a name="ResetIncludeJsonAttachment" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetIncludeJsonAttachment"></a>

```go
func ResetIncludeJsonAttachment()
```

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetPayload` <a name="ResetPayload" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetPayload"></a>

```go
func ResetPayload()
```

##### `ResetPayloadString` <a name="ResetPayloadString" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetPayloadString"></a>

```go
func ResetPayloadString()
```

##### `ResetPayloadType` <a name="ResetPayloadType" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetPayloadType"></a>

```go
func ResetPayloadType()
```

##### `ResetRecipients` <a name="ResetRecipients" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetRecipients"></a>

```go
func ResetRecipients()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetRouteKey` <a name="ResetRouteKey" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetRouteKey"></a>

```go
func ResetRouteKey()
```

##### `ResetServiceKey` <a name="ResetServiceKey" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetServiceKey"></a>

```go
func ResetServiceKey()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTeams` <a name="ResetTeams" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetTeams"></a>

```go
func ResetTeams()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetUrl"></a>

```go
func ResetUrl()
```

##### `ResetUserId` <a name="ResetUserId" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetUserId"></a>

```go
func ResetUserId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.authPasswordInput">AuthPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.authTypeInput">AuthTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.authUsernameInput">AuthUsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.baseUrlInput">BaseUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.channelInput">ChannelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.headersInput">HeadersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.headersStringInput">HeadersStringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.includeJsonAttachmentInput">IncludeJsonAttachmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.payloadInput">PayloadInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.payloadStringInput">PayloadStringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.payloadTypeInput">PayloadTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.recipientsInput">RecipientsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.routeKeyInput">RouteKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.serviceKeyInput">ServiceKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.tagsInput">TagsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.teamsInput">TeamsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.userIdInput">UserIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.apiKey">ApiKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.authPassword">AuthPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.authType">AuthType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.authUsername">AuthUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.baseUrl">BaseUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.channel">Channel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.headers">Headers</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.headersString">HeadersString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.includeJsonAttachment">IncludeJsonAttachment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.payload">Payload</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.payloadString">PayloadString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.payloadType">PayloadType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.recipients">Recipients</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.routeKey">RouteKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.serviceKey">ServiceKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.tags">Tags</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.teams">Teams</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.userId">UserId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA">AlertChannelConfigA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.apiKeyInput"></a>

```go
func ApiKeyInput() *string
```

- *Type:* *string

---

##### `AuthPasswordInput`<sup>Optional</sup> <a name="AuthPasswordInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.authPasswordInput"></a>

```go
func AuthPasswordInput() *string
```

- *Type:* *string

---

##### `AuthTypeInput`<sup>Optional</sup> <a name="AuthTypeInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.authTypeInput"></a>

```go
func AuthTypeInput() *string
```

- *Type:* *string

---

##### `AuthUsernameInput`<sup>Optional</sup> <a name="AuthUsernameInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.authUsernameInput"></a>

```go
func AuthUsernameInput() *string
```

- *Type:* *string

---

##### `BaseUrlInput`<sup>Optional</sup> <a name="BaseUrlInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.baseUrlInput"></a>

```go
func BaseUrlInput() *string
```

- *Type:* *string

---

##### `ChannelInput`<sup>Optional</sup> <a name="ChannelInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.channelInput"></a>

```go
func ChannelInput() *string
```

- *Type:* *string

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.headersInput"></a>

```go
func HeadersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `HeadersStringInput`<sup>Optional</sup> <a name="HeadersStringInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.headersStringInput"></a>

```go
func HeadersStringInput() *string
```

- *Type:* *string

---

##### `IncludeJsonAttachmentInput`<sup>Optional</sup> <a name="IncludeJsonAttachmentInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.includeJsonAttachmentInput"></a>

```go
func IncludeJsonAttachmentInput() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `PayloadInput`<sup>Optional</sup> <a name="PayloadInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.payloadInput"></a>

```go
func PayloadInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PayloadStringInput`<sup>Optional</sup> <a name="PayloadStringInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.payloadStringInput"></a>

```go
func PayloadStringInput() *string
```

- *Type:* *string

---

##### `PayloadTypeInput`<sup>Optional</sup> <a name="PayloadTypeInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.payloadTypeInput"></a>

```go
func PayloadTypeInput() *string
```

- *Type:* *string

---

##### `RecipientsInput`<sup>Optional</sup> <a name="RecipientsInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.recipientsInput"></a>

```go
func RecipientsInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RouteKeyInput`<sup>Optional</sup> <a name="RouteKeyInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.routeKeyInput"></a>

```go
func RouteKeyInput() *string
```

- *Type:* *string

---

##### `ServiceKeyInput`<sup>Optional</sup> <a name="ServiceKeyInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.serviceKeyInput"></a>

```go
func ServiceKeyInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.tagsInput"></a>

```go
func TagsInput() *string
```

- *Type:* *string

---

##### `TeamsInput`<sup>Optional</sup> <a name="TeamsInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.teamsInput"></a>

```go
func TeamsInput() *string
```

- *Type:* *string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.userIdInput"></a>

```go
func UserIdInput() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.apiKey"></a>

```go
func ApiKey() *string
```

- *Type:* *string

---

##### `AuthPassword`<sup>Required</sup> <a name="AuthPassword" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.authPassword"></a>

```go
func AuthPassword() *string
```

- *Type:* *string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.authType"></a>

```go
func AuthType() *string
```

- *Type:* *string

---

##### `AuthUsername`<sup>Required</sup> <a name="AuthUsername" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.authUsername"></a>

```go
func AuthUsername() *string
```

- *Type:* *string

---

##### `BaseUrl`<sup>Required</sup> <a name="BaseUrl" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.baseUrl"></a>

```go
func BaseUrl() *string
```

- *Type:* *string

---

##### `Channel`<sup>Required</sup> <a name="Channel" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.channel"></a>

```go
func Channel() *string
```

- *Type:* *string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.headers"></a>

```go
func Headers() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `HeadersString`<sup>Required</sup> <a name="HeadersString" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.headersString"></a>

```go
func HeadersString() *string
```

- *Type:* *string

---

##### `IncludeJsonAttachment`<sup>Required</sup> <a name="IncludeJsonAttachment" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.includeJsonAttachment"></a>

```go
func IncludeJsonAttachment() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Payload`<sup>Required</sup> <a name="Payload" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.payload"></a>

```go
func Payload() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PayloadString`<sup>Required</sup> <a name="PayloadString" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.payloadString"></a>

```go
func PayloadString() *string
```

- *Type:* *string

---

##### `PayloadType`<sup>Required</sup> <a name="PayloadType" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.payloadType"></a>

```go
func PayloadType() *string
```

- *Type:* *string

---

##### `Recipients`<sup>Required</sup> <a name="Recipients" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.recipients"></a>

```go
func Recipients() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `RouteKey`<sup>Required</sup> <a name="RouteKey" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.routeKey"></a>

```go
func RouteKey() *string
```

- *Type:* *string

---

##### `ServiceKey`<sup>Required</sup> <a name="ServiceKey" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.serviceKey"></a>

```go
func ServiceKey() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.tags"></a>

```go
func Tags() *string
```

- *Type:* *string

---

##### `Teams`<sup>Required</sup> <a name="Teams" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.teams"></a>

```go
func Teams() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.userId"></a>

```go
func UserId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.internalValue"></a>

```go
func InternalValue() AlertChannelConfigA
```

- *Type:* <a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA">AlertChannelConfigA</a>

---



