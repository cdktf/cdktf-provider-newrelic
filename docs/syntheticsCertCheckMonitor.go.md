# `syntheticsCertCheckMonitor` Submodule <a name="`syntheticsCertCheckMonitor` Submodule" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SyntheticsCertCheckMonitor <a name="SyntheticsCertCheckMonitor" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/synthetics_cert_check_monitor newrelic_synthetics_cert_check_monitor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/syntheticscertcheckmonitor"

syntheticscertcheckmonitor.NewSyntheticsCertCheckMonitor(scope Construct, id *string, config SyntheticsCertCheckMonitorConfig) SyntheticsCertCheckMonitor
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig">SyntheticsCertCheckMonitorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig">SyntheticsCertCheckMonitorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.putTag">PutTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.resetLocationsPrivate">ResetLocationsPrivate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.resetLocationsPublic">ResetLocationsPublic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.resetRuntimeType">ResetRuntimeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.resetRuntimeTypeVersion">ResetRuntimeTypeVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.resetTag">ResetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.resetUseUnsupportedLegacyRuntime">ResetUseUnsupportedLegacyRuntime</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTag` <a name="PutTag" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.putTag"></a>

```go
func PutTag(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.putTag.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.resetId"></a>

```go
func ResetId()
```

##### `ResetLocationsPrivate` <a name="ResetLocationsPrivate" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.resetLocationsPrivate"></a>

```go
func ResetLocationsPrivate()
```

##### `ResetLocationsPublic` <a name="ResetLocationsPublic" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.resetLocationsPublic"></a>

```go
func ResetLocationsPublic()
```

##### `ResetRuntimeType` <a name="ResetRuntimeType" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.resetRuntimeType"></a>

```go
func ResetRuntimeType()
```

##### `ResetRuntimeTypeVersion` <a name="ResetRuntimeTypeVersion" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.resetRuntimeTypeVersion"></a>

```go
func ResetRuntimeTypeVersion()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.resetTag"></a>

```go
func ResetTag()
```

##### `ResetUseUnsupportedLegacyRuntime` <a name="ResetUseUnsupportedLegacyRuntime" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.resetUseUnsupportedLegacyRuntime"></a>

```go
func ResetUseUnsupportedLegacyRuntime()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SyntheticsCertCheckMonitor resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/syntheticscertcheckmonitor"

syntheticscertcheckmonitor.SyntheticsCertCheckMonitor_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/syntheticscertcheckmonitor"

syntheticscertcheckmonitor.SyntheticsCertCheckMonitor_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/syntheticscertcheckmonitor"

syntheticscertcheckmonitor.SyntheticsCertCheckMonitor_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/syntheticscertcheckmonitor"

syntheticscertcheckmonitor.SyntheticsCertCheckMonitor_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SyntheticsCertCheckMonitor resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SyntheticsCertCheckMonitor to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SyntheticsCertCheckMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/synthetics_cert_check_monitor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SyntheticsCertCheckMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.periodInMinutes">PeriodInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.tag">Tag</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList">SyntheticsCertCheckMonitorTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.accountIdInput">AccountIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.certificateExpirationInput">CertificateExpirationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.domainInput">DomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.locationsPrivateInput">LocationsPrivateInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.locationsPublicInput">LocationsPublicInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.periodInput">PeriodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.runtimeTypeInput">RuntimeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.runtimeTypeVersionInput">RuntimeTypeVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.tagInput">TagInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.useUnsupportedLegacyRuntimeInput">UseUnsupportedLegacyRuntimeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.accountId">AccountId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.certificateExpiration">CertificateExpiration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.locationsPrivate">LocationsPrivate</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.locationsPublic">LocationsPublic</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.period">Period</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.runtimeType">RuntimeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.runtimeTypeVersion">RuntimeTypeVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.useUnsupportedLegacyRuntime">UseUnsupportedLegacyRuntime</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PeriodInMinutes`<sup>Required</sup> <a name="PeriodInMinutes" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.periodInMinutes"></a>

```go
func PeriodInMinutes() *f64
```

- *Type:* *f64

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.tag"></a>

```go
func Tag() SyntheticsCertCheckMonitorTagList
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList">SyntheticsCertCheckMonitorTagList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.accountIdInput"></a>

```go
func AccountIdInput() *f64
```

- *Type:* *f64

---

##### `CertificateExpirationInput`<sup>Optional</sup> <a name="CertificateExpirationInput" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.certificateExpirationInput"></a>

```go
func CertificateExpirationInput() *f64
```

- *Type:* *f64

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.domainInput"></a>

```go
func DomainInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationsPrivateInput`<sup>Optional</sup> <a name="LocationsPrivateInput" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.locationsPrivateInput"></a>

```go
func LocationsPrivateInput() *[]*string
```

- *Type:* *[]*string

---

##### `LocationsPublicInput`<sup>Optional</sup> <a name="LocationsPublicInput" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.locationsPublicInput"></a>

```go
func LocationsPublicInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PeriodInput`<sup>Optional</sup> <a name="PeriodInput" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.periodInput"></a>

```go
func PeriodInput() *string
```

- *Type:* *string

---

##### `RuntimeTypeInput`<sup>Optional</sup> <a name="RuntimeTypeInput" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.runtimeTypeInput"></a>

```go
func RuntimeTypeInput() *string
```

- *Type:* *string

---

##### `RuntimeTypeVersionInput`<sup>Optional</sup> <a name="RuntimeTypeVersionInput" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.runtimeTypeVersionInput"></a>

```go
func RuntimeTypeVersionInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.tagInput"></a>

