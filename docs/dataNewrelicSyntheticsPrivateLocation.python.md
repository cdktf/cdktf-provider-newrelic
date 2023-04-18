# `data_newrelic_synthetics_private_location`

Refer to the Terraform Registory for docs: [`data_newrelic_synthetics_private_location`](https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/data-sources/synthetics_private_location).

# `dataNewrelicSyntheticsPrivateLocation` Submodule <a name="`dataNewrelicSyntheticsPrivateLocation` Submodule" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataNewrelicSyntheticsPrivateLocation <a name="DataNewrelicSyntheticsPrivateLocation" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/data-sources/synthetics_private_location newrelic_synthetics_private_location}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import data_newrelic_synthetics_private_location

dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation(
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
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the Synthetics monitor private location. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.Initializer.parameter.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the account in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/data-sources/synthetics_private_location#id DataNewrelicSyntheticsPrivateLocation#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.Initializer.parameter.name"></a>

- *Type:* str

The name of the Synthetics monitor private location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/data-sources/synthetics_private_location#name DataNewrelicSyntheticsPrivateLocation#name}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.Initializer.parameter.accountId"></a>

- *Type:* typing.Union[int, float]

The ID of the account in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/data-sources/synthetics_private_location#account_id DataNewrelicSyntheticsPrivateLocation#account_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/data-sources/synthetics_private_location#id DataNewrelicSyntheticsPrivateLocation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.isConstruct"></a>

```python
from cdktf_cdktf_provider_newrelic import data_newrelic_synthetics_private_location

dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_newrelic import data_newrelic_synthetics_private_location

dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_newrelic import data_newrelic_synthetics_private_location

dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.accountIdInput">account_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.accountIdInput"></a>

```python
account_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataNewrelicSyntheticsPrivateLocationConfig <a name="DataNewrelicSyntheticsPrivateLocationConfig" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import data_newrelic_synthetics_private_location

dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  account_id: typing.Union[int, float] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.name">name</a></code> | <code>str</code> | The name of the Synthetics monitor private location. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the account in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/data-sources/synthetics_private_location#id DataNewrelicSyntheticsPrivateLocation#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the Synthetics monitor private location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/data-sources/synthetics_private_location#name DataNewrelicSyntheticsPrivateLocation#name}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ID of the account in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/data-sources/synthetics_private_location#account_id DataNewrelicSyntheticsPrivateLocation#account_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/data-sources/synthetics_private_location#id DataNewrelicSyntheticsPrivateLocation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



