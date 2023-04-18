# `newrelic_synthetics_private_location`

Refer to the Terraform Registory for docs: [`newrelic_synthetics_private_location`](https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/synthetics_private_location).

# `syntheticsPrivateLocation` Submodule <a name="`syntheticsPrivateLocation` Submodule" id="@cdktf/provider-newrelic.syntheticsPrivateLocation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SyntheticsPrivateLocation <a name="SyntheticsPrivateLocation" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/synthetics_private_location newrelic_synthetics_private_location}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import synthetics_private_location

syntheticsPrivateLocation.SyntheticsPrivateLocation(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  description: str,
  name: str,
  account_id: typing.Union[int, float] = None,
  id: str = None,
  verified_script_execution: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer.parameter.description">description</a></code> | <code>str</code> | The private location description. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the private location. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer.parameter.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the account in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/synthetics_private_location#id SyntheticsPrivateLocation#id}. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer.parameter.verifiedScriptExecution">verified_script_execution</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The private location requires a password to edit if value is true. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer.parameter.description"></a>

- *Type:* str

The private location description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/synthetics_private_location#description SyntheticsPrivateLocation#description}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer.parameter.name"></a>

- *Type:* str

The name of the private location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/synthetics_private_location#name SyntheticsPrivateLocation#name}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer.parameter.accountId"></a>

- *Type:* typing.Union[int, float]

The ID of the account in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/synthetics_private_location#account_id SyntheticsPrivateLocation#account_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/synthetics_private_location#id SyntheticsPrivateLocation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `verified_script_execution`<sup>Optional</sup> <a name="verified_script_execution" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer.parameter.verifiedScriptExecution"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

The private location requires a password to edit if value is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/synthetics_private_location#verified_script_execution SyntheticsPrivateLocation#verified_script_execution}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.resetVerifiedScriptExecution">reset_verified_script_execution</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_verified_script_execution` <a name="reset_verified_script_execution" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.resetVerifiedScriptExecution"></a>

```python
def reset_verified_script_execution() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.isConstruct"></a>

```python
from cdktf_cdktf_provider_newrelic import synthetics_private_location

syntheticsPrivateLocation.SyntheticsPrivateLocation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_newrelic import synthetics_private_location

syntheticsPrivateLocation.SyntheticsPrivateLocation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_newrelic import synthetics_private_location

syntheticsPrivateLocation.SyntheticsPrivateLocation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.domainId">domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.guid">guid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.locationId">location_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.accountIdInput">account_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.verifiedScriptExecutionInput">verified_script_execution_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.verifiedScriptExecution">verified_script_execution</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `domain_id`<sup>Required</sup> <a name="domain_id" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.domainId"></a>

```python
domain_id: str
```

- *Type:* str

---

##### `guid`<sup>Required</sup> <a name="guid" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.guid"></a>

```python
guid: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `location_id`<sup>Required</sup> <a name="location_id" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.locationId"></a>

```python
location_id: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.accountIdInput"></a>

```python
account_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `verified_script_execution_input`<sup>Optional</sup> <a name="verified_script_execution_input" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.verifiedScriptExecutionInput"></a>

```python
verified_script_execution_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `verified_script_execution`<sup>Required</sup> <a name="verified_script_execution" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.verifiedScriptExecution"></a>

```python
verified_script_execution: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SyntheticsPrivateLocationConfig <a name="SyntheticsPrivateLocationConfig" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import synthetics_private_location

syntheticsPrivateLocation.SyntheticsPrivateLocationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  description: str,
  name: str,
  account_id: typing.Union[int, float] = None,
  id: str = None,
  verified_script_execution: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.description">description</a></code> | <code>str</code> | The private location description. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.name">name</a></code> | <code>str</code> | The name of the private location. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the account in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/synthetics_private_location#id SyntheticsPrivateLocation#id}. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.verifiedScriptExecution">verified_script_execution</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The private location requires a password to edit if value is true. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The private location description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/synthetics_private_location#description SyntheticsPrivateLocation#description}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the private location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/synthetics_private_location#name SyntheticsPrivateLocation#name}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ID of the account in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/synthetics_private_location#account_id SyntheticsPrivateLocation#account_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/synthetics_private_location#id SyntheticsPrivateLocation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `verified_script_execution`<sup>Optional</sup> <a name="verified_script_execution" id="@cdktf/provider-newrelic.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.verifiedScriptExecution"></a>

```python
verified_script_execution: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

The private location requires a password to edit if value is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/synthetics_private_location#verified_script_execution SyntheticsPrivateLocation#verified_script_execution}

---



