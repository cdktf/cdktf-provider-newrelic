# `syntheticsStepMonitor` Submodule <a name="`syntheticsStepMonitor` Submodule" id="@cdktf/provider-newrelic.syntheticsStepMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SyntheticsStepMonitor <a name="SyntheticsStepMonitor" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/synthetics_step_monitor newrelic_synthetics_step_monitor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/syntheticsstepmonitor"

syntheticsstepmonitor.NewSyntheticsStepMonitor(scope Construct, id *string, config SyntheticsStepMonitorConfig) SyntheticsStepMonitor
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig">SyntheticsStepMonitorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig">SyntheticsStepMonitorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.putLocationPrivate">PutLocationPrivate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.putSteps">PutSteps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.putTag">PutTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetBrowsers">ResetBrowsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetDevices">ResetDevices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetEnableScreenshotOnFailureAndScript">ResetEnableScreenshotOnFailureAndScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetLocationPrivate">ResetLocationPrivate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetLocationsPublic">ResetLocationsPublic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetRuntimeType">ResetRuntimeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetRuntimeTypeVersion">ResetRuntimeTypeVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetTag">ResetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetUseUnsupportedLegacyRuntime">ResetUseUnsupportedLegacyRuntime</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLocationPrivate` <a name="PutLocationPrivate" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.putLocationPrivate"></a>

```go
func PutLocationPrivate(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.putLocationPrivate.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSteps` <a name="PutSteps" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.putSteps"></a>

```go
func PutSteps(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.putSteps.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTag` <a name="PutTag" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.putTag"></a>

```go
func PutTag(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.putTag.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetBrowsers` <a name="ResetBrowsers" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetBrowsers"></a>

```go
func ResetBrowsers()
```

##### `ResetDevices` <a name="ResetDevices" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetDevices"></a>

```go
func ResetDevices()
```

##### `ResetEnableScreenshotOnFailureAndScript` <a name="ResetEnableScreenshotOnFailureAndScript" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetEnableScreenshotOnFailureAndScript"></a>

```go
func ResetEnableScreenshotOnFailureAndScript()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetId"></a>

```go
func ResetId()
```

##### `ResetLocationPrivate` <a name="ResetLocationPrivate" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetLocationPrivate"></a>

```go
func ResetLocationPrivate()
```

##### `ResetLocationsPublic` <a name="ResetLocationsPublic" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetLocationsPublic"></a>

```go
func ResetLocationsPublic()
```

##### `ResetRuntimeType` <a name="ResetRuntimeType" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetRuntimeType"></a>

```go
func ResetRuntimeType()
```

##### `ResetRuntimeTypeVersion` <a name="ResetRuntimeTypeVersion" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetRuntimeTypeVersion"></a>

```go
func ResetRuntimeTypeVersion()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetTag"></a>

```go
func ResetTag()
```

##### `ResetUseUnsupportedLegacyRuntime` <a name="ResetUseUnsupportedLegacyRuntime" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetUseUnsupportedLegacyRuntime"></a>

```go
func ResetUseUnsupportedLegacyRuntime()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SyntheticsStepMonitor resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/syntheticsstepmonitor"

syntheticsstepmonitor.SyntheticsStepMonitor_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/syntheticsstepmonitor"

syntheticsstepmonitor.SyntheticsStepMonitor_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/syntheticsstepmonitor"

syntheticsstepmonitor.SyntheticsStepMonitor_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/syntheticsstepmonitor"

syntheticsstepmonitor.SyntheticsStepMonitor_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SyntheticsStepMonitor resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SyntheticsStepMonitor to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SyntheticsStepMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/synthetics_step_monitor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SyntheticsStepMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.guid">Guid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.locationPrivate">LocationPrivate</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList">SyntheticsStepMonitorLocationPrivateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.periodInMinutes">PeriodInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.steps">Steps</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList">SyntheticsStepMonitorStepsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.tag">Tag</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList">SyntheticsStepMonitorTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.accountIdInput">AccountIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.browsersInput">BrowsersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.devicesInput">DevicesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.enableScreenshotOnFailureAndScriptInput">EnableScreenshotOnFailureAndScriptInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.locationPrivateInput">LocationPrivateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.locationsPublicInput">LocationsPublicInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.periodInput">PeriodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.runtimeTypeInput">RuntimeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.runtimeTypeVersionInput">RuntimeTypeVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.stepsInput">StepsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.tagInput">TagInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.useUnsupportedLegacyRuntimeInput">UseUnsupportedLegacyRuntimeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.accountId">AccountId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.browsers">Browsers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.devices">Devices</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.enableScreenshotOnFailureAndScript">EnableScreenshotOnFailureAndScript</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.locationsPublic">LocationsPublic</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.period">Period</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.runtimeType">RuntimeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.runtimeTypeVersion">RuntimeTypeVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.useUnsupportedLegacyRuntime">UseUnsupportedLegacyRuntime</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Guid`<sup>Required</sup> <a name="Guid" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.guid"></a>

```go
func Guid() *string
```

- *Type:* *string

---

##### `LocationPrivate`<sup>Required</sup> <a name="LocationPrivate" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.locationPrivate"></a>

```go
func LocationPrivate() SyntheticsStepMonitorLocationPrivateList
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList">SyntheticsStepMonitorLocationPrivateList</a>

---

##### `PeriodInMinutes`<sup>Required</sup> <a name="PeriodInMinutes" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.periodInMinutes"></a>

```go
func PeriodInMinutes() *f64
```

- *Type:* *f64

---

##### `Steps`<sup>Required</sup> <a name="Steps" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.steps"></a>

```go
func Steps() SyntheticsStepMonitorStepsList
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList">SyntheticsStepMonitorStepsList</a>

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.tag"></a>

```go
func Tag() SyntheticsStepMonitorTagList
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList">SyntheticsStepMonitorTagList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.accountIdInput"></a>

```go
func AccountIdInput() *f64
```

- *Type:* *f64

---

##### `BrowsersInput`<sup>Optional</sup> <a name="BrowsersInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.browsersInput"></a>

```go
func BrowsersInput() *[]*string
```

- *Type:* *[]*string

---

##### `DevicesInput`<sup>Optional</sup> <a name="DevicesInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.devicesInput"></a>

```go
func DevicesInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnableScreenshotOnFailureAndScriptInput`<sup>Optional</sup> <a name="EnableScreenshotOnFailureAndScriptInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.enableScreenshotOnFailureAndScriptInput"></a>

```go
func EnableScreenshotOnFailureAndScriptInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationPrivateInput`<sup>Optional</sup> <a name="LocationPrivateInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.locationPrivateInput"></a>

```go
func LocationPrivateInput() interface{}
```

- *Type:* interface{}

---

##### `LocationsPublicInput`<sup>Optional</sup> <a name="LocationsPublicInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.locationsPublicInput"></a>

```go
func LocationsPublicInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PeriodInput`<sup>Optional</sup> <a name="PeriodInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.periodInput"></a>

```go
func PeriodInput() *string
```

- *Type:* *string

---

##### `RuntimeTypeInput`<sup>Optional</sup> <a name="RuntimeTypeInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.runtimeTypeInput"></a>

```go
func RuntimeTypeInput() *string
```

- *Type:* *string

---

##### `RuntimeTypeVersionInput`<sup>Optional</sup> <a name="RuntimeTypeVersionInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.runtimeTypeVersionInput"></a>

```go
func RuntimeTypeVersionInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `StepsInput`<sup>Optional</sup> <a name="StepsInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.stepsInput"></a>

```go
func StepsInput() interface{}
```

- *Type:* interface{}

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.tagInput"></a>

```go
func TagInput() interface{}
```

- *Type:* interface{}

---

##### `UseUnsupportedLegacyRuntimeInput`<sup>Optional</sup> <a name="UseUnsupportedLegacyRuntimeInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.useUnsupportedLegacyRuntimeInput"></a>

```go
func UseUnsupportedLegacyRuntimeInput() interface{}
```

- *Type:* interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.accountId"></a>

```go
func AccountId() *f64
```

- *Type:* *f64

---

##### `Browsers`<sup>Required</sup> <a name="Browsers" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.browsers"></a>

```go
func Browsers() *[]*string
```

- *Type:* *[]*string

---

##### `Devices`<sup>Required</sup> <a name="Devices" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.devices"></a>

```go
func Devices() *[]*string
```

- *Type:* *[]*string

---

##### `EnableScreenshotOnFailureAndScript`<sup>Required</sup> <a name="EnableScreenshotOnFailureAndScript" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.enableScreenshotOnFailureAndScript"></a>

```go
func EnableScreenshotOnFailureAndScript() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LocationsPublic`<sup>Required</sup> <a name="LocationsPublic" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.locationsPublic"></a>

```go
func LocationsPublic() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.period"></a>

```go
func Period() *string
```

- *Type:* *string

---

##### `RuntimeType`<sup>Required</sup> <a name="RuntimeType" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.runtimeType"></a>

```go
func RuntimeType() *string
```

- *Type:* *string

---

##### `RuntimeTypeVersion`<sup>Required</sup> <a name="RuntimeTypeVersion" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.runtimeTypeVersion"></a>

```go
func RuntimeTypeVersion() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `UseUnsupportedLegacyRuntime`<sup>Required</sup> <a name="UseUnsupportedLegacyRuntime" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.useUnsupportedLegacyRuntime"></a>

```go
func UseUnsupportedLegacyRuntime() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SyntheticsStepMonitorConfig <a name="SyntheticsStepMonitorConfig" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/syntheticsstepmonitor"

&syntheticsstepmonitor.SyntheticsStepMonitorConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Period: *string,
	Status: *string,
	Steps: interface{},
	AccountId: *f64,
	Browsers: *[]*string,
	Devices: *[]*string,
	EnableScreenshotOnFailureAndScript: interface{},
	Id: *string,
	LocationPrivate: interface{},
	LocationsPublic: *[]*string,
	RuntimeType: *string,
	RuntimeTypeVersion: *string,
	Tag: interface{},
	UseUnsupportedLegacyRuntime: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.name">Name</a></code> | <code>*string</code> | The title of this monitor. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.period">Period</a></code> | <code>*string</code> | The interval at which this monitor should run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.status">Status</a></code> | <code>*string</code> | The monitor status (ENABLED or DISABLED). |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.steps">Steps</a></code> | <code>interface{}</code> | steps block. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.accountId">AccountId</a></code> | <code>*f64</code> | ID of the newrelic account. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.browsers">Browsers</a></code> | <code>*[]*string</code> | The multiple browsers list on which synthetic monitors will run. Valid values are array of CHROME,and FIREFOX. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.devices">Devices</a></code> | <code>*[]*string</code> | The multiple devices list on which synthetic monitors will run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.enableScreenshotOnFailureAndScript">EnableScreenshotOnFailureAndScript</a></code> | <code>interface{}</code> | Capture a screenshot during job execution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/synthetics_step_monitor#id SyntheticsStepMonitor#id}. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.locationPrivate">LocationPrivate</a></code> | <code>interface{}</code> | location_private block. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.locationsPublic">LocationsPublic</a></code> | <code>*[]*string</code> | The public location(s) that the monitor will run jobs from. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.runtimeType">RuntimeType</a></code> | <code>*string</code> | The runtime type that the monitor will run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.runtimeTypeVersion">RuntimeTypeVersion</a></code> | <code>*string</code> | The specific semver version of the runtime type. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.tag">Tag</a></code> | <code>interface{}</code> | tag block. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.useUnsupportedLegacyRuntime">UseUnsupportedLegacyRuntime</a></code> | <code>interface{}</code> | A boolean attribute to be set true by the customer, if they would like to use the unsupported legacy runtime of Synthetic Monitors by means of an exemption given until the October 22, 2024 Legacy Runtime EOL. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The title of this monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/synthetics_step_monitor#name SyntheticsStepMonitor#name}

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.period"></a>

```go
Period *string
```

- *Type:* *string

The interval at which this monitor should run.

Valid values are EVERY_MINUTE, EVERY_5_MINUTES, EVERY_10_MINUTES, EVERY_15_MINUTES, EVERY_30_MINUTES, EVERY_HOUR, EVERY_6_HOURS, EVERY_12_HOURS, or EVERY_DAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/synthetics_step_monitor#period SyntheticsStepMonitor#period}

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

The monitor status (ENABLED or DISABLED).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/synthetics_step_monitor#status SyntheticsStepMonitor#status}

---

##### `Steps`<sup>Required</sup> <a name="Steps" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.steps"></a>

```go
Steps interface{}
```

- *Type:* interface{}

steps block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/synthetics_step_monitor#steps SyntheticsStepMonitor#steps}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.accountId"></a>

```go
AccountId *f64
```

- *Type:* *f64

ID of the newrelic account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/synthetics_step_monitor#account_id SyntheticsStepMonitor#account_id}

---

##### `Browsers`<sup>Optional</sup> <a name="Browsers" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.browsers"></a>

```go
Browsers *[]*string
```

- *Type:* *[]*string

The multiple browsers list on which synthetic monitors will run. Valid values are array of CHROME,and FIREFOX.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/synthetics_step_monitor#browsers SyntheticsStepMonitor#browsers}

---

##### `Devices`<sup>Optional</sup> <a name="Devices" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.devices"></a>

```go
Devices *[]*string
```

- *Type:* *[]*string

The multiple devices list on which synthetic monitors will run.

Valid values are array of DESKTOP, MOBILE_LANDSCAPE, MOBILE_PORTRAIT, TABLET_LANDSCAPE and TABLET_PORTRAIT

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/synthetics_step_monitor#devices SyntheticsStepMonitor#devices}

---

##### `EnableScreenshotOnFailureAndScript`<sup>Optional</sup> <a name="EnableScreenshotOnFailureAndScript" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.enableScreenshotOnFailureAndScript"></a>

```go
EnableScreenshotOnFailureAndScript interface{}
```

- *Type:* interface{}

Capture a screenshot during job execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/synthetics_step_monitor#enable_screenshot_on_failure_and_script SyntheticsStepMonitor#enable_screenshot_on_failure_and_script}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/synthetics_step_monitor#id SyntheticsStepMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LocationPrivate`<sup>Optional</sup> <a name="LocationPrivate" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.locationPrivate"></a>

```go
LocationPrivate interface{}
```

- *Type:* interface{}

location_private block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/synthetics_step_monitor#location_private SyntheticsStepMonitor#location_private}

---

##### `LocationsPublic`<sup>Optional</sup> <a name="LocationsPublic" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.locationsPublic"></a>

```go
LocationsPublic *[]*string
```

- *Type:* *[]*string

The public location(s) that the monitor will run jobs from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/synthetics_step_monitor#locations_public SyntheticsStepMonitor#locations_public}

---

##### `RuntimeType`<sup>Optional</sup> <a name="RuntimeType" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.runtimeType"></a>

```go
RuntimeType *string
```

- *Type:* *string

The runtime type that the monitor will run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/synthetics_step_monitor#runtime_type SyntheticsStepMonitor#runtime_type}

---

##### `RuntimeTypeVersion`<sup>Optional</sup> <a name="RuntimeTypeVersion" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.runtimeTypeVersion"></a>

```go
RuntimeTypeVersion *string
```

- *Type:* *string

The specific semver version of the runtime type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/synthetics_step_monitor#runtime_type_version SyntheticsStepMonitor#runtime_type_version}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.tag"></a>

```go
Tag interface{}
```

- *Type:* interface{}

tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/synthetics_step_monitor#tag SyntheticsStepMonitor#tag}

---

##### `UseUnsupportedLegacyRuntime`<sup>Optional</sup> <a name="UseUnsupportedLegacyRuntime" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.useUnsupportedLegacyRuntime"></a>

```go
UseUnsupportedLegacyRuntime interface{}
```

- *Type:* interface{}

A boolean attribute to be set true by the customer, if they would like to use the unsupported legacy runtime of Synthetic Monitors by means of an exemption given until the October 22, 2024 Legacy Runtime EOL.

Setting this attribute to true would allow skipping validation performed by the the New Relic Terraform Provider starting v3.43.0 to disallow using the legacy runtime with new monitors. This would, hence, allow creation of monitors in the legacy runtime until the October 22, 2024 Legacy Runtime EOL, if exempt by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/synthetics_step_monitor#use_unsupported_legacy_runtime SyntheticsStepMonitor#use_unsupported_legacy_runtime}

---

### SyntheticsStepMonitorLocationPrivate <a name="SyntheticsStepMonitorLocationPrivate" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/syntheticsstepmonitor"

&syntheticsstepmonitor.SyntheticsStepMonitorLocationPrivate {
	Guid: *string,
	VsePassword: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivate.property.guid">Guid</a></code> | <code>*string</code> | The unique identifier for the Synthetics private location in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivate.property.vsePassword">VsePassword</a></code> | <code>*string</code> | The location's Verified Script Execution password (Only necessary if Verified Script Execution is enabled for the location). |

---

##### `Guid`<sup>Required</sup> <a name="Guid" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivate.property.guid"></a>

```go
Guid *string
```

- *Type:* *string

The unique identifier for the Synthetics private location in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/synthetics_step_monitor#guid SyntheticsStepMonitor#guid}

---

##### `VsePassword`<sup>Optional</sup> <a name="VsePassword" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivate.property.vsePassword"></a>

```go
VsePassword *string
```

- *Type:* *string

The location's Verified Script Execution password (Only necessary if Verified Script Execution is enabled for the location).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/synthetics_step_monitor#vse_password SyntheticsStepMonitor#vse_password}

---

### SyntheticsStepMonitorSteps <a name="SyntheticsStepMonitorSteps" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorSteps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorSteps.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/syntheticsstepmonitor"

&syntheticsstepmonitor.SyntheticsStepMonitorSteps {
	Ordinal: *f64,
	Type: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorSteps.property.ordinal">Ordinal</a></code> | <code>*f64</code> | The position of the step within the script ranging from 0-100. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorSteps.property.type">Type</a></code> | <code>*string</code> | The type of step to be added to the script. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorSteps.property.values">Values</a></code> | <code>*[]*string</code> | The metadata values related to the check the step performs. |

---

##### `Ordinal`<sup>Required</sup> <a name="Ordinal" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorSteps.property.ordinal"></a>

```go
Ordinal *f64
```

- *Type:* *f64

The position of the step within the script ranging from 0-100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/synthetics_step_monitor#ordinal SyntheticsStepMonitor#ordinal}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorSteps.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of step to be added to the script.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/synthetics_step_monitor#type SyntheticsStepMonitor#type}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorSteps.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

The metadata values related to the check the step performs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/synthetics_step_monitor#values SyntheticsStepMonitor#values}

---

### SyntheticsStepMonitorTag <a name="SyntheticsStepMonitorTag" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTag.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/syntheticsstepmonitor"

&syntheticsstepmonitor.SyntheticsStepMonitorTag {
	Key: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTag.property.key">Key</a></code> | <code>*string</code> | Name of the tag key. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTag.property.values">Values</a></code> | <code>*[]*string</code> | Values associated with the tag key. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTag.property.key"></a>

```go
Key *string
```

- *Type:* *string

Name of the tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/synthetics_step_monitor#key SyntheticsStepMonitor#key}

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTag.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Values associated with the tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/synthetics_step_monitor#values SyntheticsStepMonitor#values}

---

## Classes <a name="Classes" id="Classes"></a>

### SyntheticsStepMonitorLocationPrivateList <a name="SyntheticsStepMonitorLocationPrivateList" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/syntheticsstepmonitor"

syntheticsstepmonitor.NewSyntheticsStepMonitorLocationPrivateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SyntheticsStepMonitorLocationPrivateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.get"></a>

```go
func Get(index *f64) SyntheticsStepMonitorLocationPrivateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SyntheticsStepMonitorLocationPrivateOutputReference <a name="SyntheticsStepMonitorLocationPrivateOutputReference" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/syntheticsstepmonitor"

syntheticsstepmonitor.NewSyntheticsStepMonitorLocationPrivateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SyntheticsStepMonitorLocationPrivateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.resetVsePassword">ResetVsePassword</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVsePassword` <a name="ResetVsePassword" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.resetVsePassword"></a>

```go
func ResetVsePassword()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.property.guidInput">GuidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.property.vsePasswordInput">VsePasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.property.guid">Guid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.property.vsePassword">VsePassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GuidInput`<sup>Optional</sup> <a name="GuidInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.property.guidInput"></a>

```go
func GuidInput() *string
```

- *Type:* *string

---

##### `VsePasswordInput`<sup>Optional</sup> <a name="VsePasswordInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.property.vsePasswordInput"></a>

```go
func VsePasswordInput() *string
```

- *Type:* *string

---

##### `Guid`<sup>Required</sup> <a name="Guid" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.property.guid"></a>

```go
func Guid() *string
```

- *Type:* *string

---

##### `VsePassword`<sup>Required</sup> <a name="VsePassword" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.property.vsePassword"></a>

```go
func VsePassword() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SyntheticsStepMonitorStepsList <a name="SyntheticsStepMonitorStepsList" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/syntheticsstepmonitor"

syntheticsstepmonitor.NewSyntheticsStepMonitorStepsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SyntheticsStepMonitorStepsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.get"></a>

```go
func Get(index *f64) SyntheticsStepMonitorStepsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SyntheticsStepMonitorStepsOutputReference <a name="SyntheticsStepMonitorStepsOutputReference" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/syntheticsstepmonitor"

syntheticsstepmonitor.NewSyntheticsStepMonitorStepsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SyntheticsStepMonitorStepsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.ordinalInput">OrdinalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.ordinal">Ordinal</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OrdinalInput`<sup>Optional</sup> <a name="OrdinalInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.ordinalInput"></a>

```go
func OrdinalInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Ordinal`<sup>Required</sup> <a name="Ordinal" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.ordinal"></a>

```go
func Ordinal() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SyntheticsStepMonitorTagList <a name="SyntheticsStepMonitorTagList" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/syntheticsstepmonitor"

syntheticsstepmonitor.NewSyntheticsStepMonitorTagList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SyntheticsStepMonitorTagList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.get"></a>

```go
func Get(index *f64) SyntheticsStepMonitorTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SyntheticsStepMonitorTagOutputReference <a name="SyntheticsStepMonitorTagOutputReference" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/syntheticsstepmonitor"

syntheticsstepmonitor.NewSyntheticsStepMonitorTagOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SyntheticsStepMonitorTagOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



