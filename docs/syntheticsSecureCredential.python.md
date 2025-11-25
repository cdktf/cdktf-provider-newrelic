# `syntheticsSecureCredential` Submodule <a name="`syntheticsSecureCredential` Submodule" id="@cdktf/provider-newrelic.syntheticsSecureCredential"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SyntheticsSecureCredential <a name="SyntheticsSecureCredential" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/synthetics_secure_credential newrelic_synthetics_secure_credential}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import synthetics_secure_credential

syntheticsSecureCredential.SyntheticsSecureCredential(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  key: str,
  value: str,
  account_id: typing.Union[int, float] = None,
  description: str = None,
  id: str = None,
  last_updated: str = None,
  timeouts: SyntheticsSecureCredentialTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.Initializer.parameter.key">key</a></code> | <code>str</code> | The secure credential's key name. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.Initializer.parameter.value">value</a></code> | <code>str</code> | The secure credential's value. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.Initializer.parameter.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | The New Relic account ID where you want to create the secure credential. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.Initializer.parameter.description">description</a></code> | <code>str</code> | The secure credential's description. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/synthetics_secure_credential#id SyntheticsSecureCredential#id}. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.Initializer.parameter.lastUpdated">last_updated</a></code> | <code>str</code> | The time the secure credential was last updated. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialTimeouts">SyntheticsSecureCredentialTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.Initializer.parameter.key"></a>

- *Type:* str

The secure credential's key name.

Regardless of the case used in the configuration, the provider will provide an upcased key to the underlying API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/synthetics_secure_credential#key SyntheticsSecureCredential#key}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.Initializer.parameter.value"></a>

- *Type:* str

The secure credential's value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/synthetics_secure_credential#value SyntheticsSecureCredential#value}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.Initializer.parameter.accountId"></a>

- *Type:* typing.Union[int, float]

The New Relic account ID where you want to create the secure credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/synthetics_secure_credential#account_id SyntheticsSecureCredential#account_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.Initializer.parameter.description"></a>

- *Type:* str

The secure credential's description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/synthetics_secure_credential#description SyntheticsSecureCredential#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/synthetics_secure_credential#id SyntheticsSecureCredential#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `last_updated`<sup>Optional</sup> <a name="last_updated" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.Initializer.parameter.lastUpdated"></a>

- *Type:* str

The time the secure credential was last updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/synthetics_secure_credential#last_updated SyntheticsSecureCredential#last_updated}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialTimeouts">SyntheticsSecureCredentialTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/synthetics_secure_credential#timeouts SyntheticsSecureCredential#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.resetLastUpdated">reset_last_updated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/synthetics_secure_credential#read SyntheticsSecureCredential#read}.

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_last_updated` <a name="reset_last_updated" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.resetLastUpdated"></a>

```python
def reset_last_updated() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SyntheticsSecureCredential resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.isConstruct"></a>

```python
from cdktf_cdktf_provider_newrelic import synthetics_secure_credential

syntheticsSecureCredential.SyntheticsSecureCredential.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_newrelic import synthetics_secure_credential

syntheticsSecureCredential.SyntheticsSecureCredential.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_newrelic import synthetics_secure_credential

syntheticsSecureCredential.SyntheticsSecureCredential.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_newrelic import synthetics_secure_credential

syntheticsSecureCredential.SyntheticsSecureCredential.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SyntheticsSecureCredential resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SyntheticsSecureCredential to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SyntheticsSecureCredential that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/synthetics_secure_credential#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SyntheticsSecureCredential to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialTimeoutsOutputReference">SyntheticsSecureCredentialTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.property.accountIdInput">account_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.property.lastUpdatedInput">last_updated_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialTimeouts">SyntheticsSecureCredentialTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.property.lastUpdated">last_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.property.value">value</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.property.timeouts"></a>

```python
timeouts: SyntheticsSecureCredentialTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialTimeoutsOutputReference">SyntheticsSecureCredentialTimeoutsOutputReference</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.property.accountIdInput"></a>

```python
account_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `last_updated_input`<sup>Optional</sup> <a name="last_updated_input" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.property.lastUpdatedInput"></a>

```python
last_updated_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | SyntheticsSecureCredentialTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialTimeouts">SyntheticsSecureCredentialTimeouts</a>

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `last_updated`<sup>Required</sup> <a name="last_updated" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.property.lastUpdated"></a>

```python
last_updated: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.property.value"></a>

```python
value: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredential.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SyntheticsSecureCredentialConfig <a name="SyntheticsSecureCredentialConfig" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import synthetics_secure_credential

syntheticsSecureCredential.SyntheticsSecureCredentialConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  key: str,
  value: str,
  account_id: typing.Union[int, float] = None,
  description: str = None,
  id: str = None,
  last_updated: str = None,
  timeouts: SyntheticsSecureCredentialTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialConfig.property.key">key</a></code> | <code>str</code> | The secure credential's key name. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialConfig.property.value">value</a></code> | <code>str</code> | The secure credential's value. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialConfig.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | The New Relic account ID where you want to create the secure credential. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialConfig.property.description">description</a></code> | <code>str</code> | The secure credential's description. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/synthetics_secure_credential#id SyntheticsSecureCredential#id}. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialConfig.property.lastUpdated">last_updated</a></code> | <code>str</code> | The time the secure credential was last updated. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialTimeouts">SyntheticsSecureCredentialTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialConfig.property.key"></a>

```python
key: str
```

- *Type:* str

The secure credential's key name.

Regardless of the case used in the configuration, the provider will provide an upcased key to the underlying API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/synthetics_secure_credential#key SyntheticsSecureCredential#key}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialConfig.property.value"></a>

```python
value: str
```

- *Type:* str

The secure credential's value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/synthetics_secure_credential#value SyntheticsSecureCredential#value}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialConfig.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The New Relic account ID where you want to create the secure credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/synthetics_secure_credential#account_id SyntheticsSecureCredential#account_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The secure credential's description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/synthetics_secure_credential#description SyntheticsSecureCredential#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/synthetics_secure_credential#id SyntheticsSecureCredential#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `last_updated`<sup>Optional</sup> <a name="last_updated" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialConfig.property.lastUpdated"></a>

```python
last_updated: str
```

- *Type:* str

The time the secure credential was last updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/synthetics_secure_credential#last_updated SyntheticsSecureCredential#last_updated}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialConfig.property.timeouts"></a>

```python
timeouts: SyntheticsSecureCredentialTimeouts
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialTimeouts">SyntheticsSecureCredentialTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/synthetics_secure_credential#timeouts SyntheticsSecureCredential#timeouts}

---

### SyntheticsSecureCredentialTimeouts <a name="SyntheticsSecureCredentialTimeouts" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import synthetics_secure_credential

syntheticsSecureCredential.SyntheticsSecureCredentialTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/synthetics_secure_credential#read SyntheticsSecureCredential#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/synthetics_secure_credential#read SyntheticsSecureCredential#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### SyntheticsSecureCredentialTimeoutsOutputReference <a name="SyntheticsSecureCredentialTimeoutsOutputReference" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import synthetics_secure_credential

syntheticsSecureCredential.SyntheticsSecureCredentialTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialTimeouts">SyntheticsSecureCredentialTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SyntheticsSecureCredentialTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.syntheticsSecureCredential.SyntheticsSecureCredentialTimeouts">SyntheticsSecureCredentialTimeouts</a>

---



