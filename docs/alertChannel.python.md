# `alertChannel` Submodule <a name="`alertChannel` Submodule" id="@cdktf/provider-newrelic.alertChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AlertChannel <a name="AlertChannel" id="@cdktf/provider-newrelic.alertChannel.AlertChannel"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/alert_channel newrelic_alert_channel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import alert_channel

alertChannel.AlertChannel(
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
  type: str,
  account_id: typing.Union[int, float] = None,
  config: AlertChannelConfigA = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.name">name</a></code> | <code>str</code> | (Required) The name of the channel. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.type">type</a></code> | <code>str</code> | (Required) The type of channel. One of: (webhook, email, opsgenie, pagerduty, slack, user, victorops). |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | The New Relic account ID where you want to create alert channels. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA">AlertChannelConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/alert_channel#id AlertChannel#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.name"></a>

- *Type:* str

(Required) The name of the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/alert_channel#name AlertChannel#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.type"></a>

- *Type:* str

(Required) The type of channel. One of: (webhook, email, opsgenie, pagerduty, slack, user, victorops).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/alert_channel#type AlertChannel#type}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.accountId"></a>

- *Type:* typing.Union[int, float]

The New Relic account ID where you want to create alert channels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/alert_channel#account_id AlertChannel#account_id}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA">AlertChannelConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/alert_channel#config AlertChannel#config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/alert_channel#id AlertChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.putConfig">put_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.resetConfig">reset_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_config` <a name="put_config" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.putConfig"></a>

```python
def put_config(
  api_key: str = None,
  auth_password: str = None,
  auth_type: str = None,
  auth_username: str = None,
  base_url: str = None,
  channel: str = None,
  headers: typing.Mapping[str] = None,
  headers_string: str = None,
  include_json_attachment: str = None,
  key: str = None,
  payload: typing.Mapping[str] = None,
  payload_string: str = None,
  payload_type: str = None,
  recipients: str = None,
  region: str = None,
  route_key: str = None,
  service_key: str = None,
  tags: str = None,
  teams: str = None,
  url: str = None,
  user_id: str = None
) -> None
```

###### `api_key`<sup>Optional</sup> <a name="api_key" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.putConfig.parameter.apiKey"></a>

- *Type:* str

The API key for integrating with OpsGenie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/alert_channel#api_key AlertChannel#api_key}

---

###### `auth_password`<sup>Optional</sup> <a name="auth_password" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.putConfig.parameter.authPassword"></a>

- *Type:* str

Specifies an authentication password for use with a channel. Supported by the webhook channel type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/alert_channel#auth_password AlertChannel#auth_password}

---

###### `auth_type`<sup>Optional</sup> <a name="auth_type" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.putConfig.parameter.authType"></a>

- *Type:* str

Specifies an authentication method for use with a channel.

Supported by the webhook channel type. Only HTTP basic authentication is currently supported via the value BASIC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/alert_channel#auth_type AlertChannel#auth_type}

---

###### `auth_username`<sup>Optional</sup> <a name="auth_username" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.putConfig.parameter.authUsername"></a>

- *Type:* str

Specifies an authentication username for use with a channel. Supported by the webhook channel type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/alert_channel#auth_username AlertChannel#auth_username}

---

###### `base_url`<sup>Optional</sup> <a name="base_url" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.putConfig.parameter.baseUrl"></a>

- *Type:* str

The base URL of the webhook destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/alert_channel#base_url AlertChannel#base_url}

---

###### `channel`<sup>Optional</sup> <a name="channel" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.putConfig.parameter.channel"></a>

- *Type:* str

The Slack channel to send notifications to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/alert_channel#channel AlertChannel#channel}

---

###### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.putConfig.parameter.headers"></a>

- *Type:* typing.Mapping[str]

A map of key/value pairs that represents extra HTTP headers to be sent along with the webhook payload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/alert_channel#headers AlertChannel#headers}

---

###### `headers_string`<sup>Optional</sup> <a name="headers_string" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.putConfig.parameter.headersString"></a>

- *Type:* str

Use instead of headers if the desired payload is more complex than a list of key/value pairs (e.g. a set of headers that makes use of nested objects). The value provided should be a valid JSON string with escaped double quotes. Conflicts with headers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/alert_channel#headers_string AlertChannel#headers_string}

---

###### `include_json_attachment`<sup>Optional</sup> <a name="include_json_attachment" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.putConfig.parameter.includeJsonAttachment"></a>

- *Type:* str

true or false.

Flag for whether or not to attach a JSON document containing information about the associated alert to the email that is sent to recipients.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/alert_channel#include_json_attachment AlertChannel#include_json_attachment}

---

###### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.putConfig.parameter.key"></a>

- *Type:* str

The key for integrating with VictorOps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/alert_channel#key AlertChannel#key}

---

###### `payload`<sup>Optional</sup> <a name="payload" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.putConfig.parameter.payload"></a>

- *Type:* typing.Mapping[str]

A map of key/value pairs that represents the webhook payload. Must provide payload_type if setting this argument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/alert_channel#payload AlertChannel#payload}

---

###### `payload_string`<sup>Optional</sup> <a name="payload_string" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.putConfig.parameter.payloadString"></a>

- *Type:* str

Use instead of payload if the desired payload is more complex than a list of key/value pairs (e.g. a payload that makes use of nested objects). The value provided should be a valid JSON string with escaped double quotes. Conflicts with payload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/alert_channel#payload_string AlertChannel#payload_string}

---

###### `payload_type`<sup>Optional</sup> <a name="payload_type" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.putConfig.parameter.payloadType"></a>

- *Type:* str

Can either be application/json or application/x-www-form-urlencoded. The payload_type argument is required if payload is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/alert_channel#payload_type AlertChannel#payload_type}

---

###### `recipients`<sup>Optional</sup> <a name="recipients" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.putConfig.parameter.recipients"></a>

- *Type:* str

A set of recipients for targeting notifications. Multiple values are comma separated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/alert_channel#recipients AlertChannel#recipients}

---

###### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.putConfig.parameter.region"></a>

- *Type:* str

The data center region to store your data. Valid values are US and EU. Default is US.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/alert_channel#region AlertChannel#region}

---

###### `route_key`<sup>Optional</sup> <a name="route_key" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.putConfig.parameter.routeKey"></a>

- *Type:* str

The route key for integrating with VictorOps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/alert_channel#route_key AlertChannel#route_key}

---

###### `service_key`<sup>Optional</sup> <a name="service_key" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.putConfig.parameter.serviceKey"></a>

- *Type:* str

Specifies the service key for integrating with Pagerduty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/alert_channel#service_key AlertChannel#service_key}

---

###### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.putConfig.parameter.tags"></a>

- *Type:* str

A set of tags for targeting notifications. Multiple values are comma separated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/alert_channel#tags AlertChannel#tags}

---

###### `teams`<sup>Optional</sup> <a name="teams" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.putConfig.parameter.teams"></a>

- *Type:* str

A set of teams for targeting notifications. Multiple values are comma separated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/alert_channel#teams AlertChannel#teams}

---

###### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.putConfig.parameter.url"></a>

- *Type:* str

Your organization's Slack URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/alert_channel#url AlertChannel#url}

---

###### `user_id`<sup>Optional</sup> <a name="user_id" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.putConfig.parameter.userId"></a>

- *Type:* str

The user ID for use with the user channel type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/alert_channel#user_id AlertChannel#user_id}

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_config` <a name="reset_config" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.resetConfig"></a>

```python
def reset_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AlertChannel resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.isConstruct"></a>

```python
from cdktf_cdktf_provider_newrelic import alert_channel

alertChannel.AlertChannel.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_newrelic import alert_channel

alertChannel.AlertChannel.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_newrelic import alert_channel

alertChannel.AlertChannel.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_newrelic import alert_channel

alertChannel.AlertChannel.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AlertChannel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AlertChannel to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AlertChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/alert_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AlertChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.config">config</a></code> | <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference">AlertChannelConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.accountIdInput">account_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.configInput">config_input</a></code> | <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA">AlertChannelConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.config"></a>

```python
config: AlertChannelConfigAOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference">AlertChannelConfigAOutputReference</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.accountIdInput"></a>

```python
account_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `config_input`<sup>Optional</sup> <a name="config_input" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.configInput"></a>

```python
config_input: AlertChannelConfigA
```

- *Type:* <a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA">AlertChannelConfigA</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AlertChannelConfig <a name="AlertChannelConfig" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import alert_channel

alertChannel.AlertChannelConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  type: str,
  account_id: typing.Union[int, float] = None,
  config: AlertChannelConfigA = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.name">name</a></code> | <code>str</code> | (Required) The name of the channel. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.type">type</a></code> | <code>str</code> | (Required) The type of channel. One of: (webhook, email, opsgenie, pagerduty, slack, user, victorops). |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | The New Relic account ID where you want to create alert channels. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.config">config</a></code> | <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA">AlertChannelConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/alert_channel#id AlertChannel#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.name"></a>

```python
name: str
```

- *Type:* str

(Required) The name of the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/alert_channel#name AlertChannel#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.type"></a>

```python
type: str
```

- *Type:* str

(Required) The type of channel. One of: (webhook, email, opsgenie, pagerduty, slack, user, victorops).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/alert_channel#type AlertChannel#type}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The New Relic account ID where you want to create alert channels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/alert_channel#account_id AlertChannel#account_id}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.config"></a>

```python
config: AlertChannelConfigA
```

- *Type:* <a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA">AlertChannelConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/alert_channel#config AlertChannel#config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/alert_channel#id AlertChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### AlertChannelConfigA <a name="AlertChannelConfigA" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import alert_channel

alertChannel.AlertChannelConfigA(
  api_key: str = None,
  auth_password: str = None,
  auth_type: str = None,
  auth_username: str = None,
  base_url: str = None,
  channel: str = None,
  headers: typing.Mapping[str] = None,
  headers_string: str = None,
  include_json_attachment: str = None,
  key: str = None,
  payload: typing.Mapping[str] = None,
  payload_string: str = None,
  payload_type: str = None,
  recipients: str = None,
  region: str = None,
  route_key: str = None,
  service_key: str = None,
  tags: str = None,
  teams: str = None,
  url: str = None,
  user_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.apiKey">api_key</a></code> | <code>str</code> | The API key for integrating with OpsGenie. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.authPassword">auth_password</a></code> | <code>str</code> | Specifies an authentication password for use with a channel. Supported by the webhook channel type. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.authType">auth_type</a></code> | <code>str</code> | Specifies an authentication method for use with a channel. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.authUsername">auth_username</a></code> | <code>str</code> | Specifies an authentication username for use with a channel. Supported by the webhook channel type. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.baseUrl">base_url</a></code> | <code>str</code> | The base URL of the webhook destination. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.channel">channel</a></code> | <code>str</code> | The Slack channel to send notifications to. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.headers">headers</a></code> | <code>typing.Mapping[str]</code> | A map of key/value pairs that represents extra HTTP headers to be sent along with the webhook payload. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.headersString">headers_string</a></code> | <code>str</code> | Use instead of headers if the desired payload is more complex than a list of key/value pairs (e.g. a set of headers that makes use of nested objects). The value provided should be a valid JSON string with escaped double quotes. Conflicts with headers. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.includeJsonAttachment">include_json_attachment</a></code> | <code>str</code> | true or false. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.key">key</a></code> | <code>str</code> | The key for integrating with VictorOps. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.payload">payload</a></code> | <code>typing.Mapping[str]</code> | A map of key/value pairs that represents the webhook payload. Must provide payload_type if setting this argument. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.payloadString">payload_string</a></code> | <code>str</code> | Use instead of payload if the desired payload is more complex than a list of key/value pairs (e.g. a payload that makes use of nested objects). The value provided should be a valid JSON string with escaped double quotes. Conflicts with payload. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.payloadType">payload_type</a></code> | <code>str</code> | Can either be application/json or application/x-www-form-urlencoded. The payload_type argument is required if payload is set. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.recipients">recipients</a></code> | <code>str</code> | A set of recipients for targeting notifications. Multiple values are comma separated. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.region">region</a></code> | <code>str</code> | The data center region to store your data. Valid values are US and EU. Default is US. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.routeKey">route_key</a></code> | <code>str</code> | The route key for integrating with VictorOps. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.serviceKey">service_key</a></code> | <code>str</code> | Specifies the service key for integrating with Pagerduty. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.tags">tags</a></code> | <code>str</code> | A set of tags for targeting notifications. Multiple values are comma separated. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.teams">teams</a></code> | <code>str</code> | A set of teams for targeting notifications. Multiple values are comma separated. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.url">url</a></code> | <code>str</code> | Your organization's Slack URL. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.userId">user_id</a></code> | <code>str</code> | The user ID for use with the user channel type. |

---

##### `api_key`<sup>Optional</sup> <a name="api_key" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.apiKey"></a>

```python
api_key: str
```

- *Type:* str

The API key for integrating with OpsGenie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/alert_channel#api_key AlertChannel#api_key}

---

##### `auth_password`<sup>Optional</sup> <a name="auth_password" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.authPassword"></a>

```python
auth_password: str
```

- *Type:* str

Specifies an authentication password for use with a channel. Supported by the webhook channel type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/alert_channel#auth_password AlertChannel#auth_password}

---

##### `auth_type`<sup>Optional</sup> <a name="auth_type" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

Specifies an authentication method for use with a channel.

Supported by the webhook channel type. Only HTTP basic authentication is currently supported via the value BASIC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/alert_channel#auth_type AlertChannel#auth_type}

---

##### `auth_username`<sup>Optional</sup> <a name="auth_username" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.authUsername"></a>

```python
auth_username: str
```

- *Type:* str

Specifies an authentication username for use with a channel. Supported by the webhook channel type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/alert_channel#auth_username AlertChannel#auth_username}

---

##### `base_url`<sup>Optional</sup> <a name="base_url" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.baseUrl"></a>

```python
base_url: str
```

- *Type:* str

The base URL of the webhook destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/alert_channel#base_url AlertChannel#base_url}

---

##### `channel`<sup>Optional</sup> <a name="channel" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.channel"></a>

```python
channel: str
```

- *Type:* str

The Slack channel to send notifications to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/alert_channel#channel AlertChannel#channel}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.headers"></a>

```python
headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map of key/value pairs that represents extra HTTP headers to be sent along with the webhook payload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/alert_channel#headers AlertChannel#headers}

---

##### `headers_string`<sup>Optional</sup> <a name="headers_string" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.headersString"></a>

```python
headers_string: str
```

- *Type:* str

Use instead of headers if the desired payload is more complex than a list of key/value pairs (e.g. a set of headers that makes use of nested objects). The value provided should be a valid JSON string with escaped double quotes. Conflicts with headers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/alert_channel#headers_string AlertChannel#headers_string}

---

##### `include_json_attachment`<sup>Optional</sup> <a name="include_json_attachment" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.includeJsonAttachment"></a>

```python
include_json_attachment: str
```

- *Type:* str

true or false.

Flag for whether or not to attach a JSON document containing information about the associated alert to the email that is sent to recipients.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/alert_channel#include_json_attachment AlertChannel#include_json_attachment}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.key"></a>

```python
key: str
```

- *Type:* str

The key for integrating with VictorOps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/alert_channel#key AlertChannel#key}

---

##### `payload`<sup>Optional</sup> <a name="payload" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.payload"></a>

```python
payload: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map of key/value pairs that represents the webhook payload. Must provide payload_type if setting this argument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/alert_channel#payload AlertChannel#payload}

---

##### `payload_string`<sup>Optional</sup> <a name="payload_string" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.payloadString"></a>

```python
payload_string: str
```

- *Type:* str

Use instead of payload if the desired payload is more complex than a list of key/value pairs (e.g. a payload that makes use of nested objects). The value provided should be a valid JSON string with escaped double quotes. Conflicts with payload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/alert_channel#payload_string AlertChannel#payload_string}

---

##### `payload_type`<sup>Optional</sup> <a name="payload_type" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.payloadType"></a>

```python
payload_type: str
```

- *Type:* str

Can either be application/json or application/x-www-form-urlencoded. The payload_type argument is required if payload is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/alert_channel#payload_type AlertChannel#payload_type}

---

##### `recipients`<sup>Optional</sup> <a name="recipients" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.recipients"></a>

```python
recipients: str
```

- *Type:* str

A set of recipients for targeting notifications. Multiple values are comma separated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/alert_channel#recipients AlertChannel#recipients}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.region"></a>

```python
region: str
```

- *Type:* str

The data center region to store your data. Valid values are US and EU. Default is US.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/alert_channel#region AlertChannel#region}

---

##### `route_key`<sup>Optional</sup> <a name="route_key" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.routeKey"></a>

```python
route_key: str
```

- *Type:* str

The route key for integrating with VictorOps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/alert_channel#route_key AlertChannel#route_key}

---

##### `service_key`<sup>Optional</sup> <a name="service_key" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.serviceKey"></a>

```python
service_key: str
```

- *Type:* str

Specifies the service key for integrating with Pagerduty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/alert_channel#service_key AlertChannel#service_key}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.tags"></a>

```python
tags: str
```

- *Type:* str

A set of tags for targeting notifications. Multiple values are comma separated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/alert_channel#tags AlertChannel#tags}

---

##### `teams`<sup>Optional</sup> <a name="teams" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.teams"></a>

```python
teams: str
```

- *Type:* str

A set of teams for targeting notifications. Multiple values are comma separated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/alert_channel#teams AlertChannel#teams}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.url"></a>

```python
url: str
```

- *Type:* str

Your organization's Slack URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/alert_channel#url AlertChannel#url}

---

##### `user_id`<sup>Optional</sup> <a name="user_id" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.userId"></a>

```python
user_id: str
```

- *Type:* str

The user ID for use with the user channel type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/alert_channel#user_id AlertChannel#user_id}

---

## Classes <a name="Classes" id="Classes"></a>

### AlertChannelConfigAOutputReference <a name="AlertChannelConfigAOutputReference" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import alert_channel

alertChannel.AlertChannelConfigAOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetApiKey">reset_api_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetAuthPassword">reset_auth_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetAuthType">reset_auth_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetAuthUsername">reset_auth_username</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetBaseUrl">reset_base_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetChannel">reset_channel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetHeaders">reset_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetHeadersString">reset_headers_string</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetIncludeJsonAttachment">reset_include_json_attachment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetPayload">reset_payload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetPayloadString">reset_payload_string</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetPayloadType">reset_payload_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetRecipients">reset_recipients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetRouteKey">reset_route_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetServiceKey">reset_service_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetTeams">reset_teams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetUrl">reset_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetUserId">reset_user_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_api_key` <a name="reset_api_key" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetApiKey"></a>

```python
def reset_api_key() -> None
```

##### `reset_auth_password` <a name="reset_auth_password" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetAuthPassword"></a>

```python
def reset_auth_password() -> None
```

##### `reset_auth_type` <a name="reset_auth_type" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetAuthType"></a>

```python
def reset_auth_type() -> None
```

##### `reset_auth_username` <a name="reset_auth_username" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetAuthUsername"></a>

```python
def reset_auth_username() -> None
```

##### `reset_base_url` <a name="reset_base_url" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetBaseUrl"></a>

```python
def reset_base_url() -> None
```

##### `reset_channel` <a name="reset_channel" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetChannel"></a>

```python
def reset_channel() -> None
```

##### `reset_headers` <a name="reset_headers" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetHeaders"></a>

```python
def reset_headers() -> None
```

##### `reset_headers_string` <a name="reset_headers_string" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetHeadersString"></a>

```python
def reset_headers_string() -> None
```

##### `reset_include_json_attachment` <a name="reset_include_json_attachment" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetIncludeJsonAttachment"></a>

```python
def reset_include_json_attachment() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_payload` <a name="reset_payload" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetPayload"></a>

```python
def reset_payload() -> None
```

##### `reset_payload_string` <a name="reset_payload_string" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetPayloadString"></a>

```python
def reset_payload_string() -> None
```

##### `reset_payload_type` <a name="reset_payload_type" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetPayloadType"></a>

```python
def reset_payload_type() -> None
```

##### `reset_recipients` <a name="reset_recipients" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetRecipients"></a>

```python
def reset_recipients() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_route_key` <a name="reset_route_key" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetRouteKey"></a>

```python
def reset_route_key() -> None
```

##### `reset_service_key` <a name="reset_service_key" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetServiceKey"></a>

```python
def reset_service_key() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_teams` <a name="reset_teams" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetTeams"></a>

```python
def reset_teams() -> None
```

##### `reset_url` <a name="reset_url" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetUrl"></a>

```python
def reset_url() -> None
```

##### `reset_user_id` <a name="reset_user_id" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetUserId"></a>

```python
def reset_user_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.apiKeyInput">api_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.authPasswordInput">auth_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.authTypeInput">auth_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.authUsernameInput">auth_username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.baseUrlInput">base_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.channelInput">channel_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.headersInput">headers_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.headersStringInput">headers_string_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.includeJsonAttachmentInput">include_json_attachment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.payloadInput">payload_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.payloadStringInput">payload_string_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.payloadTypeInput">payload_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.recipientsInput">recipients_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.routeKeyInput">route_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.serviceKeyInput">service_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.tagsInput">tags_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.teamsInput">teams_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.userIdInput">user_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.apiKey">api_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.authPassword">auth_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.authType">auth_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.authUsername">auth_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.baseUrl">base_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.channel">channel</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.headers">headers</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.headersString">headers_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.includeJsonAttachment">include_json_attachment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.payload">payload</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.payloadString">payload_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.payloadType">payload_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.recipients">recipients</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.routeKey">route_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.serviceKey">service_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.tags">tags</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.teams">teams</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.userId">user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA">AlertChannelConfigA</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key_input`<sup>Optional</sup> <a name="api_key_input" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.apiKeyInput"></a>

```python
api_key_input: str
```

- *Type:* str

---

##### `auth_password_input`<sup>Optional</sup> <a name="auth_password_input" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.authPasswordInput"></a>

```python
auth_password_input: str
```

- *Type:* str

---

##### `auth_type_input`<sup>Optional</sup> <a name="auth_type_input" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.authTypeInput"></a>

```python
auth_type_input: str
```

- *Type:* str

---

##### `auth_username_input`<sup>Optional</sup> <a name="auth_username_input" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.authUsernameInput"></a>

```python
auth_username_input: str
```

- *Type:* str

---

##### `base_url_input`<sup>Optional</sup> <a name="base_url_input" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.baseUrlInput"></a>

```python
base_url_input: str
```

- *Type:* str

---

##### `channel_input`<sup>Optional</sup> <a name="channel_input" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.channelInput"></a>

```python
channel_input: str
```

- *Type:* str

---

##### `headers_input`<sup>Optional</sup> <a name="headers_input" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.headersInput"></a>

```python
headers_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `headers_string_input`<sup>Optional</sup> <a name="headers_string_input" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.headersStringInput"></a>

```python
headers_string_input: str
```

- *Type:* str

---

##### `include_json_attachment_input`<sup>Optional</sup> <a name="include_json_attachment_input" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.includeJsonAttachmentInput"></a>

```python
include_json_attachment_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `payload_input`<sup>Optional</sup> <a name="payload_input" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.payloadInput"></a>

```python
payload_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `payload_string_input`<sup>Optional</sup> <a name="payload_string_input" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.payloadStringInput"></a>

```python
payload_string_input: str
```

- *Type:* str

---

##### `payload_type_input`<sup>Optional</sup> <a name="payload_type_input" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.payloadTypeInput"></a>

```python
payload_type_input: str
```

- *Type:* str

---

##### `recipients_input`<sup>Optional</sup> <a name="recipients_input" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.recipientsInput"></a>

```python
recipients_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `route_key_input`<sup>Optional</sup> <a name="route_key_input" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.routeKeyInput"></a>

```python
route_key_input: str
```

- *Type:* str

---

##### `service_key_input`<sup>Optional</sup> <a name="service_key_input" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.serviceKeyInput"></a>

```python
service_key_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.tagsInput"></a>

```python
tags_input: str
```

- *Type:* str

---

##### `teams_input`<sup>Optional</sup> <a name="teams_input" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.teamsInput"></a>

```python
teams_input: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `user_id_input`<sup>Optional</sup> <a name="user_id_input" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.userIdInput"></a>

```python
user_id_input: str
```

- *Type:* str

---

##### `api_key`<sup>Required</sup> <a name="api_key" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.apiKey"></a>

```python
api_key: str
```

- *Type:* str

---

##### `auth_password`<sup>Required</sup> <a name="auth_password" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.authPassword"></a>

```python
auth_password: str
```

- *Type:* str

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

---

##### `auth_username`<sup>Required</sup> <a name="auth_username" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.authUsername"></a>

```python
auth_username: str
```

- *Type:* str

---

##### `base_url`<sup>Required</sup> <a name="base_url" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.baseUrl"></a>

```python
base_url: str
```

- *Type:* str

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.channel"></a>

```python
channel: str
```

- *Type:* str

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.headers"></a>

```python
headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `headers_string`<sup>Required</sup> <a name="headers_string" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.headersString"></a>

```python
headers_string: str
```

- *Type:* str

---

##### `include_json_attachment`<sup>Required</sup> <a name="include_json_attachment" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.includeJsonAttachment"></a>

```python
include_json_attachment: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.payload"></a>

```python
payload: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `payload_string`<sup>Required</sup> <a name="payload_string" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.payloadString"></a>

```python
payload_string: str
```

- *Type:* str

---

##### `payload_type`<sup>Required</sup> <a name="payload_type" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.payloadType"></a>

```python
payload_type: str
```

- *Type:* str

---

##### `recipients`<sup>Required</sup> <a name="recipients" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.recipients"></a>

```python
recipients: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `route_key`<sup>Required</sup> <a name="route_key" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.routeKey"></a>

```python
route_key: str
```

- *Type:* str

---

##### `service_key`<sup>Required</sup> <a name="service_key" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.serviceKey"></a>

```python
service_key: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.tags"></a>

```python
tags: str
```

- *Type:* str

---

##### `teams`<sup>Required</sup> <a name="teams" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.teams"></a>

```python
teams: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.userId"></a>

```python
user_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.internalValue"></a>

```python
internal_value: AlertChannelConfigA
```

- *Type:* <a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA">AlertChannelConfigA</a>

---



