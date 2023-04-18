# `newrelic_cloud_gcp_link_account`

Refer to the Terraform Registory for docs: [`newrelic_cloud_gcp_link_account`](https://www.terraform.io/docs/providers/newrelic/r/cloud_gcp_link_account).

# `cloudGcpLinkAccount` Submodule <a name="`cloudGcpLinkAccount` Submodule" id="@cdktf/provider-newrelic.cloudGcpLinkAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudGcpLinkAccount <a name="CloudGcpLinkAccount" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_gcp_link_account newrelic_cloud_gcp_link_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_gcp_link_account

cloudGcpLinkAccount.CloudGcpLinkAccount(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  project_id: str,
  account_id: typing.Union[int, float] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.Initializer.parameter.name">name</a></code> | <code>str</code> | name of the linked account. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | project id of the Gcp account. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.Initializer.parameter.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | accountID of newrelic account. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_gcp_link_account#id CloudGcpLinkAccount#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.Initializer.parameter.name"></a>

- *Type:* str

name of the linked account.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_gcp_link_account#name CloudGcpLinkAccount#name}

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.Initializer.parameter.projectId"></a>

- *Type:* str

project id of the Gcp account.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_gcp_link_account#project_id CloudGcpLinkAccount#project_id}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.Initializer.parameter.accountId"></a>

- *Type:* typing.Union[int, float]

accountID of newrelic account.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_gcp_link_account#account_id CloudGcpLinkAccount#account_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_gcp_link_account#id CloudGcpLinkAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.isConstruct"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_gcp_link_account

cloudGcpLinkAccount.CloudGcpLinkAccount.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_gcp_link_account

cloudGcpLinkAccount.CloudGcpLinkAccount.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_gcp_link_account

cloudGcpLinkAccount.CloudGcpLinkAccount.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.property.accountIdInput">account_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.property.accountIdInput"></a>

```python
account_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccount.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudGcpLinkAccountConfig <a name="CloudGcpLinkAccountConfig" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccountConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_gcp_link_account

cloudGcpLinkAccount.CloudGcpLinkAccountConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  project_id: str,
  account_id: typing.Union[int, float] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccountConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccountConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccountConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccountConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccountConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccountConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccountConfig.property.name">name</a></code> | <code>str</code> | name of the linked account. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccountConfig.property.projectId">project_id</a></code> | <code>str</code> | project id of the Gcp account. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccountConfig.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | accountID of newrelic account. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccountConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_gcp_link_account#id CloudGcpLinkAccount#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccountConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccountConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccountConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccountConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccountConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccountConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccountConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccountConfig.property.name"></a>

```python
name: str
```

- *Type:* str

name of the linked account.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_gcp_link_account#name CloudGcpLinkAccount#name}

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccountConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

project id of the Gcp account.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_gcp_link_account#project_id CloudGcpLinkAccount#project_id}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccountConfig.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

accountID of newrelic account.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_gcp_link_account#account_id CloudGcpLinkAccount#account_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.cloudGcpLinkAccount.CloudGcpLinkAccountConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/cloud_gcp_link_account#id CloudGcpLinkAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



