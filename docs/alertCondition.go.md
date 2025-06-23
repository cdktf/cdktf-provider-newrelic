# `alertCondition` Submodule <a name="`alertCondition` Submodule" id="@cdktf/provider-newrelic.alertCondition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AlertCondition <a name="AlertCondition" id="@cdktf/provider-newrelic.alertCondition.AlertCondition"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/alert_condition newrelic_alert_condition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/alertcondition"

alertcondition.NewAlertCondition(scope Construct, id *string, config AlertConditionConfig) AlertCondition
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig">AlertConditionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig">AlertConditionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.putTerm">PutTerm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.resetConditionScope">ResetConditionScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.resetGcMetric">ResetGcMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.resetRunbookUrl">ResetRunbookUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.resetUserDefinedMetric">ResetUserDefinedMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.resetUserDefinedValueFunction">ResetUserDefinedValueFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.resetViolationCloseTimer">ResetViolationCloseTimer</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTerm` <a name="PutTerm" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.putTerm"></a>

```go
func PutTerm(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.putTerm.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetConditionScope` <a name="ResetConditionScope" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.resetConditionScope"></a>

```go
func ResetConditionScope()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetGcMetric` <a name="ResetGcMetric" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.resetGcMetric"></a>

```go
func ResetGcMetric()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.resetId"></a>

```go
func ResetId()
```

##### `ResetRunbookUrl` <a name="ResetRunbookUrl" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.resetRunbookUrl"></a>

```go
func ResetRunbookUrl()
```

##### `ResetUserDefinedMetric` <a name="ResetUserDefinedMetric" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.resetUserDefinedMetric"></a>

```go
func ResetUserDefinedMetric()
```

##### `ResetUserDefinedValueFunction` <a name="ResetUserDefinedValueFunction" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.resetUserDefinedValueFunction"></a>

```go
func ResetUserDefinedValueFunction()
```

##### `ResetViolationCloseTimer` <a name="ResetViolationCloseTimer" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.resetViolationCloseTimer"></a>

```go
func ResetViolationCloseTimer()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AlertCondition resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/alertcondition"

alertcondition.AlertCondition_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/alertcondition"

alertcondition.AlertCondition_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/alertcondition"

alertcondition.AlertCondition_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/alertcondition"

alertcondition.AlertCondition_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AlertCondition resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AlertCondition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AlertCondition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/alert_condition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AlertCondition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.entityGuid">EntityGuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.term">Term</a></code> | <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermList">AlertConditionTermList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.conditionScopeInput">ConditionScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.entitiesInput">EntitiesInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.gcMetricInput">GcMetricInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.metricInput">MetricInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.policyIdInput">PolicyIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.runbookUrlInput">RunbookUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.termInput">TermInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.userDefinedMetricInput">UserDefinedMetricInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.userDefinedValueFunctionInput">UserDefinedValueFunctionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.violationCloseTimerInput">ViolationCloseTimerInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.conditionScope">ConditionScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.entities">Entities</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.gcMetric">GcMetric</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.metric">Metric</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.policyId">PolicyId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.runbookUrl">RunbookUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.userDefinedMetric">UserDefinedMetric</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.userDefinedValueFunction">UserDefinedValueFunction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.violationCloseTimer">ViolationCloseTimer</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EntityGuid`<sup>Required</sup> <a name="EntityGuid" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.entityGuid"></a>

```go
func EntityGuid() *string
```

- *Type:* *string

---

##### `Term`<sup>Required</sup> <a name="Term" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.term"></a>

```go
func Term() AlertConditionTermList
```

- *Type:* <a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermList">AlertConditionTermList</a>

---

##### `ConditionScopeInput`<sup>Optional</sup> <a name="ConditionScopeInput" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.conditionScopeInput"></a>

```go
func ConditionScopeInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EntitiesInput`<sup>Optional</sup> <a name="EntitiesInput" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.entitiesInput"></a>

```go
func EntitiesInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `GcMetricInput`<sup>Optional</sup> <a name="GcMetricInput" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.gcMetricInput"></a>

