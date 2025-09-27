# `workload` Submodule <a name="`workload` Submodule" id="@cdktf/provider-newrelic.workload"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Workload <a name="Workload" id="@cdktf/provider-newrelic.workload.Workload"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/workload newrelic_workload}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workload.Workload.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/workload"

workload.NewWorkload(scope Construct, id *string, config WorkloadConfig) Workload
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadConfig">WorkloadConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadConfig">WorkloadConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.putEntitySearchQuery">PutEntitySearchQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.putStatusConfigAutomatic">PutStatusConfigAutomatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.putStatusConfigStatic">PutStatusConfigStatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.resetEntityGuids">ResetEntityGuids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.resetEntitySearchQuery">ResetEntitySearchQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.resetScopeAccountIds">ResetScopeAccountIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.resetStatusConfigAutomatic">ResetStatusConfigAutomatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.resetStatusConfigStatic">ResetStatusConfigStatic</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.workload.Workload.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-newrelic.workload.Workload.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.workload.Workload.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.workload.Workload.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-newrelic.workload.Workload.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.workload.Workload.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-newrelic.workload.Workload.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-newrelic.workload.Workload.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-newrelic.workload.Workload.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-newrelic.workload.Workload.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-newrelic.workload.Workload.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.workload.Workload.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.workload.Workload.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.Workload.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.workload.Workload.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.Workload.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.workload.Workload.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.Workload.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.workload.Workload.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.Workload.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.workload.Workload.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.Workload.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.workload.Workload.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.Workload.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.workload.Workload.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.Workload.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.workload.Workload.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.Workload.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.workload.Workload.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.Workload.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-newrelic.workload.Workload.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-newrelic.workload.Workload.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.workload.Workload.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.workload.Workload.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.workload.Workload.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.Workload.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-newrelic.workload.Workload.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.workload.Workload.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-newrelic.workload.Workload.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.workload.Workload.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.workload.Workload.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-newrelic.workload.Workload.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.workload.Workload.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEntitySearchQuery` <a name="PutEntitySearchQuery" id="@cdktf/provider-newrelic.workload.Workload.putEntitySearchQuery"></a>

```go
func PutEntitySearchQuery(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.workload.Workload.putEntitySearchQuery.parameter.value"></a>

- *Type:* interface{}

---

##### `PutStatusConfigAutomatic` <a name="PutStatusConfigAutomatic" id="@cdktf/provider-newrelic.workload.Workload.putStatusConfigAutomatic"></a>

```go
func PutStatusConfigAutomatic(value WorkloadStatusConfigAutomatic)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.workload.Workload.putStatusConfigAutomatic.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomatic">WorkloadStatusConfigAutomatic</a>

---

##### `PutStatusConfigStatic` <a name="PutStatusConfigStatic" id="@cdktf/provider-newrelic.workload.Workload.putStatusConfigStatic"></a>

```go
func PutStatusConfigStatic(value WorkloadStatusConfigStatic)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.workload.Workload.putStatusConfigStatic.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic">WorkloadStatusConfigStatic</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-newrelic.workload.Workload.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-newrelic.workload.Workload.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEntityGuids` <a name="ResetEntityGuids" id="@cdktf/provider-newrelic.workload.Workload.resetEntityGuids"></a>

```go
func ResetEntityGuids()
```

##### `ResetEntitySearchQuery` <a name="ResetEntitySearchQuery" id="@cdktf/provider-newrelic.workload.Workload.resetEntitySearchQuery"></a>

```go
func ResetEntitySearchQuery()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-newrelic.workload.Workload.resetId"></a>

```go
func ResetId()
```

##### `ResetScopeAccountIds` <a name="ResetScopeAccountIds" id="@cdktf/provider-newrelic.workload.Workload.resetScopeAccountIds"></a>

```go
func ResetScopeAccountIds()
```

##### `ResetStatusConfigAutomatic` <a name="ResetStatusConfigAutomatic" id="@cdktf/provider-newrelic.workload.Workload.resetStatusConfigAutomatic"></a>

```go
func ResetStatusConfigAutomatic()
```

##### `ResetStatusConfigStatic` <a name="ResetStatusConfigStatic" id="@cdktf/provider-newrelic.workload.Workload.resetStatusConfigStatic"></a>

```go
func ResetStatusConfigStatic()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Workload resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-newrelic.workload.Workload.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/workload"

workload.Workload_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.workload.Workload.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-newrelic.workload.Workload.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/workload"

workload.Workload_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.workload.Workload.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-newrelic.workload.Workload.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/workload"

workload.Workload_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.workload.Workload.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-newrelic.workload.Workload.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/workload"

workload.Workload_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Workload resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.workload.Workload.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.workload.Workload.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Workload to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.workload.Workload.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Workload that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/workload#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.workload.Workload.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Workload to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.compositeEntitySearchQuery">CompositeEntitySearchQuery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.entitySearchQuery">EntitySearchQuery</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList">WorkloadEntitySearchQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.guid">Guid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.permalink">Permalink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.statusConfigAutomatic">StatusConfigAutomatic</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference">WorkloadStatusConfigAutomaticOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.statusConfigStatic">StatusConfigStatic</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference">WorkloadStatusConfigStaticOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.workloadId">WorkloadId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.accountIdInput">AccountIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.entityGuidsInput">EntityGuidsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.entitySearchQueryInput">EntitySearchQueryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.scopeAccountIdsInput">ScopeAccountIdsInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.statusConfigAutomaticInput">StatusConfigAutomaticInput</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomatic">WorkloadStatusConfigAutomatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.statusConfigStaticInput">StatusConfigStaticInput</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic">WorkloadStatusConfigStatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.accountId">AccountId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.entityGuids">EntityGuids</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.scopeAccountIds">ScopeAccountIds</a></code> | <code>*[]*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-newrelic.workload.Workload.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-newrelic.workload.Workload.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.workload.Workload.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-newrelic.workload.Workload.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-newrelic.workload.Workload.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-newrelic.workload.Workload.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-newrelic.workload.Workload.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.workload.Workload.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.workload.Workload.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.workload.Workload.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.workload.Workload.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.workload.Workload.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.workload.Workload.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.workload.Workload.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompositeEntitySearchQuery`<sup>Required</sup> <a name="CompositeEntitySearchQuery" id="@cdktf/provider-newrelic.workload.Workload.property.compositeEntitySearchQuery"></a>

```go
func CompositeEntitySearchQuery() *string
```

- *Type:* *string

---

##### `EntitySearchQuery`<sup>Required</sup> <a name="EntitySearchQuery" id="@cdktf/provider-newrelic.workload.Workload.property.entitySearchQuery"></a>

```go
func EntitySearchQuery() WorkloadEntitySearchQueryList
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList">WorkloadEntitySearchQueryList</a>

---

##### `Guid`<sup>Required</sup> <a name="Guid" id="@cdktf/provider-newrelic.workload.Workload.property.guid"></a>

```go
func Guid() *string
```

- *Type:* *string

---

##### `Permalink`<sup>Required</sup> <a name="Permalink" id="@cdktf/provider-newrelic.workload.Workload.property.permalink"></a>

```go
func Permalink() *string
```

- *Type:* *string

---

##### `StatusConfigAutomatic`<sup>Required</sup> <a name="StatusConfigAutomatic" id="@cdktf/provider-newrelic.workload.Workload.property.statusConfigAutomatic"></a>

```go
func StatusConfigAutomatic() WorkloadStatusConfigAutomaticOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference">WorkloadStatusConfigAutomaticOutputReference</a>

---

##### `StatusConfigStatic`<sup>Required</sup> <a name="StatusConfigStatic" id="@cdktf/provider-newrelic.workload.Workload.property.statusConfigStatic"></a>

```go
func StatusConfigStatic() WorkloadStatusConfigStaticOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference">WorkloadStatusConfigStaticOutputReference</a>

---

##### `WorkloadId`<sup>Required</sup> <a name="WorkloadId" id="@cdktf/provider-newrelic.workload.Workload.property.workloadId"></a>

```go
func WorkloadId() *f64
```

- *Type:* *f64

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-newrelic.workload.Workload.property.accountIdInput"></a>

```go
func AccountIdInput() *f64
```

- *Type:* *f64

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-newrelic.workload.Workload.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EntityGuidsInput`<sup>Optional</sup> <a name="EntityGuidsInput" id="@cdktf/provider-newrelic.workload.Workload.property.entityGuidsInput"></a>

```go
func EntityGuidsInput() *[]*string
```

- *Type:* *[]*string

---

##### `EntitySearchQueryInput`<sup>Optional</sup> <a name="EntitySearchQueryInput" id="@cdktf/provider-newrelic.workload.Workload.property.entitySearchQueryInput"></a>

```go
func EntitySearchQueryInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-newrelic.workload.Workload.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-newrelic.workload.Workload.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ScopeAccountIdsInput`<sup>Optional</sup> <a name="ScopeAccountIdsInput" id="@cdktf/provider-newrelic.workload.Workload.property.scopeAccountIdsInput"></a>

```go
func ScopeAccountIdsInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `StatusConfigAutomaticInput`<sup>Optional</sup> <a name="StatusConfigAutomaticInput" id="@cdktf/provider-newrelic.workload.Workload.property.statusConfigAutomaticInput"></a>

```go
func StatusConfigAutomaticInput() WorkloadStatusConfigAutomatic
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomatic">WorkloadStatusConfigAutomatic</a>

---

##### `StatusConfigStaticInput`<sup>Optional</sup> <a name="StatusConfigStaticInput" id="@cdktf/provider-newrelic.workload.Workload.property.statusConfigStaticInput"></a>

```go
func StatusConfigStaticInput() WorkloadStatusConfigStatic
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic">WorkloadStatusConfigStatic</a>

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-newrelic.workload.Workload.property.accountId"></a>

```go
func AccountId() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-newrelic.workload.Workload.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EntityGuids`<sup>Required</sup> <a name="EntityGuids" id="@cdktf/provider-newrelic.workload.Workload.property.entityGuids"></a>

```go
func EntityGuids() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.workload.Workload.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.workload.Workload.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ScopeAccountIds`<sup>Required</sup> <a name="ScopeAccountIds" id="@cdktf/provider-newrelic.workload.Workload.property.scopeAccountIds"></a>

```go
func ScopeAccountIds() *[]*f64
```

- *Type:* *[]*f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-newrelic.workload.Workload.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkloadConfig <a name="WorkloadConfig" id="@cdktf/provider-newrelic.workload.WorkloadConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.workload.WorkloadConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/workload"

&workload.WorkloadConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	AccountId: *f64,
	Description: *string,
	EntityGuids: *[]*string,
	EntitySearchQuery: interface{},
	Id: *string,
	ScopeAccountIds: *[]*f64,
	StatusConfigAutomatic: github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13.workload.WorkloadStatusConfigAutomatic,
	StatusConfigStatic: github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13.workload.WorkloadStatusConfigStatic,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadConfig.property.name">Name</a></code> | <code>*string</code> | The workload's name. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadConfig.property.accountId">AccountId</a></code> | <code>*f64</code> | The New Relic account ID where you want to create the workload. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadConfig.property.description">Description</a></code> | <code>*string</code> | Relevant information about the workload. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadConfig.property.entityGuids">EntityGuids</a></code> | <code>*[]*string</code> | A list of entity GUIDs manually assigned to this workload. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadConfig.property.entitySearchQuery">EntitySearchQuery</a></code> | <code>interface{}</code> | entity_search_query block. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/workload#id Workload#id}. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadConfig.property.scopeAccountIds">ScopeAccountIds</a></code> | <code>*[]*f64</code> | A list of account IDs that will be used to get entities from. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadConfig.property.statusConfigAutomatic">StatusConfigAutomatic</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomatic">WorkloadStatusConfigAutomatic</a></code> | status_config_automatic block. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadConfig.property.statusConfigStatic">StatusConfigStatic</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic">WorkloadStatusConfigStatic</a></code> | status_config_static block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.workload.WorkloadConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.workload.WorkloadConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.workload.WorkloadConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.workload.WorkloadConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.workload.WorkloadConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.workload.WorkloadConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.workload.WorkloadConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.workload.WorkloadConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The workload's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/workload#name Workload#name}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-newrelic.workload.WorkloadConfig.property.accountId"></a>

```go
AccountId *f64
```

- *Type:* *f64

The New Relic account ID where you want to create the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/workload#account_id Workload#account_id}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-newrelic.workload.WorkloadConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Relevant information about the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/workload#description Workload#description}

---

##### `EntityGuids`<sup>Optional</sup> <a name="EntityGuids" id="@cdktf/provider-newrelic.workload.WorkloadConfig.property.entityGuids"></a>

```go
EntityGuids *[]*string
```

- *Type:* *[]*string

A list of entity GUIDs manually assigned to this workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/workload#entity_guids Workload#entity_guids}

---

##### `EntitySearchQuery`<sup>Optional</sup> <a name="EntitySearchQuery" id="@cdktf/provider-newrelic.workload.WorkloadConfig.property.entitySearchQuery"></a>

```go
EntitySearchQuery interface{}
```

- *Type:* interface{}

entity_search_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/workload#entity_search_query Workload#entity_search_query}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-newrelic.workload.WorkloadConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/workload#id Workload#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ScopeAccountIds`<sup>Optional</sup> <a name="ScopeAccountIds" id="@cdktf/provider-newrelic.workload.WorkloadConfig.property.scopeAccountIds"></a>

```go
ScopeAccountIds *[]*f64
```

- *Type:* *[]*f64

A list of account IDs that will be used to get entities from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/workload#scope_account_ids Workload#scope_account_ids}

---

##### `StatusConfigAutomatic`<sup>Optional</sup> <a name="StatusConfigAutomatic" id="@cdktf/provider-newrelic.workload.WorkloadConfig.property.statusConfigAutomatic"></a>

```go
StatusConfigAutomatic WorkloadStatusConfigAutomatic
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomatic">WorkloadStatusConfigAutomatic</a>

status_config_automatic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/workload#status_config_automatic Workload#status_config_automatic}

---

##### `StatusConfigStatic`<sup>Optional</sup> <a name="StatusConfigStatic" id="@cdktf/provider-newrelic.workload.WorkloadConfig.property.statusConfigStatic"></a>

```go
StatusConfigStatic WorkloadStatusConfigStatic
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic">WorkloadStatusConfigStatic</a>

status_config_static block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/workload#status_config_static Workload#status_config_static}

---

### WorkloadEntitySearchQuery <a name="WorkloadEntitySearchQuery" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQuery.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/workload"

&workload.WorkloadEntitySearchQuery {
	Query: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQuery.property.query">Query</a></code> | <code>*string</code> | A valid entity search query; empty, and null values are considered invalid. |

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQuery.property.query"></a>

```go
Query *string
```

- *Type:* *string

A valid entity search query; empty, and null values are considered invalid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/workload#query Workload#query}

---

### WorkloadStatusConfigAutomatic <a name="WorkloadStatusConfigAutomatic" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomatic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomatic.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/workload"

&workload.WorkloadStatusConfigAutomatic {
	Enabled: interface{},
	RemainingEntitiesRule: github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRule,
	Rule: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomatic.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether the automatic status configuration is enabled or not. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomatic.property.remainingEntitiesRule">RemainingEntitiesRule</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRule">WorkloadStatusConfigAutomaticRemainingEntitiesRule</a></code> | remaining_entities_rule block. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomatic.property.rule">Rule</a></code> | <code>interface{}</code> | rule block. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomatic.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether the automatic status configuration is enabled or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/workload#enabled Workload#enabled}

---

##### `RemainingEntitiesRule`<sup>Optional</sup> <a name="RemainingEntitiesRule" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomatic.property.remainingEntitiesRule"></a>

```go
RemainingEntitiesRule WorkloadStatusConfigAutomaticRemainingEntitiesRule
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRule">WorkloadStatusConfigAutomaticRemainingEntitiesRule</a>

remaining_entities_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/workload#remaining_entities_rule Workload#remaining_entities_rule}

---

##### `Rule`<sup>Optional</sup> <a name="Rule" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomatic.property.rule"></a>

```go
Rule interface{}
```

- *Type:* interface{}

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/workload#rule Workload#rule}

---

### WorkloadStatusConfigAutomaticRemainingEntitiesRule <a name="WorkloadStatusConfigAutomaticRemainingEntitiesRule" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/workload"

&workload.WorkloadStatusConfigAutomaticRemainingEntitiesRule {
	RemainingEntitiesRuleRollup: github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRule.property.remainingEntitiesRuleRollup">RemainingEntitiesRuleRollup</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup">WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup</a></code> | remaining_entities_rule_rollup block. |

---

##### `RemainingEntitiesRuleRollup`<sup>Required</sup> <a name="RemainingEntitiesRuleRollup" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRule.property.remainingEntitiesRuleRollup"></a>

```go
RemainingEntitiesRuleRollup WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup">WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup</a>

remaining_entities_rule_rollup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/workload#remaining_entities_rule_rollup Workload#remaining_entities_rule_rollup}

---

### WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup <a name="WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/workload"

&workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup {
	GroupBy: *string,
	Strategy: *string,
	ThresholdType: *string,
	ThresholdValue: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup.property.groupBy">GroupBy</a></code> | <code>*string</code> | The grouping to be applied to the remaining entities. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup.property.strategy">Strategy</a></code> | <code>*string</code> | The rollup strategy that is applied to a group of entities. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup.property.thresholdType">ThresholdType</a></code> | <code>*string</code> | Type of threshold defined for the rule. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup.property.thresholdValue">ThresholdValue</a></code> | <code>*f64</code> | Threshold value defined for the rule. |

---

##### `GroupBy`<sup>Required</sup> <a name="GroupBy" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup.property.groupBy"></a>

```go
GroupBy *string
```

- *Type:* *string

The grouping to be applied to the remaining entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/workload#group_by Workload#group_by}

---

##### `Strategy`<sup>Required</sup> <a name="Strategy" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup.property.strategy"></a>

```go
Strategy *string
```

- *Type:* *string

The rollup strategy that is applied to a group of entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/workload#strategy Workload#strategy}

---

##### `ThresholdType`<sup>Optional</sup> <a name="ThresholdType" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup.property.thresholdType"></a>

```go
ThresholdType *string
```

- *Type:* *string

Type of threshold defined for the rule.

This is an optional field that only applies when strategy is WORST_STATUS_WINS. Use a threshold to roll up the worst status only after a certain amount of entities are not operational.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/workload#threshold_type Workload#threshold_type}

---

##### `ThresholdValue`<sup>Optional</sup> <a name="ThresholdValue" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup.property.thresholdValue"></a>

```go
ThresholdValue *f64
```

- *Type:* *f64

Threshold value defined for the rule.

This optional field is used in combination with thresholdType. If the threshold type is null, the threshold value will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/workload#threshold_value Workload#threshold_value}

---

### WorkloadStatusConfigAutomaticRule <a name="WorkloadStatusConfigAutomaticRule" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/workload"

&workload.WorkloadStatusConfigAutomaticRule {
	Rollup: github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13.workload.WorkloadStatusConfigAutomaticRuleRollup,
	EntityGuids: *[]*string,
	NrqlQuery: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRule.property.rollup">Rollup</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollup">WorkloadStatusConfigAutomaticRuleRollup</a></code> | rollup block. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRule.property.entityGuids">EntityGuids</a></code> | <code>*[]*string</code> | A list of entity GUIDs composing the rule. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRule.property.nrqlQuery">NrqlQuery</a></code> | <code>interface{}</code> | nrql_query block. |

---

##### `Rollup`<sup>Required</sup> <a name="Rollup" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRule.property.rollup"></a>

```go
Rollup WorkloadStatusConfigAutomaticRuleRollup
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollup">WorkloadStatusConfigAutomaticRuleRollup</a>

rollup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/workload#rollup Workload#rollup}

---

##### `EntityGuids`<sup>Optional</sup> <a name="EntityGuids" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRule.property.entityGuids"></a>

```go
EntityGuids *[]*string
```

- *Type:* *[]*string

A list of entity GUIDs composing the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/workload#entity_guids Workload#entity_guids}

---

##### `NrqlQuery`<sup>Optional</sup> <a name="NrqlQuery" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRule.property.nrqlQuery"></a>

```go
NrqlQuery interface{}
```

- *Type:* interface{}

nrql_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/workload#nrql_query Workload#nrql_query}

---

### WorkloadStatusConfigAutomaticRuleNrqlQuery <a name="WorkloadStatusConfigAutomaticRuleNrqlQuery" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQuery.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/workload"

&workload.WorkloadStatusConfigAutomaticRuleNrqlQuery {
	Query: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQuery.property.query">Query</a></code> | <code>*string</code> | The entity search query that is used to perform the search of a group of entities. |

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQuery.property.query"></a>

```go
Query *string
```

- *Type:* *string

The entity search query that is used to perform the search of a group of entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/workload#query Workload#query}

---

### WorkloadStatusConfigAutomaticRuleRollup <a name="WorkloadStatusConfigAutomaticRuleRollup" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/workload"

&workload.WorkloadStatusConfigAutomaticRuleRollup {
	Strategy: *string,
	ThresholdType: *string,
	ThresholdValue: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollup.property.strategy">Strategy</a></code> | <code>*string</code> | The rollup strategy that is applied to a group of entities. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollup.property.thresholdType">ThresholdType</a></code> | <code>*string</code> | Type of threshold defined for the rule. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollup.property.thresholdValue">ThresholdValue</a></code> | <code>*f64</code> | Threshold value defined for the rule. |

---

##### `Strategy`<sup>Required</sup> <a name="Strategy" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollup.property.strategy"></a>

```go
Strategy *string
```

- *Type:* *string

The rollup strategy that is applied to a group of entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/workload#strategy Workload#strategy}

---

##### `ThresholdType`<sup>Optional</sup> <a name="ThresholdType" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollup.property.thresholdType"></a>

```go
ThresholdType *string
```

- *Type:* *string

Type of threshold defined for the rule.

This is an optional field that only applies when strategy is WORST_STATUS_WINS. Use a threshold to roll up the worst status only after a certain amount of entities are not operational.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/workload#threshold_type Workload#threshold_type}

---

##### `ThresholdValue`<sup>Optional</sup> <a name="ThresholdValue" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollup.property.thresholdValue"></a>

```go
ThresholdValue *f64
```

- *Type:* *f64

Threshold value defined for the rule.

This optional field is used in combination with thresholdType. If the threshold type is null, the threshold value will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/workload#threshold_value Workload#threshold_value}

---

### WorkloadStatusConfigStatic <a name="WorkloadStatusConfigStatic" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/workload"

&workload.WorkloadStatusConfigStatic {
	Enabled: interface{},
	Status: *string,
	Description: *string,
	Summary: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether the static status configuration is enabled or not. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic.property.status">Status</a></code> | <code>*string</code> | The status of the workload. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic.property.description">Description</a></code> | <code>*string</code> | A description that provides additional details about the status of the workload. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic.property.summary">Summary</a></code> | <code>*string</code> | A short description of the status of the workload. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether the static status configuration is enabled or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/workload#enabled Workload#enabled}

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic.property.status"></a>

```go
Status *string
```

- *Type:* *string

The status of the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/workload#status Workload#status}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description that provides additional details about the status of the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/workload#description Workload#description}

---

##### `Summary`<sup>Optional</sup> <a name="Summary" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic.property.summary"></a>

```go
Summary *string
```

- *Type:* *string

A short description of the status of the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/workload#summary Workload#summary}

---

## Classes <a name="Classes" id="Classes"></a>

### WorkloadEntitySearchQueryList <a name="WorkloadEntitySearchQueryList" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/workload"

workload.NewWorkloadEntitySearchQueryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WorkloadEntitySearchQueryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.get"></a>

```go
func Get(index *f64) WorkloadEntitySearchQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkloadEntitySearchQueryOutputReference <a name="WorkloadEntitySearchQueryOutputReference" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/workload"

workload.NewWorkloadEntitySearchQueryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WorkloadEntitySearchQueryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.property.queryInput">QueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.property.queryInput"></a>

```go
func QueryInput() *string
```

- *Type:* *string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkloadStatusConfigAutomaticOutputReference <a name="WorkloadStatusConfigAutomaticOutputReference" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/workload"

workload.NewWorkloadStatusConfigAutomaticOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkloadStatusConfigAutomaticOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.putRemainingEntitiesRule">PutRemainingEntitiesRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.putRule">PutRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.resetRemainingEntitiesRule">ResetRemainingEntitiesRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.resetRule">ResetRule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRemainingEntitiesRule` <a name="PutRemainingEntitiesRule" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.putRemainingEntitiesRule"></a>

```go
func PutRemainingEntitiesRule(value WorkloadStatusConfigAutomaticRemainingEntitiesRule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.putRemainingEntitiesRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRule">WorkloadStatusConfigAutomaticRemainingEntitiesRule</a>

---

##### `PutRule` <a name="PutRule" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.putRule"></a>

```go
func PutRule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.putRule.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetRemainingEntitiesRule` <a name="ResetRemainingEntitiesRule" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.resetRemainingEntitiesRule"></a>

```go
func ResetRemainingEntitiesRule()
```

##### `ResetRule` <a name="ResetRule" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.resetRule"></a>

```go
func ResetRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.remainingEntitiesRule">RemainingEntitiesRule</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference">WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.rule">Rule</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList">WorkloadStatusConfigAutomaticRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.remainingEntitiesRuleInput">RemainingEntitiesRuleInput</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRule">WorkloadStatusConfigAutomaticRemainingEntitiesRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.ruleInput">RuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomatic">WorkloadStatusConfigAutomatic</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RemainingEntitiesRule`<sup>Required</sup> <a name="RemainingEntitiesRule" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.remainingEntitiesRule"></a>

```go
func RemainingEntitiesRule() WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference">WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference</a>

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.rule"></a>

```go
func Rule() WorkloadStatusConfigAutomaticRuleList
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList">WorkloadStatusConfigAutomaticRuleList</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `RemainingEntitiesRuleInput`<sup>Optional</sup> <a name="RemainingEntitiesRuleInput" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.remainingEntitiesRuleInput"></a>

```go
func RemainingEntitiesRuleInput() WorkloadStatusConfigAutomaticRemainingEntitiesRule
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRule">WorkloadStatusConfigAutomaticRemainingEntitiesRule</a>

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.ruleInput"></a>

```go
func RuleInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.internalValue"></a>

```go
func InternalValue() WorkloadStatusConfigAutomatic
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomatic">WorkloadStatusConfigAutomatic</a>

---


### WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference <a name="WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/workload"

workload.NewWorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.putRemainingEntitiesRuleRollup">PutRemainingEntitiesRuleRollup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRemainingEntitiesRuleRollup` <a name="PutRemainingEntitiesRuleRollup" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.putRemainingEntitiesRuleRollup"></a>

```go
func PutRemainingEntitiesRuleRollup(value WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.putRemainingEntitiesRuleRollup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup">WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.property.remainingEntitiesRuleRollup">RemainingEntitiesRuleRollup</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference">WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.property.remainingEntitiesRuleRollupInput">RemainingEntitiesRuleRollupInput</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup">WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRule">WorkloadStatusConfigAutomaticRemainingEntitiesRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RemainingEntitiesRuleRollup`<sup>Required</sup> <a name="RemainingEntitiesRuleRollup" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.property.remainingEntitiesRuleRollup"></a>

```go
func RemainingEntitiesRuleRollup() WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference">WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference</a>

---

##### `RemainingEntitiesRuleRollupInput`<sup>Optional</sup> <a name="RemainingEntitiesRuleRollupInput" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.property.remainingEntitiesRuleRollupInput"></a>

```go
func RemainingEntitiesRuleRollupInput() WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup">WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() WorkloadStatusConfigAutomaticRemainingEntitiesRule
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRule">WorkloadStatusConfigAutomaticRemainingEntitiesRule</a>

---


### WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference <a name="WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/workload"

workload.NewWorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.resetThresholdType">ResetThresholdType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.resetThresholdValue">ResetThresholdValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetThresholdType` <a name="ResetThresholdType" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.resetThresholdType"></a>

```go
func ResetThresholdType()
```

##### `ResetThresholdValue` <a name="ResetThresholdValue" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.resetThresholdValue"></a>

```go
func ResetThresholdValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.groupByInput">GroupByInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.strategyInput">StrategyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.thresholdTypeInput">ThresholdTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.thresholdValueInput">ThresholdValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.groupBy">GroupBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.strategy">Strategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.thresholdType">ThresholdType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.thresholdValue">ThresholdValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup">WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GroupByInput`<sup>Optional</sup> <a name="GroupByInput" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.groupByInput"></a>

```go
func GroupByInput() *string
```

- *Type:* *string

---

##### `StrategyInput`<sup>Optional</sup> <a name="StrategyInput" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.strategyInput"></a>

```go
func StrategyInput() *string
```

- *Type:* *string

---

##### `ThresholdTypeInput`<sup>Optional</sup> <a name="ThresholdTypeInput" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.thresholdTypeInput"></a>

```go
func ThresholdTypeInput() *string
```

- *Type:* *string

---

##### `ThresholdValueInput`<sup>Optional</sup> <a name="ThresholdValueInput" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.thresholdValueInput"></a>

```go
func ThresholdValueInput() *f64
```

- *Type:* *f64

---

##### `GroupBy`<sup>Required</sup> <a name="GroupBy" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.groupBy"></a>

```go
func GroupBy() *string
```

- *Type:* *string

---

##### `Strategy`<sup>Required</sup> <a name="Strategy" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.strategy"></a>

```go
func Strategy() *string
```

- *Type:* *string

---

##### `ThresholdType`<sup>Required</sup> <a name="ThresholdType" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.thresholdType"></a>

```go
func ThresholdType() *string
```

- *Type:* *string

---

##### `ThresholdValue`<sup>Required</sup> <a name="ThresholdValue" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.thresholdValue"></a>

```go
func ThresholdValue() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.internalValue"></a>

```go
func InternalValue() WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup">WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup</a>

---


### WorkloadStatusConfigAutomaticRuleList <a name="WorkloadStatusConfigAutomaticRuleList" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/workload"

workload.NewWorkloadStatusConfigAutomaticRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WorkloadStatusConfigAutomaticRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.get"></a>

```go
func Get(index *f64) WorkloadStatusConfigAutomaticRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkloadStatusConfigAutomaticRuleNrqlQueryList <a name="WorkloadStatusConfigAutomaticRuleNrqlQueryList" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/workload"

workload.NewWorkloadStatusConfigAutomaticRuleNrqlQueryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WorkloadStatusConfigAutomaticRuleNrqlQueryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.get"></a>

```go
func Get(index *f64) WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference <a name="WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/workload"

workload.NewWorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.property.queryInput">QueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.property.queryInput"></a>

```go
func QueryInput() *string
```

- *Type:* *string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkloadStatusConfigAutomaticRuleOutputReference <a name="WorkloadStatusConfigAutomaticRuleOutputReference" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/workload"

workload.NewWorkloadStatusConfigAutomaticRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WorkloadStatusConfigAutomaticRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.putNrqlQuery">PutNrqlQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.putRollup">PutRollup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.resetEntityGuids">ResetEntityGuids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.resetNrqlQuery">ResetNrqlQuery</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNrqlQuery` <a name="PutNrqlQuery" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.putNrqlQuery"></a>

```go
func PutNrqlQuery(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.putNrqlQuery.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRollup` <a name="PutRollup" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.putRollup"></a>

```go
func PutRollup(value WorkloadStatusConfigAutomaticRuleRollup)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.putRollup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollup">WorkloadStatusConfigAutomaticRuleRollup</a>

---

##### `ResetEntityGuids` <a name="ResetEntityGuids" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.resetEntityGuids"></a>

```go
func ResetEntityGuids()
```

##### `ResetNrqlQuery` <a name="ResetNrqlQuery" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.resetNrqlQuery"></a>

```go
func ResetNrqlQuery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.nrqlQuery">NrqlQuery</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList">WorkloadStatusConfigAutomaticRuleNrqlQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.rollup">Rollup</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference">WorkloadStatusConfigAutomaticRuleRollupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.entityGuidsInput">EntityGuidsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.nrqlQueryInput">NrqlQueryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.rollupInput">RollupInput</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollup">WorkloadStatusConfigAutomaticRuleRollup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.entityGuids">EntityGuids</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NrqlQuery`<sup>Required</sup> <a name="NrqlQuery" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.nrqlQuery"></a>

```go
func NrqlQuery() WorkloadStatusConfigAutomaticRuleNrqlQueryList
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList">WorkloadStatusConfigAutomaticRuleNrqlQueryList</a>

---

##### `Rollup`<sup>Required</sup> <a name="Rollup" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.rollup"></a>

```go
func Rollup() WorkloadStatusConfigAutomaticRuleRollupOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference">WorkloadStatusConfigAutomaticRuleRollupOutputReference</a>

---

##### `EntityGuidsInput`<sup>Optional</sup> <a name="EntityGuidsInput" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.entityGuidsInput"></a>

```go
func EntityGuidsInput() *[]*string
```

- *Type:* *[]*string

---

##### `NrqlQueryInput`<sup>Optional</sup> <a name="NrqlQueryInput" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.nrqlQueryInput"></a>

```go
func NrqlQueryInput() interface{}
```

- *Type:* interface{}

---

##### `RollupInput`<sup>Optional</sup> <a name="RollupInput" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.rollupInput"></a>

```go
func RollupInput() WorkloadStatusConfigAutomaticRuleRollup
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollup">WorkloadStatusConfigAutomaticRuleRollup</a>

---

##### `EntityGuids`<sup>Required</sup> <a name="EntityGuids" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.entityGuids"></a>

```go
func EntityGuids() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkloadStatusConfigAutomaticRuleRollupOutputReference <a name="WorkloadStatusConfigAutomaticRuleRollupOutputReference" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/workload"

workload.NewWorkloadStatusConfigAutomaticRuleRollupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkloadStatusConfigAutomaticRuleRollupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.resetThresholdType">ResetThresholdType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.resetThresholdValue">ResetThresholdValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetThresholdType` <a name="ResetThresholdType" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.resetThresholdType"></a>

```go
func ResetThresholdType()
```

##### `ResetThresholdValue` <a name="ResetThresholdValue" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.resetThresholdValue"></a>

```go
func ResetThresholdValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.strategyInput">StrategyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.thresholdTypeInput">ThresholdTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.thresholdValueInput">ThresholdValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.strategy">Strategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.thresholdType">ThresholdType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.thresholdValue">ThresholdValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollup">WorkloadStatusConfigAutomaticRuleRollup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StrategyInput`<sup>Optional</sup> <a name="StrategyInput" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.strategyInput"></a>

```go
func StrategyInput() *string
```

- *Type:* *string

---

##### `ThresholdTypeInput`<sup>Optional</sup> <a name="ThresholdTypeInput" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.thresholdTypeInput"></a>

```go
func ThresholdTypeInput() *string
```

- *Type:* *string

---

##### `ThresholdValueInput`<sup>Optional</sup> <a name="ThresholdValueInput" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.thresholdValueInput"></a>

```go
func ThresholdValueInput() *f64
```

- *Type:* *f64

---

##### `Strategy`<sup>Required</sup> <a name="Strategy" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.strategy"></a>

```go
func Strategy() *string
```

- *Type:* *string

---

##### `ThresholdType`<sup>Required</sup> <a name="ThresholdType" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.thresholdType"></a>

```go
func ThresholdType() *string
```

- *Type:* *string

---

##### `ThresholdValue`<sup>Required</sup> <a name="ThresholdValue" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.thresholdValue"></a>

```go
func ThresholdValue() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.internalValue"></a>

```go
func InternalValue() WorkloadStatusConfigAutomaticRuleRollup
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollup">WorkloadStatusConfigAutomaticRuleRollup</a>

---


### WorkloadStatusConfigStaticOutputReference <a name="WorkloadStatusConfigStaticOutputReference" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/workload"

workload.NewWorkloadStatusConfigStaticOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkloadStatusConfigStaticOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.resetSummary">ResetSummary</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetSummary` <a name="ResetSummary" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.resetSummary"></a>

```go
func ResetSummary()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.summaryInput">SummaryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.summary">Summary</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic">WorkloadStatusConfigStatic</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `SummaryInput`<sup>Optional</sup> <a name="SummaryInput" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.summaryInput"></a>

```go
func SummaryInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Summary`<sup>Required</sup> <a name="Summary" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.summary"></a>

```go
func Summary() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.internalValue"></a>

```go
func InternalValue() WorkloadStatusConfigStatic
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic">WorkloadStatusConfigStatic</a>

---



