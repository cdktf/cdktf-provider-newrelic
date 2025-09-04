# `alertMutingRule` Submodule <a name="`alertMutingRule` Submodule" id="@cdktf/provider-newrelic.alertMutingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AlertMutingRule <a name="AlertMutingRule" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/alert_muting_rule newrelic_alert_muting_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import alert_muting_rule

alertMutingRule.AlertMutingRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  condition: AlertMutingRuleCondition,
  enabled: typing.Union[bool, IResolvable],
  name: str,
  account_id: typing.Union[int, float] = None,
  action_on_muting_rule_window_ended: str = None,
  description: str = None,
  id: str = None,
  schedule: AlertMutingRuleSchedule = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleCondition">AlertMutingRuleCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the MutingRule is enabled. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the MutingRule. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | The account id of the MutingRule.. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.actionOnMutingRuleWindowEnded">action_on_muting_rule_window_ended</a></code> | <code>str</code> | The action when the muting rule window is ended or disabled. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the MutingRule. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/alert_muting_rule#id AlertMutingRule#id}. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule">AlertMutingRuleSchedule</a></code> | schedule block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleCondition">AlertMutingRuleCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/alert_muting_rule#condition AlertMutingRule#condition}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the MutingRule is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/alert_muting_rule#enabled AlertMutingRule#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.name"></a>

- *Type:* str

The name of the MutingRule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/alert_muting_rule#name AlertMutingRule#name}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.accountId"></a>

- *Type:* typing.Union[int, float]

The account id of the MutingRule..

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/alert_muting_rule#account_id AlertMutingRule#account_id}

---

##### `action_on_muting_rule_window_ended`<sup>Optional</sup> <a name="action_on_muting_rule_window_ended" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.actionOnMutingRuleWindowEnded"></a>

- *Type:* str

The action when the muting rule window is ended or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/alert_muting_rule#action_on_muting_rule_window_ended AlertMutingRule#action_on_muting_rule_window_ended}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.description"></a>

- *Type:* str

The description of the MutingRule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/alert_muting_rule#description AlertMutingRule#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/alert_muting_rule#id AlertMutingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.schedule"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule">AlertMutingRuleSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/alert_muting_rule#schedule AlertMutingRule#schedule}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.putSchedule">put_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.resetActionOnMutingRuleWindowEnded">reset_action_on_muting_rule_window_ended</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.resetSchedule">reset_schedule</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_condition` <a name="put_condition" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.putCondition"></a>

```python
def put_condition(
  conditions: typing.Union[IResolvable, typing.List[AlertMutingRuleConditionConditions]],
  operator: str
) -> None
```

###### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.putCondition.parameter.conditions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditions">AlertMutingRuleConditionConditions</a>]]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/alert_muting_rule#conditions AlertMutingRule#conditions}

---

###### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.putCondition.parameter.operator"></a>

- *Type:* str

The operator used to combine all the MutingRuleConditions within the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/alert_muting_rule#operator AlertMutingRule#operator}

---

##### `put_schedule` <a name="put_schedule" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.putSchedule"></a>

```python
def put_schedule(
  time_zone: str,
  end_repeat: str = None,
  end_time: str = None,
  repeat: str = None,
  repeat_count: typing.Union[int, float] = None,
  start_time: str = None,
  weekly_repeat_days: typing.List[str] = None
) -> None
```

###### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.putSchedule.parameter.timeZone"></a>

- *Type:* str

The time zone that applies to the MutingRule schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/alert_muting_rule#time_zone AlertMutingRule#time_zone}

---

###### `end_repeat`<sup>Optional</sup> <a name="end_repeat" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.putSchedule.parameter.endRepeat"></a>

- *Type:* str

The datetime stamp when the MutingRule schedule should stop repeating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/alert_muting_rule#end_repeat AlertMutingRule#end_repeat}

---

###### `end_time`<sup>Optional</sup> <a name="end_time" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.putSchedule.parameter.endTime"></a>

- *Type:* str

The datetime stamp representing when the MutingRule should end.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/alert_muting_rule#end_time AlertMutingRule#end_time}

---

