# `syntheticsScriptMonitor` Submodule <a name="`syntheticsScriptMonitor` Submodule" id="@cdktf/provider-newrelic.syntheticsScriptMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SyntheticsScriptMonitor <a name="SyntheticsScriptMonitor" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_script_monitor newrelic_synthetics_script_monitor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/syntheticsscriptmonitor"

syntheticsscriptmonitor.NewSyntheticsScriptMonitor(scope Construct, id *string, config SyntheticsScriptMonitorConfig) SyntheticsScriptMonitor
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig">SyntheticsScriptMonitorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig">SyntheticsScriptMonitorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.putLocationPrivate">PutLocationPrivate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.putTag">PutTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetBrowsers">ResetBrowsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetDeviceOrientation">ResetDeviceOrientation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetDevices">ResetDevices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetDeviceType">ResetDeviceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetEnableScreenshotOnFailureAndScript">ResetEnableScreenshotOnFailureAndScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetLocationPrivate">ResetLocationPrivate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetLocationsPublic">ResetLocationsPublic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetRuntimeType">ResetRuntimeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetRuntimeTypeVersion">ResetRuntimeTypeVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetScript">ResetScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetScriptLanguage">ResetScriptLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetTag">ResetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetUseUnsupportedLegacyRuntime">ResetUseUnsupportedLegacyRuntime</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLocationPrivate` <a name="PutLocationPrivate" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.putLocationPrivate"></a>

```go
func PutLocationPrivate(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.putLocationPrivate.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTag` <a name="PutTag" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.putTag"></a>

```go
func PutTag(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.putTag.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetBrowsers` <a name="ResetBrowsers" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetBrowsers"></a>

```go
func ResetBrowsers()
```

##### `ResetDeviceOrientation` <a name="ResetDeviceOrientation" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetDeviceOrientation"></a>

```go
func ResetDeviceOrientation()
```

##### `ResetDevices` <a name="ResetDevices" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetDevices"></a>

```go
func ResetDevices()
```

##### `ResetDeviceType` <a name="ResetDeviceType" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetDeviceType"></a>

```go
func ResetDeviceType()
```

##### `ResetEnableScreenshotOnFailureAndScript` <a name="ResetEnableScreenshotOnFailureAndScript" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetEnableScreenshotOnFailureAndScript"></a>

```go
func ResetEnableScreenshotOnFailureAndScript()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetId"></a>

```go
func ResetId()
```

##### `ResetLocationPrivate` <a name="ResetLocationPrivate" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetLocationPrivate"></a>

```go
func ResetLocationPrivate()
```

##### `ResetLocationsPublic` <a name="ResetLocationsPublic" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetLocationsPublic"></a>

```go
func ResetLocationsPublic()
```

##### `ResetRuntimeType` <a name="ResetRuntimeType" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetRuntimeType"></a>

```go
func ResetRuntimeType()
```

##### `ResetRuntimeTypeVersion` <a name="ResetRuntimeTypeVersion" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetRuntimeTypeVersion"></a>

```go
func ResetRuntimeTypeVersion()
```

##### `ResetScript` <a name="ResetScript" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetScript"></a>

```go
func ResetScript()
```

##### `ResetScriptLanguage` <a name="ResetScriptLanguage" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetScriptLanguage"></a>

```go
func ResetScriptLanguage()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetTag"></a>

```go
func ResetTag()
```

##### `ResetUseUnsupportedLegacyRuntime` <a name="ResetUseUnsupportedLegacyRuntime" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetUseUnsupportedLegacyRuntime"></a>

