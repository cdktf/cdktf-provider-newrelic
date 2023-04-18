# `newrelic_notification_destination`

Refer to the Terraform Registory for docs: [`newrelic_notification_destination`](https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination).

# `notificationDestination` Submodule <a name="`notificationDestination` Submodule" id="@cdktf/provider-newrelic.notificationDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NotificationDestination <a name="NotificationDestination" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination newrelic_notification_destination}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import notification_destination

notificationDestination.NotificationDestination(
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
  property: typing.Union[IResolvable, typing.List[NotificationDestinationProperty]],
  type: str,
  account_id: typing.Union[int, float] = None,
  active: typing.Union[bool, IResolvable] = None,
  auth_basic: NotificationDestinationAuthBasic = None,
  auth_token: NotificationDestinationAuthToken = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.name">name</a></code> | <code>str</code> | (Required) The name of the destination. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.property">property</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty">NotificationDestinationProperty</a>]]</code> | property block. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.type">type</a></code> | <code>str</code> | (Required) The type of the destination. One of: (WEBHOOK, EMAIL, SERVICE_NOW, PAGERDUTY_ACCOUNT_INTEGRATION, PAGERDUTY_SERVICE_INTEGRATION, JIRA, SLACK, SLACK_COLLABORATION, SLACK_LEGACY, MOBILE_PUSH, EVENT_BRIDGE). |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | The account ID under which to put the destination. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.active">active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether the destination is active. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.authBasic">auth_basic</a></code> | <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasic">NotificationDestinationAuthBasic</a></code> | auth_basic block. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.authToken">auth_token</a></code> | <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthToken">NotificationDestinationAuthToken</a></code> | auth_token block. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#id NotificationDestination#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.name"></a>

- *Type:* str

(Required) The name of the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#name NotificationDestination#name}

---

##### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.property"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty">NotificationDestinationProperty</a>]]

property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#property NotificationDestination#property}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.type"></a>

- *Type:* str

(Required) The type of the destination. One of: (WEBHOOK, EMAIL, SERVICE_NOW, PAGERDUTY_ACCOUNT_INTEGRATION, PAGERDUTY_SERVICE_INTEGRATION, JIRA, SLACK, SLACK_COLLABORATION, SLACK_LEGACY, MOBILE_PUSH, EVENT_BRIDGE).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#type NotificationDestination#type}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.accountId"></a>

- *Type:* typing.Union[int, float]

The account ID under which to put the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#account_id NotificationDestination#account_id}

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.active"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether the destination is active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#active NotificationDestination#active}

---

##### `auth_basic`<sup>Optional</sup> <a name="auth_basic" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.authBasic"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasic">NotificationDestinationAuthBasic</a>

auth_basic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#auth_basic NotificationDestination#auth_basic}

---

##### `auth_token`<sup>Optional</sup> <a name="auth_token" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.authToken"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthToken">NotificationDestinationAuthToken</a>

auth_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#auth_token NotificationDestination#auth_token}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#id NotificationDestination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.putAuthBasic">put_auth_basic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.putAuthToken">put_auth_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.putProperty">put_property</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.resetActive">reset_active</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.resetAuthBasic">reset_auth_basic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.resetAuthToken">reset_auth_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_auth_basic` <a name="put_auth_basic" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.putAuthBasic"></a>

```python
def put_auth_basic(
  password: str,
  user: str
) -> None
```

###### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.putAuthBasic.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#password NotificationDestination#password}.

---

###### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.putAuthBasic.parameter.user"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#user NotificationDestination#user}.

---

##### `put_auth_token` <a name="put_auth_token" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.putAuthToken"></a>

```python
def put_auth_token(
  token: str,
  prefix: str = None
) -> None
```

###### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.putAuthToken.parameter.token"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#token NotificationDestination#token}.

---

###### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.putAuthToken.parameter.prefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#prefix NotificationDestination#prefix}.

---

##### `put_property` <a name="put_property" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.putProperty"></a>

```python
def put_property(
  value: typing.Union[IResolvable, typing.List[NotificationDestinationProperty]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.putProperty.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty">NotificationDestinationProperty</a>]]

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_active` <a name="reset_active" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.resetActive"></a>

```python
def reset_active() -> None
```

##### `reset_auth_basic` <a name="reset_auth_basic" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.resetAuthBasic"></a>

```python
def reset_auth_basic() -> None
```

##### `reset_auth_token` <a name="reset_auth_token" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.resetAuthToken"></a>

```python
def reset_auth_token() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.isConstruct"></a>

```python
from cdktf_cdktf_provider_newrelic import notification_destination

notificationDestination.NotificationDestination.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_newrelic import notification_destination

notificationDestination.NotificationDestination.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_newrelic import notification_destination

notificationDestination.NotificationDestination.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.authBasic">auth_basic</a></code> | <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference">NotificationDestinationAuthBasicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.authToken">auth_token</a></code> | <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference">NotificationDestinationAuthTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.lastSent">last_sent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.property">property</a></code> | <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList">NotificationDestinationPropertyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.accountIdInput">account_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.activeInput">active_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.authBasicInput">auth_basic_input</a></code> | <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasic">NotificationDestinationAuthBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.authTokenInput">auth_token_input</a></code> | <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthToken">NotificationDestinationAuthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.propertyInput">property_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty">NotificationDestinationProperty</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.active">active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auth_basic`<sup>Required</sup> <a name="auth_basic" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.authBasic"></a>

```python
auth_basic: NotificationDestinationAuthBasicOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference">NotificationDestinationAuthBasicOutputReference</a>

---

##### `auth_token`<sup>Required</sup> <a name="auth_token" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.authToken"></a>

```python
auth_token: NotificationDestinationAuthTokenOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference">NotificationDestinationAuthTokenOutputReference</a>

---

##### `last_sent`<sup>Required</sup> <a name="last_sent" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.lastSent"></a>

```python
last_sent: str
```

- *Type:* str

---

##### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.property"></a>

```python
property: NotificationDestinationPropertyList
```

- *Type:* <a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList">NotificationDestinationPropertyList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.accountIdInput"></a>

```python
account_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `active_input`<sup>Optional</sup> <a name="active_input" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.activeInput"></a>

```python
active_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auth_basic_input`<sup>Optional</sup> <a name="auth_basic_input" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.authBasicInput"></a>

```python
auth_basic_input: NotificationDestinationAuthBasic
```

- *Type:* <a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasic">NotificationDestinationAuthBasic</a>

---

##### `auth_token_input`<sup>Optional</sup> <a name="auth_token_input" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.authTokenInput"></a>

```python
auth_token_input: NotificationDestinationAuthToken
```

- *Type:* <a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthToken">NotificationDestinationAuthToken</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `property_input`<sup>Optional</sup> <a name="property_input" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.propertyInput"></a>

```python
property_input: typing.Union[IResolvable, typing.List[NotificationDestinationProperty]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty">NotificationDestinationProperty</a>]]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.active"></a>

```python
active: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NotificationDestinationAuthBasic <a name="NotificationDestinationAuthBasic" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasic.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import notification_destination

notificationDestination.NotificationDestinationAuthBasic(
  password: str,
  user: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasic.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#password NotificationDestination#password}. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasic.property.user">user</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#user NotificationDestination#user}. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasic.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#password NotificationDestination#password}.

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasic.property.user"></a>

```python
user: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#user NotificationDestination#user}.

---

### NotificationDestinationAuthToken <a name="NotificationDestinationAuthToken" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthToken.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import notification_destination

notificationDestination.NotificationDestinationAuthToken(
  token: str,
  prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthToken.property.token">token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#token NotificationDestination#token}. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthToken.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#prefix NotificationDestination#prefix}. |

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthToken.property.token"></a>

```python
token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#token NotificationDestination#token}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthToken.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#prefix NotificationDestination#prefix}.

---

### NotificationDestinationConfig <a name="NotificationDestinationConfig" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import notification_destination

notificationDestination.NotificationDestinationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  property: typing.Union[IResolvable, typing.List[NotificationDestinationProperty]],
  type: str,
  account_id: typing.Union[int, float] = None,
  active: typing.Union[bool, IResolvable] = None,
  auth_basic: NotificationDestinationAuthBasic = None,
  auth_token: NotificationDestinationAuthToken = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.name">name</a></code> | <code>str</code> | (Required) The name of the destination. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.property">property</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty">NotificationDestinationProperty</a>]]</code> | property block. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.type">type</a></code> | <code>str</code> | (Required) The type of the destination. One of: (WEBHOOK, EMAIL, SERVICE_NOW, PAGERDUTY_ACCOUNT_INTEGRATION, PAGERDUTY_SERVICE_INTEGRATION, JIRA, SLACK, SLACK_COLLABORATION, SLACK_LEGACY, MOBILE_PUSH, EVENT_BRIDGE). |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | The account ID under which to put the destination. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.active">active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether the destination is active. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.authBasic">auth_basic</a></code> | <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasic">NotificationDestinationAuthBasic</a></code> | auth_basic block. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.authToken">auth_token</a></code> | <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthToken">NotificationDestinationAuthToken</a></code> | auth_token block. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#id NotificationDestination#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

(Required) The name of the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#name NotificationDestination#name}

---

##### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.property"></a>

```python
property: typing.Union[IResolvable, typing.List[NotificationDestinationProperty]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty">NotificationDestinationProperty</a>]]

property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#property NotificationDestination#property}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.type"></a>

```python
type: str
```

- *Type:* str

(Required) The type of the destination. One of: (WEBHOOK, EMAIL, SERVICE_NOW, PAGERDUTY_ACCOUNT_INTEGRATION, PAGERDUTY_SERVICE_INTEGRATION, JIRA, SLACK, SLACK_COLLABORATION, SLACK_LEGACY, MOBILE_PUSH, EVENT_BRIDGE).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#type NotificationDestination#type}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The account ID under which to put the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#account_id NotificationDestination#account_id}

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.active"></a>

```python
active: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether the destination is active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#active NotificationDestination#active}

---

##### `auth_basic`<sup>Optional</sup> <a name="auth_basic" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.authBasic"></a>

```python
auth_basic: NotificationDestinationAuthBasic
```

- *Type:* <a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasic">NotificationDestinationAuthBasic</a>

auth_basic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#auth_basic NotificationDestination#auth_basic}

---

##### `auth_token`<sup>Optional</sup> <a name="auth_token" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.authToken"></a>

```python
auth_token: NotificationDestinationAuthToken
```

- *Type:* <a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthToken">NotificationDestinationAuthToken</a>

auth_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#auth_token NotificationDestination#auth_token}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#id NotificationDestination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### NotificationDestinationProperty <a name="NotificationDestinationProperty" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import notification_destination

notificationDestination.NotificationDestinationProperty(
  key: str,
  value: str,
  display_value: str = None,
  label: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty.property.key">key</a></code> | <code>str</code> | Notification property key. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty.property.value">value</a></code> | <code>str</code> | Notification property value. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty.property.displayValue">display_value</a></code> | <code>str</code> | Notification property display key. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty.property.label">label</a></code> | <code>str</code> | Notification property label. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty.property.key"></a>

```python
key: str
```

- *Type:* str

Notification property key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#key NotificationDestination#key}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty.property.value"></a>

```python
value: str
```

- *Type:* str

Notification property value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#value NotificationDestination#value}

---

##### `display_value`<sup>Optional</sup> <a name="display_value" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty.property.displayValue"></a>

```python
display_value: str
```

- *Type:* str

Notification property display key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#display_value NotificationDestination#display_value}

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty.property.label"></a>

```python
label: str
```

- *Type:* str

Notification property label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#label NotificationDestination#label}

---

## Classes <a name="Classes" id="Classes"></a>

### NotificationDestinationAuthBasicOutputReference <a name="NotificationDestinationAuthBasicOutputReference" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import notification_destination

notificationDestination.NotificationDestinationAuthBasicOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.property.userInput">user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.property.user">user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasic">NotificationDestinationAuthBasic</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `user_input`<sup>Optional</sup> <a name="user_input" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.property.userInput"></a>

```python
user_input: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.property.user"></a>

```python
user: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.property.internalValue"></a>

```python
internal_value: NotificationDestinationAuthBasic
```

- *Type:* <a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasic">NotificationDestinationAuthBasic</a>

---


### NotificationDestinationAuthTokenOutputReference <a name="NotificationDestinationAuthTokenOutputReference" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import notification_destination

notificationDestination.NotificationDestinationAuthTokenOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_prefix` <a name="reset_prefix" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.property.tokenInput">token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.property.token">token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthToken">NotificationDestinationAuthToken</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `token_input`<sup>Optional</sup> <a name="token_input" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.property.tokenInput"></a>

```python
token_input: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.property.token"></a>

```python
token: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.property.internalValue"></a>

```python
internal_value: NotificationDestinationAuthToken
```

- *Type:* <a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthToken">NotificationDestinationAuthToken</a>

---


### NotificationDestinationPropertyList <a name="NotificationDestinationPropertyList" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import notification_destination

notificationDestination.NotificationDestinationPropertyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NotificationDestinationPropertyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty">NotificationDestinationProperty</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[NotificationDestinationProperty]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty">NotificationDestinationProperty</a>]]

---


### NotificationDestinationPropertyOutputReference <a name="NotificationDestinationPropertyOutputReference" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import notification_destination

notificationDestination.NotificationDestinationPropertyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.resetDisplayValue">reset_display_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.resetLabel">reset_label</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_display_value` <a name="reset_display_value" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.resetDisplayValue"></a>

```python
def reset_display_value() -> None
```

##### `reset_label` <a name="reset_label" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.resetLabel"></a>

```python
def reset_label() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.displayValueInput">display_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.labelInput">label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.displayValue">display_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty">NotificationDestinationProperty</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_value_input`<sup>Optional</sup> <a name="display_value_input" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.displayValueInput"></a>

```python
display_value_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `label_input`<sup>Optional</sup> <a name="label_input" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.labelInput"></a>

```python
label_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `display_value`<sup>Required</sup> <a name="display_value" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.displayValue"></a>

```python
display_value: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[NotificationDestinationProperty, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty">NotificationDestinationProperty</a>, cdktf.IResolvable]

---