```go
func TagInput() interface{}
```

- *Type:* interface{}

---

##### `UseUnsupportedLegacyRuntimeInput`<sup>Optional</sup> <a name="UseUnsupportedLegacyRuntimeInput" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.useUnsupportedLegacyRuntimeInput"></a>

```go
func UseUnsupportedLegacyRuntimeInput() interface{}
```

- *Type:* interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.accountId"></a>

```go
func AccountId() *f64
```

- *Type:* *f64

---

##### `CertificateExpiration`<sup>Required</sup> <a name="CertificateExpiration" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.certificateExpiration"></a>

```go
func CertificateExpiration() *f64
```

- *Type:* *f64

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LocationsPrivate`<sup>Required</sup> <a name="LocationsPrivate" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.locationsPrivate"></a>

```go
func LocationsPrivate() *[]*string
```

- *Type:* *[]*string

---

##### `LocationsPublic`<sup>Required</sup> <a name="LocationsPublic" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.locationsPublic"></a>

```go
func LocationsPublic() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.period"></a>

```go
func Period() *string
```

- *Type:* *string

---

##### `RuntimeType`<sup>Required</sup> <a name="RuntimeType" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.runtimeType"></a>

```go
func RuntimeType() *string
```

- *Type:* *string

---

##### `RuntimeTypeVersion`<sup>Required</sup> <a name="RuntimeTypeVersion" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.runtimeTypeVersion"></a>

```go
func RuntimeTypeVersion() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `UseUnsupportedLegacyRuntime`<sup>Required</sup> <a name="UseUnsupportedLegacyRuntime" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.useUnsupportedLegacyRuntime"></a>

```go
func UseUnsupportedLegacyRuntime() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SyntheticsCertCheckMonitorConfig <a name="SyntheticsCertCheckMonitorConfig" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/syntheticscertcheckmonitor"

&syntheticscertcheckmonitor.SyntheticsCertCheckMonitorConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CertificateExpiration: *f64,
	Domain: *string,
	Name: *string,
	Period: *string,
	Status: *string,
	AccountId: *f64,
	Id: *string,
	LocationsPrivate: *[]*string,
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
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.certificateExpiration">CertificateExpiration</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/synthetics_cert_check_monitor#certificate_expiration SyntheticsCertCheckMonitor#certificate_expiration}. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.domain">Domain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/synthetics_cert_check_monitor#domain SyntheticsCertCheckMonitor#domain}. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.name">Name</a></code> | <code>*string</code> | name of the cert check monitor. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.period">Period</a></code> | <code>*string</code> | The interval at which this monitor should run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.status">Status</a></code> | <code>*string</code> | The monitor status (ENABLED or DISABLED). |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.accountId">AccountId</a></code> | <code>*f64</code> | ID of the newrelic account. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/synthetics_cert_check_monitor#id SyntheticsCertCheckMonitor#id}. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.locationsPrivate">LocationsPrivate</a></code> | <code>*[]*string</code> | The locations in which this monitor should be run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.locationsPublic">LocationsPublic</a></code> | <code>*[]*string</code> | The locations in which this monitor should be run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.runtimeType">RuntimeType</a></code> | <code>*string</code> | The runtime type that the monitor will run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.runtimeTypeVersion">RuntimeTypeVersion</a></code> | <code>*string</code> | The specific semver version of the runtime type. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.tag">Tag</a></code> | <code>interface{}</code> | tag block. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.useUnsupportedLegacyRuntime">UseUnsupportedLegacyRuntime</a></code> | <code>interface{}</code> | A boolean attribute to be set true by the customer, if they would like to use the unsupported legacy runtime of Synthetic Monitors by means of an exemption given until the October 22, 2024 Legacy Runtime EOL. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CertificateExpiration`<sup>Required</sup> <a name="CertificateExpiration" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.certificateExpiration"></a>

```go
CertificateExpiration *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/synthetics_cert_check_monitor#certificate_expiration SyntheticsCertCheckMonitor#certificate_expiration}.

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.domain"></a>

```go
Domain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/synthetics_cert_check_monitor#domain SyntheticsCertCheckMonitor#domain}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