###### `repeat`<sup>Optional</sup> <a name="repeat" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.putSchedule.parameter.repeat"></a>

- *Type:* str

The frequency the MutingRule schedule repeats. One of [DAILY, WEEKLY, MONTHLY].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/alert_muting_rule#repeat AlertMutingRule#repeat}

---

###### `repeat_count`<sup>Optional</sup> <a name="repeat_count" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.putSchedule.parameter.repeatCount"></a>

- *Type:* typing.Union[int, float]

The number of times the MutingRule schedule should repeat.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/alert_muting_rule#repeat_count AlertMutingRule#repeat_count}

---

###### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.putSchedule.parameter.startTime"></a>

- *Type:* str

The datetime stamp representing when the MutingRule should start.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/alert_muting_rule#start_time AlertMutingRule#start_time}

---

###### `weekly_repeat_days`<sup>Optional</sup> <a name="weekly_repeat_days" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.putSchedule.parameter.weeklyRepeatDays"></a>

- *Type:* typing.List[str]

The day(s) of the week that a MutingRule should repeat when the repeat field is set to WEEKLY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/alert_muting_rule#weekly_repeat_days AlertMutingRule#weekly_repeat_days}

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_action_on_muting_rule_window_ended` <a name="reset_action_on_muting_rule_window_ended" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.resetActionOnMutingRuleWindowEnded"></a>

```python
def reset_action_on_muting_rule_window_ended() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_schedule` <a name="reset_schedule" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.resetSchedule"></a>

```python
def reset_schedule() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AlertMutingRule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_newrelic import alert_muting_rule

alertMutingRule.AlertMutingRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_newrelic import alert_muting_rule

alertMutingRule.AlertMutingRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_newrelic import alert_muting_rule

alertMutingRule.AlertMutingRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_newrelic import alert_muting_rule

alertMutingRule.AlertMutingRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AlertMutingRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AlertMutingRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AlertMutingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/alert_muting_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AlertMutingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference">AlertMutingRuleConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference">AlertMutingRuleScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.accountIdInput">account_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.actionOnMutingRuleWindowEndedInput">action_on_muting_rule_window_ended_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleCondition">AlertMutingRuleCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.scheduleInput">schedule_input</a></code> | <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule">AlertMutingRuleSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.actionOnMutingRuleWindowEnded">action_on_muting_rule_window_ended</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.condition"></a>

```python
condition: AlertMutingRuleConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference">AlertMutingRuleConditionOutputReference</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.schedule"></a>

```python
schedule: AlertMutingRuleScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference">AlertMutingRuleScheduleOutputReference</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.accountIdInput"></a>

```python
account_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `action_on_muting_rule_window_ended_input`<sup>Optional</sup> <a name="action_on_muting_rule_window_ended_input" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.actionOnMutingRuleWindowEndedInput"></a>

```python
action_on_muting_rule_window_ended_input: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.conditionInput"></a>

```python
condition_input: AlertMutingRuleCondition
```

- *Type:* <a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleCondition">AlertMutingRuleCondition</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `schedule_input`<sup>Optional</sup> <a name="schedule_input" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.scheduleInput"></a>

```python
schedule_input: AlertMutingRuleSchedule
```

- *Type:* <a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule">AlertMutingRuleSchedule</a>

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `action_on_muting_rule_window_ended`<sup>Required</sup> <a name="action_on_muting_rule_window_ended" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.actionOnMutingRuleWindowEnded"></a>

