# `syntheticsMonitor` Submodule <a name="`syntheticsMonitor` Submodule" id="@cdktf/provider-newrelic.syntheticsMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SyntheticsMonitor <a name="SyntheticsMonitor" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/synthetics_monitor newrelic_synthetics_monitor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/syntheticsmonitor"

syntheticsmonitor.NewSyntheticsMonitor(scope Construct, id *string, config SyntheticsMonitorConfig) SyntheticsMonitor
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig">SyntheticsMonitorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig">SyntheticsMonitorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.putCustomHeader">PutCustomHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.putTag">PutTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetBrowsers">ResetBrowsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetBypassHeadRequest">ResetBypassHeadRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetCustomHeader">ResetCustomHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetDeviceOrientation">ResetDeviceOrientation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetDevices">ResetDevices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetDeviceType">ResetDeviceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetEnableScreenshotOnFailureAndScript">ResetEnableScreenshotOnFailureAndScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetLocationsPrivate">ResetLocationsPrivate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetLocationsPublic">ResetLocationsPublic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetPeriod">ResetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetRuntimeType">ResetRuntimeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetRuntimeTypeVersion">ResetRuntimeTypeVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetScriptLanguage">ResetScriptLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetTag">ResetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetTreatRedirectAsFailure">ResetTreatRedirectAsFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetUri">ResetUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetUseUnsupportedLegacyRuntime">ResetUseUnsupportedLegacyRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetValidationString">ResetValidationString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetVerifySsl">ResetVerifySsl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCustomHeader` <a name="PutCustomHeader" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.putCustomHeader"></a>

```go
func PutCustomHeader(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.putCustomHeader.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTag` <a name="PutTag" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.putTag"></a>

```go
func PutTag(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.putTag.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetBrowsers` <a name="ResetBrowsers" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetBrowsers"></a>

```go
func ResetBrowsers()
```

##### `ResetBypassHeadRequest` <a name="ResetBypassHeadRequest" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetBypassHeadRequest"></a>

```go
func ResetBypassHeadRequest()
```

##### `ResetCustomHeader` <a name="ResetCustomHeader" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetCustomHeader"></a>

```go
func ResetCustomHeader()
```

##### `ResetDeviceOrientation` <a name="ResetDeviceOrientation" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetDeviceOrientation"></a>

```go
func ResetDeviceOrientation()
```

##### `ResetDevices` <a name="ResetDevices" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetDevices"></a>

```go
func ResetDevices()
```

##### `ResetDeviceType` <a name="ResetDeviceType" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetDeviceType"></a>

```go
func ResetDeviceType()
```

##### `ResetEnableScreenshotOnFailureAndScript` <a name="ResetEnableScreenshotOnFailureAndScript" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetEnableScreenshotOnFailureAndScript"></a>

```go
func ResetEnableScreenshotOnFailureAndScript()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetId"></a>

```go
func ResetId()
```

##### `ResetLocationsPrivate` <a name="ResetLocationsPrivate" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetLocationsPrivate"></a>

```go
func ResetLocationsPrivate()
```

##### `ResetLocationsPublic` <a name="ResetLocationsPublic" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetLocationsPublic"></a>

```go
func ResetLocationsPublic()
```

##### `ResetPeriod` <a name="ResetPeriod" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetPeriod"></a>

```go
func ResetPeriod()
```

##### `ResetRuntimeType` <a name="ResetRuntimeType" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetRuntimeType"></a>

```go
func ResetRuntimeType()
```

##### `ResetRuntimeTypeVersion` <a name="ResetRuntimeTypeVersion" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetRuntimeTypeVersion"></a>

```go
func ResetRuntimeTypeVersion()
```

##### `ResetScriptLanguage` <a name="ResetScriptLanguage" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetScriptLanguage"></a>

```go
func ResetScriptLanguage()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetTag"></a>

```go
func ResetTag()
```

##### `ResetTreatRedirectAsFailure` <a name="ResetTreatRedirectAsFailure" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetTreatRedirectAsFailure"></a>

