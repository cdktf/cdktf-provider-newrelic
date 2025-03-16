# `serviceLevel` Submodule <a name="`serviceLevel` Submodule" id="@cdktf/provider-newrelic.serviceLevel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceLevel <a name="ServiceLevel" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/service_level newrelic_service_level}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/servicelevel"

servicelevel.NewServiceLevel(scope Construct, id *string, config ServiceLevelConfig) ServiceLevel
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig">ServiceLevelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig">ServiceLevelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.putEvents">PutEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.putObjective">PutObjective</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEvents` <a name="PutEvents" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.putEvents"></a>

```go
func PutEvents(value ServiceLevelEvents)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.putEvents.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents">ServiceLevelEvents</a>

---

##### `PutObjective` <a name="PutObjective" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.putObjective"></a>

```go
func PutObjective(value ServiceLevelObjective)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.putObjective.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective">ServiceLevelObjective</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ServiceLevel resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/servicelevel"

servicelevel.ServiceLevel_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/servicelevel"

servicelevel.ServiceLevel_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/servicelevel"

servicelevel.ServiceLevel_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/servicelevel"

servicelevel.ServiceLevel_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ServiceLevel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ServiceLevel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ServiceLevel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/service_level#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ServiceLevel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.events">Events</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference">ServiceLevelEventsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.objective">Objective</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference">ServiceLevelObjectiveOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.sliGuid">SliGuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.sliId">SliId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.eventsInput">EventsInput</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents">ServiceLevelEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.guidInput">GuidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.objectiveInput">ObjectiveInput</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective">ServiceLevelObjective</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.guid">Guid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Events`<sup>Required</sup> <a name="Events" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.events"></a>

```go
func Events() ServiceLevelEventsOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference">ServiceLevelEventsOutputReference</a>

---

##### `Objective`<sup>Required</sup> <a name="Objective" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.objective"></a>

```go
func Objective() ServiceLevelObjectiveOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference">ServiceLevelObjectiveOutputReference</a>

---

##### `SliGuid`<sup>Required</sup> <a name="SliGuid" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.sliGuid"></a>

```go
func SliGuid() *string
```

- *Type:* *string

---

##### `SliId`<sup>Required</sup> <a name="SliId" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.sliId"></a>

```go
func SliId() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EventsInput`<sup>Optional</sup> <a name="EventsInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.eventsInput"></a>

```go
func EventsInput() ServiceLevelEvents
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents">ServiceLevelEvents</a>

---

##### `GuidInput`<sup>Optional</sup> <a name="GuidInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.guidInput"></a>

```go
func GuidInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ObjectiveInput`<sup>Optional</sup> <a name="ObjectiveInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.objectiveInput"></a>

```go
func ObjectiveInput() ServiceLevelObjective
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective">ServiceLevelObjective</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Guid`<sup>Required</sup> <a name="Guid" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.guid"></a>

```go
func Guid() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceLevelConfig <a name="ServiceLevelConfig" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/servicelevel"

&servicelevel.ServiceLevelConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Events: github.com/cdktf/cdktf-provider-newrelic-go/newrelic.serviceLevel.ServiceLevelEvents,
	Guid: *string,
	Name: *string,
	Objective: github.com/cdktf/cdktf-provider-newrelic-go/newrelic.serviceLevel.ServiceLevelObjective,
	Description: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.events">Events</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents">ServiceLevelEvents</a></code> | events block. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.guid">Guid</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/service_level#guid ServiceLevel#guid}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/service_level#name ServiceLevel#name}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.objective">Objective</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective">ServiceLevelObjective</a></code> | objective block. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/service_level#description ServiceLevel#description}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/service_level#id ServiceLevel#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Events`<sup>Required</sup> <a name="Events" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.events"></a>

```go
Events ServiceLevelEvents
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents">ServiceLevelEvents</a>

events block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/service_level#events ServiceLevel#events}

---

##### `Guid`<sup>Required</sup> <a name="Guid" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.guid"></a>

```go
Guid *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/service_level#guid ServiceLevel#guid}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/service_level#name ServiceLevel#name}.

---

##### `Objective`<sup>Required</sup> <a name="Objective" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.objective"></a>