```go
func GcMetricInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MetricInput`<sup>Optional</sup> <a name="MetricInput" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.metricInput"></a>

```go
func MetricInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.policyIdInput"></a>

```go
func PolicyIdInput() *f64
```

- *Type:* *f64

---

##### `RunbookUrlInput`<sup>Optional</sup> <a name="RunbookUrlInput" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.runbookUrlInput"></a>

```go
func RunbookUrlInput() *string
```

- *Type:* *string

---

##### `TermInput`<sup>Optional</sup> <a name="TermInput" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.termInput"></a>

```go
func TermInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UserDefinedMetricInput`<sup>Optional</sup> <a name="UserDefinedMetricInput" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.userDefinedMetricInput"></a>

```go
func UserDefinedMetricInput() *string
```

- *Type:* *string

---

##### `UserDefinedValueFunctionInput`<sup>Optional</sup> <a name="UserDefinedValueFunctionInput" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.userDefinedValueFunctionInput"></a>

```go
func UserDefinedValueFunctionInput() *string
```

- *Type:* *string

---

##### `ViolationCloseTimerInput`<sup>Optional</sup> <a name="ViolationCloseTimerInput" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.violationCloseTimerInput"></a>

```go
func ViolationCloseTimerInput() *f64
```

- *Type:* *f64

---

##### `ConditionScope`<sup>Required</sup> <a name="ConditionScope" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.conditionScope"></a>

```go
func ConditionScope() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Entities`<sup>Required</sup> <a name="Entities" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.entities"></a>

```go
func Entities() *[]*f64
```

- *Type:* *[]*f64

---

##### `GcMetric`<sup>Required</sup> <a name="GcMetric" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.gcMetric"></a>

```go
func GcMetric() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.metric"></a>

```go
func Metric() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.policyId"></a>

```go
func PolicyId() *f64
```

- *Type:* *f64

---

##### `RunbookUrl`<sup>Required</sup> <a name="RunbookUrl" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.runbookUrl"></a>

```go
func RunbookUrl() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UserDefinedMetric`<sup>Required</sup> <a name="UserDefinedMetric" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.userDefinedMetric"></a>

```go
func UserDefinedMetric() *string
```

- *Type:* *string

---

##### `UserDefinedValueFunction`<sup>Required</sup> <a name="UserDefinedValueFunction" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.userDefinedValueFunction"></a>

```go
func UserDefinedValueFunction() *string
```

- *Type:* *string

---

##### `ViolationCloseTimer`<sup>Required</sup> <a name="ViolationCloseTimer" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.violationCloseTimer"></a>

```go
func ViolationCloseTimer() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AlertConditionConfig <a name="AlertConditionConfig" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/alertcondition"

