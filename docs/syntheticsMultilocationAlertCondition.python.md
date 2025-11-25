# `syntheticsMultilocationAlertCondition` Submodule <a name="`syntheticsMultilocationAlertCondition` Submodule" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SyntheticsMultilocationAlertCondition <a name="SyntheticsMultilocationAlertCondition" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/synthetics_multilocation_alert_condition newrelic_synthetics_multilocation_alert_condition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import synthetics_multilocation_alert_condition

syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  critical: SyntheticsMultilocationAlertConditionCritical,
  entities: typing.List[str],
  name: str,
  policy_id: typing.Union[int, float],
  enabled: bool | IResolvable = None,
  id: str = None,
  runbook_url: str = None,
  violation_time_limit_seconds: typing.Union[int, float] = None,
  warning: SyntheticsMultilocationAlertConditionWarning = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.critical">critical</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCritical">SyntheticsMultilocationAlertConditionCritical</a></code> | critical block. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.entities">entities</a></code> | <code>typing.List[str]</code> | The GUIDs of the Synthetics monitors to alert on. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.name">name</a></code> | <code>str</code> | The title of this condition. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.policyId">policy_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the policy where this condition will be used. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Set whether to enable the alert condition. Defaults to true. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/synthetics_multilocation_alert_condition#id SyntheticsMultilocationAlertCondition#id}. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.runbookUrl">runbook_url</a></code> | <code>str</code> | Runbook URL to display in notifications. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.violationTimeLimitSeconds">violation_time_limit_seconds</a></code> | <code>typing.Union[int, float]</code> | Sets a time limit, in seconds, that will automatically force-close a long-lasting incident after the time limit you select. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.warning">warning</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarning">SyntheticsMultilocationAlertConditionWarning</a></code> | warning block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `critical`<sup>Required</sup> <a name="critical" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.critical"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCritical">SyntheticsMultilocationAlertConditionCritical</a>

critical block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/synthetics_multilocation_alert_condition#critical SyntheticsMultilocationAlertCondition#critical}

---

##### `entities`<sup>Required</sup> <a name="entities" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.entities"></a>

- *Type:* typing.List[str]

The GUIDs of the Synthetics monitors to alert on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/synthetics_multilocation_alert_condition#entities SyntheticsMultilocationAlertCondition#entities}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.name"></a>

- *Type:* str

The title of this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/synthetics_multilocation_alert_condition#name SyntheticsMultilocationAlertCondition#name}

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.policyId"></a>

- *Type:* typing.Union[int, float]

The ID of the policy where this condition will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/synthetics_multilocation_alert_condition#policy_id SyntheticsMultilocationAlertCondition#policy_id}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.enabled"></a>

- *Type:* bool | cdktf.IResolvable

Set whether to enable the alert condition. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/synthetics_multilocation_alert_condition#enabled SyntheticsMultilocationAlertCondition#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/synthetics_multilocation_alert_condition#id SyntheticsMultilocationAlertCondition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `runbook_url`<sup>Optional</sup> <a name="runbook_url" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.runbookUrl"></a>

- *Type:* str

Runbook URL to display in notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/synthetics_multilocation_alert_condition#runbook_url SyntheticsMultilocationAlertCondition#runbook_url}

---

##### `violation_time_limit_seconds`<sup>Optional</sup> <a name="violation_time_limit_seconds" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.violationTimeLimitSeconds"></a>

- *Type:* typing.Union[int, float]

Sets a time limit, in seconds, that will automatically force-close a long-lasting incident after the time limit you select.

Must be in the range of 300 to 2592000 (inclusive)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/synthetics_multilocation_alert_condition#violation_time_limit_seconds SyntheticsMultilocationAlertCondition#violation_time_limit_seconds}

---

##### `warning`<sup>Optional</sup> <a name="warning" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.warning"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarning">SyntheticsMultilocationAlertConditionWarning</a>

warning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/synthetics_multilocation_alert_condition#warning SyntheticsMultilocationAlertCondition#warning}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.putCritical">put_critical</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.putWarning">put_warning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.resetRunbookUrl">reset_runbook_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.resetViolationTimeLimitSeconds">reset_violation_time_limit_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.resetWarning">reset_warning</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_critical` <a name="put_critical" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.putCritical"></a>

```python
def put_critical(
  threshold: typing.Union[int, float]
) -> None
```

###### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.putCritical.parameter.threshold"></a>

- *Type:* typing.Union[int, float]

The minimum number of monitor locations that must be concurrently failing before an incident is opened.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/synthetics_multilocation_alert_condition#threshold SyntheticsMultilocationAlertCondition#threshold}

---

##### `put_warning` <a name="put_warning" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.putWarning"></a>

```python
def put_warning(
  threshold: typing.Union[int, float]
) -> None
```

###### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.putWarning.parameter.threshold"></a>

- *Type:* typing.Union[int, float]

