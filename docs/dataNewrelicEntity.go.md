# `dataNewrelicEntity` Submodule <a name="`dataNewrelicEntity` Submodule" id="@cdktf/provider-newrelic.dataNewrelicEntity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataNewrelicEntity <a name="DataNewrelicEntity" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/data-sources/entity newrelic_entity}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/datanewrelicentity"

datanewrelicentity.NewDataNewrelicEntity(scope Construct, id *string, config DataNewrelicEntityConfig) DataNewrelicEntity
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig">DataNewrelicEntityConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig">DataNewrelicEntityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.putTag">PutTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.resetDomain">ResetDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.resetEntityTags">ResetEntityTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.resetIgnoreCase">ResetIgnoreCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.resetIgnoreNotFound">ResetIgnoreNotFound</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.resetTag">ResetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTag` <a name="PutTag" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.putTag"></a>

```go
func PutTag(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.putTag.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetDomain` <a name="ResetDomain" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.resetDomain"></a>

```go
func ResetDomain()
```

##### `ResetEntityTags` <a name="ResetEntityTags" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.resetEntityTags"></a>

```go
func ResetEntityTags()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.resetId"></a>

```go
func ResetId()
```

##### `ResetIgnoreCase` <a name="ResetIgnoreCase" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.resetIgnoreCase"></a>

```go
func ResetIgnoreCase()
```

##### `ResetIgnoreNotFound` <a name="ResetIgnoreNotFound" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.resetIgnoreNotFound"></a>

```go
func ResetIgnoreNotFound()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.resetTag"></a>

```go
func ResetTag()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.resetType"></a>

```go
func ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataNewrelicEntity resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/datanewrelicentity"

datanewrelicentity.DataNewrelicEntity_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/datanewrelicentity"

datanewrelicentity.DataNewrelicEntity_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/datanewrelicentity"

datanewrelicentity.DataNewrelicEntity_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/datanewrelicentity"

datanewrelicentity.DataNewrelicEntity_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataNewrelicEntity resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataNewrelicEntity to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataNewrelicEntity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/data-sources/entity#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataNewrelicEntity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.applicationId">ApplicationId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.guid">Guid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.servingApmApplicationId">ServingApmApplicationId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.tag">Tag</a></code> | <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList">DataNewrelicEntityTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.accountIdInput">AccountIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.domainInput">DomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.entityTagsInput">EntityTagsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.ignoreCaseInput">IgnoreCaseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.ignoreNotFoundInput">IgnoreNotFoundInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.tagInput">TagInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.accountId">AccountId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.entityTags">EntityTags</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.ignoreCase">IgnoreCase</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.ignoreNotFound">IgnoreNotFound</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.applicationId"></a>

```go
func ApplicationId() *f64
```

- *Type:* *f64

---

##### `Guid`<sup>Required</sup> <a name="Guid" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.guid"></a>

```go
func Guid() *string
```

- *Type:* *string

---

##### `ServingApmApplicationId`<sup>Required</sup> <a name="ServingApmApplicationId" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.servingApmApplicationId"></a>

```go
func ServingApmApplicationId() *f64
```

- *Type:* *f64

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.tag"></a>

```go
func Tag() DataNewrelicEntityTagList
```

- *Type:* <a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList">DataNewrelicEntityTagList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.accountIdInput"></a>

```go
func AccountIdInput() *f64
```

- *Type:* *f64

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.domainInput"></a>

```go
func DomainInput() *string
```

- *Type:* *string

---

##### `EntityTagsInput`<sup>Optional</sup> <a name="EntityTagsInput" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.entityTagsInput"></a>

```go
func EntityTagsInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IgnoreCaseInput`<sup>Optional</sup> <a name="IgnoreCaseInput" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.ignoreCaseInput"></a>

```go
func IgnoreCaseInput() interface{}
```

- *Type:* interface{}

---

##### `IgnoreNotFoundInput`<sup>Optional</sup> <a name="IgnoreNotFoundInput" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.ignoreNotFoundInput"></a>

```go
func IgnoreNotFoundInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.tagInput"></a>

```go
func TagInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.accountId"></a>

```go
func AccountId() *f64
```

- *Type:* *f64

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `EntityTags`<sup>Required</sup> <a name="EntityTags" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.entityTags"></a>

```go
func EntityTags() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IgnoreCase`<sup>Required</sup> <a name="IgnoreCase" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.ignoreCase"></a>

```go
func IgnoreCase() interface{}
```

- *Type:* interface{}

---

##### `IgnoreNotFound`<sup>Required</sup> <a name="IgnoreNotFound" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.ignoreNotFound"></a>

```go
func IgnoreNotFound() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataNewrelicEntityConfig <a name="DataNewrelicEntityConfig" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/datanewrelicentity"

&datanewrelicentity.DataNewrelicEntityConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	AccountId: *f64,
	Domain: *string,
	EntityTags: *string,
	Id: *string,
	IgnoreCase: interface{},
	IgnoreNotFound: interface{},
	Tag: interface{},
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.name">Name</a></code> | <code>*string</code> | The name of the entity in New Relic One. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.accountId">AccountId</a></code> | <code>*f64</code> | The New Relic account ID; |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.domain">Domain</a></code> | <code>*string</code> | The entity's domain. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.entityTags">EntityTags</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/data-sources/entity#entity_tags DataNewrelicEntity#entity_tags}. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/data-sources/entity#id DataNewrelicEntity#id}. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.ignoreCase">IgnoreCase</a></code> | <code>interface{}</code> | Ignore case when searching the entity name. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.ignoreNotFound">IgnoreNotFound</a></code> | <code>interface{}</code> | A boolean attribute which when set to true, does not throw an error if the queried entity is not found. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.tag">Tag</a></code> | <code>interface{}</code> | tag block. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.type">Type</a></code> | <code>*string</code> | The entity's type. Valid values are APPLICATION, DASHBOARD, HOST, MONITOR, SERVICE and WORKLOAD. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the entity in New Relic One.

The first entity matching this name for the given search parameters will be returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/data-sources/entity#name DataNewrelicEntity#name}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.accountId"></a>

```go
AccountId *f64
```

- *Type:* *f64

The New Relic account ID;

if specified, constrains the data source to return an entity belonging to the account with this ID, of all matching entities retrieved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/data-sources/entity#account_id DataNewrelicEntity#account_id}

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.domain"></a>

```go
Domain *string
```

- *Type:* *string

The entity's domain.

Valid values are APM, BROWSER, INFRA, MOBILE, SYNTH, and EXT. If not specified, all domains are searched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/data-sources/entity#domain DataNewrelicEntity#domain}

---

##### `EntityTags`<sup>Optional</sup> <a name="EntityTags" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.entityTags"></a>

```go
EntityTags *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/data-sources/entity#entity_tags DataNewrelicEntity#entity_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/data-sources/entity#id DataNewrelicEntity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IgnoreCase`<sup>Optional</sup> <a name="IgnoreCase" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.ignoreCase"></a>

```go
IgnoreCase interface{}
```

- *Type:* interface{}

Ignore case when searching the entity name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/data-sources/entity#ignore_case DataNewrelicEntity#ignore_case}

---

##### `IgnoreNotFound`<sup>Optional</sup> <a name="IgnoreNotFound" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.ignoreNotFound"></a>

```go
IgnoreNotFound interface{}
```

- *Type:* interface{}

A boolean attribute which when set to true, does not throw an error if the queried entity is not found.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/data-sources/entity#ignore_not_found DataNewrelicEntity#ignore_not_found}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.tag"></a>

```go
Tag interface{}
```

- *Type:* interface{}

tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/data-sources/entity#tag DataNewrelicEntity#tag}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The entity's type. Valid values are APPLICATION, DASHBOARD, HOST, MONITOR, SERVICE and WORKLOAD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/data-sources/entity#type DataNewrelicEntity#type}

---

### DataNewrelicEntityTag <a name="DataNewrelicEntityTag" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTag.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/datanewrelicentity"

&datanewrelicentity.DataNewrelicEntityTag {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTag.property.key">Key</a></code> | <code>*string</code> | The tag key. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTag.property.value">Value</a></code> | <code>*string</code> | The tag value. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTag.property.key"></a>

```go
Key *string
```

- *Type:* *string

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/data-sources/entity#key DataNewrelicEntity#key}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTag.property.value"></a>

```go
Value *string
```

- *Type:* *string

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/data-sources/entity#value DataNewrelicEntity#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DataNewrelicEntityTagList <a name="DataNewrelicEntityTagList" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/datanewrelicentity"

datanewrelicentity.NewDataNewrelicEntityTagList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataNewrelicEntityTagList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.get"></a>

```go
func Get(index *f64) DataNewrelicEntityTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataNewrelicEntityTagOutputReference <a name="DataNewrelicEntityTagOutputReference" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v13/datanewrelicentity"

datanewrelicentity.NewDataNewrelicEntityTagOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataNewrelicEntityTagOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



