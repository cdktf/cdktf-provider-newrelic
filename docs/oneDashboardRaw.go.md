# `oneDashboardRaw` Submodule <a name="`oneDashboardRaw` Submodule" id="@cdktf/provider-newrelic.oneDashboardRaw"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OneDashboardRaw <a name="OneDashboardRaw" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/one_dashboard_raw newrelic_one_dashboard_raw}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/onedashboardraw"

onedashboardraw.NewOneDashboardRaw(scope Construct, id *string, config OneDashboardRawConfig) OneDashboardRaw
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig">OneDashboardRawConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig">OneDashboardRawConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.putPage">PutPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.resetPermissions">ResetPermissions</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPage` <a name="PutPage" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.putPage"></a>

```go
func PutPage(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.putPage.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.resetId"></a>

```go
func ResetId()
```

##### `ResetPermissions` <a name="ResetPermissions" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.resetPermissions"></a>

```go
func ResetPermissions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OneDashboardRaw resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/onedashboardraw"

onedashboardraw.OneDashboardRaw_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/onedashboardraw"

onedashboardraw.OneDashboardRaw_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/onedashboardraw"

onedashboardraw.OneDashboardRaw_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/onedashboardraw"

onedashboardraw.OneDashboardRaw_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a OneDashboardRaw resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OneDashboardRaw to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OneDashboardRaw that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/one_dashboard_raw#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the OneDashboardRaw to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.guid">Guid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.page">Page</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList">OneDashboardRawPageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.permalink">Permalink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.accountIdInput">AccountIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.pageInput">PageInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.permissionsInput">PermissionsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.accountId">AccountId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.permissions">Permissions</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Guid`<sup>Required</sup> <a name="Guid" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.guid"></a>

```go
func Guid() *string
```

- *Type:* *string

---

##### `Page`<sup>Required</sup> <a name="Page" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.page"></a>

```go
func Page() OneDashboardRawPageList
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList">OneDashboardRawPageList</a>

---

##### `Permalink`<sup>Required</sup> <a name="Permalink" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.permalink"></a>

```go
func Permalink() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.accountIdInput"></a>

```go
func AccountIdInput() *f64
```

- *Type:* *f64

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PageInput`<sup>Optional</sup> <a name="PageInput" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.pageInput"></a>

```go
func PageInput() interface{}
```

- *Type:* interface{}

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.permissionsInput"></a>

```go
func PermissionsInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.accountId"></a>

```go
func AccountId() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.permissions"></a>

```go
func Permissions() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OneDashboardRawConfig <a name="OneDashboardRawConfig" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/onedashboardraw"

&onedashboardraw.OneDashboardRawConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Page: interface{},
	AccountId: *f64,
	Description: *string,
	Id: *string,
	Permissions: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.name">Name</a></code> | <code>*string</code> | The dashboard's name. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.page">Page</a></code> | <code>interface{}</code> | page block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.accountId">AccountId</a></code> | <code>*f64</code> | The New Relic account ID where you want to create the dashboard. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.description">Description</a></code> | <code>*string</code> | The dashboard's description. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/one_dashboard_raw#id OneDashboardRaw#id}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.permissions">Permissions</a></code> | <code>*string</code> | Determines who can see or edit the dashboard. Valid values are private, public_read_only, public_read_write. Defaults to public_read_only. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The dashboard's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/one_dashboard_raw#name OneDashboardRaw#name}

---

##### `Page`<sup>Required</sup> <a name="Page" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.page"></a>

```go
Page interface{}
```

- *Type:* interface{}

page block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/one_dashboard_raw#page OneDashboardRaw#page}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.accountId"></a>

```go
AccountId *f64
```

- *Type:* *f64

The New Relic account ID where you want to create the dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/one_dashboard_raw#account_id OneDashboardRaw#account_id}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The dashboard's description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/one_dashboard_raw#description OneDashboardRaw#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/one_dashboard_raw#id OneDashboardRaw#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Permissions`<sup>Optional</sup> <a name="Permissions" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.permissions"></a>

```go
Permissions *string
```

- *Type:* *string

Determines who can see or edit the dashboard. Valid values are private, public_read_only, public_read_write. Defaults to public_read_only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/one_dashboard_raw#permissions OneDashboardRaw#permissions}

---

### OneDashboardRawPage <a name="OneDashboardRawPage" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/onedashboardraw"

&onedashboardraw.OneDashboardRawPage {
	Name: *string,
	Description: *string,
	Widget: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPage.property.name">Name</a></code> | <code>*string</code> | The dashboard page's name. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPage.property.description">Description</a></code> | <code>*string</code> | The dashboard page's description. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPage.property.widget">Widget</a></code> | <code>interface{}</code> | widget block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPage.property.name"></a>

```go
Name *string
```

- *Type:* *string

The dashboard page's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/one_dashboard_raw#name OneDashboardRaw#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPage.property.description"></a>

```go
Description *string
```

- *Type:* *string

The dashboard page's description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/one_dashboard_raw#description OneDashboardRaw#description}

---

##### `Widget`<sup>Optional</sup> <a name="Widget" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPage.property.widget"></a>

```go
Widget interface{}
```

- *Type:* interface{}

widget block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/one_dashboard_raw#widget OneDashboardRaw#widget}

---

### OneDashboardRawPageWidget <a name="OneDashboardRawPageWidget" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/onedashboardraw"

&onedashboardraw.OneDashboardRawPageWidget {
	Column: *f64,
	Configuration: *string,
	Row: *f64,
	Title: *string,
	VisualizationId: *string,
	Height: *f64,
	LinkedEntityGuids: *[]*string,
	Width: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget.property.column">Column</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/one_dashboard_raw#column OneDashboardRaw#column}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget.property.configuration">Configuration</a></code> | <code>*string</code> | The configuration of the widget. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget.property.row">Row</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/one_dashboard_raw#row OneDashboardRaw#row}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget.property.title">Title</a></code> | <code>*string</code> | A title for the widget. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget.property.visualizationId">VisualizationId</a></code> | <code>*string</code> | The visualization ID of the widget. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget.property.height">Height</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/one_dashboard_raw#height OneDashboardRaw#height}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget.property.linkedEntityGuids">LinkedEntityGuids</a></code> | <code>*[]*string</code> | (Optional) Related entity GUIDs. Currently only supports Dashboard entity GUIDs. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget.property.width">Width</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/one_dashboard_raw#width OneDashboardRaw#width}. |

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget.property.column"></a>

```go
Column *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/one_dashboard_raw#column OneDashboardRaw#column}.

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget.property.configuration"></a>

```go
Configuration *string
```

- *Type:* *string

The configuration of the widget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/one_dashboard_raw#configuration OneDashboardRaw#configuration}

---

##### `Row`<sup>Required</sup> <a name="Row" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget.property.row"></a>

```go
Row *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/one_dashboard_raw#row OneDashboardRaw#row}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget.property.title"></a>

```go
Title *string
```

- *Type:* *string

A title for the widget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/one_dashboard_raw#title OneDashboardRaw#title}

---

##### `VisualizationId`<sup>Required</sup> <a name="VisualizationId" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget.property.visualizationId"></a>

```go
VisualizationId *string
```

- *Type:* *string

The visualization ID of the widget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/one_dashboard_raw#visualization_id OneDashboardRaw#visualization_id}

---

##### `Height`<sup>Optional</sup> <a name="Height" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget.property.height"></a>

```go
Height *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/one_dashboard_raw#height OneDashboardRaw#height}.

---

##### `LinkedEntityGuids`<sup>Optional</sup> <a name="LinkedEntityGuids" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget.property.linkedEntityGuids"></a>

```go
LinkedEntityGuids *[]*string
```

- *Type:* *[]*string

(Optional) Related entity GUIDs. Currently only supports Dashboard entity GUIDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/one_dashboard_raw#linked_entity_guids OneDashboardRaw#linked_entity_guids}

---

##### `Width`<sup>Optional</sup> <a name="Width" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget.property.width"></a>

```go
Width *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/one_dashboard_raw#width OneDashboardRaw#width}.

---

## Classes <a name="Classes" id="Classes"></a>

### OneDashboardRawPageList <a name="OneDashboardRawPageList" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/onedashboardraw"

onedashboardraw.NewOneDashboardRawPageList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OneDashboardRawPageList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.get"></a>

```go
func Get(index *f64) OneDashboardRawPageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OneDashboardRawPageOutputReference <a name="OneDashboardRawPageOutputReference" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/onedashboardraw"

onedashboardraw.NewOneDashboardRawPageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OneDashboardRawPageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.putWidget">PutWidget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.resetWidget">ResetWidget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutWidget` <a name="PutWidget" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.putWidget"></a>

```go
func PutWidget(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.putWidget.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetWidget` <a name="ResetWidget" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.resetWidget"></a>

```go
func ResetWidget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.guid">Guid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.widget">Widget</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList">OneDashboardRawPageWidgetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.widgetInput">WidgetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Guid`<sup>Required</sup> <a name="Guid" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.guid"></a>

```go
func Guid() *string
```

- *Type:* *string

---

##### `Widget`<sup>Required</sup> <a name="Widget" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.widget"></a>

```go
func Widget() OneDashboardRawPageWidgetList
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList">OneDashboardRawPageWidgetList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `WidgetInput`<sup>Optional</sup> <a name="WidgetInput" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.widgetInput"></a>

```go
func WidgetInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OneDashboardRawPageWidgetList <a name="OneDashboardRawPageWidgetList" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/onedashboardraw"

onedashboardraw.NewOneDashboardRawPageWidgetList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OneDashboardRawPageWidgetList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.get"></a>

```go
func Get(index *f64) OneDashboardRawPageWidgetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OneDashboardRawPageWidgetOutputReference <a name="OneDashboardRawPageWidgetOutputReference" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/onedashboardraw"

onedashboardraw.NewOneDashboardRawPageWidgetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OneDashboardRawPageWidgetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.resetHeight">ResetHeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.resetLinkedEntityGuids">ResetLinkedEntityGuids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.resetWidth">ResetWidth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHeight` <a name="ResetHeight" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.resetHeight"></a>

```go
func ResetHeight()
```

##### `ResetLinkedEntityGuids` <a name="ResetLinkedEntityGuids" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.resetLinkedEntityGuids"></a>

```go
func ResetLinkedEntityGuids()
```

##### `ResetWidth` <a name="ResetWidth" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.resetWidth"></a>

```go
func ResetWidth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.columnInput">ColumnInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.configurationInput">ConfigurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.heightInput">HeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.linkedEntityGuidsInput">LinkedEntityGuidsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.rowInput">RowInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.visualizationIdInput">VisualizationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.widthInput">WidthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.column">Column</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.configuration">Configuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.height">Height</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.linkedEntityGuids">LinkedEntityGuids</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.row">Row</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.visualizationId">VisualizationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.width">Width</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ColumnInput`<sup>Optional</sup> <a name="ColumnInput" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.columnInput"></a>

```go
func ColumnInput() *f64
```

- *Type:* *f64

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.configurationInput"></a>

```go
func ConfigurationInput() *string
```

- *Type:* *string

---

##### `HeightInput`<sup>Optional</sup> <a name="HeightInput" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.heightInput"></a>

```go
func HeightInput() *f64
```

- *Type:* *f64

---

##### `LinkedEntityGuidsInput`<sup>Optional</sup> <a name="LinkedEntityGuidsInput" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.linkedEntityGuidsInput"></a>

```go
func LinkedEntityGuidsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RowInput`<sup>Optional</sup> <a name="RowInput" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.rowInput"></a>

```go
func RowInput() *f64
```

- *Type:* *f64

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `VisualizationIdInput`<sup>Optional</sup> <a name="VisualizationIdInput" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.visualizationIdInput"></a>

```go
func VisualizationIdInput() *string
```

- *Type:* *string

---

##### `WidthInput`<sup>Optional</sup> <a name="WidthInput" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.widthInput"></a>

```go
func WidthInput() *f64
```

- *Type:* *f64

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.column"></a>

```go
func Column() *f64
```

- *Type:* *f64

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.configuration"></a>

```go
func Configuration() *string
```

- *Type:* *string

---

##### `Height`<sup>Required</sup> <a name="Height" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.height"></a>

```go
func Height() *f64
```

- *Type:* *f64

---

##### `LinkedEntityGuids`<sup>Required</sup> <a name="LinkedEntityGuids" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.linkedEntityGuids"></a>

```go
func LinkedEntityGuids() *[]*string
```

- *Type:* *[]*string

---

##### `Row`<sup>Required</sup> <a name="Row" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.row"></a>

```go
func Row() *f64
```

- *Type:* *f64

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `VisualizationId`<sup>Required</sup> <a name="VisualizationId" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.visualizationId"></a>

```go
func VisualizationId() *string
```

- *Type:* *string

---

##### `Width`<sup>Required</sup> <a name="Width" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.width"></a>

```go
func Width() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