```go
func ResetUseUnsupportedLegacyRuntime()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SyntheticsScriptMonitor resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/syntheticsscriptmonitor"

syntheticsscriptmonitor.SyntheticsScriptMonitor_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/syntheticsscriptmonitor"

syntheticsscriptmonitor.SyntheticsScriptMonitor_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/syntheticsscriptmonitor"

syntheticsscriptmonitor.SyntheticsScriptMonitor_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/syntheticsscriptmonitor"

syntheticsscriptmonitor.SyntheticsScriptMonitor_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SyntheticsScriptMonitor resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SyntheticsScriptMonitor to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SyntheticsScriptMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_script_monitor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SyntheticsScriptMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.guid">Guid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.locationPrivate">LocationPrivate</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList">SyntheticsScriptMonitorLocationPrivateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.monitorId">MonitorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.periodInMinutes">PeriodInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.tag">Tag</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList">SyntheticsScriptMonitorTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.accountIdInput">AccountIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.browsersInput">BrowsersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.deviceOrientationInput">DeviceOrientationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.devicesInput">DevicesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.deviceTypeInput">DeviceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.enableScreenshotOnFailureAndScriptInput">EnableScreenshotOnFailureAndScriptInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.locationPrivateInput">LocationPrivateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.locationsPublicInput">LocationsPublicInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.periodInput">PeriodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.runtimeTypeInput">RuntimeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.runtimeTypeVersionInput">RuntimeTypeVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.scriptInput">ScriptInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.scriptLanguageInput">ScriptLanguageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.tagInput">TagInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.useUnsupportedLegacyRuntimeInput">UseUnsupportedLegacyRuntimeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.accountId">AccountId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.browsers">Browsers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.deviceOrientation">DeviceOrientation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.devices">Devices</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.deviceType">DeviceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.enableScreenshotOnFailureAndScript">EnableScreenshotOnFailureAndScript</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.locationsPublic">LocationsPublic</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.period">Period</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.runtimeType">RuntimeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.runtimeTypeVersion">RuntimeTypeVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.script">Script</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.scriptLanguage">ScriptLanguage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.useUnsupportedLegacyRuntime">UseUnsupportedLegacyRuntime</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Guid`<sup>Required</sup> <a name="Guid" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.guid"></a>

```go
func Guid() *string
```

- *Type:* *string

---

##### `LocationPrivate`<sup>Required</sup> <a name="LocationPrivate" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.locationPrivate"></a>

```go
func LocationPrivate() SyntheticsScriptMonitorLocationPrivateList
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList">SyntheticsScriptMonitorLocationPrivateList</a>

---

##### `MonitorId`<sup>Required</sup> <a name="MonitorId" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.monitorId"></a>

```go
func MonitorId() *string
```

- *Type:* *string

---

##### `PeriodInMinutes`<sup>Required</sup> <a name="PeriodInMinutes" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.periodInMinutes"></a>

```go
func PeriodInMinutes() *f64
```

- *Type:* *f64

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.tag"></a>

```go
func Tag() SyntheticsScriptMonitorTagList
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList">SyntheticsScriptMonitorTagList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.accountIdInput"></a>

```go
func AccountIdInput() *f64
```

- *Type:* *f64

---

##### `BrowsersInput`<sup>Optional</sup> <a name="BrowsersInput" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.browsersInput"></a>

```go
func BrowsersInput() *[]*string
```

- *Type:* *[]*string

---

##### `DeviceOrientationInput`<sup>Optional</sup> <a name="DeviceOrientationInput" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.deviceOrientationInput"></a>

```go
func DeviceOrientationInput() *string
```

- *Type:* *string

---

##### `DevicesInput`<sup>Optional</sup> <a name="DevicesInput" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.devicesInput"></a>

```go
func DevicesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DeviceTypeInput`<sup>Optional</sup> <a name="DeviceTypeInput" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.deviceTypeInput"></a>

```go
func DeviceTypeInput() *string
```

- *Type:* *string

---

##### `EnableScreenshotOnFailureAndScriptInput`<sup>Optional</sup> <a name="EnableScreenshotOnFailureAndScriptInput" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.enableScreenshotOnFailureAndScriptInput"></a>

```go
func EnableScreenshotOnFailureAndScriptInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationPrivateInput`<sup>Optional</sup> <a name="LocationPrivateInput" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.locationPrivateInput"></a>

```go
func LocationPrivateInput() interface{}
```

- *Type:* interface{}

---

##### `LocationsPublicInput`<sup>Optional</sup> <a name="LocationsPublicInput" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.locationsPublicInput"></a>

```go
func LocationsPublicInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PeriodInput`<sup>Optional</sup> <a name="PeriodInput" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.periodInput"></a>