&alertcondition.AlertConditionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Entities: *[]*f64,
	Metric: *string,
	Name: *string,
	PolicyId: *f64,
	Term: interface{},
	Type: *string,
	ConditionScope: *string,
	Enabled: interface{},
	GcMetric: *string,
	Id: *string,
	RunbookUrl: *string,
	UserDefinedMetric: *string,
	UserDefinedValueFunction: *string,
	ViolationCloseTimer: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.entities">Entities</a></code> | <code>*[]*f64</code> | The instance IDs associated with this condition. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.metric">Metric</a></code> | <code>*string</code> | The metric field accepts parameters based on the type set. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.name">Name</a></code> | <code>*string</code> | The title of the condition. Must be between 1 and 128 characters, inclusive. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.policyId">PolicyId</a></code> | <code>*f64</code> | The ID of the policy where this condition should be used. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.term">Term</a></code> | <code>interface{}</code> | term block. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.type">Type</a></code> | <code>*string</code> | The type of condition. One of: (browser_metric, mobile_metric, servers_metric, apm_app_metric, apm_jvm_metric, apm_kt_metric). |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.conditionScope">ConditionScope</a></code> | <code>*string</code> | One of (application, instance). |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether the condition is enabled. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.gcMetric">GcMetric</a></code> | <code>*string</code> | A valid Garbage Collection metric e.g. GC/G1 Young Generation. This is required if you are using apm_jvm_metric with gc_cpu_time condition type. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/alert_condition#id AlertCondition#id}. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.runbookUrl">RunbookUrl</a></code> | <code>*string</code> | Runbook URL to display in notifications. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.userDefinedMetric">UserDefinedMetric</a></code> | <code>*string</code> | A custom metric to be evaluated. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.userDefinedValueFunction">UserDefinedValueFunction</a></code> | <code>*string</code> | One of: (average, min, max, total, sample_size, percent, rate). |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.violationCloseTimer">ViolationCloseTimer</a></code> | <code>*f64</code> | Automatically close instance-based incidents, including JVM health metric incidents, after the number of hours specified. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Entities`<sup>Required</sup> <a name="Entities" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.entities"></a>

```go
Entities *[]*f64
```

- *Type:* *[]*f64

The instance IDs associated with this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/alert_condition#entities AlertCondition#entities}

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.metric"></a>

```go
Metric *string
```

- *Type:* *string

The metric field accepts parameters based on the type set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/alert_condition#metric AlertCondition#metric}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The title of the condition. Must be between 1 and 128 characters, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/alert_condition#name AlertCondition#name}

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.policyId"></a>

```go
PolicyId *f64
```

- *Type:* *f64

The ID of the policy where this condition should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/alert_condition#policy_id AlertCondition#policy_id}

---

##### `Term`<sup>Required</sup> <a name="Term" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.term"></a>

```go
Term interface{}
```

- *Type:* interface{}

term block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/alert_condition#term AlertCondition#term}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of condition. One of: (browser_metric, mobile_metric, servers_metric, apm_app_metric, apm_jvm_metric, apm_kt_metric).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/alert_condition#type AlertCondition#type}

---

##### `ConditionScope`<sup>Optional</sup> <a name="ConditionScope" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.conditionScope"></a>

```go
ConditionScope *string
```

- *Type:* *string

One of (application, instance).

Choose application for most scenarios. If you are using the JVM plugin in New Relic, the instance setting allows your condition to trigger for specific app instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/alert_condition#condition_scope AlertCondition#condition_scope}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether the condition is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/alert_condition#enabled AlertCondition#enabled}

---

##### `GcMetric`<sup>Optional</sup> <a name="GcMetric" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.gcMetric"></a>

```go
GcMetric *string
```

- *Type:* *string

A valid Garbage Collection metric e.g. GC/G1 Young Generation. This is required if you are using apm_jvm_metric with gc_cpu_time condition type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/alert_condition#gc_metric AlertCondition#gc_metric}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/alert_condition#id AlertCondition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RunbookUrl`<sup>Optional</sup> <a name="RunbookUrl" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.runbookUrl"></a>

```go
RunbookUrl *string
```

- *Type:* *string

Runbook URL to display in notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/alert_condition#runbook_url AlertCondition#runbook_url}

---

##### `UserDefinedMetric`<sup>Optional</sup> <a name="UserDefinedMetric" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.userDefinedMetric"></a>

```go
UserDefinedMetric *string
```

- *Type:* *string

A custom metric to be evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/alert_condition#user_defined_metric AlertCondition#user_defined_metric}

---

##### `UserDefinedValueFunction`<sup>Optional</sup> <a name="UserDefinedValueFunction" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.userDefinedValueFunction"></a>

```go
UserDefinedValueFunction *string
```

- *Type:* *string

One of: (average, min, max, total, sample_size, percent, rate).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/alert_condition#user_defined_value_function AlertCondition#user_defined_value_function}

