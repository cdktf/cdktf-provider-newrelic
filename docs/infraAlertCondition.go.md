# `infraAlertCondition` Submodule <a name="`infraAlertCondition` Submodule" id="@cdktf/provider-newrelic.infraAlertCondition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### InfraAlertCondition <a name="InfraAlertCondition" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/infra_alert_condition newrelic_infra_alert_condition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/infraalertcondition"

infraalertcondition.NewInfraAlertCondition(scope Construct, id *string, config InfraAlertConditionConfig) InfraAlertCondition
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig">InfraAlertConditionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig">InfraAlertConditionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.putCritical">PutCritical</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.putWarning">PutWarning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetComparison">ResetComparison</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetCritical">ResetCritical</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetEvent">ResetEvent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetIntegrationProvider">ResetIntegrationProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetProcessWhere">ResetProcessWhere</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetRunbookUrl">ResetRunbookUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetSelect">ResetSelect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetViolationCloseTimer">ResetViolationCloseTimer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetWarning">ResetWarning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetWhere">ResetWhere</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCritical` <a name="PutCritical" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.putCritical"></a>

```go
func PutCritical(value InfraAlertConditionCritical)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.putCritical.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical">InfraAlertConditionCritical</a>

---

##### `PutWarning` <a name="PutWarning" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.putWarning"></a>

```go
func PutWarning(value InfraAlertConditionWarning)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.putWarning.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning">InfraAlertConditionWarning</a>

---

##### `ResetComparison` <a name="ResetComparison" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetComparison"></a>

```go
func ResetComparison()
```

##### `ResetCritical` <a name="ResetCritical" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetCritical"></a>

```go
func ResetCritical()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetEvent` <a name="ResetEvent" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetEvent"></a>

```go
func ResetEvent()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetId"></a>

```go
func ResetId()
```

##### `ResetIntegrationProvider` <a name="ResetIntegrationProvider" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetIntegrationProvider"></a>

```go
func ResetIntegrationProvider()
```

##### `ResetProcessWhere` <a name="ResetProcessWhere" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetProcessWhere"></a>

```go
func ResetProcessWhere()
```

##### `ResetRunbookUrl` <a name="ResetRunbookUrl" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetRunbookUrl"></a>

```go
func ResetRunbookUrl()
```

##### `ResetSelect` <a name="ResetSelect" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetSelect"></a>

```go
func ResetSelect()
```

##### `ResetViolationCloseTimer` <a name="ResetViolationCloseTimer" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetViolationCloseTimer"></a>

```go
func ResetViolationCloseTimer()
```

##### `ResetWarning` <a name="ResetWarning" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetWarning"></a>

```go
func ResetWarning()
```

##### `ResetWhere` <a name="ResetWhere" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetWhere"></a>

```go
func ResetWhere()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a InfraAlertCondition resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/infraalertcondition"

infraalertcondition.InfraAlertCondition_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/infraalertcondition"

infraalertcondition.InfraAlertCondition_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/infraalertcondition"

infraalertcondition.InfraAlertCondition_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/infraalertcondition"

infraalertcondition.InfraAlertCondition_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a InfraAlertCondition resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the InfraAlertCondition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing InfraAlertCondition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/infra_alert_condition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the InfraAlertCondition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.createdAt">CreatedAt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.critical">Critical</a></code> | <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference">InfraAlertConditionCriticalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.entityGuid">EntityGuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.updatedAt">UpdatedAt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.warning">Warning</a></code> | <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference">InfraAlertConditionWarningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.comparisonInput">ComparisonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.criticalInput">CriticalInput</a></code> | <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical">InfraAlertConditionCritical</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.eventInput">EventInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.integrationProviderInput">IntegrationProviderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.policyIdInput">PolicyIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.processWhereInput">ProcessWhereInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.runbookUrlInput">RunbookUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.selectInput">SelectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.violationCloseTimerInput">ViolationCloseTimerInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.warningInput">WarningInput</a></code> | <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning">InfraAlertConditionWarning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.whereInput">WhereInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.comparison">Comparison</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.event">Event</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.integrationProvider">IntegrationProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.policyId">PolicyId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.processWhere">ProcessWhere</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.runbookUrl">RunbookUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.select">Select</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.violationCloseTimer">ViolationCloseTimer</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.where">Where</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.createdAt"></a>

```go
func CreatedAt() *f64
```

- *Type:* *f64

---

##### `Critical`<sup>Required</sup> <a name="Critical" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.critical"></a>

```go
func Critical() InfraAlertConditionCriticalOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference">InfraAlertConditionCriticalOutputReference</a>