```go
func PeriodInput() *string
```

- *Type:* *string

---

##### `RuntimeTypeInput`<sup>Optional</sup> <a name="RuntimeTypeInput" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.runtimeTypeInput"></a>

```go
func RuntimeTypeInput() *string
```

- *Type:* *string

---

##### `RuntimeTypeVersionInput`<sup>Optional</sup> <a name="RuntimeTypeVersionInput" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.runtimeTypeVersionInput"></a>

```go
func RuntimeTypeVersionInput() *string
```

- *Type:* *string

---

##### `ScriptInput`<sup>Optional</sup> <a name="ScriptInput" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.scriptInput"></a>

```go
func ScriptInput() *string
```

- *Type:* *string

---

##### `ScriptLanguageInput`<sup>Optional</sup> <a name="ScriptLanguageInput" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.scriptLanguageInput"></a>

```go
func ScriptLanguageInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.tagInput"></a>

```go
func TagInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UseUnsupportedLegacyRuntimeInput`<sup>Optional</sup> <a name="UseUnsupportedLegacyRuntimeInput" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.useUnsupportedLegacyRuntimeInput"></a>

```go
func UseUnsupportedLegacyRuntimeInput() interface{}
```

- *Type:* interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.accountId"></a>

```go
func AccountId() *f64
```

- *Type:* *f64

---

##### `Browsers`<sup>Required</sup> <a name="Browsers" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.browsers"></a>

```go
func Browsers() *[]*string
```

- *Type:* *[]*string

---

##### `DeviceOrientation`<sup>Required</sup> <a name="DeviceOrientation" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.deviceOrientation"></a>

```go
func DeviceOrientation() *string
```

- *Type:* *string

---

##### `Devices`<sup>Required</sup> <a name="Devices" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.devices"></a>

```go
func Devices() *[]*string
```

- *Type:* *[]*string

---

##### `DeviceType`<sup>Required</sup> <a name="DeviceType" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.deviceType"></a>

```go
func DeviceType() *string
```

- *Type:* *string

---

##### `EnableScreenshotOnFailureAndScript`<sup>Required</sup> <a name="EnableScreenshotOnFailureAndScript" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.enableScreenshotOnFailureAndScript"></a>

```go
func EnableScreenshotOnFailureAndScript() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LocationsPublic`<sup>Required</sup> <a name="LocationsPublic" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.locationsPublic"></a>

```go
func LocationsPublic() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.period"></a>

```go
func Period() *string
```

- *Type:* *string

---

##### `RuntimeType`<sup>Required</sup> <a name="RuntimeType" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.runtimeType"></a>

```go
func RuntimeType() *string
```

- *Type:* *string

---

##### `RuntimeTypeVersion`<sup>Required</sup> <a name="RuntimeTypeVersion" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.runtimeTypeVersion"></a>

```go
func RuntimeTypeVersion() *string
```

- *Type:* *string

---

##### `Script`<sup>Required</sup> <a name="Script" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.script"></a>

```go
func Script() *string
```

- *Type:* *string

---

##### `ScriptLanguage`<sup>Required</sup> <a name="ScriptLanguage" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.scriptLanguage"></a>

```go
func ScriptLanguage() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UseUnsupportedLegacyRuntime`<sup>Required</sup> <a name="UseUnsupportedLegacyRuntime" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.useUnsupportedLegacyRuntime"></a>