```python
action_on_muting_rule_window_ended: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AlertMutingRuleCondition <a name="AlertMutingRuleCondition" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import alert_muting_rule

alertMutingRule.AlertMutingRuleCondition(
  conditions: typing.Union[IResolvable, typing.List[AlertMutingRuleConditionConditions]],
  operator: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleCondition.property.conditions">conditions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditions">AlertMutingRuleConditionConditions</a>]]</code> | conditions block. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleCondition.property.operator">operator</a></code> | <code>str</code> | The operator used to combine all the MutingRuleConditions within the group. |

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleCondition.property.conditions"></a>

```python
conditions: typing.Union[IResolvable, typing.List[AlertMutingRuleConditionConditions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditions">AlertMutingRuleConditionConditions</a>]]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/alert_muting_rule#conditions AlertMutingRule#conditions}

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleCondition.property.operator"></a>

```python
operator: str
```

- *Type:* str

The operator used to combine all the MutingRuleConditions within the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/alert_muting_rule#operator AlertMutingRule#operator}

---

### AlertMutingRuleConditionConditions <a name="AlertMutingRuleConditionConditions" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditions.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import alert_muting_rule

alertMutingRule.AlertMutingRuleConditionConditions(
  attribute: str,
  operator: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditions.property.attribute">attribute</a></code> | <code>str</code> | The attribute on an incident. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditions.property.operator">operator</a></code> | <code>str</code> | The operator used to compare the attribute's value with the supplied value(s). |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditions.property.values">values</a></code> | <code>typing.List[str]</code> | The value(s) to compare against the attribute's value. |

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditions.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

The attribute on an incident.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/alert_muting_rule#attribute AlertMutingRule#attribute}

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditions.property.operator"></a>

```python
operator: str
```

- *Type:* str

The operator used to compare the attribute's value with the supplied value(s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/alert_muting_rule#operator AlertMutingRule#operator}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditions.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

The value(s) to compare against the attribute's value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/alert_muting_rule#values AlertMutingRule#values}

---

### AlertMutingRuleConfig <a name="AlertMutingRuleConfig" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import alert_muting_rule

alertMutingRule.AlertMutingRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  condition: AlertMutingRuleCondition,
  enabled: typing.Union[bool, IResolvable],
  name: str,
  account_id: typing.Union[int, float] = None,
  action_on_muting_rule_window_ended: str = None,
  description: str = None,
  id: str = None,
  schedule: AlertMutingRuleSchedule = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleCondition">AlertMutingRuleCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the MutingRule is enabled. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.name">name</a></code> | <code>str</code> | The name of the MutingRule. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | The account id of the MutingRule.. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.actionOnMutingRuleWindowEnded">action_on_muting_rule_window_ended</a></code> | <code>str</code> | The action when the muting rule window is ended or disabled. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.description">description</a></code> | <code>str</code> | The description of the MutingRule. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/alert_muting_rule#id AlertMutingRule#id}. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule">AlertMutingRuleSchedule</a></code> | schedule block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.condition"></a>

```python
condition: AlertMutingRuleCondition
```

- *Type:* <a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleCondition">AlertMutingRuleCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/alert_muting_rule#condition AlertMutingRule#condition}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the MutingRule is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/alert_muting_rule#enabled AlertMutingRule#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the MutingRule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/alert_muting_rule#name AlertMutingRule#name}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The account id of the MutingRule..

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/alert_muting_rule#account_id AlertMutingRule#account_id}

---

##### `action_on_muting_rule_window_ended`<sup>Optional</sup> <a name="action_on_muting_rule_window_ended" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.actionOnMutingRuleWindowEnded"></a>

```python
action_on_muting_rule_window_ended: str
```

- *Type:* str

The action when the muting rule window is ended or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/alert_muting_rule#action_on_muting_rule_window_ended AlertMutingRule#action_on_muting_rule_window_ended}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the MutingRule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/alert_muting_rule#description AlertMutingRule#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/alert_muting_rule#id AlertMutingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.schedule"></a>

```python
schedule: AlertMutingRuleSchedule
```

- *Type:* <a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule">AlertMutingRuleSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/alert_muting_rule#schedule AlertMutingRule#schedule}

---

### AlertMutingRuleSchedule <a name="AlertMutingRuleSchedule" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import alert_muting_rule

alertMutingRule.AlertMutingRuleSchedule(
  time_zone: str,
  end_repeat: str = None,
  end_time: str = None,
  repeat: str = None,
  repeat_count: typing.Union[int, float] = None,
  start_time: str = None,
  weekly_repeat_days: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule.property.timeZone">time_zone</a></code> | <code>str</code> | The time zone that applies to the MutingRule schedule. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule.property.endRepeat">end_repeat</a></code> | <code>str</code> | The datetime stamp when the MutingRule schedule should stop repeating. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule.property.endTime">end_time</a></code> | <code>str</code> | The datetime stamp representing when the MutingRule should end. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule.property.repeat">repeat</a></code> | <code>str</code> | The frequency the MutingRule schedule repeats. One of [DAILY, WEEKLY, MONTHLY]. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule.property.repeatCount">repeat_count</a></code> | <code>typing.Union[int, float]</code> | The number of times the MutingRule schedule should repeat. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule.property.startTime">start_time</a></code> | <code>str</code> | The datetime stamp representing when the MutingRule should start. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule.property.weeklyRepeatDays">weekly_repeat_days</a></code> | <code>typing.List[str]</code> | The day(s) of the week that a MutingRule should repeat when the repeat field is set to WEEKLY. |

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

The time zone that applies to the MutingRule schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/alert_muting_rule#time_zone AlertMutingRule#time_zone}

---

##### `end_repeat`<sup>Optional</sup> <a name="end_repeat" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule.property.endRepeat"></a>

```python
end_repeat: str
```

- *Type:* str

The datetime stamp when the MutingRule schedule should stop repeating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/alert_muting_rule#end_repeat AlertMutingRule#end_repeat}

---

##### `end_time`<sup>Optional</sup> <a name="end_time" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

The datetime stamp representing when the MutingRule should end.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/alert_muting_rule#end_time AlertMutingRule#end_time}

---

##### `repeat`<sup>Optional</sup> <a name="repeat" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule.property.repeat"></a>

```python
repeat: str
```

- *Type:* str

The frequency the MutingRule schedule repeats. One of [DAILY, WEEKLY, MONTHLY].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/alert_muting_rule#repeat AlertMutingRule#repeat}

---

##### `repeat_count`<sup>Optional</sup> <a name="repeat_count" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule.property.repeatCount"></a>

```python
repeat_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of times the MutingRule schedule should repeat.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/alert_muting_rule#repeat_count AlertMutingRule#repeat_count}

---

##### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

The datetime stamp representing when the MutingRule should start.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/alert_muting_rule#start_time AlertMutingRule#start_time}

---

##### `weekly_repeat_days`<sup>Optional</sup> <a name="weekly_repeat_days" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule.property.weeklyRepeatDays"></a>

```python
weekly_repeat_days: typing.List[str]
```

- *Type:* typing.List[str]

The day(s) of the week that a MutingRule should repeat when the repeat field is set to WEEKLY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/alert_muting_rule#weekly_repeat_days AlertMutingRule#weekly_repeat_days}

---

## Classes <a name="Classes" id="Classes"></a>

### AlertMutingRuleConditionConditionsList <a name="AlertMutingRuleConditionConditionsList" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import alert_muting_rule

alertMutingRule.AlertMutingRuleConditionConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AlertMutingRuleConditionConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditions">AlertMutingRuleConditionConditions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AlertMutingRuleConditionConditions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditions">AlertMutingRuleConditionConditions</a>]]

---


### AlertMutingRuleConditionConditionsOutputReference <a name="AlertMutingRuleConditionConditionsOutputReference" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import alert_muting_rule

alertMutingRule.AlertMutingRuleConditionConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.attributeInput">attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.attribute">attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditions">AlertMutingRuleConditionConditions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute_input`<sup>Optional</sup> <a name="attribute_input" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.attributeInput"></a>

```python
attribute_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AlertMutingRuleConditionConditions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditions">AlertMutingRuleConditionConditions</a>]

---


### AlertMutingRuleConditionOutputReference <a name="AlertMutingRuleConditionOutputReference" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import alert_muting_rule

alertMutingRule.AlertMutingRuleConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.putConditions">put_conditions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_conditions` <a name="put_conditions" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.putConditions"></a>

```python
def put_conditions(
  value: typing.Union[IResolvable, typing.List[AlertMutingRuleConditionConditions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.putConditions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditions">AlertMutingRuleConditionConditions</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList">AlertMutingRuleConditionConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.property.conditionsInput">conditions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditions">AlertMutingRuleConditionConditions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleCondition">AlertMutingRuleCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.property.conditions"></a>

```python
conditions: AlertMutingRuleConditionConditionsList
```

- *Type:* <a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList">AlertMutingRuleConditionConditionsList</a>

---

##### `conditions_input`<sup>Optional</sup> <a name="conditions_input" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.property.conditionsInput"></a>

```python
conditions_input: typing.Union[IResolvable, typing.List[AlertMutingRuleConditionConditions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditions">AlertMutingRuleConditionConditions</a>]]

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.property.internalValue"></a>

```python
internal_value: AlertMutingRuleCondition
```

- *Type:* <a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleCondition">AlertMutingRuleCondition</a>

---


### AlertMutingRuleScheduleOutputReference <a name="AlertMutingRuleScheduleOutputReference" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import alert_muting_rule

alertMutingRule.AlertMutingRuleScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.resetEndRepeat">reset_end_repeat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.resetEndTime">reset_end_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.resetRepeat">reset_repeat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.resetRepeatCount">reset_repeat_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.resetStartTime">reset_start_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.resetWeeklyRepeatDays">reset_weekly_repeat_days</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_end_repeat` <a name="reset_end_repeat" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.resetEndRepeat"></a>

```python
def reset_end_repeat() -> None
```

##### `reset_end_time` <a name="reset_end_time" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.resetEndTime"></a>

```python
def reset_end_time() -> None
```

##### `reset_repeat` <a name="reset_repeat" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.resetRepeat"></a>

```python
def reset_repeat() -> None
```

##### `reset_repeat_count` <a name="reset_repeat_count" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.resetRepeatCount"></a>

```python
def reset_repeat_count() -> None
```

##### `reset_start_time` <a name="reset_start_time" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.resetStartTime"></a>

```python
def reset_start_time() -> None
```

##### `reset_weekly_repeat_days` <a name="reset_weekly_repeat_days" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.resetWeeklyRepeatDays"></a>

```python
def reset_weekly_repeat_days() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.endRepeatInput">end_repeat_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.endTimeInput">end_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.repeatCountInput">repeat_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.repeatInput">repeat_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.startTimeInput">start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.timeZoneInput">time_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.weeklyRepeatDaysInput">weekly_repeat_days_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.endRepeat">end_repeat</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.repeat">repeat</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.repeatCount">repeat_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.weeklyRepeatDays">weekly_repeat_days</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule">AlertMutingRuleSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_repeat_input`<sup>Optional</sup> <a name="end_repeat_input" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.endRepeatInput"></a>

```python
end_repeat_input: str
```

- *Type:* str

---

##### `end_time_input`<sup>Optional</sup> <a name="end_time_input" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.endTimeInput"></a>

```python
end_time_input: str
```

- *Type:* str

---

##### `repeat_count_input`<sup>Optional</sup> <a name="repeat_count_input" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.repeatCountInput"></a>

```python
repeat_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `repeat_input`<sup>Optional</sup> <a name="repeat_input" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.repeatInput"></a>

```python
repeat_input: str
```

- *Type:* str

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.startTimeInput"></a>

```python
start_time_input: str
```

- *Type:* str

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.timeZoneInput"></a>

```python
time_zone_input: str
```

- *Type:* str

---

##### `weekly_repeat_days_input`<sup>Optional</sup> <a name="weekly_repeat_days_input" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.weeklyRepeatDaysInput"></a>

```python
weekly_repeat_days_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `end_repeat`<sup>Required</sup> <a name="end_repeat" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.endRepeat"></a>

```python
end_repeat: str
```

- *Type:* str

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `repeat`<sup>Required</sup> <a name="repeat" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.repeat"></a>

```python
repeat: str
```

- *Type:* str

---

##### `repeat_count`<sup>Required</sup> <a name="repeat_count" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.repeatCount"></a>

```python
repeat_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

##### `weekly_repeat_days`<sup>Required</sup> <a name="weekly_repeat_days" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.weeklyRepeatDays"></a>

```python
weekly_repeat_days: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.internalValue"></a>

```python
internal_value: AlertMutingRuleSchedule
```

- *Type:* <a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule">AlertMutingRuleSchedule</a>

---



