# `dataNewrelicKeyTransaction` Submodule <a name="`dataNewrelicKeyTransaction` Submodule" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataNewrelicKeyTransaction <a name="DataNewrelicKeyTransaction" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.5/docs/data-sources/key_transaction newrelic_key_transaction}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import data_newrelic_key_transaction

dataNewrelicKeyTransaction.DataNewrelicKeyTransaction(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  account_id: typing.Union[int, float] = None,
  guid: str = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the key transaction in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.Initializer.parameter.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the New Relic account the key transaction would need to belong to. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.Initializer.parameter.guid">guid</a></code> | <code>str</code> | GUID of the key transaction in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.5/docs/data-sources/key_transaction#id DataNewrelicKeyTransaction#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.Initializer.parameter.name"></a>

- *Type:* str

The name of the key transaction in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.5/docs/data-sources/key_transaction#name DataNewrelicKeyTransaction#name}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.Initializer.parameter.accountId"></a>

- *Type:* typing.Union[int, float]

The ID of the New Relic account the key transaction would need to belong to.

Uses the account_id in the provider{} block by default, if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.5/docs/data-sources/key_transaction#account_id DataNewrelicKeyTransaction#account_id}

---

##### `guid`<sup>Optional</sup> <a name="guid" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.Initializer.parameter.guid"></a>

- *Type:* str

GUID of the key transaction in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.5/docs/data-sources/key_transaction#guid DataNewrelicKeyTransaction#guid}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.5/docs/data-sources/key_transaction#id DataNewrelicKeyTransaction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.resetGuid">reset_guid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_guid` <a name="reset_guid" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.resetGuid"></a>

```python
def reset_guid() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataNewrelicKeyTransaction resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.isConstruct"></a>

```python
from cdktf_cdktf_provider_newrelic import data_newrelic_key_transaction

dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_newrelic import data_newrelic_key_transaction

dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_newrelic import data_newrelic_key_transaction

dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_newrelic import data_newrelic_key_transaction

dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataNewrelicKeyTransaction resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataNewrelicKeyTransaction to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataNewrelicKeyTransaction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.5/docs/data-sources/key_transaction#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataNewrelicKeyTransaction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.accountIdInput">account_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.guidInput">guid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.guid">guid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.accountIdInput"></a>

```python
account_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `guid_input`<sup>Optional</sup> <a name="guid_input" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.guidInput"></a>

```python
guid_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `guid`<sup>Required</sup> <a name="guid" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.guid"></a>

```python
guid: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransaction.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataNewrelicKeyTransactionConfig <a name="DataNewrelicKeyTransactionConfig" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransactionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransactionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import data_newrelic_key_transaction

dataNewrelicKeyTransaction.DataNewrelicKeyTransactionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  account_id: typing.Union[int, float] = None,
  guid: str = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransactionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransactionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransactionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransactionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransactionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransactionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransactionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransactionConfig.property.name">name</a></code> | <code>str</code> | The name of the key transaction in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransactionConfig.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the New Relic account the key transaction would need to belong to. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransactionConfig.property.guid">guid</a></code> | <code>str</code> | GUID of the key transaction in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransactionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.5/docs/data-sources/key_transaction#id DataNewrelicKeyTransaction#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransactionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransactionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransactionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransactionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransactionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransactionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransactionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransactionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the key transaction in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.5/docs/data-sources/key_transaction#name DataNewrelicKeyTransaction#name}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransactionConfig.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ID of the New Relic account the key transaction would need to belong to.

Uses the account_id in the provider{} block by default, if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.5/docs/data-sources/key_transaction#account_id DataNewrelicKeyTransaction#account_id}

---

##### `guid`<sup>Optional</sup> <a name="guid" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransactionConfig.property.guid"></a>

```python
guid: str
```

- *Type:* str

GUID of the key transaction in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.5/docs/data-sources/key_transaction#guid DataNewrelicKeyTransaction#guid}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.dataNewrelicKeyTransaction.DataNewrelicKeyTransactionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.5/docs/data-sources/key_transaction#id DataNewrelicKeyTransaction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



