# `syntheticsMultilocationAlertCondition` Submodule <a name="`syntheticsMultilocationAlertCondition` Submodule" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SyntheticsMultilocationAlertCondition <a name="SyntheticsMultilocationAlertCondition" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.74.0/docs/resources/synthetics_multilocation_alert_condition newrelic_synthetics_multilocation_alert_condition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/syntheticsmultilocationalertcondition"

syntheticsmultilocationalertcondition.NewSyntheticsMultilocationAlertCondition(scope Construct, id *string, config SyntheticsMultilocationAlertConditionConfig) SyntheticsMultilocationAlertCondition
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig">SyntheticsMultilocationAlertConditionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig">SyntheticsMultilocationAlertConditionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.putCritical">PutCritical</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.putWarning">PutWarning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.resetRunbookUrl">ResetRunbookUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.resetViolationTimeLimitSeconds">ResetViolationTimeLimitSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.resetWarning">ResetWarning</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCritical` <a name="PutCritical" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.putCritical"></a>

```go
func PutCritical(value SyntheticsMultilocationAlertConditionCritical)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.putCritical.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCritical">SyntheticsMultilocationAlertConditionCritical</a>

---

##### `PutWarning` <a name="PutWarning" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.putWarning"></a>

```go
func PutWarning(value SyntheticsMultilocationAlertConditionWarning)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.putWarning.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarning">SyntheticsMultilocationAlertConditionWarning</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.resetId"></a>

```go
func ResetId()
```

##### `ResetRunbookUrl` <a name="ResetRunbookUrl" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.resetRunbookUrl"></a>

```go
func ResetRunbookUrl()
```

##### `ResetViolationTimeLimitSeconds` <a name="ResetViolationTimeLimitSeconds" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.resetViolationTimeLimitSeconds"></a>

```go
func ResetViolationTimeLimitSeconds()
```

##### `ResetWarning` <a name="ResetWarning" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.resetWarning"></a>

```go
func ResetWarning()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SyntheticsMultilocationAlertCondition resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/syntheticsmultilocationalertcondition"

syntheticsmultilocationalertcondition.SyntheticsMultilocationAlertCondition_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/syntheticsmultilocationalertcondition"

syntheticsmultilocationalertcondition.SyntheticsMultilocationAlertCondition_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/syntheticsmultilocationalertcondition"

syntheticsmultilocationalertcondition.SyntheticsMultilocationAlertCondition_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/syntheticsmultilocationalertcondition"

syntheticsmultilocationalertcondition.SyntheticsMultilocationAlertCondition_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SyntheticsMultilocationAlertCondition resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SyntheticsMultilocationAlertCondition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SyntheticsMultilocationAlertCondition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.74.0/docs/resources/synthetics_multilocation_alert_condition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SyntheticsMultilocationAlertCondition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.critical">Critical</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference">SyntheticsMultilocationAlertConditionCriticalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.entityGuid">EntityGuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.warning">Warning</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference">SyntheticsMultilocationAlertConditionWarningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.criticalInput">CriticalInput</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCritical">SyntheticsMultilocationAlertConditionCritical</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.entitiesInput">EntitiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.policyIdInput">PolicyIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.runbookUrlInput">RunbookUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.violationTimeLimitSecondsInput">ViolationTimeLimitSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.warningInput">WarningInput</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarning">SyntheticsMultilocationAlertConditionWarning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.entities">Entities</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.policyId">PolicyId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.runbookUrl">RunbookUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.violationTimeLimitSeconds">ViolationTimeLimitSeconds</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Critical`<sup>Required</sup> <a name="Critical" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.critical"></a>

```go
func Critical() SyntheticsMultilocationAlertConditionCriticalOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference">SyntheticsMultilocationAlertConditionCriticalOutputReference</a>

---

##### `EntityGuid`<sup>Required</sup> <a name="EntityGuid" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.entityGuid"></a>

```go
func EntityGuid() *string
```

- *Type:* *string

---

##### `Warning`<sup>Required</sup> <a name="Warning" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.warning"></a>

```go
func Warning() SyntheticsMultilocationAlertConditionWarningOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference">SyntheticsMultilocationAlertConditionWarningOutputReference</a>

---

##### `CriticalInput`<sup>Optional</sup> <a name="CriticalInput" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.criticalInput"></a>

```go
func CriticalInput() SyntheticsMultilocationAlertConditionCritical
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCritical">SyntheticsMultilocationAlertConditionCritical</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EntitiesInput`<sup>Optional</sup> <a name="EntitiesInput" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.entitiesInput"></a>