```go
func ResetTreatRedirectAsFailure()
```

##### `ResetUri` <a name="ResetUri" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetUri"></a>

```go
func ResetUri()
```

##### `ResetUseUnsupportedLegacyRuntime` <a name="ResetUseUnsupportedLegacyRuntime" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetUseUnsupportedLegacyRuntime"></a>

```go
func ResetUseUnsupportedLegacyRuntime()
```

##### `ResetValidationString` <a name="ResetValidationString" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetValidationString"></a>

```go
func ResetValidationString()
```

##### `ResetVerifySsl` <a name="ResetVerifySsl" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetVerifySsl"></a>

```go
func ResetVerifySsl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SyntheticsMonitor resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/syntheticsmonitor"

syntheticsmonitor.SyntheticsMonitor_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/syntheticsmonitor"

syntheticsmonitor.SyntheticsMonitor_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/syntheticsmonitor"

syntheticsmonitor.SyntheticsMonitor_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/syntheticsmonitor"

syntheticsmonitor.SyntheticsMonitor_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SyntheticsMonitor resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SyntheticsMonitor to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SyntheticsMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/synthetics_monitor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SyntheticsMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.customHeader">CustomHeader</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList">SyntheticsMonitorCustomHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.periodInMinutes">PeriodInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.tag">Tag</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList">SyntheticsMonitorTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.accountIdInput">AccountIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.browsersInput">BrowsersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.bypassHeadRequestInput">BypassHeadRequestInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.customHeaderInput">CustomHeaderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.deviceOrientationInput">DeviceOrientationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.devicesInput">DevicesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.deviceTypeInput">DeviceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.enableScreenshotOnFailureAndScriptInput">EnableScreenshotOnFailureAndScriptInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.locationsPrivateInput">LocationsPrivateInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.locationsPublicInput">LocationsPublicInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.periodInput">PeriodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.runtimeTypeInput">RuntimeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.runtimeTypeVersionInput">RuntimeTypeVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.scriptLanguageInput">ScriptLanguageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.tagInput">TagInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.treatRedirectAsFailureInput">TreatRedirectAsFailureInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.useUnsupportedLegacyRuntimeInput">UseUnsupportedLegacyRuntimeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.validationStringInput">ValidationStringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.verifySslInput">VerifySslInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.accountId">AccountId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.browsers">Browsers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.bypassHeadRequest">BypassHeadRequest</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.deviceOrientation">DeviceOrientation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.devices">Devices</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.deviceType">DeviceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.enableScreenshotOnFailureAndScript">EnableScreenshotOnFailureAndScript</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.locationsPrivate">LocationsPrivate</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.locationsPublic">LocationsPublic</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.period">Period</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.runtimeType">RuntimeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.runtimeTypeVersion">RuntimeTypeVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.scriptLanguage">ScriptLanguage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.treatRedirectAsFailure">TreatRedirectAsFailure</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.useUnsupportedLegacyRuntime">UseUnsupportedLegacyRuntime</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.validationString">ValidationString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.verifySsl">VerifySsl</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CustomHeader`<sup>Required</sup> <a name="CustomHeader" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.customHeader"></a>

```go
func CustomHeader() SyntheticsMonitorCustomHeaderList
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList">SyntheticsMonitorCustomHeaderList</a>

---

##### `PeriodInMinutes`<sup>Required</sup> <a name="PeriodInMinutes" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.periodInMinutes"></a>

```go
func PeriodInMinutes() *f64
```

- *Type:* *f64

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.tag"></a>

```go
func Tag() SyntheticsMonitorTagList
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList">SyntheticsMonitorTagList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.accountIdInput"></a>

```go
func AccountIdInput() *f64
```

- *Type:* *f64

---

##### `BrowsersInput`<sup>Optional</sup> <a name="BrowsersInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.browsersInput"></a>

```go
func BrowsersInput() *[]*string
```

- *Type:* *[]*string

---

##### `BypassHeadRequestInput`<sup>Optional</sup> <a name="BypassHeadRequestInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.bypassHeadRequestInput"></a>

