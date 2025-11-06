# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-newrelic.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NewrelicProvider <a name="NewrelicProvider" id="@cdktf/provider-newrelic.provider.NewrelicProvider"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs newrelic}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import provider

provider.NewrelicProvider(
  scope: Construct,
  id: str,
  account_id: typing.Union[int, float],
  api_key: str,
  admin_api_key: str = None,
  alias: str = None,
  api_url: str = None,
  cacert_file: str = None,
  infrastructure_api_url: str = None,
  insecure_skip_verify: bool | IResolvable = None,
  insights_insert_key: str = None,
  insights_insert_url: str = None,
  insights_query_url: str = None,
  nerdgraph_api_url: str = None,
  region: str = None,
  synthetics_api_url: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs#account_id NewrelicProvider#account_id}. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.apiKey">api_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs#api_key NewrelicProvider#api_key}. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.adminApiKey">admin_api_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs#admin_api_key NewrelicProvider#admin_api_key}. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.apiUrl">api_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs#api_url NewrelicProvider#api_url}. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.cacertFile">cacert_file</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs#cacert_file NewrelicProvider#cacert_file}. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.infrastructureApiUrl">infrastructure_api_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs#infrastructure_api_url NewrelicProvider#infrastructure_api_url}. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.insecureSkipVerify">insecure_skip_verify</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs#insecure_skip_verify NewrelicProvider#insecure_skip_verify}. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.insightsInsertKey">insights_insert_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs#insights_insert_key NewrelicProvider#insights_insert_key}. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.insightsInsertUrl">insights_insert_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs#insights_insert_url NewrelicProvider#insights_insert_url}. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.insightsQueryUrl">insights_query_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs#insights_query_url NewrelicProvider#insights_query_url}. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.nerdgraphApiUrl">nerdgraph_api_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs#nerdgraph_api_url NewrelicProvider#nerdgraph_api_url}. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.region">region</a></code> | <code>str</code> | The data center for which your New Relic account is configured. Only one region per provider block is permitted. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.syntheticsApiUrl">synthetics_api_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs#synthetics_api_url NewrelicProvider#synthetics_api_url}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.accountId"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs#account_id NewrelicProvider#account_id}.

---

##### `api_key`<sup>Required</sup> <a name="api_key" id="@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.apiKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs#api_key NewrelicProvider#api_key}.

---

##### `admin_api_key`<sup>Optional</sup> <a name="admin_api_key" id="@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.adminApiKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs#admin_api_key NewrelicProvider#admin_api_key}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.alias"></a>

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs#alias NewrelicProvider#alias}

---

##### `api_url`<sup>Optional</sup> <a name="api_url" id="@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.apiUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs#api_url NewrelicProvider#api_url}.

---

##### `cacert_file`<sup>Optional</sup> <a name="cacert_file" id="@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.cacertFile"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs#cacert_file NewrelicProvider#cacert_file}.

---

##### `infrastructure_api_url`<sup>Optional</sup> <a name="infrastructure_api_url" id="@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.infrastructureApiUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs#infrastructure_api_url NewrelicProvider#infrastructure_api_url}.

---

##### `insecure_skip_verify`<sup>Optional</sup> <a name="insecure_skip_verify" id="@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.insecureSkipVerify"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs#insecure_skip_verify NewrelicProvider#insecure_skip_verify}.

---

##### `insights_insert_key`<sup>Optional</sup> <a name="insights_insert_key" id="@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.insightsInsertKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs#insights_insert_key NewrelicProvider#insights_insert_key}.

---

##### `insights_insert_url`<sup>Optional</sup> <a name="insights_insert_url" id="@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.insightsInsertUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs#insights_insert_url NewrelicProvider#insights_insert_url}.

---

##### `insights_query_url`<sup>Optional</sup> <a name="insights_query_url" id="@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.insightsQueryUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs#insights_query_url NewrelicProvider#insights_query_url}.

---

##### `nerdgraph_api_url`<sup>Optional</sup> <a name="nerdgraph_api_url" id="@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.nerdgraphApiUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs#nerdgraph_api_url NewrelicProvider#nerdgraph_api_url}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.region"></a>

- *Type:* str

The data center for which your New Relic account is configured. Only one region per provider block is permitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs#region NewrelicProvider#region}

---

##### `synthetics_api_url`<sup>Optional</sup> <a name="synthetics_api_url" id="@cdktf/provider-newrelic.provider.NewrelicProvider.Initializer.parameter.syntheticsApiUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs#synthetics_api_url NewrelicProvider#synthetics_api_url}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.resetAdminApiKey">reset_admin_api_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.resetApiUrl">reset_api_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.resetCacertFile">reset_cacert_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.resetInfrastructureApiUrl">reset_infrastructure_api_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.resetInsecureSkipVerify">reset_insecure_skip_verify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.resetInsightsInsertKey">reset_insights_insert_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.resetInsightsInsertUrl">reset_insights_insert_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.resetInsightsQueryUrl">reset_insights_query_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.resetNerdgraphApiUrl">reset_nerdgraph_api_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.resetSyntheticsApiUrl">reset_synthetics_api_url</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.provider.NewrelicProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-newrelic.provider.NewrelicProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.provider.NewrelicProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.provider.NewrelicProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-newrelic.provider.NewrelicProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-newrelic.provider.NewrelicProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-newrelic.provider.NewrelicProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-newrelic.provider.NewrelicProvider.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-newrelic.provider.NewrelicProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-newrelic.provider.NewrelicProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `reset_admin_api_key` <a name="reset_admin_api_key" id="@cdktf/provider-newrelic.provider.NewrelicProvider.resetAdminApiKey"></a>

```python
def reset_admin_api_key() -> None
```

##### `reset_alias` <a name="reset_alias" id="@cdktf/provider-newrelic.provider.NewrelicProvider.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_api_url` <a name="reset_api_url" id="@cdktf/provider-newrelic.provider.NewrelicProvider.resetApiUrl"></a>

```python
def reset_api_url() -> None
```

##### `reset_cacert_file` <a name="reset_cacert_file" id="@cdktf/provider-newrelic.provider.NewrelicProvider.resetCacertFile"></a>

```python
def reset_cacert_file() -> None
```

##### `reset_infrastructure_api_url` <a name="reset_infrastructure_api_url" id="@cdktf/provider-newrelic.provider.NewrelicProvider.resetInfrastructureApiUrl"></a>

```python
def reset_infrastructure_api_url() -> None
```

##### `reset_insecure_skip_verify` <a name="reset_insecure_skip_verify" id="@cdktf/provider-newrelic.provider.NewrelicProvider.resetInsecureSkipVerify"></a>

```python
def reset_insecure_skip_verify() -> None
```

##### `reset_insights_insert_key` <a name="reset_insights_insert_key" id="@cdktf/provider-newrelic.provider.NewrelicProvider.resetInsightsInsertKey"></a>

```python
def reset_insights_insert_key() -> None
```

##### `reset_insights_insert_url` <a name="reset_insights_insert_url" id="@cdktf/provider-newrelic.provider.NewrelicProvider.resetInsightsInsertUrl"></a>

```python
def reset_insights_insert_url() -> None
```

##### `reset_insights_query_url` <a name="reset_insights_query_url" id="@cdktf/provider-newrelic.provider.NewrelicProvider.resetInsightsQueryUrl"></a>

```python
def reset_insights_query_url() -> None
```

##### `reset_nerdgraph_api_url` <a name="reset_nerdgraph_api_url" id="@cdktf/provider-newrelic.provider.NewrelicProvider.resetNerdgraphApiUrl"></a>

```python
def reset_nerdgraph_api_url() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-newrelic.provider.NewrelicProvider.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_synthetics_api_url` <a name="reset_synthetics_api_url" id="@cdktf/provider-newrelic.provider.NewrelicProvider.resetSyntheticsApiUrl"></a>

```python
def reset_synthetics_api_url() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.isTerraformProvider">is_terraform_provider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NewrelicProvider resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-newrelic.provider.NewrelicProvider.isConstruct"></a>

```python
from cdktf_cdktf_provider_newrelic import provider

provider.NewrelicProvider.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-newrelic.provider.NewrelicProvider.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_newrelic import provider

provider.NewrelicProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.provider.NewrelicProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_provider` <a name="is_terraform_provider" id="@cdktf/provider-newrelic.provider.NewrelicProvider.isTerraformProvider"></a>

```python
from cdktf_cdktf_provider_newrelic import provider

provider.NewrelicProvider.is_terraform_provider(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.provider.NewrelicProvider.isTerraformProvider.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-newrelic.provider.NewrelicProvider.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_newrelic import provider

provider.NewrelicProvider.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NewrelicProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.provider.NewrelicProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-newrelic.provider.NewrelicProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NewrelicProvider to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-newrelic.provider.NewrelicProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NewrelicProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.provider.NewrelicProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NewrelicProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.metaAttributes">meta_attributes</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.terraformProviderSource">terraform_provider_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.accountIdInput">account_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.adminApiKeyInput">admin_api_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.apiKeyInput">api_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.apiUrlInput">api_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.cacertFileInput">cacert_file_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.infrastructureApiUrlInput">infrastructure_api_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.insecureSkipVerifyInput">insecure_skip_verify_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.insightsInsertKeyInput">insights_insert_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.insightsInsertUrlInput">insights_insert_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.insightsQueryUrlInput">insights_query_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.nerdgraphApiUrlInput">nerdgraph_api_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.syntheticsApiUrlInput">synthetics_api_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.adminApiKey">admin_api_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.apiKey">api_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.apiUrl">api_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.cacertFile">cacert_file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.infrastructureApiUrl">infrastructure_api_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.insecureSkipVerify">insecure_skip_verify</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.insightsInsertKey">insights_insert_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.insightsInsertUrl">insights_insert_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.insightsQueryUrl">insights_query_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.nerdgraphApiUrl">nerdgraph_api_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.syntheticsApiUrl">synthetics_api_url</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `meta_attributes`<sup>Required</sup> <a name="meta_attributes" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.metaAttributes"></a>

```python
meta_attributes: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraform_provider_source`<sup>Optional</sup> <a name="terraform_provider_source" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.terraformProviderSource"></a>

```python
terraform_provider_source: str
```

- *Type:* str

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.accountIdInput"></a>

```python
account_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `admin_api_key_input`<sup>Optional</sup> <a name="admin_api_key_input" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.adminApiKeyInput"></a>

```python
admin_api_key_input: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `api_key_input`<sup>Optional</sup> <a name="api_key_input" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.apiKeyInput"></a>

```python
api_key_input: str
```

- *Type:* str

---

##### `api_url_input`<sup>Optional</sup> <a name="api_url_input" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.apiUrlInput"></a>

```python
api_url_input: str
```

- *Type:* str

---

##### `cacert_file_input`<sup>Optional</sup> <a name="cacert_file_input" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.cacertFileInput"></a>

```python
cacert_file_input: str
```

- *Type:* str

---

##### `infrastructure_api_url_input`<sup>Optional</sup> <a name="infrastructure_api_url_input" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.infrastructureApiUrlInput"></a>

```python
infrastructure_api_url_input: str
```

- *Type:* str

---

##### `insecure_skip_verify_input`<sup>Optional</sup> <a name="insecure_skip_verify_input" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.insecureSkipVerifyInput"></a>

```python
insecure_skip_verify_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `insights_insert_key_input`<sup>Optional</sup> <a name="insights_insert_key_input" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.insightsInsertKeyInput"></a>

```python
insights_insert_key_input: str
```

- *Type:* str

---

##### `insights_insert_url_input`<sup>Optional</sup> <a name="insights_insert_url_input" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.insightsInsertUrlInput"></a>

```python
insights_insert_url_input: str
```

- *Type:* str

---

##### `insights_query_url_input`<sup>Optional</sup> <a name="insights_query_url_input" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.insightsQueryUrlInput"></a>

```python
insights_query_url_input: str
```

- *Type:* str

---

##### `nerdgraph_api_url_input`<sup>Optional</sup> <a name="nerdgraph_api_url_input" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.nerdgraphApiUrlInput"></a>

```python
nerdgraph_api_url_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `synthetics_api_url_input`<sup>Optional</sup> <a name="synthetics_api_url_input" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.syntheticsApiUrlInput"></a>

```python
synthetics_api_url_input: str
```

- *Type:* str

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `admin_api_key`<sup>Optional</sup> <a name="admin_api_key" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.adminApiKey"></a>

```python
admin_api_key: str
```

- *Type:* str

---

##### `api_key`<sup>Optional</sup> <a name="api_key" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.apiKey"></a>

```python
api_key: str
```

- *Type:* str

---

##### `api_url`<sup>Optional</sup> <a name="api_url" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.apiUrl"></a>

```python
api_url: str
```

- *Type:* str

---

##### `cacert_file`<sup>Optional</sup> <a name="cacert_file" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.cacertFile"></a>

```python
cacert_file: str
```

- *Type:* str

---

##### `infrastructure_api_url`<sup>Optional</sup> <a name="infrastructure_api_url" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.infrastructureApiUrl"></a>

```python
infrastructure_api_url: str
```

- *Type:* str

---

##### `insecure_skip_verify`<sup>Optional</sup> <a name="insecure_skip_verify" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.insecureSkipVerify"></a>

```python
insecure_skip_verify: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `insights_insert_key`<sup>Optional</sup> <a name="insights_insert_key" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.insightsInsertKey"></a>

```python
insights_insert_key: str
```

- *Type:* str

---

##### `insights_insert_url`<sup>Optional</sup> <a name="insights_insert_url" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.insightsInsertUrl"></a>

```python
insights_insert_url: str
```

- *Type:* str

---

##### `insights_query_url`<sup>Optional</sup> <a name="insights_query_url" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.insightsQueryUrl"></a>

```python
insights_query_url: str
```

- *Type:* str

---

##### `nerdgraph_api_url`<sup>Optional</sup> <a name="nerdgraph_api_url" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.nerdgraphApiUrl"></a>

```python
nerdgraph_api_url: str
```

- *Type:* str

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `synthetics_api_url`<sup>Optional</sup> <a name="synthetics_api_url" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.syntheticsApiUrl"></a>

```python
synthetics_api_url: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.provider.NewrelicProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NewrelicProviderConfig <a name="NewrelicProviderConfig" id="@cdktf/provider-newrelic.provider.NewrelicProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.provider.NewrelicProviderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import provider

provider.NewrelicProviderConfig(
  account_id: typing.Union[int, float],
  api_key: str,
  admin_api_key: str = None,
  alias: str = None,
  api_url: str = None,
  cacert_file: str = None,
  infrastructure_api_url: str = None,
  insecure_skip_verify: bool | IResolvable = None,
  insights_insert_key: str = None,
  insights_insert_url: str = None,
  insights_query_url: str = None,
  nerdgraph_api_url: str = None,
  region: str = None,
  synthetics_api_url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs#account_id NewrelicProvider#account_id}. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.apiKey">api_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs#api_key NewrelicProvider#api_key}. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.adminApiKey">admin_api_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs#admin_api_key NewrelicProvider#admin_api_key}. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.apiUrl">api_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs#api_url NewrelicProvider#api_url}. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.cacertFile">cacert_file</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs#cacert_file NewrelicProvider#cacert_file}. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.infrastructureApiUrl">infrastructure_api_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs#infrastructure_api_url NewrelicProvider#infrastructure_api_url}. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.insecureSkipVerify">insecure_skip_verify</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs#insecure_skip_verify NewrelicProvider#insecure_skip_verify}. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.insightsInsertKey">insights_insert_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs#insights_insert_key NewrelicProvider#insights_insert_key}. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.insightsInsertUrl">insights_insert_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs#insights_insert_url NewrelicProvider#insights_insert_url}. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.insightsQueryUrl">insights_query_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs#insights_query_url NewrelicProvider#insights_query_url}. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.nerdgraphApiUrl">nerdgraph_api_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs#nerdgraph_api_url NewrelicProvider#nerdgraph_api_url}. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.region">region</a></code> | <code>str</code> | The data center for which your New Relic account is configured. Only one region per provider block is permitted. |
| <code><a href="#@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.syntheticsApiUrl">synthetics_api_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs#synthetics_api_url NewrelicProvider#synthetics_api_url}. |

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs#account_id NewrelicProvider#account_id}.

---

##### `api_key`<sup>Required</sup> <a name="api_key" id="@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.apiKey"></a>

```python
api_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs#api_key NewrelicProvider#api_key}.

---

##### `admin_api_key`<sup>Optional</sup> <a name="admin_api_key" id="@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.adminApiKey"></a>

```python
admin_api_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs#admin_api_key NewrelicProvider#admin_api_key}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.alias"></a>

```python
alias: str
```

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs#alias NewrelicProvider#alias}

---

##### `api_url`<sup>Optional</sup> <a name="api_url" id="@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.apiUrl"></a>

```python
api_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs#api_url NewrelicProvider#api_url}.

---

##### `cacert_file`<sup>Optional</sup> <a name="cacert_file" id="@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.cacertFile"></a>

```python
cacert_file: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs#cacert_file NewrelicProvider#cacert_file}.

---

##### `infrastructure_api_url`<sup>Optional</sup> <a name="infrastructure_api_url" id="@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.infrastructureApiUrl"></a>

```python
infrastructure_api_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs#infrastructure_api_url NewrelicProvider#infrastructure_api_url}.

---

##### `insecure_skip_verify`<sup>Optional</sup> <a name="insecure_skip_verify" id="@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.insecureSkipVerify"></a>

```python
insecure_skip_verify: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs#insecure_skip_verify NewrelicProvider#insecure_skip_verify}.

---

##### `insights_insert_key`<sup>Optional</sup> <a name="insights_insert_key" id="@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.insightsInsertKey"></a>

```python
insights_insert_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs#insights_insert_key NewrelicProvider#insights_insert_key}.

---

##### `insights_insert_url`<sup>Optional</sup> <a name="insights_insert_url" id="@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.insightsInsertUrl"></a>

```python
insights_insert_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs#insights_insert_url NewrelicProvider#insights_insert_url}.

---

##### `insights_query_url`<sup>Optional</sup> <a name="insights_query_url" id="@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.insightsQueryUrl"></a>

```python
insights_query_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs#insights_query_url NewrelicProvider#insights_query_url}.

---

##### `nerdgraph_api_url`<sup>Optional</sup> <a name="nerdgraph_api_url" id="@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.nerdgraphApiUrl"></a>

```python
nerdgraph_api_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs#nerdgraph_api_url NewrelicProvider#nerdgraph_api_url}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The data center for which your New Relic account is configured. Only one region per provider block is permitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs#region NewrelicProvider#region}

---

##### `synthetics_api_url`<sup>Optional</sup> <a name="synthetics_api_url" id="@cdktf/provider-newrelic.provider.NewrelicProviderConfig.property.syntheticsApiUrl"></a>

```python
synthetics_api_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs#synthetics_api_url NewrelicProvider#synthetics_api_url}.

---