name of the cert check monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/synthetics_cert_check_monitor#name SyntheticsCertCheckMonitor#name}

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.period"></a>

```go
Period *string
```

- *Type:* *string

The interval at which this monitor should run.

Valid values are EVERY_MINUTE, EVERY_5_MINUTES, EVERY_10_MINUTES, EVERY_15_MINUTES, EVERY_30_MINUTES, EVERY_HOUR, EVERY_6_HOURS, EVERY_12_HOURS, or EVERY_DAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/synthetics_cert_check_monitor#period SyntheticsCertCheckMonitor#period}

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

The monitor status (ENABLED or DISABLED).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/synthetics_cert_check_monitor#status SyntheticsCertCheckMonitor#status}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.accountId"></a>

```go
AccountId *f64
```

- *Type:* *f64

ID of the newrelic account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/synthetics_cert_check_monitor#account_id SyntheticsCertCheckMonitor#account_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/synthetics_cert_check_monitor#id SyntheticsCertCheckMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LocationsPrivate`<sup>Optional</sup> <a name="LocationsPrivate" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.locationsPrivate"></a>

```go
LocationsPrivate *[]*string
```

- *Type:* *[]*string

The locations in which this monitor should be run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/synthetics_cert_check_monitor#locations_private SyntheticsCertCheckMonitor#locations_private}

---

##### `LocationsPublic`<sup>Optional</sup> <a name="LocationsPublic" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.locationsPublic"></a>

```go
LocationsPublic *[]*string
```

- *Type:* *[]*string

The locations in which this monitor should be run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/synthetics_cert_check_monitor#locations_public SyntheticsCertCheckMonitor#locations_public}

---

##### `RuntimeType`<sup>Optional</sup> <a name="RuntimeType" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.runtimeType"></a>

```go
RuntimeType *string
```

- *Type:* *string

The runtime type that the monitor will run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/synthetics_cert_check_monitor#runtime_type SyntheticsCertCheckMonitor#runtime_type}

---

##### `RuntimeTypeVersion`<sup>Optional</sup> <a name="RuntimeTypeVersion" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.runtimeTypeVersion"></a>

```go
RuntimeTypeVersion *string
```

- *Type:* *string

The specific semver version of the runtime type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/synthetics_cert_check_monitor#runtime_type_version SyntheticsCertCheckMonitor#runtime_type_version}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.tag"></a>

```go
Tag interface{}
```

- *Type:* interface{}

tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/synthetics_cert_check_monitor#tag SyntheticsCertCheckMonitor#tag}

---

##### `UseUnsupportedLegacyRuntime`<sup>Optional</sup> <a name="UseUnsupportedLegacyRuntime" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.useUnsupportedLegacyRuntime"></a>

```go
UseUnsupportedLegacyRuntime interface{}
```

- *Type:* interface{}

A boolean attribute to be set true by the customer, if they would like to use the unsupported legacy runtime of Synthetic Monitors by means of an exemption given until the October 22, 2024 Legacy Runtime EOL.

Setting this attribute to true would allow skipping validation performed by the the New Relic Terraform Provider starting v3.43.0 to disallow using the legacy runtime with new monitors. This would, hence, allow creation of monitors in the legacy runtime until the October 22, 2024 Legacy Runtime EOL, if exempt by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/synthetics_cert_check_monitor#use_unsupported_legacy_runtime SyntheticsCertCheckMonitor#use_unsupported_legacy_runtime}

---

### SyntheticsCertCheckMonitorTag <a name="SyntheticsCertCheckMonitorTag" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTag.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/syntheticscertcheckmonitor"

&syntheticscertcheckmonitor.SyntheticsCertCheckMonitorTag {
	Key: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTag.property.key">Key</a></code> | <code>*string</code> | Name of the tag key. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTag.property.values">Values</a></code> | <code>*[]*string</code> | Values associated with the tag key. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTag.property.key"></a>

```go
Key *string
```

- *Type:* *string

Name of the tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/synthetics_cert_check_monitor#key SyntheticsCertCheckMonitor#key}

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTag.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Values associated with the tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/synthetics_cert_check_monitor#values SyntheticsCertCheckMonitor#values}

---

## Classes <a name="Classes" id="Classes"></a>

### SyntheticsCertCheckMonitorTagList <a name="SyntheticsCertCheckMonitorTagList" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/syntheticscertcheckmonitor"

syntheticscertcheckmonitor.NewSyntheticsCertCheckMonitorTagList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SyntheticsCertCheckMonitorTagList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.get"></a>

```go
func Get(index *f64) SyntheticsCertCheckMonitorTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SyntheticsCertCheckMonitorTagOutputReference <a name="SyntheticsCertCheckMonitorTagOutputReference" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/syntheticscertcheckmonitor"

syntheticscertcheckmonitor.NewSyntheticsCertCheckMonitorTagOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SyntheticsCertCheckMonitorTagOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



