# `apiAccessKey` Submodule <a name="`apiAccessKey` Submodule" id="@cdktf/provider-newrelic.apiAccessKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiAccessKey <a name="ApiAccessKey" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/api_access_key newrelic_api_access_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/apiaccesskey"

apiaccesskey.NewApiAccessKey(scope Construct, id *string, config ApiAccessKeyConfig) ApiAccessKey
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKeyConfig">ApiAccessKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKeyConfig">ApiAccessKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.resetIngestType">ResetIngestType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.resetNotes">ResetNotes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.resetUserId">ResetUserId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.resetId"></a>

```go
func ResetId()
```

##### `ResetIngestType` <a name="ResetIngestType" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.resetIngestType"></a>

```go
func ResetIngestType()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.resetName"></a>

```go
func ResetName()
```

##### `ResetNotes` <a name="ResetNotes" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.resetNotes"></a>

```go
func ResetNotes()
```

##### `ResetUserId` <a name="ResetUserId" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.resetUserId"></a>

```go
func ResetUserId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApiAccessKey resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/apiaccesskey"

apiaccesskey.ApiAccessKey_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/apiaccesskey"

apiaccesskey.ApiAccessKey_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/apiaccesskey"

apiaccesskey.ApiAccessKey_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/apiaccesskey"

apiaccesskey.ApiAccessKey_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ApiAccessKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApiAccessKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApiAccessKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/api_access_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ApiAccessKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.property.accountIdInput">AccountIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.property.ingestTypeInput">IngestTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.property.keyTypeInput">KeyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.property.notesInput">NotesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.property.userIdInput">UserIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.property.accountId">AccountId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.property.ingestType">IngestType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.property.keyType">KeyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.property.notes">Notes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.property.userId">UserId</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.property.accountIdInput"></a>

```go
func AccountIdInput() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IngestTypeInput`<sup>Optional</sup> <a name="IngestTypeInput" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.property.ingestTypeInput"></a>

```go
func IngestTypeInput() *string
```

- *Type:* *string

---

##### `KeyTypeInput`<sup>Optional</sup> <a name="KeyTypeInput" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.property.keyTypeInput"></a>

```go
func KeyTypeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NotesInput`<sup>Optional</sup> <a name="NotesInput" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.property.notesInput"></a>

```go
func NotesInput() *string
```

- *Type:* *string

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.property.userIdInput"></a>

```go
func UserIdInput() *f64
```

- *Type:* *f64

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.property.accountId"></a>

```go
func AccountId() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IngestType`<sup>Required</sup> <a name="IngestType" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.property.ingestType"></a>

```go
func IngestType() *string
```

- *Type:* *string

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.property.keyType"></a>

```go
func KeyType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Notes`<sup>Required</sup> <a name="Notes" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.property.notes"></a>

```go
func Notes() *string
```

- *Type:* *string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.property.userId"></a>

```go
func UserId() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKey.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiAccessKeyConfig <a name="ApiAccessKeyConfig" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKeyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/apiaccesskey"

&apiaccesskey.ApiAccessKeyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *f64,
	KeyType: *string,
	Id: *string,
	IngestType: *string,
	Name: *string,
	Notes: *string,
	UserId: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKeyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKeyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKeyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKeyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKeyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKeyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKeyConfig.property.accountId">AccountId</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/api_access_key#account_id ApiAccessKey#account_id}. |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKeyConfig.property.keyType">KeyType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/api_access_key#key_type ApiAccessKey#key_type}. |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKeyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/api_access_key#id ApiAccessKey#id}. |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKeyConfig.property.ingestType">IngestType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/api_access_key#ingest_type ApiAccessKey#ingest_type}. |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKeyConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/api_access_key#name ApiAccessKey#name}. |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKeyConfig.property.notes">Notes</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/api_access_key#notes ApiAccessKey#notes}. |
| <code><a href="#@cdktf/provider-newrelic.apiAccessKey.ApiAccessKeyConfig.property.userId">UserId</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/api_access_key#user_id ApiAccessKey#user_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKeyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKeyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKeyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKeyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKeyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKeyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKeyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKeyConfig.property.accountId"></a>

```go
AccountId *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/api_access_key#account_id ApiAccessKey#account_id}.

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKeyConfig.property.keyType"></a>

```go
KeyType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/api_access_key#key_type ApiAccessKey#key_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKeyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/api_access_key#id ApiAccessKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IngestType`<sup>Optional</sup> <a name="IngestType" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKeyConfig.property.ingestType"></a>

```go
IngestType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/api_access_key#ingest_type ApiAccessKey#ingest_type}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKeyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/api_access_key#name ApiAccessKey#name}.

---

##### `Notes`<sup>Optional</sup> <a name="Notes" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKeyConfig.property.notes"></a>

```go
Notes *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/api_access_key#notes ApiAccessKey#notes}.

---

##### `UserId`<sup>Optional</sup> <a name="UserId" id="@cdktf/provider-newrelic.apiAccessKey.ApiAccessKeyConfig.property.userId"></a>

```go
UserId *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/api_access_key#user_id ApiAccessKey#user_id}.

---