```go
func BypassHeadRequestInput() interface{}
```

- *Type:* interface{}

---

##### `CustomHeaderInput`<sup>Optional</sup> <a name="CustomHeaderInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.customHeaderInput"></a>

```go
func CustomHeaderInput() interface{}
```

- *Type:* interface{}

---

##### `DeviceOrientationInput`<sup>Optional</sup> <a name="DeviceOrientationInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.deviceOrientationInput"></a>

```go
func DeviceOrientationInput() *string
```

- *Type:* *string

---

##### `DevicesInput`<sup>Optional</sup> <a name="DevicesInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.devicesInput"></a>

```go
func DevicesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DeviceTypeInput`<sup>Optional</sup> <a name="DeviceTypeInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.deviceTypeInput"></a>

```go
func DeviceTypeInput() *string
```

- *Type:* *string

---

##### `EnableScreenshotOnFailureAndScriptInput`<sup>Optional</sup> <a name="EnableScreenshotOnFailureAndScriptInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.enableScreenshotOnFailureAndScriptInput"></a>

```go
func EnableScreenshotOnFailureAndScriptInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationsPrivateInput`<sup>Optional</sup> <a name="LocationsPrivateInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.locationsPrivateInput"></a>

```go
func LocationsPrivateInput() *[]*string
```

- *Type:* *[]*string

---

##### `LocationsPublicInput`<sup>Optional</sup> <a name="LocationsPublicInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.locationsPublicInput"></a>

```go
func LocationsPublicInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PeriodInput`<sup>Optional</sup> <a name="PeriodInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.periodInput"></a>

```go
func PeriodInput() *string
```

- *Type:* *string

---

##### `RuntimeTypeInput`<sup>Optional</sup> <a name="RuntimeTypeInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.runtimeTypeInput"></a>

```go
func RuntimeTypeInput() *string
```

- *Type:* *string

---

##### `RuntimeTypeVersionInput`<sup>Optional</sup> <a name="RuntimeTypeVersionInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.runtimeTypeVersionInput"></a>

```go
func RuntimeTypeVersionInput() *string
```

- *Type:* *string

---

##### `ScriptLanguageInput`<sup>Optional</sup> <a name="ScriptLanguageInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.scriptLanguageInput"></a>

```go
func ScriptLanguageInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.tagInput"></a>

```go
func TagInput() interface{}
```

- *Type:* interface{}

---

##### `TreatRedirectAsFailureInput`<sup>Optional</sup> <a name="TreatRedirectAsFailureInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.treatRedirectAsFailureInput"></a>

```go
func TreatRedirectAsFailureInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `UseUnsupportedLegacyRuntimeInput`<sup>Optional</sup> <a name="UseUnsupportedLegacyRuntimeInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.useUnsupportedLegacyRuntimeInput"></a>

```go
func UseUnsupportedLegacyRuntimeInput() interface{}
```

- *Type:* interface{}

---

##### `ValidationStringInput`<sup>Optional</sup> <a name="ValidationStringInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.validationStringInput"></a>

```go
func ValidationStringInput() *string
```

- *Type:* *string

---

##### `VerifySslInput`<sup>Optional</sup> <a name="VerifySslInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.verifySslInput"></a>

```go
func VerifySslInput() interface{}
```

- *Type:* interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.accountId"></a>

```go
func AccountId() *f64
```

- *Type:* *f64

---

##### `Browsers`<sup>Required</sup> <a name="Browsers" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.browsers"></a>

```go
func Browsers() *[]*string
```

- *Type:* *[]*string

---

##### `BypassHeadRequest`<sup>Required</sup> <a name="BypassHeadRequest" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.bypassHeadRequest"></a>

```go
func BypassHeadRequest() interface{}
```

- *Type:* interface{}

---

##### `DeviceOrientation`<sup>Required</sup> <a name="DeviceOrientation" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.deviceOrientation"></a>

```go
func DeviceOrientation() *string
```

