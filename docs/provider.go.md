# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-newrelic.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NewrelicProvider <a name="NewrelicProvider" id="@cdktf/provider-newrelic.provider.NewrelicProvider"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.53.0/docs newrelic}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/provider"

provider.NewNewrelicProvider(scope Construct, id *string, config NewrelicProviderConfig) NewrelicProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProviderConfig">NewrelicProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.provider.NewrelicProviderConfig">NewrelicProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.resetAdminApiKey">ResetAdminApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.resetApiUrl">ResetApiUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.resetCacertFile">ResetCacertFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.resetInfrastructureApiUrl">ResetInfrastructureApiUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.resetInsecureSkipVerify">ResetInsecureSkipVerify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.resetInsightsInsertKey">ResetInsightsInsertKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.resetInsightsInsertUrl">ResetInsightsInsertUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.resetInsightsQueryUrl">ResetInsightsQueryUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.resetNerdgraphApiUrl">ResetNerdgraphApiUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.resetSyntheticsApiUrl">ResetSyntheticsApiUrl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-newrelic.provider.NewrelicProvider.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-newrelic.provider.NewrelicProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.provider.NewrelicProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.provider.NewrelicProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-newrelic.provider.NewrelicProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.provider.NewrelicProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-newrelic.provider.NewrelicProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-newrelic.provider.NewrelicProvider.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-newrelic.provider.NewrelicProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-newrelic.provider.NewrelicProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ResetAdminApiKey` <a name="ResetAdminApiKey" id="@cdktf/provider-newrelic.provider.NewrelicProvider.resetAdminApiKey"></a>

```go
func ResetAdminApiKey()
```

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-newrelic.provider.NewrelicProvider.resetAlias"></a>

```go
func ResetAlias()
```

##### `ResetApiUrl` <a name="ResetApiUrl" id="@cdktf/provider-newrelic.provider.NewrelicProvider.resetApiUrl"></a>

```go
func ResetApiUrl()
```

##### `ResetCacertFile` <a name="ResetCacertFile" id="@cdktf/provider-newrelic.provider.NewrelicProvider.resetCacertFile"></a>

```go
func ResetCacertFile()
```

##### `ResetInfrastructureApiUrl` <a name="ResetInfrastructureApiUrl" id="@cdktf/provider-newrelic.provider.NewrelicProvider.resetInfrastructureApiUrl"></a>

```go
func ResetInfrastructureApiUrl()
```

##### `ResetInsecureSkipVerify` <a name="ResetInsecureSkipVerify" id="@cdktf/provider-newrelic.provider.NewrelicProvider.resetInsecureSkipVerify"></a>

```go
func ResetInsecureSkipVerify()
```

##### `ResetInsightsInsertKey` <a name="ResetInsightsInsertKey" id="@cdktf/provider-newrelic.provider.NewrelicProvider.resetInsightsInsertKey"></a>

```go
func ResetInsightsInsertKey()
```

##### `ResetInsightsInsertUrl` <a name="ResetInsightsInsertUrl" id="@cdktf/provider-newrelic.provider.NewrelicProvider.resetInsightsInsertUrl"></a>

```go
func ResetInsightsInsertUrl()
```

##### `ResetInsightsQueryUrl` <a name="ResetInsightsQueryUrl" id="@cdktf/provider-newrelic.provider.NewrelicProvider.resetInsightsQueryUrl"></a>

```go
func ResetInsightsQueryUrl()
```

##### `ResetNerdgraphApiUrl` <a name="ResetNerdgraphApiUrl" id="@cdktf/provider-newrelic.provider.NewrelicProvider.resetNerdgraphApiUrl"></a>

```go
func ResetNerdgraphApiUrl()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-newrelic.provider.NewrelicProvider.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetSyntheticsApiUrl` <a name="ResetSyntheticsApiUrl" id="@cdktf/provider-newrelic.provider.NewrelicProvider.resetSyntheticsApiUrl"></a>

```go
func ResetSyntheticsApiUrl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NewrelicProvider resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-newrelic.provider.NewrelicProvider.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/provider"