```go
func EntitiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.policyIdInput"></a>

```go
func PolicyIdInput() *f64
```

- *Type:* *f64

---

##### `RunbookUrlInput`<sup>Optional</sup> <a name="RunbookUrlInput" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.runbookUrlInput"></a>

```go
func RunbookUrlInput() *string
```

- *Type:* *string

---

##### `ViolationTimeLimitSecondsInput`<sup>Optional</sup> <a name="ViolationTimeLimitSecondsInput" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.violationTimeLimitSecondsInput"></a>

```go
func ViolationTimeLimitSecondsInput() *f64
```

- *Type:* *f64

---

##### `WarningInput`<sup>Optional</sup> <a name="WarningInput" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.warningInput"></a>

```go
func WarningInput() SyntheticsMultilocationAlertConditionWarning
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarning">SyntheticsMultilocationAlertConditionWarning</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Entities`<sup>Required</sup> <a name="Entities" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.entities"></a>

```go
func Entities() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.policyId"></a>

```go
func PolicyId() *f64
```

- *Type:* *f64

---

##### `RunbookUrl`<sup>Required</sup> <a name="RunbookUrl" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.runbookUrl"></a>

```go
func RunbookUrl() *string
```

- *Type:* *string

---

##### `ViolationTimeLimitSeconds`<sup>Required</sup> <a name="ViolationTimeLimitSeconds" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.violationTimeLimitSeconds"></a>

```go
func ViolationTimeLimitSeconds() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SyntheticsMultilocationAlertConditionConfig <a name="SyntheticsMultilocationAlertConditionConfig" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/syntheticsmultilocationalertcondition"

&syntheticsmultilocationalertcondition.SyntheticsMultilocationAlertConditionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Critical: github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCritical,
	Entities: *[]*string,
	Name: *string,
	PolicyId: *f64,
	Enabled: interface{},
	Id: *string,
	RunbookUrl: *string,
	ViolationTimeLimitSeconds: *f64,
	Warning: github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarning,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.critical">Critical</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCritical">SyntheticsMultilocationAlertConditionCritical</a></code> | critical block. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.entities">Entities</a></code> | <code>*[]*string</code> | The GUIDs of the Synthetics monitors to alert on. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.name">Name</a></code> | <code>*string</code> | The title of this condition. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.policyId">PolicyId</a></code> | <code>*f64</code> | The ID of the policy where this condition will be used. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Set whether to enable the alert condition. Defaults to true. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.74.0/docs/resources/synthetics_multilocation_alert_condition#id SyntheticsMultilocationAlertCondition#id}. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.runbookUrl">RunbookUrl</a></code> | <code>*string</code> | Runbook URL to display in notifications. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.violationTimeLimitSeconds">ViolationTimeLimitSeconds</a></code> | <code>*f64</code> | Sets a time limit, in seconds, that will automatically force-close a long-lasting incident after the time limit you select. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.warning">Warning</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarning">SyntheticsMultilocationAlertConditionWarning</a></code> | warning block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Critical`<sup>Required</sup> <a name="Critical" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.critical"></a>

```go
Critical SyntheticsMultilocationAlertConditionCritical
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCritical">SyntheticsMultilocationAlertConditionCritical</a>

critical block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.74.0/docs/resources/synthetics_multilocation_alert_condition#critical SyntheticsMultilocationAlertCondition#critical}

---

##### `Entities`<sup>Required</sup> <a name="Entities" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.entities"></a>

```go
Entities *[]*string
```

- *Type:* *[]*string

The GUIDs of the Synthetics monitors to alert on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.74.0/docs/resources/synthetics_multilocation_alert_condition#entities SyntheticsMultilocationAlertCondition#entities}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The title of this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.74.0/docs/resources/synthetics_multilocation_alert_condition#name SyntheticsMultilocationAlertCondition#name}

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.policyId"></a>

```go
PolicyId *f64
```

- *Type:* *f64

The ID of the policy where this condition will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.74.0/docs/resources/synthetics_multilocation_alert_condition#policy_id SyntheticsMultilocationAlertCondition#policy_id}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Set whether to enable the alert condition. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.74.0/docs/resources/synthetics_multilocation_alert_condition#enabled SyntheticsMultilocationAlertCondition#enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.74.0/docs/resources/synthetics_multilocation_alert_condition#id SyntheticsMultilocationAlertCondition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RunbookUrl`<sup>Optional</sup> <a name="RunbookUrl" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.runbookUrl"></a>

