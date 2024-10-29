# `notificationChannel` Submodule <a name="`notificationChannel` Submodule" id="@cdktf/provider-newrelic.notificationChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NotificationChannel <a name="NotificationChannel" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/notification_channel newrelic_notification_channel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import notification_channel

notificationChannel.NotificationChannel(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destination_id: str,
  name: str,
  product: str,
  property: typing.Union[IResolvable, typing.List[NotificationChannelProperty]],
  type: str,
  account_id: typing.Union[int, float] = None,
  active: typing.Union[bool, IResolvable] = None,
  id: str = None,
  timeouts: NotificationChannelTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.Initializer.parameter.destinationId">destination_id</a></code> | <code>str</code> | (Required) The id of the destination. |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.Initializer.parameter.name">name</a></code> | <code>str</code> | (Required) The name of the channel. |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.Initializer.parameter.product">product</a></code> | <code>str</code> | (Required) The type of the channel product. One of: (DISCUSSIONS, ERROR_TRACKING, IINT). |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.Initializer.parameter.property">property</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelProperty">NotificationChannelProperty</a>]]</code> | property block. |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.Initializer.parameter.type">type</a></code> | <code>str</code> | (Required) The type of the channel. |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.Initializer.parameter.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | The account id of the channel. |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.Initializer.parameter.active">active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether the channel is active. |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/notification_channel#id NotificationChannel#id}. |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeouts">NotificationChannelTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination_id`<sup>Required</sup> <a name="destination_id" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.Initializer.parameter.destinationId"></a>

- *Type:* str

(Required) The id of the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/notification_channel#destination_id NotificationChannel#destination_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.Initializer.parameter.name"></a>

- *Type:* str

(Required) The name of the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/notification_channel#name NotificationChannel#name}

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.Initializer.parameter.product"></a>

- *Type:* str

(Required) The type of the channel product. One of: (DISCUSSIONS, ERROR_TRACKING, IINT).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/notification_channel#product NotificationChannel#product}

---

##### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.Initializer.parameter.property"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelProperty">NotificationChannelProperty</a>]]

property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/notification_channel#property NotificationChannel#property}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.Initializer.parameter.type"></a>

- *Type:* str

(Required) The type of the channel.

One of: (WEBHOOK, EMAIL, SERVICENOW_INCIDENTS, SERVICE_NOW_APP, PAGERDUTY_ACCOUNT_INTEGRATION, PAGERDUTY_SERVICE_INTEGRATION, JIRA_CLASSIC, SLACK, SLACK_COLLABORATION, SLACK_LEGACY, MOBILE_PUSH, EVENT_BRIDGE).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/notification_channel#type NotificationChannel#type}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.Initializer.parameter.accountId"></a>

- *Type:* typing.Union[int, float]

The account id of the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/notification_channel#account_id NotificationChannel#account_id}

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.Initializer.parameter.active"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether the channel is active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/notification_channel#active NotificationChannel#active}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/notification_channel#id NotificationChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeouts">NotificationChannelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/notification_channel#timeouts NotificationChannel#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.putProperty">put_property</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.resetActive">reset_active</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_property` <a name="put_property" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.putProperty"></a>

```python
def put_property(
  value: typing.Union[IResolvable, typing.List[NotificationChannelProperty]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.putProperty.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelProperty">NotificationChannelProperty</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/notification_channel#create NotificationChannel#create}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/notification_channel#update NotificationChannel#update}.

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_active` <a name="reset_active" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.resetActive"></a>

```python
def reset_active() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NotificationChannel resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.isConstruct"></a>

```python
from cdktf_cdktf_provider_newrelic import notification_channel

notificationChannel.NotificationChannel.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_newrelic import notification_channel

notificationChannel.NotificationChannel.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_newrelic import notification_channel

notificationChannel.NotificationChannel.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_newrelic import notification_channel

notificationChannel.NotificationChannel.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NotificationChannel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NotificationChannel to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NotificationChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/notification_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NotificationChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.property.property">property</a></code> | <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyList">NotificationChannelPropertyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference">NotificationChannelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.property.accountIdInput">account_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.property.activeInput">active_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.property.destinationIdInput">destination_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.property.productInput">product_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.property.propertyInput">property_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelProperty">NotificationChannelProperty</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeouts">NotificationChannelTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.property.active">active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.property.destinationId">destination_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.property.product">product</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.property.property"></a>

```python
property: NotificationChannelPropertyList
```

- *Type:* <a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyList">NotificationChannelPropertyList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.property.timeouts"></a>

```python
timeouts: NotificationChannelTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference">NotificationChannelTimeoutsOutputReference</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.property.accountIdInput"></a>

```python
account_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `active_input`<sup>Optional</sup> <a name="active_input" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.property.activeInput"></a>

```python
active_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `destination_id_input`<sup>Optional</sup> <a name="destination_id_input" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.property.destinationIdInput"></a>

```python
destination_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `product_input`<sup>Optional</sup> <a name="product_input" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.property.productInput"></a>

```python
product_input: str
```

- *Type:* str

---

##### `property_input`<sup>Optional</sup> <a name="property_input" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.property.propertyInput"></a>

```python
property_input: typing.Union[IResolvable, typing.List[NotificationChannelProperty]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelProperty">NotificationChannelProperty</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, NotificationChannelTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeouts">NotificationChannelTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.property.active"></a>

```python
active: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `destination_id`<sup>Required</sup> <a name="destination_id" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.property.destinationId"></a>

```python
destination_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.property.product"></a>

```python
product: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannel.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannel.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NotificationChannelConfig <a name="NotificationChannelConfig" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import notification_channel

notificationChannel.NotificationChannelConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destination_id: str,
  name: str,
  product: str,
  property: typing.Union[IResolvable, typing.List[NotificationChannelProperty]],
  type: str,
  account_id: typing.Union[int, float] = None,
  active: typing.Union[bool, IResolvable] = None,
  id: str = None,
  timeouts: NotificationChannelTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelConfig.property.destinationId">destination_id</a></code> | <code>str</code> | (Required) The id of the destination. |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelConfig.property.name">name</a></code> | <code>str</code> | (Required) The name of the channel. |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelConfig.property.product">product</a></code> | <code>str</code> | (Required) The type of the channel product. One of: (DISCUSSIONS, ERROR_TRACKING, IINT). |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelConfig.property.property">property</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelProperty">NotificationChannelProperty</a>]]</code> | property block. |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelConfig.property.type">type</a></code> | <code>str</code> | (Required) The type of the channel. |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelConfig.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | The account id of the channel. |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelConfig.property.active">active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether the channel is active. |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/notification_channel#id NotificationChannel#id}. |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeouts">NotificationChannelTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination_id`<sup>Required</sup> <a name="destination_id" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelConfig.property.destinationId"></a>

```python
destination_id: str
```

- *Type:* str

(Required) The id of the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/notification_channel#destination_id NotificationChannel#destination_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelConfig.property.name"></a>

```python
name: str
```

- *Type:* str

(Required) The name of the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/notification_channel#name NotificationChannel#name}

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelConfig.property.product"></a>

```python
product: str
```

- *Type:* str

(Required) The type of the channel product. One of: (DISCUSSIONS, ERROR_TRACKING, IINT).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/notification_channel#product NotificationChannel#product}

---

##### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelConfig.property.property"></a>

```python
property: typing.Union[IResolvable, typing.List[NotificationChannelProperty]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelProperty">NotificationChannelProperty</a>]]

property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/notification_channel#property NotificationChannel#property}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelConfig.property.type"></a>

```python
type: str
```

- *Type:* str

(Required) The type of the channel.

One of: (WEBHOOK, EMAIL, SERVICENOW_INCIDENTS, SERVICE_NOW_APP, PAGERDUTY_ACCOUNT_INTEGRATION, PAGERDUTY_SERVICE_INTEGRATION, JIRA_CLASSIC, SLACK, SLACK_COLLABORATION, SLACK_LEGACY, MOBILE_PUSH, EVENT_BRIDGE).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/notification_channel#type NotificationChannel#type}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelConfig.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The account id of the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/notification_channel#account_id NotificationChannel#account_id}

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelConfig.property.active"></a>

```python
active: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether the channel is active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/notification_channel#active NotificationChannel#active}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/notification_channel#id NotificationChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelConfig.property.timeouts"></a>

```python
timeouts: NotificationChannelTimeouts
```

- *Type:* <a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeouts">NotificationChannelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/notification_channel#timeouts NotificationChannel#timeouts}

---

### NotificationChannelProperty <a name="NotificationChannelProperty" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelProperty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelProperty.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import notification_channel

notificationChannel.NotificationChannelProperty(
  key: str,
  value: str,
  display_value: str = None,
  label: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelProperty.property.key">key</a></code> | <code>str</code> | Notification property key. |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelProperty.property.value">value</a></code> | <code>str</code> | Notification property value. |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelProperty.property.displayValue">display_value</a></code> | <code>str</code> | Notification property display key. |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelProperty.property.label">label</a></code> | <code>str</code> | Notification property label. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelProperty.property.key"></a>

```python
key: str
```

- *Type:* str

Notification property key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/notification_channel#key NotificationChannel#key}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelProperty.property.value"></a>

```python
value: str
```

- *Type:* str

Notification property value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/notification_channel#value NotificationChannel#value}

---

##### `display_value`<sup>Optional</sup> <a name="display_value" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelProperty.property.displayValue"></a>

```python
display_value: str
```

- *Type:* str

Notification property display key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/notification_channel#display_value NotificationChannel#display_value}

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelProperty.property.label"></a>

```python
label: str
```

- *Type:* str

Notification property label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/notification_channel#label NotificationChannel#label}

---

### NotificationChannelTimeouts <a name="NotificationChannelTimeouts" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import notification_channel

notificationChannel.NotificationChannelTimeouts(
  create: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/notification_channel#create NotificationChannel#create}. |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/notification_channel#update NotificationChannel#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/notification_channel#create NotificationChannel#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.52.0/docs/resources/notification_channel#update NotificationChannel#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NotificationChannelPropertyList <a name="NotificationChannelPropertyList" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyList.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import notification_channel

notificationChannel.NotificationChannelPropertyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NotificationChannelPropertyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelProperty">NotificationChannelProperty</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[NotificationChannelProperty]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelProperty">NotificationChannelProperty</a>]]

---


### NotificationChannelPropertyOutputReference <a name="NotificationChannelPropertyOutputReference" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import notification_channel

notificationChannel.NotificationChannelPropertyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.resetDisplayValue">reset_display_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.resetLabel">reset_label</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_display_value` <a name="reset_display_value" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.resetDisplayValue"></a>

```python
def reset_display_value() -> None
```

##### `reset_label` <a name="reset_label" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.resetLabel"></a>

```python
def reset_label() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.property.displayValueInput">display_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.property.labelInput">label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.property.displayValue">display_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelProperty">NotificationChannelProperty</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_value_input`<sup>Optional</sup> <a name="display_value_input" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.property.displayValueInput"></a>

```python
display_value_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `label_input`<sup>Optional</sup> <a name="label_input" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.property.labelInput"></a>

```python
label_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `display_value`<sup>Required</sup> <a name="display_value" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.property.displayValue"></a>

```python
display_value: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NotificationChannelProperty]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelProperty">NotificationChannelProperty</a>]

---


### NotificationChannelTimeoutsOutputReference <a name="NotificationChannelTimeoutsOutputReference" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import notification_channel

notificationChannel.NotificationChannelTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeouts">NotificationChannelTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NotificationChannelTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-newrelic.notificationChannel.NotificationChannelTimeouts">NotificationChannelTimeouts</a>]

---