---

##### `EntityGuid`<sup>Required</sup> <a name="EntityGuid" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.entityGuid"></a>

```go
func EntityGuid() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.updatedAt"></a>

```go
func UpdatedAt() *f64
```

- *Type:* *f64

---

##### `Warning`<sup>Required</sup> <a name="Warning" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.warning"></a>

```go
func Warning() InfraAlertConditionWarningOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference">InfraAlertConditionWarningOutputReference</a>

---

##### `ComparisonInput`<sup>Optional</sup> <a name="ComparisonInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.comparisonInput"></a>

```go
func ComparisonInput() *string
```

- *Type:* *string

---

##### `CriticalInput`<sup>Optional</sup> <a name="CriticalInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.criticalInput"></a>

```go
func CriticalInput() InfraAlertConditionCritical
```

- *Type:* <a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical">InfraAlertConditionCritical</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EventInput`<sup>Optional</sup> <a name="EventInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.eventInput"></a>

```go
func EventInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IntegrationProviderInput`<sup>Optional</sup> <a name="IntegrationProviderInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.integrationProviderInput"></a>

```go
func IntegrationProviderInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.policyIdInput"></a>

```go
func PolicyIdInput() *f64
```

- *Type:* *f64

---

##### `ProcessWhereInput`<sup>Optional</sup> <a name="ProcessWhereInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.processWhereInput"></a>

```go
func ProcessWhereInput() *string
```

- *Type:* *string

---

##### `RunbookUrlInput`<sup>Optional</sup> <a name="RunbookUrlInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.runbookUrlInput"></a>

```go
func RunbookUrlInput() *string
```

- *Type:* *string

---

##### `SelectInput`<sup>Optional</sup> <a name="SelectInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.selectInput"></a>

```go
func SelectInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ViolationCloseTimerInput`<sup>Optional</sup> <a name="ViolationCloseTimerInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.violationCloseTimerInput"></a>

```go
func ViolationCloseTimerInput() *f64
```

- *Type:* *f64

---

##### `WarningInput`<sup>Optional</sup> <a name="WarningInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.warningInput"></a>

```go
func WarningInput() InfraAlertConditionWarning
```

- *Type:* <a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning">InfraAlertConditionWarning</a>

---

##### `WhereInput`<sup>Optional</sup> <a name="WhereInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.whereInput"></a>

```go
func WhereInput() *string
```

- *Type:* *string

---

##### `Comparison`<sup>Required</sup> <a name="Comparison" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.comparison"></a>

```go
func Comparison() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Event`<sup>Required</sup> <a name="Event" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.event"></a>

```go
func Event() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IntegrationProvider`<sup>Required</sup> <a name="IntegrationProvider" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.integrationProvider"></a>

```go
func IntegrationProvider() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.policyId"></a>

```go
func PolicyId() *f64
```

- *Type:* *f64

---

##### `ProcessWhere`<sup>Required</sup> <a name="ProcessWhere" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.processWhere"></a>

```go
func ProcessWhere() *string
```

- *Type:* *string

---

##### `RunbookUrl`<sup>Required</sup> <a name="RunbookUrl" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.runbookUrl"></a>

```go
func RunbookUrl() *string
```

