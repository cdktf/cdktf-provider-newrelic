# `alertMutingRule` Submodule <a name="`alertMutingRule` Submodule" id="@cdktf/provider-newrelic.alertMutingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AlertMutingRule <a name="AlertMutingRule" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/alert_muting_rule newrelic_alert_muting_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/alertmutingrule"

alertmutingrule.NewAlertMutingRule(scope Construct, id *string, config AlertMutingRuleConfig) AlertMutingRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig">AlertMutingRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig">AlertMutingRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.putSchedule">PutSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.resetActionOnMutingRuleWindowEnded">ResetActionOnMutingRuleWindowEnded</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.resetSchedule">ResetSchedule</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.putCondition"></a>

```go
func PutCondition(value AlertMutingRuleCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleCondition">AlertMutingRuleCondition</a>

---

##### `PutSchedule` <a name="PutSchedule" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.putSchedule"></a>

```go
func PutSchedule(value AlertMutingRuleSchedule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule">AlertMutingRuleSchedule</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetActionOnMutingRuleWindowEnded` <a name="ResetActionOnMutingRuleWindowEnded" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.resetActionOnMutingRuleWindowEnded"></a>

```go
func ResetActionOnMutingRuleWindowEnded()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.resetId"></a>

```go
func ResetId()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.resetSchedule"></a>

```go
func ResetSchedule()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AlertMutingRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/alertmutingrule"

alertmutingrule.AlertMutingRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/alertmutingrule"

alertmutingrule.AlertMutingRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/alertmutingrule"

alertmutingrule.AlertMutingRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/alertmutingrule"

alertmutingrule.AlertMutingRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AlertMutingRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AlertMutingRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AlertMutingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/alert_muting_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AlertMutingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference">AlertMutingRuleConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference">AlertMutingRuleScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.accountIdInput">AccountIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.actionOnMutingRuleWindowEndedInput">ActionOnMutingRuleWindowEndedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleCondition">AlertMutingRuleCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.scheduleInput">ScheduleInput</a></code> | <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule">AlertMutingRuleSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.accountId">AccountId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.actionOnMutingRuleWindowEnded">ActionOnMutingRuleWindowEnded</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.condition"></a>

```go
func Condition() AlertMutingRuleConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference">AlertMutingRuleConditionOutputReference</a>

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.schedule"></a>

```go
func Schedule() AlertMutingRuleScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference">AlertMutingRuleScheduleOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.accountIdInput"></a>

```go
func AccountIdInput() *f64
```

- *Type:* *f64

---

##### `ActionOnMutingRuleWindowEndedInput`<sup>Optional</sup> <a name="ActionOnMutingRuleWindowEndedInput" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.actionOnMutingRuleWindowEndedInput"></a>

```go
func ActionOnMutingRuleWindowEndedInput() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.conditionInput"></a>

```go
func ConditionInput() AlertMutingRuleCondition
```

- *Type:* <a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleCondition">AlertMutingRuleCondition</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.scheduleInput"></a>

```go
func ScheduleInput() AlertMutingRuleSchedule
```

- *Type:* <a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule">AlertMutingRuleSchedule</a>

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.accountId"></a>

```go
func AccountId() *f64
```

- *Type:* *f64

---

##### `ActionOnMutingRuleWindowEnded`<sup>Required</sup> <a name="ActionOnMutingRuleWindowEnded" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.actionOnMutingRuleWindowEnded"></a>

```go
func ActionOnMutingRuleWindowEnded() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AlertMutingRuleCondition <a name="AlertMutingRuleCondition" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/alertmutingrule"

&alertmutingrule.AlertMutingRuleCondition {
	Conditions: interface{},
	Operator: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleCondition.property.conditions">Conditions</a></code> | <code>interface{}</code> | conditions block. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleCondition.property.operator">Operator</a></code> | <code>*string</code> | The operator used to combine all the MutingRuleConditions within the group. |

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleCondition.property.conditions"></a>

```go
Conditions interface{}
```

- *Type:* interface{}

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/alert_muting_rule#conditions AlertMutingRule#conditions}

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleCondition.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

The operator used to combine all the MutingRuleConditions within the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/alert_muting_rule#operator AlertMutingRule#operator}

---

### AlertMutingRuleConditionConditions <a name="AlertMutingRuleConditionConditions" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/alertmutingrule"

&alertmutingrule.AlertMutingRuleConditionConditions {
	Attribute: *string,
	Operator: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditions.property.attribute">Attribute</a></code> | <code>*string</code> | The attribute on an incident. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditions.property.operator">Operator</a></code> | <code>*string</code> | The operator used to compare the attribute's value with the supplied value(s). |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditions.property.values">Values</a></code> | <code>*[]*string</code> | The value(s) to compare against the attribute's value. |

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditions.property.attribute"></a>

```go
Attribute *string
```

- *Type:* *string

The attribute on an incident.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/alert_muting_rule#attribute AlertMutingRule#attribute}

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditions.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

The operator used to compare the attribute's value with the supplied value(s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/alert_muting_rule#operator AlertMutingRule#operator}

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditions.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

The value(s) to compare against the attribute's value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/alert_muting_rule#values AlertMutingRule#values}

---

### AlertMutingRuleConfig <a name="AlertMutingRuleConfig" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/alertmutingrule"

&alertmutingrule.AlertMutingRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Condition: github.com/cdktf/cdktf-provider-newrelic-go/newrelic.alertMutingRule.AlertMutingRuleCondition,
	Enabled: interface{},
	Name: *string,
	AccountId: *f64,
	ActionOnMutingRuleWindowEnded: *string,
	Description: *string,
	Id: *string,
	Schedule: github.com/cdktf/cdktf-provider-newrelic-go/newrelic.alertMutingRule.AlertMutingRuleSchedule,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleCondition">AlertMutingRuleCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether the MutingRule is enabled. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.name">Name</a></code> | <code>*string</code> | The name of the MutingRule. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.accountId">AccountId</a></code> | <code>*f64</code> | The account id of the MutingRule.. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.actionOnMutingRuleWindowEnded">ActionOnMutingRuleWindowEnded</a></code> | <code>*string</code> | The action when the muting rule window is ended or disabled. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.description">Description</a></code> | <code>*string</code> | The description of the MutingRule. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/alert_muting_rule#id AlertMutingRule#id}. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule">AlertMutingRuleSchedule</a></code> | schedule block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.condition"></a>

```go
Condition AlertMutingRuleCondition
```

- *Type:* <a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleCondition">AlertMutingRuleCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/alert_muting_rule#condition AlertMutingRule#condition}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether the MutingRule is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/alert_muting_rule#enabled AlertMutingRule#enabled}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the MutingRule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/alert_muting_rule#name AlertMutingRule#name}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.accountId"></a>

```go
AccountId *f64
```

- *Type:* *f64

The account id of the MutingRule..

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/alert_muting_rule#account_id AlertMutingRule#account_id}

---

##### `ActionOnMutingRuleWindowEnded`<sup>Optional</sup> <a name="ActionOnMutingRuleWindowEnded" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.actionOnMutingRuleWindowEnded"></a>

```go
ActionOnMutingRuleWindowEnded *string
```

- *Type:* *string

The action when the muting rule window is ended or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/alert_muting_rule#action_on_muting_rule_window_ended AlertMutingRule#action_on_muting_rule_window_ended}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the MutingRule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/alert_muting_rule#description AlertMutingRule#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/alert_muting_rule#id AlertMutingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.schedule"></a>

```go
Schedule AlertMutingRuleSchedule
```

- *Type:* <a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule">AlertMutingRuleSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/alert_muting_rule#schedule AlertMutingRule#schedule}

---

### AlertMutingRuleSchedule <a name="AlertMutingRuleSchedule" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/alertmutingrule"

&alertmutingrule.AlertMutingRuleSchedule {
	TimeZone: *string,
	EndRepeat: *string,
	EndTime: *string,
	Repeat: *string,
	RepeatCount: *f64,
	StartTime: *string,
	WeeklyRepeatDays: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule.property.timeZone">TimeZone</a></code> | <code>*string</code> | The time zone that applies to the MutingRule schedule. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule.property.endRepeat">EndRepeat</a></code> | <code>*string</code> | The datetime stamp when the MutingRule schedule should stop repeating. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule.property.endTime">EndTime</a></code> | <code>*string</code> | The datetime stamp representing when the MutingRule should end. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule.property.repeat">Repeat</a></code> | <code>*string</code> | The frequency the MutingRule schedule repeats. One of [DAILY, WEEKLY, MONTHLY]. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule.property.repeatCount">RepeatCount</a></code> | <code>*f64</code> | The number of times the MutingRule schedule should repeat. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule.property.startTime">StartTime</a></code> | <code>*string</code> | The datetime stamp representing when the MutingRule should start. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule.property.weeklyRepeatDays">WeeklyRepeatDays</a></code> | <code>*[]*string</code> | The day(s) of the week that a MutingRule should repeat when the repeat field is set to WEEKLY. |

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule.property.timeZone"></a>

```go
TimeZone *string
```

- *Type:* *string

The time zone that applies to the MutingRule schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/alert_muting_rule#time_zone AlertMutingRule#time_zone}

---

##### `EndRepeat`<sup>Optional</sup> <a name="EndRepeat" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule.property.endRepeat"></a>

```go
EndRepeat *string
```

- *Type:* *string

The datetime stamp when the MutingRule schedule should stop repeating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/alert_muting_rule#end_repeat AlertMutingRule#end_repeat}

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule.property.endTime"></a>

```go
EndTime *string
```

- *Type:* *string

The datetime stamp representing when the MutingRule should end.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/alert_muting_rule#end_time AlertMutingRule#end_time}

---

##### `Repeat`<sup>Optional</sup> <a name="Repeat" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule.property.repeat"></a>

```go
Repeat *string
```

- *Type:* *string

The frequency the MutingRule schedule repeats. One of [DAILY, WEEKLY, MONTHLY].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/alert_muting_rule#repeat AlertMutingRule#repeat}

---

##### `RepeatCount`<sup>Optional</sup> <a name="RepeatCount" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule.property.repeatCount"></a>

```go
RepeatCount *f64
```

- *Type:* *f64

The number of times the MutingRule schedule should repeat.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/alert_muting_rule#repeat_count AlertMutingRule#repeat_count}

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule.property.startTime"></a>

```go
StartTime *string
```

- *Type:* *string

The datetime stamp representing when the MutingRule should start.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/alert_muting_rule#start_time AlertMutingRule#start_time}

---

##### `WeeklyRepeatDays`<sup>Optional</sup> <a name="WeeklyRepeatDays" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule.property.weeklyRepeatDays"></a>

```go
WeeklyRepeatDays *[]*string
```

- *Type:* *[]*string

The day(s) of the week that a MutingRule should repeat when the repeat field is set to WEEKLY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/alert_muting_rule#weekly_repeat_days AlertMutingRule#weekly_repeat_days}

---

## Classes <a name="Classes" id="Classes"></a>

### AlertMutingRuleConditionConditionsList <a name="AlertMutingRuleConditionConditionsList" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/alertmutingrule"

alertmutingrule.NewAlertMutingRuleConditionConditionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AlertMutingRuleConditionConditionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.get"></a>

```go
func Get(index *f64) AlertMutingRuleConditionConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AlertMutingRuleConditionConditionsOutputReference <a name="AlertMutingRuleConditionConditionsOutputReference" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/alertmutingrule"

alertmutingrule.NewAlertMutingRuleConditionConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AlertMutingRuleConditionConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.attributeInput">AttributeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.attribute">Attribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttributeInput`<sup>Optional</sup> <a name="AttributeInput" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.attributeInput"></a>

```go
func AttributeInput() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.attribute"></a>

```go
func Attribute() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AlertMutingRuleConditionOutputReference <a name="AlertMutingRuleConditionOutputReference" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/alertmutingrule"

alertmutingrule.NewAlertMutingRuleConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AlertMutingRuleConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.putConditions">PutConditions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConditions` <a name="PutConditions" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.putConditions"></a>

```go
func PutConditions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.putConditions.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.property.conditions">Conditions</a></code> | <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList">AlertMutingRuleConditionConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.property.conditionsInput">ConditionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleCondition">AlertMutingRuleCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.property.conditions"></a>

```go
func Conditions() AlertMutingRuleConditionConditionsList
```

- *Type:* <a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList">AlertMutingRuleConditionConditionsList</a>

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.property.conditionsInput"></a>

```go
func ConditionsInput() interface{}
```

- *Type:* interface{}

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() AlertMutingRuleCondition
```

- *Type:* <a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleCondition">AlertMutingRuleCondition</a>

---


### AlertMutingRuleScheduleOutputReference <a name="AlertMutingRuleScheduleOutputReference" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/alertmutingrule"

alertmutingrule.NewAlertMutingRuleScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AlertMutingRuleScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.resetEndRepeat">ResetEndRepeat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.resetEndTime">ResetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.resetRepeat">ResetRepeat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.resetRepeatCount">ResetRepeatCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.resetWeeklyRepeatDays">ResetWeeklyRepeatDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndRepeat` <a name="ResetEndRepeat" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.resetEndRepeat"></a>

```go
func ResetEndRepeat()
```

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.resetEndTime"></a>

```go
func ResetEndTime()
```

##### `ResetRepeat` <a name="ResetRepeat" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.resetRepeat"></a>

```go
func ResetRepeat()
```

##### `ResetRepeatCount` <a name="ResetRepeatCount" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.resetRepeatCount"></a>

```go
func ResetRepeatCount()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.resetStartTime"></a>

```go
func ResetStartTime()
```

##### `ResetWeeklyRepeatDays` <a name="ResetWeeklyRepeatDays" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.resetWeeklyRepeatDays"></a>

```go
func ResetWeeklyRepeatDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.endRepeatInput">EndRepeatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.endTimeInput">EndTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.repeatCountInput">RepeatCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.repeatInput">RepeatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.weeklyRepeatDaysInput">WeeklyRepeatDaysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.endRepeat">EndRepeat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.repeat">Repeat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.repeatCount">RepeatCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.weeklyRepeatDays">WeeklyRepeatDays</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule">AlertMutingRuleSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndRepeatInput`<sup>Optional</sup> <a name="EndRepeatInput" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.endRepeatInput"></a>

```go
func EndRepeatInput() *string
```

- *Type:* *string

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.endTimeInput"></a>

```go
func EndTimeInput() *string
```

- *Type:* *string

---

##### `RepeatCountInput`<sup>Optional</sup> <a name="RepeatCountInput" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.repeatCountInput"></a>

```go
func RepeatCountInput() *f64
```

- *Type:* *f64

---

##### `RepeatInput`<sup>Optional</sup> <a name="RepeatInput" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.repeatInput"></a>

```go
func RepeatInput() *string
```

- *Type:* *string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.startTimeInput"></a>

```go
func StartTimeInput() *string
```

- *Type:* *string

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.timeZoneInput"></a>

```go
func TimeZoneInput() *string
```

- *Type:* *string

---

##### `WeeklyRepeatDaysInput`<sup>Optional</sup> <a name="WeeklyRepeatDaysInput" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.weeklyRepeatDaysInput"></a>

```go
func WeeklyRepeatDaysInput() *[]*string
```

- *Type:* *[]*string

---

##### `EndRepeat`<sup>Required</sup> <a name="EndRepeat" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.endRepeat"></a>

```go
func EndRepeat() *string
```

- *Type:* *string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `Repeat`<sup>Required</sup> <a name="Repeat" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.repeat"></a>

```go
func Repeat() *string
```

- *Type:* *string

---

##### `RepeatCount`<sup>Required</sup> <a name="RepeatCount" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.repeatCount"></a>

```go
func RepeatCount() *f64
```

- *Type:* *f64

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

##### `WeeklyRepeatDays`<sup>Required</sup> <a name="WeeklyRepeatDays" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.weeklyRepeatDays"></a>

```go
func WeeklyRepeatDays() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() AlertMutingRuleSchedule
```

- *Type:* <a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule">AlertMutingRuleSchedule</a>

---



