# `monitorDowntime` Submodule <a name="`monitorDowntime` Submodule" id="@cdktf/provider-newrelic.monitorDowntime"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitorDowntime <a name="MonitorDowntime" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/monitor_downtime newrelic_monitor_downtime}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/monitordowntime"

monitordowntime.NewMonitorDowntime(scope Construct, id *string, config MonitorDowntimeConfig) MonitorDowntime
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig">MonitorDowntimeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig">MonitorDowntimeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.putEndRepeat">PutEndRepeat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.putFrequency">PutFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetEndRepeat">ResetEndRepeat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetFrequency">ResetFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetMaintenanceDays">ResetMaintenanceDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetMonitorGuids">ResetMonitorGuids</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEndRepeat` <a name="PutEndRepeat" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.putEndRepeat"></a>

```go
func PutEndRepeat(value MonitorDowntimeEndRepeat)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.putEndRepeat.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeat">MonitorDowntimeEndRepeat</a>

---

##### `PutFrequency` <a name="PutFrequency" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.putFrequency"></a>

```go
func PutFrequency(value MonitorDowntimeFrequency)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.putFrequency.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequency">MonitorDowntimeFrequency</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetEndRepeat` <a name="ResetEndRepeat" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetEndRepeat"></a>

```go
func ResetEndRepeat()
```

##### `ResetFrequency` <a name="ResetFrequency" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetFrequency"></a>

```go
func ResetFrequency()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetId"></a>

```go
func ResetId()
```

##### `ResetMaintenanceDays` <a name="ResetMaintenanceDays" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetMaintenanceDays"></a>

```go
func ResetMaintenanceDays()
```

##### `ResetMonitorGuids` <a name="ResetMonitorGuids" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetMonitorGuids"></a>

```go
func ResetMonitorGuids()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MonitorDowntime resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/monitordowntime"

monitordowntime.MonitorDowntime_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/monitordowntime"

monitordowntime.MonitorDowntime_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/monitordowntime"

monitordowntime.MonitorDowntime_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/monitordowntime"

monitordowntime.MonitorDowntime_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a MonitorDowntime resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MonitorDowntime to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MonitorDowntime that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/monitor_downtime#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the MonitorDowntime to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.endRepeat">EndRepeat</a></code> | <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference">MonitorDowntimeEndRepeatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.frequency">Frequency</a></code> | <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference">MonitorDowntimeFrequencyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.accountIdInput">AccountIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.endRepeatInput">EndRepeatInput</a></code> | <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeat">MonitorDowntimeEndRepeat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.endTimeInput">EndTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.frequencyInput">FrequencyInput</a></code> | <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequency">MonitorDowntimeFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.maintenanceDaysInput">MaintenanceDaysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.monitorGuidsInput">MonitorGuidsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.startTimeInput">StartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.timeZoneInput">TimeZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.accountId">AccountId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.maintenanceDays">MaintenanceDays</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.monitorGuids">MonitorGuids</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EndRepeat`<sup>Required</sup> <a name="EndRepeat" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.endRepeat"></a>

```go
func EndRepeat() MonitorDowntimeEndRepeatOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference">MonitorDowntimeEndRepeatOutputReference</a>

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.frequency"></a>

```go
func Frequency() MonitorDowntimeFrequencyOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference">MonitorDowntimeFrequencyOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.accountIdInput"></a>

```go
func AccountIdInput() *f64
```

- *Type:* *f64

---

##### `EndRepeatInput`<sup>Optional</sup> <a name="EndRepeatInput" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.endRepeatInput"></a>

```go
func EndRepeatInput() MonitorDowntimeEndRepeat
```

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeat">MonitorDowntimeEndRepeat</a>

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.endTimeInput"></a>

```go
func EndTimeInput() *string
```

- *Type:* *string

---

##### `FrequencyInput`<sup>Optional</sup> <a name="FrequencyInput" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.frequencyInput"></a>

```go
func FrequencyInput() MonitorDowntimeFrequency
```

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequency">MonitorDowntimeFrequency</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MaintenanceDaysInput`<sup>Optional</sup> <a name="MaintenanceDaysInput" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.maintenanceDaysInput"></a>

```go
func MaintenanceDaysInput() *[]*string
```

- *Type:* *[]*string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `MonitorGuidsInput`<sup>Optional</sup> <a name="MonitorGuidsInput" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.monitorGuidsInput"></a>

```go
func MonitorGuidsInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.startTimeInput"></a>

```go
func StartTimeInput() *string
```

- *Type:* *string

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.timeZoneInput"></a>

```go
func TimeZoneInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.accountId"></a>

```go
func AccountId() *f64
```