- *Type:* *string

---

##### `Select`<sup>Required</sup> <a name="Select" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.select"></a>

```go
func Select() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `ViolationCloseTimer`<sup>Required</sup> <a name="ViolationCloseTimer" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.violationCloseTimer"></a>

```go
func ViolationCloseTimer() *f64
```

- *Type:* *f64

---

##### `Where`<sup>Required</sup> <a name="Where" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.where"></a>

```go
func Where() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### InfraAlertConditionConfig <a name="InfraAlertConditionConfig" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/infraalertcondition"

&infraalertcondition.InfraAlertConditionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	PolicyId: *f64,
	Type: *string,
	Comparison: *string,
	Critical: github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12.infraAlertCondition.InfraAlertConditionCritical,
	Description: *string,
	Enabled: interface{},
	Event: *string,
	Id: *string,
	IntegrationProvider: *string,
	ProcessWhere: *string,
	RunbookUrl: *string,
	Select: *string,
	ViolationCloseTimer: *f64,
	Warning: github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12.infraAlertCondition.InfraAlertConditionWarning,
	Where: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.name">Name</a></code> | <code>*string</code> | The Infrastructure alert condition's name. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.policyId">PolicyId</a></code> | <code>*f64</code> | The ID of the alert policy where this condition should be used. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.type">Type</a></code> | <code>*string</code> | The type of Infrastructure alert condition. Valid values are infra_process_running, infra_metric, and infra_host_not_reporting. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.comparison">Comparison</a></code> | <code>*string</code> | The operator used to evaluate the threshold value. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.critical">Critical</a></code> | <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical">InfraAlertConditionCritical</a></code> | critical block. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.description">Description</a></code> | <code>*string</code> | The description of the Infrastructure alert condition. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether the condition is turned on or off. Valid values are true and false. Defaults to true. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.event">Event</a></code> | <code>*string</code> | The metric event; for example, SystemSample or StorageSample. Supported by the infra_metric condition type. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/infra_alert_condition#id InfraAlertCondition#id}. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.integrationProvider">IntegrationProvider</a></code> | <code>*string</code> | For alerts on integrations, use this instead of event. Supported by the infra_metric condition type. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.processWhere">ProcessWhere</a></code> | <code>*string</code> | Any filters applied to processes; for example: commandName = 'java'. Supported by the infra_process_running condition type. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.runbookUrl">RunbookUrl</a></code> | <code>*string</code> | Runbook URL to display in notifications. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.select">Select</a></code> | <code>*string</code> | The attribute name to identify the metric being targeted; |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.violationCloseTimer">ViolationCloseTimer</a></code> | <code>*f64</code> | Determines how much time, in hours, will pass before an incident is automatically closed. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.warning">Warning</a></code> | <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning">InfraAlertConditionWarning</a></code> | warning block. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.where">Where</a></code> | <code>*string</code> | If applicable, this identifies any Infrastructure host filters used; for example: hostname LIKE '%cassandra%'. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The Infrastructure alert condition's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/infra_alert_condition#name InfraAlertCondition#name}

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.policyId"></a>

```go
PolicyId *f64
```

- *Type:* *f64

The ID of the alert policy where this condition should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/infra_alert_condition#policy_id InfraAlertCondition#policy_id}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of Infrastructure alert condition. Valid values are infra_process_running, infra_metric, and infra_host_not_reporting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/infra_alert_condition#type InfraAlertCondition#type}

---

##### `Comparison`<sup>Optional</sup> <a name="Comparison" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.comparison"></a>

```go
Comparison *string
```

- *Type:* *string

The operator used to evaluate the threshold value.

Valid values are above, below, and equal. Supported by the infra_metric and infra_process_running condition types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/infra_alert_condition#comparison InfraAlertCondition#comparison}

---

##### `Critical`<sup>Optional</sup> <a name="Critical" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.critical"></a>

```go
Critical InfraAlertConditionCritical
```