The minimum number of monitor locations that must be concurrently failing before an incident is opened.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/synthetics_multilocation_alert_condition#threshold SyntheticsMultilocationAlertCondition#threshold}

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_runbook_url` <a name="reset_runbook_url" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.resetRunbookUrl"></a>

```python
def reset_runbook_url() -> None
```

##### `reset_violation_time_limit_seconds` <a name="reset_violation_time_limit_seconds" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.resetViolationTimeLimitSeconds"></a>

```python
def reset_violation_time_limit_seconds() -> None
```

##### `reset_warning` <a name="reset_warning" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.resetWarning"></a>

```python
def reset_warning() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SyntheticsMultilocationAlertCondition resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.isConstruct"></a>

```python
from cdktf_cdktf_provider_newrelic import synthetics_multilocation_alert_condition

syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_newrelic import synthetics_multilocation_alert_condition

syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_newrelic import synthetics_multilocation_alert_condition

syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_newrelic import synthetics_multilocation_alert_condition

syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SyntheticsMultilocationAlertCondition resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SyntheticsMultilocationAlertCondition to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SyntheticsMultilocationAlertCondition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/synthetics_multilocation_alert_condition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SyntheticsMultilocationAlertCondition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.critical">critical</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference">SyntheticsMultilocationAlertConditionCriticalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.entityGuid">entity_guid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.warning">warning</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference">SyntheticsMultilocationAlertConditionWarningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.criticalInput">critical_input</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCritical">SyntheticsMultilocationAlertConditionCritical</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.entitiesInput">entities_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.policyIdInput">policy_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.runbookUrlInput">runbook_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.violationTimeLimitSecondsInput">violation_time_limit_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.warningInput">warning_input</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarning">SyntheticsMultilocationAlertConditionWarning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.entities">entities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.policyId">policy_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.runbookUrl">runbook_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.violationTimeLimitSeconds">violation_time_limit_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `critical`<sup>Required</sup> <a name="critical" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.critical"></a>

```python
critical: SyntheticsMultilocationAlertConditionCriticalOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference">SyntheticsMultilocationAlertConditionCriticalOutputReference</a>

---

##### `entity_guid`<sup>Required</sup> <a name="entity_guid" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.entityGuid"></a>

```python
entity_guid: str
```

- *Type:* str

---

##### `warning`<sup>Required</sup> <a name="warning" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.warning"></a>

```python
warning: SyntheticsMultilocationAlertConditionWarningOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference">SyntheticsMultilocationAlertConditionWarningOutputReference</a>

---

##### `critical_input`<sup>Optional</sup> <a name="critical_input" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.criticalInput"></a>

```python
critical_input: SyntheticsMultilocationAlertConditionCritical
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCritical">SyntheticsMultilocationAlertConditionCritical</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `entities_input`<sup>Optional</sup> <a name="entities_input" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.entitiesInput"></a>

```python
entities_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `policy_id_input`<sup>Optional</sup> <a name="policy_id_input" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.policyIdInput"></a>

```python
policy_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `runbook_url_input`<sup>Optional</sup> <a name="runbook_url_input" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.runbookUrlInput"></a>

```python
runbook_url_input: str
```

- *Type:* str

---

##### `violation_time_limit_seconds_input`<sup>Optional</sup> <a name="violation_time_limit_seconds_input" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.violationTimeLimitSecondsInput"></a>

```python
violation_time_limit_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `warning_input`<sup>Optional</sup> <a name="warning_input" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.warningInput"></a>

```python
warning_input: SyntheticsMultilocationAlertConditionWarning
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarning">SyntheticsMultilocationAlertConditionWarning</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `entities`<sup>Required</sup> <a name="entities" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.entities"></a>

```python
entities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.policyId"></a>

```python
policy_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `runbook_url`<sup>Required</sup> <a name="runbook_url" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.runbookUrl"></a>

```python
runbook_url: str
```

- *Type:* str

---

##### `violation_time_limit_seconds`<sup>Required</sup> <a name="violation_time_limit_seconds" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.violationTimeLimitSeconds"></a>

```python
violation_time_limit_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SyntheticsMultilocationAlertConditionConfig <a name="SyntheticsMultilocationAlertConditionConfig" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import synthetics_multilocation_alert_condition

syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  critical: SyntheticsMultilocationAlertConditionCritical,
  entities: typing.List[str],
  name: str,
  policy_id: typing.Union[int, float],
  enabled: bool | IResolvable = None,
  id: str = None,
  runbook_url: str = None,
  violation_time_limit_seconds: typing.Union[int, float] = None,
  warning: SyntheticsMultilocationAlertConditionWarning = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.critical">critical</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCritical">SyntheticsMultilocationAlertConditionCritical</a></code> | critical block. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.entities">entities</a></code> | <code>typing.List[str]</code> | The GUIDs of the Synthetics monitors to alert on. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.name">name</a></code> | <code>str</code> | The title of this condition. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.policyId">policy_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the policy where this condition will be used. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Set whether to enable the alert condition. Defaults to true. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/synthetics_multilocation_alert_condition#id SyntheticsMultilocationAlertCondition#id}. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.runbookUrl">runbook_url</a></code> | <code>str</code> | Runbook URL to display in notifications. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.violationTimeLimitSeconds">violation_time_limit_seconds</a></code> | <code>typing.Union[int, float]</code> | Sets a time limit, in seconds, that will automatically force-close a long-lasting incident after the time limit you select. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.warning">warning</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarning">SyntheticsMultilocationAlertConditionWarning</a></code> | warning block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `critical`<sup>Required</sup> <a name="critical" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.critical"></a>

```python
critical: SyntheticsMultilocationAlertConditionCritical
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCritical">SyntheticsMultilocationAlertConditionCritical</a>