```go
RunbookUrl *string
```

- *Type:* *string

Runbook URL to display in notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.74.0/docs/resources/synthetics_multilocation_alert_condition#runbook_url SyntheticsMultilocationAlertCondition#runbook_url}

---

##### `ViolationTimeLimitSeconds`<sup>Optional</sup> <a name="ViolationTimeLimitSeconds" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.violationTimeLimitSeconds"></a>

```go
ViolationTimeLimitSeconds *f64
```

- *Type:* *f64

Sets a time limit, in seconds, that will automatically force-close a long-lasting incident after the time limit you select.

Must be in the range of 300 to 2592000 (inclusive)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.74.0/docs/resources/synthetics_multilocation_alert_condition#violation_time_limit_seconds SyntheticsMultilocationAlertCondition#violation_time_limit_seconds}

---

##### `Warning`<sup>Optional</sup> <a name="Warning" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.warning"></a>

```go
Warning SyntheticsMultilocationAlertConditionWarning
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarning">SyntheticsMultilocationAlertConditionWarning</a>

warning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.74.0/docs/resources/synthetics_multilocation_alert_condition#warning SyntheticsMultilocationAlertCondition#warning}

---

### SyntheticsMultilocationAlertConditionCritical <a name="SyntheticsMultilocationAlertConditionCritical" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCritical"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCritical.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/syntheticsmultilocationalertcondition"

&syntheticsmultilocationalertcondition.SyntheticsMultilocationAlertConditionCritical {
	Threshold: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCritical.property.threshold">Threshold</a></code> | <code>*f64</code> | The minimum number of monitor locations that must be concurrently failing before an incident is opened. |

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCritical.property.threshold"></a>

```go
Threshold *f64
```

- *Type:* *f64

The minimum number of monitor locations that must be concurrently failing before an incident is opened.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.74.0/docs/resources/synthetics_multilocation_alert_condition#threshold SyntheticsMultilocationAlertCondition#threshold}

---

### SyntheticsMultilocationAlertConditionWarning <a name="SyntheticsMultilocationAlertConditionWarning" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarning.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/syntheticsmultilocationalertcondition"

&syntheticsmultilocationalertcondition.SyntheticsMultilocationAlertConditionWarning {
	Threshold: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarning.property.threshold">Threshold</a></code> | <code>*f64</code> | The minimum number of monitor locations that must be concurrently failing before an incident is opened. |

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarning.property.threshold"></a>

```go
Threshold *f64
```

- *Type:* *f64

The minimum number of monitor locations that must be concurrently failing before an incident is opened.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.74.0/docs/resources/synthetics_multilocation_alert_condition#threshold SyntheticsMultilocationAlertCondition#threshold}

---

## Classes <a name="Classes" id="Classes"></a>

### SyntheticsMultilocationAlertConditionCriticalOutputReference <a name="SyntheticsMultilocationAlertConditionCriticalOutputReference" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/syntheticsmultilocationalertcondition"

syntheticsmultilocationalertcondition.NewSyntheticsMultilocationAlertConditionCriticalOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SyntheticsMultilocationAlertConditionCriticalOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.property.threshold">Threshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCritical">SyntheticsMultilocationAlertConditionCritical</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.property.thresholdInput"></a>

```go
func ThresholdInput() *f64
```

- *Type:* *f64

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.property.threshold"></a>

```go
func Threshold() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.property.internalValue"></a>

```go
func InternalValue() SyntheticsMultilocationAlertConditionCritical
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCritical">SyntheticsMultilocationAlertConditionCritical</a>

---


### SyntheticsMultilocationAlertConditionWarningOutputReference <a name="SyntheticsMultilocationAlertConditionWarningOutputReference" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/syntheticsmultilocationalertcondition"

syntheticsmultilocationalertcondition.NewSyntheticsMultilocationAlertConditionWarningOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SyntheticsMultilocationAlertConditionWarningOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.property.threshold">Threshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarning">SyntheticsMultilocationAlertConditionWarning</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.property.thresholdInput"></a>

```go
func ThresholdInput() *f64
```

- *Type:* *f64

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.property.threshold"></a>

```go
func Threshold() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.property.internalValue"></a>

```go
func InternalValue() SyntheticsMultilocationAlertConditionWarning
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarning">SyntheticsMultilocationAlertConditionWarning</a>

---