- *Type:* <a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical">InfraAlertConditionCritical</a>

critical block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/infra_alert_condition#critical InfraAlertCondition#critical}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the Infrastructure alert condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/infra_alert_condition#description InfraAlertCondition#description}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether the condition is turned on or off. Valid values are true and false. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/infra_alert_condition#enabled InfraAlertCondition#enabled}

---

##### `Event`<sup>Optional</sup> <a name="Event" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.event"></a>

```go
Event *string
```

- *Type:* *string

The metric event; for example, SystemSample or StorageSample. Supported by the infra_metric condition type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/infra_alert_condition#event InfraAlertCondition#event}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/infra_alert_condition#id InfraAlertCondition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IntegrationProvider`<sup>Optional</sup> <a name="IntegrationProvider" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.integrationProvider"></a>

```go
IntegrationProvider *string
```

- *Type:* *string

For alerts on integrations, use this instead of event. Supported by the infra_metric condition type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/infra_alert_condition#integration_provider InfraAlertCondition#integration_provider}

---

##### `ProcessWhere`<sup>Optional</sup> <a name="ProcessWhere" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.processWhere"></a>

```go
ProcessWhere *string
```

- *Type:* *string

Any filters applied to processes; for example: commandName = 'java'. Supported by the infra_process_running condition type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/infra_alert_condition#process_where InfraAlertCondition#process_where}

---

##### `RunbookUrl`<sup>Optional</sup> <a name="RunbookUrl" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.runbookUrl"></a>

```go
RunbookUrl *string
```

- *Type:* *string

Runbook URL to display in notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/infra_alert_condition#runbook_url InfraAlertCondition#runbook_url}

---

##### `Select`<sup>Optional</sup> <a name="Select" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.select"></a>

```go
Select *string
```

- *Type:* *string

The attribute name to identify the metric being targeted;

for example, cpuPercent, diskFreePercent, or memoryResidentSizeBytes. The underlying API will automatically populate this value for Infrastructure integrations (for example diskFreePercent), so make sure to explicitly include this value to avoid diff issues. Supported by the infra_metric condition type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/infra_alert_condition#select InfraAlertCondition#select}

---

##### `ViolationCloseTimer`<sup>Optional</sup> <a name="ViolationCloseTimer" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.violationCloseTimer"></a>

```go
ViolationCloseTimer *f64
```

- *Type:* *f64

Determines how much time, in hours, will pass before an incident is automatically closed.

Valid values are 1, 2, 4, 8, 12, 24, 48, or 72

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/infra_alert_condition#violation_close_timer InfraAlertCondition#violation_close_timer}

---

##### `Warning`<sup>Optional</sup> <a name="Warning" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.warning"></a>

```go
Warning InfraAlertConditionWarning
```

- *Type:* <a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning">InfraAlertConditionWarning</a>

warning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/infra_alert_condition#warning InfraAlertCondition#warning}

---

##### `Where`<sup>Optional</sup> <a name="Where" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.where"></a>

```go
Where *string
```

- *Type:* *string

If applicable, this identifies any Infrastructure host filters used; for example: hostname LIKE '%cassandra%'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/infra_alert_condition#where InfraAlertCondition#where}

---

### InfraAlertConditionCritical <a name="InfraAlertConditionCritical" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/infraalertcondition"