```go
Objective ServiceLevelObjective
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective">ServiceLevelObjective</a>

objective block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/service_level#objective ServiceLevel#objective}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/service_level#description ServiceLevel#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/service_level#id ServiceLevel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ServiceLevelEvents <a name="ServiceLevelEvents" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/servicelevel"

&servicelevel.ServiceLevelEvents {
	AccountId: *f64,
	ValidEvents: github.com/cdktf/cdktf-provider-newrelic-go/newrelic.serviceLevel.ServiceLevelEventsValidEvents,
	BadEvents: github.com/cdktf/cdktf-provider-newrelic-go/newrelic.serviceLevel.ServiceLevelEventsBadEvents,
	GoodEvents: github.com/cdktf/cdktf-provider-newrelic-go/newrelic.serviceLevel.ServiceLevelEventsGoodEvents,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents.property.accountId">AccountId</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/service_level#account_id ServiceLevel#account_id}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents.property.validEvents">ValidEvents</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents">ServiceLevelEventsValidEvents</a></code> | valid_events block. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents.property.badEvents">BadEvents</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents">ServiceLevelEventsBadEvents</a></code> | bad_events block. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents.property.goodEvents">GoodEvents</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents">ServiceLevelEventsGoodEvents</a></code> | good_events block. |

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents.property.accountId"></a>

```go
AccountId *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/service_level#account_id ServiceLevel#account_id}.

---

##### `ValidEvents`<sup>Required</sup> <a name="ValidEvents" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents.property.validEvents"></a>

```go
ValidEvents ServiceLevelEventsValidEvents
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents">ServiceLevelEventsValidEvents</a>

valid_events block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/service_level#valid_events ServiceLevel#valid_events}

---

##### `BadEvents`<sup>Optional</sup> <a name="BadEvents" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents.property.badEvents"></a>

```go
BadEvents ServiceLevelEventsBadEvents
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents">ServiceLevelEventsBadEvents</a>

bad_events block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/service_level#bad_events ServiceLevel#bad_events}

---

##### `GoodEvents`<sup>Optional</sup> <a name="GoodEvents" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents.property.goodEvents"></a>

```go
GoodEvents ServiceLevelEventsGoodEvents
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents">ServiceLevelEventsGoodEvents</a>

good_events block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/service_level#good_events ServiceLevel#good_events}

---

### ServiceLevelEventsBadEvents <a name="ServiceLevelEventsBadEvents" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/servicelevel"

&servicelevel.ServiceLevelEventsBadEvents {
	From: *string,
	Select: github.com/cdktf/cdktf-provider-newrelic-go/newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect,
	Where: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents.property.from">From</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/service_level#from ServiceLevel#from}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents.property.select">Select</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect">ServiceLevelEventsBadEventsSelect</a></code> | select block. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents.property.where">Where</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/service_level#where ServiceLevel#where}. |

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents.property.from"></a>

```go
From *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/service_level#from ServiceLevel#from}.

---

##### `Select`<sup>Optional</sup> <a name="Select" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents.property.select"></a>

```go
Select ServiceLevelEventsBadEventsSelect
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect">ServiceLevelEventsBadEventsSelect</a>

select block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/service_level#select ServiceLevel#select}

---

##### `Where`<sup>Optional</sup> <a name="Where" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents.property.where"></a>

```go
Where *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/service_level#where ServiceLevel#where}.

---

### ServiceLevelEventsBadEventsSelect <a name="ServiceLevelEventsBadEventsSelect" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/servicelevel"