- *Type:* *f64

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MaintenanceDays`<sup>Required</sup> <a name="MaintenanceDays" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.maintenanceDays"></a>

```go
func MaintenanceDays() *[]*string
```

- *Type:* *[]*string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `MonitorGuids`<sup>Required</sup> <a name="MonitorGuids" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.monitorGuids"></a>

```go
func MonitorGuids() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MonitorDowntimeConfig <a name="MonitorDowntimeConfig" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/monitordowntime"

&monitordowntime.MonitorDowntimeConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EndTime: *string,
	Mode: *string,
	Name: *string,
	StartTime: *string,
	TimeZone: *string,
	AccountId: *f64,
	EndRepeat: github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13.monitorDowntime.MonitorDowntimeEndRepeat,
	Frequency: github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13.monitorDowntime.MonitorDowntimeFrequency,
	Id: *string,
	MaintenanceDays: *[]*string,
	MonitorGuids: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.endTime">EndTime</a></code> | <code>*string</code> | A datetime stamp signifying the end of the Monitor Downtime. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.mode">Mode</a></code> | <code>*string</code> | An identifier of the type of Monitor Downtime to be created. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.name">Name</a></code> | <code>*string</code> | A name to identify the Monitor Downtime to be created. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.startTime">StartTime</a></code> | <code>*string</code> | A datetime stamp signifying the start of the Monitor Downtime. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.timeZone">TimeZone</a></code> | <code>*string</code> | The timezone that applies to the Monitor Downtime schedule. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.accountId">AccountId</a></code> | <code>*f64</code> | The ID of the New Relic account in which the Monitor Downtime shall be created. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.endRepeat">EndRepeat</a></code> | <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeat">MonitorDowntimeEndRepeat</a></code> | end_repeat block. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.frequency">Frequency</a></code> | <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequency">MonitorDowntimeFrequency</a></code> | frequency block. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/monitor_downtime#id MonitorDowntime#id}. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.maintenanceDays">MaintenanceDays</a></code> | <code>*[]*string</code> | A list of maintenance days to be included with the created weekly Monitor Downtime. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.monitorGuids">MonitorGuids</a></code> | <code>*[]*string</code> | A list of GUIDs of monitors, to which the created Monitor Downtime shall be applied. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.endTime"></a>

```go
EndTime *string
```

- *Type:* *string

A datetime stamp signifying the end of the Monitor Downtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/monitor_downtime#end_time MonitorDowntime#end_time}

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

An identifier of the type of Monitor Downtime to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/monitor_downtime#mode MonitorDowntime#mode}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

A name to identify the Monitor Downtime to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/monitor_downtime#name MonitorDowntime#name}

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.startTime"></a>

```go
StartTime *string
```

- *Type:* *string

A datetime stamp signifying the start of the Monitor Downtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/monitor_downtime#start_time MonitorDowntime#start_time}

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.timeZone"></a>

```go
TimeZone *string
```

- *Type:* *string

The timezone that applies to the Monitor Downtime schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/monitor_downtime#time_zone MonitorDowntime#time_zone}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.accountId"></a>

```go
AccountId *f64
```

- *Type:* *f64

The ID of the New Relic account in which the Monitor Downtime shall be created.

Defaults to the `account_id` in the provider{} configuration if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/monitor_downtime#account_id MonitorDowntime#account_id}

---

##### `EndRepeat`<sup>Optional</sup> <a name="EndRepeat" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.endRepeat"></a>

```go
EndRepeat MonitorDowntimeEndRepeat
```

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeat">MonitorDowntimeEndRepeat</a>

end_repeat block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/monitor_downtime#end_repeat MonitorDowntime#end_repeat}

---

##### `Frequency`<sup>Optional</sup> <a name="Frequency" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.frequency"></a>

```go
Frequency MonitorDowntimeFrequency
```

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequency">MonitorDowntimeFrequency</a>

frequency block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/monitor_downtime#frequency MonitorDowntime#frequency}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/monitor_downtime#id MonitorDowntime#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaintenanceDays`<sup>Optional</sup> <a name="MaintenanceDays" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.maintenanceDays"></a>

```go
MaintenanceDays *[]*string
```

- *Type:* *[]*string

A list of maintenance days to be included with the created weekly Monitor Downtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/monitor_downtime#maintenance_days MonitorDowntime#maintenance_days}

---

##### `MonitorGuids`<sup>Optional</sup> <a name="MonitorGuids" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.monitorGuids"></a>

```go
MonitorGuids *[]*string
```

- *Type:* *[]*string

A list of GUIDs of monitors, to which the created Monitor Downtime shall be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/monitor_downtime#monitor_guids MonitorDowntime#monitor_guids}

---

### MonitorDowntimeEndRepeat <a name="MonitorDowntimeEndRepeat" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeat.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/monitordowntime"