- *Type:* *string

---

##### `Devices`<sup>Required</sup> <a name="Devices" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.devices"></a>

```go
func Devices() *[]*string
```

- *Type:* *[]*string

---

##### `DeviceType`<sup>Required</sup> <a name="DeviceType" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.deviceType"></a>

```go
func DeviceType() *string
```

- *Type:* *string

---

##### `EnableScreenshotOnFailureAndScript`<sup>Required</sup> <a name="EnableScreenshotOnFailureAndScript" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.enableScreenshotOnFailureAndScript"></a>

```go
func EnableScreenshotOnFailureAndScript() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LocationsPrivate`<sup>Required</sup> <a name="LocationsPrivate" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.locationsPrivate"></a>

```go
func LocationsPrivate() *[]*string
```

- *Type:* *[]*string

---

##### `LocationsPublic`<sup>Required</sup> <a name="LocationsPublic" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.locationsPublic"></a>

```go
func LocationsPublic() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.period"></a>

```go
func Period() *string
```

- *Type:* *string

---

##### `RuntimeType`<sup>Required</sup> <a name="RuntimeType" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.runtimeType"></a>

```go
func RuntimeType() *string
```

- *Type:* *string

---

##### `RuntimeTypeVersion`<sup>Required</sup> <a name="RuntimeTypeVersion" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.runtimeTypeVersion"></a>

```go
func RuntimeTypeVersion() *string
```

- *Type:* *string

---

##### `ScriptLanguage`<sup>Required</sup> <a name="ScriptLanguage" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.scriptLanguage"></a>

```go
func ScriptLanguage() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `TreatRedirectAsFailure`<sup>Required</sup> <a name="TreatRedirectAsFailure" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.treatRedirectAsFailure"></a>

```go
func TreatRedirectAsFailure() interface{}
```

- *Type:* interface{}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `UseUnsupportedLegacyRuntime`<sup>Required</sup> <a name="UseUnsupportedLegacyRuntime" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.useUnsupportedLegacyRuntime"></a>

```go
func UseUnsupportedLegacyRuntime() interface{}
```

- *Type:* interface{}

---

##### `ValidationString`<sup>Required</sup> <a name="ValidationString" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.validationString"></a>

```go
func ValidationString() *string
```

- *Type:* *string

---

##### `VerifySsl`<sup>Required</sup> <a name="VerifySsl" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.verifySsl"></a>