&servicelevel.ServiceLevelEventsBadEventsSelect {
	Function: *string,
	Attribute: *string,
	Threshold: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect.property.function">Function</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/service_level#function ServiceLevel#function}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect.property.attribute">Attribute</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/service_level#attribute ServiceLevel#attribute}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect.property.threshold">Threshold</a></code> | <code>*f64</code> | The event threshold to use in the SELECT clause. |

---

##### `Function`<sup>Required</sup> <a name="Function" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect.property.function"></a>

```go
Function *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/service_level#function ServiceLevel#function}.

---

##### `Attribute`<sup>Optional</sup> <a name="Attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect.property.attribute"></a>

```go
Attribute *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/service_level#attribute ServiceLevel#attribute}.

---

##### `Threshold`<sup>Optional</sup> <a name="Threshold" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect.property.threshold"></a>

```go
Threshold *f64
```

- *Type:* *f64

The event threshold to use in the SELECT clause.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/service_level#threshold ServiceLevel#threshold}

---

### ServiceLevelEventsGoodEvents <a name="ServiceLevelEventsGoodEvents" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/servicelevel"

&servicelevel.ServiceLevelEventsGoodEvents {
	From: *string,
	Select: github.com/cdktf/cdktf-provider-newrelic-go/newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect,
	Where: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents.property.from">From</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/service_level#from ServiceLevel#from}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents.property.select">Select</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect">ServiceLevelEventsGoodEventsSelect</a></code> | select block. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents.property.where">Where</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/service_level#where ServiceLevel#where}. |

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents.property.from"></a>

```go
From *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/service_level#from ServiceLevel#from}.

---

##### `Select`<sup>Optional</sup> <a name="Select" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents.property.select"></a>

```go
Select ServiceLevelEventsGoodEventsSelect
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect">ServiceLevelEventsGoodEventsSelect</a>

select block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/service_level#select ServiceLevel#select}

---

##### `Where`<sup>Optional</sup> <a name="Where" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents.property.where"></a>

```go
Where *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/service_level#where ServiceLevel#where}.

---

### ServiceLevelEventsGoodEventsSelect <a name="ServiceLevelEventsGoodEventsSelect" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/servicelevel"

&servicelevel.ServiceLevelEventsGoodEventsSelect {
	Function: *string,
	Attribute: *string,
	Threshold: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect.property.function">Function</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/service_level#function ServiceLevel#function}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect.property.attribute">Attribute</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/service_level#attribute ServiceLevel#attribute}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect.property.threshold">Threshold</a></code> | <code>*f64</code> | The event threshold to use in the SELECT clause. |

---

##### `Function`<sup>Required</sup> <a name="Function" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect.property.function"></a>

```go
Function *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/service_level#function ServiceLevel#function}.

---

##### `Attribute`<sup>Optional</sup> <a name="Attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect.property.attribute"></a>

```go
Attribute *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/service_level#attribute ServiceLevel#attribute}.

---

##### `Threshold`<sup>Optional</sup> <a name="Threshold" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect.property.threshold"></a>

```go
Threshold *f64
```

- *Type:* *f64

The event threshold to use in the SELECT clause.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/service_level#threshold ServiceLevel#threshold}

---

### ServiceLevelEventsValidEvents <a name="ServiceLevelEventsValidEvents" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/servicelevel"

&servicelevel.ServiceLevelEventsValidEvents {
	From: *string,
	Select: github.com/cdktf/cdktf-provider-newrelic-go/newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect,
	Where: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents.property.from">From</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/service_level#from ServiceLevel#from}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents.property.select">Select</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect">ServiceLevelEventsValidEventsSelect</a></code> | select block. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents.property.where">Where</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/service_level#where ServiceLevel#where}. |

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents.property.from"></a>

```go
From *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/service_level#from ServiceLevel#from}.

---

##### `Select`<sup>Optional</sup> <a name="Select" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents.property.select"></a>

```go
Select ServiceLevelEventsValidEventsSelect
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect">ServiceLevelEventsValidEventsSelect</a>

select block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/service_level#select ServiceLevel#select}

---

##### `Where`<sup>Optional</sup> <a name="Where" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents.property.where"></a>

```go
Where *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/service_level#where ServiceLevel#where}.

---

### ServiceLevelEventsValidEventsSelect <a name="ServiceLevelEventsValidEventsSelect" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/servicelevel"

&servicelevel.ServiceLevelEventsValidEventsSelect {
	Function: *string,
	Attribute: *string,
	Threshold: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect.property.function">Function</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/service_level#function ServiceLevel#function}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect.property.attribute">Attribute</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/service_level#attribute ServiceLevel#attribute}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect.property.threshold">Threshold</a></code> | <code>*f64</code> | The event threshold to use in the SELECT clause. |

---

##### `Function`<sup>Required</sup> <a name="Function" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect.property.function"></a>

```go
Function *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/service_level#function ServiceLevel#function}.

---

##### `Attribute`<sup>Optional</sup> <a name="Attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect.property.attribute"></a>

```go
Attribute *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/service_level#attribute ServiceLevel#attribute}.

---

##### `Threshold`<sup>Optional</sup> <a name="Threshold" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect.property.threshold"></a>

```go
Threshold *f64
```

- *Type:* *f64

The event threshold to use in the SELECT clause.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/service_level#threshold ServiceLevel#threshold}

---

### ServiceLevelObjective <a name="ServiceLevelObjective" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/servicelevel"

&servicelevel.ServiceLevelObjective {
	Target: *f64,
	TimeWindow: github.com/cdktf/cdktf-provider-newrelic-go/newrelic.serviceLevel.ServiceLevelObjectiveTimeWindow,
	Description: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective.property.target">Target</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/service_level#target ServiceLevel#target}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective.property.timeWindow">TimeWindow</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindow">ServiceLevelObjectiveTimeWindow</a></code> | time_window block. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/service_level#description ServiceLevel#description}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/service_level#name ServiceLevel#name}. |

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective.property.target"></a>

```go
Target *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/service_level#target ServiceLevel#target}.

---

##### `TimeWindow`<sup>Required</sup> <a name="TimeWindow" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective.property.timeWindow"></a>

```go
TimeWindow ServiceLevelObjectiveTimeWindow
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindow">ServiceLevelObjectiveTimeWindow</a>

time_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/service_level#time_window ServiceLevel#time_window}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/service_level#description ServiceLevel#description}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/service_level#name ServiceLevel#name}.

---

### ServiceLevelObjectiveTimeWindow <a name="ServiceLevelObjectiveTimeWindow" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindow.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/servicelevel"

&servicelevel.ServiceLevelObjectiveTimeWindow {
	Rolling: github.com/cdktf/cdktf-provider-newrelic-go/newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRolling,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindow.property.rolling">Rolling</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRolling">ServiceLevelObjectiveTimeWindowRolling</a></code> | rolling block. |

---

##### `Rolling`<sup>Required</sup> <a name="Rolling" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindow.property.rolling"></a>

```go
Rolling ServiceLevelObjectiveTimeWindowRolling
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRolling">ServiceLevelObjectiveTimeWindowRolling</a>

rolling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/service_level#rolling ServiceLevel#rolling}

---

### ServiceLevelObjectiveTimeWindowRolling <a name="ServiceLevelObjectiveTimeWindowRolling" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRolling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRolling.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/servicelevel"

&servicelevel.ServiceLevelObjectiveTimeWindowRolling {
	Count: *f64,
	Unit: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRolling.property.count">Count</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/service_level#count ServiceLevel#count}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRolling.property.unit">Unit</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/service_level#unit ServiceLevel#unit}. |

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRolling.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/service_level#count ServiceLevel#count}.

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRolling.property.unit"></a>

```go
Unit *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.58.1/docs/resources/service_level#unit ServiceLevel#unit}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceLevelEventsBadEventsOutputReference <a name="ServiceLevelEventsBadEventsOutputReference" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/servicelevel"

servicelevel.NewServiceLevelEventsBadEventsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServiceLevelEventsBadEventsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.putSelect">PutSelect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.resetSelect">ResetSelect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.resetWhere">ResetWhere</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSelect` <a name="PutSelect" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.putSelect"></a>

```go
func PutSelect(value ServiceLevelEventsBadEventsSelect)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.putSelect.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect">ServiceLevelEventsBadEventsSelect</a>

---

##### `ResetSelect` <a name="ResetSelect" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.resetSelect"></a>

```go
func ResetSelect()
```

##### `ResetWhere` <a name="ResetWhere" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.resetWhere"></a>

```go
func ResetWhere()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.select">Select</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference">ServiceLevelEventsBadEventsSelectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.fromInput">FromInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.selectInput">SelectInput</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect">ServiceLevelEventsBadEventsSelect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.whereInput">WhereInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.from">From</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.where">Where</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents">ServiceLevelEventsBadEvents</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Select`<sup>Required</sup> <a name="Select" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.select"></a>

```go
func Select() ServiceLevelEventsBadEventsSelectOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference">ServiceLevelEventsBadEventsSelectOutputReference</a>

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.fromInput"></a>

```go
func FromInput() *string
```

- *Type:* *string

---

##### `SelectInput`<sup>Optional</sup> <a name="SelectInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.selectInput"></a>

```go
func SelectInput() ServiceLevelEventsBadEventsSelect
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect">ServiceLevelEventsBadEventsSelect</a>

---

##### `WhereInput`<sup>Optional</sup> <a name="WhereInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.whereInput"></a>

```go
func WhereInput() *string
```

- *Type:* *string

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.from"></a>

```go
func From() *string
```

- *Type:* *string

---

##### `Where`<sup>Required</sup> <a name="Where" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.where"></a>

```go
func Where() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.internalValue"></a>

```go
func InternalValue() ServiceLevelEventsBadEvents
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents">ServiceLevelEventsBadEvents</a>

---


### ServiceLevelEventsBadEventsSelectOutputReference <a name="ServiceLevelEventsBadEventsSelectOutputReference" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/servicelevel"

servicelevel.NewServiceLevelEventsBadEventsSelectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServiceLevelEventsBadEventsSelectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.resetAttribute">ResetAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.resetThreshold">ResetThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAttribute` <a name="ResetAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.resetAttribute"></a>

```go
func ResetAttribute()
```

##### `ResetThreshold` <a name="ResetThreshold" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.resetThreshold"></a>

```go
func ResetThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.attributeInput">AttributeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.functionInput">FunctionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.attribute">Attribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.function">Function</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.threshold">Threshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect">ServiceLevelEventsBadEventsSelect</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttributeInput`<sup>Optional</sup> <a name="AttributeInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.attributeInput"></a>

```go
func AttributeInput() *string
```

- *Type:* *string

---

##### `FunctionInput`<sup>Optional</sup> <a name="FunctionInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.functionInput"></a>

```go
func FunctionInput() *string
```

- *Type:* *string

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.thresholdInput"></a>

```go
func ThresholdInput() *f64
```

- *Type:* *f64

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.attribute"></a>

```go
func Attribute() *string
```

- *Type:* *string

---

##### `Function`<sup>Required</sup> <a name="Function" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.function"></a>

```go
func Function() *string
```

- *Type:* *string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.threshold"></a>

```go
func Threshold() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.internalValue"></a>

```go
func InternalValue() ServiceLevelEventsBadEventsSelect
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect">ServiceLevelEventsBadEventsSelect</a>

---


### ServiceLevelEventsGoodEventsOutputReference <a name="ServiceLevelEventsGoodEventsOutputReference" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/servicelevel"

servicelevel.NewServiceLevelEventsGoodEventsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServiceLevelEventsGoodEventsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.putSelect">PutSelect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.resetSelect">ResetSelect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.resetWhere">ResetWhere</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSelect` <a name="PutSelect" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.putSelect"></a>

```go
func PutSelect(value ServiceLevelEventsGoodEventsSelect)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.putSelect.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect">ServiceLevelEventsGoodEventsSelect</a>

---

##### `ResetSelect` <a name="ResetSelect" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.resetSelect"></a>

```go
func ResetSelect()
```

##### `ResetWhere` <a name="ResetWhere" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.resetWhere"></a>

```go
func ResetWhere()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.select">Select</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference">ServiceLevelEventsGoodEventsSelectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.fromInput">FromInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.selectInput">SelectInput</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect">ServiceLevelEventsGoodEventsSelect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.whereInput">WhereInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.from">From</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.where">Where</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents">ServiceLevelEventsGoodEvents</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Select`<sup>Required</sup> <a name="Select" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.select"></a>

```go
func Select() ServiceLevelEventsGoodEventsSelectOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference">ServiceLevelEventsGoodEventsSelectOutputReference</a>

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.fromInput"></a>

```go
func FromInput() *string
```

- *Type:* *string

---

##### `SelectInput`<sup>Optional</sup> <a name="SelectInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.selectInput"></a>

```go
func SelectInput() ServiceLevelEventsGoodEventsSelect
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect">ServiceLevelEventsGoodEventsSelect</a>

---

##### `WhereInput`<sup>Optional</sup> <a name="WhereInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.whereInput"></a>

```go
func WhereInput() *string
```

- *Type:* *string

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.from"></a>

```go
func From() *string
```

- *Type:* *string

---

##### `Where`<sup>Required</sup> <a name="Where" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.where"></a>

```go
func Where() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.internalValue"></a>

```go
func InternalValue() ServiceLevelEventsGoodEvents
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents">ServiceLevelEventsGoodEvents</a>

---


### ServiceLevelEventsGoodEventsSelectOutputReference <a name="ServiceLevelEventsGoodEventsSelectOutputReference" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/servicelevel"

servicelevel.NewServiceLevelEventsGoodEventsSelectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServiceLevelEventsGoodEventsSelectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.resetAttribute">ResetAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.resetThreshold">ResetThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAttribute` <a name="ResetAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.resetAttribute"></a>

```go
func ResetAttribute()
```

##### `ResetThreshold` <a name="ResetThreshold" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.resetThreshold"></a>

```go
func ResetThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.attributeInput">AttributeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.functionInput">FunctionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.attribute">Attribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.function">Function</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.threshold">Threshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect">ServiceLevelEventsGoodEventsSelect</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttributeInput`<sup>Optional</sup> <a name="AttributeInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.attributeInput"></a>

```go
func AttributeInput() *string
```

- *Type:* *string

---

##### `FunctionInput`<sup>Optional</sup> <a name="FunctionInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.functionInput"></a>

```go
func FunctionInput() *string
```

- *Type:* *string

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.thresholdInput"></a>

```go
func ThresholdInput() *f64
```

- *Type:* *f64

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.attribute"></a>

```go
func Attribute() *string
```

- *Type:* *string

---

##### `Function`<sup>Required</sup> <a name="Function" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.function"></a>

```go
func Function() *string
```

- *Type:* *string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.threshold"></a>

```go
func Threshold() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.internalValue"></a>

```go
func InternalValue() ServiceLevelEventsGoodEventsSelect
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect">ServiceLevelEventsGoodEventsSelect</a>

---


### ServiceLevelEventsOutputReference <a name="ServiceLevelEventsOutputReference" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/servicelevel"

servicelevel.NewServiceLevelEventsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServiceLevelEventsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.putBadEvents">PutBadEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.putGoodEvents">PutGoodEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.putValidEvents">PutValidEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.resetBadEvents">ResetBadEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.resetGoodEvents">ResetGoodEvents</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBadEvents` <a name="PutBadEvents" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.putBadEvents"></a>

```go
func PutBadEvents(value ServiceLevelEventsBadEvents)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.putBadEvents.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents">ServiceLevelEventsBadEvents</a>

---

##### `PutGoodEvents` <a name="PutGoodEvents" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.putGoodEvents"></a>

```go
func PutGoodEvents(value ServiceLevelEventsGoodEvents)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.putGoodEvents.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents">ServiceLevelEventsGoodEvents</a>

---

##### `PutValidEvents` <a name="PutValidEvents" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.putValidEvents"></a>

```go
func PutValidEvents(value ServiceLevelEventsValidEvents)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.putValidEvents.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents">ServiceLevelEventsValidEvents</a>

---

##### `ResetBadEvents` <a name="ResetBadEvents" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.resetBadEvents"></a>

```go
func ResetBadEvents()
```

##### `ResetGoodEvents` <a name="ResetGoodEvents" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.resetGoodEvents"></a>

```go
func ResetGoodEvents()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.badEvents">BadEvents</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference">ServiceLevelEventsBadEventsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.goodEvents">GoodEvents</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference">ServiceLevelEventsGoodEventsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.validEvents">ValidEvents</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference">ServiceLevelEventsValidEventsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.badEventsInput">BadEventsInput</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents">ServiceLevelEventsBadEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.goodEventsInput">GoodEventsInput</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents">ServiceLevelEventsGoodEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.validEventsInput">ValidEventsInput</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents">ServiceLevelEventsValidEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.accountId">AccountId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents">ServiceLevelEvents</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BadEvents`<sup>Required</sup> <a name="BadEvents" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.badEvents"></a>

```go
func BadEvents() ServiceLevelEventsBadEventsOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference">ServiceLevelEventsBadEventsOutputReference</a>

---

##### `GoodEvents`<sup>Required</sup> <a name="GoodEvents" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.goodEvents"></a>

```go
func GoodEvents() ServiceLevelEventsGoodEventsOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference">ServiceLevelEventsGoodEventsOutputReference</a>

---

##### `ValidEvents`<sup>Required</sup> <a name="ValidEvents" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.validEvents"></a>

```go
func ValidEvents() ServiceLevelEventsValidEventsOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference">ServiceLevelEventsValidEventsOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.accountIdInput"></a>

```go
func AccountIdInput() *f64
```

- *Type:* *f64

---

##### `BadEventsInput`<sup>Optional</sup> <a name="BadEventsInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.badEventsInput"></a>

```go
func BadEventsInput() ServiceLevelEventsBadEvents
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents">ServiceLevelEventsBadEvents</a>

---

##### `GoodEventsInput`<sup>Optional</sup> <a name="GoodEventsInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.goodEventsInput"></a>

```go
func GoodEventsInput() ServiceLevelEventsGoodEvents
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents">ServiceLevelEventsGoodEvents</a>

---

##### `ValidEventsInput`<sup>Optional</sup> <a name="ValidEventsInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.validEventsInput"></a>

```go
func ValidEventsInput() ServiceLevelEventsValidEvents
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents">ServiceLevelEventsValidEvents</a>

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.accountId"></a>

```go
func AccountId() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.internalValue"></a>

```go
func InternalValue() ServiceLevelEvents
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents">ServiceLevelEvents</a>

---


### ServiceLevelEventsValidEventsOutputReference <a name="ServiceLevelEventsValidEventsOutputReference" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/servicelevel"

servicelevel.NewServiceLevelEventsValidEventsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServiceLevelEventsValidEventsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.putSelect">PutSelect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.resetSelect">ResetSelect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.resetWhere">ResetWhere</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSelect` <a name="PutSelect" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.putSelect"></a>

```go
func PutSelect(value ServiceLevelEventsValidEventsSelect)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.putSelect.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect">ServiceLevelEventsValidEventsSelect</a>

---

##### `ResetSelect` <a name="ResetSelect" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.resetSelect"></a>

```go
func ResetSelect()
```

##### `ResetWhere` <a name="ResetWhere" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.resetWhere"></a>

```go
func ResetWhere()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.select">Select</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference">ServiceLevelEventsValidEventsSelectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.fromInput">FromInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.selectInput">SelectInput</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect">ServiceLevelEventsValidEventsSelect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.whereInput">WhereInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.from">From</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.where">Where</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents">ServiceLevelEventsValidEvents</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Select`<sup>Required</sup> <a name="Select" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.select"></a>

```go
func Select() ServiceLevelEventsValidEventsSelectOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference">ServiceLevelEventsValidEventsSelectOutputReference</a>

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.fromInput"></a>

```go
func FromInput() *string
```

- *Type:* *string

---

##### `SelectInput`<sup>Optional</sup> <a name="SelectInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.selectInput"></a>

```go
func SelectInput() ServiceLevelEventsValidEventsSelect
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect">ServiceLevelEventsValidEventsSelect</a>

---

##### `WhereInput`<sup>Optional</sup> <a name="WhereInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.whereInput"></a>

```go
func WhereInput() *string
```

- *Type:* *string

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.from"></a>

```go
func From() *string
```

- *Type:* *string

---

##### `Where`<sup>Required</sup> <a name="Where" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.where"></a>

```go
func Where() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.internalValue"></a>

```go
func InternalValue() ServiceLevelEventsValidEvents
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents">ServiceLevelEventsValidEvents</a>

---


### ServiceLevelEventsValidEventsSelectOutputReference <a name="ServiceLevelEventsValidEventsSelectOutputReference" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/servicelevel"

servicelevel.NewServiceLevelEventsValidEventsSelectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServiceLevelEventsValidEventsSelectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.resetAttribute">ResetAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.resetThreshold">ResetThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAttribute` <a name="ResetAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.resetAttribute"></a>

```go
func ResetAttribute()
```

##### `ResetThreshold` <a name="ResetThreshold" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.resetThreshold"></a>

```go
func ResetThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.attributeInput">AttributeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.functionInput">FunctionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.attribute">Attribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.function">Function</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.threshold">Threshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect">ServiceLevelEventsValidEventsSelect</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttributeInput`<sup>Optional</sup> <a name="AttributeInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.attributeInput"></a>

```go
func AttributeInput() *string
```

- *Type:* *string

---

##### `FunctionInput`<sup>Optional</sup> <a name="FunctionInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.functionInput"></a>

```go
func FunctionInput() *string
```

- *Type:* *string

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.thresholdInput"></a>

```go
func ThresholdInput() *f64
```

- *Type:* *f64

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.attribute"></a>

```go
func Attribute() *string
```

- *Type:* *string

---

##### `Function`<sup>Required</sup> <a name="Function" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.function"></a>

```go
func Function() *string
```

- *Type:* *string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.threshold"></a>

```go
func Threshold() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.internalValue"></a>

```go
func InternalValue() ServiceLevelEventsValidEventsSelect
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect">ServiceLevelEventsValidEventsSelect</a>

---


### ServiceLevelObjectiveOutputReference <a name="ServiceLevelObjectiveOutputReference" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/servicelevel"

servicelevel.NewServiceLevelObjectiveOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServiceLevelObjectiveOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.putTimeWindow">PutTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTimeWindow` <a name="PutTimeWindow" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.putTimeWindow"></a>

```go
func PutTimeWindow(value ServiceLevelObjectiveTimeWindow)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.putTimeWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindow">ServiceLevelObjectiveTimeWindow</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.timeWindow">TimeWindow</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference">ServiceLevelObjectiveTimeWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.targetInput">TargetInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.timeWindowInput">TimeWindowInput</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindow">ServiceLevelObjectiveTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.target">Target</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective">ServiceLevelObjective</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TimeWindow`<sup>Required</sup> <a name="TimeWindow" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.timeWindow"></a>

```go
func TimeWindow() ServiceLevelObjectiveTimeWindowOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference">ServiceLevelObjectiveTimeWindowOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.targetInput"></a>

```go
func TargetInput() *f64
```

- *Type:* *f64

---

##### `TimeWindowInput`<sup>Optional</sup> <a name="TimeWindowInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.timeWindowInput"></a>

```go
func TimeWindowInput() ServiceLevelObjectiveTimeWindow
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindow">ServiceLevelObjectiveTimeWindow</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.target"></a>

```go
func Target() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.internalValue"></a>

```go
func InternalValue() ServiceLevelObjective
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective">ServiceLevelObjective</a>

---


### ServiceLevelObjectiveTimeWindowOutputReference <a name="ServiceLevelObjectiveTimeWindowOutputReference" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/servicelevel"

servicelevel.NewServiceLevelObjectiveTimeWindowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServiceLevelObjectiveTimeWindowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.putRolling">PutRolling</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRolling` <a name="PutRolling" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.putRolling"></a>

```go
func PutRolling(value ServiceLevelObjectiveTimeWindowRolling)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.putRolling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRolling">ServiceLevelObjectiveTimeWindowRolling</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.property.rolling">Rolling</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference">ServiceLevelObjectiveTimeWindowRollingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.property.rollingInput">RollingInput</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRolling">ServiceLevelObjectiveTimeWindowRolling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindow">ServiceLevelObjectiveTimeWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Rolling`<sup>Required</sup> <a name="Rolling" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.property.rolling"></a>

```go
func Rolling() ServiceLevelObjectiveTimeWindowRollingOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference">ServiceLevelObjectiveTimeWindowRollingOutputReference</a>

---

##### `RollingInput`<sup>Optional</sup> <a name="RollingInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.property.rollingInput"></a>

```go
func RollingInput() ServiceLevelObjectiveTimeWindowRolling
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRolling">ServiceLevelObjectiveTimeWindowRolling</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.property.internalValue"></a>

```go
func InternalValue() ServiceLevelObjectiveTimeWindow
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindow">ServiceLevelObjectiveTimeWindow</a>

---


### ServiceLevelObjectiveTimeWindowRollingOutputReference <a name="ServiceLevelObjectiveTimeWindowRollingOutputReference" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/servicelevel"

servicelevel.NewServiceLevelObjectiveTimeWindowRollingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServiceLevelObjectiveTimeWindowRollingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.countInput">CountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.unitInput">UnitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.unit">Unit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRolling">ServiceLevelObjectiveTimeWindowRolling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.countInput"></a>

```go
func CountInput() *f64
```

- *Type:* *f64

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.unitInput"></a>

```go
func UnitInput() *string
```

- *Type:* *string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.unit"></a>

```go
func Unit() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.internalValue"></a>

```go
func InternalValue() ServiceLevelObjectiveTimeWindowRolling
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRolling">ServiceLevelObjectiveTimeWindowRolling</a>

---