&monitordowntime.MonitorDowntimeEndRepeat {
	OnDate: *string,
	OnRepeat: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeat.property.onDate">OnDate</a></code> | <code>*string</code> | A date, on which the Monitor Downtime's repeat cycle is expected to end. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeat.property.onRepeat">OnRepeat</a></code> | <code>*f64</code> | Number of repetitions after which the Monitor Downtime's repeat cycle is expected to end. |

---

##### `OnDate`<sup>Optional</sup> <a name="OnDate" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeat.property.onDate"></a>

```go
OnDate *string
```

- *Type:* *string

A date, on which the Monitor Downtime's repeat cycle is expected to end.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/monitor_downtime#on_date MonitorDowntime#on_date}

---

##### `OnRepeat`<sup>Optional</sup> <a name="OnRepeat" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeat.property.onRepeat"></a>

```go
OnRepeat *f64
```

- *Type:* *f64

Number of repetitions after which the Monitor Downtime's repeat cycle is expected to end.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/monitor_downtime#on_repeat MonitorDowntime#on_repeat}

---

### MonitorDowntimeFrequency <a name="MonitorDowntimeFrequency" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequency"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequency.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/monitordowntime"

&monitordowntime.MonitorDowntimeFrequency {
	DaysOfMonth: *[]*f64,
	DaysOfWeek: github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeek,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequency.property.daysOfMonth">DaysOfMonth</a></code> | <code>*[]*f64</code> | A numerical list of days of a month on which the Monitor Downtime is scheduled to run. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequency.property.daysOfWeek">DaysOfWeek</a></code> | <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeek">MonitorDowntimeFrequencyDaysOfWeek</a></code> | days_of_week block. |

---

##### `DaysOfMonth`<sup>Optional</sup> <a name="DaysOfMonth" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequency.property.daysOfMonth"></a>

```go
DaysOfMonth *[]*f64
```

- *Type:* *[]*f64

A numerical list of days of a month on which the Monitor Downtime is scheduled to run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/monitor_downtime#days_of_month MonitorDowntime#days_of_month}

---

##### `DaysOfWeek`<sup>Optional</sup> <a name="DaysOfWeek" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequency.property.daysOfWeek"></a>

```go
DaysOfWeek MonitorDowntimeFrequencyDaysOfWeek
```

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeek">MonitorDowntimeFrequencyDaysOfWeek</a>

days_of_week block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/monitor_downtime#days_of_week MonitorDowntime#days_of_week}

---

### MonitorDowntimeFrequencyDaysOfWeek <a name="MonitorDowntimeFrequencyDaysOfWeek" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeek"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeek.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/monitordowntime"

&monitordowntime.MonitorDowntimeFrequencyDaysOfWeek {
	OrdinalDayOfMonth: *string,
	WeekDay: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeek.property.ordinalDayOfMonth">OrdinalDayOfMonth</a></code> | <code>*string</code> | An occurrence of the day selected within the month. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeek.property.weekDay">WeekDay</a></code> | <code>*string</code> | The day of the week on which the Monitor Downtime would run. |

---

##### `OrdinalDayOfMonth`<sup>Required</sup> <a name="OrdinalDayOfMonth" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeek.property.ordinalDayOfMonth"></a>

```go
OrdinalDayOfMonth *string
```

- *Type:* *string

An occurrence of the day selected within the month.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/monitor_downtime#ordinal_day_of_month MonitorDowntime#ordinal_day_of_month}

---

##### `WeekDay`<sup>Required</sup> <a name="WeekDay" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeek.property.weekDay"></a>

```go
WeekDay *string
```

- *Type:* *string

The day of the week on which the Monitor Downtime would run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/resources/monitor_downtime#week_day MonitorDowntime#week_day}

---

## Classes <a name="Classes" id="Classes"></a>

### MonitorDowntimeEndRepeatOutputReference <a name="MonitorDowntimeEndRepeatOutputReference" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/monitordowntime"

monitordowntime.NewMonitorDowntimeEndRepeatOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitorDowntimeEndRepeatOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.resetOnDate">ResetOnDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.resetOnRepeat">ResetOnRepeat</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOnDate` <a name="ResetOnDate" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.resetOnDate"></a>

```go
func ResetOnDate()
```

##### `ResetOnRepeat` <a name="ResetOnRepeat" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.resetOnRepeat"></a>

```go
func ResetOnRepeat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.onDateInput">OnDateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.onRepeatInput">OnRepeatInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.onDate">OnDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.onRepeat">OnRepeat</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeat">MonitorDowntimeEndRepeat</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OnDateInput`<sup>Optional</sup> <a name="OnDateInput" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.onDateInput"></a>

```go
func OnDateInput() *string
```

- *Type:* *string

---

##### `OnRepeatInput`<sup>Optional</sup> <a name="OnRepeatInput" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.onRepeatInput"></a>

```go
func OnRepeatInput() *f64
```

- *Type:* *f64

---

##### `OnDate`<sup>Required</sup> <a name="OnDate" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.onDate"></a>

```go
func OnDate() *string
```

- *Type:* *string

---

##### `OnRepeat`<sup>Required</sup> <a name="OnRepeat" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.onRepeat"></a>

```go
func OnRepeat() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.internalValue"></a>

```go
func InternalValue() MonitorDowntimeEndRepeat
```

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeat">MonitorDowntimeEndRepeat</a>

---


### MonitorDowntimeFrequencyDaysOfWeekOutputReference <a name="MonitorDowntimeFrequencyDaysOfWeekOutputReference" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/monitordowntime"

monitordowntime.NewMonitorDowntimeFrequencyDaysOfWeekOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitorDowntimeFrequencyDaysOfWeekOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.ordinalDayOfMonthInput">OrdinalDayOfMonthInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.weekDayInput">WeekDayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.ordinalDayOfMonth">OrdinalDayOfMonth</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.weekDay">WeekDay</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeek">MonitorDowntimeFrequencyDaysOfWeek</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OrdinalDayOfMonthInput`<sup>Optional</sup> <a name="OrdinalDayOfMonthInput" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.ordinalDayOfMonthInput"></a>

```go
func OrdinalDayOfMonthInput() *string
```

- *Type:* *string

---

##### `WeekDayInput`<sup>Optional</sup> <a name="WeekDayInput" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.weekDayInput"></a>

```go
func WeekDayInput() *string
```

- *Type:* *string

---

##### `OrdinalDayOfMonth`<sup>Required</sup> <a name="OrdinalDayOfMonth" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.ordinalDayOfMonth"></a>

```go
func OrdinalDayOfMonth() *string
```

- *Type:* *string

---

##### `WeekDay`<sup>Required</sup> <a name="WeekDay" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.weekDay"></a>

```go
func WeekDay() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.internalValue"></a>

```go
func InternalValue() MonitorDowntimeFrequencyDaysOfWeek
```

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeek">MonitorDowntimeFrequencyDaysOfWeek</a>

---


### MonitorDowntimeFrequencyOutputReference <a name="MonitorDowntimeFrequencyOutputReference" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/monitordowntime"

monitordowntime.NewMonitorDowntimeFrequencyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitorDowntimeFrequencyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.putDaysOfWeek">PutDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.resetDaysOfMonth">ResetDaysOfMonth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.resetDaysOfWeek">ResetDaysOfWeek</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDaysOfWeek` <a name="PutDaysOfWeek" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.putDaysOfWeek"></a>

```go
func PutDaysOfWeek(value MonitorDowntimeFrequencyDaysOfWeek)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.putDaysOfWeek.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeek">MonitorDowntimeFrequencyDaysOfWeek</a>

---

##### `ResetDaysOfMonth` <a name="ResetDaysOfMonth" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.resetDaysOfMonth"></a>

```go
func ResetDaysOfMonth()
```

##### `ResetDaysOfWeek` <a name="ResetDaysOfWeek" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.resetDaysOfWeek"></a>

```go
func ResetDaysOfWeek()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.daysOfWeek">DaysOfWeek</a></code> | <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference">MonitorDowntimeFrequencyDaysOfWeekOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.daysOfMonthInput">DaysOfMonthInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.daysOfWeekInput">DaysOfWeekInput</a></code> | <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeek">MonitorDowntimeFrequencyDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.daysOfMonth">DaysOfMonth</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequency">MonitorDowntimeFrequency</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.daysOfWeek"></a>

```go
func DaysOfWeek() MonitorDowntimeFrequencyDaysOfWeekOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference">MonitorDowntimeFrequencyDaysOfWeekOutputReference</a>

---

##### `DaysOfMonthInput`<sup>Optional</sup> <a name="DaysOfMonthInput" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.daysOfMonthInput"></a>

```go
func DaysOfMonthInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `DaysOfWeekInput`<sup>Optional</sup> <a name="DaysOfWeekInput" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.daysOfWeekInput"></a>

```go
func DaysOfWeekInput() MonitorDowntimeFrequencyDaysOfWeek
```

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeek">MonitorDowntimeFrequencyDaysOfWeek</a>

---

##### `DaysOfMonth`<sup>Required</sup> <a name="DaysOfMonth" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.daysOfMonth"></a>

```go
func DaysOfMonth() *[]*f64
```

- *Type:* *[]*f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.internalValue"></a>

```go
func InternalValue() MonitorDowntimeFrequency
```

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequency">MonitorDowntimeFrequency</a>

---