```go
func VerifySsl() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SyntheticsMonitorConfig <a name="SyntheticsMonitorConfig" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/syntheticsmonitor"

&syntheticsmonitor.SyntheticsMonitorConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Status: *string,
	Type: *string,
	AccountId: *f64,
	Browsers: *[]*string,
	BypassHeadRequest: interface{},
	CustomHeader: interface{},
	DeviceOrientation: *string,
	Devices: *[]*string,
	DeviceType: *string,
	EnableScreenshotOnFailureAndScript: interface{},
	Id: *string,
	LocationsPrivate: *[]*string,
	LocationsPublic: *[]*string,
	Period: *string,
	RuntimeType: *string,
	RuntimeTypeVersion: *string,
	ScriptLanguage: *string,
	Tag: interface{},
	TreatRedirectAsFailure: interface{},
	Uri: *string,
	UseUnsupportedLegacyRuntime: interface{},
	ValidationString: *string,
	VerifySsl: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.name">Name</a></code> | <code>*string</code> | The title of this monitor. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.status">Status</a></code> | <code>*string</code> | The monitor status (ENABLED or DISABLED). |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.type">Type</a></code> | <code>*string</code> | The monitor type. Valid values are SIMPLE AND BROWSER. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.accountId">AccountId</a></code> | <code>*f64</code> | ID of the newrelic account. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.browsers">Browsers</a></code> | <code>*[]*string</code> | The multiple browsers list on which synthetic monitors will run. Valid values are array of CHROME,and FIREFOX. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.bypassHeadRequest">BypassHeadRequest</a></code> | <code>interface{}</code> | Bypass HEAD request. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.customHeader">CustomHeader</a></code> | <code>interface{}</code> | custom_header block. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.deviceOrientation">DeviceOrientation</a></code> | <code>*string</code> | The device orientation the user would like to represent. Valid values are LANDSCAPE, PORTRAIT, or NONE. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.devices">Devices</a></code> | <code>*[]*string</code> | The multiple devices list on which synthetic monitors will run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.deviceType">DeviceType</a></code> | <code>*string</code> | The device type that a user can select. Valid values are MOBILE, TABLET, or NONE. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.enableScreenshotOnFailureAndScript">EnableScreenshotOnFailureAndScript</a></code> | <code>interface{}</code> | Capture a screenshot during job execution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/synthetics_monitor#id SyntheticsMonitor#id}. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.locationsPrivate">LocationsPrivate</a></code> | <code>*[]*string</code> | The locations in which this monitor should be run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.locationsPublic">LocationsPublic</a></code> | <code>*[]*string</code> | The locations in which this monitor should be run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.period">Period</a></code> | <code>*string</code> | The interval at which this monitor should run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.runtimeType">RuntimeType</a></code> | <code>*string</code> | The runtime type that the monitor will run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.runtimeTypeVersion">RuntimeTypeVersion</a></code> | <code>*string</code> | The specific version of the runtime type selected. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.scriptLanguage">ScriptLanguage</a></code> | <code>*string</code> | The programing language that should execute the script. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.tag">Tag</a></code> | <code>interface{}</code> | tag block. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.treatRedirectAsFailure">TreatRedirectAsFailure</a></code> | <code>interface{}</code> | Fail the monitor check if redirected. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.uri">Uri</a></code> | <code>*string</code> | The URI for the monitor to hit. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.useUnsupportedLegacyRuntime">UseUnsupportedLegacyRuntime</a></code> | <code>interface{}</code> | A boolean attribute to be set true by the customer, if they would like to use the unsupported legacy runtime of Synthetic Monitors by means of an exemption given until the October 22, 2024 Legacy Runtime EOL. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.validationString">ValidationString</a></code> | <code>*string</code> | The string to validate against in the response. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.verifySsl">VerifySsl</a></code> | <code>interface{}</code> | Verify SSL. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The title of this monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/synthetics_monitor#name SyntheticsMonitor#name}

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

The monitor status (ENABLED or DISABLED).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/synthetics_monitor#status SyntheticsMonitor#status}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The monitor type. Valid values are SIMPLE AND BROWSER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/synthetics_monitor#type SyntheticsMonitor#type}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.accountId"></a>

```go
AccountId *f64
```

- *Type:* *f64

ID of the newrelic account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/synthetics_monitor#account_id SyntheticsMonitor#account_id}

---

##### `Browsers`<sup>Optional</sup> <a name="Browsers" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.browsers"></a>

```go
Browsers *[]*string
```

- *Type:* *[]*string

The multiple browsers list on which synthetic monitors will run. Valid values are array of CHROME,and FIREFOX.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/synthetics_monitor#browsers SyntheticsMonitor#browsers}

---

##### `BypassHeadRequest`<sup>Optional</sup> <a name="BypassHeadRequest" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.bypassHeadRequest"></a>

```go
BypassHeadRequest interface{}
```

- *Type:* interface{}

Bypass HEAD request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/synthetics_monitor#bypass_head_request SyntheticsMonitor#bypass_head_request}

---

##### `CustomHeader`<sup>Optional</sup> <a name="CustomHeader" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.customHeader"></a>

```go
CustomHeader interface{}
```

- *Type:* interface{}

custom_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/synthetics_monitor#custom_header SyntheticsMonitor#custom_header}

---

##### `DeviceOrientation`<sup>Optional</sup> <a name="DeviceOrientation" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.deviceOrientation"></a>

```go
DeviceOrientation *string
```

- *Type:* *string

The device orientation the user would like to represent. Valid values are LANDSCAPE, PORTRAIT, or NONE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/synthetics_monitor#device_orientation SyntheticsMonitor#device_orientation}

---

##### `Devices`<sup>Optional</sup> <a name="Devices" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.devices"></a>

```go
Devices *[]*string
```

- *Type:* *[]*string

The multiple devices list on which synthetic monitors will run.

Valid values are array of DESKTOP, MOBILE_LANDSCAPE, MOBILE_PORTRAIT, TABLET_LANDSCAPE and TABLET_PORTRAIT

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/synthetics_monitor#devices SyntheticsMonitor#devices}

---

##### `DeviceType`<sup>Optional</sup> <a name="DeviceType" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.deviceType"></a>

```go
DeviceType *string
```

- *Type:* *string

The device type that a user can select. Valid values are MOBILE, TABLET, or NONE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/synthetics_monitor#device_type SyntheticsMonitor#device_type}

---

##### `EnableScreenshotOnFailureAndScript`<sup>Optional</sup> <a name="EnableScreenshotOnFailureAndScript" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.enableScreenshotOnFailureAndScript"></a>

```go
EnableScreenshotOnFailureAndScript interface{}
```

- *Type:* interface{}

Capture a screenshot during job execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/synthetics_monitor#enable_screenshot_on_failure_and_script SyntheticsMonitor#enable_screenshot_on_failure_and_script}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/synthetics_monitor#id SyntheticsMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LocationsPrivate`<sup>Optional</sup> <a name="LocationsPrivate" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.locationsPrivate"></a>