---

##### `ViolationCloseTimer`<sup>Optional</sup> <a name="ViolationCloseTimer" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.violationCloseTimer"></a>

```go
ViolationCloseTimer *f64
```

- *Type:* *f64

Automatically close instance-based incidents, including JVM health metric incidents, after the number of hours specified.

Must be between 1 and 720 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/alert_condition#violation_close_timer AlertCondition#violation_close_timer}

---

### AlertConditionTerm <a name="AlertConditionTerm" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTerm"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTerm.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/alertcondition"

&alertcondition.AlertConditionTerm {
	Duration: *f64,
	Threshold: *f64,
	TimeFunction: *string,
	Operator: *string,
	Priority: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTerm.property.duration">Duration</a></code> | <code>*f64</code> | In minutes, must be in the range of 5 to 120, inclusive. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTerm.property.threshold">Threshold</a></code> | <code>*f64</code> | Must be 0 or greater. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTerm.property.timeFunction">TimeFunction</a></code> | <code>*string</code> | One of (all, any). |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTerm.property.operator">Operator</a></code> | <code>*string</code> | One of (above, below, equal). Defaults to equal. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTerm.property.priority">Priority</a></code> | <code>*string</code> | One of (critical, warning). Defaults to critical. |

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTerm.property.duration"></a>

```go
Duration *f64
```

- *Type:* *f64

In minutes, must be in the range of 5 to 120, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/alert_condition#duration AlertCondition#duration}

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTerm.property.threshold"></a>

```go
Threshold *f64
```

- *Type:* *f64

Must be 0 or greater.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/alert_condition#threshold AlertCondition#threshold}

---

##### `TimeFunction`<sup>Required</sup> <a name="TimeFunction" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTerm.property.timeFunction"></a>

```go
TimeFunction *string
```

- *Type:* *string

One of (all, any).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/alert_condition#time_function AlertCondition#time_function}

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTerm.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

One of (above, below, equal). Defaults to equal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/alert_condition#operator AlertCondition#operator}

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTerm.property.priority"></a>

```go
Priority *string
```

- *Type:* *string

One of (critical, warning). Defaults to critical.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.62.1/docs/resources/alert_condition#priority AlertCondition#priority}

---

## Classes <a name="Classes" id="Classes"></a>

### AlertConditionTermList <a name="AlertConditionTermList" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/alertcondition"

alertcondition.NewAlertConditionTermList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AlertConditionTermList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.get"></a>

```go
func Get(index *f64) AlertConditionTermOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AlertConditionTermOutputReference <a name="AlertConditionTermOutputReference" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/alertcondition"

alertcondition.NewAlertConditionTermOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AlertConditionTermOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.resetPriority">ResetPriority</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.resetOperator"></a>

```go
func ResetOperator()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.resetPriority"></a>

```go
func ResetPriority()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.durationInput">DurationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.priorityInput">PriorityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.timeFunctionInput">TimeFunctionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.duration">Duration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.priority">Priority</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.threshold">Threshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.timeFunction">TimeFunction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.durationInput"></a>

```go
func DurationInput() *f64
```

- *Type:* *f64

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.priorityInput"></a>

```go
func PriorityInput() *string
```

- *Type:* *string

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.thresholdInput"></a>

```go
func ThresholdInput() *f64
```

- *Type:* *f64

---

##### `TimeFunctionInput`<sup>Optional</sup> <a name="TimeFunctionInput" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.timeFunctionInput"></a>

```go
func TimeFunctionInput() *string
```

- *Type:* *string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.duration"></a>

```go
func Duration() *f64
```

- *Type:* *f64

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.priority"></a>

```go
func Priority() *string
```

- *Type:* *string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.threshold"></a>

```go
func Threshold() *f64
```

- *Type:* *f64

---

##### `TimeFunction`<sup>Required</sup> <a name="TimeFunction" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.timeFunction"></a>

```go
func TimeFunction() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