```go
func UseUnsupportedLegacyRuntime() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SyntheticsScriptMonitorConfig <a name="SyntheticsScriptMonitorConfig" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/syntheticsscriptmonitor"

&syntheticsscriptmonitor.SyntheticsScriptMonitorConfig {
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
	Type: *string,
	AccountId: *f64,
	Browsers: *[]*string,
	DeviceOrientation: *string,
	Devices: *[]*string,
	DeviceType: *string,
	EnableScreenshotOnFailureAndScript: interface{},
	Id: *string,
	LocationPrivate: interface{},
	LocationsPublic: *[]*string,
	RuntimeType: *string,
	RuntimeTypeVersion: *string,
	Script: *string,
	ScriptLanguage: *string,
	Tag: interface{},
	UseUnsupportedLegacyRuntime: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.name">Name</a></code> | <code>*string</code> | The title of this monitor. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.period">Period</a></code> | <code>*string</code> | The interval at which this monitor should run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.status">Status</a></code> | <code>*string</code> | The monitor status (ENABLED or DISABLED). |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.type">Type</a></code> | <code>*string</code> | The monitor type. Valid values are SCRIPT_BROWSER, and SCRIPT_API. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.accountId">AccountId</a></code> | <code>*f64</code> | ID of the newrelic account. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.browsers">Browsers</a></code> | <code>*[]*string</code> | The multiple browsers list on which synthetic monitors will run. Valid values are array of CHROME,and FIREFOX. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.deviceOrientation">DeviceOrientation</a></code> | <code>*string</code> | The device orientation the user would like to represent. Valid values are LANDSCAPE, PORTRAIT, or NONE. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.devices">Devices</a></code> | <code>*[]*string</code> | The multiple devices list on which synthetic monitors will run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.deviceType">DeviceType</a></code> | <code>*string</code> | The device type that a user can select. Valid values are MOBILE, TABLET, or NONE. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.enableScreenshotOnFailureAndScript">EnableScreenshotOnFailureAndScript</a></code> | <code>interface{}</code> | Capture a screenshot during job execution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_script_monitor#id SyntheticsScriptMonitor#id}. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.locationPrivate">LocationPrivate</a></code> | <code>interface{}</code> | location_private block. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.locationsPublic">LocationsPublic</a></code> | <code>*[]*string</code> | The public location(s) that the monitor will run jobs from. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.runtimeType">RuntimeType</a></code> | <code>*string</code> | The runtime type that the monitor will run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.runtimeTypeVersion">RuntimeTypeVersion</a></code> | <code>*string</code> | The specific semver version of the runtime type. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.script">Script</a></code> | <code>*string</code> | The script that the monitor runs. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.scriptLanguage">ScriptLanguage</a></code> | <code>*string</code> | The programing language that should execute the script. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.tag">Tag</a></code> | <code>interface{}</code> | tag block. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.useUnsupportedLegacyRuntime">UseUnsupportedLegacyRuntime</a></code> | <code>interface{}</code> | A boolean attribute to be set true by the customer, if they would like to use the unsupported legacy runtime of Synthetic Monitors by means of an exemption given until the October 22, 2024 Legacy Runtime EOL. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The title of this monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_script_monitor#name SyntheticsScriptMonitor#name}

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.period"></a>

```go
Period *string
```

- *Type:* *string

The interval at which this monitor should run.

Valid values are EVERY_MINUTE, EVERY_5_MINUTES, EVERY_10_MINUTES, EVERY_15_MINUTES, EVERY_30_MINUTES, EVERY_HOUR, EVERY_6_HOURS, EVERY_12_HOURS, or EVERY_DAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_script_monitor#period SyntheticsScriptMonitor#period}

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

The monitor status (ENABLED or DISABLED).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_script_monitor#status SyntheticsScriptMonitor#status}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The monitor type. Valid values are SCRIPT_BROWSER, and SCRIPT_API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_script_monitor#type SyntheticsScriptMonitor#type}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.accountId"></a>

```go
AccountId *f64
```

- *Type:* *f64

ID of the newrelic account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_script_monitor#account_id SyntheticsScriptMonitor#account_id}

---

##### `Browsers`<sup>Optional</sup> <a name="Browsers" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.browsers"></a>

```go
Browsers *[]*string
```

- *Type:* *[]*string

The multiple browsers list on which synthetic monitors will run. Valid values are array of CHROME,and FIREFOX.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_script_monitor#browsers SyntheticsScriptMonitor#browsers}

---

##### `DeviceOrientation`<sup>Optional</sup> <a name="DeviceOrientation" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.deviceOrientation"></a>

```go
DeviceOrientation *string
```

- *Type:* *string

The device orientation the user would like to represent. Valid values are LANDSCAPE, PORTRAIT, or NONE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_script_monitor#device_orientation SyntheticsScriptMonitor#device_orientation}

---

##### `Devices`<sup>Optional</sup> <a name="Devices" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.devices"></a>

```go
Devices *[]*string
```

- *Type:* *[]*string

The multiple devices list on which synthetic monitors will run.

Valid values are array of DESKTOP, MOBILE_LANDSCAPE, MOBILE_PORTRAIT, TABLET_LANDSCAPE and TABLET_PORTRAIT

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_script_monitor#devices SyntheticsScriptMonitor#devices}

---

##### `DeviceType`<sup>Optional</sup> <a name="DeviceType" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.deviceType"></a>

```go
DeviceType *string
```

- *Type:* *string

The device type that a user can select. Valid values are MOBILE, TABLET, or NONE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_script_monitor#device_type SyntheticsScriptMonitor#device_type}

---

##### `EnableScreenshotOnFailureAndScript`<sup>Optional</sup> <a name="EnableScreenshotOnFailureAndScript" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.enableScreenshotOnFailureAndScript"></a>

```go
EnableScreenshotOnFailureAndScript interface{}
```

- *Type:* interface{}

Capture a screenshot during job execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_script_monitor#enable_screenshot_on_failure_and_script SyntheticsScriptMonitor#enable_screenshot_on_failure_and_script}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_script_monitor#id SyntheticsScriptMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LocationPrivate`<sup>Optional</sup> <a name="LocationPrivate" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.locationPrivate"></a>