```go
LocationsPrivate *[]*string
```

- *Type:* *[]*string

The locations in which this monitor should be run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/synthetics_monitor#locations_private SyntheticsMonitor#locations_private}

---

##### `LocationsPublic`<sup>Optional</sup> <a name="LocationsPublic" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.locationsPublic"></a>

```go
LocationsPublic *[]*string
```

- *Type:* *[]*string

The locations in which this monitor should be run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/synthetics_monitor#locations_public SyntheticsMonitor#locations_public}

---

##### `Period`<sup>Optional</sup> <a name="Period" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.period"></a>

```go
Period *string
```

- *Type:* *string

The interval at which this monitor should run.

Valid values are EVERY_MINUTE, EVERY_5_MINUTES, EVERY_10_MINUTES, EVERY_15_MINUTES, EVERY_30_MINUTES, EVERY_HOUR, EVERY_6_HOURS, EVERY_12_HOURS, or EVERY_DAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/synthetics_monitor#period SyntheticsMonitor#period}

---

##### `RuntimeType`<sup>Optional</sup> <a name="RuntimeType" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.runtimeType"></a>

```go
RuntimeType *string
```

- *Type:* *string

The runtime type that the monitor will run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/synthetics_monitor#runtime_type SyntheticsMonitor#runtime_type}

---

##### `RuntimeTypeVersion`<sup>Optional</sup> <a name="RuntimeTypeVersion" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.runtimeTypeVersion"></a>

```go
RuntimeTypeVersion *string
```

- *Type:* *string

The specific version of the runtime type selected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/synthetics_monitor#runtime_type_version SyntheticsMonitor#runtime_type_version}

---

##### `ScriptLanguage`<sup>Optional</sup> <a name="ScriptLanguage" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.scriptLanguage"></a>

```go
ScriptLanguage *string
```

- *Type:* *string

The programing language that should execute the script.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/synthetics_monitor#script_language SyntheticsMonitor#script_language}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.tag"></a>

```go
Tag interface{}
```

- *Type:* interface{}

tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/synthetics_monitor#tag SyntheticsMonitor#tag}

---

##### `TreatRedirectAsFailure`<sup>Optional</sup> <a name="TreatRedirectAsFailure" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.treatRedirectAsFailure"></a>

```go
TreatRedirectAsFailure interface{}
```

- *Type:* interface{}

Fail the monitor check if redirected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/synthetics_monitor#treat_redirect_as_failure SyntheticsMonitor#treat_redirect_as_failure}

---

##### `Uri`<sup>Optional</sup> <a name="Uri" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