provider.NewrelicProvider_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.provider.NewrelicProvider.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-newrelic.provider.NewrelicProvider.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/provider"

provider.NewrelicProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.provider.NewrelicProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-newrelic.provider.NewrelicProvider.isTerraformProvider"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/provider"

provider.NewrelicProvider_IsTerraformProvider(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.provider.NewrelicProvider.isTerraformProvider.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-newrelic.provider.NewrelicProvider.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/provider"

provider.NewrelicProvider_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a NewrelicProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.provider.NewrelicProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.provider.NewrelicProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NewrelicProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.provider.NewrelicProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NewrelicProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.53.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.provider.NewrelicProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the NewrelicProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.metaAttributes">MetaAttributes</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.accountIdInput">AccountIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.adminApiKeyInput">AdminApiKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.apiKeyInput">ApiKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.apiUrlInput">ApiUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.cacertFileInput">CacertFileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.infrastructureApiUrlInput">InfrastructureApiUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.insecureSkipVerifyInput">InsecureSkipVerifyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.insightsInsertKeyInput">InsightsInsertKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.insightsInsertUrlInput">InsightsInsertUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.insightsQueryUrlInput">InsightsQueryUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.nerdgraphApiUrlInput">NerdgraphApiUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.syntheticsApiUrlInput">SyntheticsApiUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.accountId">AccountId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.adminApiKey">AdminApiKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.apiKey">ApiKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.apiUrl">ApiUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.cacertFile">CacertFile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.infrastructureApiUrl">InfrastructureApiUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.insecureSkipVerify">InsecureSkipVerify</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.insightsInsertKey">InsightsInsertKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.insightsInsertUrl">InsightsInsertUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.insightsQueryUrl">InsightsQueryUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.nerdgraphApiUrl">NerdgraphApiUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.syntheticsApiUrl">SyntheticsApiUrl</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.metaAttributes"></a>

```go
func MetaAttributes() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.terraformProviderSource"></a>

```go
func TerraformProviderSource() *string
```

- *Type:* *string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.accountIdInput"></a>

```go
func AccountIdInput() *f64
```

- *Type:* *f64

---

##### `AdminApiKeyInput`<sup>Optional</sup> <a name="AdminApiKeyInput" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.adminApiKeyInput"></a>

```go
func AdminApiKeyInput() *string
```

- *Type:* *string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.apiKeyInput"></a>

```go
func ApiKeyInput() *string
```

- *Type:* *string

---

##### `ApiUrlInput`<sup>Optional</sup> <a name="ApiUrlInput" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.apiUrlInput"></a>

```go
func ApiUrlInput() *string
```

- *Type:* *string

---

##### `CacertFileInput`<sup>Optional</sup> <a name="CacertFileInput" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.cacertFileInput"></a>

```go
func CacertFileInput() *string
```

- *Type:* *string

---

##### `InfrastructureApiUrlInput`<sup>Optional</sup> <a name="InfrastructureApiUrlInput" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.infrastructureApiUrlInput"></a>

```go
func InfrastructureApiUrlInput() *string
```

- *Type:* *string

---

##### `InsecureSkipVerifyInput`<sup>Optional</sup> <a name="InsecureSkipVerifyInput" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.insecureSkipVerifyInput"></a>

```go
func InsecureSkipVerifyInput() interface{}
```

- *Type:* interface{}

---

##### `InsightsInsertKeyInput`<sup>Optional</sup> <a name="InsightsInsertKeyInput" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.insightsInsertKeyInput"></a>

```go
func InsightsInsertKeyInput() *string
```

- *Type:* *string

---

##### `InsightsInsertUrlInput`<sup>Optional</sup> <a name="InsightsInsertUrlInput" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.insightsInsertUrlInput"></a>

```go
func InsightsInsertUrlInput() *string
```

- *Type:* *string

---

##### `InsightsQueryUrlInput`<sup>Optional</sup> <a name="InsightsQueryUrlInput" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.insightsQueryUrlInput"></a>

```go
func InsightsQueryUrlInput() *string
```

- *Type:* *string

---

##### `NerdgraphApiUrlInput`<sup>Optional</sup> <a name="NerdgraphApiUrlInput" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.nerdgraphApiUrlInput"></a>

```go
func NerdgraphApiUrlInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `SyntheticsApiUrlInput`<sup>Optional</sup> <a name="SyntheticsApiUrlInput" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.syntheticsApiUrlInput"></a>

```go
func SyntheticsApiUrlInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.accountId"></a>

```go
func AccountId() *f64
```

- *Type:* *f64

---

##### `AdminApiKey`<sup>Optional</sup> <a name="AdminApiKey" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.adminApiKey"></a>

```go
func AdminApiKey() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.apiKey"></a>

```go
func ApiKey() *string
```

- *Type:* *string

---

##### `ApiUrl`<sup>Optional</sup> <a name="ApiUrl" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.apiUrl"></a>

```go
func ApiUrl() *string
```

- *Type:* *string

---

##### `CacertFile`<sup>Optional</sup> <a name="CacertFile" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.cacertFile"></a>

```go
func CacertFile() *string
```

- *Type:* *string

---

##### `InfrastructureApiUrl`<sup>Optional</sup> <a name="InfrastructureApiUrl" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.infrastructureApiUrl"></a>

```go
func InfrastructureApiUrl() *string
```

- *Type:* *string

---

##### `InsecureSkipVerify`<sup>Optional</sup> <a name="InsecureSkipVerify" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.insecureSkipVerify"></a>

```go
func InsecureSkipVerify() interface{}
```

- *Type:* interface{}

---

##### `InsightsInsertKey`<sup>Optional</sup> <a name="InsightsInsertKey" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.insightsInsertKey"></a>

```go
func InsightsInsertKey() *string
```

- *Type:* *string

---

##### `InsightsInsertUrl`<sup>Optional</sup> <a name="InsightsInsertUrl" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.insightsInsertUrl"></a>

```go
func InsightsInsertUrl() *string
```

- *Type:* *string

---

##### `InsightsQueryUrl`<sup>Optional</sup> <a name="InsightsQueryUrl" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.insightsQueryUrl"></a>

```go
func InsightsQueryUrl() *string
```

- *Type:* *string

---

##### `NerdgraphApiUrl`<sup>Optional</sup> <a name="NerdgraphApiUrl" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.nerdgraphApiUrl"></a>

```go
func NerdgraphApiUrl() *string
```

- *Type:* *string

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `SyntheticsApiUrl`<sup>Optional</sup> <a name="SyntheticsApiUrl" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.syntheticsApiUrl"></a>

```go
func SyntheticsApiUrl() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NewrelicProviderConfig <a name="NewrelicProviderConfig" id="@cdktf/provider-newrelic.provider.NewrelicProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.provider.NewrelicProviderConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-newrelic-go/newrelic/v12/provider"

&provider.NewrelicProviderConfig {
	AccountId: *f64,
	ApiKey: *string,
	AdminApiKey: *string,
	Alias: *string,
	ApiUrl: *string,
	CacertFile: *string,
	InfrastructureApiUrl: *string,
	InsecureSkipVerify: interface{},
	InsightsInsertKey: *string,
	InsightsInsertUrl: *string,
	InsightsQueryUrl: *string,
	NerdgraphApiUrl: *string,
	Region: *string,
	SyntheticsApiUrl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.accountId">AccountId</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.53.0/docs#account_id NewrelicProvider#account_id}. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.apiKey">ApiKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.53.0/docs#api_key NewrelicProvider#api_key}. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.adminApiKey">AdminApiKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.53.0/docs#admin_api_key NewrelicProvider#admin_api_key}. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.alias">Alias</a></code> | <code>*string</code> | Alias name. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.apiUrl">ApiUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.53.0/docs#api_url NewrelicProvider#api_url}. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.cacertFile">CacertFile</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.53.0/docs#cacert_file NewrelicProvider#cacert_file}. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.infrastructureApiUrl">InfrastructureApiUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.53.0/docs#infrastructure_api_url NewrelicProvider#infrastructure_api_url}. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.insecureSkipVerify">InsecureSkipVerify</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.53.0/docs#insecure_skip_verify NewrelicProvider#insecure_skip_verify}. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.insightsInsertKey">InsightsInsertKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.53.0/docs#insights_insert_key NewrelicProvider#insights_insert_key}. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.insightsInsertUrl">InsightsInsertUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.53.0/docs#insights_insert_url NewrelicProvider#insights_insert_url}. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.insightsQueryUrl">InsightsQueryUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.53.0/docs#insights_query_url NewrelicProvider#insights_query_url}. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.nerdgraphApiUrl">NerdgraphApiUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.53.0/docs#nerdgraph_api_url NewrelicProvider#nerdgraph_api_url}. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.region">Region</a></code> | <code>*string</code> | The data center for which your New Relic account is configured. Only one region per provider block is permitted. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.syntheticsApiUrl">SyntheticsApiUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.53.0/docs#synthetics_api_url NewrelicProvider#synthetics_api_url}. |

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.accountId"></a>

```go
AccountId *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.53.0/docs#account_id NewrelicProvider#account_id}.

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.apiKey"></a>

```go
ApiKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.53.0/docs#api_key NewrelicProvider#api_key}.

---

##### `AdminApiKey`<sup>Optional</sup> <a name="AdminApiKey" id="@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.adminApiKey"></a>

```go
AdminApiKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.53.0/docs#admin_api_key NewrelicProvider#admin_api_key}.

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.53.0/docs#alias NewrelicProvider#alias}

---

##### `ApiUrl`<sup>Optional</sup> <a name="ApiUrl" id="@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.apiUrl"></a>

```go
ApiUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.53.0/docs#api_url NewrelicProvider#api_url}.

---

##### `CacertFile`<sup>Optional</sup> <a name="CacertFile" id="@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.cacertFile"></a>

```go
CacertFile *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.53.0/docs#cacert_file NewrelicProvider#cacert_file}.

---

##### `InfrastructureApiUrl`<sup>Optional</sup> <a name="InfrastructureApiUrl" id="@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.infrastructureApiUrl"></a>

```go
InfrastructureApiUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.53.0/docs#infrastructure_api_url NewrelicProvider#infrastructure_api_url}.

---

##### `InsecureSkipVerify`<sup>Optional</sup> <a name="InsecureSkipVerify" id="@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.insecureSkipVerify"></a>

```go
InsecureSkipVerify interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.53.0/docs#insecure_skip_verify NewrelicProvider#insecure_skip_verify}.

---

##### `InsightsInsertKey`<sup>Optional</sup> <a name="InsightsInsertKey" id="@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.insightsInsertKey"></a>

```go
InsightsInsertKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.53.0/docs#insights_insert_key NewrelicProvider#insights_insert_key}.

---

##### `InsightsInsertUrl`<sup>Optional</sup> <a name="InsightsInsertUrl" id="@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.insightsInsertUrl"></a>

```go
InsightsInsertUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.53.0/docs#insights_insert_url NewrelicProvider#insights_insert_url}.

---

##### `InsightsQueryUrl`<sup>Optional</sup> <a name="InsightsQueryUrl" id="@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.insightsQueryUrl"></a>

```go
InsightsQueryUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.53.0/docs#insights_query_url NewrelicProvider#insights_query_url}.

---

##### `NerdgraphApiUrl`<sup>Optional</sup> <a name="NerdgraphApiUrl" id="@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.nerdgraphApiUrl"></a>

```go
NerdgraphApiUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.53.0/docs#nerdgraph_api_url NewrelicProvider#nerdgraph_api_url}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The data center for which your New Relic account is configured. Only one region per provider block is permitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.53.0/docs#region NewrelicProvider#region}

---

##### `SyntheticsApiUrl`<sup>Optional</sup> <a name="SyntheticsApiUrl" id="@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.syntheticsApiUrl"></a>

```go
SyntheticsApiUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.53.0/docs#synthetics_api_url NewrelicProvider#synthetics_api_url}.

---



