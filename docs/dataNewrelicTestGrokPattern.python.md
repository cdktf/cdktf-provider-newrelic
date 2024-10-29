# `dataNewrelicTestGrokPattern` Submodule <a name="`dataNewrelicTestGrokPattern` Submodule" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataNewrelicTestGrokPattern <a name="DataNewrelicTestGrokPattern" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/data-sources/test_grok_pattern newrelic_test_grok_pattern}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import data_newrelic_test_grok_pattern

dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  grok: str,
  log_lines: typing.List[str],
  account_id: typing.Union[int, float] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.Initializer.parameter.grok">grok</a></code> | <code>str</code> | The Grok pattern to test. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.Initializer.parameter.logLines">log_lines</a></code> | <code>typing.List[str]</code> | The log lines to test the Grok pattern against. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.Initializer.parameter.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | The account id associated with the test grok. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/data-sources/test_grok_pattern#id DataNewrelicTestGrokPattern#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `grok`<sup>Required</sup> <a name="grok" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.Initializer.parameter.grok"></a>

- *Type:* str

The Grok pattern to test.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/data-sources/test_grok_pattern#grok DataNewrelicTestGrokPattern#grok}

---

##### `log_lines`<sup>Required</sup> <a name="log_lines" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.Initializer.parameter.logLines"></a>

- *Type:* typing.List[str]

The log lines to test the Grok pattern against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/data-sources/test_grok_pattern#log_lines DataNewrelicTestGrokPattern#log_lines}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.Initializer.parameter.accountId"></a>

- *Type:* typing.Union[int, float]

The account id associated with the test grok.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/data-sources/test_grok_pattern#account_id DataNewrelicTestGrokPattern#account_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/data-sources/test_grok_pattern#id DataNewrelicTestGrokPattern#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataNewrelicTestGrokPattern resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.isConstruct"></a>

```python
from cdktf_cdktf_provider_newrelic import data_newrelic_test_grok_pattern

dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_newrelic import data_newrelic_test_grok_pattern

dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_newrelic import data_newrelic_test_grok_pattern

dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_newrelic import data_newrelic_test_grok_pattern

dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataNewrelicTestGrokPattern resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataNewrelicTestGrokPattern to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataNewrelicTestGrokPattern that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/data-sources/test_grok_pattern#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataNewrelicTestGrokPattern to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.testGrok">test_grok</a></code> | <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList">DataNewrelicTestGrokPatternTestGrokList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.accountIdInput">account_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.grokInput">grok_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.logLinesInput">log_lines_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.grok">grok</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.logLines">log_lines</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `test_grok`<sup>Required</sup> <a name="test_grok" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.testGrok"></a>

```python
test_grok: DataNewrelicTestGrokPatternTestGrokList
```

- *Type:* <a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList">DataNewrelicTestGrokPatternTestGrokList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.accountIdInput"></a>

```python
account_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `grok_input`<sup>Optional</sup> <a name="grok_input" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.grokInput"></a>

```python
grok_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `log_lines_input`<sup>Optional</sup> <a name="log_lines_input" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.logLinesInput"></a>

```python
log_lines_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `grok`<sup>Required</sup> <a name="grok" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.grok"></a>

```python
grok: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `log_lines`<sup>Required</sup> <a name="log_lines" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.logLines"></a>

```python
log_lines: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataNewrelicTestGrokPatternConfig <a name="DataNewrelicTestGrokPatternConfig" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import data_newrelic_test_grok_pattern

dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  grok: str,
  log_lines: typing.List[str],
  account_id: typing.Union[int, float] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.grok">grok</a></code> | <code>str</code> | The Grok pattern to test. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.logLines">log_lines</a></code> | <code>typing.List[str]</code> | The log lines to test the Grok pattern against. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | The account id associated with the test grok. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/data-sources/test_grok_pattern#id DataNewrelicTestGrokPattern#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `grok`<sup>Required</sup> <a name="grok" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.grok"></a>

```python
grok: str
```

- *Type:* str

The Grok pattern to test.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/data-sources/test_grok_pattern#grok DataNewrelicTestGrokPattern#grok}

---

##### `log_lines`<sup>Required</sup> <a name="log_lines" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.logLines"></a>

```python
log_lines: typing.List[str]
```

- *Type:* typing.List[str]

The log lines to test the Grok pattern against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/data-sources/test_grok_pattern#log_lines DataNewrelicTestGrokPattern#log_lines}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The account id associated with the test grok.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/data-sources/test_grok_pattern#account_id DataNewrelicTestGrokPattern#account_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/data-sources/test_grok_pattern#id DataNewrelicTestGrokPattern#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataNewrelicTestGrokPatternTestGrok <a name="DataNewrelicTestGrokPatternTestGrok" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrok"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrok.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import data_newrelic_test_grok_pattern

dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrok()
```


### DataNewrelicTestGrokPatternTestGrokAttributes <a name="DataNewrelicTestGrokPatternTestGrokAttributes" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributes.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import data_newrelic_test_grok_pattern

dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributes()
```


## Classes <a name="Classes" id="Classes"></a>

### DataNewrelicTestGrokPatternTestGrokAttributesList <a name="DataNewrelicTestGrokPatternTestGrokAttributesList" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import data_newrelic_test_grok_pattern

dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataNewrelicTestGrokPatternTestGrokAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataNewrelicTestGrokPatternTestGrokAttributesOutputReference <a name="DataNewrelicTestGrokPatternTestGrokAttributesOutputReference" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import data_newrelic_test_grok_pattern

dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributes">DataNewrelicTestGrokPatternTestGrokAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.property.internalValue"></a>

```python
internal_value: DataNewrelicTestGrokPatternTestGrokAttributes
```

- *Type:* <a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributes">DataNewrelicTestGrokPatternTestGrokAttributes</a>

---


### DataNewrelicTestGrokPatternTestGrokList <a name="DataNewrelicTestGrokPatternTestGrokList" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import data_newrelic_test_grok_pattern

dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataNewrelicTestGrokPatternTestGrokOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataNewrelicTestGrokPatternTestGrokOutputReference <a name="DataNewrelicTestGrokPatternTestGrokOutputReference" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import data_newrelic_test_grok_pattern

dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.property.attributes">attributes</a></code> | <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList">DataNewrelicTestGrokPatternTestGrokAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.property.logLine">log_line</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.property.matched">matched</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrok">DataNewrelicTestGrokPatternTestGrok</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.property.attributes"></a>

```python
attributes: DataNewrelicTestGrokPatternTestGrokAttributesList
```

- *Type:* <a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList">DataNewrelicTestGrokPatternTestGrokAttributesList</a>

---

##### `log_line`<sup>Required</sup> <a name="log_line" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.property.logLine"></a>

```python
log_line: str
```

- *Type:* str

---

##### `matched`<sup>Required</sup> <a name="matched" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.property.matched"></a>

```python
matched: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.property.internalValue"></a>

```python
internal_value: DataNewrelicTestGrokPatternTestGrok
```

- *Type:* <a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrok">DataNewrelicTestGrokPatternTestGrok</a>

---