```go
LocationPrivate interface{}
```

- *Type:* interface{}

location_private block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_script_monitor#location_private SyntheticsScriptMonitor#location_private}

---

##### `LocationsPublic`<sup>Optional</sup> <a name="LocationsPublic" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.locationsPublic"></a>

```go
LocationsPublic *[]*string
```

- *Type:* *[]*string

The public location(s) that the monitor will run jobs from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_script_monitor#locations_public SyntheticsScriptMonitor#locations_public}

---

##### `RuntimeType`<sup>Optional</sup> <a name="RuntimeType" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.runtimeType"></a>

```go
RuntimeType *string
```

- *Type:* *string

The runtime type that the monitor will run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_script_monitor#runtime_type SyntheticsScriptMonitor#runtime_type}

---

##### `RuntimeTypeVersion`<sup>Optional</sup> <a name="RuntimeTypeVersion" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.runtimeTypeVersion"></a>

```go
RuntimeTypeVersion *string
```

- *Type:* *string

The specific semver version of the runtime type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_script_monitor#runtime_type_version SyntheticsScriptMonitor#runtime_type_version}

---

##### `Script`<sup>Optional</sup> <a name="Script" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.script"></a>

```go
Script *string
```

- *Type:* *string

The script that the monitor runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_script_monitor#script SyntheticsScriptMonitor#script}

---

##### `ScriptLanguage`<sup>Optional</sup> <a name="ScriptLanguage" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.scriptLanguage"></a>

```go
ScriptLanguage *string
```

- *Type:* *string

The programing language that should execute the script.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_script_monitor#script_language SyntheticsScriptMonitor#script_language}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.tag"></a>

```go
Tag interface{}
```

- *Type:* interface{}

tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_script_monitor#tag SyntheticsScriptMonitor#tag}

---

##### `UseUnsupportedLegacyRuntime`<sup>Optional</sup> <a name="UseUnsupportedLegacyRuntime" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.useUnsupportedLegacyRuntime"></a>

```go
UseUnsupportedLegacyRuntime interface{}
```

- *Type:* interface{}

A boolean attribute to be set true by the customer, if they would like to use the unsupported legacy runtime of Synthetic Monitors by means of an exemption given until the October 22, 2024 Legacy Runtime EOL.

Setting this attribute to true would allow skipping validation performed by the the New Relic Terraform Provider starting v3.43.0 to disallow using the legacy runtime with new monitors. This would, hence, allow creation of monitors in the legacy runtime until the October 22, 2024 Legacy Runtime EOL, if exempt by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_script_monitor#use_unsupported_legacy_runtime SyntheticsScriptMonitor#use_unsupported_legacy_runtime}

---

### SyntheticsScriptMonitorLocationPrivate <a name="SyntheticsScriptMonitorLocationPrivate" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/syntheticsscriptmonitor"