&infraalertcondition.InfraAlertConditionCritical {
	Duration: *f64,
	TimeFunction: *string,
	Value: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical.property.duration">Duration</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/infra_alert_condition#duration InfraAlertCondition#duration}. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical.property.timeFunction">TimeFunction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/infra_alert_condition#time_function InfraAlertCondition#time_function}. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical.property.value">Value</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/infra_alert_condition#value InfraAlertCondition#value}. |

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical.property.duration"></a>

```go
Duration *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/infra_alert_condition#duration InfraAlertCondition#duration}.

---

##### `TimeFunction`<sup>Optional</sup> <a name="TimeFunction" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical.property.timeFunction"></a>

```go
TimeFunction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/infra_alert_condition#time_function InfraAlertCondition#time_function}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical.property.value"></a>

```go
Value *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/infra_alert_condition#value InfraAlertCondition#value}.

---

### InfraAlertConditionWarning <a name="InfraAlertConditionWarning" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/infraalertcondition"

&infraalertcondition.InfraAlertConditionWarning {
	Duration: *f64,
	TimeFunction: *string,
	Value: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning.property.duration">Duration</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/infra_alert_condition#duration InfraAlertCondition#duration}. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning.property.timeFunction">TimeFunction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/infra_alert_condition#time_function InfraAlertCondition#time_function}. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning.property.value">Value</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/infra_alert_condition#value InfraAlertCondition#value}. |

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning.property.duration"></a>

```go
Duration *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/infra_alert_condition#duration InfraAlertCondition#duration}.

---

##### `TimeFunction`<sup>Optional</sup> <a name="TimeFunction" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning.property.timeFunction"></a>

```go
TimeFunction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/infra_alert_condition#time_function InfraAlertCondition#time_function}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning.property.value"></a>

```go
Value *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/infra_alert_condition#value InfraAlertCondition#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### InfraAlertConditionCriticalOutputReference <a name="InfraAlertConditionCriticalOutputReference" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/infraalertcondition"

infraalertcondition.NewInfraAlertConditionCriticalOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) InfraAlertConditionCriticalOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.resetTimeFunction">ResetTimeFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTimeFunction` <a name="ResetTimeFunction" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.resetTimeFunction"></a>

```go
func ResetTimeFunction()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.durationInput">DurationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.timeFunctionInput">TimeFunctionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.valueInput">ValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.duration">Duration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.timeFunction">TimeFunction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical">InfraAlertConditionCritical</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.durationInput"></a>

```go
func DurationInput() *f64
```

- *Type:* *f64

---

##### `TimeFunctionInput`<sup>Optional</sup> <a name="TimeFunctionInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.timeFunctionInput"></a>

```go
func TimeFunctionInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.valueInput"></a>

```go
func ValueInput() *f64
```

- *Type:* *f64

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.duration"></a>

```go
func Duration() *f64
```

- *Type:* *f64

---

##### `TimeFunction`<sup>Required</sup> <a name="TimeFunction" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.timeFunction"></a>

```go
func TimeFunction() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.internalValue"></a>

```go
func InternalValue() InfraAlertConditionCritical
```

- *Type:* <a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical">InfraAlertConditionCritical</a>

---


### InfraAlertConditionWarningOutputReference <a name="InfraAlertConditionWarningOutputReference" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/infraalertcondition"

infraalertcondition.NewInfraAlertConditionWarningOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) InfraAlertConditionWarningOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.resetTimeFunction">ResetTimeFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTimeFunction` <a name="ResetTimeFunction" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.resetTimeFunction"></a>

```go
func ResetTimeFunction()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.durationInput">DurationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.timeFunctionInput">TimeFunctionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.valueInput">ValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.duration">Duration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.timeFunction">TimeFunction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning">InfraAlertConditionWarning</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.durationInput"></a>

```go
func DurationInput() *f64
```

- *Type:* *f64

---

##### `TimeFunctionInput`<sup>Optional</sup> <a name="TimeFunctionInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.timeFunctionInput"></a>

```go
func TimeFunctionInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.valueInput"></a>

```go
func ValueInput() *f64
```

- *Type:* *f64

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.duration"></a>

```go
func Duration() *f64
```

- *Type:* *f64

---

##### `TimeFunction`<sup>Required</sup> <a name="TimeFunction" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.timeFunction"></a>

```go
func TimeFunction() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.internalValue"></a>

```go
func InternalValue() InfraAlertConditionWarning
```

- *Type:* <a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning">InfraAlertConditionWarning</a>

---



