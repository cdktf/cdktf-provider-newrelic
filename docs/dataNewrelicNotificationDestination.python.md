# `dataNewrelicNotificationDestination` Submodule <a name="`dataNewrelicNotificationDestination` Submodule" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataNewrelicNotificationDestination <a name="DataNewrelicNotificationDestination" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.65.0/docs/data-sources/notification_destination newrelic_notification_destination}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import data_newrelic_notification_destination

dataNewrelicNotificationDestination.DataNewrelicNotificationDestination(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: typing.Union[int, float] = None,
  id: str = None,
  name: str = None,
  secure_url: typing.Union[IResolvable, typing.List[DataNewrelicNotificationDestinationSecureUrl]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.Initializer.parameter.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | The account ID under which to put the destination. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.Initializer.parameter.id">id</a></code> | <code>str</code> | The ID of the destination. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the destination. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.Initializer.parameter.secureUrl">secure_url</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrl">DataNewrelicNotificationDestinationSecureUrl</a>]]</code> | secure_url block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.Initializer.parameter.accountId"></a>

- *Type:* typing.Union[int, float]

The account ID under which to put the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.65.0/docs/data-sources/notification_destination#account_id DataNewrelicNotificationDestination#account_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.Initializer.parameter.id"></a>

- *Type:* str

The ID of the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.65.0/docs/data-sources/notification_destination#id DataNewrelicNotificationDestination#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.Initializer.parameter.name"></a>

- *Type:* str

The name of the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.65.0/docs/data-sources/notification_destination#name DataNewrelicNotificationDestination#name}

---

##### `secure_url`<sup>Optional</sup> <a name="secure_url" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.Initializer.parameter.secureUrl"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrl">DataNewrelicNotificationDestinationSecureUrl</a>]]

secure_url block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.65.0/docs/data-sources/notification_destination#secure_url DataNewrelicNotificationDestination#secure_url}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.putSecureUrl">put_secure_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.resetSecureUrl">reset_secure_url</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_secure_url` <a name="put_secure_url" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.putSecureUrl"></a>

```python
def put_secure_url(
  value: typing.Union[IResolvable, typing.List[DataNewrelicNotificationDestinationSecureUrl]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.putSecureUrl.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrl">DataNewrelicNotificationDestinationSecureUrl</a>]]

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_secure_url` <a name="reset_secure_url" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.resetSecureUrl"></a>

```python
def reset_secure_url() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataNewrelicNotificationDestination resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.isConstruct"></a>

```python
from cdktf_cdktf_provider_newrelic import data_newrelic_notification_destination

dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_newrelic import data_newrelic_notification_destination

dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_newrelic import data_newrelic_notification_destination

dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_newrelic import data_newrelic_notification_destination

dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataNewrelicNotificationDestination resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataNewrelicNotificationDestination to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataNewrelicNotificationDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.65.0/docs/data-sources/notification_destination#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataNewrelicNotificationDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.active">active</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.guid">guid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.property">property</a></code> | <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList">DataNewrelicNotificationDestinationPropertyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.secureUrl">secure_url</a></code> | <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlList">DataNewrelicNotificationDestinationSecureUrlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.accountIdInput">account_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.secureUrlInput">secure_url_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrl">DataNewrelicNotificationDestinationSecureUrl</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.active"></a>

```python
active: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `guid`<sup>Required</sup> <a name="guid" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.guid"></a>

```python
guid: str
```

- *Type:* str

---

##### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.property"></a>

```python
property: DataNewrelicNotificationDestinationPropertyList
```

- *Type:* <a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList">DataNewrelicNotificationDestinationPropertyList</a>

---

##### `secure_url`<sup>Required</sup> <a name="secure_url" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.secureUrl"></a>

```python
secure_url: DataNewrelicNotificationDestinationSecureUrlList
```

- *Type:* <a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlList">DataNewrelicNotificationDestinationSecureUrlList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.accountIdInput"></a>

```python
account_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `secure_url_input`<sup>Optional</sup> <a name="secure_url_input" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.secureUrlInput"></a>

```python
secure_url_input: typing.Union[IResolvable, typing.List[DataNewrelicNotificationDestinationSecureUrl]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrl">DataNewrelicNotificationDestinationSecureUrl</a>]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestination.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataNewrelicNotificationDestinationConfig <a name="DataNewrelicNotificationDestinationConfig" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import data_newrelic_notification_destination

dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: typing.Union[int, float] = None,
  id: str = None,
  name: str = None,
  secure_url: typing.Union[IResolvable, typing.List[DataNewrelicNotificationDestinationSecureUrl]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | The account ID under which to put the destination. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.id">id</a></code> | <code>str</code> | The ID of the destination. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.name">name</a></code> | <code>str</code> | The name of the destination. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.secureUrl">secure_url</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrl">DataNewrelicNotificationDestinationSecureUrl</a>]]</code> | secure_url block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The account ID under which to put the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.65.0/docs/data-sources/notification_destination#account_id DataNewrelicNotificationDestination#account_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

The ID of the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.65.0/docs/data-sources/notification_destination#id DataNewrelicNotificationDestination#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.65.0/docs/data-sources/notification_destination#name DataNewrelicNotificationDestination#name}

---

##### `secure_url`<sup>Optional</sup> <a name="secure_url" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationConfig.property.secureUrl"></a>

```python
secure_url: typing.Union[IResolvable, typing.List[DataNewrelicNotificationDestinationSecureUrl]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrl">DataNewrelicNotificationDestinationSecureUrl</a>]]

secure_url block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.65.0/docs/data-sources/notification_destination#secure_url DataNewrelicNotificationDestination#secure_url}

---

### DataNewrelicNotificationDestinationProperty <a name="DataNewrelicNotificationDestinationProperty" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationProperty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationProperty.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import data_newrelic_notification_destination

dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationProperty()
```


### DataNewrelicNotificationDestinationSecureUrl <a name="DataNewrelicNotificationDestinationSecureUrl" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrl.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import data_newrelic_notification_destination

dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrl(
  prefix: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrl.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.65.0/docs/data-sources/notification_destination#prefix DataNewrelicNotificationDestination#prefix}. |

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrl.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.65.0/docs/data-sources/notification_destination#prefix DataNewrelicNotificationDestination#prefix}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataNewrelicNotificationDestinationPropertyList <a name="DataNewrelicNotificationDestinationPropertyList" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import data_newrelic_notification_destination

dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataNewrelicNotificationDestinationPropertyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataNewrelicNotificationDestinationPropertyOutputReference <a name="DataNewrelicNotificationDestinationPropertyOutputReference" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import data_newrelic_notification_destination

dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.property.displayValue">display_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationProperty">DataNewrelicNotificationDestinationProperty</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_value`<sup>Required</sup> <a name="display_value" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.property.displayValue"></a>

```python
display_value: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationPropertyOutputReference.property.internalValue"></a>

```python
internal_value: DataNewrelicNotificationDestinationProperty
```

- *Type:* <a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationProperty">DataNewrelicNotificationDestinationProperty</a>

---


### DataNewrelicNotificationDestinationSecureUrlList <a name="DataNewrelicNotificationDestinationSecureUrlList" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlList.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import data_newrelic_notification_destination

dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataNewrelicNotificationDestinationSecureUrlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrl">DataNewrelicNotificationDestinationSecureUrl</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataNewrelicNotificationDestinationSecureUrl]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrl">DataNewrelicNotificationDestinationSecureUrl</a>]]

---


### DataNewrelicNotificationDestinationSecureUrlOutputReference <a name="DataNewrelicNotificationDestinationSecureUrlOutputReference" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import data_newrelic_notification_destination

dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrl">DataNewrelicNotificationDestinationSecureUrl</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrlOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataNewrelicNotificationDestinationSecureUrl]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-newrelic.dataNewrelicNotificationDestination.DataNewrelicNotificationDestinationSecureUrl">DataNewrelicNotificationDestinationSecureUrl</a>]

---