critical block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/synthetics_multilocation_alert_condition#critical SyntheticsMultilocationAlertCondition#critical}

---

##### `entities`<sup>Required</sup> <a name="entities" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.entities"></a>

```python
entities: typing.List[str]
```

- *Type:* typing.List[str]

The GUIDs of the Synthetics monitors to alert on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/synthetics_multilocation_alert_condition#entities SyntheticsMultilocationAlertCondition#entities}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The title of this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/synthetics_multilocation_alert_condition#name SyntheticsMultilocationAlertCondition#name}

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.policyId"></a>

```python
policy_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ID of the policy where this condition will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/synthetics_multilocation_alert_condition#policy_id SyntheticsMultilocationAlertCondition#policy_id}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Set whether to enable the alert condition. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/synthetics_multilocation_alert_condition#enabled SyntheticsMultilocationAlertCondition#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/synthetics_multilocation_alert_condition#id SyntheticsMultilocationAlertCondition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `runbook_url`<sup>Optional</sup> <a name="runbook_url" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.runbookUrl"></a>

```python
runbook_url: str
```

- *Type:* str

Runbook URL to display in notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/synthetics_multilocation_alert_condition#runbook_url SyntheticsMultilocationAlertCondition#runbook_url}

---

##### `violation_time_limit_seconds`<sup>Optional</sup> <a name="violation_time_limit_seconds" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.violationTimeLimitSeconds"></a>

```python
violation_time_limit_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Sets a time limit, in seconds, that will automatically force-close a long-lasting incident after the time limit you select.

Must be in the range of 300 to 2592000 (inclusive)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/synthetics_multilocation_alert_condition#violation_time_limit_seconds SyntheticsMultilocationAlertCondition#violation_time_limit_seconds}

---

##### `warning`<sup>Optional</sup> <a name="warning" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.warning"></a>

```python
warning: SyntheticsMultilocationAlertConditionWarning
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarning">SyntheticsMultilocationAlertConditionWarning</a>

warning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/synthetics_multilocation_alert_condition#warning SyntheticsMultilocationAlertCondition#warning}

---

### SyntheticsMultilocationAlertConditionCritical <a name="SyntheticsMultilocationAlertConditionCritical" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCritical"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCritical.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import synthetics_multilocation_alert_condition

syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCritical(
  threshold: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCritical.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | The minimum number of monitor locations that must be concurrently failing before an incident is opened. |

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCritical.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum number of monitor locations that must be concurrently failing before an incident is opened.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/synthetics_multilocation_alert_condition#threshold SyntheticsMultilocationAlertCondition#threshold}

---

### SyntheticsMultilocationAlertConditionWarning <a name="SyntheticsMultilocationAlertConditionWarning" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarning.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import synthetics_multilocation_alert_condition

syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarning(
  threshold: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarning.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | The minimum number of monitor locations that must be concurrently failing before an incident is opened. |

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarning.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum number of monitor locations that must be concurrently failing before an incident is opened.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/synthetics_multilocation_alert_condition#threshold SyntheticsMultilocationAlertCondition#threshold}

---

## Classes <a name="Classes" id="Classes"></a>

### SyntheticsMultilocationAlertConditionCriticalOutputReference <a name="SyntheticsMultilocationAlertConditionCriticalOutputReference" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import synthetics_multilocation_alert_condition

syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.property.thresholdInput">threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCritical">SyntheticsMultilocationAlertConditionCritical</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.property.thresholdInput"></a>

```python
threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.property.internalValue"></a>

```python
internal_value: SyntheticsMultilocationAlertConditionCritical
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCritical">SyntheticsMultilocationAlertConditionCritical</a>

---


### SyntheticsMultilocationAlertConditionWarningOutputReference <a name="SyntheticsMultilocationAlertConditionWarningOutputReference" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import synthetics_multilocation_alert_condition

syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.property.thresholdInput">threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarning">SyntheticsMultilocationAlertConditionWarning</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.property.thresholdInput"></a>

```python
threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.property.internalValue"></a>

```python
internal_value: SyntheticsMultilocationAlertConditionWarning
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarning">SyntheticsMultilocationAlertConditionWarning</a>

---