&syntheticsscriptmonitor.SyntheticsScriptMonitorLocationPrivate {
	Guid: *string,
	VsePassword: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivate.property.guid">Guid</a></code> | <code>*string</code> | The unique identifier for the Synthetics private location in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivate.property.vsePassword">VsePassword</a></code> | <code>*string</code> | The location's Verified Script Execution password (Only necessary if Verified Script Execution is enabled for the location). |

---

##### `Guid`<sup>Required</sup> <a name="Guid" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivate.property.guid"></a>

```go
Guid *string
```

- *Type:* *string

The unique identifier for the Synthetics private location in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_script_monitor#guid SyntheticsScriptMonitor#guid}

---

##### `VsePassword`<sup>Optional</sup> <a name="VsePassword" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivate.property.vsePassword"></a>

```go
VsePassword *string
```

- *Type:* *string

The location's Verified Script Execution password (Only necessary if Verified Script Execution is enabled for the location).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_script_monitor#vse_password SyntheticsScriptMonitor#vse_password}

---

### SyntheticsScriptMonitorTag <a name="SyntheticsScriptMonitorTag" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTag.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/syntheticsscriptmonitor"

&syntheticsscriptmonitor.SyntheticsScriptMonitorTag {
	Key: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTag.property.key">Key</a></code> | <code>*string</code> | Name of the tag key. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTag.property.values">Values</a></code> | <code>*[]*string</code> | Values associated with the tag key. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTag.property.key"></a>

```go
Key *string
```

- *Type:* *string

Name of the tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_script_monitor#key SyntheticsScriptMonitor#key}

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTag.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Values associated with the tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_script_monitor#values SyntheticsScriptMonitor#values}

---

## Classes <a name="Classes" id="Classes"></a>

### SyntheticsScriptMonitorLocationPrivateList <a name="SyntheticsScriptMonitorLocationPrivateList" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/syntheticsscriptmonitor"

syntheticsscriptmonitor.NewSyntheticsScriptMonitorLocationPrivateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SyntheticsScriptMonitorLocationPrivateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.get"></a>

```go
func Get(index *f64) SyntheticsScriptMonitorLocationPrivateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SyntheticsScriptMonitorLocationPrivateOutputReference <a name="SyntheticsScriptMonitorLocationPrivateOutputReference" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/syntheticsscriptmonitor"

syntheticsscriptmonitor.NewSyntheticsScriptMonitorLocationPrivateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SyntheticsScriptMonitorLocationPrivateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.resetVsePassword">ResetVsePassword</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVsePassword` <a name="ResetVsePassword" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.resetVsePassword"></a>

```go
func ResetVsePassword()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.property.guidInput">GuidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.property.vsePasswordInput">VsePasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.property.guid">Guid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.property.vsePassword">VsePassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GuidInput`<sup>Optional</sup> <a name="GuidInput" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.property.guidInput"></a>

```go
func GuidInput() *string
```

- *Type:* *string

---

##### `VsePasswordInput`<sup>Optional</sup> <a name="VsePasswordInput" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.property.vsePasswordInput"></a>

```go
func VsePasswordInput() *string
```

- *Type:* *string

---

##### `Guid`<sup>Required</sup> <a name="Guid" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.property.guid"></a>

```go
func Guid() *string
```

- *Type:* *string

---

##### `VsePassword`<sup>Required</sup> <a name="VsePassword" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.property.vsePassword"></a>

```go
func VsePassword() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SyntheticsScriptMonitorTagList <a name="SyntheticsScriptMonitorTagList" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/syntheticsscriptmonitor"

syntheticsscriptmonitor.NewSyntheticsScriptMonitorTagList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SyntheticsScriptMonitorTagList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.get"></a>

```go
func Get(index *f64) SyntheticsScriptMonitorTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SyntheticsScriptMonitorTagOutputReference <a name="SyntheticsScriptMonitorTagOutputReference" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/syntheticsscriptmonitor"

syntheticsscriptmonitor.NewSyntheticsScriptMonitorTagOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SyntheticsScriptMonitorTagOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