The URI for the monitor to hit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/synthetics_monitor#uri SyntheticsMonitor#uri}

---

##### `UseUnsupportedLegacyRuntime`<sup>Optional</sup> <a name="UseUnsupportedLegacyRuntime" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.useUnsupportedLegacyRuntime"></a>

```go
UseUnsupportedLegacyRuntime interface{}
```

- *Type:* interface{}

A boolean attribute to be set true by the customer, if they would like to use the unsupported legacy runtime of Synthetic Monitors by means of an exemption given until the October 22, 2024 Legacy Runtime EOL.

Setting this attribute to true would allow skipping validation performed by the the New Relic Terraform Provider starting v3.43.0 to disallow using the legacy runtime with new monitors. This would, hence, allow creation of monitors in the legacy runtime until the October 22, 2024 Legacy Runtime EOL, if exempt by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/synthetics_monitor#use_unsupported_legacy_runtime SyntheticsMonitor#use_unsupported_legacy_runtime}

---

##### `ValidationString`<sup>Optional</sup> <a name="ValidationString" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.validationString"></a>

```go
ValidationString *string
```

- *Type:* *string

The string to validate against in the response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/synthetics_monitor#validation_string SyntheticsMonitor#validation_string}

---

##### `VerifySsl`<sup>Optional</sup> <a name="VerifySsl" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.verifySsl"></a>

```go
VerifySsl interface{}
```

- *Type:* interface{}

Verify SSL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/synthetics_monitor#verify_ssl SyntheticsMonitor#verify_ssl}

---

### SyntheticsMonitorCustomHeader <a name="SyntheticsMonitorCustomHeader" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeader.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/syntheticsmonitor"

&syntheticsmonitor.SyntheticsMonitorCustomHeader {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeader.property.name">Name</a></code> | <code>*string</code> | Header name. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeader.property.value">Value</a></code> | <code>*string</code> | Header value. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeader.property.name"></a>

```go
Name *string
```

- *Type:* *string

Header name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/synthetics_monitor#name SyntheticsMonitor#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeader.property.value"></a>

```go
Value *string
```

- *Type:* *string

Header value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/synthetics_monitor#value SyntheticsMonitor#value}

---

### SyntheticsMonitorTag <a name="SyntheticsMonitorTag" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTag.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/syntheticsmonitor"

&syntheticsmonitor.SyntheticsMonitorTag {
	Key: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTag.property.key">Key</a></code> | <code>*string</code> | Name of the tag key. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTag.property.values">Values</a></code> | <code>*[]*string</code> | Values associated with the tag key. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTag.property.key"></a>

```go
Key *string
```

- *Type:* *string

Name of the tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/synthetics_monitor#key SyntheticsMonitor#key}

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTag.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Values associated with the tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/synthetics_monitor#values SyntheticsMonitor#values}

---

## Classes <a name="Classes" id="Classes"></a>

### SyntheticsMonitorCustomHeaderList <a name="SyntheticsMonitorCustomHeaderList" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/syntheticsmonitor"

syntheticsmonitor.NewSyntheticsMonitorCustomHeaderList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SyntheticsMonitorCustomHeaderList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.get"></a>

```go
func Get(index *f64) SyntheticsMonitorCustomHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SyntheticsMonitorCustomHeaderOutputReference <a name="SyntheticsMonitorCustomHeaderOutputReference" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/syntheticsmonitor"

syntheticsmonitor.NewSyntheticsMonitorCustomHeaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SyntheticsMonitorCustomHeaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SyntheticsMonitorTagList <a name="SyntheticsMonitorTagList" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/syntheticsmonitor"

syntheticsmonitor.NewSyntheticsMonitorTagList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SyntheticsMonitorTagList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.get"></a>

```go
func Get(index *f64) SyntheticsMonitorTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SyntheticsMonitorTagOutputReference <a name="SyntheticsMonitorTagOutputReference" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/syntheticsmonitor"

syntheticsmonitor.NewSyntheticsMonitorTagOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SyntheticsMonitorTagOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



